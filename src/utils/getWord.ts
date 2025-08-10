import { ILetter } from "@/types";

export const getWord = (letters: ILetter[]) => letters
    .map(letter => letter.title)
    .join('')
    .trim();
