import { shuffle } from '../shuffle';

export const drawParticipants = (participants: string[]) => {
  const total = participants.length;
  const shuffledList = shuffle(participants);
  const result = new Map<string, string>();

  for (let i = 0; i < total; i++) {
    const drawnIndex = i === (total - 1) ? 0 : i + 1;

    result.set(
      shuffledList[i],
      shuffledList[drawnIndex]
    );
  }

  return result;
};