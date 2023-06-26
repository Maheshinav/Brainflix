import "./list.css";

const List = (props) => {
  const videoList = props.vedioList;

  const imageClick = (videoId) => {
    props.onImageClick(videoId);
  };

  const removeVideo = (videoId) => {
    const updatedList = videoList.filter((video) => video.id !== videoId);
    props.updateList(updatedList);
  };

  return (
    <div className="list__contaianer">
      <div>
        <h3 className="list__header">Next Videos</h3>
      </div>
      {videoList.map((video) => (
        <div key={video.id}>
          <div className="list__video-wrapper">
            <div>
              <img
                onClick={() => {
                  imageClick(video.id);
                  removeVideo(video.id);
                }}
                src={video.image}
                alt="video-list-images"
                className="list__image"
              />
            </div>
            <div>
              <h3 className="list__details-tablet">{video.title}</h3>
              <p className="list__channel-name">{video.channel}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default List;