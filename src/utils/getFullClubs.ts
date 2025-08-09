import { TClub } from "@/constants";

const clubMap: Partial<Record<TClub, string[]>> = {
    'ДИНАМО': [
        'ДИНАМО-МАХАЧКАЛА',
        'ДИНАМО-МОСКВА',
        'ДИНАМО-СТАВРОПОЛЬ',
    ],
    'СПАРТАК': [
        'СПАРТАК-МОСКВА',
        'СПАРТАК-НАЛЬЧИК',
    ],
    'ЛОКОМОТИВ': [
        'ЛОКОМОТИВ',
        'ЛОКОМОТИВ-НИЖНИЙ НОВГОРОД',
    ],
    'СКА': [
        'СКА-ХАБАРОВСК',
    ],
}

export const getFullClubs = (club: TClub): string[] => {
    if (clubMap[club]) {
        return clubMap[club] ?? [];
    }

    return [club];
}
