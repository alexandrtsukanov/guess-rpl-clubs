import { rowLen } from "@/constants";
import { ILetter } from "@/types";

export const groupLetters = (letters: ILetter[]) => {
    const result: ILetter[][] = [];

    let subArray: ILetter[] = [];

    letters.forEach((letter) => {
        subArray.push(letter);

        if (subArray.length === rowLen) {
            result.push(subArray);
            subArray = [];
        }
    })
    
    result.push(subArray);

    return result;
}
