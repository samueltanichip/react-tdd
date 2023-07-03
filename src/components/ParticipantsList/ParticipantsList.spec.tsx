import { render, screen } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import { ParticipantsList } from './ParticipantsList';

let mockParticipantList: string[] = [];

// mocking useParticipant hook to be a function that
// returns an object similar to the original one
jest.mock('../../hooks/useParticipant', () => {
  return {
    useParticipant: jest.fn(() => ({
      participantList: mockParticipantList
    }))
  };
});

describe('ParticipantsList Tests', () => {
  it('should start like a empty list', () => {
    render(
      <RecoilRoot>
        <ParticipantsList />
      </RecoilRoot>
    );

    const items = screen.queryAllByRole('listitem');

    expect(items).toHaveLength(0);
  });

  it('should have its size equal to the number of names added', () => {
    mockParticipantList = ['Ana', 'Catarina'];

    render(
      <RecoilRoot>
        <ParticipantsList />
      </RecoilRoot>
    );

    const items = screen.queryAllByRole('listitem');
    
    expect(items).toHaveLength(mockParticipantList.length);
  });
});