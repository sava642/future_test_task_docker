import { render, fireEvent, screen } from '@testing-library/react';
import Input from './Input';

describe('Input Component', () => {
	it('renders correctly', () => {
		render(<Input placeholder="Enter text" value={''} onChange={function (value: string): void {
			throw new Error('Function not implemented.');
		}} />);
		const inputElement = screen.getByPlaceholderText('Enter text');
		expect(inputElement).toBeInTheDocument();
	});

	it('handles onChange event', () => {
		let text = '';
		const handleChange = (value: string) => {
			text = value;
		};

		render(
			<Input placeholder="Enter text" onChange={handleChange} value={''} />
		);

		const inputElement = screen.getByPlaceholderText('Enter text');

		fireEvent.change(inputElement, { target: { value: 'New Value' } });

		expect(text).toBe('New Value');
	});
});

