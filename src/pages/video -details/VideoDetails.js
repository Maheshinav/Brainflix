
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Main from "../../components/main/Main";
import axios from "axios";

const VideoPage = () => {
	const { id } = useParams();
	const [videos, setVideos] = useState([]);
	const [videoDetails, setVideoDetails] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(
					"http://localhost:8080/videos"
				);
				setVideos(response.data);

				if (response.data.length > 0) {
					const videoDetailsResponse = await axios.get(
						`http://localhost:8080/videos/${id}`
					);
					setVideoDetails(videoDetailsResponse.data);
				} else {
					setVideoDetails(response.data[0]);
				}
			} catch (error) {
				console.error("Error fetching videos:", error);
			}
		};

		fetchData();
	}, [id]);

	return (
		<div>
			{videoDetails && <Main videos={videos} videoDetails={videoDetails} />}
		</div>
	);
};

export default VideoPage;
