import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Select from './Select';

test('renders a select input with options', () => {
	const options = [
		{ value: 'option1', content: 'Option 1' },
		{ value: 'option2', content: 'Option 2' },
	];
	const onChange = jest.fn();
	const value = 'option2';

	render(<Select options={options} value={value} onChange={onChange} />);

	const selectElement = screen.getByRole('combobox'); // Используйте 'combobox' вместо 'select'
	const optionElement1 = screen.getByText('Option 1');
	const optionElement2 = screen.getByText('Option 2');

	expect(selectElement).toBeInTheDocument();
	expect(optionElement1).toBeInTheDocument();
	expect(optionElement2).toBeInTheDocument();

	fireEvent.change(selectElement, { target: { value: 'option1' } });

	expect(onChange).toHaveBeenCalledWith('option1');
});

