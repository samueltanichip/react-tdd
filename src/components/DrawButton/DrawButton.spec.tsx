import { fireEvent, render, screen } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import { DrawButton } from './DrawButton';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => {
  return {
    useNavigate: () => mockNavigate
  };
});

let mockParticipantList: string[] = [];

jest.mock('../../hooks/useParticipant', () => {
  return {
    useParticipant: jest.fn(() => ({
      participantList: mockParticipantList
    }))
  };
});

const mockDraw = jest.fn();

jest.mock('../../hooks/useDrawer', () => {
  return {
    useDrawer: jest.fn(() => ({
      draw: mockDraw
    }))
  };
});

describe('DrawButton Tests with insufficient participants', () => {
  it('should not start the draw', () => {
    render(
      <RecoilRoot>
        <DrawButton />
      </RecoilRoot>
    );

    const button = screen.getByRole('button');

    expect(button).toBeDisabled();
  });
});
 
describe('DrawButton Tests with sufficient participants', () => {
  beforeAll(() => {
    mockParticipantList = ['Ana', 'Catarina', 'Jorel'];
  });

  it('should be able to start the draw', () => {
    render(
      <RecoilRoot>
        <DrawButton />
      </RecoilRoot>
    );

    const button = screen.getByRole('button');

    expect(button).not.toBeDisabled();
  });

  it('should call the draw function', () => {
    render(
      <RecoilRoot>
        <DrawButton />
      </RecoilRoot>
    );

    const button = screen.getByRole('button');

    fireEvent.click(button);

    expect(mockNavigate).toHaveBeenCalledTimes(1);
    expect(mockNavigate).toBeCalledWith('/sorteio');
    expect(mockDraw).toBeCalledTimes(1);
  });

  afterAll(() => {
    jest.resetAllMocks();
  });
});