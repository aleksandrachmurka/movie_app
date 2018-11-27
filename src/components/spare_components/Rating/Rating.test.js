import React from 'react';
import { mount } from 'enzyme';
import Rating from './index.js';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('Rating', () =>  {
	const setup = () => {
		const wrapper = mount(<Rating />);
		const description = () => wrapper.find('[data-test="description"]');
		const star = () => wrapper.find('[data-test="star"]');
		const fillledStar = () => wrapper.find('.starFill');

		return {
			wrapper,
			description,
			star,
			fillledStar,
		};
	}

	describe('description text', () => {
		const { wrapper, description, star } = setup();

		it('should show \'Brak oceny\' when there is no rating', () => {
			expect(description().text()).toBe(' Brak oceny');
		});

		it('should show correct rating description', () => {
			star().find('[id="2"]').first().simulate('click');
			expect(description().text()).toBe(' Ujdzie');
		});
	});

	describe('star', () => {
		const { wrapper, description, star, fillledStar } = setup();

		it('should set rating when clicked', () =>{
			star().find('[id="2"]').first().simulate('click');
			expect(fillledStar()).toHaveLength(4);
		});

		it('should set rating to 0 when clicked twice', () => {
			star().find('[id="3"]').first().simulate('click');
			expect(fillledStar()).toHaveLength(6);
			star().find('[id="3"]').first().simulate('click');
			expect(fillledStar()).toHaveLength(0);
		});

		it('should set rating when hovered', () => {
			star().find('[id="2"]').first().simulate('mouseenter');
			expect(fillledStar()).toHaveLength(4);
		});

		it('should reset rating after hover', () => {
			star().find('[id="2"]').first().simulate('mouseenter');
			expect(fillledStar()).toHaveLength(4);
			star().find('[id="2"]').first().simulate('mouseleave');
			expect(fillledStar()).toHaveLength(0);
		});
	});
});
