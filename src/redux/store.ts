import { IUi, IUser } from '@/models';
import { configureStore } from '@reduxjs/toolkit';
import { uiSlice, userSlice } from './slices';

export interface IAppStore {
    user: IUser,
    ui: IUi
}

export const store = configureStore<IAppStore>({
    reducer:{
        user: userSlice.reducer,
        ui: uiSlice.reducer
    }
});

export type AppDispatch = typeof store.dispatch;