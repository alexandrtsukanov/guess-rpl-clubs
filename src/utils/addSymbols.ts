import { cross, space, spacePosition } from "@/constants";

export const addSymbols = (letters: string[]) => {
    letters.splice(spacePosition, 0, space);
    letters.push(cross);

    return letters;
}
