import React, { useState, useRef, useEffect } from "react";
import "./MoreOptionsModal.css";
import { RiShareForwardLine } from "react-icons/ri";

export const MoreOptionsModal = () => {
  const ref = useRef();
  const [showOptionsModal, setShowOptionsModal] = useState(false);

  useEffect(() => {
    const checkIfClickedOutside = e => {
      if (showOptionsModal && ref.current && !ref.current.contains(e.target)) {
        setShowOptionsModal(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [showOptionsModal]);

  return (
    <div className="more-options" ref={ref}>
      <i
        className="material-icons material-icons-outlined"
        onClick={() => setShowOptionsModal(!showOptionsModal)}
      >
        more_vert
      </i>
      {showOptionsModal && (
        <div
          className={showOptionsModal ? "option-modal show" : "option-modal"}
        >
          <button class="option-modal-btn">
            <i className="material-icons-outlined">watch_later</i>
            <span>Save to Watch later</span>
          </button>
          <button class="option-modal-btn">
            <i className="material-icons-outlined">playlist_add</i>
            <span>Save to playlist</span>
          </button>
          <button className="option-modal-btn">
            <RiShareForwardLine className="material-icons-outlined" />
            <span>Share</span>
          </button>
        </div>
      )}
    </div>
  );
};