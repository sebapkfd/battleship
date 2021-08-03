import { createSlice } from '@reduxjs/toolkit';
import Game from '../factories/Game';

const initialState = Game();

const GameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {

    }
})

// export const {  } = GameSlice.actions;

export default GameSlice.reducer;

