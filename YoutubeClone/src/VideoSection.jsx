import React, { useState } from "react";
import Video from "./Video";

function VideoSection() {
  let [clr, setClr] = useState("rgb(255,255,255)");

  return (
    <>
      <div className="page" style={{ backgroundColor: clr }}>
        <div>
          <button
            id="color-mode"
            onClick={() => {
              if (clr === "rgb(255,255,255)") {
                setClr("rgb(0,0,0)");
              } else {
                setClr("rgb(255,255,255)");
              }
              console.log(clr);
            }}
          >
            toggle color mode
          </button>
        </div>
        <br />
        <div className="videos-section">
          <Video title="video 1" channel="channel 1" views="300k" />
          <Video title="video 2" channel="channel 2" views="400k" />
          <Video title="video 3" channel="channel 3" views="500k" />
          <Video title="video 4" channel="channel 4" views="600k" />
          <Video title="video 5" channel="channel 5" views="700k" />
          <Video title="video 6" channel="channel 6" views="800k" />
          <Video title="video 7" channel="channel 7" views="900k" />
          <Video title="video 8" channel="channel 8" views="100k" />
          <Video title="video 5" channel="channel 5" views="700k" />
          <Video title="video 6" channel="channel 6" views="800k" />
          <Video title="video 7" channel="channel 7" views="900k" />
        </div>
      </div>
    </>
  );
}

export default VideoSection;
