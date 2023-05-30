import { createSlice } from "@reduxjs/toolkit";
export interface TimeSepa {
  title: string;
  content: string;
  time?: string;
  img?: string;
}
export interface PostState {
  postedUser: string;
  postedUid: string;
  postedImg: string;
  title: string;
  weather: string;
  result: string;
  resultScore: string;
  place: string;
  slug: any[];
  TimeSeparator: TimeSepa[];
  postid: string | null | undefined;
}
const initialState: PostState = {
  postedUser: "",
  postedUid: "",
  postedImg: "",
  title: "",
  weather: "",
  result: "",
  resultScore: "",
  place: "",
  slug: [],
  TimeSeparator: [],
  postid: null,
};
const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    pushPost: (state, action) => {
      console.log(action);
      return {
        ...state,
        postedUser: action.payload.payload.postedUser,
        postedUid: action.payload.payload.postedUid,
        postedImg: action.payload.payload.postedImg,
        postid: action.payload.payload.postid,
      };
    },
    createPost: (state, action) => {
      switch (action.payload.type) {
        case "GAME_PLACE": {
          return {
            ...state,
            place: action.payload.payload,
          };
        }
        case "GAME_RESULT": {
          return {
            ...state,
            result: action.payload.payload,
          };
        }
        case "WEATHER": {
          return {
            ...state,
            weather: action.payload.payload,
          };
        }
        case "GAME_SCORE": {
          return {
            ...state,
            resultScore: action.payload.payload,
          };
        }
        case "TRAVEL_TITLE": {
          return {
            ...state,
            title: action.payload.payload,
          };
        }
        case "SLUG": {
          return {
            ...state,
            slug: [...state.slug, action.payload.payload],
          };
        }
        case "ADD_POSTID": {
          return {
            ...state,
            postid: action.payload.payload,
          };
        }
        case "CLEAR": {
          return {
            ...state,
            postedUser: "",
            postedUid: "",
            title: action.payload.payload.title,
            weather: action.payload.weather,
            result: action.payload.payload.result,
            resultScore: action.payload.payload.resultScore,
            place: action.payload.payload.place,
            slug: action.payload.payload.slug,
            TimeSeparator: action.payload.payload.TimeSeparator,
          };
        }
        default:
          return state;
      }
    },
    createAlubm: (state, action) => {
      switch (action.payload.type) {
        case "ADD_ITEM": {
          const newItem = {
            title: action.payload.payload.title,
            content: action.payload.payload.content,
            time: "",
            img: "",
          };
          return {
            ...state,
            TimeSeparator: [...state.TimeSeparator, newItem],
          };
        }
        default:
          return state;
      }
    },
  },
});
export const { createPost, createAlubm, pushPost } = postSlice.actions;
export default postSlice.reducer;
