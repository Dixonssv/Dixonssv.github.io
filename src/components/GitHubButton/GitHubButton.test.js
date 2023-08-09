import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import GitHubButton from './GitHubButton';

describe('<GitHubButton />', () => {
  test('it should mount', () => {
    render(<GitHubButton />);
    
    const gitHubButton = screen.getByTestId('GitHubButton');

    expect(gitHubButton).toBeInTheDocument();
  });
});