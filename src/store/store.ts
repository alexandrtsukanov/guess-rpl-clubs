import { createGlobalObservable, useLocalObservable } from 'mobx-vue-lite';
import { action, makeAutoObservable, makeObservable, observable } from 'mobx';
import { InjectionKey, markRaw } from 'vue';
import {PayloadAction, configureStore, createSlice} from 'mobx-flux'
import { useDispatch, TypedUseSelectorHook, useSelector } from 'mobx-flux-vue'
import { getFullClubs } from '@/utils';
import { TClub } from '@/constants';
import { guessedClubsSlice } from './slices';

export const useGlobalObservable = createGlobalObservable(() => {
    return useLocalObservable(() => ({
        guessedClubs: new Set<string>(),
        addGuessedClub(club: string) {
            this.guessedClubs.add(club);
        }
    }))
})

export const state = useLocalObservable(() => ({
    guessedClubs: observable(new Set<string>()),
    count: 0,
    increment() {
        this.count += 1;
    },
    addGuessedClub(club: string) {
        this.guessedClubs.add(club)
    }
}))

export const store = useGlobalObservable();

class Store {
    guessedClubs = new Set<string>();

    constructor() {
        // makeObservable(this, {
        //     guessedClubs: observable,
        //     addGuessedClub: action,
        // });
        makeAutoObservable(this);
        // this.guessedClubs = new Set<string>();
    }

    addGuessedClub(club: string) {
        console.log('CALL!!!');
        this.guessedClubs.add(club);
        console.log('CALL=>', this.guessedClubs);
    }
}

export const store2 = new Store(); 

// -- //

// export const store3 = configureStore({
//     reducer: {
//         guessedClubs: guessedClubsSlice.reducer,
//     }
// })

// export type RootState = ReturnType<typeof store3.getState>;
// export type AppDispatch = typeof store3.dispatch;

// export const useAppDispatch = useDispatch<AppDispatch>();
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// export const key: InjectionKey<Store> = Symbol('key');
