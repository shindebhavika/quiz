import { configureStore } from "@reduxjs/toolkit"

import questionsSlice from "./questionsSlice"

const StorageManger = configureStore({
  reducer: {
    questions: questionsSlice.reducer,
    // fetchStatus: fetchStatusSlice.reducer,
    // bag: bagSlice.reducer
  }
})

export default StorageManger