import os
from pathlib import Path


class SizeModification:
    def create_directory(self, size, DIRECTORY_PATH):
        for D in size:
            if D == 0:
                FOLDER_NAME = 'File Between 0-mb to 1-mb'
            elif D == 1048576:
                FOLDER_NAME = 'File Between 1-mb to  10-mb'
            elif D == 10485760:
                FOLDER_NAME = 'File Between 10-mb to  100-mb'
            elif D == 104857600:
                FOLDER_NAME = 'File Between 100-mb to  500-mb'
            elif D == 524288000:
                FOLDER_NAME = 'File Between 500-mb to  1GB'
            elif D == 1073741274:
                FOLDER_NAME = 'File bigger than 1GB'
            directories_path = os.path.join(DIRECTORY_PATH, FOLDER_NAME)
            directories_path = Path(directories_path)
            directories_path.mkdir(exist_ok=True)

    def size_calculation(self, ALL_FILES, DIRECTORY_PATH, sizer):
        for FILES in ALL_FILES:
            file_path = Path(FILES)
            PATH = (os.path.join(DIRECTORY_PATH, FILES))
            SIZE_OF_CURRENT_FILE = (os.path.getsize(PATH))
            old_path = os.path.join(DIRECTORY_PATH, file_path)
            sizer.append([SIZE_OF_CURRENT_FILE, old_path, FILES])

    def transfer(self, sizer, DIRECTORY_PATH):
        for SIZE_OF_FILE, OLD_PATH_CURRENT_FILE, FILES_NAME in sizer:
            isFile = os.path.isdir(OLD_PATH_CURRENT_FILE)
            if isFile:
                continue
            if SIZE_OF_FILE >= 0 and SIZE_OF_FILE < 1048576:
                FOLDER_NAME = 'File Between 0-mb to 1-mb'
                x = os.path.join(DIRECTORY_PATH, FOLDER_NAME, FILES_NAME)
                new_path = x
                os.rename(OLD_PATH_CURRENT_FILE, new_path)
            elif SIZE_OF_FILE >= 1048576 and SIZE_OF_FILE < 10485760:
                FOLDER_NAME = 'File Between 1-mb to  10-mb'
                x = os.path.join(DIRECTORY_PATH, FOLDER_NAME, FILES_NAME)
                new_path = x
                os.rename(OLD_PATH_CURRENT_FILE, new_path)

            elif SIZE_OF_FILE >= 10485760 and SIZE_OF_FILE < 104857600:
                FOLDER_NAME = 'File Between 10-mb to  100-mb'
                x = os.path.join(DIRECTORY_PATH, FOLDER_NAME, FILES_NAME)
                new_path = x
                os.rename(OLD_PATH_CURRENT_FILE, new_path)

            elif SIZE_OF_FILE >= 104857600 and SIZE_OF_FILE < 524288000:
                FOLDER_NAME = 'File Between 100-mb to  500-mb'
                x = os.path.join(DIRECTORY_PATH, FOLDER_NAME, FILES_NAME)
                new_path = x
                os.rename(OLD_PATH_CURRENT_FILE, new_path)

            elif SIZE_OF_FILE >= 524288000 and SIZE_OF_FILE < 1073741274:
                FOLDER_NAME = 'File Between 500-mb to  1GB'
                x = os.path.join(DIRECTORY_PATH, FOLDER_NAME, FILES_NAME)
                new_path = x
                os.rename(OLD_PATH_CURRENT_FILE, new_path)

            else:
                FOLDER_NAME = 'File bigger than 1GB'
                x = os.path.join(DIRECTORY_PATH, FOLDER_NAME, FILES_NAME)
                new_path = x
                os.rename(OLD_PATH_CURRENT_FILE, new_path)

    def extrafolder(self, DIRECTORY_PATH):
        folders = list(os.walk(DIRECTORY_PATH))[1:]
        for folder in folders:
            if not folder[2]:
                os.rmdir(folder[0])


def SIZEORGANISER(DIRECTORY_PATH):
    ALL_FILES = os.listdir(DIRECTORY_PATH)
    sizer = []
    size = [0, 1048576, 10485760, 104857600, 524288000, 1073741274]

    obj = SizeModification()
    obj.create_directory(size, DIRECTORY_PATH)
    obj.size_calculation(ALL_FILES, DIRECTORY_PATH, sizer)
    obj.transfer(sizer, DIRECTORY_PATH)
    obj.extrafolder(DIRECTORY_PATH)
