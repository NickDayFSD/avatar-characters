import React from 'react';
import { render, screen } from '@testing-library/react';
import AvatarCharacters from './AvatarCharacters';

describe('Character Loader', () => {
  test('Loader and then UL of Avatar characters displays', async () => {
    render(<AvatarCharacters />);

    screen.getByAltText('Loading');

    const ul = await screen.findByRole('list');
    expect(ul).not.toBeEmptyDOMElement();
  });
});
