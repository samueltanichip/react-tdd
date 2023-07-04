import { act, fireEvent, render, screen } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import { Draw } from './Draw';

const mockParticipantList: string[] = ['Ana', 'Catarina', 'Jorel'];

jest.mock('../../hooks/useParticipant', () => {
  return {
    useParticipant: jest.fn(() => ({
      participantList: mockParticipantList
    }))
  };
});

const mockDrawResult = new Map([
  ['Ana', 'Jorel'],
  ['Jorel', 'Catarina'],
  ['Catarina', 'Ana']
]);

jest.mock('../../hooks/useDrawer', () => {
  return {
    useDrawer: jest.fn(() => ({
      drawResult: mockDrawResult
    }))
  };
});

describe('Draw Page Tests', () => {
  it('should show each participant in the list of participants', () => {
    render(
      <RecoilRoot>
        <Draw />
      </RecoilRoot>
    );

    const options = screen.getAllByRole('option');

    expect(options).toHaveLength(mockParticipantList.length + 1);
  });

  it('should show the draw result when asked', () => {
    render(
      <RecoilRoot>
        <Draw />
      </RecoilRoot>
    );

    const select = screen.getByPlaceholderText('Selecione seu nome');
    const button = screen.getByRole('button');

    fireEvent.change(select, {
      target: { value: mockParticipantList[0] }
    });

    fireEvent.click(button);

    const drawResult = screen.getByRole('alert');

    expect(drawResult).toBeInTheDocument();
  });

  it('should disappear with the drawn friend after timers', () => {
    jest.useFakeTimers();

    render(
      <RecoilRoot>
        <Draw />
      </RecoilRoot>
    );

    const select = screen.getByPlaceholderText('Selecione seu nome');
    const button = screen.getByRole('button');

    fireEvent.change(select, {
      target: { value: mockParticipantList[0] }
    });

    fireEvent.click(button);

    act(() => {
      jest.runOnlyPendingTimers();
    });

    const drawResult = screen.queryByRole('alert');

    expect(drawResult).not.toBeInTheDocument();
  });

  afterAll(() => {
    jest.clearAllMocks();
  });
});