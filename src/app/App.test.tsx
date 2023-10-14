import React from 'react';
import { act, render, screen } from '@testing-library/react';
import App from './App';

test('renders App component', () => {
  // eslint-disable-next-line testing-library/no-unnecessary-act
  act(() => {
    render(<App />);
  });

  // Проверим, что компонент успешно загружен
  const appComponent = screen.getByText(/Loading.../i); // Замените это на текст, который отображается при загрузке

  expect(appComponent).toBeInTheDocument();
});


