import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Dino from './Dino';

describe('<Dino />', () => {
  test('it should mount', () => {
    render(<Dino />);
    
    const dino = screen.getByTestId('Dino');

    expect(dino).toBeInTheDocument();
  });
});