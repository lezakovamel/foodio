import React from 'react';
import { render } from '@testing-library/react';
import MainPage from './components/pages/MainPage';

test('test main page components', () => {
  const {getByTestId } = render(<MainPage />);
  const card = getByTestId('testCard');
  const header = getByTestId('testHeader');
  const footer = getByTestId('testFooter');
  expect(card).toBeInTheDocument();
  expect(header).toBeInTheDocument();
  expect(footer).toBeInTheDocument();
});
