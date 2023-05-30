import { configureStore, createSelector } from "@reduxjs/toolkit";
import userSlice from "./pages/component/features/User";
import editSlice from "./pages/component/features/EditProfile";
import postSlice from "./pages/component/features/Postdata";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
export const store = configureStore({
  reducer: {
    user: userSlice,
    edit: editSlice,
    post: postSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
