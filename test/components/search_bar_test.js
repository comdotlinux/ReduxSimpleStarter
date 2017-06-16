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

	it('Has a bootstrap input group class', () => {
		expect(component).to.have.class('input-group');
	});

	describe('Input behaviour', () => {
		let input;
		beforeEach(() => {
			input = component.find('input');
		});

		it('Has an input with class form-control', () => {
			expect(input).to.exist;
			expect(input).to.have.class('form-control');
		});

		it('When text is entered then the input should be displayed.', () => {
			input.simulate('change', 'Some text input');
			expect(input).to.have.value('Some text input');
		});

		it('When clicked on text field, earlier value is cleared.', () => {
			input.simulate('change', 'Some text input');
			input.simulate('click');
			expect(input).to.have.value('');
		});
	});	
});