import { configureStore } from "@reduxjs/toolkit"

import questionsSlice from "./questionsSlice"

const StorageManger = configureStore({
  reducer: {
    questions: questionsSlice.reducer,
   
  }
})

export default StorageManger