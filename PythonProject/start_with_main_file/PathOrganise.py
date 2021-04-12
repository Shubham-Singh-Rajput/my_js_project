import os
from pathlib import Path


class PathOrganise:
    def extension(self, DIRECTORY_PATH, File_extension, ALL_FILES):
        for FILES in ALL_FILES:
            file_path = Path(FILES)
            REMOVIND_DOT = file_path.suffix.lower()
            REMOVIND_DOT = REMOVIND_DOT[1::]
            File_extension.append(REMOVIND_DOT)

    def directoryCreation(self, File_extension, DIRECTORY_PATH):
        for D in File_extension:
            directories_path = os.path.join(DIRECTORY_PATH, D)
            directories_path = Path(directories_path)
            directories_path.mkdir(exist_ok=True)

    def movers(self, ALL_FILES, DIRECTORY_PATH):
        for FILES in ALL_FILES:
            file_path = Path(FILES)
            EXTENSION = file_path.suffix.lower()
            EXTENSION = EXTENSION[1::]
            old_path = os.path.join(DIRECTORY_PATH, file_path)
            new_path = os.path.join(DIRECTORY_PATH, EXTENSION, FILES)
            os.rename(old_path, new_path)

    def extrafolder(self, DIRECTORY_PATH):
        folders = list(os.walk(DIRECTORY_PATH))[1:]
        for folder in folders:
            if not folder[2]:
                os.rmdir(folder[0])


def PATHORGANISERS(DIRECTORY_PATH):
    ALL_FILES = os.listdir(DIRECTORY_PATH)
    File_extension = []
    obj = PathOrganise()
    obj.extension(DIRECTORY_PATH, File_extension, ALL_FILES)
    obj.directoryCreation(File_extension, DIRECTORY_PATH)
    obj.movers(ALL_FILES, DIRECTORY_PATH)
    obj.extrafolder(DIRECTORY_PATH)
