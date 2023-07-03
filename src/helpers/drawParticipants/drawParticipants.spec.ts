import { drawParticipants } from './drawParticipants';

describe('drawParticipant Tests', () => {
  it('should not draw the same name as the current participant', () => {
    const participants = [
      'Ana', 
      'Catarina', 
      'Jorel', 
      'Juliana', 
      'Lucas', 
      'Matheus'
    ];

    const drawResult = drawParticipants(participants);

    participants.forEach(participant => {
      const friendDrawn = drawResult.get(participant);

      expect(friendDrawn).not.toEqual(participant);
    });
  });
});