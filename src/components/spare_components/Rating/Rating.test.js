import React from 'react';
import { mount } from 'enzyme';
import Rating from './index.js';

//expect(containerStyle).to.have.property('opacity', '1');
//prop('style')
//.hasClass('classname')

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

	describe('description', () => {
		const { wrapper, description, star, fillledStar } = setup();

		it('should show \'Brak oceny\' when there is no rating', () => {
			expect(star()).toHaveLength(5);
			star().at(0).simulate('click');
			expect(description()).text().toBe('Brak oceny');
		});

		it('should show correct rating description', () => {


		});
	});


	describe('star', () => {

		it('should set rating when clicked', () =>{

		});
		it('should set rating to 0 when clicked twice', () => {

		});
		it('should set rating when hovered', () => {

		});
		it('should reset rating after hover', () => {

		});
	});
});