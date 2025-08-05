import { abcEnd, abcStart, lettersAmount } from "@/constants";
import { getRandomNum } from "./getRandomNum";

const getRandomLetter = () => {
    return String.fromCodePoint(getRandomNum(abcStart, abcEnd));
}

export const completeLetters = (letters: string[]) => {
    const differArr = [];

    for (let i = 0; i < lettersAmount - letters.length; i += 1) {
        differArr.push(getRandomLetter());
    }

    letters.push(...differArr)

    return letters;
}
