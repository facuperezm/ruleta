export function calculateWinner(
  degrees: number,
  participants: string[]
): string {
  const segmentSize = 360 / participants.length;
  const normalizedDegrees = (360 - (degrees % 360)) % 360; // Normalize to 0-360 and invert
  const winnerIndex = Math.floor(normalizedDegrees / segmentSize);
  return participants[winnerIndex];
}

export function getRandomDegrees(): number {
  if (window.crypto && window.crypto.getRandomValues) {
    const array = new Uint32Array(1);
    window.crypto.getRandomValues(array);
    return (array[0] % 360) + Math.random() * 360;
  }

  return Math.random() * 360 + (Date.now() % 360);
}

export const WHEEL_COLORS = [
  "#FF6B6B",
  "#4ECDC4",
  "#45B7D1",
  "#96CEB4",
  "#FFEEAD",
  "#D4A5A5",
  "#9B59B6",
  "#3498DB",
];
