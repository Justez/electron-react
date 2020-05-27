import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Navi from '../navigation-template';

afterEach(cleanup)

test('renders navi', () => {
  const { getByText } = render(<Navi />);
  const buttonElement = getByText('change theme');
  expect(buttonElement).toBeInTheDocument();
});