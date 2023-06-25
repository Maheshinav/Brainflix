import "./main.css";
import view_icon from "../../assets/images/views.svg";
import like_icon from "../../assets/images/likes.svg";
import videoList from "../../data/videos.json";

const Main = (props) => {
    const videoData = props.videoData;
    const firstVideoData = videoData[0];

    return (
        <div>
            <div key={firstVideoData.id}>
                <video className="main__video-player" controls>
                    <source src={firstVideoData.video} type="video/mp4" />
                </video>
                <div>
                    <h1>{firstVideoData.title}</h1>
                </div>
                <div className="main__video-details">
                    <div>
                        <p>{firstVideoData.channel}</p>
                        <p>{firstVideoData.timestamp}</p>
                    </div>
                    <div>
                        <div className="main__icon">
                            <img src={view_icon} className="main__views-icon" alt="views-icon" />
                            <p className="main__views">{firstVideoData.views}</p>
                        </div>
                        <div className="main__icon">
                            <img src={like_icon} className="main__likes-icon" alt="likes-icon" />
                            <p className="main__likes">{firstVideoData.likes}</p>
                        </div>
                    </div>
                </div>
                <div>
                    <p>{firstVideoData.description}</p>
                </div>
                <div>
                    <h3>{firstVideoData.comments.length} Comments</h3>
                </div>
                <div>
                    <div>
                        <div className="main__display-photo"></div>
                        <div>
                            <h3>JOIN THE CONVERSATION</h3>
                            <textarea className="main__comment-text-area" placeholder="Add a new comment"></textarea>
                        </div>
                    </div>
                    <button className="main__button">COMMENT</button>
                </div>
                {firstVideoData.comments.map((comment) => (
                    <div key={comment.id}>
                        <div>
                            <div className="main__display-photo"></div>
                            <div>
                                <div>
                                    <p>{comment.name}</p>
                                    <p>{new Date(comment.timestamp).toLocaleDateString()}</p>
                                </div>
                                <p>{comment.comment}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div>
            </div>
        </div>
    );
};

export default Main;
