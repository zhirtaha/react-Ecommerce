import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
};

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
      
  },
});

export const {} = UserSlice.actions;
export default UserSlice.reducer;
