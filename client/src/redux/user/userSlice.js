import { CreateSlice, createSlice} from '@reduxjs/toolkit';

const initialState = {
    currentUser:null,
    loading:false,
    error:false,
};

const userSilce = createSlice({
    name:'user',
    initialState,
    reducers:{
        signInStart:(state)=>{
            state.loading = true;
        },
        signInSuccess:(state,action)=>{
            state.currentUser = action.payload;
            state.loading = false;
            state.error = false;
        },
        signInFailure:(state,action)=>{
            state.loading = true;
            state.error = action.payload;
        }
    }
});

export const {signInStart, signInFailure, signInSuccess} = userSilce.actions;

export default userSilce.reducer;