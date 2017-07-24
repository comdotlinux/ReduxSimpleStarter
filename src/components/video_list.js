import React from 'react';
import VideoListItem from './video_list_item';
import log from 'loglevel';

const VideoList = (props) => {
	const videoItems = props.videos.map((video, index) => {
		const key = `${index}_${video.id.videoId}`;
		log.debug('\tCreating video item with key : ', key);
		return <VideoListItem key={key} video={video}/>
	});
	return (
		<ul className="col-md-6 list-group">
			{videoItems}
		</ul>
	);
}
export default VideoList;