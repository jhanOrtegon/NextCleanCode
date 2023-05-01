import { ICreateUser, UserEmptyState } from '@/models';
import { createSlice, PayloadAction} from '@reduxjs/toolkit';


export const userSlice = createSlice({
    name: 'user',
    initialState: UserEmptyState ,
    reducers: {
        createUser: (state, { payload }:PayloadAction<ICreateUser> ) => {
            return payload;
        }
    }
});

export const { createUser } = userSlice.actions;    