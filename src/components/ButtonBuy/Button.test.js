import React from 'react';
import { mount } from 'enzyme';
import Button from '.index.js';


describe('Button' =>{


	it('should exist', ()=>{
		let button;
		expect(button).toBe(undefined);
		button = mount(<Button />);
		expect(button).toHaveLength(1);
	})
	it('should render text', ()=>{
		const button = mount(<Button>test</Button>);
		expect(button.text()).toBe('test');
	})
	it('should invoke onClick prop', ()=>{
		const mockOnClick = jest.fn();
		const button = mount(<Button onClick={mockOnClick}>test</Button>);
		expect(mockOnClick).toHaveBeenCalled(0);
		button.simulate('click');
		expect(mockOnClick).toHaveBeenCalled(1);n
	})
})


//u góry zamiast beforeEach
// const setup = (overridesProps) =>{
// 	const prevonClick = jest.fn()
// 	const props = {
// 		onClick: jest.fn(),
// 		...overridesProps,
// 	}
// 	const button = mount(<Button {...props}>test</Button>)
// 	return {
// 		props,
// 		button,
// 	}
// }
// w każdej asercji
// const {button} = setup()


//metoda do spr state i propsów
// .instance()
// można na początku mount i niżej tylko poszczególne asercje
// beforeEach