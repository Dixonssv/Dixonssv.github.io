import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import WhatIDo from './WhatIDo';

describe('<WhatIDo />', () => {
  test('it should mount', () => {
    render(<WhatIDo />);
    
    const whatIDo = screen.getByTestId('WhatIDo');

    expect(whatIDo).toBeInTheDocument();
  });
});