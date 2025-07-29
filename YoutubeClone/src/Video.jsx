import "./Video.css";
import catImage from "./assets/cat.png";
import channelIcon from "./assets/channelIcon.png";

function Video(props) {
  return (
    <div className="container">
      <img src={catImage} alt="cat" className="coverImage" />
      <div className="videoInfo">
        <div className="iconDiv">
          <img src={channelIcon} alt="channel icon" className="iconImage" />
        </div>
        <div className="text">
          <p className="videoTitle">{props.title}</p>
          <p className="channelName extra">{props.channel}</p>
          <p className="videoViews extra">{props.views} • 3 days ago</p>
        </div>
      </div>
    </div>
  );
}

export default Video;
