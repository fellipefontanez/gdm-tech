export interface Sport {
  id: string;
  name: string;
}

export interface Event {
  id: string;
  name: string;
  start_time: string;
  sport: string;
  league: string;
  teams: string[];
}

export interface Odd {
  id: string;
  event_id: string;
  market: string;
  selection: string;
  odds: number;
  bookmaker: string;
}

export interface EventDetail extends Event {
  venue: string;
  status: string;
  score: {
    home: number;
    away: number;
  };
}

export type ApiResponse<T> = { message: string; data: T; error?: string };
