import React from 'react';
import { mount } from 'enzyme';
import Rating from './index.js';

describe('Rating', () =>  {
	const setup = () => {
		const wrapper = mount(<Rating />);
		const description = () => wrapper.find('[data-test="description"]');
		const star = () => wrapper.find('[data-test="star"]');
		const fillledStar = () => wrapper.find('.styles.starFill');

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
			expect(description()).text().toBe('Brak oceny');
		});

		it('should show correct rating description', () => {
			star().at(2).simulate('click');
			expect(description()).text().toBe('Zjadliwy');
		});
	});

	describe('star', () => {
		const { wrapper, description, star, fillledStar } = setup();

		it('should set rating when clicked', () =>{
			star().at(1).simulate('click');
			expect(fillledStar()).toHaveLength(2);
		});

		it('should set rating to 0 when clicked twice', () => {
			star().at(2).simulate('click');
			star().at(2).simulate('click');
			expect(fillledStar()).toHaveLength(0);
		});

		it('should set rating when hovered', () => {

		});

		it('should reset rating after hover', () => {

		});
	});
});

//expect(containerStyle).to.have.property('opacity', '1');
//prop('style')
//.hasClass('classname')