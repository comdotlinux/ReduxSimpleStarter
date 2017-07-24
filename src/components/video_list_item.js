import React from 'react';
import log from 'loglevel';

const VideoListItem = ({ video }) => {
	const videoUrl = video.snippet.thumbnails.default.url;
	const videoTitle = video.snippet.title;
	const alternateText = video.snippet.description;
	log.info(`\tVideo URL : ${videoUrl} | Video Title : ${videoTitle} | Video Description : ${alternateText}`);
	return (
		<li className="list-group-item">
			<div className="video-list media">
				<div className="media-left">
					<img className="media-object" src={videoUrl} alt={alternateText}/>
				</div>
				<div className="media-body">
					<div className="media-heading">{videoTitle}</div>
				</div>
			</div>
		</li>
	);
}

export default VideoListItem;