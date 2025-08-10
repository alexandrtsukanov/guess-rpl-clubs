import { lettersAmount, TClub } from "@/constants"
import { getRandomNum } from "./getRandomNum";

export const chooseInitLetters = (remainedClubs: TClub[], currentClubs: string[] = []): string[] => {
    const maxSize = lettersAmount;
    let currentLen = 0;
    const chosenLetters: string[] = [];
    const indexesHistory = new Set<number>();

    while(true) {
        let index = getRandomNum(0, remainedClubs.length);

        while(indexesHistory.has(index)) {
            index = getRandomNum(0, remainedClubs.length);
        }

        indexesHistory.add(index);
        const clubRaw = remainedClubs[index];
        const club = clubRaw.replace(/\s/g, '');
        
        if (currentLen + club.length > maxSize) {
            break;
        }

        currentClubs.push(clubRaw);
        currentLen += club.length;

        chosenLetters.push(...club);
    }

    return chosenLetters;
}
