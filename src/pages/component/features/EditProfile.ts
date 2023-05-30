import { createSlice } from "@reduxjs/toolkit";

const editSlice = createSlice({
  name: "edit",
  initialState: {
    // 初期状態の定義
    edit: false,
  },
  reducers: {
    openEdit: (state) => {
      return {
        ...state,
        edit: !state.edit,
      };
    },
  },
});
export const { openEdit } = editSlice.actions;
export default editSlice.reducer;
