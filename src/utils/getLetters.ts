import { TClub } from "@/constants";
import { ILetter } from "@/types";
import { chooseInitLetters } from "./chooseInitLetters";
import { completeLetters } from "./completeLetters";
import { mixLetters } from "./mixLetters";
import { addSymbols } from "./addSymbols";
import { mapLetters } from "./mapLetters";
import { composeArrayLike } from "./compose";

export const getLetters = composeArrayLike<[TClub[], string[]], ILetter[]>(
    mapLetters,
    addSymbols,
    mixLetters,
    completeLetters,
    chooseInitLetters,
)
