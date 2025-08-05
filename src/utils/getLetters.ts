import { TClub } from "@/constants";
import { ILetter } from "@/types";
import { chooseInitLetters } from "./chooseInitLetters";
import { completeLetters } from "./completeLetters";
import { mixLetters } from "./mixLetters";
import { addSymbols } from "./addSymbols";
import { mapLetters } from "./mapLetters";
import { groupLetters } from "./groupLetters";

export const getLetters = (clubs: TClub[]): ILetter[] => {
    return mapLetters(
            addSymbols(
                mixLetters(
                    completeLetters(
                        chooseInitLetters(clubs)
                    )
                )
            )
        )
}
