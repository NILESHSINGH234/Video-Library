import React from "react";
import { NavSidebarContainer, VideoListing } from "../../components";
import { useEffect,useState } from "react";
import "./Home.css";
import { useVideo } from "../../context/VideoContext";
import { getUniqueValues, getFilteredVideos } from "../../helpers";
export const Home = () => {


    const [uniqueCategories, setUniqueCategories] = useState();
  const { state, dispatch } = useVideo();
  const { videos, loading, error, filters } = state;

  useEffect(() => {
    setUniqueCategories(getUniqueValues(videos, "categoryName"));
  }, [videos]);

  const filteredVideos = getFilteredVideos(videos, state);
  return (
    <NavSidebarContainer>
      <div class="category-tags-container">
        {uniqueCategories?.map((uniqueCategory, id) => {
          return (
            <button
              onClick={() =>
                dispatch({
                  type: "FILTER_BY_CATEGORY",
                  payload: uniqueCategory,
                })
              }
              class={`category-tag ${
                filters.category === uniqueCategory && "active"
              }`}
              key={id}
            >
              {uniqueCategory}
            </button>
          );
        })}
      </div>
      <div className="videos-list">
        {loading ? (
          <div className="loader-container">Loading...</div>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <VideoListing videos={filteredVideos} />
        )}
      </div>
    </NavSidebarContainer>
  );
};