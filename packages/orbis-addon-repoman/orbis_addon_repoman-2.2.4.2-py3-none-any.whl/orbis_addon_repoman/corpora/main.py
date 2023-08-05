# -*- coding: utf-8 -*-

from urllib.request import urlretrieve
import importlib
import os
import pathlib
import shutil
from datetime import datetime

from orbis_eval.config import paths
from orbis_eval.libs.decorators import clear_screen
from orbis_eval.libs.config import load_config

import tkinter as tk
from tkinter import filedialog

import logging
logger = logging.getLogger(__name__)


class Main(object):
    """docstring for Main"""

    def __init__(self, addon_path):
        super(Main, self).__init__()
        self.addon_path = addon_path
        self.config = load_config([f"{self.addon_path}/sources.yaml"])[0]
        self.available_corpora = {}
        self.choice = {}
        self.selection = None

    def fetch_available(self):
        for file_format in self.config['corpora']:
            for source in self.config['corpora'][file_format]:
                module_path = f"orbis_addon_repoman.corpora.{source}.main"
                imported_module = importlib.import_module(module_path)
                corpora = imported_module.list_available_corpora(self.config)
                self.available_corpora[source] = corpora

    @clear_screen()
    def select(self):
        print("Please select the corpus you want to download:")

        counter = 0
        for source, item in self.available_corpora.items():
            source_hash = len(source) * "#"
            print(f"\n{source}\n{source_hash}")

            for corpus in self.available_corpora[source]:
                print(f'[{counter}]:\t {corpus[0]} ({corpus[2]})')
                self.choice[counter] = *corpus, source
                counter += 1

        print(f'[{counter}]:\t Load local corpus file')
        self.choice[counter] = ("local", None, "nif", "local")

        self.selection = int(input("Selection: "))

    def down_and_load(self):

        action = "load" if self.choice[self.selection][0] == "local" else "download"

        if action == "load":
            file_destination, corpus_dir, file_name = self.load()
        else:
            file_destination, corpus_dir, file_name, corpus_url, download_time = self.download()

        if file_destination:
            module_path = f"orbis_addon_repoman.format.{self.choice[self.selection][2]}.main"
            # print(f">>>>>>> {module_path}")
            imported_module = importlib.import_module(module_path)
            # print(*self.choice[self.selection])
            imported_module.run(file_destination, corpus_dir, file_name, corpus_url, download_time)

    def source_exists(self, corpus_dir):
        if pathlib.Path(corpus_dir).is_dir():
            print(f"Corpus might exist already. A folder with the same name has been found: {corpus_dir}")
            overwrite = input("Do you want to overwrite it? (Y/n) ")
            if overwrite not in ["Y", "y", ""]:
                print("Download canceled.")
                return True
        return False

    def download(self):

        corpus_url = self.choice[self.selection][1]
        download_name = corpus_url.split("/")[-1].split(".")[0]
        corpus_dir = os.path.join(paths.corpora_dir, download_name.lower())

        if not self.source_exists(corpus_dir):
            pathlib.Path(corpus_dir).mkdir(parents=True, exist_ok=True)
            download_name = corpus_url.split("/")[-1].split(".")[0]
            download_filetype = corpus_url.split("/")[-1].split(".")[-1]
            download_destination = os.path.join(corpus_dir, "source")
            pathlib.Path(download_destination).mkdir(parents=True, exist_ok=True)
            download_destination = os.path.join(download_destination, f"{download_name}.{download_filetype}")
            urlretrieve(corpus_url, download_destination)
            download_time = datetime.now()

            return download_destination, corpus_dir, download_name, corpus_url, download_time
        return False

    def ask_for_format(self):
        module_path = f"orbis_addon_repoman.format"
        format_list = os.listdir(module_path)
        print("What's the format of the corpus?")

        for idx, format_name in enumerate(format_list):
            space = 5 - len(str(idx))
            print(f"[{idx}]{space * ' '}{format_name}")

        selected_format = int(input("\nPlease select format: "))

        return format_list[selected_format]

    def load(self):

        root = tk.Tk()
        root.withdraw()

        file_path = filedialog.askopenfilename(
            initialdir=pathlib.Path.home() / 'Data' / 'Orbis' / 'data' / 'corpora' / 'VoxEL',
            title="Select file",
            filetypes=(
                ("ttl files", "*.ttl"),
                ("all files", "*.*")
            )
        )

        # file_path = input("Please enter path to corpus file: ")
        file_name = ".".join(file_path.split("/")[-1].split(".")[:-1])

        print(f"file_name: {file_name}")
        file_name_ok = input(f'Is the corpus called "{file_name}"? (Y/n) ')
        while file_name_ok not in ["Y", "y", ""]:
            file_name = input("Please enter corpus name: ")
            file_name_ok = input(f"Is the corpus name {file_name} ok? (Y/n) ")

        corpus_dir = os.path.join(paths.corpora_dir, file_name.lower())
        if not self.source_exists(corpus_dir):

            pathlib.Path(corpus_dir).mkdir(parents=True, exist_ok=True)
            file_filetype = file_path.split("/")[-1].split(".")[-1]

            file_destination = os.path.join(corpus_dir, "source")
            pathlib.Path(file_destination).mkdir(parents=True, exist_ok=True)
            file_destination = os.path.join(file_destination, f"{file_name}.{file_filetype}")
            print(f"file_path: {file_path}")
            print(f"file_destination: {file_destination}")

            shutil.copy(str(file_path), str(file_destination))

            return file_destination, corpus_dir, file_name
        return False

    def run(self):
        self.fetch_available()
        self.select()
        self.down_and_load()
