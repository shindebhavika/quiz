import { createSlice } from '@reduxjs/toolkit';

const questionsSlice = createSlice({
  name: 'questions',
  initialState: [],
  reducers: {
    addQuestion: (state, action) => {
      state.push(action.payload);
   
    },
    clearQuestions: (state) => {
      state.length = 0;
    },
  },
});

export const { addQuestion, clearQuestions } = questionsSlice.actions;

export default questionsSlice;
