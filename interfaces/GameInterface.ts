import { Enemy } from "./EnemyInterface";

export default interface Game {
  gameId: string;
  name?: string;
  maxPlayers?: number;
  endDate?: Date;
  location?: string;
  players?: Enemy[];
  targets?: Enemy[];
  dead?: boolean;
}
