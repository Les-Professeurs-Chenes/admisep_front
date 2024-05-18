// user redux store

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../../redux/store';

export interface UserState {
    user: {
        id: string;
        name: string;
        email: string;
        role: string;
        token: string;
    };
}

const initialState: UserState = {
    user: {
        id: '',
        name: '',
        email: '',
        role: '',
        token: '',
    },
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (
            state: UserState, action: PayloadAction<UserState['user']>) => {
            state.user = action.payload;
        }
    },
});

export const { setUser } = userSlice.actions;

export const selectUser = () => RootState.user.user;

export default userSlice.reducer;
