export default interface Game {
  gameId: string;
  name?: string;
  maxPlayers?: number;
  endDate?: Date;
  location?: string;
  playerIds?: string[];
  targetIds?: string[];
}
