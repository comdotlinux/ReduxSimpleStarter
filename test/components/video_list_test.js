import log from 'loglevel';

import { renderComponent, renderFunctionalComponent, expect } from '../test_helper';
import VideoList from '../../src/components/video_list';

describe('Video List', () => {
	let component;
	const videoId = 'etag';
	
	beforeEach(() => {
		const mockProps = {
			videos: [
				{
					id: {
						videoId
					}
				}
			]
		};
		component = renderFunctionalComponent(VideoList, mockProps);
	});

	it('should be a unordered list',() => {
		expect(component).to.exist;
		expect(component).to.have.class('col-md-6 list-group');
		log.debug('\thtml : ', component);
	});

	it('should have a proper key', () => {
		expect(component).to.have.attr('key')
	});
});