from Checker import main
from JunkFileOrganiser import Dictionary


class Execution:
    def __init__(self, path, y):
        self.DIRECTORY_PATH = path
        self.SOURCE_PATH = path
        self.Y = y
        if y >= 5:
            print("Enter the Valid Choice")
            return
        main(self.SOURCE_PATH, self.DIRECTORY_PATH)

    def Run(self):
        if self.Y >= 4:
            return
        Dictionary(self.DIRECTORY_PATH, self.Y)


if __name__ == "__main__":
    while True:
        print("\nSelect 1 for organise file with extension\n")
        print("Select 2 for organise file with dates\n")
        print("Select 3 for organise file with size\n")
        print("Select 4 for to convert organise file into zunk file\n")
        print("If you  done with modificaticon just press enter\n")
        X = input("ENTER THE PATH\n")
        X = r''+X+'\\'
        if len(X) == 1:
            break
        Y = int(input("Enter The Choice\n"))
        obj = Execution(X, Y)
        obj.Run()
