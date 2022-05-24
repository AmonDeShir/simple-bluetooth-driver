import { createSlice } from '@reduxjs/toolkit'

export type NavigationState = {
  page: 'auth' | 'app'
}

const initialState: NavigationState = {
  page: 'auth'
}

const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    openAppPage: (state) => {
      state.page = 'app'
    },

    openAuthPage: (state) => {
      state.page = 'auth'
    }
  },
})

export const navigationReducer = navigationSlice.reducer;
export const { openAppPage, openAuthPage } = navigationSlice.actions;
