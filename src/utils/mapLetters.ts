import { cross, space } from "@/constants"
import { ILetter } from "@/types";

export const mapLetters = (letters: string[]): ILetter[] =>
    letters.map((letter, index) => ({
        title: letter,
        id: index,
        isSpace: letter === space,
        isCross: letter === cross,
        isClicked: false,
    }));
