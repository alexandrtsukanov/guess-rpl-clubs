import { clubsToGuess, clubs, lettersAmount, TClub } from "@/constants"
import { getClub } from "./getClub";

const getRandomNum = (min: number, max: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

export const chooseInitLetters = (remainedClubs: Set<TClub>): string[] => {
    const maxSize = lettersAmount;
    let currentLen = 0;
    const chosenLetters: string[] = [];
    const indexesHistory = new Set<number>();
    const clubs = [...remainedClubs];

    while(true) {
        let index = getRandomNum(0, maxSize);

        while(indexesHistory.has(index)) {
            index = getRandomNum(0, maxSize);
        }

        indexesHistory.add(index);
        const club = clubs[index];
        currentLen += getClub(club).length;

        if (currentLen > maxSize) {
            break;
        }

        chosenLetters.push(...club);
    }

    
    return chosenLetters;
}