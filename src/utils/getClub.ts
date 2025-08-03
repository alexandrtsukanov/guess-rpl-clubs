import { TClub, divider } from "@/constants";

export const getClub = (club: TClub) =>
    club.includes(divider)
        ? club.split(divider)[0].toLowerCase()
        : club.toLowerCase();
