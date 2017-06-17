import log from 'loglevel';

import { renderComponent, renderFunctionalComponent, expect } from '../test_helper';
import VideoList from '../../src/components/video_list';

describe('Video List', () => {
	let component;

	beforeEach(() => {
		component = renderFunctionalComponent(VideoList, { videos: [] });
	});

	it('should be a unordered list',() => {
		expect(component).to.exist;
		expect(component).to.have.class('col-md-6 list-group');
		log.debug('\thtml : ', component);
	});
});