//import { LOAD_ALL_VIDEOS, LOADING, ERROR } from "./actions";
import {
  LOAD_ALL_VIDEOS,
  LOADING,
  ERROR,
  FILTER_BY_CATEGORY,
  GET_LIKED_VIDEOS,
  LIKE_VIDEO,
  DISLIKE_VIDEO,
  GET_HISTORY,
  ADD_VIDEO_TO_HISTORY,
  DELETE_VIDEO_FROM_HISTORY,
  CLEAR_HISTORY,
  GET_WATCH_LATER,
  ADD_VIDEO_TO_WATCH_LATER,
  DELETE_VIDEO_FROM_WATCH_LATER,
  FILTER_BY_SEARCH,
  ADD_NOTE,
  DELETE_NOTE,
  GET_NOTE,
} from "./actions";
export const videoReducer = (state, { type, payload }) => {
  switch (type) {
    case LOADING:
      return { ...state, loading: true };
    case ERROR:
      return { ...state, loading: false, error: payload };
    case LOAD_ALL_VIDEOS:
      return { ...state, loading: false, videos: payload };
      case FILTER_BY_CATEGORY:
        return { ...state, filters: { ...state.filters, category: payload } };
        case FILTER_BY_SEARCH:
      return { ...state, filters: { ...state.filters, search: payload } };
        case GET_LIKED_VIDEOS:
      return { ...state, loading: false, likedVideos: payload };
    case LIKE_VIDEO:
      return { ...state, likedVideos: payload };
    case DISLIKE_VIDEO:
      return { ...state, likedVideos: payload };
      case GET_HISTORY:
        return { ...state, loading: false, history: payload };
      case ADD_VIDEO_TO_HISTORY:
        return { ...state, history: payload };
      case DELETE_VIDEO_FROM_HISTORY:
        return { ...state, history: payload };
      case CLEAR_HISTORY:
        return { ...state, history: payload };
        case GET_WATCH_LATER:
          return { ...state, loading: false, watchLater: payload };
        case ADD_VIDEO_TO_WATCH_LATER:
          return { ...state, watchLater: payload };
        case DELETE_VIDEO_FROM_WATCH_LATER:
          return { ...state, watchLater: payload };
          case GET_NOTE:
      return { ...state, notes: payload };
          case ADD_NOTE:
            return {
              ...state,
              notes: payload,
            };
          case DELETE_NOTE:
            return {
              ...state,
              notes: payload,
            };
            
    default:
      return state;
  }
};