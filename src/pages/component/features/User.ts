import { createSlice } from "@reduxjs/toolkit";
export interface InitialState {
  displayName: string | null;
  photoURL: string;
  uid: string;
  userIntro: string;
  follow: [];
  follower: [];
  post: [];
  bookMark: [];
  team: string;
}
const initialState: InitialState = {
  displayName: null,
  photoURL: "",
  uid: "",
  userIntro: "",
  follow: [],
  follower: [],
  post: [],
  bookMark: [],
  team: "",
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      const { displayName, photoURL, uid } = action.payload;
      state.photoURL = photoURL;
      state.displayName = displayName;
      state.uid = uid;
    },
    logout: (state) => {
      state.photoURL = "";
      state.displayName = "";
      state.userIntro = "";
      state.follow = [];
      state.follower = [];
      state.post = [];
      state.bookMark = [];
      state.team = "";
      state.uid = "";
    },
    fetchUser: (state, action) => {
      const {
        displayName,
        photoURL,
        uid,
        userIntro,
        follow,
        follower,
        post,
        bookMark,
        team,
      } = action.payload;
      state.photoURL = photoURL;
      state.displayName = displayName;
      state.userIntro = userIntro;
      state.follow = follow;
      state.follower = follower;
      state.post = post;
      state.bookMark = bookMark;
      state.team = team;
      state.uid = uid;
    },
    editProfile: (state, action) => {
      switch (action.payload.type) {
        case "TEAM_NAME": {
          return {
            ...state,
            team: action.payload.payload,
          };
        }
        case "USER_INTRO": {
          return {
            ...state,
            userIntro: action.payload.payload,
          };
        }
        default:
          return state;
      }
    },
  },
});
export const { login, editProfile, fetchUser, logout } = userSlice.actions;
export default userSlice.reducer;
