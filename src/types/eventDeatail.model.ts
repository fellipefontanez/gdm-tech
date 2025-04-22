type SportType =
  | 'SOCCER'
  | 'BASKETBALL'
  | 'BASEBALL'
  | 'VOLEYBALL'
  | 'AMERICAN_FOOTBALL'
  | 'AUSTRALIAN_RULES_FOOTBALL';

type MarketType = 'MONEYLINE' | 'POINT_SPREAD' | 'POINT_TOTAL';

type SegmentType = 'FULL_MATCH' | 'REGULATION_TIME';

export interface Participant {
  key: string;
  slug: string;
  name: string;
  shortName: string;
  sport: SportType;
}

export interface Market {
  key: string;
  type: MarketType;
  segment: SegmentType;
  lastFoundAt: string;
  participantKey: string | null;
  participant: string | null;
}

export interface Event {
  key: string;
  name: string;
  startTime: string;
  homeParticipantKey: string;
  participants: Participant[];
  summaries: any[];
  markets: Market[];
}

export interface EventsResponse {
  events: Event[];
}
