import { createContext, useContext, useReducer, useEffect } from "react";
import axios from "axios";
import { videoReducer } from "../reducers";

const initialState = {
  videos: [],
  loading: false,
  error: null,
  filters: {
    category: "All",
  },
};

const VideoContext = createContext(initialState);

const VideoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(videoReducer, initialState);

  useEffect(() => {
    dispatch({ type: "LOADING" });
    (async () => {
      try {
        const { data, status } = await axios.get("api/videos");
        if (status === 200) {
          dispatch({ type: "LOAD_ALL_VIDEOS", payload: data.videos });
        }
      } catch (error) {
        dispatch({ type: "ERROR", payload: error });
      }
    })();
  }, []);

  return (
    <VideoContext.Provider value={{ state, dispatch }}>
      {children}
    </VideoContext.Provider>
  );
};

//const useVideo = () => useContext(VideoContext);
const useVideoContext = () => useContext(VideoContext);

export { VideoProvider, useVideoContext };