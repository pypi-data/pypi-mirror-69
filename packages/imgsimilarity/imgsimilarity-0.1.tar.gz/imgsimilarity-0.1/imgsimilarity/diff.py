import csv
import os
import sys
import time

import dhash
from PIL import Image

"""
imgsimilarity main module
This is Module reads the csv file and process the images and determines similarity score. Finally a cv file is generated.
"""


def diff(h1, h2):
    """
    This method uses dhash.get_num_bits_different to find the difference
    :param h1:
    :param h2:
    :return:
    """
    return dhash.get_num_bits_different(h1, h2)


def processImage(csvfile):
    """
    This function passes messages to computeScore and diff functions to generate th result list with all the parameters.
    It maintains a dictionary to save the hashes that are generated.

    :param csvfile:
    :return results:
    """
    results = []
    start_time = 0
    dictHash = dict()
    for row in csvfile:
        if row.__len__():
            start_time = time.process_time()
            score = computeScore(dictHash, row)
            results.append([row[0], row[1], score, round(time.process_time() - start_time, 3)])
    return results


def computeScore(dictHash, row):
    """
    This function uses dhash module methods t0 generate hashes and compute the difference
    :param dictHash:
    :param row:
    :return score:
    """
    if row[0] not in dictHash.keys():
        dictHash[row[0]] = dhash.dhash_int(Image.open(row[0]))
    if row[1] not in dictHash.keys():
        dictHash[row[1]] = dhash.dhash_int(Image.open(row[1]))
    difference = diff(dictHash[row[0]], dictHash[row[1]])
    score = round((difference / (8 * 8 * 2)), 2)
    return score


def main(argvs):
    if (argvs.__len__() <= 1):
        sys.exit(
            "Error-> That looks like a wrong file format. The supported file formats are csv and txt with the data in the format of image1,image2")
    if (argvs[1].endswith(('.csv', '.txt'))):
        with open(argvs[1], encoding='utf-8-sig') as file:
            csvfile = csv.reader(file)
            result = processImage(csvfile)
            file.close()
        with open("comparison_result.csv", 'w', newline='') as newfile:
            thewriter = csv.writer(newfile)
            for i in range(0, result.__len__()):
                thewriter.writerow(result[i])
            print(
                "\n The results of similarity can be found at " + os.getcwd() + "\\comparison_result.csv\n" + " The data is in the format of \"image1,image2,score,elapsed\"")
            newfile.close()
    else:
        sys.exit("Error-> That looks like a wrong file format. The supported file formats are csv and txt.")


if __name__ == '__main__':
    main(sys.argv)
