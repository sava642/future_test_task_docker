import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Button from './Button';

test('renders a button with provided text', () => {
	const buttonText = 'Click me'; // Текст, который мы ожидаем увидеть на кнопке
	render(<Button>{buttonText}</Button>);

	const buttonElement = screen.getByText(buttonText);

	expect(buttonElement).toBeInTheDocument();
});

test('calls the provided onClick function when the button is clicked', () => {
	const onClickMock = jest.fn(); // Мок-функция для отслеживания вызова onClick
	render(<Button onClick={onClickMock}>Click me</Button>);

	const buttonElement = screen.getByText('Click me');
	fireEvent.click(buttonElement);

	expect(onClickMock).toHaveBeenCalledTimes(1);
});
