import { renderComponent, expect } from '../test_helper';
import SearchBar from '../../src/components/search_bar';

describe('Search Bar', () => { 
	let component;

	beforeEach(() => {
		component = renderComponent(SearchBar);
	});

	it('Renders something', () => {
		expect(component).to.exist;
	});

	it('Has a bootstrap input class', () => {
		expect(component).to.have.class('form-control');
	});

	it('some text entered', () => {
		component.simulate('change', 'Some text input');
		expect(component).to.have.value('Some text input');
	});
});