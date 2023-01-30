import { createSlice } from '@reduxjs/toolkit';

interface tokens {
    data: {
        tokens: {
            access: any;
            refresh: any;
        };
    };
}
interface UsersState {
    entities: tokens | any;
    loading: 'idle' | 'pending' | 'succeeded' | 'failed';
    currentRequestId: number | undefined;
    error: any[] | undefined;
    status?: number;
    tempToken?: any | undefined;
    refreshCounter?: boolean | undefined;
}

const initialState = {
    loading: 'idle',
    entities: undefined,
    currentRequestId: undefined,
    error: undefined,
    status: 0,
    refreshCounter: false,
} as UsersState;
const headers = {     
    headers: {  MemberId: 5843 }
}

export const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducers: {
        resetAction: () => {
            return initialState;
        },
    },
});
