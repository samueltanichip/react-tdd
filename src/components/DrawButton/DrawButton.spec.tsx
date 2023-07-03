import { render, screen } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import { DrawButton } from './DrawButton';

describe('DrawButton Tests', () => {
  it('should not start the draw with insufficient participants', () => {
    render(
      <RecoilRoot>
        <DrawButton />
      </RecoilRoot>
    );

    const button = screen.getByRole('button');

    expect(button).toBeDisabled();
  });
});