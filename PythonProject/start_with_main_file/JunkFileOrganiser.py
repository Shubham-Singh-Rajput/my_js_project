from PathOrganise import PATHORGANISERS
from Timeandate import DATESANDTIMES
from SizeModification import SIZEORGANISER
import os


class JunkFileOrganiser:
    def __init__(self):
        self.DIRECTORY_PATH = 'C:\\Users\\Mau\\Desktop\\testing'+'\\'
        self.SOURCE_PATH = r'C:\Users\Mau\Desktop\testing'+'\\'

    def extension(self, x):
        PATHORGANISERS(x)

    def DATES(self, x):
        DATESANDTIMES(x)

    def SIZE(self, x):
        SIZEORGANISER(x)


def Dictionary(X, Y):
    d = {1: "ORGANISE BY Extension\n",
         2: "ORGANISE BY DATE\n",
         3: "ORGANISE BY SIZE\n"}
    if len(X) == 1 or len(X) == 0:
        return
    if not os.path.exists(X):
        return
    inputTakerr(X, Y)
    print(d[Y])


def inputTakerr(X, Y):
    obj = JunkFileOrganiser()
    if Y == 1:
        obj.extension(X)
    if Y == 2:
        obj.DATES(X)
    if Y == 3:
        obj.SIZE(X)
    if Y > 3:
        print("Invalid Choice")
