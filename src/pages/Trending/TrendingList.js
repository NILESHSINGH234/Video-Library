import React from "react";
import "./Trending.css";
//import { useVideo } from "../../context/VideoContext";
import { useVideoContext } from "../../context/VideoContext";
import { HorizontalCard } from "../../components";
import { getTrendingVideos } from "../../helpers";

export const TrendingList = () => {
  const {
    state: { videos, loading, error },
 // } = useVideo();
} = useVideoContext();

  const trendingVideos = getTrendingVideos(videos);

  return (
    <div className="trending-videos-container">
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        trendingVideos &&
        trendingVideos.map((video, id) => {
            return <HorizontalCard trendingVideo={video} key={id} />;
        })
      )}
    </div>
  );
};