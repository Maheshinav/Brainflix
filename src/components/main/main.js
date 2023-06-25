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
                    <h1 className="main__video-heading">{firstVideoData.title}</h1>
                </div>
                <div className="main__video-details">
                    <div>
                        <p className="main__video-channel">By {firstVideoData.channel}</p>
                        <p className="main__video-stats main__video-date-align">{new Date(firstVideoData.timestamp).toLocaleDateString('en-US', { year: '2-digit', month: '2-digit', day: '2-digit' })}</p>
                    </div>
                    <div>
                        <div className="main__icon">
                            <img src={view_icon} className="main__views-icon" alt="views-icon" />
                            <p className="main__video-stats">{firstVideoData.views}</p>
                        </div>
                        <div className="main__icon">
                            <img src={like_icon} className="main__likes-icon" alt="likes-icon" />
                            <p className="main__video-stats">{firstVideoData.likes}</p>
                        </div>
                    </div>
                </div>
                <div>
                    <p className="main__video-description">{firstVideoData.description}</p>
                </div>
                <div>
                    <h3 className="main__comment-subheading">{firstVideoData.comments.length} Comments</h3>
                </div>
                <div className="main__comment-secton">
                <div className="main__comment-new">
                    <div className="main__display-photo"></div>
                    <div className="main__comment-context">
                        <div>
                            <h3 className="main__comment-heading">Join the converstaion</h3>
                            <textarea className="main__comment-text-area" placeholder="Add a new comment"></textarea>
                        </div>

                        <button className="main__button main__button-text">COMMENT</button>
                    </div>
                </div>
                {firstVideoData.comments.map((comment) => (
                    <div key={comment.id}>
                        <div className="main__loaded-comment-wrap">
                            <div className="main__display-empty-photo "></div>
                            <div className="main__comment-wrap">
                                <div className="main__name-date-wrap">
                                    <p className="main__comment-name">{comment.name}</p>
                                    <p className="main__video-stats">{new Date(firstVideoData.timestamp).toLocaleDateString('en-US', { year: '2-digit', month: '2-digit', day: '2-digit' })}</p>

                                </div>
                                <p>{comment.comment}</p>
                            </div>
                        </div>
                    </div>
                ))}
                </div>
            </div>
            <div>
            </div>
        </div>
    );
};

export default Main;
