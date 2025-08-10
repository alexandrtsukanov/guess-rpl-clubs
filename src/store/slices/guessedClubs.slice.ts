import {PayloadAction, createSlice} from 'mobx-flux'
import { getFullClubs } from '@/utils';
import { TClub } from '@/constants';

type TGuessedClubsState = {
    guessedClubs: Set<string>;
    guessedClubsList: string[];
}
const initialState: TGuessedClubsState = {
    guessedClubs: new Set<string>(),
    guessedClubsList: [],
};

export const guessedClubsSlice = createSlice({
    name: 'guessedClubs',
    initialState,
    reducers: {
        addGuessedClub(state: TGuessedClubsState, action: PayloadAction<string>) {
            state.guessedClubs.add(action.payload);

            const clubs = [...state.guessedClubs] as TClub[];
            state.guessedClubsList = clubs.reduce((allClubs: string[], club) => [...allClubs, ...getFullClubs(club)], []);
        }
    }
});

export const { addGuessedClub } = guessedClubsSlice.actions;
