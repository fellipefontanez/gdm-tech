export type Outcome = {
    modifier: number;
    payout: number;
    source: string;
    type: string;
    live: boolean;
    marketKey: string;
    participantKey: string;
    time: string;
};

type EventParticipant = {
    category: string;
    name: string;
    key: string;
    shortName: string;
    slug: string;
    sport: string;
};

type ArbitrageContext = {
    marketKey: string;
    marketType: string;
    marketSegment: string;
    eventKey: string;
    eventSport: string;
    eventName: string;
    eventStartTime: string;
    eventHomeParticipantKey: string;
    eventParticipants: EventParticipant[];
    eventCategory: string;
    competitionInstanceName: string;
    competitionInstanceKey: string;
    competitionName: string;
    competitionShortName: string;
    competitionKey: string;
};

export type Vantagem = {
    type: "ARBITRAGE";
    value: number;
    valueType: "PERCENT";
    outcomes: Outcome[];
    context: ArbitrageContext;
};

export type AdvantagesV1Response = {
    advantages: Advantages;
}

type Advantages = {
    [key: string] : Vantagem[][]
}