import log from 'loglevel';

import { renderComponent, renderFunctionalComponent, expect } from '../test_helper';
import VideoListItem from '../../src/components/video_list_item';

describe('Video List Item', () => {
	let component;

	const link = 'http://google.com';
	const video_title = 'Video Title';
	const video_description = 'Video Description';

	beforeEach(() => {
		const mockProps = {
			video: {
				id: {
					description: video_description
				},
				snippet: {
					thumbnails: {
						default: {
							url: link
						}
					},
					title: video_title
				}
			}
		};
		component = renderFunctionalComponent(VideoListItem, mockProps);
	});

	it('should exist', () => {
		expect(component).to.exist;
	});

	it('should have proper class', () => {
		expect(component).to.have.class('list-group-item');
		log.debug('\tComponent : ', component);
	});

	it('should have a div with media class', () => {
		const divTag = component.find('.video-list.media');
		expect(divTag).to.exist;
		log.debug('\tDiv tag : ', divTag);
	});

	it('should have an image', () => {
		const imgTag = component.find('.media-object');
		expect(imgTag).to.have.attr('src', link);
		log.debug('\tImage tag : ', imgTag);
	});

	it('should have a title with proper class and value', () => {
		const heading = component.find('.media-heading');
		expect(heading).to.have.text(video_title);
		log.debug('\tHeading : ', heading);
	});
});