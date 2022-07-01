import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  signedin: null,
  diary: [],
  bestDiary: [],
};

const Globalstate = createSlice({
  initialState,
  name: "diaryAuth",
  reducers: {
    createUser: (state, { payload }) => {
      state.signedin = payload;
    },
    addcontent: (state, { payload }) => {
      state.diary = payload;
    },
    addBestDiary: (state, { payload }) => {
      const data = state.bestDiary.findIndex((el) => el.id === payload.id);
      if (data > 0) {
        state.bestDiary[data].Numb += 1;
      } else {
        state.bestDiary.push({ ...payload, Numb: 1 });
      }
    },
    signOut: (state) => {
      state.signedin = null;
    },
    removeBestDiary: (state, { payload }) => {
      state.bestDiary = state.bestDiary.filter((el) => el.id !== payload.id);
    },
  },
});

export const {
  createUser,
  addcontent,
  signOut,
  addBestDiary,
  removeBestDiary,
} = Globalstate.actions;

export default Globalstate.reducer;
