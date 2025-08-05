import { lettersAmount, clubsAmount, TClub } from "@/constants"
import { getClub } from "./getClub";
import { getRandomNum } from "./getRandomNum";

export const chooseInitLetters = (remainedClubs: TClub[]): string[] => {
    const maxSize = lettersAmount;
    let currentLen = 0;
    const chosenLetters: string[] = [];
    const indexesHistory = new Set<number>();

    while(true) {
        let index = getRandomNum(0, clubsAmount);

        while(indexesHistory.has(index)) {
            index = getRandomNum(0, clubsAmount);
        }

        indexesHistory.add(index);
        const clubRaw = remainedClubs[index];
        const club = getClub(clubRaw);
        
        if (currentLen + club.length > maxSize) {
            break;
        }
                
        console.log(club);
        currentLen += club.length;

        chosenLetters.push(...club);
    }

    return chosenLetters;
}