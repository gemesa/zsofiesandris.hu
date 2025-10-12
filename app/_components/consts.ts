const weddingDate = new Date('2026-06-13T16:00:00');

export const getRemainingTimeInSeconds = () =>
  Math.floor((weddingDate.getTime() - Date.now()) / 1000);
