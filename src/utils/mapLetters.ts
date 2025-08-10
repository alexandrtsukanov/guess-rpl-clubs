import { cross, space } from "@/constants"
import { ILetter } from "@/types";

export const mapLetters = (letters: string[]): ILetter[] =>
    letters.map((letter) => ({
        title: letter,
        id: Math.random().toString().slice(2, 7),
        isSpace: letter === space,
        isCross: letter === cross,
        isSelected: false,
        isGone: false,
        isHinted: false,
    }));
