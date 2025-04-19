import type { NextApiRequest, NextApiResponse } from 'next';
import { apiService } from '@/src/services/ApiService';
import { ApiResponse, Sport } from '@/src/types/reponses.model';
import { AdvantagesResponse } from '@/src/types/eventResponse.model';
import { NextResponse } from 'next/server';

const a: any = {
    "advantages": {
        "ARBITRAGE": [
            {
                "type": "ARBITRAGE",
                "value": 0.0015776425512733505,
                "valueType": "PERCENT",
                "outcomes": [
                    {
                        "modifier": 0,
                        "payout": 2.9,
                        "source": "DRAFT_KINGS",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "hDMh-zerv-W0yv",
                        "participantKey": "61U6-wegw-KOIQ",
                        "time": "2025-04-18T02:29:00.273Z"
                    },
                    {
                        "modifier": 0,
                        "payout": 1.53,
                        "source": "FAN_DUEL",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "hDMh-zerv-W0yv",
                        "participantKey": "OB2d-wegw-17Wi",
                        "time": "2025-04-18T02:29:00.287Z"
                    }
                ],
                "context": {
                    "marketKey": "hDMh-zerv-W0yv",
                    "marketType": "MONEYLINE",
                    "marketSegment": "FULL_MATCH",
                    "eventKey": "NIRg-zerv-spcR",
                    "eventSport": "BASEBALL",
                    "eventName": "Chicago White Sox @ Boston Red Sox",
                    "eventStartTime": "2025-04-18T23:11:00.000Z",
                    "eventHomeParticipantKey": "OB2d-wegw-17Wi",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Boston Red Sox",
                            "key": "OB2d-wegw-17Wi",
                            "shortName": "BOS",
                            "slug": "boston-red-sox",
                            "sport": "BASEBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Chicago White Sox",
                            "key": "61U6-wegw-KOIQ",
                            "shortName": "CWS",
                            "slug": "chicago-white-sox",
                            "sport": "BASEBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 Major League Baseball",
                    "competitionInstanceKey": "9Jss-zcjh-iOl3",
                    "competitionName": "Major League Baseball",
                    "competitionShortName": "MLB",
                    "competitionKey": "qK0E-wddv-bFet"
                }
            },
            {
                "type": "ARBITRAGE",
                "value": 0.0015776425512733505,
                "valueType": "PERCENT",
                "outcomes": [
                    {
                        "modifier": 0,
                        "payout": 1.53,
                        "source": "FAN_DUEL",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "hDMh-zerv-W0yv",
                        "participantKey": "OB2d-wegw-17Wi",
                        "time": "2025-04-18T02:29:00.287Z"
                    },
                    {
                        "modifier": 0,
                        "payout": 2.9,
                        "source": "FANATICS",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "hDMh-zerv-W0yv",
                        "participantKey": "61U6-wegw-KOIQ",
                        "time": "2025-04-18T02:29:00.287Z"
                    }
                ],
                "context": {
                    "marketKey": "hDMh-zerv-W0yv",
                    "marketType": "MONEYLINE",
                    "marketSegment": "FULL_MATCH",
                    "eventKey": "NIRg-zerv-spcR",
                    "eventSport": "BASEBALL",
                    "eventName": "Chicago White Sox @ Boston Red Sox",
                    "eventStartTime": "2025-04-18T23:11:00.000Z",
                    "eventHomeParticipantKey": "OB2d-wegw-17Wi",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Boston Red Sox",
                            "key": "OB2d-wegw-17Wi",
                            "shortName": "BOS",
                            "slug": "boston-red-sox",
                            "sport": "BASEBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Chicago White Sox",
                            "key": "61U6-wegw-KOIQ",
                            "shortName": "CWS",
                            "slug": "chicago-white-sox",
                            "sport": "BASEBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 Major League Baseball",
                    "competitionInstanceKey": "9Jss-zcjh-iOl3",
                    "competitionName": "Major League Baseball",
                    "competitionShortName": "MLB",
                    "competitionKey": "qK0E-wddv-bFet"
                }
            }
        ],
        "ARBITRAGE_LIVE": [
            {
                "type": "ARBITRAGE_LIVE",
                "value": 0.0032144005143041054,
                "valueType": "PERCENT",
                "outcomes": [
                    {
                        "modifier": 0,
                        "payout": 1.02,
                        "source": "FAN_DUEL",
                        "type": "WIN",
                        "live": true,
                        "marketKey": "qpyc-zeqr-xM24",
                        "participantKey": "4T9Y-wegw-9sVP",
                        "time": "2025-04-18T02:29:00.287Z"
                    },
                    {
                        "modifier": 0,
                        "payout": 61,
                        "source": "FANATICS",
                        "type": "WIN",
                        "live": true,
                        "marketKey": "qpyc-zeqr-xM24",
                        "participantKey": "fOUk-wegw-Vwhl",
                        "time": "2025-04-18T02:29:00.287Z"
                    }
                ],
                "context": {
                    "marketKey": "qpyc-zeqr-xM24",
                    "marketType": "MONEYLINE",
                    "marketSegment": "FULL_MATCH",
                    "eventKey": "wnRC-zeqr-t7mf",
                    "eventSport": "BASEBALL",
                    "eventName": "Los Angeles Angels @ Texas Rangers",
                    "eventStartTime": "2025-04-18T00:06:00.000Z",
                    "eventHomeParticipantKey": "4T9Y-wegw-9sVP",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Los Angeles Angels",
                            "key": "fOUk-wegw-Vwhl",
                            "shortName": "LAA",
                            "slug": "los-angeles-angels",
                            "sport": "BASEBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Texas Rangers",
                            "key": "4T9Y-wegw-9sVP",
                            "shortName": "TEX",
                            "slug": "texas-rangers",
                            "sport": "BASEBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 Major League Baseball",
                    "competitionInstanceKey": "9Jss-zcjh-iOl3",
                    "competitionName": "Major League Baseball",
                    "competitionShortName": "MLB",
                    "competitionKey": "qK0E-wddv-bFet"
                }
            }
        ],
        "MIDDLE": [
            {
                "type": "MIDDLE",
                "value": 2,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 1,
                        "payout": 1.86,
                        "source": "BET_PARX",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "09tI-zerb-qX5s",
                        "participantKey": "0Ch7-wddv-OrXs",
                        "time": "2025-04-18T02:29:00.161Z"
                    },
                    {
                        "modifier": 1,
                        "payout": 1.87,
                        "source": "BOVADA",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "09tI-zerb-qX5s",
                        "participantKey": "biYO-wddv-j7OK",
                        "time": "2025-04-18T02:29:00.254Z"
                    }
                ],
                "context": {
                    "marketKey": "09tI-zerb-qX5s",
                    "marketType": "POINT_SPREAD",
                    "marketSegment": "FULL_MATCH",
                    "eventKey": "BsiB-zerb-sFT3",
                    "eventSport": "BASKETBALL",
                    "eventName": "Miami Heat @ Atlanta Hawks",
                    "eventStartTime": "2025-04-18T23:10:00.000Z",
                    "eventHomeParticipantKey": "0Ch7-wddv-OrXs",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Atlanta Hawks",
                            "key": "0Ch7-wddv-OrXs",
                            "shortName": "ATL",
                            "slug": "atlanta-hawks",
                            "sport": "BASKETBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Miami Heat",
                            "key": "biYO-wddv-j7OK",
                            "shortName": "MIA",
                            "slug": "miami-heat",
                            "sport": "BASKETBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 National Basketball Association",
                    "competitionInstanceKey": "g4sK-yinv-Lczx",
                    "competitionName": "National Basketball Association",
                    "competitionShortName": "NBA",
                    "competitionKey": "d791-wddv-30fU"
                }
            },
            {
                "type": "MIDDLE",
                "value": 2,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 1,
                        "payout": 1.86,
                        "source": "BET_PARX",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "09tI-zerb-qX5s",
                        "participantKey": "0Ch7-wddv-OrXs",
                        "time": "2025-04-18T02:29:00.161Z"
                    },
                    {
                        "modifier": 1,
                        "payout": 1.87,
                        "source": "FANATICS",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "09tI-zerb-qX5s",
                        "participantKey": "biYO-wddv-j7OK",
                        "time": "2025-04-18T02:29:00.287Z"
                    }
                ],
                "context": {
                    "marketKey": "09tI-zerb-qX5s",
                    "marketType": "POINT_SPREAD",
                    "marketSegment": "FULL_MATCH",
                    "eventKey": "BsiB-zerb-sFT3",
                    "eventSport": "BASKETBALL",
                    "eventName": "Miami Heat @ Atlanta Hawks",
                    "eventStartTime": "2025-04-18T23:10:00.000Z",
                    "eventHomeParticipantKey": "0Ch7-wddv-OrXs",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Atlanta Hawks",
                            "key": "0Ch7-wddv-OrXs",
                            "shortName": "ATL",
                            "slug": "atlanta-hawks",
                            "sport": "BASKETBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Miami Heat",
                            "key": "biYO-wddv-j7OK",
                            "shortName": "MIA",
                            "slug": "miami-heat",
                            "sport": "BASKETBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 National Basketball Association",
                    "competitionInstanceKey": "g4sK-yinv-Lczx",
                    "competitionName": "National Basketball Association",
                    "competitionShortName": "NBA",
                    "competitionKey": "d791-wddv-30fU"
                }
            },
            {
                "type": "MIDDLE",
                "value": 2,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 1,
                        "payout": 1.86,
                        "source": "BET_RIVERS",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "09tI-zerb-qX5s",
                        "participantKey": "0Ch7-wddv-OrXs",
                        "time": "2025-04-18T02:29:00.091Z"
                    },
                    {
                        "modifier": 1,
                        "payout": 1.87,
                        "source": "BOVADA",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "09tI-zerb-qX5s",
                        "participantKey": "biYO-wddv-j7OK",
                        "time": "2025-04-18T02:29:00.254Z"
                    }
                ],
                "context": {
                    "marketKey": "09tI-zerb-qX5s",
                    "marketType": "POINT_SPREAD",
                    "marketSegment": "FULL_MATCH",
                    "eventKey": "BsiB-zerb-sFT3",
                    "eventSport": "BASKETBALL",
                    "eventName": "Miami Heat @ Atlanta Hawks",
                    "eventStartTime": "2025-04-18T23:10:00.000Z",
                    "eventHomeParticipantKey": "0Ch7-wddv-OrXs",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Atlanta Hawks",
                            "key": "0Ch7-wddv-OrXs",
                            "shortName": "ATL",
                            "slug": "atlanta-hawks",
                            "sport": "BASKETBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Miami Heat",
                            "key": "biYO-wddv-j7OK",
                            "shortName": "MIA",
                            "slug": "miami-heat",
                            "sport": "BASKETBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 National Basketball Association",
                    "competitionInstanceKey": "g4sK-yinv-Lczx",
                    "competitionName": "National Basketball Association",
                    "competitionShortName": "NBA",
                    "competitionKey": "d791-wddv-30fU"
                }
            },
            {
                "type": "MIDDLE",
                "value": 2,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 1,
                        "payout": 1.86,
                        "source": "BET_RIVERS",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "09tI-zerb-qX5s",
                        "participantKey": "0Ch7-wddv-OrXs",
                        "time": "2025-04-18T02:29:00.091Z"
                    },
                    {
                        "modifier": 1,
                        "payout": 1.87,
                        "source": "FANATICS",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "09tI-zerb-qX5s",
                        "participantKey": "biYO-wddv-j7OK",
                        "time": "2025-04-18T02:29:00.287Z"
                    }
                ],
                "context": {
                    "marketKey": "09tI-zerb-qX5s",
                    "marketType": "POINT_SPREAD",
                    "marketSegment": "FULL_MATCH",
                    "eventKey": "BsiB-zerb-sFT3",
                    "eventSport": "BASKETBALL",
                    "eventName": "Miami Heat @ Atlanta Hawks",
                    "eventStartTime": "2025-04-18T23:10:00.000Z",
                    "eventHomeParticipantKey": "0Ch7-wddv-OrXs",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Atlanta Hawks",
                            "key": "0Ch7-wddv-OrXs",
                            "shortName": "ATL",
                            "slug": "atlanta-hawks",
                            "sport": "BASKETBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Miami Heat",
                            "key": "biYO-wddv-j7OK",
                            "shortName": "MIA",
                            "slug": "miami-heat",
                            "sport": "BASKETBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 National Basketball Association",
                    "competitionInstanceKey": "g4sK-yinv-Lczx",
                    "competitionName": "National Basketball Association",
                    "competitionShortName": "NBA",
                    "competitionKey": "d791-wddv-30fU"
                }
            },
            {
                "type": "MIDDLE",
                "value": 2,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 1,
                        "payout": 1.87,
                        "source": "BOVADA",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "09tI-zerb-qX5s",
                        "participantKey": "biYO-wddv-j7OK",
                        "time": "2025-04-18T02:29:00.254Z"
                    },
                    {
                        "modifier": 1,
                        "payout": 1.869565,
                        "source": "DRAFT_KINGS",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "09tI-zerb-qX5s",
                        "participantKey": "0Ch7-wddv-OrXs",
                        "time": "2025-04-18T02:29:00.274Z"
                    }
                ],
                "context": {
                    "marketKey": "09tI-zerb-qX5s",
                    "marketType": "POINT_SPREAD",
                    "marketSegment": "FULL_MATCH",
                    "eventKey": "BsiB-zerb-sFT3",
                    "eventSport": "BASKETBALL",
                    "eventName": "Miami Heat @ Atlanta Hawks",
                    "eventStartTime": "2025-04-18T23:10:00.000Z",
                    "eventHomeParticipantKey": "0Ch7-wddv-OrXs",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Atlanta Hawks",
                            "key": "0Ch7-wddv-OrXs",
                            "shortName": "ATL",
                            "slug": "atlanta-hawks",
                            "sport": "BASKETBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Miami Heat",
                            "key": "biYO-wddv-j7OK",
                            "shortName": "MIA",
                            "slug": "miami-heat",
                            "sport": "BASKETBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 National Basketball Association",
                    "competitionInstanceKey": "g4sK-yinv-Lczx",
                    "competitionName": "National Basketball Association",
                    "competitionShortName": "NBA",
                    "competitionKey": "d791-wddv-30fU"
                }
            },
            {
                "type": "MIDDLE",
                "value": 2.5,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 1,
                        "payout": 1.87,
                        "source": "BOVADA",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "09tI-zerb-qX5s",
                        "participantKey": "biYO-wddv-j7OK",
                        "time": "2025-04-18T02:29:00.254Z"
                    },
                    {
                        "modifier": 1.5,
                        "payout": 1.83,
                        "source": "ESPN_BET",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "09tI-zerb-qX5s",
                        "participantKey": "0Ch7-wddv-OrXs",
                        "time": "2025-04-18T02:29:00.282Z"
                    }
                ],
                "context": {
                    "marketKey": "09tI-zerb-qX5s",
                    "marketType": "POINT_SPREAD",
                    "marketSegment": "FULL_MATCH",
                    "eventKey": "BsiB-zerb-sFT3",
                    "eventSport": "BASKETBALL",
                    "eventName": "Miami Heat @ Atlanta Hawks",
                    "eventStartTime": "2025-04-18T23:10:00.000Z",
                    "eventHomeParticipantKey": "0Ch7-wddv-OrXs",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Atlanta Hawks",
                            "key": "0Ch7-wddv-OrXs",
                            "shortName": "ATL",
                            "slug": "atlanta-hawks",
                            "sport": "BASKETBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Miami Heat",
                            "key": "biYO-wddv-j7OK",
                            "shortName": "MIA",
                            "slug": "miami-heat",
                            "sport": "BASKETBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 National Basketball Association",
                    "competitionInstanceKey": "g4sK-yinv-Lczx",
                    "competitionName": "National Basketball Association",
                    "competitionShortName": "NBA",
                    "competitionKey": "d791-wddv-30fU"
                }
            },
            {
                "type": "MIDDLE",
                "value": 2,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 1,
                        "payout": 1.87,
                        "source": "BOVADA",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "09tI-zerb-qX5s",
                        "participantKey": "biYO-wddv-j7OK",
                        "time": "2025-04-18T02:29:00.254Z"
                    },
                    {
                        "modifier": 1,
                        "payout": 1.91,
                        "source": "FAN_DUEL",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "09tI-zerb-qX5s",
                        "participantKey": "0Ch7-wddv-OrXs",
                        "time": "2025-04-18T02:29:00.287Z"
                    }
                ],
                "context": {
                    "marketKey": "09tI-zerb-qX5s",
                    "marketType": "POINT_SPREAD",
                    "marketSegment": "FULL_MATCH",
                    "eventKey": "BsiB-zerb-sFT3",
                    "eventSport": "BASKETBALL",
                    "eventName": "Miami Heat @ Atlanta Hawks",
                    "eventStartTime": "2025-04-18T23:10:00.000Z",
                    "eventHomeParticipantKey": "0Ch7-wddv-OrXs",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Atlanta Hawks",
                            "key": "0Ch7-wddv-OrXs",
                            "shortName": "ATL",
                            "slug": "atlanta-hawks",
                            "sport": "BASKETBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Miami Heat",
                            "key": "biYO-wddv-j7OK",
                            "shortName": "MIA",
                            "slug": "miami-heat",
                            "sport": "BASKETBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 National Basketball Association",
                    "competitionInstanceKey": "g4sK-yinv-Lczx",
                    "competitionName": "National Basketball Association",
                    "competitionShortName": "NBA",
                    "competitionKey": "d791-wddv-30fU"
                }
            },
            {
                "type": "MIDDLE",
                "value": 2,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 1,
                        "payout": 1.869565,
                        "source": "DRAFT_KINGS",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "09tI-zerb-qX5s",
                        "participantKey": "0Ch7-wddv-OrXs",
                        "time": "2025-04-18T02:29:00.274Z"
                    },
                    {
                        "modifier": 1,
                        "payout": 1.87,
                        "source": "FANATICS",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "09tI-zerb-qX5s",
                        "participantKey": "biYO-wddv-j7OK",
                        "time": "2025-04-18T02:29:00.287Z"
                    }
                ],
                "context": {
                    "marketKey": "09tI-zerb-qX5s",
                    "marketType": "POINT_SPREAD",
                    "marketSegment": "FULL_MATCH",
                    "eventKey": "BsiB-zerb-sFT3",
                    "eventSport": "BASKETBALL",
                    "eventName": "Miami Heat @ Atlanta Hawks",
                    "eventStartTime": "2025-04-18T23:10:00.000Z",
                    "eventHomeParticipantKey": "0Ch7-wddv-OrXs",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Atlanta Hawks",
                            "key": "0Ch7-wddv-OrXs",
                            "shortName": "ATL",
                            "slug": "atlanta-hawks",
                            "sport": "BASKETBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Miami Heat",
                            "key": "biYO-wddv-j7OK",
                            "shortName": "MIA",
                            "slug": "miami-heat",
                            "sport": "BASKETBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 National Basketball Association",
                    "competitionInstanceKey": "g4sK-yinv-Lczx",
                    "competitionName": "National Basketball Association",
                    "competitionShortName": "NBA",
                    "competitionKey": "d791-wddv-30fU"
                }
            },
            {
                "type": "MIDDLE",
                "value": 2.5,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 1.5,
                        "payout": 1.83,
                        "source": "ESPN_BET",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "09tI-zerb-qX5s",
                        "participantKey": "0Ch7-wddv-OrXs",
                        "time": "2025-04-18T02:29:00.282Z"
                    },
                    {
                        "modifier": 1,
                        "payout": 1.87,
                        "source": "FANATICS",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "09tI-zerb-qX5s",
                        "participantKey": "biYO-wddv-j7OK",
                        "time": "2025-04-18T02:29:00.287Z"
                    }
                ],
                "context": {
                    "marketKey": "09tI-zerb-qX5s",
                    "marketType": "POINT_SPREAD",
                    "marketSegment": "FULL_MATCH",
                    "eventKey": "BsiB-zerb-sFT3",
                    "eventSport": "BASKETBALL",
                    "eventName": "Miami Heat @ Atlanta Hawks",
                    "eventStartTime": "2025-04-18T23:10:00.000Z",
                    "eventHomeParticipantKey": "0Ch7-wddv-OrXs",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Atlanta Hawks",
                            "key": "0Ch7-wddv-OrXs",
                            "shortName": "ATL",
                            "slug": "atlanta-hawks",
                            "sport": "BASKETBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Miami Heat",
                            "key": "biYO-wddv-j7OK",
                            "shortName": "MIA",
                            "slug": "miami-heat",
                            "sport": "BASKETBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 National Basketball Association",
                    "competitionInstanceKey": "g4sK-yinv-Lczx",
                    "competitionName": "National Basketball Association",
                    "competitionShortName": "NBA",
                    "competitionKey": "d791-wddv-30fU"
                }
            },
            {
                "type": "MIDDLE",
                "value": 2,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 1,
                        "payout": 1.91,
                        "source": "FAN_DUEL",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "09tI-zerb-qX5s",
                        "participantKey": "0Ch7-wddv-OrXs",
                        "time": "2025-04-18T02:29:00.287Z"
                    },
                    {
                        "modifier": 1,
                        "payout": 1.87,
                        "source": "FANATICS",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "09tI-zerb-qX5s",
                        "participantKey": "biYO-wddv-j7OK",
                        "time": "2025-04-18T02:29:00.287Z"
                    }
                ],
                "context": {
                    "marketKey": "09tI-zerb-qX5s",
                    "marketType": "POINT_SPREAD",
                    "marketSegment": "FULL_MATCH",
                    "eventKey": "BsiB-zerb-sFT3",
                    "eventSport": "BASKETBALL",
                    "eventName": "Miami Heat @ Atlanta Hawks",
                    "eventStartTime": "2025-04-18T23:10:00.000Z",
                    "eventHomeParticipantKey": "0Ch7-wddv-OrXs",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Atlanta Hawks",
                            "key": "0Ch7-wddv-OrXs",
                            "shortName": "ATL",
                            "slug": "atlanta-hawks",
                            "sport": "BASKETBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Miami Heat",
                            "key": "biYO-wddv-j7OK",
                            "shortName": "MIA",
                            "slug": "miami-heat",
                            "sport": "BASKETBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 National Basketball Association",
                    "competitionInstanceKey": "g4sK-yinv-Lczx",
                    "competitionName": "National Basketball Association",
                    "competitionShortName": "NBA",
                    "competitionKey": "d791-wddv-30fU"
                }
            },
            {
                "type": "MIDDLE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 3.5,
                        "payout": 1.52,
                        "source": "BET_PARX",
                        "type": "UNDER",
                        "live": false,
                        "marketKey": "0RiL-zegp-B33U",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.153Z"
                    },
                    {
                        "modifier": 2.5,
                        "payout": 1.56,
                        "source": "BET_RIVERS",
                        "type": "OVER",
                        "live": false,
                        "marketKey": "0RiL-zegp-B33U",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.112Z"
                    }
                ],
                "context": {
                    "marketKey": "0RiL-zegp-B33U",
                    "marketType": "POINT_TOTAL",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "rQE5-zegp-DzD1",
                    "eventSport": "SOCCER",
                    "eventName": "Atlanta United @ Philadelphia Union",
                    "eventStartTime": "2025-04-19T23:30:00.000Z",
                    "eventHomeParticipantKey": "4K5Q-wdgk-8oiD",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Atlanta United",
                            "key": "DCMl-wdgk-OaDe",
                            "shortName": "ATL",
                            "slug": "atlanta-united",
                            "sport": "SOCCER"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Philadelphia Union",
                            "key": "4K5Q-wdgk-8oiD",
                            "shortName": "PHI",
                            "slug": "philadelphia-union",
                            "sport": "SOCCER"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 Major League Soccer",
                    "competitionInstanceKey": "RlHj-zcjh-6jYC",
                    "competitionName": "Major League Soccer",
                    "competitionShortName": "MLS",
                    "competitionKey": "H2nG-wddv-NZsP"
                }
            },
            {
                "type": "MIDDLE",
                "value": 2,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 1.5,
                        "payout": 1.49,
                        "source": "BET_PARX",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "0rem-zerf-iGDO",
                        "participantKey": "r0VH-ykzc-2h85",
                        "time": "2025-04-18T02:29:00.127Z"
                    },
                    {
                        "modifier": 0.5,
                        "payout": 1.714286,
                        "source": "DRAFT_KINGS",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "0rem-zerf-iGDO",
                        "participantKey": "5Zag-wljx-D7T8",
                        "time": "2025-04-18T02:29:00.271Z"
                    }
                ],
                "context": {
                    "marketKey": "0rem-zerf-iGDO",
                    "marketType": "POINT_SPREAD",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "nTff-zepj-2GQC",
                    "eventSport": "HANDBALL",
                    "eventName": "Pays d'Aix Universite Club @ Tremblay En France",
                    "eventStartTime": "2025-04-18T18:30:00.000Z",
                    "eventHomeParticipantKey": "r0VH-ykzc-2h85",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Pays d'Aix Universite Club",
                            "key": "5Zag-wljx-D7T8",
                            "shortName": "PUC",
                            "slug": "pays-daix-universite-club",
                            "sport": "HANDBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Tremblay En France",
                            "key": "r0VH-ykzc-2h85",
                            "shortName": "TFHB",
                            "slug": "tremblay-en-france",
                            "sport": "HANDBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 LNH Division 1",
                    "competitionInstanceKey": "jPsx-yjxw-VjED",
                    "competitionName": "LNH Division 1",
                    "competitionShortName": "LNH_D1",
                    "competitionKey": "W4Mq-wljx-ykcq"
                }
            },
            {
                "type": "MIDDLE",
                "value": 2,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 1.5,
                        "payout": 1.49,
                        "source": "BET_RIVERS",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "0rem-zerf-iGDO",
                        "participantKey": "r0VH-ykzc-2h85",
                        "time": "2025-04-18T02:29:00.069Z"
                    },
                    {
                        "modifier": 0.5,
                        "payout": 1.714286,
                        "source": "DRAFT_KINGS",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "0rem-zerf-iGDO",
                        "participantKey": "5Zag-wljx-D7T8",
                        "time": "2025-04-18T02:29:00.271Z"
                    }
                ],
                "context": {
                    "marketKey": "0rem-zerf-iGDO",
                    "marketType": "POINT_SPREAD",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "nTff-zepj-2GQC",
                    "eventSport": "HANDBALL",
                    "eventName": "Pays d'Aix Universite Club @ Tremblay En France",
                    "eventStartTime": "2025-04-18T18:30:00.000Z",
                    "eventHomeParticipantKey": "r0VH-ykzc-2h85",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Pays d'Aix Universite Club",
                            "key": "5Zag-wljx-D7T8",
                            "shortName": "PUC",
                            "slug": "pays-daix-universite-club",
                            "sport": "HANDBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Tremblay En France",
                            "key": "r0VH-ykzc-2h85",
                            "shortName": "TFHB",
                            "slug": "tremblay-en-france",
                            "sport": "HANDBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 LNH Division 1",
                    "competitionInstanceKey": "jPsx-yjxw-VjED",
                    "competitionName": "LNH Division 1",
                    "competitionShortName": "LNH_D1",
                    "competitionKey": "W4Mq-wljx-ykcq"
                }
            },
            {
                "type": "MIDDLE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": -25.5,
                        "payout": 1.9,
                        "source": "BET_PARX",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "3aWu-zeie-xUeC",
                        "participantKey": "kNKQ-xbdu-jla0",
                        "time": "2025-04-18T02:29:00.124Z"
                    },
                    {
                        "modifier": 26.5,
                        "payout": 1.87,
                        "source": "ESPN_BET",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "3aWu-zeie-xUeC",
                        "participantKey": "TMCr-xbdu-tRh2",
                        "time": "2025-04-18T02:29:00.281Z"
                    }
                ],
                "context": {
                    "marketKey": "3aWu-zeie-xUeC",
                    "marketType": "POINT_SPREAD",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "jE1v-zeie-V6TC",
                    "eventSport": "AUSTRALIAN_RULES_FOOTBALL",
                    "eventName": "Essendon @ West Coast Eagles",
                    "eventStartTime": "2025-04-18T08:10:00.000Z",
                    "eventHomeParticipantKey": "TMCr-xbdu-tRh2",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Essendon",
                            "key": "kNKQ-xbdu-jla0",
                            "shortName": "ESS",
                            "slug": "essendon",
                            "sport": "AUSTRALIAN_RULES_FOOTBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "West Coast Eagles",
                            "key": "TMCr-xbdu-tRh2",
                            "shortName": "WCE",
                            "slug": "west-coast-eagles",
                            "sport": "AUSTRALIAN_RULES_FOOTBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 Australian Football League",
                    "competitionInstanceKey": "6dBj-ykzc-cMtp",
                    "competitionName": "Australian Football League",
                    "competitionShortName": "AFL",
                    "competitionKey": "jcKL-xbdu-POdB"
                }
            },
            {
                "type": "MIDDLE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": -25.5,
                        "payout": 1.9,
                        "source": "BET_RIVERS",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "3aWu-zeie-xUeC",
                        "participantKey": "kNKQ-xbdu-jla0",
                        "time": "2025-04-18T02:29:00.067Z"
                    },
                    {
                        "modifier": 26.5,
                        "payout": 1.87,
                        "source": "ESPN_BET",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "3aWu-zeie-xUeC",
                        "participantKey": "TMCr-xbdu-tRh2",
                        "time": "2025-04-18T02:29:00.281Z"
                    }
                ],
                "context": {
                    "marketKey": "3aWu-zeie-xUeC",
                    "marketType": "POINT_SPREAD",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "jE1v-zeie-V6TC",
                    "eventSport": "AUSTRALIAN_RULES_FOOTBALL",
                    "eventName": "Essendon @ West Coast Eagles",
                    "eventStartTime": "2025-04-18T08:10:00.000Z",
                    "eventHomeParticipantKey": "TMCr-xbdu-tRh2",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Essendon",
                            "key": "kNKQ-xbdu-jla0",
                            "shortName": "ESS",
                            "slug": "essendon",
                            "sport": "AUSTRALIAN_RULES_FOOTBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "West Coast Eagles",
                            "key": "TMCr-xbdu-tRh2",
                            "shortName": "WCE",
                            "slug": "west-coast-eagles",
                            "sport": "AUSTRALIAN_RULES_FOOTBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 Australian Football League",
                    "competitionInstanceKey": "6dBj-ykzc-cMtp",
                    "competitionName": "Australian Football League",
                    "competitionShortName": "AFL",
                    "competitionKey": "jcKL-xbdu-POdB"
                }
            },
            {
                "type": "MIDDLE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": -25.5,
                        "payout": 1.869565,
                        "source": "DRAFT_KINGS",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "3aWu-zeie-xUeC",
                        "participantKey": "kNKQ-xbdu-jla0",
                        "time": "2025-04-18T02:29:00.271Z"
                    },
                    {
                        "modifier": 26.5,
                        "payout": 1.87,
                        "source": "ESPN_BET",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "3aWu-zeie-xUeC",
                        "participantKey": "TMCr-xbdu-tRh2",
                        "time": "2025-04-18T02:29:00.281Z"
                    }
                ],
                "context": {
                    "marketKey": "3aWu-zeie-xUeC",
                    "marketType": "POINT_SPREAD",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "jE1v-zeie-V6TC",
                    "eventSport": "AUSTRALIAN_RULES_FOOTBALL",
                    "eventName": "Essendon @ West Coast Eagles",
                    "eventStartTime": "2025-04-18T08:10:00.000Z",
                    "eventHomeParticipantKey": "TMCr-xbdu-tRh2",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Essendon",
                            "key": "kNKQ-xbdu-jla0",
                            "shortName": "ESS",
                            "slug": "essendon",
                            "sport": "AUSTRALIAN_RULES_FOOTBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "West Coast Eagles",
                            "key": "TMCr-xbdu-tRh2",
                            "shortName": "WCE",
                            "slug": "west-coast-eagles",
                            "sport": "AUSTRALIAN_RULES_FOOTBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 Australian Football League",
                    "competitionInstanceKey": "6dBj-ykzc-cMtp",
                    "competitionName": "Australian Football League",
                    "competitionShortName": "AFL",
                    "competitionKey": "jcKL-xbdu-POdB"
                }
            },
            {
                "type": "MIDDLE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 2.5,
                        "payout": 1.45,
                        "source": "BET_PARX",
                        "type": "UNDER",
                        "live": false,
                        "marketKey": "3sFt-zegt-y37p",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.220Z"
                    },
                    {
                        "modifier": 1.5,
                        "payout": 1.48,
                        "source": "BET_RIVERS",
                        "type": "OVER",
                        "live": false,
                        "marketKey": "3sFt-zegt-y37p",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.115Z"
                    }
                ],
                "context": {
                    "marketKey": "3sFt-zegt-y37p",
                    "marketType": "POINT_TOTAL",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "0JQI-zegt-vSWW",
                    "eventSport": "SOCCER",
                    "eventName": "Alaves @ Sevilla",
                    "eventStartTime": "2025-04-20T16:30:00.000Z",
                    "eventHomeParticipantKey": "no9v-wlct-llv6",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Sevilla",
                            "key": "no9v-wlct-llv6",
                            "shortName": "SEV",
                            "slug": "sevilla",
                            "sport": "SOCCER"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Alaves",
                            "key": "0fMy-xgAw-Vnu7",
                            "shortName": "ALA",
                            "slug": "alaves",
                            "sport": "SOCCER"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 Spanish La Liga",
                    "competitionInstanceKey": "VQM5-yiqw-x4Xi",
                    "competitionName": "Spanish La Liga",
                    "competitionShortName": "LA_LIGA",
                    "competitionKey": "UqE7-wlct-9mU2"
                }
            },
            {
                "type": "MIDDLE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": -16.5,
                        "payout": 1.9,
                        "source": "BET_PARX",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "4F3F-zeie-ozyM",
                        "participantKey": "MwYy-xbdu-A0C5",
                        "time": "2025-04-18T02:29:00.124Z"
                    },
                    {
                        "modifier": 17.5,
                        "payout": 1.87,
                        "source": "ESPN_BET",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "4F3F-zeie-ozyM",
                        "participantKey": "OZ1B-xbdu-ToxP",
                        "time": "2025-04-18T02:29:00.281Z"
                    }
                ],
                "context": {
                    "marketKey": "4F3F-zeie-ozyM",
                    "marketType": "POINT_SPREAD",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "6jGn-zeie-n2Av",
                    "eventSport": "AUSTRALIAN_RULES_FOOTBALL",
                    "eventName": "Carlton @ North Melbourne",
                    "eventStartTime": "2025-04-18T05:20:00.000Z",
                    "eventHomeParticipantKey": "OZ1B-xbdu-ToxP",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "North Melbourne",
                            "key": "OZ1B-xbdu-ToxP",
                            "shortName": "NM",
                            "slug": "north-melbourne",
                            "sport": "AUSTRALIAN_RULES_FOOTBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Carlton",
                            "key": "MwYy-xbdu-A0C5",
                            "shortName": "CAR",
                            "slug": "carlton",
                            "sport": "AUSTRALIAN_RULES_FOOTBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 Australian Football League",
                    "competitionInstanceKey": "6dBj-ykzc-cMtp",
                    "competitionName": "Australian Football League",
                    "competitionShortName": "AFL",
                    "competitionKey": "jcKL-xbdu-POdB"
                }
            },
            {
                "type": "MIDDLE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": -16.5,
                        "payout": 1.9,
                        "source": "BET_RIVERS",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "4F3F-zeie-ozyM",
                        "participantKey": "MwYy-xbdu-A0C5",
                        "time": "2025-04-18T02:29:00.067Z"
                    },
                    {
                        "modifier": 17.5,
                        "payout": 1.87,
                        "source": "ESPN_BET",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "4F3F-zeie-ozyM",
                        "participantKey": "OZ1B-xbdu-ToxP",
                        "time": "2025-04-18T02:29:00.281Z"
                    }
                ],
                "context": {
                    "marketKey": "4F3F-zeie-ozyM",
                    "marketType": "POINT_SPREAD",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "6jGn-zeie-n2Av",
                    "eventSport": "AUSTRALIAN_RULES_FOOTBALL",
                    "eventName": "Carlton @ North Melbourne",
                    "eventStartTime": "2025-04-18T05:20:00.000Z",
                    "eventHomeParticipantKey": "OZ1B-xbdu-ToxP",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "North Melbourne",
                            "key": "OZ1B-xbdu-ToxP",
                            "shortName": "NM",
                            "slug": "north-melbourne",
                            "sport": "AUSTRALIAN_RULES_FOOTBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Carlton",
                            "key": "MwYy-xbdu-A0C5",
                            "shortName": "CAR",
                            "slug": "carlton",
                            "sport": "AUSTRALIAN_RULES_FOOTBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 Australian Football League",
                    "competitionInstanceKey": "6dBj-ykzc-cMtp",
                    "competitionName": "Australian Football League",
                    "competitionShortName": "AFL",
                    "competitionKey": "jcKL-xbdu-POdB"
                }
            },
            {
                "type": "MIDDLE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": -16.5,
                        "payout": 1.869565,
                        "source": "DRAFT_KINGS",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "4F3F-zeie-ozyM",
                        "participantKey": "MwYy-xbdu-A0C5",
                        "time": "2025-04-18T02:29:00.271Z"
                    },
                    {
                        "modifier": 17.5,
                        "payout": 1.87,
                        "source": "ESPN_BET",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "4F3F-zeie-ozyM",
                        "participantKey": "OZ1B-xbdu-ToxP",
                        "time": "2025-04-18T02:29:00.281Z"
                    }
                ],
                "context": {
                    "marketKey": "4F3F-zeie-ozyM",
                    "marketType": "POINT_SPREAD",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "6jGn-zeie-n2Av",
                    "eventSport": "AUSTRALIAN_RULES_FOOTBALL",
                    "eventName": "Carlton @ North Melbourne",
                    "eventStartTime": "2025-04-18T05:20:00.000Z",
                    "eventHomeParticipantKey": "OZ1B-xbdu-ToxP",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "North Melbourne",
                            "key": "OZ1B-xbdu-ToxP",
                            "shortName": "NM",
                            "slug": "north-melbourne",
                            "sport": "AUSTRALIAN_RULES_FOOTBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Carlton",
                            "key": "MwYy-xbdu-A0C5",
                            "shortName": "CAR",
                            "slug": "carlton",
                            "sport": "AUSTRALIAN_RULES_FOOTBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 Australian Football League",
                    "competitionInstanceKey": "6dBj-ykzc-cMtp",
                    "competitionName": "Australian Football League",
                    "competitionShortName": "AFL",
                    "competitionKey": "jcKL-xbdu-POdB"
                }
            },
            {
                "type": "MIDDLE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 3.5,
                        "payout": 1.45,
                        "source": "BET_PARX",
                        "type": "UNDER",
                        "live": false,
                        "marketKey": "58hf-zego-wpx7",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.241Z"
                    },
                    {
                        "modifier": 2.5,
                        "payout": 1.66,
                        "source": "BET_RIVERS",
                        "type": "OVER",
                        "live": false,
                        "marketKey": "58hf-zego-wpx7",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.119Z"
                    }
                ],
                "context": {
                    "marketKey": "58hf-zego-wpx7",
                    "marketType": "POINT_TOTAL",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "ln5C-zego-bsNs",
                    "eventSport": "SOCCER",
                    "eventName": "Atalanta @ AC Milan",
                    "eventStartTime": "2025-04-20T18:45:00.000Z",
                    "eventHomeParticipantKey": "AhJn-wlct-oXPe",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "AC Milan",
                            "key": "AhJn-wlct-oXPe",
                            "shortName": "MIL",
                            "slug": "ac-milan",
                            "sport": "SOCCER"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Atalanta",
                            "key": "fdSK-wlct-u4wX",
                            "shortName": "ATT",
                            "slug": "atalanta",
                            "sport": "SOCCER"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 Italian Serie A",
                    "competitionInstanceKey": "7uZ7-yiqw-KOeX",
                    "competitionName": "Italian Serie A",
                    "competitionShortName": "SERIE_A",
                    "competitionKey": "H9PU-wlct-DJ8j"
                }
            },
            {
                "type": "MIDDLE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 2.5,
                        "payout": 1.52,
                        "source": "BET_PARX",
                        "type": "OVER",
                        "live": false,
                        "marketKey": "5TOf-zemm-efYH",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.128Z"
                    },
                    {
                        "modifier": 3.5,
                        "payout": 1.58,
                        "source": "BET_RIVERS",
                        "type": "UNDER",
                        "live": false,
                        "marketKey": "5TOf-zemm-efYH",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.071Z"
                    }
                ],
                "context": {
                    "marketKey": "5TOf-zemm-efYH",
                    "marketType": "POINT_TOTAL",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "5jeM-zemm-2PWg",
                    "eventSport": "SOCCER",
                    "eventName": "Aston Villa @ Manchester City",
                    "eventStartTime": "2025-04-22T19:00:00.000Z",
                    "eventHomeParticipantKey": "dmsk-wjcs-JNb6",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Manchester City",
                            "key": "dmsk-wjcs-JNb6",
                            "shortName": "MCI",
                            "slug": "manchester-city",
                            "sport": "SOCCER"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Aston Villa",
                            "key": "RILp-wjcs-b2wr",
                            "shortName": "AVL",
                            "slug": "aston-villa",
                            "sport": "SOCCER"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 English Premier League",
                    "competitionInstanceKey": "dhy8-yiqv-zo8S",
                    "competitionName": "English Premier League",
                    "competitionShortName": "EPL",
                    "competitionKey": "Xa0f-wjcs-tANp"
                }
            },
            {
                "type": "MIDDLE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 221.5,
                        "payout": 1.925926,
                        "source": "DRAFT_KINGS",
                        "type": "UNDER",
                        "live": false,
                        "marketKey": "5cdz-zere-RPn7",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.274Z"
                    },
                    {
                        "modifier": 220.5,
                        "payout": 1.91,
                        "source": "ESPN_BET",
                        "type": "OVER",
                        "live": false,
                        "marketKey": "5cdz-zere-RPn7",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.282Z"
                    }
                ],
                "context": {
                    "marketKey": "5cdz-zere-RPn7",
                    "marketType": "POINT_TOTAL",
                    "marketSegment": "FULL_MATCH",
                    "eventKey": "PFtw-zere-ntHf",
                    "eventSport": "BASKETBALL",
                    "eventName": "Dallas Mavericks @ Memphis Grizzlies",
                    "eventStartTime": "2025-04-19T01:40:00.000Z",
                    "eventHomeParticipantKey": "FQsn-wddv-gGK3",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Dallas Mavericks",
                            "key": "BEYT-wddv-Yfd3",
                            "shortName": "DAL",
                            "slug": "dallas-mavericks",
                            "sport": "BASKETBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Memphis Grizzlies",
                            "key": "FQsn-wddv-gGK3",
                            "shortName": "MEM",
                            "slug": "memphis-grizzlies",
                            "sport": "BASKETBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 National Basketball Association",
                    "competitionInstanceKey": "g4sK-yinv-Lczx",
                    "competitionName": "National Basketball Association",
                    "competitionShortName": "NBA",
                    "competitionKey": "d791-wddv-30fU"
                }
            },
            {
                "type": "MIDDLE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 176.5,
                        "payout": 1.9,
                        "source": "BET_PARX",
                        "type": "UNDER",
                        "live": false,
                        "marketKey": "5e0h-zeof-suTR",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.124Z"
                    },
                    {
                        "modifier": 175.5,
                        "payout": 1.83,
                        "source": "ESPN_BET",
                        "type": "OVER",
                        "live": false,
                        "marketKey": "5e0h-zeof-suTR",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.281Z"
                    }
                ],
                "context": {
                    "marketKey": "5e0h-zeof-suTR",
                    "marketType": "POINT_TOTAL",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "jE1v-zeie-V6TC",
                    "eventSport": "AUSTRALIAN_RULES_FOOTBALL",
                    "eventName": "Essendon @ West Coast Eagles",
                    "eventStartTime": "2025-04-18T08:10:00.000Z",
                    "eventHomeParticipantKey": "TMCr-xbdu-tRh2",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Essendon",
                            "key": "kNKQ-xbdu-jla0",
                            "shortName": "ESS",
                            "slug": "essendon",
                            "sport": "AUSTRALIAN_RULES_FOOTBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "West Coast Eagles",
                            "key": "TMCr-xbdu-tRh2",
                            "shortName": "WCE",
                            "slug": "west-coast-eagles",
                            "sport": "AUSTRALIAN_RULES_FOOTBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 Australian Football League",
                    "competitionInstanceKey": "6dBj-ykzc-cMtp",
                    "competitionName": "Australian Football League",
                    "competitionShortName": "AFL",
                    "competitionKey": "jcKL-xbdu-POdB"
                }
            },
            {
                "type": "MIDDLE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 176.5,
                        "payout": 1.9,
                        "source": "BET_RIVERS",
                        "type": "UNDER",
                        "live": false,
                        "marketKey": "5e0h-zeof-suTR",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.067Z"
                    },
                    {
                        "modifier": 175.5,
                        "payout": 1.83,
                        "source": "ESPN_BET",
                        "type": "OVER",
                        "live": false,
                        "marketKey": "5e0h-zeof-suTR",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.281Z"
                    }
                ],
                "context": {
                    "marketKey": "5e0h-zeof-suTR",
                    "marketType": "POINT_TOTAL",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "jE1v-zeie-V6TC",
                    "eventSport": "AUSTRALIAN_RULES_FOOTBALL",
                    "eventName": "Essendon @ West Coast Eagles",
                    "eventStartTime": "2025-04-18T08:10:00.000Z",
                    "eventHomeParticipantKey": "TMCr-xbdu-tRh2",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Essendon",
                            "key": "kNKQ-xbdu-jla0",
                            "shortName": "ESS",
                            "slug": "essendon",
                            "sport": "AUSTRALIAN_RULES_FOOTBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "West Coast Eagles",
                            "key": "TMCr-xbdu-tRh2",
                            "shortName": "WCE",
                            "slug": "west-coast-eagles",
                            "sport": "AUSTRALIAN_RULES_FOOTBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 Australian Football League",
                    "competitionInstanceKey": "6dBj-ykzc-cMtp",
                    "competitionName": "Australian Football League",
                    "competitionShortName": "AFL",
                    "competitionKey": "jcKL-xbdu-POdB"
                }
            },
            {
                "type": "MIDDLE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 176.5,
                        "payout": 1.869565,
                        "source": "DRAFT_KINGS",
                        "type": "UNDER",
                        "live": false,
                        "marketKey": "5e0h-zeof-suTR",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.271Z"
                    },
                    {
                        "modifier": 175.5,
                        "payout": 1.83,
                        "source": "ESPN_BET",
                        "type": "OVER",
                        "live": false,
                        "marketKey": "5e0h-zeof-suTR",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.281Z"
                    }
                ],
                "context": {
                    "marketKey": "5e0h-zeof-suTR",
                    "marketType": "POINT_TOTAL",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "jE1v-zeie-V6TC",
                    "eventSport": "AUSTRALIAN_RULES_FOOTBALL",
                    "eventName": "Essendon @ West Coast Eagles",
                    "eventStartTime": "2025-04-18T08:10:00.000Z",
                    "eventHomeParticipantKey": "TMCr-xbdu-tRh2",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Essendon",
                            "key": "kNKQ-xbdu-jla0",
                            "shortName": "ESS",
                            "slug": "essendon",
                            "sport": "AUSTRALIAN_RULES_FOOTBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "West Coast Eagles",
                            "key": "TMCr-xbdu-tRh2",
                            "shortName": "WCE",
                            "slug": "west-coast-eagles",
                            "sport": "AUSTRALIAN_RULES_FOOTBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 Australian Football League",
                    "competitionInstanceKey": "6dBj-ykzc-cMtp",
                    "competitionName": "Australian Football League",
                    "competitionShortName": "AFL",
                    "competitionKey": "jcKL-xbdu-POdB"
                }
            },
            {
                "type": "MIDDLE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 3.5,
                        "payout": 1.48,
                        "source": "BET_PARX",
                        "type": "UNDER",
                        "live": false,
                        "marketKey": "6vcu-zeoi-6zA2",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.241Z"
                    },
                    {
                        "modifier": 2.5,
                        "payout": 1.58,
                        "source": "BET_RIVERS",
                        "type": "OVER",
                        "live": false,
                        "marketKey": "6vcu-zeoi-6zA2",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.119Z"
                    }
                ],
                "context": {
                    "marketKey": "6vcu-zeoi-6zA2",
                    "marketType": "POINT_TOTAL",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "e97R-zeoh-KVgE",
                    "eventSport": "SOCCER",
                    "eventName": "Lecce @ Atalanta",
                    "eventStartTime": "2025-04-27T13:00:00.000Z",
                    "eventHomeParticipantKey": "fdSK-wlct-u4wX",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Atalanta",
                            "key": "fdSK-wlct-u4wX",
                            "shortName": "ATT",
                            "slug": "atalanta",
                            "sport": "SOCCER"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Lecce",
                            "key": "A2AS-wlct-cxfD",
                            "shortName": "LEC",
                            "slug": "lecce",
                            "sport": "SOCCER"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 Italian Serie A",
                    "competitionInstanceKey": "7uZ7-yiqw-KOeX",
                    "competitionName": "Italian Serie A",
                    "competitionShortName": "SERIE_A",
                    "competitionKey": "H9PU-wlct-DJ8j"
                }
            },
            {
                "type": "MIDDLE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 0.5,
                        "payout": 1.571429,
                        "source": "BOVADA",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "7M4G-zero-KesK",
                        "participantKey": "5Wnu-wiDr-CnNp",
                        "time": "2025-04-18T02:29:00.257Z"
                    },
                    {
                        "modifier": 0.5,
                        "payout": 1.571429,
                        "source": "DRAFT_KINGS",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "7M4G-zero-KesK",
                        "participantKey": "rkK0-wiDr-xpZ3",
                        "time": "2025-04-18T02:29:00.278Z"
                    }
                ],
                "context": {
                    "marketKey": "7M4G-zero-KesK",
                    "marketType": "POINT_SPREAD",
                    "marketSegment": "FIRST_5_INNINGS",
                    "eventKey": "wp3W-zern-dtnj",
                    "eventSport": "BASEBALL",
                    "eventName": "Fukuoka SoftBank Hawks @ Saitama Seibu Lions",
                    "eventStartTime": "2025-04-18T09:00:00.000Z",
                    "eventHomeParticipantKey": "rkK0-wiDr-xpZ3",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Fukuoka SoftBank Hawks",
                            "key": "5Wnu-wiDr-CnNp",
                            "shortName": "SBH",
                            "slug": "fukuoka-softbank-hawks",
                            "sport": "BASEBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Saitama Seibu Lions",
                            "key": "rkK0-wiDr-xpZ3",
                            "shortName": "SSL",
                            "slug": "saitama-seibu-lions",
                            "sport": "BASEBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 Nippon Professional Baseball League",
                    "competitionInstanceKey": "KLrD-zdeg-kORo",
                    "competitionName": "Nippon Professional Baseball League",
                    "competitionShortName": "NPB",
                    "competitionKey": "CWpx-wiDr-05BA"
                }
            },
            {
                "type": "MIDDLE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 180.5,
                        "payout": 1.9,
                        "source": "BET_PARX",
                        "type": "OVER",
                        "live": false,
                        "marketKey": "CFC5-zeof-0ZY6",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.124Z"
                    },
                    {
                        "modifier": 181.5,
                        "payout": 1.869565,
                        "source": "DRAFT_KINGS",
                        "type": "UNDER",
                        "live": false,
                        "marketKey": "CFC5-zeof-0ZY6",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.271Z"
                    }
                ],
                "context": {
                    "marketKey": "CFC5-zeof-0ZY6",
                    "marketType": "POINT_TOTAL",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "6jGn-zeie-n2Av",
                    "eventSport": "AUSTRALIAN_RULES_FOOTBALL",
                    "eventName": "Carlton @ North Melbourne",
                    "eventStartTime": "2025-04-18T05:20:00.000Z",
                    "eventHomeParticipantKey": "OZ1B-xbdu-ToxP",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "North Melbourne",
                            "key": "OZ1B-xbdu-ToxP",
                            "shortName": "NM",
                            "slug": "north-melbourne",
                            "sport": "AUSTRALIAN_RULES_FOOTBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Carlton",
                            "key": "MwYy-xbdu-A0C5",
                            "shortName": "CAR",
                            "slug": "carlton",
                            "sport": "AUSTRALIAN_RULES_FOOTBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 Australian Football League",
                    "competitionInstanceKey": "6dBj-ykzc-cMtp",
                    "competitionName": "Australian Football League",
                    "competitionShortName": "AFL",
                    "competitionKey": "jcKL-xbdu-POdB"
                }
            },
            {
                "type": "MIDDLE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 180.5,
                        "payout": 1.9,
                        "source": "BET_PARX",
                        "type": "UNDER",
                        "live": false,
                        "marketKey": "CFC5-zeof-0ZY6",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.124Z"
                    },
                    {
                        "modifier": 179.5,
                        "payout": 1.87,
                        "source": "ESPN_BET",
                        "type": "OVER",
                        "live": false,
                        "marketKey": "CFC5-zeof-0ZY6",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.281Z"
                    }
                ],
                "context": {
                    "marketKey": "CFC5-zeof-0ZY6",
                    "marketType": "POINT_TOTAL",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "6jGn-zeie-n2Av",
                    "eventSport": "AUSTRALIAN_RULES_FOOTBALL",
                    "eventName": "Carlton @ North Melbourne",
                    "eventStartTime": "2025-04-18T05:20:00.000Z",
                    "eventHomeParticipantKey": "OZ1B-xbdu-ToxP",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "North Melbourne",
                            "key": "OZ1B-xbdu-ToxP",
                            "shortName": "NM",
                            "slug": "north-melbourne",
                            "sport": "AUSTRALIAN_RULES_FOOTBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Carlton",
                            "key": "MwYy-xbdu-A0C5",
                            "shortName": "CAR",
                            "slug": "carlton",
                            "sport": "AUSTRALIAN_RULES_FOOTBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 Australian Football League",
                    "competitionInstanceKey": "6dBj-ykzc-cMtp",
                    "competitionName": "Australian Football League",
                    "competitionShortName": "AFL",
                    "competitionKey": "jcKL-xbdu-POdB"
                }
            },
            {
                "type": "MIDDLE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 180.5,
                        "payout": 1.9,
                        "source": "BET_RIVERS",
                        "type": "OVER",
                        "live": false,
                        "marketKey": "CFC5-zeof-0ZY6",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.067Z"
                    },
                    {
                        "modifier": 181.5,
                        "payout": 1.869565,
                        "source": "DRAFT_KINGS",
                        "type": "UNDER",
                        "live": false,
                        "marketKey": "CFC5-zeof-0ZY6",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.271Z"
                    }
                ],
                "context": {
                    "marketKey": "CFC5-zeof-0ZY6",
                    "marketType": "POINT_TOTAL",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "6jGn-zeie-n2Av",
                    "eventSport": "AUSTRALIAN_RULES_FOOTBALL",
                    "eventName": "Carlton @ North Melbourne",
                    "eventStartTime": "2025-04-18T05:20:00.000Z",
                    "eventHomeParticipantKey": "OZ1B-xbdu-ToxP",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "North Melbourne",
                            "key": "OZ1B-xbdu-ToxP",
                            "shortName": "NM",
                            "slug": "north-melbourne",
                            "sport": "AUSTRALIAN_RULES_FOOTBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Carlton",
                            "key": "MwYy-xbdu-A0C5",
                            "shortName": "CAR",
                            "slug": "carlton",
                            "sport": "AUSTRALIAN_RULES_FOOTBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 Australian Football League",
                    "competitionInstanceKey": "6dBj-ykzc-cMtp",
                    "competitionName": "Australian Football League",
                    "competitionShortName": "AFL",
                    "competitionKey": "jcKL-xbdu-POdB"
                }
            },
            {
                "type": "MIDDLE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 180.5,
                        "payout": 1.9,
                        "source": "BET_RIVERS",
                        "type": "UNDER",
                        "live": false,
                        "marketKey": "CFC5-zeof-0ZY6",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.067Z"
                    },
                    {
                        "modifier": 179.5,
                        "payout": 1.87,
                        "source": "ESPN_BET",
                        "type": "OVER",
                        "live": false,
                        "marketKey": "CFC5-zeof-0ZY6",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.281Z"
                    }
                ],
                "context": {
                    "marketKey": "CFC5-zeof-0ZY6",
                    "marketType": "POINT_TOTAL",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "6jGn-zeie-n2Av",
                    "eventSport": "AUSTRALIAN_RULES_FOOTBALL",
                    "eventName": "Carlton @ North Melbourne",
                    "eventStartTime": "2025-04-18T05:20:00.000Z",
                    "eventHomeParticipantKey": "OZ1B-xbdu-ToxP",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "North Melbourne",
                            "key": "OZ1B-xbdu-ToxP",
                            "shortName": "NM",
                            "slug": "north-melbourne",
                            "sport": "AUSTRALIAN_RULES_FOOTBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Carlton",
                            "key": "MwYy-xbdu-A0C5",
                            "shortName": "CAR",
                            "slug": "carlton",
                            "sport": "AUSTRALIAN_RULES_FOOTBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 Australian Football League",
                    "competitionInstanceKey": "6dBj-ykzc-cMtp",
                    "competitionName": "Australian Football League",
                    "competitionShortName": "AFL",
                    "competitionKey": "jcKL-xbdu-POdB"
                }
            },
            {
                "type": "MIDDLE",
                "value": 2,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 181.5,
                        "payout": 1.869565,
                        "source": "DRAFT_KINGS",
                        "type": "UNDER",
                        "live": false,
                        "marketKey": "CFC5-zeof-0ZY6",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.271Z"
                    },
                    {
                        "modifier": 179.5,
                        "payout": 1.87,
                        "source": "ESPN_BET",
                        "type": "OVER",
                        "live": false,
                        "marketKey": "CFC5-zeof-0ZY6",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.281Z"
                    }
                ],
                "context": {
                    "marketKey": "CFC5-zeof-0ZY6",
                    "marketType": "POINT_TOTAL",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "6jGn-zeie-n2Av",
                    "eventSport": "AUSTRALIAN_RULES_FOOTBALL",
                    "eventName": "Carlton @ North Melbourne",
                    "eventStartTime": "2025-04-18T05:20:00.000Z",
                    "eventHomeParticipantKey": "OZ1B-xbdu-ToxP",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "North Melbourne",
                            "key": "OZ1B-xbdu-ToxP",
                            "shortName": "NM",
                            "slug": "north-melbourne",
                            "sport": "AUSTRALIAN_RULES_FOOTBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Carlton",
                            "key": "MwYy-xbdu-A0C5",
                            "shortName": "CAR",
                            "slug": "carlton",
                            "sport": "AUSTRALIAN_RULES_FOOTBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 Australian Football League",
                    "competitionInstanceKey": "6dBj-ykzc-cMtp",
                    "competitionName": "Australian Football League",
                    "competitionShortName": "AFL",
                    "competitionKey": "jcKL-xbdu-POdB"
                }
            },
            {
                "type": "MIDDLE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 6.5,
                        "payout": 1.8,
                        "source": "BET_PARX",
                        "type": "UNDER",
                        "live": false,
                        "marketKey": "DMNT-zern-cj48",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.197Z"
                    },
                    {
                        "modifier": 5.5,
                        "payout": 1.77,
                        "source": "ESPN_BET",
                        "type": "OVER",
                        "live": false,
                        "marketKey": "DMNT-zern-cj48",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.283Z"
                    }
                ],
                "context": {
                    "marketKey": "DMNT-zern-cj48",
                    "marketType": "POINT_TOTAL",
                    "marketSegment": "FULL_MATCH",
                    "eventKey": "Euc0-zern-Ap6V",
                    "eventSport": "BASEBALL",
                    "eventName": "Hokkaido Nippon-Ham Fighters @ Orix Buffaloes",
                    "eventStartTime": "2025-04-18T09:00:00.000Z",
                    "eventHomeParticipantKey": "wLUj-wiDr-0Qs0",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Hokkaido Nippon-Ham Fighters",
                            "key": "P0ni-wiDr-myJ2",
                            "shortName": "NHF",
                            "slug": "hokkaido-nippon-ham-fighters",
                            "sport": "BASEBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Orix Buffaloes",
                            "key": "wLUj-wiDr-0Qs0",
                            "shortName": "ORB",
                            "slug": "orix-buffaloes",
                            "sport": "BASEBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 Nippon Professional Baseball League",
                    "competitionInstanceKey": "KLrD-zdeg-kORo",
                    "competitionName": "Nippon Professional Baseball League",
                    "competitionShortName": "NPB",
                    "competitionKey": "CWpx-wiDr-05BA"
                }
            },
            {
                "type": "MIDDLE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 6.5,
                        "payout": 1.8,
                        "source": "BET_PARX",
                        "type": "UNDER",
                        "live": false,
                        "marketKey": "DMNT-zern-cj48",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.197Z"
                    },
                    {
                        "modifier": 5.5,
                        "payout": 1.77,
                        "source": "FAN_DUEL",
                        "type": "OVER",
                        "live": false,
                        "marketKey": "DMNT-zern-cj48",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.288Z"
                    }
                ],
                "context": {
                    "marketKey": "DMNT-zern-cj48",
                    "marketType": "POINT_TOTAL",
                    "marketSegment": "FULL_MATCH",
                    "eventKey": "Euc0-zern-Ap6V",
                    "eventSport": "BASEBALL",
                    "eventName": "Hokkaido Nippon-Ham Fighters @ Orix Buffaloes",
                    "eventStartTime": "2025-04-18T09:00:00.000Z",
                    "eventHomeParticipantKey": "wLUj-wiDr-0Qs0",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Hokkaido Nippon-Ham Fighters",
                            "key": "P0ni-wiDr-myJ2",
                            "shortName": "NHF",
                            "slug": "hokkaido-nippon-ham-fighters",
                            "sport": "BASEBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Orix Buffaloes",
                            "key": "wLUj-wiDr-0Qs0",
                            "shortName": "ORB",
                            "slug": "orix-buffaloes",
                            "sport": "BASEBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 Nippon Professional Baseball League",
                    "competitionInstanceKey": "KLrD-zdeg-kORo",
                    "competitionName": "Nippon Professional Baseball League",
                    "competitionShortName": "NPB",
                    "competitionKey": "CWpx-wiDr-05BA"
                }
            },
            {
                "type": "MIDDLE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 6.5,
                        "payout": 1.8,
                        "source": "BET_PARX",
                        "type": "UNDER",
                        "live": false,
                        "marketKey": "DMNT-zern-cj48",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.197Z"
                    },
                    {
                        "modifier": 5.5,
                        "payout": 1.77,
                        "source": "FANATICS",
                        "type": "OVER",
                        "live": false,
                        "marketKey": "DMNT-zern-cj48",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.288Z"
                    }
                ],
                "context": {
                    "marketKey": "DMNT-zern-cj48",
                    "marketType": "POINT_TOTAL",
                    "marketSegment": "FULL_MATCH",
                    "eventKey": "Euc0-zern-Ap6V",
                    "eventSport": "BASEBALL",
                    "eventName": "Hokkaido Nippon-Ham Fighters @ Orix Buffaloes",
                    "eventStartTime": "2025-04-18T09:00:00.000Z",
                    "eventHomeParticipantKey": "wLUj-wiDr-0Qs0",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Hokkaido Nippon-Ham Fighters",
                            "key": "P0ni-wiDr-myJ2",
                            "shortName": "NHF",
                            "slug": "hokkaido-nippon-ham-fighters",
                            "sport": "BASEBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Orix Buffaloes",
                            "key": "wLUj-wiDr-0Qs0",
                            "shortName": "ORB",
                            "slug": "orix-buffaloes",
                            "sport": "BASEBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 Nippon Professional Baseball League",
                    "competitionInstanceKey": "KLrD-zdeg-kORo",
                    "competitionName": "Nippon Professional Baseball League",
                    "competitionShortName": "NPB",
                    "competitionKey": "CWpx-wiDr-05BA"
                }
            },
            {
                "type": "MIDDLE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 6.5,
                        "payout": 1.8,
                        "source": "BET_RIVERS",
                        "type": "UNDER",
                        "live": false,
                        "marketKey": "DMNT-zern-cj48",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.086Z"
                    },
                    {
                        "modifier": 5.5,
                        "payout": 1.77,
                        "source": "ESPN_BET",
                        "type": "OVER",
                        "live": false,
                        "marketKey": "DMNT-zern-cj48",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.283Z"
                    }
                ],
                "context": {
                    "marketKey": "DMNT-zern-cj48",
                    "marketType": "POINT_TOTAL",
                    "marketSegment": "FULL_MATCH",
                    "eventKey": "Euc0-zern-Ap6V",
                    "eventSport": "BASEBALL",
                    "eventName": "Hokkaido Nippon-Ham Fighters @ Orix Buffaloes",
                    "eventStartTime": "2025-04-18T09:00:00.000Z",
                    "eventHomeParticipantKey": "wLUj-wiDr-0Qs0",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Hokkaido Nippon-Ham Fighters",
                            "key": "P0ni-wiDr-myJ2",
                            "shortName": "NHF",
                            "slug": "hokkaido-nippon-ham-fighters",
                            "sport": "BASEBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Orix Buffaloes",
                            "key": "wLUj-wiDr-0Qs0",
                            "shortName": "ORB",
                            "slug": "orix-buffaloes",
                            "sport": "BASEBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 Nippon Professional Baseball League",
                    "competitionInstanceKey": "KLrD-zdeg-kORo",
                    "competitionName": "Nippon Professional Baseball League",
                    "competitionShortName": "NPB",
                    "competitionKey": "CWpx-wiDr-05BA"
                }
            },
            {
                "type": "MIDDLE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 6.5,
                        "payout": 1.8,
                        "source": "BET_RIVERS",
                        "type": "UNDER",
                        "live": false,
                        "marketKey": "DMNT-zern-cj48",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.086Z"
                    },
                    {
                        "modifier": 5.5,
                        "payout": 1.77,
                        "source": "FAN_DUEL",
                        "type": "OVER",
                        "live": false,
                        "marketKey": "DMNT-zern-cj48",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.288Z"
                    }
                ],
                "context": {
                    "marketKey": "DMNT-zern-cj48",
                    "marketType": "POINT_TOTAL",
                    "marketSegment": "FULL_MATCH",
                    "eventKey": "Euc0-zern-Ap6V",
                    "eventSport": "BASEBALL",
                    "eventName": "Hokkaido Nippon-Ham Fighters @ Orix Buffaloes",
                    "eventStartTime": "2025-04-18T09:00:00.000Z",
                    "eventHomeParticipantKey": "wLUj-wiDr-0Qs0",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Hokkaido Nippon-Ham Fighters",
                            "key": "P0ni-wiDr-myJ2",
                            "shortName": "NHF",
                            "slug": "hokkaido-nippon-ham-fighters",
                            "sport": "BASEBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Orix Buffaloes",
                            "key": "wLUj-wiDr-0Qs0",
                            "shortName": "ORB",
                            "slug": "orix-buffaloes",
                            "sport": "BASEBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 Nippon Professional Baseball League",
                    "competitionInstanceKey": "KLrD-zdeg-kORo",
                    "competitionName": "Nippon Professional Baseball League",
                    "competitionShortName": "NPB",
                    "competitionKey": "CWpx-wiDr-05BA"
                }
            },
            {
                "type": "MIDDLE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 6.5,
                        "payout": 1.8,
                        "source": "BET_RIVERS",
                        "type": "UNDER",
                        "live": false,
                        "marketKey": "DMNT-zern-cj48",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.086Z"
                    },
                    {
                        "modifier": 5.5,
                        "payout": 1.77,
                        "source": "FANATICS",
                        "type": "OVER",
                        "live": false,
                        "marketKey": "DMNT-zern-cj48",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.288Z"
                    }
                ],
                "context": {
                    "marketKey": "DMNT-zern-cj48",
                    "marketType": "POINT_TOTAL",
                    "marketSegment": "FULL_MATCH",
                    "eventKey": "Euc0-zern-Ap6V",
                    "eventSport": "BASEBALL",
                    "eventName": "Hokkaido Nippon-Ham Fighters @ Orix Buffaloes",
                    "eventStartTime": "2025-04-18T09:00:00.000Z",
                    "eventHomeParticipantKey": "wLUj-wiDr-0Qs0",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Hokkaido Nippon-Ham Fighters",
                            "key": "P0ni-wiDr-myJ2",
                            "shortName": "NHF",
                            "slug": "hokkaido-nippon-ham-fighters",
                            "sport": "BASEBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Orix Buffaloes",
                            "key": "wLUj-wiDr-0Qs0",
                            "shortName": "ORB",
                            "slug": "orix-buffaloes",
                            "sport": "BASEBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 Nippon Professional Baseball League",
                    "competitionInstanceKey": "KLrD-zdeg-kORo",
                    "competitionName": "Nippon Professional Baseball League",
                    "competitionShortName": "NPB",
                    "competitionKey": "CWpx-wiDr-05BA"
                }
            },
            {
                "type": "MIDDLE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 8.5,
                        "payout": 1.92,
                        "source": "BET_PARX",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "Dab8-zenw-0PRT",
                        "participantKey": "rRPh-xfox-eKOd",
                        "time": "2025-04-18T02:29:00.246Z"
                    },
                    {
                        "modifier": -7.5,
                        "payout": 1.87,
                        "source": "BOVADA",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "Dab8-zenw-0PRT",
                        "participantKey": "SUAX-xfox-2UJB",
                        "time": "2025-04-18T02:29:00.270Z"
                    }
                ],
                "context": {
                    "marketKey": "Dab8-zenw-0PRT",
                    "marketType": "POINT_SPREAD",
                    "marketSegment": "FULL_MATCH",
                    "eventKey": "nWG2-zenw-Br9x",
                    "eventSport": "AMERICAN_FOOTBALL",
                    "eventName": "Memphis Showboats @ Michigan Panthers",
                    "eventStartTime": "2025-04-19T00:00:00.000Z",
                    "eventHomeParticipantKey": "SUAX-xfox-2UJB",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Memphis Showboats",
                            "key": "rRPh-xfox-eKOd",
                            "shortName": "MEM",
                            "slug": "memphis-showboats",
                            "sport": "AMERICAN_FOOTBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Michigan Panthers",
                            "key": "SUAX-xfox-2UJB",
                            "shortName": "MCH",
                            "slug": "michigan-panthers",
                            "sport": "AMERICAN_FOOTBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 United Football League",
                    "competitionInstanceKey": "eABI-zdxt-zko1",
                    "competitionName": "United Football League",
                    "competitionShortName": "UFL",
                    "competitionKey": "sY0W-yinv-oOMP"
                }
            },
            {
                "type": "MIDDLE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 8.5,
                        "payout": 1.92,
                        "source": "BET_PARX",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "Dab8-zenw-0PRT",
                        "participantKey": "rRPh-xfox-eKOd",
                        "time": "2025-04-18T02:29:00.246Z"
                    },
                    {
                        "modifier": -7.5,
                        "payout": 1.892857,
                        "source": "DRAFT_KINGS",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "Dab8-zenw-0PRT",
                        "participantKey": "SUAX-xfox-2UJB",
                        "time": "2025-04-18T02:29:00.280Z"
                    }
                ],
                "context": {
                    "marketKey": "Dab8-zenw-0PRT",
                    "marketType": "POINT_SPREAD",
                    "marketSegment": "FULL_MATCH",
                    "eventKey": "nWG2-zenw-Br9x",
                    "eventSport": "AMERICAN_FOOTBALL",
                    "eventName": "Memphis Showboats @ Michigan Panthers",
                    "eventStartTime": "2025-04-19T00:00:00.000Z",
                    "eventHomeParticipantKey": "SUAX-xfox-2UJB",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Memphis Showboats",
                            "key": "rRPh-xfox-eKOd",
                            "shortName": "MEM",
                            "slug": "memphis-showboats",
                            "sport": "AMERICAN_FOOTBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Michigan Panthers",
                            "key": "SUAX-xfox-2UJB",
                            "shortName": "MCH",
                            "slug": "michigan-panthers",
                            "sport": "AMERICAN_FOOTBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 United Football League",
                    "competitionInstanceKey": "eABI-zdxt-zko1",
                    "competitionName": "United Football League",
                    "competitionShortName": "UFL",
                    "competitionKey": "sY0W-yinv-oOMP"
                }
            },
            {
                "type": "MIDDLE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 8.5,
                        "payout": 1.92,
                        "source": "BET_PARX",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "Dab8-zenw-0PRT",
                        "participantKey": "rRPh-xfox-eKOd",
                        "time": "2025-04-18T02:29:00.246Z"
                    },
                    {
                        "modifier": -7.5,
                        "payout": 1.87,
                        "source": "ESPN_BET",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "Dab8-zenw-0PRT",
                        "participantKey": "SUAX-xfox-2UJB",
                        "time": "2025-04-18T02:29:00.285Z"
                    }
                ],
                "context": {
                    "marketKey": "Dab8-zenw-0PRT",
                    "marketType": "POINT_SPREAD",
                    "marketSegment": "FULL_MATCH",
                    "eventKey": "nWG2-zenw-Br9x",
                    "eventSport": "AMERICAN_FOOTBALL",
                    "eventName": "Memphis Showboats @ Michigan Panthers",
                    "eventStartTime": "2025-04-19T00:00:00.000Z",
                    "eventHomeParticipantKey": "SUAX-xfox-2UJB",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Memphis Showboats",
                            "key": "rRPh-xfox-eKOd",
                            "shortName": "MEM",
                            "slug": "memphis-showboats",
                            "sport": "AMERICAN_FOOTBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Michigan Panthers",
                            "key": "SUAX-xfox-2UJB",
                            "shortName": "MCH",
                            "slug": "michigan-panthers",
                            "sport": "AMERICAN_FOOTBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 United Football League",
                    "competitionInstanceKey": "eABI-zdxt-zko1",
                    "competitionName": "United Football League",
                    "competitionShortName": "UFL",
                    "competitionKey": "sY0W-yinv-oOMP"
                }
            },
            {
                "type": "MIDDLE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 8.5,
                        "payout": 1.92,
                        "source": "BET_PARX",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "Dab8-zenw-0PRT",
                        "participantKey": "rRPh-xfox-eKOd",
                        "time": "2025-04-18T02:29:00.246Z"
                    },
                    {
                        "modifier": -7.5,
                        "payout": 1.91,
                        "source": "FAN_DUEL",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "Dab8-zenw-0PRT",
                        "participantKey": "SUAX-xfox-2UJB",
                        "time": "2025-04-18T02:29:00.289Z"
                    }
                ],
                "context": {
                    "marketKey": "Dab8-zenw-0PRT",
                    "marketType": "POINT_SPREAD",
                    "marketSegment": "FULL_MATCH",
                    "eventKey": "nWG2-zenw-Br9x",
                    "eventSport": "AMERICAN_FOOTBALL",
                    "eventName": "Memphis Showboats @ Michigan Panthers",
                    "eventStartTime": "2025-04-19T00:00:00.000Z",
                    "eventHomeParticipantKey": "SUAX-xfox-2UJB",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Memphis Showboats",
                            "key": "rRPh-xfox-eKOd",
                            "shortName": "MEM",
                            "slug": "memphis-showboats",
                            "sport": "AMERICAN_FOOTBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Michigan Panthers",
                            "key": "SUAX-xfox-2UJB",
                            "shortName": "MCH",
                            "slug": "michigan-panthers",
                            "sport": "AMERICAN_FOOTBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 United Football League",
                    "competitionInstanceKey": "eABI-zdxt-zko1",
                    "competitionName": "United Football League",
                    "competitionShortName": "UFL",
                    "competitionKey": "sY0W-yinv-oOMP"
                }
            },
            {
                "type": "MIDDLE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 8.5,
                        "payout": 1.92,
                        "source": "BET_RIVERS",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "Dab8-zenw-0PRT",
                        "participantKey": "rRPh-xfox-eKOd",
                        "time": "2025-04-18T02:29:00.120Z"
                    },
                    {
                        "modifier": -7.5,
                        "payout": 1.87,
                        "source": "BOVADA",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "Dab8-zenw-0PRT",
                        "participantKey": "SUAX-xfox-2UJB",
                        "time": "2025-04-18T02:29:00.270Z"
                    }
                ],
                "context": {
                    "marketKey": "Dab8-zenw-0PRT",
                    "marketType": "POINT_SPREAD",
                    "marketSegment": "FULL_MATCH",
                    "eventKey": "nWG2-zenw-Br9x",
                    "eventSport": "AMERICAN_FOOTBALL",
                    "eventName": "Memphis Showboats @ Michigan Panthers",
                    "eventStartTime": "2025-04-19T00:00:00.000Z",
                    "eventHomeParticipantKey": "SUAX-xfox-2UJB",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Memphis Showboats",
                            "key": "rRPh-xfox-eKOd",
                            "shortName": "MEM",
                            "slug": "memphis-showboats",
                            "sport": "AMERICAN_FOOTBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Michigan Panthers",
                            "key": "SUAX-xfox-2UJB",
                            "shortName": "MCH",
                            "slug": "michigan-panthers",
                            "sport": "AMERICAN_FOOTBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 United Football League",
                    "competitionInstanceKey": "eABI-zdxt-zko1",
                    "competitionName": "United Football League",
                    "competitionShortName": "UFL",
                    "competitionKey": "sY0W-yinv-oOMP"
                }
            },
            {
                "type": "MIDDLE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 8.5,
                        "payout": 1.92,
                        "source": "BET_RIVERS",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "Dab8-zenw-0PRT",
                        "participantKey": "rRPh-xfox-eKOd",
                        "time": "2025-04-18T02:29:00.120Z"
                    },
                    {
                        "modifier": -7.5,
                        "payout": 1.892857,
                        "source": "DRAFT_KINGS",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "Dab8-zenw-0PRT",
                        "participantKey": "SUAX-xfox-2UJB",
                        "time": "2025-04-18T02:29:00.280Z"
                    }
                ],
                "context": {
                    "marketKey": "Dab8-zenw-0PRT",
                    "marketType": "POINT_SPREAD",
                    "marketSegment": "FULL_MATCH",
                    "eventKey": "nWG2-zenw-Br9x",
                    "eventSport": "AMERICAN_FOOTBALL",
                    "eventName": "Memphis Showboats @ Michigan Panthers",
                    "eventStartTime": "2025-04-19T00:00:00.000Z",
                    "eventHomeParticipantKey": "SUAX-xfox-2UJB",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Memphis Showboats",
                            "key": "rRPh-xfox-eKOd",
                            "shortName": "MEM",
                            "slug": "memphis-showboats",
                            "sport": "AMERICAN_FOOTBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Michigan Panthers",
                            "key": "SUAX-xfox-2UJB",
                            "shortName": "MCH",
                            "slug": "michigan-panthers",
                            "sport": "AMERICAN_FOOTBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 United Football League",
                    "competitionInstanceKey": "eABI-zdxt-zko1",
                    "competitionName": "United Football League",
                    "competitionShortName": "UFL",
                    "competitionKey": "sY0W-yinv-oOMP"
                }
            },
            {
                "type": "MIDDLE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 8.5,
                        "payout": 1.92,
                        "source": "BET_RIVERS",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "Dab8-zenw-0PRT",
                        "participantKey": "rRPh-xfox-eKOd",
                        "time": "2025-04-18T02:29:00.120Z"
                    },
                    {
                        "modifier": -7.5,
                        "payout": 1.87,
                        "source": "ESPN_BET",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "Dab8-zenw-0PRT",
                        "participantKey": "SUAX-xfox-2UJB",
                        "time": "2025-04-18T02:29:00.285Z"
                    }
                ],
                "context": {
                    "marketKey": "Dab8-zenw-0PRT",
                    "marketType": "POINT_SPREAD",
                    "marketSegment": "FULL_MATCH",
                    "eventKey": "nWG2-zenw-Br9x",
                    "eventSport": "AMERICAN_FOOTBALL",
                    "eventName": "Memphis Showboats @ Michigan Panthers",
                    "eventStartTime": "2025-04-19T00:00:00.000Z",
                    "eventHomeParticipantKey": "SUAX-xfox-2UJB",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Memphis Showboats",
                            "key": "rRPh-xfox-eKOd",
                            "shortName": "MEM",
                            "slug": "memphis-showboats",
                            "sport": "AMERICAN_FOOTBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Michigan Panthers",
                            "key": "SUAX-xfox-2UJB",
                            "shortName": "MCH",
                            "slug": "michigan-panthers",
                            "sport": "AMERICAN_FOOTBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 United Football League",
                    "competitionInstanceKey": "eABI-zdxt-zko1",
                    "competitionName": "United Football League",
                    "competitionShortName": "UFL",
                    "competitionKey": "sY0W-yinv-oOMP"
                }
            },
            {
                "type": "MIDDLE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 8.5,
                        "payout": 1.92,
                        "source": "BET_RIVERS",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "Dab8-zenw-0PRT",
                        "participantKey": "rRPh-xfox-eKOd",
                        "time": "2025-04-18T02:29:00.120Z"
                    },
                    {
                        "modifier": -7.5,
                        "payout": 1.91,
                        "source": "FAN_DUEL",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "Dab8-zenw-0PRT",
                        "participantKey": "SUAX-xfox-2UJB",
                        "time": "2025-04-18T02:29:00.289Z"
                    }
                ],
                "context": {
                    "marketKey": "Dab8-zenw-0PRT",
                    "marketType": "POINT_SPREAD",
                    "marketSegment": "FULL_MATCH",
                    "eventKey": "nWG2-zenw-Br9x",
                    "eventSport": "AMERICAN_FOOTBALL",
                    "eventName": "Memphis Showboats @ Michigan Panthers",
                    "eventStartTime": "2025-04-19T00:00:00.000Z",
                    "eventHomeParticipantKey": "SUAX-xfox-2UJB",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Memphis Showboats",
                            "key": "rRPh-xfox-eKOd",
                            "shortName": "MEM",
                            "slug": "memphis-showboats",
                            "sport": "AMERICAN_FOOTBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Michigan Panthers",
                            "key": "SUAX-xfox-2UJB",
                            "shortName": "MCH",
                            "slug": "michigan-panthers",
                            "sport": "AMERICAN_FOOTBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 United Football League",
                    "competitionInstanceKey": "eABI-zdxt-zko1",
                    "competitionName": "United Football League",
                    "competitionShortName": "UFL",
                    "competitionKey": "sY0W-yinv-oOMP"
                }
            },
            {
                "type": "MIDDLE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": -9.5,
                        "payout": 1.88,
                        "source": "BET_PARX",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "ERrh-zeie-3LbZ",
                        "participantKey": "pSJi-xbdu-nNSB",
                        "time": "2025-04-18T02:29:00.124Z"
                    },
                    {
                        "modifier": 10.5,
                        "payout": 1.869565,
                        "source": "DRAFT_KINGS",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "ERrh-zeie-3LbZ",
                        "participantKey": "p49e-xbdu-uwTN",
                        "time": "2025-04-18T02:29:00.271Z"
                    }
                ],
                "context": {
                    "marketKey": "ERrh-zeie-3LbZ",
                    "marketType": "POINT_SPREAD",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "KNlr-zeie-5CGq",
                    "eventSport": "AUSTRALIAN_RULES_FOOTBALL",
                    "eventName": "St. Kilda @ Western Bulldogs",
                    "eventStartTime": "2025-04-20T09:20:00.000Z",
                    "eventHomeParticipantKey": "pSJi-xbdu-nNSB",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "St. Kilda",
                            "key": "p49e-xbdu-uwTN",
                            "shortName": "STK",
                            "slug": "st-kilda",
                            "sport": "AUSTRALIAN_RULES_FOOTBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Western Bulldogs",
                            "key": "pSJi-xbdu-nNSB",
                            "shortName": "WB",
                            "slug": "western-bulldogs",
                            "sport": "AUSTRALIAN_RULES_FOOTBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 Australian Football League",
                    "competitionInstanceKey": "6dBj-ykzc-cMtp",
                    "competitionName": "Australian Football League",
                    "competitionShortName": "AFL",
                    "competitionKey": "jcKL-xbdu-POdB"
                }
            },
            {
                "type": "MIDDLE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": -9.5,
                        "payout": 1.88,
                        "source": "BET_PARX",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "ERrh-zeie-3LbZ",
                        "participantKey": "pSJi-xbdu-nNSB",
                        "time": "2025-04-18T02:29:00.124Z"
                    },
                    {
                        "modifier": 10.5,
                        "payout": 1.87,
                        "source": "ESPN_BET",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "ERrh-zeie-3LbZ",
                        "participantKey": "p49e-xbdu-uwTN",
                        "time": "2025-04-18T02:29:00.281Z"
                    }
                ],
                "context": {
                    "marketKey": "ERrh-zeie-3LbZ",
                    "marketType": "POINT_SPREAD",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "KNlr-zeie-5CGq",
                    "eventSport": "AUSTRALIAN_RULES_FOOTBALL",
                    "eventName": "St. Kilda @ Western Bulldogs",
                    "eventStartTime": "2025-04-20T09:20:00.000Z",
                    "eventHomeParticipantKey": "pSJi-xbdu-nNSB",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "St. Kilda",
                            "key": "p49e-xbdu-uwTN",
                            "shortName": "STK",
                            "slug": "st-kilda",
                            "sport": "AUSTRALIAN_RULES_FOOTBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Western Bulldogs",
                            "key": "pSJi-xbdu-nNSB",
                            "shortName": "WB",
                            "slug": "western-bulldogs",
                            "sport": "AUSTRALIAN_RULES_FOOTBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 Australian Football League",
                    "competitionInstanceKey": "6dBj-ykzc-cMtp",
                    "competitionName": "Australian Football League",
                    "competitionShortName": "AFL",
                    "competitionKey": "jcKL-xbdu-POdB"
                }
            },
            {
                "type": "MIDDLE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": -9.5,
                        "payout": 1.88,
                        "source": "BET_RIVERS",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "ERrh-zeie-3LbZ",
                        "participantKey": "pSJi-xbdu-nNSB",
                        "time": "2025-04-18T02:29:00.067Z"
                    },
                    {
                        "modifier": 10.5,
                        "payout": 1.869565,
                        "source": "DRAFT_KINGS",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "ERrh-zeie-3LbZ",
                        "participantKey": "p49e-xbdu-uwTN",
                        "time": "2025-04-18T02:29:00.271Z"
                    }
                ],
                "context": {
                    "marketKey": "ERrh-zeie-3LbZ",
                    "marketType": "POINT_SPREAD",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "KNlr-zeie-5CGq",
                    "eventSport": "AUSTRALIAN_RULES_FOOTBALL",
                    "eventName": "St. Kilda @ Western Bulldogs",
                    "eventStartTime": "2025-04-20T09:20:00.000Z",
                    "eventHomeParticipantKey": "pSJi-xbdu-nNSB",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "St. Kilda",
                            "key": "p49e-xbdu-uwTN",
                            "shortName": "STK",
                            "slug": "st-kilda",
                            "sport": "AUSTRALIAN_RULES_FOOTBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Western Bulldogs",
                            "key": "pSJi-xbdu-nNSB",
                            "shortName": "WB",
                            "slug": "western-bulldogs",
                            "sport": "AUSTRALIAN_RULES_FOOTBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 Australian Football League",
                    "competitionInstanceKey": "6dBj-ykzc-cMtp",
                    "competitionName": "Australian Football League",
                    "competitionShortName": "AFL",
                    "competitionKey": "jcKL-xbdu-POdB"
                }
            },
            {
                "type": "MIDDLE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": -9.5,
                        "payout": 1.88,
                        "source": "BET_RIVERS",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "ERrh-zeie-3LbZ",
                        "participantKey": "pSJi-xbdu-nNSB",
                        "time": "2025-04-18T02:29:00.067Z"
                    },
                    {
                        "modifier": 10.5,
                        "payout": 1.87,
                        "source": "ESPN_BET",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "ERrh-zeie-3LbZ",
                        "participantKey": "p49e-xbdu-uwTN",
                        "time": "2025-04-18T02:29:00.281Z"
                    }
                ],
                "context": {
                    "marketKey": "ERrh-zeie-3LbZ",
                    "marketType": "POINT_SPREAD",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "KNlr-zeie-5CGq",
                    "eventSport": "AUSTRALIAN_RULES_FOOTBALL",
                    "eventName": "St. Kilda @ Western Bulldogs",
                    "eventStartTime": "2025-04-20T09:20:00.000Z",
                    "eventHomeParticipantKey": "pSJi-xbdu-nNSB",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "St. Kilda",
                            "key": "p49e-xbdu-uwTN",
                            "shortName": "STK",
                            "slug": "st-kilda",
                            "sport": "AUSTRALIAN_RULES_FOOTBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Western Bulldogs",
                            "key": "pSJi-xbdu-nNSB",
                            "shortName": "WB",
                            "slug": "western-bulldogs",
                            "sport": "AUSTRALIAN_RULES_FOOTBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 Australian Football League",
                    "competitionInstanceKey": "6dBj-ykzc-cMtp",
                    "competitionName": "Australian Football League",
                    "competitionShortName": "AFL",
                    "competitionKey": "jcKL-xbdu-POdB"
                }
            },
            {
                "type": "MIDDLE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 114.5,
                        "payout": 1.85,
                        "source": "BET_PARX",
                        "type": "OVER",
                        "live": false,
                        "marketKey": "FMt1-zerm-Ulf2",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.165Z"
                    },
                    {
                        "modifier": 115.5,
                        "payout": 1.892857,
                        "source": "DRAFT_KINGS",
                        "type": "UNDER",
                        "live": false,
                        "marketKey": "FMt1-zerm-Ulf2",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.274Z"
                    }
                ],
                "context": {
                    "marketKey": "FMt1-zerm-Ulf2",
                    "marketType": "POINT_TOTAL",
                    "marketSegment": "HALF_1",
                    "eventKey": "oqHy-zemw-Z7nq",
                    "eventSport": "BASKETBALL",
                    "eventName": "Milwaukee Bucks @ Indiana Pacers",
                    "eventStartTime": "2025-04-19T17:10:00.000Z",
                    "eventHomeParticipantKey": "vJt2-wddv-Iqw2",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Indiana Pacers",
                            "key": "vJt2-wddv-Iqw2",
                            "shortName": "IND",
                            "slug": "indiana-pacers",
                            "sport": "BASKETBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Milwaukee Bucks",
                            "key": "Uu03-wddv-tYAB",
                            "shortName": "MIL",
                            "slug": "milwaukee-bucks",
                            "sport": "BASKETBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 National Basketball Association",
                    "competitionInstanceKey": "g4sK-yinv-Lczx",
                    "competitionName": "National Basketball Association",
                    "competitionShortName": "NBA",
                    "competitionKey": "d791-wddv-30fU"
                }
            },
            {
                "type": "MIDDLE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 111.5,
                        "payout": 1.83,
                        "source": "BET_PARX",
                        "type": "OVER",
                        "live": false,
                        "marketKey": "GNju-zero-Ff9o",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.165Z"
                    },
                    {
                        "modifier": 112.5,
                        "payout": 1.952381,
                        "source": "BOVADA",
                        "type": "UNDER",
                        "live": false,
                        "marketKey": "GNju-zero-Ff9o",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.254Z"
                    }
                ],
                "context": {
                    "marketKey": "GNju-zero-Ff9o",
                    "marketType": "POINT_TOTAL",
                    "marketSegment": "HALF_1",
                    "eventKey": "BsiB-zerb-sFT3",
                    "eventSport": "BASKETBALL",
                    "eventName": "Miami Heat @ Atlanta Hawks",
                    "eventStartTime": "2025-04-18T23:10:00.000Z",
                    "eventHomeParticipantKey": "0Ch7-wddv-OrXs",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Atlanta Hawks",
                            "key": "0Ch7-wddv-OrXs",
                            "shortName": "ATL",
                            "slug": "atlanta-hawks",
                            "sport": "BASKETBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Miami Heat",
                            "key": "biYO-wddv-j7OK",
                            "shortName": "MIA",
                            "slug": "miami-heat",
                            "sport": "BASKETBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 National Basketball Association",
                    "competitionInstanceKey": "g4sK-yinv-Lczx",
                    "competitionName": "National Basketball Association",
                    "competitionShortName": "NBA",
                    "competitionKey": "d791-wddv-30fU"
                }
            },
            {
                "type": "MIDDLE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 111.5,
                        "payout": 1.83,
                        "source": "BET_PARX",
                        "type": "OVER",
                        "live": false,
                        "marketKey": "GNju-zero-Ff9o",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.165Z"
                    },
                    {
                        "modifier": 112.5,
                        "payout": 1.909091,
                        "source": "DRAFT_KINGS",
                        "type": "UNDER",
                        "live": false,
                        "marketKey": "GNju-zero-Ff9o",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.274Z"
                    }
                ],
                "context": {
                    "marketKey": "GNju-zero-Ff9o",
                    "marketType": "POINT_TOTAL",
                    "marketSegment": "HALF_1",
                    "eventKey": "BsiB-zerb-sFT3",
                    "eventSport": "BASKETBALL",
                    "eventName": "Miami Heat @ Atlanta Hawks",
                    "eventStartTime": "2025-04-18T23:10:00.000Z",
                    "eventHomeParticipantKey": "0Ch7-wddv-OrXs",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Atlanta Hawks",
                            "key": "0Ch7-wddv-OrXs",
                            "shortName": "ATL",
                            "slug": "atlanta-hawks",
                            "sport": "BASKETBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Miami Heat",
                            "key": "biYO-wddv-j7OK",
                            "shortName": "MIA",
                            "slug": "miami-heat",
                            "sport": "BASKETBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 National Basketball Association",
                    "competitionInstanceKey": "g4sK-yinv-Lczx",
                    "competitionName": "National Basketball Association",
                    "competitionShortName": "NBA",
                    "competitionKey": "d791-wddv-30fU"
                }
            },
            {
                "type": "MIDDLE",
                "value": 3,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 1.5,
                        "payout": 1.5,
                        "source": "BET_PARX",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "GaR0-zern-FjrR",
                        "participantKey": "1KPM-xfxt-ijW0",
                        "time": "2025-04-18T02:29:00.151Z"
                    },
                    {
                        "modifier": 1.5,
                        "payout": 1.5,
                        "source": "BOVADA",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "GaR0-zern-FjrR",
                        "participantKey": "p0Uo-xfxt-gXxe",
                        "time": "2025-04-18T02:29:00.253Z"
                    }
                ],
                "context": {
                    "marketKey": "GaR0-zern-FjrR",
                    "marketType": "POINT_SPREAD",
                    "marketSegment": "FULL_MATCH",
                    "eventKey": "RsnQ-zern-J3f5",
                    "eventSport": "BASEBALL",
                    "eventName": "Lotte Giants @ Samsung Lions",
                    "eventStartTime": "2025-04-18T09:30:00.000Z",
                    "eventHomeParticipantKey": "1KPM-xfxt-ijW0",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Samsung Lions",
                            "key": "1KPM-xfxt-ijW0",
                            "shortName": "SAM",
                            "slug": "samsung-lions",
                            "sport": "BASEBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Lotte Giants",
                            "key": "p0Uo-xfxt-gXxe",
                            "shortName": "LOT",
                            "slug": "lotte-giants",
                            "sport": "BASEBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 KBO League",
                    "competitionInstanceKey": "HzgU-zcrx-0Yjr",
                    "competitionName": "KBO League",
                    "competitionShortName": "KBO",
                    "competitionKey": "lyFJ-xfxt-Oy40"
                }
            },
            {
                "type": "MIDDLE",
                "value": 3,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 1.5,
                        "payout": 1.5,
                        "source": "BET_RIVERS",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "GaR0-zern-FjrR",
                        "participantKey": "1KPM-xfxt-ijW0",
                        "time": "2025-04-18T02:29:00.077Z"
                    },
                    {
                        "modifier": 1.5,
                        "payout": 1.5,
                        "source": "BOVADA",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "GaR0-zern-FjrR",
                        "participantKey": "p0Uo-xfxt-gXxe",
                        "time": "2025-04-18T02:29:00.253Z"
                    }
                ],
                "context": {
                    "marketKey": "GaR0-zern-FjrR",
                    "marketType": "POINT_SPREAD",
                    "marketSegment": "FULL_MATCH",
                    "eventKey": "RsnQ-zern-J3f5",
                    "eventSport": "BASEBALL",
                    "eventName": "Lotte Giants @ Samsung Lions",
                    "eventStartTime": "2025-04-18T09:30:00.000Z",
                    "eventHomeParticipantKey": "1KPM-xfxt-ijW0",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Samsung Lions",
                            "key": "1KPM-xfxt-ijW0",
                            "shortName": "SAM",
                            "slug": "samsung-lions",
                            "sport": "BASEBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Lotte Giants",
                            "key": "p0Uo-xfxt-gXxe",
                            "shortName": "LOT",
                            "slug": "lotte-giants",
                            "sport": "BASEBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 KBO League",
                    "competitionInstanceKey": "HzgU-zcrx-0Yjr",
                    "competitionName": "KBO League",
                    "competitionShortName": "KBO",
                    "competitionKey": "lyFJ-xfxt-Oy40"
                }
            },
            {
                "type": "MIDDLE",
                "value": 3,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 1.5,
                        "payout": 1.5,
                        "source": "BOVADA",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "GaR0-zern-FjrR",
                        "participantKey": "p0Uo-xfxt-gXxe",
                        "time": "2025-04-18T02:29:00.253Z"
                    },
                    {
                        "modifier": 1.5,
                        "payout": 1.540541,
                        "source": "DRAFT_KINGS",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "GaR0-zern-FjrR",
                        "participantKey": "1KPM-xfxt-ijW0",
                        "time": "2025-04-18T02:29:00.272Z"
                    }
                ],
                "context": {
                    "marketKey": "GaR0-zern-FjrR",
                    "marketType": "POINT_SPREAD",
                    "marketSegment": "FULL_MATCH",
                    "eventKey": "RsnQ-zern-J3f5",
                    "eventSport": "BASEBALL",
                    "eventName": "Lotte Giants @ Samsung Lions",
                    "eventStartTime": "2025-04-18T09:30:00.000Z",
                    "eventHomeParticipantKey": "1KPM-xfxt-ijW0",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Samsung Lions",
                            "key": "1KPM-xfxt-ijW0",
                            "shortName": "SAM",
                            "slug": "samsung-lions",
                            "sport": "BASEBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Lotte Giants",
                            "key": "p0Uo-xfxt-gXxe",
                            "shortName": "LOT",
                            "slug": "lotte-giants",
                            "sport": "BASEBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 KBO League",
                    "competitionInstanceKey": "HzgU-zcrx-0Yjr",
                    "competitionName": "KBO League",
                    "competitionShortName": "KBO",
                    "competitionKey": "lyFJ-xfxt-Oy40"
                }
            },
            {
                "type": "MIDDLE",
                "value": 3,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 1.5,
                        "payout": 1.5,
                        "source": "BOVADA",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "GaR0-zern-FjrR",
                        "participantKey": "p0Uo-xfxt-gXxe",
                        "time": "2025-04-18T02:29:00.253Z"
                    },
                    {
                        "modifier": 1.5,
                        "payout": 1.5,
                        "source": "ESPN_BET",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "GaR0-zern-FjrR",
                        "participantKey": "1KPM-xfxt-ijW0",
                        "time": "2025-04-18T02:29:00.282Z"
                    }
                ],
                "context": {
                    "marketKey": "GaR0-zern-FjrR",
                    "marketType": "POINT_SPREAD",
                    "marketSegment": "FULL_MATCH",
                    "eventKey": "RsnQ-zern-J3f5",
                    "eventSport": "BASEBALL",
                    "eventName": "Lotte Giants @ Samsung Lions",
                    "eventStartTime": "2025-04-18T09:30:00.000Z",
                    "eventHomeParticipantKey": "1KPM-xfxt-ijW0",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Samsung Lions",
                            "key": "1KPM-xfxt-ijW0",
                            "shortName": "SAM",
                            "slug": "samsung-lions",
                            "sport": "BASEBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Lotte Giants",
                            "key": "p0Uo-xfxt-gXxe",
                            "shortName": "LOT",
                            "slug": "lotte-giants",
                            "sport": "BASEBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 KBO League",
                    "competitionInstanceKey": "HzgU-zcrx-0Yjr",
                    "competitionName": "KBO League",
                    "competitionShortName": "KBO",
                    "competitionKey": "lyFJ-xfxt-Oy40"
                }
            },
            {
                "type": "MIDDLE",
                "value": 3,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 1.5,
                        "payout": 1.5,
                        "source": "BOVADA",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "GaR0-zern-FjrR",
                        "participantKey": "p0Uo-xfxt-gXxe",
                        "time": "2025-04-18T02:29:00.253Z"
                    },
                    {
                        "modifier": 1.5,
                        "payout": 1.52,
                        "source": "FAN_DUEL",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "GaR0-zern-FjrR",
                        "participantKey": "1KPM-xfxt-ijW0",
                        "time": "2025-04-18T02:29:00.287Z"
                    }
                ],
                "context": {
                    "marketKey": "GaR0-zern-FjrR",
                    "marketType": "POINT_SPREAD",
                    "marketSegment": "FULL_MATCH",
                    "eventKey": "RsnQ-zern-J3f5",
                    "eventSport": "BASEBALL",
                    "eventName": "Lotte Giants @ Samsung Lions",
                    "eventStartTime": "2025-04-18T09:30:00.000Z",
                    "eventHomeParticipantKey": "1KPM-xfxt-ijW0",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Samsung Lions",
                            "key": "1KPM-xfxt-ijW0",
                            "shortName": "SAM",
                            "slug": "samsung-lions",
                            "sport": "BASEBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Lotte Giants",
                            "key": "p0Uo-xfxt-gXxe",
                            "shortName": "LOT",
                            "slug": "lotte-giants",
                            "sport": "BASEBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 KBO League",
                    "competitionInstanceKey": "HzgU-zcrx-0Yjr",
                    "competitionName": "KBO League",
                    "competitionShortName": "KBO",
                    "competitionKey": "lyFJ-xfxt-Oy40"
                }
            },
            {
                "type": "MIDDLE",
                "value": 3,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 1.5,
                        "payout": 1.5,
                        "source": "BOVADA",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "GaR0-zern-FjrR",
                        "participantKey": "p0Uo-xfxt-gXxe",
                        "time": "2025-04-18T02:29:00.253Z"
                    },
                    {
                        "modifier": 1.5,
                        "payout": 1.53,
                        "source": "FANATICS",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "GaR0-zern-FjrR",
                        "participantKey": "1KPM-xfxt-ijW0",
                        "time": "2025-04-18T02:29:00.287Z"
                    }
                ],
                "context": {
                    "marketKey": "GaR0-zern-FjrR",
                    "marketType": "POINT_SPREAD",
                    "marketSegment": "FULL_MATCH",
                    "eventKey": "RsnQ-zern-J3f5",
                    "eventSport": "BASEBALL",
                    "eventName": "Lotte Giants @ Samsung Lions",
                    "eventStartTime": "2025-04-18T09:30:00.000Z",
                    "eventHomeParticipantKey": "1KPM-xfxt-ijW0",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Samsung Lions",
                            "key": "1KPM-xfxt-ijW0",
                            "shortName": "SAM",
                            "slug": "samsung-lions",
                            "sport": "BASEBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Lotte Giants",
                            "key": "p0Uo-xfxt-gXxe",
                            "shortName": "LOT",
                            "slug": "lotte-giants",
                            "sport": "BASEBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 KBO League",
                    "competitionInstanceKey": "HzgU-zcrx-0Yjr",
                    "competitionName": "KBO League",
                    "competitionShortName": "KBO",
                    "competitionKey": "lyFJ-xfxt-Oy40"
                }
            },
            {
                "type": "MIDDLE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 14.5,
                        "payout": 1.87,
                        "source": "ESPN_BET",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "HZnP-zeqc-xRP6",
                        "participantKey": "Q6FU-wddv-9NTI",
                        "time": "2025-04-18T02:29:00.282Z"
                    },
                    {
                        "modifier": -13.5,
                        "payout": 1.89,
                        "source": "FAN_DUEL",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "HZnP-zeqc-xRP6",
                        "participantKey": "aUbn-wddv-b90h",
                        "time": "2025-04-18T02:29:00.287Z"
                    }
                ],
                "context": {
                    "marketKey": "HZnP-zeqc-xRP6",
                    "marketType": "POINT_SPREAD",
                    "marketSegment": "FULL_MATCH",
                    "eventKey": "0HKV-zeqc-tbcB",
                    "eventSport": "BASKETBALL",
                    "eventName": "Orlando Magic @ Boston Celtics",
                    "eventStartTime": "2025-04-20T19:30:00.000Z",
                    "eventHomeParticipantKey": "aUbn-wddv-b90h",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Boston Celtics",
                            "key": "aUbn-wddv-b90h",
                            "shortName": "BOS",
                            "slug": "boston-celtics",
                            "sport": "BASKETBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Orlando Magic",
                            "key": "Q6FU-wddv-9NTI",
                            "shortName": "ORL",
                            "slug": "orlando-magic",
                            "sport": "BASKETBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 National Basketball Association",
                    "competitionInstanceKey": "g4sK-yinv-Lczx",
                    "competitionName": "National Basketball Association",
                    "competitionShortName": "NBA",
                    "competitionKey": "d791-wddv-30fU"
                }
            },
            {
                "type": "MIDDLE",
                "value": 2,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 181.5,
                        "payout": 1.9,
                        "source": "BET_PARX",
                        "type": "UNDER",
                        "live": false,
                        "marketKey": "IQJw-zepc-8IHn",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.124Z"
                    },
                    {
                        "modifier": 179.5,
                        "payout": 1.869565,
                        "source": "DRAFT_KINGS",
                        "type": "OVER",
                        "live": false,
                        "marketKey": "IQJw-zepc-8IHn",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.271Z"
                    }
                ],
                "context": {
                    "marketKey": "IQJw-zepc-8IHn",
                    "marketType": "POINT_TOTAL",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "KNlr-zeie-5CGq",
                    "eventSport": "AUSTRALIAN_RULES_FOOTBALL",
                    "eventName": "St. Kilda @ Western Bulldogs",
                    "eventStartTime": "2025-04-20T09:20:00.000Z",
                    "eventHomeParticipantKey": "pSJi-xbdu-nNSB",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "St. Kilda",
                            "key": "p49e-xbdu-uwTN",
                            "shortName": "STK",
                            "slug": "st-kilda",
                            "sport": "AUSTRALIAN_RULES_FOOTBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Western Bulldogs",
                            "key": "pSJi-xbdu-nNSB",
                            "shortName": "WB",
                            "slug": "western-bulldogs",
                            "sport": "AUSTRALIAN_RULES_FOOTBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 Australian Football League",
                    "competitionInstanceKey": "6dBj-ykzc-cMtp",
                    "competitionName": "Australian Football League",
                    "competitionShortName": "AFL",
                    "competitionKey": "jcKL-xbdu-POdB"
                }
            },
            {
                "type": "MIDDLE",
                "value": 2,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 181.5,
                        "payout": 1.9,
                        "source": "BET_RIVERS",
                        "type": "UNDER",
                        "live": false,
                        "marketKey": "IQJw-zepc-8IHn",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.067Z"
                    },
                    {
                        "modifier": 179.5,
                        "payout": 1.869565,
                        "source": "DRAFT_KINGS",
                        "type": "OVER",
                        "live": false,
                        "marketKey": "IQJw-zepc-8IHn",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.271Z"
                    }
                ],
                "context": {
                    "marketKey": "IQJw-zepc-8IHn",
                    "marketType": "POINT_TOTAL",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "KNlr-zeie-5CGq",
                    "eventSport": "AUSTRALIAN_RULES_FOOTBALL",
                    "eventName": "St. Kilda @ Western Bulldogs",
                    "eventStartTime": "2025-04-20T09:20:00.000Z",
                    "eventHomeParticipantKey": "pSJi-xbdu-nNSB",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "St. Kilda",
                            "key": "p49e-xbdu-uwTN",
                            "shortName": "STK",
                            "slug": "st-kilda",
                            "sport": "AUSTRALIAN_RULES_FOOTBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Western Bulldogs",
                            "key": "pSJi-xbdu-nNSB",
                            "shortName": "WB",
                            "slug": "western-bulldogs",
                            "sport": "AUSTRALIAN_RULES_FOOTBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 Australian Football League",
                    "competitionInstanceKey": "6dBj-ykzc-cMtp",
                    "competitionName": "Australian Football League",
                    "competitionShortName": "AFL",
                    "competitionKey": "jcKL-xbdu-POdB"
                }
            },
            {
                "type": "MIDDLE",
                "value": 2,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 179.5,
                        "payout": 1.869565,
                        "source": "DRAFT_KINGS",
                        "type": "OVER",
                        "live": false,
                        "marketKey": "IQJw-zepc-8IHn",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.271Z"
                    },
                    {
                        "modifier": 181.5,
                        "payout": 1.87,
                        "source": "ESPN_BET",
                        "type": "UNDER",
                        "live": false,
                        "marketKey": "IQJw-zepc-8IHn",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.281Z"
                    }
                ],
                "context": {
                    "marketKey": "IQJw-zepc-8IHn",
                    "marketType": "POINT_TOTAL",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "KNlr-zeie-5CGq",
                    "eventSport": "AUSTRALIAN_RULES_FOOTBALL",
                    "eventName": "St. Kilda @ Western Bulldogs",
                    "eventStartTime": "2025-04-20T09:20:00.000Z",
                    "eventHomeParticipantKey": "pSJi-xbdu-nNSB",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "St. Kilda",
                            "key": "p49e-xbdu-uwTN",
                            "shortName": "STK",
                            "slug": "st-kilda",
                            "sport": "AUSTRALIAN_RULES_FOOTBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Western Bulldogs",
                            "key": "pSJi-xbdu-nNSB",
                            "shortName": "WB",
                            "slug": "western-bulldogs",
                            "sport": "AUSTRALIAN_RULES_FOOTBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 Australian Football League",
                    "competitionInstanceKey": "6dBj-ykzc-cMtp",
                    "competitionName": "Australian Football League",
                    "competitionShortName": "AFL",
                    "competitionKey": "jcKL-xbdu-POdB"
                }
            },
            {
                "type": "MIDDLE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 59.5,
                        "payout": 1.77,
                        "source": "BET_PARX",
                        "type": "UNDER",
                        "live": false,
                        "marketKey": "Kp3G-zerf-P0rU",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.127Z"
                    },
                    {
                        "modifier": 58.5,
                        "payout": 1.869565,
                        "source": "DRAFT_KINGS",
                        "type": "OVER",
                        "live": false,
                        "marketKey": "Kp3G-zerf-P0rU",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.271Z"
                    }
                ],
                "context": {
                    "marketKey": "Kp3G-zerf-P0rU",
                    "marketType": "POINT_TOTAL",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "wy00-zepj-kiUC",
                    "eventSport": "HANDBALL",
                    "eventName": "Montpellier Handball @ Chambery Savoie Mont Blanc Handball",
                    "eventStartTime": "2025-04-18T18:00:00.000Z",
                    "eventHomeParticipantKey": "COcR-wljx-Sm8h",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Montpellier Handball",
                            "key": "uCUF-wljx-7F7n",
                            "shortName": "MTP",
                            "slug": "montpellier-handball",
                            "sport": "HANDBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Chambery Savoie Mont Blanc Handball",
                            "key": "COcR-wljx-Sm8h",
                            "shortName": "CMB",
                            "slug": "chambery-savoie-mont-blanc-handball",
                            "sport": "HANDBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 LNH Division 1",
                    "competitionInstanceKey": "jPsx-yjxw-VjED",
                    "competitionName": "LNH Division 1",
                    "competitionShortName": "LNH_D1",
                    "competitionKey": "W4Mq-wljx-ykcq"
                }
            },
            {
                "type": "MIDDLE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 59.5,
                        "payout": 1.77,
                        "source": "BET_RIVERS",
                        "type": "UNDER",
                        "live": false,
                        "marketKey": "Kp3G-zerf-P0rU",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.069Z"
                    },
                    {
                        "modifier": 58.5,
                        "payout": 1.869565,
                        "source": "DRAFT_KINGS",
                        "type": "OVER",
                        "live": false,
                        "marketKey": "Kp3G-zerf-P0rU",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.271Z"
                    }
                ],
                "context": {
                    "marketKey": "Kp3G-zerf-P0rU",
                    "marketType": "POINT_TOTAL",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "wy00-zepj-kiUC",
                    "eventSport": "HANDBALL",
                    "eventName": "Montpellier Handball @ Chambery Savoie Mont Blanc Handball",
                    "eventStartTime": "2025-04-18T18:00:00.000Z",
                    "eventHomeParticipantKey": "COcR-wljx-Sm8h",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Montpellier Handball",
                            "key": "uCUF-wljx-7F7n",
                            "shortName": "MTP",
                            "slug": "montpellier-handball",
                            "sport": "HANDBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Chambery Savoie Mont Blanc Handball",
                            "key": "COcR-wljx-Sm8h",
                            "shortName": "CMB",
                            "slug": "chambery-savoie-mont-blanc-handball",
                            "sport": "HANDBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 LNH Division 1",
                    "competitionInstanceKey": "jPsx-yjxw-VjED",
                    "competitionName": "LNH Division 1",
                    "competitionShortName": "LNH_D1",
                    "competitionKey": "W4Mq-wljx-ykcq"
                }
            },
            {
                "type": "MIDDLE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 2.5,
                        "payout": 1.45,
                        "source": "BET_PARX",
                        "type": "UNDER",
                        "live": false,
                        "marketKey": "L8vs-zelf-DS0X",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.143Z"
                    },
                    {
                        "modifier": 1.5,
                        "payout": 1.48,
                        "source": "BET_RIVERS",
                        "type": "OVER",
                        "live": false,
                        "marketKey": "L8vs-zelf-DS0X",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.075Z"
                    }
                ],
                "context": {
                    "marketKey": "L8vs-zelf-DS0X",
                    "marketType": "POINT_TOTAL",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "5RDe-zelf-lk1f",
                    "eventSport": "SOCCER",
                    "eventName": "Luton Town @ Derby County",
                    "eventStartTime": "2025-04-18T11:30:00.000Z",
                    "eventHomeParticipantKey": "bwhU-yjue-ml8M",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Luton Town",
                            "key": "ZdQt-xgpw-8heH",
                            "shortName": "LUT",
                            "slug": "luton-town",
                            "sport": "SOCCER"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Derby County",
                            "key": "bwhU-yjue-ml8M",
                            "shortName": "DER",
                            "slug": "derby-county",
                            "sport": "SOCCER"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 English Football League Championship",
                    "competitionInstanceKey": "U1TI-yiqv-YpWA",
                    "competitionName": "English Football League Championship",
                    "competitionShortName": "EFLC",
                    "competitionKey": "RY22-ybnv-qSWt"
                }
            },
            {
                "type": "MIDDLE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 4.5,
                        "payout": 1.52,
                        "source": "BET_PARX",
                        "type": "UNDER",
                        "live": false,
                        "marketKey": "OqVW-zegt-SCFb",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.235Z"
                    },
                    {
                        "modifier": 3.5,
                        "payout": 1.65,
                        "source": "BET_RIVERS",
                        "type": "OVER",
                        "live": false,
                        "marketKey": "OqVW-zegt-SCFb",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.117Z"
                    }
                ],
                "context": {
                    "marketKey": "OqVW-zegt-SCFb",
                    "marketType": "POINT_TOTAL",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "SWf7-zegt-ML0j",
                    "eventSport": "SOCCER",
                    "eventName": "Le Havre @ Paris St Germain",
                    "eventStartTime": "2025-04-19T15:00:00.000Z",
                    "eventHomeParticipantKey": "w9RG-wlct-BGc9",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Paris St Germain",
                            "key": "w9RG-wlct-BGc9",
                            "shortName": "PSG",
                            "slug": "paris-st-germain",
                            "sport": "SOCCER"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Le Havre",
                            "key": "XNc8-xhdl-11k8",
                            "shortName": "HAC",
                            "slug": "le-havre",
                            "sport": "SOCCER"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 French Ligue 1",
                    "competitionInstanceKey": "vqUs-yirv-BL4l",
                    "competitionName": "French Ligue 1",
                    "competitionShortName": "LIGUE_ONE",
                    "competitionKey": "xEL0-wlct-6byJ"
                }
            },
            {
                "type": "MIDDLE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 171.5,
                        "payout": 1.91,
                        "source": "BET_PARX",
                        "type": "OVER",
                        "live": false,
                        "marketKey": "Or1O-zepq-RUlx",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.169Z"
                    },
                    {
                        "modifier": 172.5,
                        "payout": 1.909091,
                        "source": "DRAFT_KINGS",
                        "type": "UNDER",
                        "live": false,
                        "marketKey": "Or1O-zepq-RUlx",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.274Z"
                    }
                ],
                "context": {
                    "marketKey": "Or1O-zepq-RUlx",
                    "marketType": "POINT_TOTAL",
                    "marketSegment": "FULL_MATCH",
                    "eventKey": "d9nx-zepq-ZCX7",
                    "eventSport": "BASKETBALL",
                    "eventName": "Anadolu Efes @ Panathinaikos",
                    "eventStartTime": "2025-04-22T16:00:00.000Z",
                    "eventHomeParticipantKey": "B208-ycbt-3wyG",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Panathinaikos",
                            "key": "B208-ycbt-3wyG",
                            "shortName": "PAO",
                            "slug": "panathinaikos",
                            "sport": "BASKETBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Anadolu Efes",
                            "key": "HBCA-ycbt-SrsL",
                            "shortName": "EFS",
                            "slug": "anadolu-efes",
                            "sport": "BASKETBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 EuroLeague",
                    "competitionInstanceKey": "m6Ct-yjxv-KemO",
                    "competitionName": "EuroLeague",
                    "competitionShortName": "EURO_BB",
                    "competitionKey": "kzMY-ycbt-Xaaw"
                }
            },
            {
                "type": "MIDDLE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 171.5,
                        "payout": 1.91,
                        "source": "BET_RIVERS",
                        "type": "OVER",
                        "live": false,
                        "marketKey": "Or1O-zepq-RUlx",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.073Z"
                    },
                    {
                        "modifier": 172.5,
                        "payout": 1.909091,
                        "source": "DRAFT_KINGS",
                        "type": "UNDER",
                        "live": false,
                        "marketKey": "Or1O-zepq-RUlx",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.274Z"
                    }
                ],
                "context": {
                    "marketKey": "Or1O-zepq-RUlx",
                    "marketType": "POINT_TOTAL",
                    "marketSegment": "FULL_MATCH",
                    "eventKey": "d9nx-zepq-ZCX7",
                    "eventSport": "BASKETBALL",
                    "eventName": "Anadolu Efes @ Panathinaikos",
                    "eventStartTime": "2025-04-22T16:00:00.000Z",
                    "eventHomeParticipantKey": "B208-ycbt-3wyG",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Panathinaikos",
                            "key": "B208-ycbt-3wyG",
                            "shortName": "PAO",
                            "slug": "panathinaikos",
                            "sport": "BASKETBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Anadolu Efes",
                            "key": "HBCA-ycbt-SrsL",
                            "shortName": "EFS",
                            "slug": "anadolu-efes",
                            "sport": "BASKETBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 EuroLeague",
                    "competitionInstanceKey": "m6Ct-yjxv-KemO",
                    "competitionName": "EuroLeague",
                    "competitionShortName": "EURO_BB",
                    "competitionKey": "kzMY-ycbt-Xaaw"
                }
            },
            {
                "type": "MIDDLE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 0.5,
                        "payout": 1.85,
                        "source": "BET_PARX",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "UyPp-zero-n36P",
                        "participantKey": "biYO-wddv-j7OK",
                        "time": "2025-04-18T02:29:00.163Z"
                    },
                    {
                        "modifier": 0.5,
                        "payout": 1.847458,
                        "source": "DRAFT_KINGS",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "UyPp-zero-n36P",
                        "participantKey": "0Ch7-wddv-OrXs",
                        "time": "2025-04-18T02:29:00.274Z"
                    }
                ],
                "context": {
                    "marketKey": "UyPp-zero-n36P",
                    "marketType": "POINT_SPREAD",
                    "marketSegment": "HALF_1",
                    "eventKey": "BsiB-zerb-sFT3",
                    "eventSport": "BASKETBALL",
                    "eventName": "Miami Heat @ Atlanta Hawks",
                    "eventStartTime": "2025-04-18T23:10:00.000Z",
                    "eventHomeParticipantKey": "0Ch7-wddv-OrXs",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Atlanta Hawks",
                            "key": "0Ch7-wddv-OrXs",
                            "shortName": "ATL",
                            "slug": "atlanta-hawks",
                            "sport": "BASKETBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Miami Heat",
                            "key": "biYO-wddv-j7OK",
                            "shortName": "MIA",
                            "slug": "miami-heat",
                            "sport": "BASKETBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 National Basketball Association",
                    "competitionInstanceKey": "g4sK-yinv-Lczx",
                    "competitionName": "National Basketball Association",
                    "competitionShortName": "NBA",
                    "competitionKey": "d791-wddv-30fU"
                }
            },
            {
                "type": "MIDDLE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 0.5,
                        "payout": 1.87,
                        "source": "BOVADA",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "UyPp-zero-n36P",
                        "participantKey": "biYO-wddv-j7OK",
                        "time": "2025-04-18T02:29:00.254Z"
                    },
                    {
                        "modifier": 0.5,
                        "payout": 1.847458,
                        "source": "DRAFT_KINGS",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "UyPp-zero-n36P",
                        "participantKey": "0Ch7-wddv-OrXs",
                        "time": "2025-04-18T02:29:00.274Z"
                    }
                ],
                "context": {
                    "marketKey": "UyPp-zero-n36P",
                    "marketType": "POINT_SPREAD",
                    "marketSegment": "HALF_1",
                    "eventKey": "BsiB-zerb-sFT3",
                    "eventSport": "BASKETBALL",
                    "eventName": "Miami Heat @ Atlanta Hawks",
                    "eventStartTime": "2025-04-18T23:10:00.000Z",
                    "eventHomeParticipantKey": "0Ch7-wddv-OrXs",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Atlanta Hawks",
                            "key": "0Ch7-wddv-OrXs",
                            "shortName": "ATL",
                            "slug": "atlanta-hawks",
                            "sport": "BASKETBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Miami Heat",
                            "key": "biYO-wddv-j7OK",
                            "shortName": "MIA",
                            "slug": "miami-heat",
                            "sport": "BASKETBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 National Basketball Association",
                    "competitionInstanceKey": "g4sK-yinv-Lczx",
                    "competitionName": "National Basketball Association",
                    "competitionShortName": "NBA",
                    "competitionKey": "d791-wddv-30fU"
                }
            },
            {
                "type": "MIDDLE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 184.5,
                        "payout": 1.9,
                        "source": "BET_PARX",
                        "type": "UNDER",
                        "live": false,
                        "marketKey": "VnAx-zeoh-zjj1",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.124Z"
                    },
                    {
                        "modifier": 183.5,
                        "payout": 1.87,
                        "source": "ESPN_BET",
                        "type": "OVER",
                        "live": false,
                        "marketKey": "VnAx-zeoh-zjj1",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.281Z"
                    }
                ],
                "context": {
                    "marketKey": "VnAx-zeoh-zjj1",
                    "marketType": "POINT_TOTAL",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "0RN6-zeie-ezSx",
                    "eventSport": "AUSTRALIAN_RULES_FOOTBALL",
                    "eventName": "GWS Giants @ Adelaide Crows",
                    "eventStartTime": "2025-04-19T06:15:00.000Z",
                    "eventHomeParticipantKey": "UPnf-xbdu-5qIc",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Adelaide Crows",
                            "key": "UPnf-xbdu-5qIc",
                            "shortName": "ADE",
                            "slug": "adelaide-crows",
                            "sport": "AUSTRALIAN_RULES_FOOTBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "GWS Giants",
                            "key": "pkOP-xbdu-icpt",
                            "shortName": "GWS",
                            "slug": "gws-giants",
                            "sport": "AUSTRALIAN_RULES_FOOTBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 Australian Football League",
                    "competitionInstanceKey": "6dBj-ykzc-cMtp",
                    "competitionName": "Australian Football League",
                    "competitionShortName": "AFL",
                    "competitionKey": "jcKL-xbdu-POdB"
                }
            },
            {
                "type": "MIDDLE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 184.5,
                        "payout": 1.9,
                        "source": "BET_RIVERS",
                        "type": "UNDER",
                        "live": false,
                        "marketKey": "VnAx-zeoh-zjj1",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.067Z"
                    },
                    {
                        "modifier": 183.5,
                        "payout": 1.87,
                        "source": "ESPN_BET",
                        "type": "OVER",
                        "live": false,
                        "marketKey": "VnAx-zeoh-zjj1",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.281Z"
                    }
                ],
                "context": {
                    "marketKey": "VnAx-zeoh-zjj1",
                    "marketType": "POINT_TOTAL",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "0RN6-zeie-ezSx",
                    "eventSport": "AUSTRALIAN_RULES_FOOTBALL",
                    "eventName": "GWS Giants @ Adelaide Crows",
                    "eventStartTime": "2025-04-19T06:15:00.000Z",
                    "eventHomeParticipantKey": "UPnf-xbdu-5qIc",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Adelaide Crows",
                            "key": "UPnf-xbdu-5qIc",
                            "shortName": "ADE",
                            "slug": "adelaide-crows",
                            "sport": "AUSTRALIAN_RULES_FOOTBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "GWS Giants",
                            "key": "pkOP-xbdu-icpt",
                            "shortName": "GWS",
                            "slug": "gws-giants",
                            "sport": "AUSTRALIAN_RULES_FOOTBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 Australian Football League",
                    "competitionInstanceKey": "6dBj-ykzc-cMtp",
                    "competitionName": "Australian Football League",
                    "competitionShortName": "AFL",
                    "competitionKey": "jcKL-xbdu-POdB"
                }
            },
            {
                "type": "MIDDLE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 184.5,
                        "payout": 1.869565,
                        "source": "DRAFT_KINGS",
                        "type": "UNDER",
                        "live": false,
                        "marketKey": "VnAx-zeoh-zjj1",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.271Z"
                    },
                    {
                        "modifier": 183.5,
                        "payout": 1.87,
                        "source": "ESPN_BET",
                        "type": "OVER",
                        "live": false,
                        "marketKey": "VnAx-zeoh-zjj1",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.281Z"
                    }
                ],
                "context": {
                    "marketKey": "VnAx-zeoh-zjj1",
                    "marketType": "POINT_TOTAL",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "0RN6-zeie-ezSx",
                    "eventSport": "AUSTRALIAN_RULES_FOOTBALL",
                    "eventName": "GWS Giants @ Adelaide Crows",
                    "eventStartTime": "2025-04-19T06:15:00.000Z",
                    "eventHomeParticipantKey": "UPnf-xbdu-5qIc",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Adelaide Crows",
                            "key": "UPnf-xbdu-5qIc",
                            "shortName": "ADE",
                            "slug": "adelaide-crows",
                            "sport": "AUSTRALIAN_RULES_FOOTBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "GWS Giants",
                            "key": "pkOP-xbdu-icpt",
                            "shortName": "GWS",
                            "slug": "gws-giants",
                            "sport": "AUSTRALIAN_RULES_FOOTBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 Australian Football League",
                    "competitionInstanceKey": "6dBj-ykzc-cMtp",
                    "competitionName": "Australian Football League",
                    "competitionShortName": "AFL",
                    "competitionKey": "jcKL-xbdu-POdB"
                }
            },
            {
                "type": "MIDDLE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": -1.5,
                        "payout": 1.93,
                        "source": "BET_PARX",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "Vst8-zeie-2tUG",
                        "participantKey": "HtoJ-xbdu-4A4b",
                        "time": "2025-04-18T02:29:00.124Z"
                    },
                    {
                        "modifier": 2.5,
                        "payout": 1.869565,
                        "source": "DRAFT_KINGS",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "Vst8-zeie-2tUG",
                        "participantKey": "Qo6X-xbdu-OFIm",
                        "time": "2025-04-18T02:29:00.271Z"
                    }
                ],
                "context": {
                    "marketKey": "Vst8-zeie-2tUG",
                    "marketType": "POINT_SPREAD",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "sjM6-zeie-9STJ",
                    "eventSport": "AUSTRALIAN_RULES_FOOTBALL",
                    "eventName": "Hawthorn @ Geelong Cats",
                    "eventStartTime": "2025-04-21T05:20:00.000Z",
                    "eventHomeParticipantKey": "HtoJ-xbdu-4A4b",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Hawthorn",
                            "key": "Qo6X-xbdu-OFIm",
                            "shortName": "HAW",
                            "slug": "hawthorn",
                            "sport": "AUSTRALIAN_RULES_FOOTBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Geelong Cats",
                            "key": "HtoJ-xbdu-4A4b",
                            "shortName": "GEE",
                            "slug": "geelong-cats",
                            "sport": "AUSTRALIAN_RULES_FOOTBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 Australian Football League",
                    "competitionInstanceKey": "6dBj-ykzc-cMtp",
                    "competitionName": "Australian Football League",
                    "competitionShortName": "AFL",
                    "competitionKey": "jcKL-xbdu-POdB"
                }
            },
            {
                "type": "MIDDLE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": -1.5,
                        "payout": 1.93,
                        "source": "BET_RIVERS",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "Vst8-zeie-2tUG",
                        "participantKey": "HtoJ-xbdu-4A4b",
                        "time": "2025-04-18T02:29:00.067Z"
                    },
                    {
                        "modifier": 2.5,
                        "payout": 1.869565,
                        "source": "DRAFT_KINGS",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "Vst8-zeie-2tUG",
                        "participantKey": "Qo6X-xbdu-OFIm",
                        "time": "2025-04-18T02:29:00.271Z"
                    }
                ],
                "context": {
                    "marketKey": "Vst8-zeie-2tUG",
                    "marketType": "POINT_SPREAD",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "sjM6-zeie-9STJ",
                    "eventSport": "AUSTRALIAN_RULES_FOOTBALL",
                    "eventName": "Hawthorn @ Geelong Cats",
                    "eventStartTime": "2025-04-21T05:20:00.000Z",
                    "eventHomeParticipantKey": "HtoJ-xbdu-4A4b",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Hawthorn",
                            "key": "Qo6X-xbdu-OFIm",
                            "shortName": "HAW",
                            "slug": "hawthorn",
                            "sport": "AUSTRALIAN_RULES_FOOTBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Geelong Cats",
                            "key": "HtoJ-xbdu-4A4b",
                            "shortName": "GEE",
                            "slug": "geelong-cats",
                            "sport": "AUSTRALIAN_RULES_FOOTBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 Australian Football League",
                    "competitionInstanceKey": "6dBj-ykzc-cMtp",
                    "competitionName": "Australian Football League",
                    "competitionShortName": "AFL",
                    "competitionKey": "jcKL-xbdu-POdB"
                }
            },
            {
                "type": "MIDDLE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 2.5,
                        "payout": 1.869565,
                        "source": "DRAFT_KINGS",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "Vst8-zeie-2tUG",
                        "participantKey": "Qo6X-xbdu-OFIm",
                        "time": "2025-04-18T02:29:00.271Z"
                    },
                    {
                        "modifier": -1.5,
                        "payout": 1.87,
                        "source": "ESPN_BET",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "Vst8-zeie-2tUG",
                        "participantKey": "HtoJ-xbdu-4A4b",
                        "time": "2025-04-18T02:29:00.281Z"
                    }
                ],
                "context": {
                    "marketKey": "Vst8-zeie-2tUG",
                    "marketType": "POINT_SPREAD",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "sjM6-zeie-9STJ",
                    "eventSport": "AUSTRALIAN_RULES_FOOTBALL",
                    "eventName": "Hawthorn @ Geelong Cats",
                    "eventStartTime": "2025-04-21T05:20:00.000Z",
                    "eventHomeParticipantKey": "HtoJ-xbdu-4A4b",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Hawthorn",
                            "key": "Qo6X-xbdu-OFIm",
                            "shortName": "HAW",
                            "slug": "hawthorn",
                            "sport": "AUSTRALIAN_RULES_FOOTBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Geelong Cats",
                            "key": "HtoJ-xbdu-4A4b",
                            "shortName": "GEE",
                            "slug": "geelong-cats",
                            "sport": "AUSTRALIAN_RULES_FOOTBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 Australian Football League",
                    "competitionInstanceKey": "6dBj-ykzc-cMtp",
                    "competitionName": "Australian Football League",
                    "competitionShortName": "AFL",
                    "competitionKey": "jcKL-xbdu-POdB"
                }
            },
            {
                "type": "MIDDLE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 3.5,
                        "payout": 1.9,
                        "source": "BET_PARX",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "X0H0-zeie-A3RJ",
                        "participantKey": "pkOP-xbdu-icpt",
                        "time": "2025-04-18T02:29:00.124Z"
                    },
                    {
                        "modifier": -2.5,
                        "payout": 1.87,
                        "source": "ESPN_BET",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "X0H0-zeie-A3RJ",
                        "participantKey": "UPnf-xbdu-5qIc",
                        "time": "2025-04-18T02:29:00.281Z"
                    }
                ],
                "context": {
                    "marketKey": "X0H0-zeie-A3RJ",
                    "marketType": "POINT_SPREAD",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "0RN6-zeie-ezSx",
                    "eventSport": "AUSTRALIAN_RULES_FOOTBALL",
                    "eventName": "GWS Giants @ Adelaide Crows",
                    "eventStartTime": "2025-04-19T06:15:00.000Z",
                    "eventHomeParticipantKey": "UPnf-xbdu-5qIc",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Adelaide Crows",
                            "key": "UPnf-xbdu-5qIc",
                            "shortName": "ADE",
                            "slug": "adelaide-crows",
                            "sport": "AUSTRALIAN_RULES_FOOTBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "GWS Giants",
                            "key": "pkOP-xbdu-icpt",
                            "shortName": "GWS",
                            "slug": "gws-giants",
                            "sport": "AUSTRALIAN_RULES_FOOTBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 Australian Football League",
                    "competitionInstanceKey": "6dBj-ykzc-cMtp",
                    "competitionName": "Australian Football League",
                    "competitionShortName": "AFL",
                    "competitionKey": "jcKL-xbdu-POdB"
                }
            },
            {
                "type": "MIDDLE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 3.5,
                        "payout": 1.9,
                        "source": "BET_RIVERS",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "X0H0-zeie-A3RJ",
                        "participantKey": "pkOP-xbdu-icpt",
                        "time": "2025-04-18T02:29:00.067Z"
                    },
                    {
                        "modifier": -2.5,
                        "payout": 1.87,
                        "source": "ESPN_BET",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "X0H0-zeie-A3RJ",
                        "participantKey": "UPnf-xbdu-5qIc",
                        "time": "2025-04-18T02:29:00.281Z"
                    }
                ],
                "context": {
                    "marketKey": "X0H0-zeie-A3RJ",
                    "marketType": "POINT_SPREAD",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "0RN6-zeie-ezSx",
                    "eventSport": "AUSTRALIAN_RULES_FOOTBALL",
                    "eventName": "GWS Giants @ Adelaide Crows",
                    "eventStartTime": "2025-04-19T06:15:00.000Z",
                    "eventHomeParticipantKey": "UPnf-xbdu-5qIc",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Adelaide Crows",
                            "key": "UPnf-xbdu-5qIc",
                            "shortName": "ADE",
                            "slug": "adelaide-crows",
                            "sport": "AUSTRALIAN_RULES_FOOTBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "GWS Giants",
                            "key": "pkOP-xbdu-icpt",
                            "shortName": "GWS",
                            "slug": "gws-giants",
                            "sport": "AUSTRALIAN_RULES_FOOTBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 Australian Football League",
                    "competitionInstanceKey": "6dBj-ykzc-cMtp",
                    "competitionName": "Australian Football League",
                    "competitionShortName": "AFL",
                    "competitionKey": "jcKL-xbdu-POdB"
                }
            },
            {
                "type": "MIDDLE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 3.5,
                        "payout": 1.869565,
                        "source": "DRAFT_KINGS",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "X0H0-zeie-A3RJ",
                        "participantKey": "pkOP-xbdu-icpt",
                        "time": "2025-04-18T02:29:00.271Z"
                    },
                    {
                        "modifier": -2.5,
                        "payout": 1.87,
                        "source": "ESPN_BET",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "X0H0-zeie-A3RJ",
                        "participantKey": "UPnf-xbdu-5qIc",
                        "time": "2025-04-18T02:29:00.281Z"
                    }
                ],
                "context": {
                    "marketKey": "X0H0-zeie-A3RJ",
                    "marketType": "POINT_SPREAD",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "0RN6-zeie-ezSx",
                    "eventSport": "AUSTRALIAN_RULES_FOOTBALL",
                    "eventName": "GWS Giants @ Adelaide Crows",
                    "eventStartTime": "2025-04-19T06:15:00.000Z",
                    "eventHomeParticipantKey": "UPnf-xbdu-5qIc",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Adelaide Crows",
                            "key": "UPnf-xbdu-5qIc",
                            "shortName": "ADE",
                            "slug": "adelaide-crows",
                            "sport": "AUSTRALIAN_RULES_FOOTBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "GWS Giants",
                            "key": "pkOP-xbdu-icpt",
                            "shortName": "GWS",
                            "slug": "gws-giants",
                            "sport": "AUSTRALIAN_RULES_FOOTBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 Australian Football League",
                    "competitionInstanceKey": "6dBj-ykzc-cMtp",
                    "competitionName": "Australian Football League",
                    "competitionShortName": "AFL",
                    "competitionKey": "jcKL-xbdu-POdB"
                }
            },
            {
                "type": "MIDDLE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 3.5,
                        "payout": 1.44,
                        "source": "BET_PARX",
                        "type": "UNDER",
                        "live": false,
                        "marketKey": "arP8-zeoi-4HgW",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.241Z"
                    },
                    {
                        "modifier": 2.5,
                        "payout": 1.62,
                        "source": "BET_RIVERS",
                        "type": "OVER",
                        "live": false,
                        "marketKey": "arP8-zeoi-4HgW",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.119Z"
                    }
                ],
                "context": {
                    "marketKey": "arP8-zeoi-4HgW",
                    "marketType": "POINT_TOTAL",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "wXzr-zeoh-Pvaa",
                    "eventSport": "SOCCER",
                    "eventName": "Monza @ Juventus",
                    "eventStartTime": "2025-04-27T13:00:00.000Z",
                    "eventHomeParticipantKey": "yAFB-wlct-d10q",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Juventus",
                            "key": "yAFB-wlct-d10q",
                            "shortName": "JUV",
                            "slug": "juventus",
                            "sport": "SOCCER"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Monza",
                            "key": "6bJK-wlct-R5H0",
                            "shortName": "MNZ",
                            "slug": "monza",
                            "sport": "SOCCER"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 Italian Serie A",
                    "competitionInstanceKey": "7uZ7-yiqw-KOeX",
                    "competitionName": "Italian Serie A",
                    "competitionShortName": "SERIE_A",
                    "competitionKey": "H9PU-wlct-DJ8j"
                }
            },
            {
                "type": "MIDDLE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 175.5,
                        "payout": 1.9,
                        "source": "BET_PARX",
                        "type": "UNDER",
                        "live": false,
                        "marketKey": "bwGG-zepb-QksT",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.124Z"
                    },
                    {
                        "modifier": 174.5,
                        "payout": 1.87,
                        "source": "ESPN_BET",
                        "type": "OVER",
                        "live": false,
                        "marketKey": "bwGG-zepb-QksT",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.281Z"
                    }
                ],
                "context": {
                    "marketKey": "bwGG-zepb-QksT",
                    "marketType": "POINT_TOTAL",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "sjM6-zeie-9STJ",
                    "eventSport": "AUSTRALIAN_RULES_FOOTBALL",
                    "eventName": "Hawthorn @ Geelong Cats",
                    "eventStartTime": "2025-04-21T05:20:00.000Z",
                    "eventHomeParticipantKey": "HtoJ-xbdu-4A4b",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Hawthorn",
                            "key": "Qo6X-xbdu-OFIm",
                            "shortName": "HAW",
                            "slug": "hawthorn",
                            "sport": "AUSTRALIAN_RULES_FOOTBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Geelong Cats",
                            "key": "HtoJ-xbdu-4A4b",
                            "shortName": "GEE",
                            "slug": "geelong-cats",
                            "sport": "AUSTRALIAN_RULES_FOOTBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 Australian Football League",
                    "competitionInstanceKey": "6dBj-ykzc-cMtp",
                    "competitionName": "Australian Football League",
                    "competitionShortName": "AFL",
                    "competitionKey": "jcKL-xbdu-POdB"
                }
            },
            {
                "type": "MIDDLE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 175.5,
                        "payout": 1.9,
                        "source": "BET_RIVERS",
                        "type": "UNDER",
                        "live": false,
                        "marketKey": "bwGG-zepb-QksT",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.067Z"
                    },
                    {
                        "modifier": 174.5,
                        "payout": 1.87,
                        "source": "ESPN_BET",
                        "type": "OVER",
                        "live": false,
                        "marketKey": "bwGG-zepb-QksT",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.281Z"
                    }
                ],
                "context": {
                    "marketKey": "bwGG-zepb-QksT",
                    "marketType": "POINT_TOTAL",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "sjM6-zeie-9STJ",
                    "eventSport": "AUSTRALIAN_RULES_FOOTBALL",
                    "eventName": "Hawthorn @ Geelong Cats",
                    "eventStartTime": "2025-04-21T05:20:00.000Z",
                    "eventHomeParticipantKey": "HtoJ-xbdu-4A4b",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Hawthorn",
                            "key": "Qo6X-xbdu-OFIm",
                            "shortName": "HAW",
                            "slug": "hawthorn",
                            "sport": "AUSTRALIAN_RULES_FOOTBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Geelong Cats",
                            "key": "HtoJ-xbdu-4A4b",
                            "shortName": "GEE",
                            "slug": "geelong-cats",
                            "sport": "AUSTRALIAN_RULES_FOOTBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 Australian Football League",
                    "competitionInstanceKey": "6dBj-ykzc-cMtp",
                    "competitionName": "Australian Football League",
                    "competitionShortName": "AFL",
                    "competitionKey": "jcKL-xbdu-POdB"
                }
            },
            {
                "type": "MIDDLE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 175.5,
                        "payout": 1.869565,
                        "source": "DRAFT_KINGS",
                        "type": "UNDER",
                        "live": false,
                        "marketKey": "bwGG-zepb-QksT",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.271Z"
                    },
                    {
                        "modifier": 174.5,
                        "payout": 1.87,
                        "source": "ESPN_BET",
                        "type": "OVER",
                        "live": false,
                        "marketKey": "bwGG-zepb-QksT",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.281Z"
                    }
                ],
                "context": {
                    "marketKey": "bwGG-zepb-QksT",
                    "marketType": "POINT_TOTAL",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "sjM6-zeie-9STJ",
                    "eventSport": "AUSTRALIAN_RULES_FOOTBALL",
                    "eventName": "Hawthorn @ Geelong Cats",
                    "eventStartTime": "2025-04-21T05:20:00.000Z",
                    "eventHomeParticipantKey": "HtoJ-xbdu-4A4b",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Hawthorn",
                            "key": "Qo6X-xbdu-OFIm",
                            "shortName": "HAW",
                            "slug": "hawthorn",
                            "sport": "AUSTRALIAN_RULES_FOOTBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Geelong Cats",
                            "key": "HtoJ-xbdu-4A4b",
                            "shortName": "GEE",
                            "slug": "geelong-cats",
                            "sport": "AUSTRALIAN_RULES_FOOTBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 Australian Football League",
                    "competitionInstanceKey": "6dBj-ykzc-cMtp",
                    "competitionName": "Australian Football League",
                    "competitionShortName": "AFL",
                    "competitionKey": "jcKL-xbdu-POdB"
                }
            },
            {
                "type": "MIDDLE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 2.5,
                        "payout": 1.46,
                        "source": "BET_PARX",
                        "type": "UNDER",
                        "live": false,
                        "marketKey": "dcSA-zenu-5vNT",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.220Z"
                    },
                    {
                        "modifier": 1.5,
                        "payout": 1.52,
                        "source": "BET_RIVERS",
                        "type": "OVER",
                        "live": false,
                        "marketKey": "dcSA-zenu-5vNT",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.115Z"
                    }
                ],
                "context": {
                    "marketKey": "dcSA-zenu-5vNT",
                    "marketType": "POINT_TOTAL",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "19vo-zenu-Mg2g",
                    "eventSport": "SOCCER",
                    "eventName": "Real Sociedad @ Alaves",
                    "eventStartTime": "2025-04-23T19:30:00.000Z",
                    "eventHomeParticipantKey": "0fMy-xgAw-Vnu7",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Real Sociedad",
                            "key": "EXYO-wlct-Vsat",
                            "shortName": "SOC",
                            "slug": "real-sociedad",
                            "sport": "SOCCER"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Alaves",
                            "key": "0fMy-xgAw-Vnu7",
                            "shortName": "ALA",
                            "slug": "alaves",
                            "sport": "SOCCER"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 Spanish La Liga",
                    "competitionInstanceKey": "VQM5-yiqw-x4Xi",
                    "competitionName": "Spanish La Liga",
                    "competitionShortName": "LA_LIGA",
                    "competitionKey": "UqE7-wlct-9mU2"
                }
            },
            {
                "type": "MIDDLE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": -45.5,
                        "payout": 1.9,
                        "source": "BET_PARX",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "e5uc-zeie-WLC8",
                        "participantKey": "76J7-xbdu-hQQe",
                        "time": "2025-04-18T02:29:00.124Z"
                    },
                    {
                        "modifier": 46.5,
                        "payout": 1.87,
                        "source": "ESPN_BET",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "e5uc-zeie-WLC8",
                        "participantKey": "7Jpf-xbdu-9NrH",
                        "time": "2025-04-18T02:29:00.281Z"
                    }
                ],
                "context": {
                    "marketKey": "e5uc-zeie-WLC8",
                    "marketType": "POINT_SPREAD",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "m1z2-zeie-Xe3H",
                    "eventSport": "AUSTRALIAN_RULES_FOOTBALL",
                    "eventName": "Gold Coast Suns @ Richmond",
                    "eventStartTime": "2025-04-19T09:35:00.000Z",
                    "eventHomeParticipantKey": "7Jpf-xbdu-9NrH",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Richmond",
                            "key": "7Jpf-xbdu-9NrH",
                            "shortName": "RIC",
                            "slug": "richmond",
                            "sport": "AUSTRALIAN_RULES_FOOTBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Gold Coast Suns",
                            "key": "76J7-xbdu-hQQe",
                            "shortName": "GCS",
                            "slug": "gold-coast-suns",
                            "sport": "AUSTRALIAN_RULES_FOOTBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 Australian Football League",
                    "competitionInstanceKey": "6dBj-ykzc-cMtp",
                    "competitionName": "Australian Football League",
                    "competitionShortName": "AFL",
                    "competitionKey": "jcKL-xbdu-POdB"
                }
            },
            {
                "type": "MIDDLE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": -45.5,
                        "payout": 1.9,
                        "source": "BET_RIVERS",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "e5uc-zeie-WLC8",
                        "participantKey": "76J7-xbdu-hQQe",
                        "time": "2025-04-18T02:29:00.067Z"
                    },
                    {
                        "modifier": 46.5,
                        "payout": 1.87,
                        "source": "ESPN_BET",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "e5uc-zeie-WLC8",
                        "participantKey": "7Jpf-xbdu-9NrH",
                        "time": "2025-04-18T02:29:00.281Z"
                    }
                ],
                "context": {
                    "marketKey": "e5uc-zeie-WLC8",
                    "marketType": "POINT_SPREAD",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "m1z2-zeie-Xe3H",
                    "eventSport": "AUSTRALIAN_RULES_FOOTBALL",
                    "eventName": "Gold Coast Suns @ Richmond",
                    "eventStartTime": "2025-04-19T09:35:00.000Z",
                    "eventHomeParticipantKey": "7Jpf-xbdu-9NrH",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Richmond",
                            "key": "7Jpf-xbdu-9NrH",
                            "shortName": "RIC",
                            "slug": "richmond",
                            "sport": "AUSTRALIAN_RULES_FOOTBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Gold Coast Suns",
                            "key": "76J7-xbdu-hQQe",
                            "shortName": "GCS",
                            "slug": "gold-coast-suns",
                            "sport": "AUSTRALIAN_RULES_FOOTBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 Australian Football League",
                    "competitionInstanceKey": "6dBj-ykzc-cMtp",
                    "competitionName": "Australian Football League",
                    "competitionShortName": "AFL",
                    "competitionKey": "jcKL-xbdu-POdB"
                }
            },
            {
                "type": "MIDDLE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": -45.5,
                        "payout": 1.869565,
                        "source": "DRAFT_KINGS",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "e5uc-zeie-WLC8",
                        "participantKey": "76J7-xbdu-hQQe",
                        "time": "2025-04-18T02:29:00.271Z"
                    },
                    {
                        "modifier": 46.5,
                        "payout": 1.87,
                        "source": "ESPN_BET",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "e5uc-zeie-WLC8",
                        "participantKey": "7Jpf-xbdu-9NrH",
                        "time": "2025-04-18T02:29:00.281Z"
                    }
                ],
                "context": {
                    "marketKey": "e5uc-zeie-WLC8",
                    "marketType": "POINT_SPREAD",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "m1z2-zeie-Xe3H",
                    "eventSport": "AUSTRALIAN_RULES_FOOTBALL",
                    "eventName": "Gold Coast Suns @ Richmond",
                    "eventStartTime": "2025-04-19T09:35:00.000Z",
                    "eventHomeParticipantKey": "7Jpf-xbdu-9NrH",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Richmond",
                            "key": "7Jpf-xbdu-9NrH",
                            "shortName": "RIC",
                            "slug": "richmond",
                            "sport": "AUSTRALIAN_RULES_FOOTBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Gold Coast Suns",
                            "key": "76J7-xbdu-hQQe",
                            "shortName": "GCS",
                            "slug": "gold-coast-suns",
                            "sport": "AUSTRALIAN_RULES_FOOTBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 Australian Football League",
                    "competitionInstanceKey": "6dBj-ykzc-cMtp",
                    "competitionName": "Australian Football League",
                    "competitionShortName": "AFL",
                    "competitionKey": "jcKL-xbdu-POdB"
                }
            },
            {
                "type": "MIDDLE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": -2.5,
                        "payout": 1.9,
                        "source": "BET_PARX",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "gK7S-zerf-R1D9",
                        "participantKey": "ziZ5-wljx-Tx1V",
                        "time": "2025-04-18T02:29:00.127Z"
                    },
                    {
                        "modifier": 3.5,
                        "payout": 1.769231,
                        "source": "DRAFT_KINGS",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "gK7S-zerf-R1D9",
                        "participantKey": "w9TS-wljx-fIDN",
                        "time": "2025-04-18T02:29:00.271Z"
                    }
                ],
                "context": {
                    "marketKey": "gK7S-zerf-R1D9",
                    "marketType": "POINT_SPREAD",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "Of4K-zepj-XWVx",
                    "eventSport": "HANDBALL",
                    "eventName": "Saint-Raphael Var Handball @ US Creteil Handball",
                    "eventStartTime": "2025-04-18T18:30:00.000Z",
                    "eventHomeParticipantKey": "w9TS-wljx-fIDN",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Saint-Raphael Var Handball",
                            "key": "ziZ5-wljx-Tx1V",
                            "shortName": "STR",
                            "slug": "saint-raphael-var-handball",
                            "sport": "HANDBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "US Creteil Handball",
                            "key": "w9TS-wljx-fIDN",
                            "shortName": "USC",
                            "slug": "us-creteil-handball",
                            "sport": "HANDBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 LNH Division 1",
                    "competitionInstanceKey": "jPsx-yjxw-VjED",
                    "competitionName": "LNH Division 1",
                    "competitionShortName": "LNH_D1",
                    "competitionKey": "W4Mq-wljx-ykcq"
                }
            },
            {
                "type": "MIDDLE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": -2.5,
                        "payout": 1.9,
                        "source": "BET_RIVERS",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "gK7S-zerf-R1D9",
                        "participantKey": "ziZ5-wljx-Tx1V",
                        "time": "2025-04-18T02:29:00.069Z"
                    },
                    {
                        "modifier": 3.5,
                        "payout": 1.769231,
                        "source": "DRAFT_KINGS",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "gK7S-zerf-R1D9",
                        "participantKey": "w9TS-wljx-fIDN",
                        "time": "2025-04-18T02:29:00.271Z"
                    }
                ],
                "context": {
                    "marketKey": "gK7S-zerf-R1D9",
                    "marketType": "POINT_SPREAD",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "Of4K-zepj-XWVx",
                    "eventSport": "HANDBALL",
                    "eventName": "Saint-Raphael Var Handball @ US Creteil Handball",
                    "eventStartTime": "2025-04-18T18:30:00.000Z",
                    "eventHomeParticipantKey": "w9TS-wljx-fIDN",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Saint-Raphael Var Handball",
                            "key": "ziZ5-wljx-Tx1V",
                            "shortName": "STR",
                            "slug": "saint-raphael-var-handball",
                            "sport": "HANDBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "US Creteil Handball",
                            "key": "w9TS-wljx-fIDN",
                            "shortName": "USC",
                            "slug": "us-creteil-handball",
                            "sport": "HANDBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 LNH Division 1",
                    "competitionInstanceKey": "jPsx-yjxw-VjED",
                    "competitionName": "LNH Division 1",
                    "competitionShortName": "LNH_D1",
                    "competitionKey": "W4Mq-wljx-ykcq"
                }
            },
            {
                "type": "MIDDLE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": -1.5,
                        "payout": 1.68,
                        "source": "BET_PARX",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "gmK6-zern-tL35",
                        "participantKey": "iBbb-xfxt-IQxZ",
                        "time": "2025-04-18T02:29:00.151Z"
                    },
                    {
                        "modifier": 2.5,
                        "payout": 1.74,
                        "source": "ESPN_BET",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "gmK6-zern-tL35",
                        "participantKey": "ZNfF-xfxt-ivqd",
                        "time": "2025-04-18T02:29:00.282Z"
                    }
                ],
                "context": {
                    "marketKey": "gmK6-zern-tL35",
                    "marketType": "POINT_SPREAD",
                    "marketSegment": "FULL_MATCH",
                    "eventKey": "jaUK-zern-hbU5",
                    "eventSport": "BASEBALL",
                    "eventName": "KT Wiz @ Kiwoom Heroes",
                    "eventStartTime": "2025-04-18T09:30:00.000Z",
                    "eventHomeParticipantKey": "ZNfF-xfxt-ivqd",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Kiwoom Heroes",
                            "key": "ZNfF-xfxt-ivqd",
                            "shortName": "KIW",
                            "slug": "kiwoom-heroes",
                            "sport": "BASEBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "KT Wiz",
                            "key": "iBbb-xfxt-IQxZ",
                            "shortName": "KT",
                            "slug": "kt-wiz",
                            "sport": "BASEBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 KBO League",
                    "competitionInstanceKey": "HzgU-zcrx-0Yjr",
                    "competitionName": "KBO League",
                    "competitionShortName": "KBO",
                    "competitionKey": "lyFJ-xfxt-Oy40"
                }
            },
            {
                "type": "MIDDLE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": -1.5,
                        "payout": 1.68,
                        "source": "BET_PARX",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "gmK6-zern-tL35",
                        "participantKey": "iBbb-xfxt-IQxZ",
                        "time": "2025-04-18T02:29:00.151Z"
                    },
                    {
                        "modifier": 2.5,
                        "payout": 1.72,
                        "source": "FAN_DUEL",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "gmK6-zern-tL35",
                        "participantKey": "ZNfF-xfxt-ivqd",
                        "time": "2025-04-18T02:29:00.287Z"
                    }
                ],
                "context": {
                    "marketKey": "gmK6-zern-tL35",
                    "marketType": "POINT_SPREAD",
                    "marketSegment": "FULL_MATCH",
                    "eventKey": "jaUK-zern-hbU5",
                    "eventSport": "BASEBALL",
                    "eventName": "KT Wiz @ Kiwoom Heroes",
                    "eventStartTime": "2025-04-18T09:30:00.000Z",
                    "eventHomeParticipantKey": "ZNfF-xfxt-ivqd",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Kiwoom Heroes",
                            "key": "ZNfF-xfxt-ivqd",
                            "shortName": "KIW",
                            "slug": "kiwoom-heroes",
                            "sport": "BASEBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "KT Wiz",
                            "key": "iBbb-xfxt-IQxZ",
                            "shortName": "KT",
                            "slug": "kt-wiz",
                            "sport": "BASEBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 KBO League",
                    "competitionInstanceKey": "HzgU-zcrx-0Yjr",
                    "competitionName": "KBO League",
                    "competitionShortName": "KBO",
                    "competitionKey": "lyFJ-xfxt-Oy40"
                }
            },
            {
                "type": "MIDDLE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": -1.5,
                        "payout": 1.68,
                        "source": "BET_PARX",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "gmK6-zern-tL35",
                        "participantKey": "iBbb-xfxt-IQxZ",
                        "time": "2025-04-18T02:29:00.151Z"
                    },
                    {
                        "modifier": 2.5,
                        "payout": 1.74,
                        "source": "FANATICS",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "gmK6-zern-tL35",
                        "participantKey": "ZNfF-xfxt-ivqd",
                        "time": "2025-04-18T02:29:00.287Z"
                    }
                ],
                "context": {
                    "marketKey": "gmK6-zern-tL35",
                    "marketType": "POINT_SPREAD",
                    "marketSegment": "FULL_MATCH",
                    "eventKey": "jaUK-zern-hbU5",
                    "eventSport": "BASEBALL",
                    "eventName": "KT Wiz @ Kiwoom Heroes",
                    "eventStartTime": "2025-04-18T09:30:00.000Z",
                    "eventHomeParticipantKey": "ZNfF-xfxt-ivqd",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Kiwoom Heroes",
                            "key": "ZNfF-xfxt-ivqd",
                            "shortName": "KIW",
                            "slug": "kiwoom-heroes",
                            "sport": "BASEBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "KT Wiz",
                            "key": "iBbb-xfxt-IQxZ",
                            "shortName": "KT",
                            "slug": "kt-wiz",
                            "sport": "BASEBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 KBO League",
                    "competitionInstanceKey": "HzgU-zcrx-0Yjr",
                    "competitionName": "KBO League",
                    "competitionShortName": "KBO",
                    "competitionKey": "lyFJ-xfxt-Oy40"
                }
            },
            {
                "type": "MIDDLE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": -1.5,
                        "payout": 1.68,
                        "source": "BET_RIVERS",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "gmK6-zern-tL35",
                        "participantKey": "iBbb-xfxt-IQxZ",
                        "time": "2025-04-18T02:29:00.077Z"
                    },
                    {
                        "modifier": 2.5,
                        "payout": 1.74,
                        "source": "ESPN_BET",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "gmK6-zern-tL35",
                        "participantKey": "ZNfF-xfxt-ivqd",
                        "time": "2025-04-18T02:29:00.282Z"
                    }
                ],
                "context": {
                    "marketKey": "gmK6-zern-tL35",
                    "marketType": "POINT_SPREAD",
                    "marketSegment": "FULL_MATCH",
                    "eventKey": "jaUK-zern-hbU5",
                    "eventSport": "BASEBALL",
                    "eventName": "KT Wiz @ Kiwoom Heroes",
                    "eventStartTime": "2025-04-18T09:30:00.000Z",
                    "eventHomeParticipantKey": "ZNfF-xfxt-ivqd",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Kiwoom Heroes",
                            "key": "ZNfF-xfxt-ivqd",
                            "shortName": "KIW",
                            "slug": "kiwoom-heroes",
                            "sport": "BASEBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "KT Wiz",
                            "key": "iBbb-xfxt-IQxZ",
                            "shortName": "KT",
                            "slug": "kt-wiz",
                            "sport": "BASEBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 KBO League",
                    "competitionInstanceKey": "HzgU-zcrx-0Yjr",
                    "competitionName": "KBO League",
                    "competitionShortName": "KBO",
                    "competitionKey": "lyFJ-xfxt-Oy40"
                }
            },
            {
                "type": "MIDDLE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": -1.5,
                        "payout": 1.68,
                        "source": "BET_RIVERS",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "gmK6-zern-tL35",
                        "participantKey": "iBbb-xfxt-IQxZ",
                        "time": "2025-04-18T02:29:00.077Z"
                    },
                    {
                        "modifier": 2.5,
                        "payout": 1.72,
                        "source": "FAN_DUEL",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "gmK6-zern-tL35",
                        "participantKey": "ZNfF-xfxt-ivqd",
                        "time": "2025-04-18T02:29:00.287Z"
                    }
                ],
                "context": {
                    "marketKey": "gmK6-zern-tL35",
                    "marketType": "POINT_SPREAD",
                    "marketSegment": "FULL_MATCH",
                    "eventKey": "jaUK-zern-hbU5",
                    "eventSport": "BASEBALL",
                    "eventName": "KT Wiz @ Kiwoom Heroes",
                    "eventStartTime": "2025-04-18T09:30:00.000Z",
                    "eventHomeParticipantKey": "ZNfF-xfxt-ivqd",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Kiwoom Heroes",
                            "key": "ZNfF-xfxt-ivqd",
                            "shortName": "KIW",
                            "slug": "kiwoom-heroes",
                            "sport": "BASEBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "KT Wiz",
                            "key": "iBbb-xfxt-IQxZ",
                            "shortName": "KT",
                            "slug": "kt-wiz",
                            "sport": "BASEBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 KBO League",
                    "competitionInstanceKey": "HzgU-zcrx-0Yjr",
                    "competitionName": "KBO League",
                    "competitionShortName": "KBO",
                    "competitionKey": "lyFJ-xfxt-Oy40"
                }
            },
            {
                "type": "MIDDLE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": -1.5,
                        "payout": 1.68,
                        "source": "BET_RIVERS",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "gmK6-zern-tL35",
                        "participantKey": "iBbb-xfxt-IQxZ",
                        "time": "2025-04-18T02:29:00.077Z"
                    },
                    {
                        "modifier": 2.5,
                        "payout": 1.74,
                        "source": "FANATICS",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "gmK6-zern-tL35",
                        "participantKey": "ZNfF-xfxt-ivqd",
                        "time": "2025-04-18T02:29:00.287Z"
                    }
                ],
                "context": {
                    "marketKey": "gmK6-zern-tL35",
                    "marketType": "POINT_SPREAD",
                    "marketSegment": "FULL_MATCH",
                    "eventKey": "jaUK-zern-hbU5",
                    "eventSport": "BASEBALL",
                    "eventName": "KT Wiz @ Kiwoom Heroes",
                    "eventStartTime": "2025-04-18T09:30:00.000Z",
                    "eventHomeParticipantKey": "ZNfF-xfxt-ivqd",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Kiwoom Heroes",
                            "key": "ZNfF-xfxt-ivqd",
                            "shortName": "KIW",
                            "slug": "kiwoom-heroes",
                            "sport": "BASEBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "KT Wiz",
                            "key": "iBbb-xfxt-IQxZ",
                            "shortName": "KT",
                            "slug": "kt-wiz",
                            "sport": "BASEBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 KBO League",
                    "competitionInstanceKey": "HzgU-zcrx-0Yjr",
                    "competitionName": "KBO League",
                    "competitionShortName": "KBO",
                    "competitionKey": "lyFJ-xfxt-Oy40"
                }
            },
            {
                "type": "MIDDLE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": -1.5,
                        "payout": 1.666667,
                        "source": "BOVADA",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "gmK6-zern-tL35",
                        "participantKey": "iBbb-xfxt-IQxZ",
                        "time": "2025-04-18T02:29:00.253Z"
                    },
                    {
                        "modifier": 2.5,
                        "payout": 1.74,
                        "source": "ESPN_BET",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "gmK6-zern-tL35",
                        "participantKey": "ZNfF-xfxt-ivqd",
                        "time": "2025-04-18T02:29:00.282Z"
                    }
                ],
                "context": {
                    "marketKey": "gmK6-zern-tL35",
                    "marketType": "POINT_SPREAD",
                    "marketSegment": "FULL_MATCH",
                    "eventKey": "jaUK-zern-hbU5",
                    "eventSport": "BASEBALL",
                    "eventName": "KT Wiz @ Kiwoom Heroes",
                    "eventStartTime": "2025-04-18T09:30:00.000Z",
                    "eventHomeParticipantKey": "ZNfF-xfxt-ivqd",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Kiwoom Heroes",
                            "key": "ZNfF-xfxt-ivqd",
                            "shortName": "KIW",
                            "slug": "kiwoom-heroes",
                            "sport": "BASEBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "KT Wiz",
                            "key": "iBbb-xfxt-IQxZ",
                            "shortName": "KT",
                            "slug": "kt-wiz",
                            "sport": "BASEBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 KBO League",
                    "competitionInstanceKey": "HzgU-zcrx-0Yjr",
                    "competitionName": "KBO League",
                    "competitionShortName": "KBO",
                    "competitionKey": "lyFJ-xfxt-Oy40"
                }
            },
            {
                "type": "MIDDLE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": -1.5,
                        "payout": 1.666667,
                        "source": "BOVADA",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "gmK6-zern-tL35",
                        "participantKey": "iBbb-xfxt-IQxZ",
                        "time": "2025-04-18T02:29:00.253Z"
                    },
                    {
                        "modifier": 2.5,
                        "payout": 1.72,
                        "source": "FAN_DUEL",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "gmK6-zern-tL35",
                        "participantKey": "ZNfF-xfxt-ivqd",
                        "time": "2025-04-18T02:29:00.287Z"
                    }
                ],
                "context": {
                    "marketKey": "gmK6-zern-tL35",
                    "marketType": "POINT_SPREAD",
                    "marketSegment": "FULL_MATCH",
                    "eventKey": "jaUK-zern-hbU5",
                    "eventSport": "BASEBALL",
                    "eventName": "KT Wiz @ Kiwoom Heroes",
                    "eventStartTime": "2025-04-18T09:30:00.000Z",
                    "eventHomeParticipantKey": "ZNfF-xfxt-ivqd",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Kiwoom Heroes",
                            "key": "ZNfF-xfxt-ivqd",
                            "shortName": "KIW",
                            "slug": "kiwoom-heroes",
                            "sport": "BASEBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "KT Wiz",
                            "key": "iBbb-xfxt-IQxZ",
                            "shortName": "KT",
                            "slug": "kt-wiz",
                            "sport": "BASEBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 KBO League",
                    "competitionInstanceKey": "HzgU-zcrx-0Yjr",
                    "competitionName": "KBO League",
                    "competitionShortName": "KBO",
                    "competitionKey": "lyFJ-xfxt-Oy40"
                }
            },
            {
                "type": "MIDDLE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": -1.5,
                        "payout": 1.666667,
                        "source": "BOVADA",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "gmK6-zern-tL35",
                        "participantKey": "iBbb-xfxt-IQxZ",
                        "time": "2025-04-18T02:29:00.253Z"
                    },
                    {
                        "modifier": 2.5,
                        "payout": 1.74,
                        "source": "FANATICS",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "gmK6-zern-tL35",
                        "participantKey": "ZNfF-xfxt-ivqd",
                        "time": "2025-04-18T02:29:00.287Z"
                    }
                ],
                "context": {
                    "marketKey": "gmK6-zern-tL35",
                    "marketType": "POINT_SPREAD",
                    "marketSegment": "FULL_MATCH",
                    "eventKey": "jaUK-zern-hbU5",
                    "eventSport": "BASEBALL",
                    "eventName": "KT Wiz @ Kiwoom Heroes",
                    "eventStartTime": "2025-04-18T09:30:00.000Z",
                    "eventHomeParticipantKey": "ZNfF-xfxt-ivqd",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Kiwoom Heroes",
                            "key": "ZNfF-xfxt-ivqd",
                            "shortName": "KIW",
                            "slug": "kiwoom-heroes",
                            "sport": "BASEBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "KT Wiz",
                            "key": "iBbb-xfxt-IQxZ",
                            "shortName": "KT",
                            "slug": "kt-wiz",
                            "sport": "BASEBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 KBO League",
                    "competitionInstanceKey": "HzgU-zcrx-0Yjr",
                    "competitionName": "KBO League",
                    "competitionShortName": "KBO",
                    "competitionKey": "lyFJ-xfxt-Oy40"
                }
            },
            {
                "type": "MIDDLE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": -1.5,
                        "payout": 1.740741,
                        "source": "DRAFT_KINGS",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "gmK6-zern-tL35",
                        "participantKey": "iBbb-xfxt-IQxZ",
                        "time": "2025-04-18T02:29:00.272Z"
                    },
                    {
                        "modifier": 2.5,
                        "payout": 1.74,
                        "source": "ESPN_BET",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "gmK6-zern-tL35",
                        "participantKey": "ZNfF-xfxt-ivqd",
                        "time": "2025-04-18T02:29:00.282Z"
                    }
                ],
                "context": {
                    "marketKey": "gmK6-zern-tL35",
                    "marketType": "POINT_SPREAD",
                    "marketSegment": "FULL_MATCH",
                    "eventKey": "jaUK-zern-hbU5",
                    "eventSport": "BASEBALL",
                    "eventName": "KT Wiz @ Kiwoom Heroes",
                    "eventStartTime": "2025-04-18T09:30:00.000Z",
                    "eventHomeParticipantKey": "ZNfF-xfxt-ivqd",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Kiwoom Heroes",
                            "key": "ZNfF-xfxt-ivqd",
                            "shortName": "KIW",
                            "slug": "kiwoom-heroes",
                            "sport": "BASEBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "KT Wiz",
                            "key": "iBbb-xfxt-IQxZ",
                            "shortName": "KT",
                            "slug": "kt-wiz",
                            "sport": "BASEBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 KBO League",
                    "competitionInstanceKey": "HzgU-zcrx-0Yjr",
                    "competitionName": "KBO League",
                    "competitionShortName": "KBO",
                    "competitionKey": "lyFJ-xfxt-Oy40"
                }
            },
            {
                "type": "MIDDLE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": -1.5,
                        "payout": 1.740741,
                        "source": "DRAFT_KINGS",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "gmK6-zern-tL35",
                        "participantKey": "iBbb-xfxt-IQxZ",
                        "time": "2025-04-18T02:29:00.272Z"
                    },
                    {
                        "modifier": 2.5,
                        "payout": 1.72,
                        "source": "FAN_DUEL",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "gmK6-zern-tL35",
                        "participantKey": "ZNfF-xfxt-ivqd",
                        "time": "2025-04-18T02:29:00.287Z"
                    }
                ],
                "context": {
                    "marketKey": "gmK6-zern-tL35",
                    "marketType": "POINT_SPREAD",
                    "marketSegment": "FULL_MATCH",
                    "eventKey": "jaUK-zern-hbU5",
                    "eventSport": "BASEBALL",
                    "eventName": "KT Wiz @ Kiwoom Heroes",
                    "eventStartTime": "2025-04-18T09:30:00.000Z",
                    "eventHomeParticipantKey": "ZNfF-xfxt-ivqd",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Kiwoom Heroes",
                            "key": "ZNfF-xfxt-ivqd",
                            "shortName": "KIW",
                            "slug": "kiwoom-heroes",
                            "sport": "BASEBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "KT Wiz",
                            "key": "iBbb-xfxt-IQxZ",
                            "shortName": "KT",
                            "slug": "kt-wiz",
                            "sport": "BASEBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 KBO League",
                    "competitionInstanceKey": "HzgU-zcrx-0Yjr",
                    "competitionName": "KBO League",
                    "competitionShortName": "KBO",
                    "competitionKey": "lyFJ-xfxt-Oy40"
                }
            },
            {
                "type": "MIDDLE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": -1.5,
                        "payout": 1.740741,
                        "source": "DRAFT_KINGS",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "gmK6-zern-tL35",
                        "participantKey": "iBbb-xfxt-IQxZ",
                        "time": "2025-04-18T02:29:00.272Z"
                    },
                    {
                        "modifier": 2.5,
                        "payout": 1.74,
                        "source": "FANATICS",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "gmK6-zern-tL35",
                        "participantKey": "ZNfF-xfxt-ivqd",
                        "time": "2025-04-18T02:29:00.287Z"
                    }
                ],
                "context": {
                    "marketKey": "gmK6-zern-tL35",
                    "marketType": "POINT_SPREAD",
                    "marketSegment": "FULL_MATCH",
                    "eventKey": "jaUK-zern-hbU5",
                    "eventSport": "BASEBALL",
                    "eventName": "KT Wiz @ Kiwoom Heroes",
                    "eventStartTime": "2025-04-18T09:30:00.000Z",
                    "eventHomeParticipantKey": "ZNfF-xfxt-ivqd",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Kiwoom Heroes",
                            "key": "ZNfF-xfxt-ivqd",
                            "shortName": "KIW",
                            "slug": "kiwoom-heroes",
                            "sport": "BASEBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "KT Wiz",
                            "key": "iBbb-xfxt-IQxZ",
                            "shortName": "KT",
                            "slug": "kt-wiz",
                            "sport": "BASEBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 KBO League",
                    "competitionInstanceKey": "HzgU-zcrx-0Yjr",
                    "competitionName": "KBO League",
                    "competitionShortName": "KBO",
                    "competitionKey": "lyFJ-xfxt-Oy40"
                }
            },
            {
                "type": "MIDDLE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 14.5,
                        "payout": 1.88,
                        "source": "BET_PARX",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "iCBv-zeie-kD7l",
                        "participantKey": "LQ53-xbdu-wiMk",
                        "time": "2025-04-18T02:29:00.124Z"
                    },
                    {
                        "modifier": -13.5,
                        "payout": 1.869565,
                        "source": "DRAFT_KINGS",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "iCBv-zeie-kD7l",
                        "participantKey": "jank-xbdu-GLYH",
                        "time": "2025-04-18T02:29:00.271Z"
                    }
                ],
                "context": {
                    "marketKey": "iCBv-zeie-kD7l",
                    "marketType": "POINT_SPREAD",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "6E1m-zeie-Ogqk",
                    "eventSport": "AUSTRALIAN_RULES_FOOTBALL",
                    "eventName": "Port Adelaide @ Sydney Swans",
                    "eventStartTime": "2025-04-20T05:20:00.000Z",
                    "eventHomeParticipantKey": "jank-xbdu-GLYH",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Port Adelaide",
                            "key": "LQ53-xbdu-wiMk",
                            "shortName": "PA",
                            "slug": "port-adelaide",
                            "sport": "AUSTRALIAN_RULES_FOOTBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Sydney Swans",
                            "key": "jank-xbdu-GLYH",
                            "shortName": "SYD",
                            "slug": "sydney-swans",
                            "sport": "AUSTRALIAN_RULES_FOOTBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 Australian Football League",
                    "competitionInstanceKey": "6dBj-ykzc-cMtp",
                    "competitionName": "Australian Football League",
                    "competitionShortName": "AFL",
                    "competitionKey": "jcKL-xbdu-POdB"
                }
            },
            {
                "type": "MIDDLE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 14.5,
                        "payout": 1.88,
                        "source": "BET_RIVERS",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "iCBv-zeie-kD7l",
                        "participantKey": "LQ53-xbdu-wiMk",
                        "time": "2025-04-18T02:29:00.067Z"
                    },
                    {
                        "modifier": -13.5,
                        "payout": 1.869565,
                        "source": "DRAFT_KINGS",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "iCBv-zeie-kD7l",
                        "participantKey": "jank-xbdu-GLYH",
                        "time": "2025-04-18T02:29:00.271Z"
                    }
                ],
                "context": {
                    "marketKey": "iCBv-zeie-kD7l",
                    "marketType": "POINT_SPREAD",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "6E1m-zeie-Ogqk",
                    "eventSport": "AUSTRALIAN_RULES_FOOTBALL",
                    "eventName": "Port Adelaide @ Sydney Swans",
                    "eventStartTime": "2025-04-20T05:20:00.000Z",
                    "eventHomeParticipantKey": "jank-xbdu-GLYH",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Port Adelaide",
                            "key": "LQ53-xbdu-wiMk",
                            "shortName": "PA",
                            "slug": "port-adelaide",
                            "sport": "AUSTRALIAN_RULES_FOOTBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Sydney Swans",
                            "key": "jank-xbdu-GLYH",
                            "shortName": "SYD",
                            "slug": "sydney-swans",
                            "sport": "AUSTRALIAN_RULES_FOOTBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 Australian Football League",
                    "competitionInstanceKey": "6dBj-ykzc-cMtp",
                    "competitionName": "Australian Football League",
                    "competitionShortName": "AFL",
                    "competitionKey": "jcKL-xbdu-POdB"
                }
            },
            {
                "type": "MIDDLE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": -13.5,
                        "payout": 1.869565,
                        "source": "DRAFT_KINGS",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "iCBv-zeie-kD7l",
                        "participantKey": "jank-xbdu-GLYH",
                        "time": "2025-04-18T02:29:00.271Z"
                    },
                    {
                        "modifier": 14.5,
                        "payout": 1.87,
                        "source": "ESPN_BET",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "iCBv-zeie-kD7l",
                        "participantKey": "LQ53-xbdu-wiMk",
                        "time": "2025-04-18T02:29:00.281Z"
                    }
                ],
                "context": {
                    "marketKey": "iCBv-zeie-kD7l",
                    "marketType": "POINT_SPREAD",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "6E1m-zeie-Ogqk",
                    "eventSport": "AUSTRALIAN_RULES_FOOTBALL",
                    "eventName": "Port Adelaide @ Sydney Swans",
                    "eventStartTime": "2025-04-20T05:20:00.000Z",
                    "eventHomeParticipantKey": "jank-xbdu-GLYH",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Port Adelaide",
                            "key": "LQ53-xbdu-wiMk",
                            "shortName": "PA",
                            "slug": "port-adelaide",
                            "sport": "AUSTRALIAN_RULES_FOOTBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Sydney Swans",
                            "key": "jank-xbdu-GLYH",
                            "shortName": "SYD",
                            "slug": "sydney-swans",
                            "sport": "AUSTRALIAN_RULES_FOOTBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 Australian Football League",
                    "competitionInstanceKey": "6dBj-ykzc-cMtp",
                    "competitionName": "Australian Football League",
                    "competitionShortName": "AFL",
                    "competitionKey": "jcKL-xbdu-POdB"
                }
            },
            {
                "type": "MIDDLE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 3.5,
                        "payout": 1.5,
                        "source": "BET_PARX",
                        "type": "UNDER",
                        "live": false,
                        "marketKey": "ixUE-zegt-79Vk",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.214Z"
                    },
                    {
                        "modifier": 2.5,
                        "payout": 1.55,
                        "source": "BET_RIVERS",
                        "type": "OVER",
                        "live": false,
                        "marketKey": "ixUE-zegt-79Vk",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.114Z"
                    }
                ],
                "context": {
                    "marketKey": "ixUE-zegt-79Vk",
                    "marketType": "POINT_TOTAL",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "cqC4-zegt-ksao",
                    "eventSport": "SOCCER",
                    "eventName": "VfL Bochum @ Werder Bremen",
                    "eventStartTime": "2025-04-19T13:30:00.000Z",
                    "eventHomeParticipantKey": "Orx7-wlct-4IHO",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Werder Bremen",
                            "key": "Orx7-wlct-4IHO",
                            "shortName": "SVW",
                            "slug": "werder-bremen",
                            "sport": "SOCCER"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "VfL Bochum",
                            "key": "SDpw-wlct-zlis",
                            "shortName": "BOC",
                            "slug": "vfl-bochum",
                            "sport": "SOCCER"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 German Bundesliga",
                    "competitionInstanceKey": "AQK0-yiqv-XeTX",
                    "competitionName": "German Bundesliga",
                    "competitionShortName": "DFL",
                    "competitionKey": "deEJ-wlct-ob91"
                }
            },
            {
                "type": "MIDDLE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 219.5,
                        "payout": 1.909091,
                        "source": "BOVADA",
                        "type": "UNDER",
                        "live": false,
                        "marketKey": "jJSQ-zerb-08DY",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.254Z"
                    },
                    {
                        "modifier": 218.5,
                        "payout": 1.87,
                        "source": "ESPN_BET",
                        "type": "OVER",
                        "live": false,
                        "marketKey": "jJSQ-zerb-08DY",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.282Z"
                    }
                ],
                "context": {
                    "marketKey": "jJSQ-zerb-08DY",
                    "marketType": "POINT_TOTAL",
                    "marketSegment": "FULL_MATCH",
                    "eventKey": "BsiB-zerb-sFT3",
                    "eventSport": "BASKETBALL",
                    "eventName": "Miami Heat @ Atlanta Hawks",
                    "eventStartTime": "2025-04-18T23:10:00.000Z",
                    "eventHomeParticipantKey": "0Ch7-wddv-OrXs",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Atlanta Hawks",
                            "key": "0Ch7-wddv-OrXs",
                            "shortName": "ATL",
                            "slug": "atlanta-hawks",
                            "sport": "BASKETBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Miami Heat",
                            "key": "biYO-wddv-j7OK",
                            "shortName": "MIA",
                            "slug": "miami-heat",
                            "sport": "BASKETBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 National Basketball Association",
                    "competitionInstanceKey": "g4sK-yinv-Lczx",
                    "competitionName": "National Basketball Association",
                    "competitionShortName": "NBA",
                    "competitionKey": "d791-wddv-30fU"
                }
            },
            {
                "type": "MIDDLE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 219.5,
                        "payout": 1.909091,
                        "source": "BOVADA",
                        "type": "UNDER",
                        "live": false,
                        "marketKey": "jJSQ-zerb-08DY",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.254Z"
                    },
                    {
                        "modifier": 218.5,
                        "payout": 1.89,
                        "source": "FAN_DUEL",
                        "type": "OVER",
                        "live": false,
                        "marketKey": "jJSQ-zerb-08DY",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.287Z"
                    }
                ],
                "context": {
                    "marketKey": "jJSQ-zerb-08DY",
                    "marketType": "POINT_TOTAL",
                    "marketSegment": "FULL_MATCH",
                    "eventKey": "BsiB-zerb-sFT3",
                    "eventSport": "BASKETBALL",
                    "eventName": "Miami Heat @ Atlanta Hawks",
                    "eventStartTime": "2025-04-18T23:10:00.000Z",
                    "eventHomeParticipantKey": "0Ch7-wddv-OrXs",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Atlanta Hawks",
                            "key": "0Ch7-wddv-OrXs",
                            "shortName": "ATL",
                            "slug": "atlanta-hawks",
                            "sport": "BASKETBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Miami Heat",
                            "key": "biYO-wddv-j7OK",
                            "shortName": "MIA",
                            "slug": "miami-heat",
                            "sport": "BASKETBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 National Basketball Association",
                    "competitionInstanceKey": "g4sK-yinv-Lczx",
                    "competitionName": "National Basketball Association",
                    "competitionShortName": "NBA",
                    "competitionKey": "d791-wddv-30fU"
                }
            },
            {
                "type": "MIDDLE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 219.5,
                        "payout": 1.909091,
                        "source": "DRAFT_KINGS",
                        "type": "UNDER",
                        "live": false,
                        "marketKey": "jJSQ-zerb-08DY",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.274Z"
                    },
                    {
                        "modifier": 218.5,
                        "payout": 1.87,
                        "source": "ESPN_BET",
                        "type": "OVER",
                        "live": false,
                        "marketKey": "jJSQ-zerb-08DY",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.282Z"
                    }
                ],
                "context": {
                    "marketKey": "jJSQ-zerb-08DY",
                    "marketType": "POINT_TOTAL",
                    "marketSegment": "FULL_MATCH",
                    "eventKey": "BsiB-zerb-sFT3",
                    "eventSport": "BASKETBALL",
                    "eventName": "Miami Heat @ Atlanta Hawks",
                    "eventStartTime": "2025-04-18T23:10:00.000Z",
                    "eventHomeParticipantKey": "0Ch7-wddv-OrXs",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Atlanta Hawks",
                            "key": "0Ch7-wddv-OrXs",
                            "shortName": "ATL",
                            "slug": "atlanta-hawks",
                            "sport": "BASKETBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Miami Heat",
                            "key": "biYO-wddv-j7OK",
                            "shortName": "MIA",
                            "slug": "miami-heat",
                            "sport": "BASKETBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 National Basketball Association",
                    "competitionInstanceKey": "g4sK-yinv-Lczx",
                    "competitionName": "National Basketball Association",
                    "competitionShortName": "NBA",
                    "competitionKey": "d791-wddv-30fU"
                }
            },
            {
                "type": "MIDDLE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 219.5,
                        "payout": 1.909091,
                        "source": "DRAFT_KINGS",
                        "type": "UNDER",
                        "live": false,
                        "marketKey": "jJSQ-zerb-08DY",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.274Z"
                    },
                    {
                        "modifier": 218.5,
                        "payout": 1.89,
                        "source": "FAN_DUEL",
                        "type": "OVER",
                        "live": false,
                        "marketKey": "jJSQ-zerb-08DY",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.287Z"
                    }
                ],
                "context": {
                    "marketKey": "jJSQ-zerb-08DY",
                    "marketType": "POINT_TOTAL",
                    "marketSegment": "FULL_MATCH",
                    "eventKey": "BsiB-zerb-sFT3",
                    "eventSport": "BASKETBALL",
                    "eventName": "Miami Heat @ Atlanta Hawks",
                    "eventStartTime": "2025-04-18T23:10:00.000Z",
                    "eventHomeParticipantKey": "0Ch7-wddv-OrXs",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Atlanta Hawks",
                            "key": "0Ch7-wddv-OrXs",
                            "shortName": "ATL",
                            "slug": "atlanta-hawks",
                            "sport": "BASKETBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Miami Heat",
                            "key": "biYO-wddv-j7OK",
                            "shortName": "MIA",
                            "slug": "miami-heat",
                            "sport": "BASKETBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 National Basketball Association",
                    "competitionInstanceKey": "g4sK-yinv-Lczx",
                    "competitionName": "National Basketball Association",
                    "competitionShortName": "NBA",
                    "competitionKey": "d791-wddv-30fU"
                }
            },
            {
                "type": "MIDDLE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 218.5,
                        "payout": 1.87,
                        "source": "ESPN_BET",
                        "type": "OVER",
                        "live": false,
                        "marketKey": "jJSQ-zerb-08DY",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.282Z"
                    },
                    {
                        "modifier": 219.5,
                        "payout": 1.91,
                        "source": "FANATICS",
                        "type": "UNDER",
                        "live": false,
                        "marketKey": "jJSQ-zerb-08DY",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.287Z"
                    }
                ],
                "context": {
                    "marketKey": "jJSQ-zerb-08DY",
                    "marketType": "POINT_TOTAL",
                    "marketSegment": "FULL_MATCH",
                    "eventKey": "BsiB-zerb-sFT3",
                    "eventSport": "BASKETBALL",
                    "eventName": "Miami Heat @ Atlanta Hawks",
                    "eventStartTime": "2025-04-18T23:10:00.000Z",
                    "eventHomeParticipantKey": "0Ch7-wddv-OrXs",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Atlanta Hawks",
                            "key": "0Ch7-wddv-OrXs",
                            "shortName": "ATL",
                            "slug": "atlanta-hawks",
                            "sport": "BASKETBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Miami Heat",
                            "key": "biYO-wddv-j7OK",
                            "shortName": "MIA",
                            "slug": "miami-heat",
                            "sport": "BASKETBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 National Basketball Association",
                    "competitionInstanceKey": "g4sK-yinv-Lczx",
                    "competitionName": "National Basketball Association",
                    "competitionShortName": "NBA",
                    "competitionKey": "d791-wddv-30fU"
                }
            },
            {
                "type": "MIDDLE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 218.5,
                        "payout": 1.89,
                        "source": "FAN_DUEL",
                        "type": "OVER",
                        "live": false,
                        "marketKey": "jJSQ-zerb-08DY",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.287Z"
                    },
                    {
                        "modifier": 219.5,
                        "payout": 1.91,
                        "source": "FANATICS",
                        "type": "UNDER",
                        "live": false,
                        "marketKey": "jJSQ-zerb-08DY",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.287Z"
                    }
                ],
                "context": {
                    "marketKey": "jJSQ-zerb-08DY",
                    "marketType": "POINT_TOTAL",
                    "marketSegment": "FULL_MATCH",
                    "eventKey": "BsiB-zerb-sFT3",
                    "eventSport": "BASKETBALL",
                    "eventName": "Miami Heat @ Atlanta Hawks",
                    "eventStartTime": "2025-04-18T23:10:00.000Z",
                    "eventHomeParticipantKey": "0Ch7-wddv-OrXs",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Atlanta Hawks",
                            "key": "0Ch7-wddv-OrXs",
                            "shortName": "ATL",
                            "slug": "atlanta-hawks",
                            "sport": "BASKETBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Miami Heat",
                            "key": "biYO-wddv-j7OK",
                            "shortName": "MIA",
                            "slug": "miami-heat",
                            "sport": "BASKETBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 National Basketball Association",
                    "competitionInstanceKey": "g4sK-yinv-Lczx",
                    "competitionName": "National Basketball Association",
                    "competitionShortName": "NBA",
                    "competitionKey": "d791-wddv-30fU"
                }
            },
            {
                "type": "MIDDLE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 167.5,
                        "payout": 1.9,
                        "source": "BET_PARX",
                        "type": "OVER",
                        "live": false,
                        "marketKey": "laAF-zeoh-HroC",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.124Z"
                    },
                    {
                        "modifier": 168.5,
                        "payout": 1.909091,
                        "source": "DRAFT_KINGS",
                        "type": "UNDER",
                        "live": false,
                        "marketKey": "laAF-zeoh-HroC",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.271Z"
                    }
                ],
                "context": {
                    "marketKey": "laAF-zeoh-HroC",
                    "marketType": "POINT_TOTAL",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "bznm-zeie-azwa",
                    "eventSport": "AUSTRALIAN_RULES_FOOTBALL",
                    "eventName": "Fremantle @ Melbourne",
                    "eventStartTime": "2025-04-19T03:20:00.000Z",
                    "eventHomeParticipantKey": "9WXU-xbdu-LejR",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Fremantle",
                            "key": "JKJb-xbdu-QVFM",
                            "shortName": "FRE",
                            "slug": "fremantle",
                            "sport": "AUSTRALIAN_RULES_FOOTBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Melbourne",
                            "key": "9WXU-xbdu-LejR",
                            "shortName": "MEL",
                            "slug": "melbourne",
                            "sport": "AUSTRALIAN_RULES_FOOTBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 Australian Football League",
                    "competitionInstanceKey": "6dBj-ykzc-cMtp",
                    "competitionName": "Australian Football League",
                    "competitionShortName": "AFL",
                    "competitionKey": "jcKL-xbdu-POdB"
                }
            },
            {
                "type": "MIDDLE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 167.5,
                        "payout": 1.9,
                        "source": "BET_RIVERS",
                        "type": "OVER",
                        "live": false,
                        "marketKey": "laAF-zeoh-HroC",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.067Z"
                    },
                    {
                        "modifier": 168.5,
                        "payout": 1.909091,
                        "source": "DRAFT_KINGS",
                        "type": "UNDER",
                        "live": false,
                        "marketKey": "laAF-zeoh-HroC",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.271Z"
                    }
                ],
                "context": {
                    "marketKey": "laAF-zeoh-HroC",
                    "marketType": "POINT_TOTAL",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "bznm-zeie-azwa",
                    "eventSport": "AUSTRALIAN_RULES_FOOTBALL",
                    "eventName": "Fremantle @ Melbourne",
                    "eventStartTime": "2025-04-19T03:20:00.000Z",
                    "eventHomeParticipantKey": "9WXU-xbdu-LejR",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Fremantle",
                            "key": "JKJb-xbdu-QVFM",
                            "shortName": "FRE",
                            "slug": "fremantle",
                            "sport": "AUSTRALIAN_RULES_FOOTBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Melbourne",
                            "key": "9WXU-xbdu-LejR",
                            "shortName": "MEL",
                            "slug": "melbourne",
                            "sport": "AUSTRALIAN_RULES_FOOTBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 Australian Football League",
                    "competitionInstanceKey": "6dBj-ykzc-cMtp",
                    "competitionName": "Australian Football League",
                    "competitionShortName": "AFL",
                    "competitionKey": "jcKL-xbdu-POdB"
                }
            },
            {
                "type": "MIDDLE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 168.5,
                        "payout": 1.909091,
                        "source": "DRAFT_KINGS",
                        "type": "UNDER",
                        "live": false,
                        "marketKey": "laAF-zeoh-HroC",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.271Z"
                    },
                    {
                        "modifier": 167.5,
                        "payout": 1.87,
                        "source": "ESPN_BET",
                        "type": "OVER",
                        "live": false,
                        "marketKey": "laAF-zeoh-HroC",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.281Z"
                    }
                ],
                "context": {
                    "marketKey": "laAF-zeoh-HroC",
                    "marketType": "POINT_TOTAL",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "bznm-zeie-azwa",
                    "eventSport": "AUSTRALIAN_RULES_FOOTBALL",
                    "eventName": "Fremantle @ Melbourne",
                    "eventStartTime": "2025-04-19T03:20:00.000Z",
                    "eventHomeParticipantKey": "9WXU-xbdu-LejR",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Fremantle",
                            "key": "JKJb-xbdu-QVFM",
                            "shortName": "FRE",
                            "slug": "fremantle",
                            "sport": "AUSTRALIAN_RULES_FOOTBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Melbourne",
                            "key": "9WXU-xbdu-LejR",
                            "shortName": "MEL",
                            "slug": "melbourne",
                            "sport": "AUSTRALIAN_RULES_FOOTBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 Australian Football League",
                    "competitionInstanceKey": "6dBj-ykzc-cMtp",
                    "competitionName": "Australian Football League",
                    "competitionShortName": "AFL",
                    "competitionKey": "jcKL-xbdu-POdB"
                }
            },
            {
                "type": "MIDDLE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 38.5,
                        "payout": 1.89,
                        "source": "BET_PARX",
                        "type": "UNDER",
                        "live": false,
                        "marketKey": "mGB0-zenw-VQDQ",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.246Z"
                    },
                    {
                        "modifier": 37.5,
                        "payout": 1.87,
                        "source": "ESPN_BET",
                        "type": "OVER",
                        "live": false,
                        "marketKey": "mGB0-zenw-VQDQ",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.285Z"
                    }
                ],
                "context": {
                    "marketKey": "mGB0-zenw-VQDQ",
                    "marketType": "POINT_TOTAL",
                    "marketSegment": "FULL_MATCH",
                    "eventKey": "GrFN-zenw-z1Sh",
                    "eventSport": "AMERICAN_FOOTBALL",
                    "eventName": "San Antonio Brahmas @ DC Defenders",
                    "eventStartTime": "2025-04-20T21:00:00.000Z",
                    "eventHomeParticipantKey": "4OpV-xcrw-pbxh",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "DC Defenders",
                            "key": "4OpV-xcrw-pbxh",
                            "shortName": "DC",
                            "slug": "dc-defenders",
                            "sport": "AMERICAN_FOOTBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "San Antonio Brahmas",
                            "key": "AgrS-xcrw-Sk7F",
                            "shortName": "SA",
                            "slug": "san-antonio-brahmas",
                            "sport": "AMERICAN_FOOTBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 United Football League",
                    "competitionInstanceKey": "eABI-zdxt-zko1",
                    "competitionName": "United Football League",
                    "competitionShortName": "UFL",
                    "competitionKey": "sY0W-yinv-oOMP"
                }
            },
            {
                "type": "MIDDLE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 38.5,
                        "payout": 1.89,
                        "source": "BET_RIVERS",
                        "type": "UNDER",
                        "live": false,
                        "marketKey": "mGB0-zenw-VQDQ",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.120Z"
                    },
                    {
                        "modifier": 37.5,
                        "payout": 1.87,
                        "source": "ESPN_BET",
                        "type": "OVER",
                        "live": false,
                        "marketKey": "mGB0-zenw-VQDQ",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.285Z"
                    }
                ],
                "context": {
                    "marketKey": "mGB0-zenw-VQDQ",
                    "marketType": "POINT_TOTAL",
                    "marketSegment": "FULL_MATCH",
                    "eventKey": "GrFN-zenw-z1Sh",
                    "eventSport": "AMERICAN_FOOTBALL",
                    "eventName": "San Antonio Brahmas @ DC Defenders",
                    "eventStartTime": "2025-04-20T21:00:00.000Z",
                    "eventHomeParticipantKey": "4OpV-xcrw-pbxh",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "DC Defenders",
                            "key": "4OpV-xcrw-pbxh",
                            "shortName": "DC",
                            "slug": "dc-defenders",
                            "sport": "AMERICAN_FOOTBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "San Antonio Brahmas",
                            "key": "AgrS-xcrw-Sk7F",
                            "shortName": "SA",
                            "slug": "san-antonio-brahmas",
                            "sport": "AMERICAN_FOOTBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 United Football League",
                    "competitionInstanceKey": "eABI-zdxt-zko1",
                    "competitionName": "United Football League",
                    "competitionShortName": "UFL",
                    "competitionKey": "sY0W-yinv-oOMP"
                }
            },
            {
                "type": "MIDDLE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 38.5,
                        "payout": 1.869565,
                        "source": "DRAFT_KINGS",
                        "type": "UNDER",
                        "live": false,
                        "marketKey": "mGB0-zenw-VQDQ",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.280Z"
                    },
                    {
                        "modifier": 37.5,
                        "payout": 1.87,
                        "source": "ESPN_BET",
                        "type": "OVER",
                        "live": false,
                        "marketKey": "mGB0-zenw-VQDQ",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.285Z"
                    }
                ],
                "context": {
                    "marketKey": "mGB0-zenw-VQDQ",
                    "marketType": "POINT_TOTAL",
                    "marketSegment": "FULL_MATCH",
                    "eventKey": "GrFN-zenw-z1Sh",
                    "eventSport": "AMERICAN_FOOTBALL",
                    "eventName": "San Antonio Brahmas @ DC Defenders",
                    "eventStartTime": "2025-04-20T21:00:00.000Z",
                    "eventHomeParticipantKey": "4OpV-xcrw-pbxh",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "DC Defenders",
                            "key": "4OpV-xcrw-pbxh",
                            "shortName": "DC",
                            "slug": "dc-defenders",
                            "sport": "AMERICAN_FOOTBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "San Antonio Brahmas",
                            "key": "AgrS-xcrw-Sk7F",
                            "shortName": "SA",
                            "slug": "san-antonio-brahmas",
                            "sport": "AMERICAN_FOOTBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 United Football League",
                    "competitionInstanceKey": "eABI-zdxt-zko1",
                    "competitionName": "United Football League",
                    "competitionShortName": "UFL",
                    "competitionKey": "sY0W-yinv-oOMP"
                }
            },
            {
                "type": "MIDDLE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 37.5,
                        "payout": 1.87,
                        "source": "ESPN_BET",
                        "type": "OVER",
                        "live": false,
                        "marketKey": "mGB0-zenw-VQDQ",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.285Z"
                    },
                    {
                        "modifier": 38.5,
                        "payout": 1.91,
                        "source": "FAN_DUEL",
                        "type": "UNDER",
                        "live": false,
                        "marketKey": "mGB0-zenw-VQDQ",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.289Z"
                    }
                ],
                "context": {
                    "marketKey": "mGB0-zenw-VQDQ",
                    "marketType": "POINT_TOTAL",
                    "marketSegment": "FULL_MATCH",
                    "eventKey": "GrFN-zenw-z1Sh",
                    "eventSport": "AMERICAN_FOOTBALL",
                    "eventName": "San Antonio Brahmas @ DC Defenders",
                    "eventStartTime": "2025-04-20T21:00:00.000Z",
                    "eventHomeParticipantKey": "4OpV-xcrw-pbxh",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "DC Defenders",
                            "key": "4OpV-xcrw-pbxh",
                            "shortName": "DC",
                            "slug": "dc-defenders",
                            "sport": "AMERICAN_FOOTBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "San Antonio Brahmas",
                            "key": "AgrS-xcrw-Sk7F",
                            "shortName": "SA",
                            "slug": "san-antonio-brahmas",
                            "sport": "AMERICAN_FOOTBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 United Football League",
                    "competitionInstanceKey": "eABI-zdxt-zko1",
                    "competitionName": "United Football League",
                    "competitionShortName": "UFL",
                    "competitionKey": "sY0W-yinv-oOMP"
                }
            },
            {
                "type": "MIDDLE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 172.5,
                        "payout": 1.91,
                        "source": "BET_PARX",
                        "type": "UNDER",
                        "live": false,
                        "marketKey": "uI7M-zeqh-hSiw",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.169Z"
                    },
                    {
                        "modifier": 171.5,
                        "payout": 1.87,
                        "source": "ESPN_BET",
                        "type": "OVER",
                        "live": false,
                        "marketKey": "uI7M-zeqh-hSiw",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.283Z"
                    }
                ],
                "context": {
                    "marketKey": "uI7M-zeqh-hSiw",
                    "marketType": "POINT_TOTAL",
                    "marketSegment": "FULL_MATCH",
                    "eventKey": "T4F4-zeqh-9QlI",
                    "eventSport": "BASKETBALL",
                    "eventName": "Barcelona @ AS Monaco",
                    "eventStartTime": "2025-04-23T17:00:00.000Z",
                    "eventHomeParticipantKey": "OKLO-ycbt-1Tw5",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "AS Monaco",
                            "key": "OKLO-ycbt-1Tw5",
                            "shortName": "MON",
                            "slug": "as-monaco",
                            "sport": "BASKETBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Barcelona",
                            "key": "yToB-ycbt-1aZ5",
                            "shortName": "BAR",
                            "slug": "barcelona",
                            "sport": "BASKETBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 EuroLeague",
                    "competitionInstanceKey": "m6Ct-yjxv-KemO",
                    "competitionName": "EuroLeague",
                    "competitionShortName": "EURO_BB",
                    "competitionKey": "kzMY-ycbt-Xaaw"
                }
            },
            {
                "type": "MIDDLE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 172.5,
                        "payout": 1.91,
                        "source": "BET_RIVERS",
                        "type": "UNDER",
                        "live": false,
                        "marketKey": "uI7M-zeqh-hSiw",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.073Z"
                    },
                    {
                        "modifier": 171.5,
                        "payout": 1.87,
                        "source": "ESPN_BET",
                        "type": "OVER",
                        "live": false,
                        "marketKey": "uI7M-zeqh-hSiw",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.283Z"
                    }
                ],
                "context": {
                    "marketKey": "uI7M-zeqh-hSiw",
                    "marketType": "POINT_TOTAL",
                    "marketSegment": "FULL_MATCH",
                    "eventKey": "T4F4-zeqh-9QlI",
                    "eventSport": "BASKETBALL",
                    "eventName": "Barcelona @ AS Monaco",
                    "eventStartTime": "2025-04-23T17:00:00.000Z",
                    "eventHomeParticipantKey": "OKLO-ycbt-1Tw5",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "AS Monaco",
                            "key": "OKLO-ycbt-1Tw5",
                            "shortName": "MON",
                            "slug": "as-monaco",
                            "sport": "BASKETBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Barcelona",
                            "key": "yToB-ycbt-1aZ5",
                            "shortName": "BAR",
                            "slug": "barcelona",
                            "sport": "BASKETBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 EuroLeague",
                    "competitionInstanceKey": "m6Ct-yjxv-KemO",
                    "competitionName": "EuroLeague",
                    "competitionShortName": "EURO_BB",
                    "competitionKey": "kzMY-ycbt-Xaaw"
                }
            },
            {
                "type": "MIDDLE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": -4.5,
                        "payout": 1.84,
                        "source": "BET_PARX",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "xFkV-zeqj-iStV",
                        "participantKey": "nQIi-ycbt-9ekB",
                        "time": "2025-04-18T02:29:00.171Z"
                    },
                    {
                        "modifier": 5.5,
                        "payout": 1.909091,
                        "source": "BOVADA",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "xFkV-zeqj-iStV",
                        "participantKey": "wdfl-ycbt-OFh5",
                        "time": "2025-04-18T02:29:00.251Z"
                    }
                ],
                "context": {
                    "marketKey": "xFkV-zeqj-iStV",
                    "marketType": "POINT_SPREAD",
                    "marketSegment": "HALF_1",
                    "eventKey": "y62z-zeqg-CRo8",
                    "eventSport": "BASKETBALL",
                    "eventName": "Bayern Munich @ Real Madrid",
                    "eventStartTime": "2025-04-18T18:45:00.000Z",
                    "eventHomeParticipantKey": "nQIi-ycbt-9ekB",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Bayern Munich",
                            "key": "wdfl-ycbt-OFh5",
                            "shortName": "BAY",
                            "slug": "bayern-munich",
                            "sport": "BASKETBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Real Madrid",
                            "key": "nQIi-ycbt-9ekB",
                            "shortName": "MAD",
                            "slug": "real-madrid",
                            "sport": "BASKETBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 EuroLeague",
                    "competitionInstanceKey": "m6Ct-yjxv-KemO",
                    "competitionName": "EuroLeague",
                    "competitionShortName": "EURO_BB",
                    "competitionKey": "kzMY-ycbt-Xaaw"
                }
            },
            {
                "type": "MIDDLE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": -1.5,
                        "payout": 1.66,
                        "source": "BET_PARX",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "zpHd-zern-J0v0",
                        "participantKey": "ZW0E-xfxt-mKQ0",
                        "time": "2025-04-18T02:29:00.151Z"
                    },
                    {
                        "modifier": 2.5,
                        "payout": 1.83,
                        "source": "ESPN_BET",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "zpHd-zern-J0v0",
                        "participantKey": "PWCp-xfxt-xemW",
                        "time": "2025-04-18T02:29:00.282Z"
                    }
                ],
                "context": {
                    "marketKey": "zpHd-zern-J0v0",
                    "marketType": "POINT_SPREAD",
                    "marketSegment": "FULL_MATCH",
                    "eventKey": "2ZXI-zern-EUqL",
                    "eventSport": "BASEBALL",
                    "eventName": "LG Twins @ SSG Landers",
                    "eventStartTime": "2025-04-18T09:30:00.000Z",
                    "eventHomeParticipantKey": "PWCp-xfxt-xemW",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "LG Twins",
                            "key": "ZW0E-xfxt-mKQ0",
                            "shortName": "LG",
                            "slug": "lg-twins",
                            "sport": "BASEBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "SSG Landers",
                            "key": "PWCp-xfxt-xemW",
                            "shortName": "SSG",
                            "slug": "ssg-landers",
                            "sport": "BASEBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 KBO League",
                    "competitionInstanceKey": "HzgU-zcrx-0Yjr",
                    "competitionName": "KBO League",
                    "competitionShortName": "KBO",
                    "competitionKey": "lyFJ-xfxt-Oy40"
                }
            },
            {
                "type": "MIDDLE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": -1.5,
                        "payout": 1.66,
                        "source": "BET_PARX",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "zpHd-zern-J0v0",
                        "participantKey": "ZW0E-xfxt-mKQ0",
                        "time": "2025-04-18T02:29:00.151Z"
                    },
                    {
                        "modifier": 2.5,
                        "payout": 1.85,
                        "source": "FAN_DUEL",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "zpHd-zern-J0v0",
                        "participantKey": "PWCp-xfxt-xemW",
                        "time": "2025-04-18T02:29:00.287Z"
                    }
                ],
                "context": {
                    "marketKey": "zpHd-zern-J0v0",
                    "marketType": "POINT_SPREAD",
                    "marketSegment": "FULL_MATCH",
                    "eventKey": "2ZXI-zern-EUqL",
                    "eventSport": "BASEBALL",
                    "eventName": "LG Twins @ SSG Landers",
                    "eventStartTime": "2025-04-18T09:30:00.000Z",
                    "eventHomeParticipantKey": "PWCp-xfxt-xemW",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "LG Twins",
                            "key": "ZW0E-xfxt-mKQ0",
                            "shortName": "LG",
                            "slug": "lg-twins",
                            "sport": "BASEBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "SSG Landers",
                            "key": "PWCp-xfxt-xemW",
                            "shortName": "SSG",
                            "slug": "ssg-landers",
                            "sport": "BASEBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 KBO League",
                    "competitionInstanceKey": "HzgU-zcrx-0Yjr",
                    "competitionName": "KBO League",
                    "competitionShortName": "KBO",
                    "competitionKey": "lyFJ-xfxt-Oy40"
                }
            },
            {
                "type": "MIDDLE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": -1.5,
                        "payout": 1.66,
                        "source": "BET_PARX",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "zpHd-zern-J0v0",
                        "participantKey": "ZW0E-xfxt-mKQ0",
                        "time": "2025-04-18T02:29:00.151Z"
                    },
                    {
                        "modifier": 2.5,
                        "payout": 1.83,
                        "source": "FANATICS",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "zpHd-zern-J0v0",
                        "participantKey": "PWCp-xfxt-xemW",
                        "time": "2025-04-18T02:29:00.287Z"
                    }
                ],
                "context": {
                    "marketKey": "zpHd-zern-J0v0",
                    "marketType": "POINT_SPREAD",
                    "marketSegment": "FULL_MATCH",
                    "eventKey": "2ZXI-zern-EUqL",
                    "eventSport": "BASEBALL",
                    "eventName": "LG Twins @ SSG Landers",
                    "eventStartTime": "2025-04-18T09:30:00.000Z",
                    "eventHomeParticipantKey": "PWCp-xfxt-xemW",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "LG Twins",
                            "key": "ZW0E-xfxt-mKQ0",
                            "shortName": "LG",
                            "slug": "lg-twins",
                            "sport": "BASEBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "SSG Landers",
                            "key": "PWCp-xfxt-xemW",
                            "shortName": "SSG",
                            "slug": "ssg-landers",
                            "sport": "BASEBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 KBO League",
                    "competitionInstanceKey": "HzgU-zcrx-0Yjr",
                    "competitionName": "KBO League",
                    "competitionShortName": "KBO",
                    "competitionKey": "lyFJ-xfxt-Oy40"
                }
            },
            {
                "type": "MIDDLE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": -1.5,
                        "payout": 1.66,
                        "source": "BET_RIVERS",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "zpHd-zern-J0v0",
                        "participantKey": "ZW0E-xfxt-mKQ0",
                        "time": "2025-04-18T02:29:00.077Z"
                    },
                    {
                        "modifier": 2.5,
                        "payout": 1.83,
                        "source": "ESPN_BET",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "zpHd-zern-J0v0",
                        "participantKey": "PWCp-xfxt-xemW",
                        "time": "2025-04-18T02:29:00.282Z"
                    }
                ],
                "context": {
                    "marketKey": "zpHd-zern-J0v0",
                    "marketType": "POINT_SPREAD",
                    "marketSegment": "FULL_MATCH",
                    "eventKey": "2ZXI-zern-EUqL",
                    "eventSport": "BASEBALL",
                    "eventName": "LG Twins @ SSG Landers",
                    "eventStartTime": "2025-04-18T09:30:00.000Z",
                    "eventHomeParticipantKey": "PWCp-xfxt-xemW",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "LG Twins",
                            "key": "ZW0E-xfxt-mKQ0",
                            "shortName": "LG",
                            "slug": "lg-twins",
                            "sport": "BASEBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "SSG Landers",
                            "key": "PWCp-xfxt-xemW",
                            "shortName": "SSG",
                            "slug": "ssg-landers",
                            "sport": "BASEBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 KBO League",
                    "competitionInstanceKey": "HzgU-zcrx-0Yjr",
                    "competitionName": "KBO League",
                    "competitionShortName": "KBO",
                    "competitionKey": "lyFJ-xfxt-Oy40"
                }
            },
            {
                "type": "MIDDLE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": -1.5,
                        "payout": 1.66,
                        "source": "BET_RIVERS",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "zpHd-zern-J0v0",
                        "participantKey": "ZW0E-xfxt-mKQ0",
                        "time": "2025-04-18T02:29:00.077Z"
                    },
                    {
                        "modifier": 2.5,
                        "payout": 1.85,
                        "source": "FAN_DUEL",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "zpHd-zern-J0v0",
                        "participantKey": "PWCp-xfxt-xemW",
                        "time": "2025-04-18T02:29:00.287Z"
                    }
                ],
                "context": {
                    "marketKey": "zpHd-zern-J0v0",
                    "marketType": "POINT_SPREAD",
                    "marketSegment": "FULL_MATCH",
                    "eventKey": "2ZXI-zern-EUqL",
                    "eventSport": "BASEBALL",
                    "eventName": "LG Twins @ SSG Landers",
                    "eventStartTime": "2025-04-18T09:30:00.000Z",
                    "eventHomeParticipantKey": "PWCp-xfxt-xemW",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "LG Twins",
                            "key": "ZW0E-xfxt-mKQ0",
                            "shortName": "LG",
                            "slug": "lg-twins",
                            "sport": "BASEBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "SSG Landers",
                            "key": "PWCp-xfxt-xemW",
                            "shortName": "SSG",
                            "slug": "ssg-landers",
                            "sport": "BASEBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 KBO League",
                    "competitionInstanceKey": "HzgU-zcrx-0Yjr",
                    "competitionName": "KBO League",
                    "competitionShortName": "KBO",
                    "competitionKey": "lyFJ-xfxt-Oy40"
                }
            },
            {
                "type": "MIDDLE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": -1.5,
                        "payout": 1.66,
                        "source": "BET_RIVERS",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "zpHd-zern-J0v0",
                        "participantKey": "ZW0E-xfxt-mKQ0",
                        "time": "2025-04-18T02:29:00.077Z"
                    },
                    {
                        "modifier": 2.5,
                        "payout": 1.83,
                        "source": "FANATICS",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "zpHd-zern-J0v0",
                        "participantKey": "PWCp-xfxt-xemW",
                        "time": "2025-04-18T02:29:00.287Z"
                    }
                ],
                "context": {
                    "marketKey": "zpHd-zern-J0v0",
                    "marketType": "POINT_SPREAD",
                    "marketSegment": "FULL_MATCH",
                    "eventKey": "2ZXI-zern-EUqL",
                    "eventSport": "BASEBALL",
                    "eventName": "LG Twins @ SSG Landers",
                    "eventStartTime": "2025-04-18T09:30:00.000Z",
                    "eventHomeParticipantKey": "PWCp-xfxt-xemW",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "LG Twins",
                            "key": "ZW0E-xfxt-mKQ0",
                            "shortName": "LG",
                            "slug": "lg-twins",
                            "sport": "BASEBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "SSG Landers",
                            "key": "PWCp-xfxt-xemW",
                            "shortName": "SSG",
                            "slug": "ssg-landers",
                            "sport": "BASEBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 KBO League",
                    "competitionInstanceKey": "HzgU-zcrx-0Yjr",
                    "competitionName": "KBO League",
                    "competitionShortName": "KBO",
                    "competitionKey": "lyFJ-xfxt-Oy40"
                }
            },
            {
                "type": "MIDDLE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": -1.5,
                        "payout": 1.540541,
                        "source": "BOVADA",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "zpHd-zern-J0v0",
                        "participantKey": "ZW0E-xfxt-mKQ0",
                        "time": "2025-04-18T02:29:00.253Z"
                    },
                    {
                        "modifier": 2.5,
                        "payout": 1.83,
                        "source": "ESPN_BET",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "zpHd-zern-J0v0",
                        "participantKey": "PWCp-xfxt-xemW",
                        "time": "2025-04-18T02:29:00.282Z"
                    }
                ],
                "context": {
                    "marketKey": "zpHd-zern-J0v0",
                    "marketType": "POINT_SPREAD",
                    "marketSegment": "FULL_MATCH",
                    "eventKey": "2ZXI-zern-EUqL",
                    "eventSport": "BASEBALL",
                    "eventName": "LG Twins @ SSG Landers",
                    "eventStartTime": "2025-04-18T09:30:00.000Z",
                    "eventHomeParticipantKey": "PWCp-xfxt-xemW",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "LG Twins",
                            "key": "ZW0E-xfxt-mKQ0",
                            "shortName": "LG",
                            "slug": "lg-twins",
                            "sport": "BASEBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "SSG Landers",
                            "key": "PWCp-xfxt-xemW",
                            "shortName": "SSG",
                            "slug": "ssg-landers",
                            "sport": "BASEBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 KBO League",
                    "competitionInstanceKey": "HzgU-zcrx-0Yjr",
                    "competitionName": "KBO League",
                    "competitionShortName": "KBO",
                    "competitionKey": "lyFJ-xfxt-Oy40"
                }
            },
            {
                "type": "MIDDLE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": -1.5,
                        "payout": 1.540541,
                        "source": "BOVADA",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "zpHd-zern-J0v0",
                        "participantKey": "ZW0E-xfxt-mKQ0",
                        "time": "2025-04-18T02:29:00.253Z"
                    },
                    {
                        "modifier": 2.5,
                        "payout": 1.85,
                        "source": "FAN_DUEL",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "zpHd-zern-J0v0",
                        "participantKey": "PWCp-xfxt-xemW",
                        "time": "2025-04-18T02:29:00.287Z"
                    }
                ],
                "context": {
                    "marketKey": "zpHd-zern-J0v0",
                    "marketType": "POINT_SPREAD",
                    "marketSegment": "FULL_MATCH",
                    "eventKey": "2ZXI-zern-EUqL",
                    "eventSport": "BASEBALL",
                    "eventName": "LG Twins @ SSG Landers",
                    "eventStartTime": "2025-04-18T09:30:00.000Z",
                    "eventHomeParticipantKey": "PWCp-xfxt-xemW",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "LG Twins",
                            "key": "ZW0E-xfxt-mKQ0",
                            "shortName": "LG",
                            "slug": "lg-twins",
                            "sport": "BASEBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "SSG Landers",
                            "key": "PWCp-xfxt-xemW",
                            "shortName": "SSG",
                            "slug": "ssg-landers",
                            "sport": "BASEBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 KBO League",
                    "competitionInstanceKey": "HzgU-zcrx-0Yjr",
                    "competitionName": "KBO League",
                    "competitionShortName": "KBO",
                    "competitionKey": "lyFJ-xfxt-Oy40"
                }
            },
            {
                "type": "MIDDLE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": -1.5,
                        "payout": 1.540541,
                        "source": "BOVADA",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "zpHd-zern-J0v0",
                        "participantKey": "ZW0E-xfxt-mKQ0",
                        "time": "2025-04-18T02:29:00.253Z"
                    },
                    {
                        "modifier": 2.5,
                        "payout": 1.83,
                        "source": "FANATICS",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "zpHd-zern-J0v0",
                        "participantKey": "PWCp-xfxt-xemW",
                        "time": "2025-04-18T02:29:00.287Z"
                    }
                ],
                "context": {
                    "marketKey": "zpHd-zern-J0v0",
                    "marketType": "POINT_SPREAD",
                    "marketSegment": "FULL_MATCH",
                    "eventKey": "2ZXI-zern-EUqL",
                    "eventSport": "BASEBALL",
                    "eventName": "LG Twins @ SSG Landers",
                    "eventStartTime": "2025-04-18T09:30:00.000Z",
                    "eventHomeParticipantKey": "PWCp-xfxt-xemW",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "LG Twins",
                            "key": "ZW0E-xfxt-mKQ0",
                            "shortName": "LG",
                            "slug": "lg-twins",
                            "sport": "BASEBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "SSG Landers",
                            "key": "PWCp-xfxt-xemW",
                            "shortName": "SSG",
                            "slug": "ssg-landers",
                            "sport": "BASEBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 KBO League",
                    "competitionInstanceKey": "HzgU-zcrx-0Yjr",
                    "competitionName": "KBO League",
                    "competitionShortName": "KBO",
                    "competitionKey": "lyFJ-xfxt-Oy40"
                }
            },
            {
                "type": "MIDDLE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": -1.5,
                        "payout": 1.617284,
                        "source": "DRAFT_KINGS",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "zpHd-zern-J0v0",
                        "participantKey": "ZW0E-xfxt-mKQ0",
                        "time": "2025-04-18T02:29:00.272Z"
                    },
                    {
                        "modifier": 2.5,
                        "payout": 1.83,
                        "source": "ESPN_BET",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "zpHd-zern-J0v0",
                        "participantKey": "PWCp-xfxt-xemW",
                        "time": "2025-04-18T02:29:00.282Z"
                    }
                ],
                "context": {
                    "marketKey": "zpHd-zern-J0v0",
                    "marketType": "POINT_SPREAD",
                    "marketSegment": "FULL_MATCH",
                    "eventKey": "2ZXI-zern-EUqL",
                    "eventSport": "BASEBALL",
                    "eventName": "LG Twins @ SSG Landers",
                    "eventStartTime": "2025-04-18T09:30:00.000Z",
                    "eventHomeParticipantKey": "PWCp-xfxt-xemW",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "LG Twins",
                            "key": "ZW0E-xfxt-mKQ0",
                            "shortName": "LG",
                            "slug": "lg-twins",
                            "sport": "BASEBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "SSG Landers",
                            "key": "PWCp-xfxt-xemW",
                            "shortName": "SSG",
                            "slug": "ssg-landers",
                            "sport": "BASEBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 KBO League",
                    "competitionInstanceKey": "HzgU-zcrx-0Yjr",
                    "competitionName": "KBO League",
                    "competitionShortName": "KBO",
                    "competitionKey": "lyFJ-xfxt-Oy40"
                }
            },
            {
                "type": "MIDDLE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": -1.5,
                        "payout": 1.617284,
                        "source": "DRAFT_KINGS",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "zpHd-zern-J0v0",
                        "participantKey": "ZW0E-xfxt-mKQ0",
                        "time": "2025-04-18T02:29:00.272Z"
                    },
                    {
                        "modifier": 2.5,
                        "payout": 1.85,
                        "source": "FAN_DUEL",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "zpHd-zern-J0v0",
                        "participantKey": "PWCp-xfxt-xemW",
                        "time": "2025-04-18T02:29:00.287Z"
                    }
                ],
                "context": {
                    "marketKey": "zpHd-zern-J0v0",
                    "marketType": "POINT_SPREAD",
                    "marketSegment": "FULL_MATCH",
                    "eventKey": "2ZXI-zern-EUqL",
                    "eventSport": "BASEBALL",
                    "eventName": "LG Twins @ SSG Landers",
                    "eventStartTime": "2025-04-18T09:30:00.000Z",
                    "eventHomeParticipantKey": "PWCp-xfxt-xemW",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "LG Twins",
                            "key": "ZW0E-xfxt-mKQ0",
                            "shortName": "LG",
                            "slug": "lg-twins",
                            "sport": "BASEBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "SSG Landers",
                            "key": "PWCp-xfxt-xemW",
                            "shortName": "SSG",
                            "slug": "ssg-landers",
                            "sport": "BASEBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 KBO League",
                    "competitionInstanceKey": "HzgU-zcrx-0Yjr",
                    "competitionName": "KBO League",
                    "competitionShortName": "KBO",
                    "competitionKey": "lyFJ-xfxt-Oy40"
                }
            },
            {
                "type": "MIDDLE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": -1.5,
                        "payout": 1.617284,
                        "source": "DRAFT_KINGS",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "zpHd-zern-J0v0",
                        "participantKey": "ZW0E-xfxt-mKQ0",
                        "time": "2025-04-18T02:29:00.272Z"
                    },
                    {
                        "modifier": 2.5,
                        "payout": 1.83,
                        "source": "FANATICS",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "zpHd-zern-J0v0",
                        "participantKey": "PWCp-xfxt-xemW",
                        "time": "2025-04-18T02:29:00.287Z"
                    }
                ],
                "context": {
                    "marketKey": "zpHd-zern-J0v0",
                    "marketType": "POINT_SPREAD",
                    "marketSegment": "FULL_MATCH",
                    "eventKey": "2ZXI-zern-EUqL",
                    "eventSport": "BASEBALL",
                    "eventName": "LG Twins @ SSG Landers",
                    "eventStartTime": "2025-04-18T09:30:00.000Z",
                    "eventHomeParticipantKey": "PWCp-xfxt-xemW",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "LG Twins",
                            "key": "ZW0E-xfxt-mKQ0",
                            "shortName": "LG",
                            "slug": "lg-twins",
                            "sport": "BASEBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "SSG Landers",
                            "key": "PWCp-xfxt-xemW",
                            "shortName": "SSG",
                            "slug": "ssg-landers",
                            "sport": "BASEBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 KBO League",
                    "competitionInstanceKey": "HzgU-zcrx-0Yjr",
                    "competitionName": "KBO League",
                    "competitionShortName": "KBO",
                    "competitionKey": "lyFJ-xfxt-Oy40"
                }
            }
        ],
        "MODIFIER_INCREASE": [
            {
                "type": "MODIFIER_INCREASE",
                "value": 2,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 1,
                        "payout": 1.86,
                        "source": "BET_PARX",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "09tI-zerb-qX5s",
                        "participantKey": "0Ch7-wddv-OrXs",
                        "time": "2025-04-18T02:29:00.161Z",
                        "stats": {
                            "minPayout": 1.61,
                            "maxPayout": 1.61
                        }
                    }
                ],
                "context": {
                    "marketKey": "09tI-zerb-qX5s",
                    "marketType": "POINT_SPREAD",
                    "marketSegment": "FULL_MATCH",
                    "eventKey": "BsiB-zerb-sFT3",
                    "eventSport": "BASKETBALL",
                    "eventName": "Miami Heat @ Atlanta Hawks",
                    "eventStartTime": "2025-04-18T23:10:00.000Z",
                    "eventHomeParticipantKey": "0Ch7-wddv-OrXs",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Atlanta Hawks",
                            "key": "0Ch7-wddv-OrXs",
                            "shortName": "ATL",
                            "slug": "atlanta-hawks",
                            "sport": "BASKETBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Miami Heat",
                            "key": "biYO-wddv-j7OK",
                            "shortName": "MIA",
                            "slug": "miami-heat",
                            "sport": "BASKETBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 National Basketball Association",
                    "competitionInstanceKey": "g4sK-yinv-Lczx",
                    "competitionName": "National Basketball Association",
                    "competitionShortName": "NBA",
                    "competitionKey": "d791-wddv-30fU",
                    "previousModifier": -1
                }
            },
            {
                "type": "MODIFIER_INCREASE",
                "value": 2,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 1,
                        "payout": 1.86,
                        "source": "BET_RIVERS",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "09tI-zerb-qX5s",
                        "participantKey": "0Ch7-wddv-OrXs",
                        "time": "2025-04-18T02:29:00.091Z",
                        "stats": {
                            "minPayout": 1.61,
                            "maxPayout": 1.61
                        }
                    }
                ],
                "context": {
                    "marketKey": "09tI-zerb-qX5s",
                    "marketType": "POINT_SPREAD",
                    "marketSegment": "FULL_MATCH",
                    "eventKey": "BsiB-zerb-sFT3",
                    "eventSport": "BASKETBALL",
                    "eventName": "Miami Heat @ Atlanta Hawks",
                    "eventStartTime": "2025-04-18T23:10:00.000Z",
                    "eventHomeParticipantKey": "0Ch7-wddv-OrXs",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Atlanta Hawks",
                            "key": "0Ch7-wddv-OrXs",
                            "shortName": "ATL",
                            "slug": "atlanta-hawks",
                            "sport": "BASKETBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Miami Heat",
                            "key": "biYO-wddv-j7OK",
                            "shortName": "MIA",
                            "slug": "miami-heat",
                            "sport": "BASKETBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 National Basketball Association",
                    "competitionInstanceKey": "g4sK-yinv-Lczx",
                    "competitionName": "National Basketball Association",
                    "competitionShortName": "NBA",
                    "competitionKey": "d791-wddv-30fU",
                    "previousModifier": -1
                }
            },
            {
                "type": "MODIFIER_INCREASE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 10.5,
                        "payout": 1.952381,
                        "source": "DRAFT_KINGS",
                        "type": "OVER",
                        "live": false,
                        "marketKey": "3B0F-zerc-xrk3",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.274Z",
                        "stats": {
                            "minPayout": 1.95,
                            "maxPayout": 1.95
                        }
                    }
                ],
                "context": {
                    "marketKey": "3B0F-zerc-xrk3",
                    "marketType": "INDIVIDUAL_POINT_TOTAL",
                    "marketSegment": "FULL_MATCH",
                    "marketParticipant": {
                        "category": "MENS_PROFESSIONAL",
                        "name": "Davion Mitchell",
                        "key": "MEaH-ycAk-uUDo",
                        "shortName": "D. Mitchell",
                        "slug": "davion-mitchell",
                        "sport": "BASKETBALL"
                    },
                    "eventKey": "BsiB-zerb-sFT3",
                    "eventSport": "BASKETBALL",
                    "eventName": "Miami Heat @ Atlanta Hawks",
                    "eventStartTime": "2025-04-18T23:10:00.000Z",
                    "eventHomeParticipantKey": "0Ch7-wddv-OrXs",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Atlanta Hawks",
                            "key": "0Ch7-wddv-OrXs",
                            "shortName": "ATL",
                            "slug": "atlanta-hawks",
                            "sport": "BASKETBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Miami Heat",
                            "key": "biYO-wddv-j7OK",
                            "shortName": "MIA",
                            "slug": "miami-heat",
                            "sport": "BASKETBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 National Basketball Association",
                    "competitionInstanceKey": "g4sK-yinv-Lczx",
                    "competitionName": "National Basketball Association",
                    "competitionShortName": "NBA",
                    "competitionKey": "d791-wddv-30fU",
                    "previousModifier": 9.5
                }
            },
            {
                "type": "MODIFIER_INCREASE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 10.5,
                        "payout": 1.8,
                        "source": "DRAFT_KINGS",
                        "type": "UNDER",
                        "live": false,
                        "marketKey": "3B0F-zerc-xrk3",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.274Z",
                        "stats": {
                            "minPayout": 1.95,
                            "maxPayout": 1.95
                        }
                    }
                ],
                "context": {
                    "marketKey": "3B0F-zerc-xrk3",
                    "marketType": "INDIVIDUAL_POINT_TOTAL",
                    "marketSegment": "FULL_MATCH",
                    "marketParticipant": {
                        "category": "MENS_PROFESSIONAL",
                        "name": "Davion Mitchell",
                        "key": "MEaH-ycAk-uUDo",
                        "shortName": "D. Mitchell",
                        "slug": "davion-mitchell",
                        "sport": "BASKETBALL"
                    },
                    "eventKey": "BsiB-zerb-sFT3",
                    "eventSport": "BASKETBALL",
                    "eventName": "Miami Heat @ Atlanta Hawks",
                    "eventStartTime": "2025-04-18T23:10:00.000Z",
                    "eventHomeParticipantKey": "0Ch7-wddv-OrXs",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Atlanta Hawks",
                            "key": "0Ch7-wddv-OrXs",
                            "shortName": "ATL",
                            "slug": "atlanta-hawks",
                            "sport": "BASKETBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Miami Heat",
                            "key": "biYO-wddv-j7OK",
                            "shortName": "MIA",
                            "slug": "miami-heat",
                            "sport": "BASKETBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 National Basketball Association",
                    "competitionInstanceKey": "g4sK-yinv-Lczx",
                    "competitionName": "National Basketball Association",
                    "competitionShortName": "NBA",
                    "competitionKey": "d791-wddv-30fU",
                    "previousModifier": 9.5
                }
            },
            {
                "type": "MODIFIER_INCREASE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 9.5,
                        "payout": 2,
                        "source": "DRAFT_KINGS",
                        "type": "OVER",
                        "live": false,
                        "marketKey": "4JRn-zeqt-e9KA",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.274Z",
                        "stats": {
                            "minPayout": 1.769231,
                            "maxPayout": 1.769231
                        }
                    }
                ],
                "context": {
                    "marketKey": "4JRn-zeqt-e9KA",
                    "marketType": "INDIVIDUAL_POINT_TOTAL",
                    "marketSegment": "FULL_MATCH",
                    "marketParticipant": {
                        "category": "MENS_PROFESSIONAL",
                        "name": "Payton Pritchard",
                        "key": "zYYZ-ycAk-q2hu",
                        "shortName": "P. Pritchard",
                        "slug": "payton-pritchard",
                        "sport": "BASKETBALL"
                    },
                    "eventKey": "0HKV-zeqc-tbcB",
                    "eventSport": "BASKETBALL",
                    "eventName": "Orlando Magic @ Boston Celtics",
                    "eventStartTime": "2025-04-20T19:30:00.000Z",
                    "eventHomeParticipantKey": "aUbn-wddv-b90h",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Boston Celtics",
                            "key": "aUbn-wddv-b90h",
                            "shortName": "BOS",
                            "slug": "boston-celtics",
                            "sport": "BASKETBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Orlando Magic",
                            "key": "Q6FU-wddv-9NTI",
                            "shortName": "ORL",
                            "slug": "orlando-magic",
                            "sport": "BASKETBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 National Basketball Association",
                    "competitionInstanceKey": "g4sK-yinv-Lczx",
                    "competitionName": "National Basketball Association",
                    "competitionShortName": "NBA",
                    "competitionKey": "d791-wddv-30fU",
                    "previousModifier": 8.5
                }
            },
            {
                "type": "MODIFIER_INCREASE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 9.5,
                        "payout": 1.769231,
                        "source": "DRAFT_KINGS",
                        "type": "UNDER",
                        "live": false,
                        "marketKey": "4JRn-zeqt-e9KA",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.274Z",
                        "stats": {
                            "minPayout": 1.769231,
                            "maxPayout": 1.769231
                        }
                    }
                ],
                "context": {
                    "marketKey": "4JRn-zeqt-e9KA",
                    "marketType": "INDIVIDUAL_POINT_TOTAL",
                    "marketSegment": "FULL_MATCH",
                    "marketParticipant": {
                        "category": "MENS_PROFESSIONAL",
                        "name": "Payton Pritchard",
                        "key": "zYYZ-ycAk-q2hu",
                        "shortName": "P. Pritchard",
                        "slug": "payton-pritchard",
                        "sport": "BASKETBALL"
                    },
                    "eventKey": "0HKV-zeqc-tbcB",
                    "eventSport": "BASKETBALL",
                    "eventName": "Orlando Magic @ Boston Celtics",
                    "eventStartTime": "2025-04-20T19:30:00.000Z",
                    "eventHomeParticipantKey": "aUbn-wddv-b90h",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Boston Celtics",
                            "key": "aUbn-wddv-b90h",
                            "shortName": "BOS",
                            "slug": "boston-celtics",
                            "sport": "BASKETBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Orlando Magic",
                            "key": "Q6FU-wddv-9NTI",
                            "shortName": "ORL",
                            "slug": "orlando-magic",
                            "sport": "BASKETBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 National Basketball Association",
                    "competitionInstanceKey": "g4sK-yinv-Lczx",
                    "competitionName": "National Basketball Association",
                    "competitionShortName": "NBA",
                    "competitionKey": "d791-wddv-30fU",
                    "previousModifier": 8.5
                }
            },
            {
                "type": "MODIFIER_INCREASE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 0.5,
                        "payout": 1.571429,
                        "source": "BOVADA",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "7M4G-zero-KesK",
                        "participantKey": "5Wnu-wiDr-CnNp",
                        "time": "2025-04-18T02:29:00.257Z",
                        "stats": {
                            "minPayout": 1.54,
                            "maxPayout": 1.56
                        }
                    }
                ],
                "context": {
                    "marketKey": "7M4G-zero-KesK",
                    "marketType": "POINT_SPREAD",
                    "marketSegment": "FIRST_5_INNINGS",
                    "eventKey": "wp3W-zern-dtnj",
                    "eventSport": "BASEBALL",
                    "eventName": "Fukuoka SoftBank Hawks @ Saitama Seibu Lions",
                    "eventStartTime": "2025-04-18T09:00:00.000Z",
                    "eventHomeParticipantKey": "rkK0-wiDr-xpZ3",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Fukuoka SoftBank Hawks",
                            "key": "5Wnu-wiDr-CnNp",
                            "shortName": "SBH",
                            "slug": "fukuoka-softbank-hawks",
                            "sport": "BASEBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Saitama Seibu Lions",
                            "key": "rkK0-wiDr-xpZ3",
                            "shortName": "SSL",
                            "slug": "saitama-seibu-lions",
                            "sport": "BASEBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 Nippon Professional Baseball League",
                    "competitionInstanceKey": "KLrD-zdeg-kORo",
                    "competitionName": "Nippon Professional Baseball League",
                    "competitionShortName": "NPB",
                    "competitionKey": "CWpx-wiDr-05BA",
                    "previousModifier": -0.5
                }
            },
            {
                "type": "MODIFIER_INCREASE",
                "value": 3,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 181.5,
                        "payout": 1.869565,
                        "source": "DRAFT_KINGS",
                        "type": "OVER",
                        "live": false,
                        "marketKey": "CFC5-zeof-0ZY6",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.271Z",
                        "stats": {
                            "minPayout": 1.9,
                            "maxPayout": 1.9
                        }
                    }
                ],
                "context": {
                    "marketKey": "CFC5-zeof-0ZY6",
                    "marketType": "POINT_TOTAL",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "6jGn-zeie-n2Av",
                    "eventSport": "AUSTRALIAN_RULES_FOOTBALL",
                    "eventName": "Carlton @ North Melbourne",
                    "eventStartTime": "2025-04-18T05:20:00.000Z",
                    "eventHomeParticipantKey": "OZ1B-xbdu-ToxP",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "North Melbourne",
                            "key": "OZ1B-xbdu-ToxP",
                            "shortName": "NM",
                            "slug": "north-melbourne",
                            "sport": "AUSTRALIAN_RULES_FOOTBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Carlton",
                            "key": "MwYy-xbdu-A0C5",
                            "shortName": "CAR",
                            "slug": "carlton",
                            "sport": "AUSTRALIAN_RULES_FOOTBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 Australian Football League",
                    "competitionInstanceKey": "6dBj-ykzc-cMtp",
                    "competitionName": "Australian Football League",
                    "competitionShortName": "AFL",
                    "competitionKey": "jcKL-xbdu-POdB",
                    "previousModifier": 178.5
                }
            },
            {
                "type": "MODIFIER_INCREASE",
                "value": 3,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 181.5,
                        "payout": 1.869565,
                        "source": "DRAFT_KINGS",
                        "type": "UNDER",
                        "live": false,
                        "marketKey": "CFC5-zeof-0ZY6",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.271Z",
                        "stats": {
                            "minPayout": 1.9,
                            "maxPayout": 1.9
                        }
                    }
                ],
                "context": {
                    "marketKey": "CFC5-zeof-0ZY6",
                    "marketType": "POINT_TOTAL",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "6jGn-zeie-n2Av",
                    "eventSport": "AUSTRALIAN_RULES_FOOTBALL",
                    "eventName": "Carlton @ North Melbourne",
                    "eventStartTime": "2025-04-18T05:20:00.000Z",
                    "eventHomeParticipantKey": "OZ1B-xbdu-ToxP",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "North Melbourne",
                            "key": "OZ1B-xbdu-ToxP",
                            "shortName": "NM",
                            "slug": "north-melbourne",
                            "sport": "AUSTRALIAN_RULES_FOOTBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Carlton",
                            "key": "MwYy-xbdu-A0C5",
                            "shortName": "CAR",
                            "slug": "carlton",
                            "sport": "AUSTRALIAN_RULES_FOOTBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 Australian Football League",
                    "competitionInstanceKey": "6dBj-ykzc-cMtp",
                    "competitionName": "Australian Football League",
                    "competitionShortName": "AFL",
                    "competitionKey": "jcKL-xbdu-POdB",
                    "previousModifier": 178.5
                }
            },
            {
                "type": "MODIFIER_INCREASE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 7.5,
                        "payout": 2,
                        "source": "DRAFT_KINGS",
                        "type": "OVER",
                        "live": false,
                        "marketKey": "D2e3-zeqt-oYMy",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.274Z",
                        "stats": {
                            "minPayout": 1.91,
                            "maxPayout": 1.91
                        }
                    }
                ],
                "context": {
                    "marketKey": "D2e3-zeqt-oYMy",
                    "marketType": "INDIVIDUAL_POINT_TOTAL",
                    "marketSegment": "FULL_MATCH",
                    "marketParticipant": {
                        "category": "MENS_PROFESSIONAL",
                        "name": "Cole Anthony",
                        "key": "8PYJ-ycAk-oeQV",
                        "shortName": "C. Anthony",
                        "slug": "cole-anthony",
                        "sport": "BASKETBALL"
                    },
                    "eventKey": "0HKV-zeqc-tbcB",
                    "eventSport": "BASKETBALL",
                    "eventName": "Orlando Magic @ Boston Celtics",
                    "eventStartTime": "2025-04-20T19:30:00.000Z",
                    "eventHomeParticipantKey": "aUbn-wddv-b90h",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Boston Celtics",
                            "key": "aUbn-wddv-b90h",
                            "shortName": "BOS",
                            "slug": "boston-celtics",
                            "sport": "BASKETBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Orlando Magic",
                            "key": "Q6FU-wddv-9NTI",
                            "shortName": "ORL",
                            "slug": "orlando-magic",
                            "sport": "BASKETBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 National Basketball Association",
                    "competitionInstanceKey": "g4sK-yinv-Lczx",
                    "competitionName": "National Basketball Association",
                    "competitionShortName": "NBA",
                    "competitionKey": "d791-wddv-30fU",
                    "previousModifier": 6.5
                }
            },
            {
                "type": "MODIFIER_INCREASE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 7.5,
                        "payout": 1.769231,
                        "source": "DRAFT_KINGS",
                        "type": "UNDER",
                        "live": false,
                        "marketKey": "D2e3-zeqt-oYMy",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.274Z",
                        "stats": {
                            "minPayout": 1.91,
                            "maxPayout": 1.91
                        }
                    }
                ],
                "context": {
                    "marketKey": "D2e3-zeqt-oYMy",
                    "marketType": "INDIVIDUAL_POINT_TOTAL",
                    "marketSegment": "FULL_MATCH",
                    "marketParticipant": {
                        "category": "MENS_PROFESSIONAL",
                        "name": "Cole Anthony",
                        "key": "8PYJ-ycAk-oeQV",
                        "shortName": "C. Anthony",
                        "slug": "cole-anthony",
                        "sport": "BASKETBALL"
                    },
                    "eventKey": "0HKV-zeqc-tbcB",
                    "eventSport": "BASKETBALL",
                    "eventName": "Orlando Magic @ Boston Celtics",
                    "eventStartTime": "2025-04-20T19:30:00.000Z",
                    "eventHomeParticipantKey": "aUbn-wddv-b90h",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Boston Celtics",
                            "key": "aUbn-wddv-b90h",
                            "shortName": "BOS",
                            "slug": "boston-celtics",
                            "sport": "BASKETBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Orlando Magic",
                            "key": "Q6FU-wddv-9NTI",
                            "shortName": "ORL",
                            "slug": "orlando-magic",
                            "sport": "BASKETBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 National Basketball Association",
                    "competitionInstanceKey": "g4sK-yinv-Lczx",
                    "competitionName": "National Basketball Association",
                    "competitionShortName": "NBA",
                    "competitionKey": "d791-wddv-30fU",
                    "previousModifier": 6.5
                }
            },
            {
                "type": "MODIFIER_INCREASE",
                "value": 0.5,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 10.5,
                        "payout": 1.93,
                        "source": "FAN_DUEL",
                        "type": "OVER",
                        "live": false,
                        "marketKey": "EAeb-zers-gAlv",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.287Z",
                        "stats": {
                            "minPayout": 1.95,
                            "maxPayout": 1.95
                        }
                    }
                ],
                "context": {
                    "marketKey": "EAeb-zers-gAlv",
                    "marketType": "POINT_TOTAL",
                    "marketSegment": "FULL_MATCH",
                    "eventKey": "vICj-zers-FrAG",
                    "eventSport": "BASEBALL",
                    "eventName": "Arizona Diamondbacks @ Chicago Cubs",
                    "eventStartTime": "2025-04-18T18:21:00.000Z",
                    "eventHomeParticipantKey": "ynPR-wegw-SU8M",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Arizona Diamondbacks",
                            "key": "Oyu0-wegw-84JU",
                            "shortName": "ARI",
                            "slug": "arizona-diamondbacks",
                            "sport": "BASEBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Chicago Cubs",
                            "key": "ynPR-wegw-SU8M",
                            "shortName": "CHC",
                            "slug": "chicago-cubs",
                            "sport": "BASEBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 Major League Baseball",
                    "competitionInstanceKey": "9Jss-zcjh-iOl3",
                    "competitionName": "Major League Baseball",
                    "competitionShortName": "MLB",
                    "competitionKey": "qK0E-wddv-bFet",
                    "previousModifier": 10
                }
            },
            {
                "type": "MODIFIER_INCREASE",
                "value": 0.5,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 10.5,
                        "payout": 1.89,
                        "source": "FAN_DUEL",
                        "type": "UNDER",
                        "live": false,
                        "marketKey": "EAeb-zers-gAlv",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.287Z",
                        "stats": {
                            "minPayout": 1.95,
                            "maxPayout": 1.95
                        }
                    }
                ],
                "context": {
                    "marketKey": "EAeb-zers-gAlv",
                    "marketType": "POINT_TOTAL",
                    "marketSegment": "FULL_MATCH",
                    "eventKey": "vICj-zers-FrAG",
                    "eventSport": "BASEBALL",
                    "eventName": "Arizona Diamondbacks @ Chicago Cubs",
                    "eventStartTime": "2025-04-18T18:21:00.000Z",
                    "eventHomeParticipantKey": "ynPR-wegw-SU8M",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Arizona Diamondbacks",
                            "key": "Oyu0-wegw-84JU",
                            "shortName": "ARI",
                            "slug": "arizona-diamondbacks",
                            "sport": "BASEBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Chicago Cubs",
                            "key": "ynPR-wegw-SU8M",
                            "shortName": "CHC",
                            "slug": "chicago-cubs",
                            "sport": "BASEBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 Major League Baseball",
                    "competitionInstanceKey": "9Jss-zcjh-iOl3",
                    "competitionName": "Major League Baseball",
                    "competitionShortName": "MLB",
                    "competitionKey": "qK0E-wddv-bFet",
                    "previousModifier": 10
                }
            },
            {
                "type": "MODIFIER_INCREASE",
                "value": 0.5,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 1.5,
                        "payout": 1.5,
                        "source": "BET_PARX",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "GaR0-zern-FjrR",
                        "participantKey": "1KPM-xfxt-ijW0",
                        "time": "2025-04-18T02:29:00.151Z",
                        "stats": {
                            "minPayout": 1.65,
                            "maxPayout": 1.65
                        }
                    }
                ],
                "context": {
                    "marketKey": "GaR0-zern-FjrR",
                    "marketType": "POINT_SPREAD",
                    "marketSegment": "FULL_MATCH",
                    "eventKey": "RsnQ-zern-J3f5",
                    "eventSport": "BASEBALL",
                    "eventName": "Lotte Giants @ Samsung Lions",
                    "eventStartTime": "2025-04-18T09:30:00.000Z",
                    "eventHomeParticipantKey": "1KPM-xfxt-ijW0",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Samsung Lions",
                            "key": "1KPM-xfxt-ijW0",
                            "shortName": "SAM",
                            "slug": "samsung-lions",
                            "sport": "BASEBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Lotte Giants",
                            "key": "p0Uo-xfxt-gXxe",
                            "shortName": "LOT",
                            "slug": "lotte-giants",
                            "sport": "BASEBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 KBO League",
                    "competitionInstanceKey": "HzgU-zcrx-0Yjr",
                    "competitionName": "KBO League",
                    "competitionShortName": "KBO",
                    "competitionKey": "lyFJ-xfxt-Oy40",
                    "previousModifier": 1
                }
            },
            {
                "type": "MODIFIER_INCREASE",
                "value": 0.5,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 1.5,
                        "payout": 1.5,
                        "source": "BET_RIVERS",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "GaR0-zern-FjrR",
                        "participantKey": "1KPM-xfxt-ijW0",
                        "time": "2025-04-18T02:29:00.077Z",
                        "stats": {
                            "minPayout": 1.65,
                            "maxPayout": 1.65
                        }
                    }
                ],
                "context": {
                    "marketKey": "GaR0-zern-FjrR",
                    "marketType": "POINT_SPREAD",
                    "marketSegment": "FULL_MATCH",
                    "eventKey": "RsnQ-zern-J3f5",
                    "eventSport": "BASEBALL",
                    "eventName": "Lotte Giants @ Samsung Lions",
                    "eventStartTime": "2025-04-18T09:30:00.000Z",
                    "eventHomeParticipantKey": "1KPM-xfxt-ijW0",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Samsung Lions",
                            "key": "1KPM-xfxt-ijW0",
                            "shortName": "SAM",
                            "slug": "samsung-lions",
                            "sport": "BASEBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Lotte Giants",
                            "key": "p0Uo-xfxt-gXxe",
                            "shortName": "LOT",
                            "slug": "lotte-giants",
                            "sport": "BASEBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 KBO League",
                    "competitionInstanceKey": "HzgU-zcrx-0Yjr",
                    "competitionName": "KBO League",
                    "competitionShortName": "KBO",
                    "competitionKey": "lyFJ-xfxt-Oy40",
                    "previousModifier": 1
                }
            },
            {
                "type": "MODIFIER_INCREASE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 188.5,
                        "payout": 2.45,
                        "source": "BOVADA",
                        "type": "OVER",
                        "live": false,
                        "marketKey": "H51z-zeol-OkRG",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.251Z",
                        "stats": {
                            "minPayout": 2.45,
                            "maxPayout": 2.45
                        }
                    }
                ],
                "context": {
                    "marketKey": "H51z-zeol-OkRG",
                    "marketType": "POINT_TOTAL",
                    "marketSegment": "FULL_MATCH",
                    "eventKey": "6jGn-zeie-n2Av",
                    "eventSport": "AUSTRALIAN_RULES_FOOTBALL",
                    "eventName": "Carlton @ North Melbourne",
                    "eventStartTime": "2025-04-18T05:20:00.000Z",
                    "eventHomeParticipantKey": "OZ1B-xbdu-ToxP",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "North Melbourne",
                            "key": "OZ1B-xbdu-ToxP",
                            "shortName": "NM",
                            "slug": "north-melbourne",
                            "sport": "AUSTRALIAN_RULES_FOOTBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Carlton",
                            "key": "MwYy-xbdu-A0C5",
                            "shortName": "CAR",
                            "slug": "carlton",
                            "sport": "AUSTRALIAN_RULES_FOOTBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 Australian Football League",
                    "competitionInstanceKey": "6dBj-ykzc-cMtp",
                    "competitionName": "Australian Football League",
                    "competitionShortName": "AFL",
                    "competitionKey": "jcKL-xbdu-POdB",
                    "previousModifier": 187.5
                }
            },
            {
                "type": "MODIFIER_INCREASE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 188.5,
                        "payout": 1.526316,
                        "source": "BOVADA",
                        "type": "UNDER",
                        "live": false,
                        "marketKey": "H51z-zeol-OkRG",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.251Z",
                        "stats": {
                            "minPayout": 2.45,
                            "maxPayout": 2.45
                        }
                    }
                ],
                "context": {
                    "marketKey": "H51z-zeol-OkRG",
                    "marketType": "POINT_TOTAL",
                    "marketSegment": "FULL_MATCH",
                    "eventKey": "6jGn-zeie-n2Av",
                    "eventSport": "AUSTRALIAN_RULES_FOOTBALL",
                    "eventName": "Carlton @ North Melbourne",
                    "eventStartTime": "2025-04-18T05:20:00.000Z",
                    "eventHomeParticipantKey": "OZ1B-xbdu-ToxP",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "North Melbourne",
                            "key": "OZ1B-xbdu-ToxP",
                            "shortName": "NM",
                            "slug": "north-melbourne",
                            "sport": "AUSTRALIAN_RULES_FOOTBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Carlton",
                            "key": "MwYy-xbdu-A0C5",
                            "shortName": "CAR",
                            "slug": "carlton",
                            "sport": "AUSTRALIAN_RULES_FOOTBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 Australian Football League",
                    "competitionInstanceKey": "6dBj-ykzc-cMtp",
                    "competitionName": "Australian Football League",
                    "competitionShortName": "AFL",
                    "competitionKey": "jcKL-xbdu-POdB",
                    "previousModifier": 187.5
                }
            },
            {
                "type": "MODIFIER_INCREASE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 14.5,
                        "payout": 1.869565,
                        "source": "DRAFT_KINGS",
                        "type": "OVER",
                        "live": false,
                        "marketKey": "Hoid-zeqj-Umyj",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.274Z",
                        "stats": {
                            "minPayout": 1.869565,
                            "maxPayout": 1.869565
                        }
                    }
                ],
                "context": {
                    "marketKey": "Hoid-zeqj-Umyj",
                    "marketType": "INDIVIDUAL_POINT_TOTAL",
                    "marketSegment": "FULL_MATCH",
                    "marketParticipant": {
                        "category": "MENS_PROFESSIONAL",
                        "name": "Amen Thompson",
                        "key": "IAfh-ycAk-mrie",
                        "shortName": "A. Thompson",
                        "slug": "amen-thompson",
                        "sport": "BASKETBALL"
                    },
                    "eventKey": "colz-zeqf-DuGG",
                    "eventSport": "BASKETBALL",
                    "eventName": "Golden State Warriors @ Houston Rockets",
                    "eventStartTime": "2025-04-21T01:30:00.000Z",
                    "eventHomeParticipantKey": "il4x-wddv-xTVS",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Golden State Warriors",
                            "key": "qToe-wddv-22ib",
                            "shortName": "GSW",
                            "slug": "golden-state-warriors",
                            "sport": "BASKETBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Houston Rockets",
                            "key": "il4x-wddv-xTVS",
                            "shortName": "HOU",
                            "slug": "houston-rockets",
                            "sport": "BASKETBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 National Basketball Association",
                    "competitionInstanceKey": "g4sK-yinv-Lczx",
                    "competitionName": "National Basketball Association",
                    "competitionShortName": "NBA",
                    "competitionKey": "d791-wddv-30fU",
                    "previousModifier": 13.5
                }
            },
            {
                "type": "MODIFIER_INCREASE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 14.5,
                        "payout": 1.869565,
                        "source": "DRAFT_KINGS",
                        "type": "UNDER",
                        "live": false,
                        "marketKey": "Hoid-zeqj-Umyj",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.274Z",
                        "stats": {
                            "minPayout": 1.869565,
                            "maxPayout": 1.869565
                        }
                    }
                ],
                "context": {
                    "marketKey": "Hoid-zeqj-Umyj",
                    "marketType": "INDIVIDUAL_POINT_TOTAL",
                    "marketSegment": "FULL_MATCH",
                    "marketParticipant": {
                        "category": "MENS_PROFESSIONAL",
                        "name": "Amen Thompson",
                        "key": "IAfh-ycAk-mrie",
                        "shortName": "A. Thompson",
                        "slug": "amen-thompson",
                        "sport": "BASKETBALL"
                    },
                    "eventKey": "colz-zeqf-DuGG",
                    "eventSport": "BASKETBALL",
                    "eventName": "Golden State Warriors @ Houston Rockets",
                    "eventStartTime": "2025-04-21T01:30:00.000Z",
                    "eventHomeParticipantKey": "il4x-wddv-xTVS",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Golden State Warriors",
                            "key": "qToe-wddv-22ib",
                            "shortName": "GSW",
                            "slug": "golden-state-warriors",
                            "sport": "BASKETBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Houston Rockets",
                            "key": "il4x-wddv-xTVS",
                            "shortName": "HOU",
                            "slug": "houston-rockets",
                            "sport": "BASKETBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 National Basketball Association",
                    "competitionInstanceKey": "g4sK-yinv-Lczx",
                    "competitionName": "National Basketball Association",
                    "competitionShortName": "NBA",
                    "competitionKey": "d791-wddv-30fU",
                    "previousModifier": 13.5
                }
            },
            {
                "type": "MODIFIER_INCREASE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 9.5,
                        "payout": 2.15,
                        "source": "ESPN_BET",
                        "type": "OVER",
                        "live": false,
                        "marketKey": "OFUD-zert-VVgO",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.282Z",
                        "stats": {
                            "minPayout": 1.769231,
                            "maxPayout": 1.769231
                        }
                    }
                ],
                "context": {
                    "marketKey": "OFUD-zert-VVgO",
                    "marketType": "POINT_TOTAL",
                    "marketSegment": "FULL_MATCH",
                    "eventKey": "wVxF-zert-vD7N",
                    "eventSport": "BASEBALL",
                    "eventName": "Cincinnati Reds @ Baltimore Orioles",
                    "eventStartTime": "2025-04-18T23:05:00.000Z",
                    "eventHomeParticipantKey": "s8tZ-wegw-MG5X",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Baltimore Orioles",
                            "key": "s8tZ-wegw-MG5X",
                            "shortName": "BAL",
                            "slug": "baltimore-orioles",
                            "sport": "BASEBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Cincinnati Reds",
                            "key": "Lrjq-wegw-6eFF",
                            "shortName": "CIN",
                            "slug": "cincinnati-reds",
                            "sport": "BASEBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 Major League Baseball",
                    "competitionInstanceKey": "9Jss-zcjh-iOl3",
                    "competitionName": "Major League Baseball",
                    "competitionShortName": "MLB",
                    "competitionKey": "qK0E-wddv-bFet",
                    "previousModifier": 8.5
                }
            },
            {
                "type": "MODIFIER_INCREASE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 9.5,
                        "payout": 1.74,
                        "source": "ESPN_BET",
                        "type": "UNDER",
                        "live": false,
                        "marketKey": "OFUD-zert-VVgO",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.282Z",
                        "stats": {
                            "minPayout": 1.769231,
                            "maxPayout": 1.769231
                        }
                    }
                ],
                "context": {
                    "marketKey": "OFUD-zert-VVgO",
                    "marketType": "POINT_TOTAL",
                    "marketSegment": "FULL_MATCH",
                    "eventKey": "wVxF-zert-vD7N",
                    "eventSport": "BASEBALL",
                    "eventName": "Cincinnati Reds @ Baltimore Orioles",
                    "eventStartTime": "2025-04-18T23:05:00.000Z",
                    "eventHomeParticipantKey": "s8tZ-wegw-MG5X",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Baltimore Orioles",
                            "key": "s8tZ-wegw-MG5X",
                            "shortName": "BAL",
                            "slug": "baltimore-orioles",
                            "sport": "BASEBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Cincinnati Reds",
                            "key": "Lrjq-wegw-6eFF",
                            "shortName": "CIN",
                            "slug": "cincinnati-reds",
                            "sport": "BASEBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 Major League Baseball",
                    "competitionInstanceKey": "9Jss-zcjh-iOl3",
                    "competitionName": "Major League Baseball",
                    "competitionShortName": "MLB",
                    "competitionKey": "qK0E-wddv-bFet",
                    "previousModifier": 8.5
                }
            },
            {
                "type": "MODIFIER_INCREASE",
                "value": 0.5,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 8,
                        "payout": 1.95,
                        "source": "FAN_DUEL",
                        "type": "OVER",
                        "live": false,
                        "marketKey": "Tzjh-zers-Xfca",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.287Z",
                        "stats": {
                            "minPayout": 2.07,
                            "maxPayout": 2.07
                        }
                    }
                ],
                "context": {
                    "marketKey": "Tzjh-zers-Xfca",
                    "marketType": "POINT_TOTAL",
                    "marketSegment": "FULL_MATCH",
                    "eventKey": "HXbx-zers-6QLd",
                    "eventSport": "BASEBALL",
                    "eventName": "Seattle Mariners @ Toronto Blue Jays",
                    "eventStartTime": "2025-04-18T23:08:00.000Z",
                    "eventHomeParticipantKey": "zgON-wegw-MepZ",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Seattle Mariners",
                            "key": "3peb-wegw-yaT2",
                            "shortName": "SEA",
                            "slug": "seattle-mariners",
                            "sport": "BASEBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Toronto Blue Jays",
                            "key": "zgON-wegw-MepZ",
                            "shortName": "TOR",
                            "slug": "toronto-blue-jays",
                            "sport": "BASEBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 Major League Baseball",
                    "competitionInstanceKey": "9Jss-zcjh-iOl3",
                    "competitionName": "Major League Baseball",
                    "competitionShortName": "MLB",
                    "competitionKey": "qK0E-wddv-bFet",
                    "previousModifier": 7.5
                }
            },
            {
                "type": "MODIFIER_INCREASE",
                "value": 0.5,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 8,
                        "payout": 1.87,
                        "source": "FAN_DUEL",
                        "type": "UNDER",
                        "live": false,
                        "marketKey": "Tzjh-zers-Xfca",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.287Z",
                        "stats": {
                            "minPayout": 2.07,
                            "maxPayout": 2.07
                        }
                    }
                ],
                "context": {
                    "marketKey": "Tzjh-zers-Xfca",
                    "marketType": "POINT_TOTAL",
                    "marketSegment": "FULL_MATCH",
                    "eventKey": "HXbx-zers-6QLd",
                    "eventSport": "BASEBALL",
                    "eventName": "Seattle Mariners @ Toronto Blue Jays",
                    "eventStartTime": "2025-04-18T23:08:00.000Z",
                    "eventHomeParticipantKey": "zgON-wegw-MepZ",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Seattle Mariners",
                            "key": "3peb-wegw-yaT2",
                            "shortName": "SEA",
                            "slug": "seattle-mariners",
                            "sport": "BASEBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Toronto Blue Jays",
                            "key": "zgON-wegw-MepZ",
                            "shortName": "TOR",
                            "slug": "toronto-blue-jays",
                            "sport": "BASEBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 Major League Baseball",
                    "competitionInstanceKey": "9Jss-zcjh-iOl3",
                    "competitionName": "Major League Baseball",
                    "competitionShortName": "MLB",
                    "competitionKey": "qK0E-wddv-bFet",
                    "previousModifier": 7.5
                }
            },
            {
                "type": "MODIFIER_INCREASE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 25.5,
                        "payout": 1.952381,
                        "source": "DRAFT_KINGS",
                        "type": "OVER",
                        "live": false,
                        "marketKey": "VMsk-zeou-8yEI",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.274Z",
                        "stats": {
                            "minPayout": 1.8,
                            "maxPayout": 1.833333
                        }
                    }
                ],
                "context": {
                    "marketKey": "VMsk-zeou-8yEI",
                    "marketType": "INDIVIDUAL_POINT_TOTAL",
                    "marketSegment": "FULL_MATCH",
                    "marketParticipant": {
                        "category": "MENS_PROFESSIONAL",
                        "name": "Kawhi Leonard",
                        "key": "aKOL-ycAk-LB6E",
                        "shortName": "K. Leonard",
                        "slug": "kawhi-leonard",
                        "sport": "BASKETBALL"
                    },
                    "eventKey": "4d0b-zenw-ZAPR",
                    "eventSport": "BASKETBALL",
                    "eventName": "Los Angeles Clippers @ Denver Nuggets",
                    "eventStartTime": "2025-04-19T19:40:00.000Z",
                    "eventHomeParticipantKey": "eI2D-wddv-4NJj",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Denver Nuggets",
                            "key": "eI2D-wddv-4NJj",
                            "shortName": "DEN",
                            "slug": "denver-nuggets",
                            "sport": "BASKETBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Los Angeles Clippers",
                            "key": "OABG-wddv-xt3n",
                            "shortName": "LAC",
                            "slug": "los-angeles-clippers",
                            "sport": "BASKETBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 National Basketball Association",
                    "competitionInstanceKey": "g4sK-yinv-Lczx",
                    "competitionName": "National Basketball Association",
                    "competitionShortName": "NBA",
                    "competitionKey": "d791-wddv-30fU",
                    "previousModifier": 24.5
                }
            },
            {
                "type": "MODIFIER_INCREASE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 25.5,
                        "payout": 1.8,
                        "source": "DRAFT_KINGS",
                        "type": "UNDER",
                        "live": false,
                        "marketKey": "VMsk-zeou-8yEI",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.274Z",
                        "stats": {
                            "minPayout": 1.8,
                            "maxPayout": 1.833333
                        }
                    }
                ],
                "context": {
                    "marketKey": "VMsk-zeou-8yEI",
                    "marketType": "INDIVIDUAL_POINT_TOTAL",
                    "marketSegment": "FULL_MATCH",
                    "marketParticipant": {
                        "category": "MENS_PROFESSIONAL",
                        "name": "Kawhi Leonard",
                        "key": "aKOL-ycAk-LB6E",
                        "shortName": "K. Leonard",
                        "slug": "kawhi-leonard",
                        "sport": "BASKETBALL"
                    },
                    "eventKey": "4d0b-zenw-ZAPR",
                    "eventSport": "BASKETBALL",
                    "eventName": "Los Angeles Clippers @ Denver Nuggets",
                    "eventStartTime": "2025-04-19T19:40:00.000Z",
                    "eventHomeParticipantKey": "eI2D-wddv-4NJj",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Denver Nuggets",
                            "key": "eI2D-wddv-4NJj",
                            "shortName": "DEN",
                            "slug": "denver-nuggets",
                            "sport": "BASKETBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Los Angeles Clippers",
                            "key": "OABG-wddv-xt3n",
                            "shortName": "LAC",
                            "slug": "los-angeles-clippers",
                            "sport": "BASKETBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 National Basketball Association",
                    "competitionInstanceKey": "g4sK-yinv-Lczx",
                    "competitionName": "National Basketball Association",
                    "competitionShortName": "NBA",
                    "competitionKey": "d791-wddv-30fU",
                    "previousModifier": 24.5
                }
            },
            {
                "type": "MODIFIER_INCREASE",
                "value": 0.5,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 2,
                        "payout": 2.2,
                        "source": "BOVADA",
                        "type": "OVER",
                        "live": false,
                        "marketKey": "ZT0J-zern-MjWf",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.257Z",
                        "stats": {
                            "minPayout": 1.833333,
                            "maxPayout": 1.87
                        }
                    }
                ],
                "context": {
                    "marketKey": "ZT0J-zern-MjWf",
                    "marketType": "POINT_TOTAL",
                    "marketSegment": "PERIOD_2",
                    "eventKey": "NOOz-zerd-Sf3r",
                    "eventSport": "ICE_HOCKEY",
                    "eventName": "Colorado Avalanche @ Dallas Stars",
                    "eventStartTime": "2025-04-20T00:40:00.000Z",
                    "eventHomeParticipantKey": "FVI6-wddv-FBYa",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Dallas Stars",
                            "key": "FVI6-wddv-FBYa",
                            "shortName": "DAL",
                            "slug": "dallas-stars",
                            "sport": "ICE_HOCKEY"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Colorado Avalanche",
                            "key": "UtU0-wddv-lD6J",
                            "shortName": "COL",
                            "slug": "colorado-avalanche",
                            "sport": "ICE_HOCKEY"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 National Hockey League",
                    "competitionInstanceKey": "g0P0-yiqv-FKyR",
                    "competitionName": "National Hockey League",
                    "competitionShortName": "NHL",
                    "competitionKey": "384d-wddv-w6oc",
                    "previousModifier": 1.5
                }
            },
            {
                "type": "MODIFIER_INCREASE",
                "value": 0.5,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 2,
                        "payout": 1.625,
                        "source": "BOVADA",
                        "type": "UNDER",
                        "live": false,
                        "marketKey": "ZT0J-zern-MjWf",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.257Z",
                        "stats": {
                            "minPayout": 1.833333,
                            "maxPayout": 1.87
                        }
                    }
                ],
                "context": {
                    "marketKey": "ZT0J-zern-MjWf",
                    "marketType": "POINT_TOTAL",
                    "marketSegment": "PERIOD_2",
                    "eventKey": "NOOz-zerd-Sf3r",
                    "eventSport": "ICE_HOCKEY",
                    "eventName": "Colorado Avalanche @ Dallas Stars",
                    "eventStartTime": "2025-04-20T00:40:00.000Z",
                    "eventHomeParticipantKey": "FVI6-wddv-FBYa",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Dallas Stars",
                            "key": "FVI6-wddv-FBYa",
                            "shortName": "DAL",
                            "slug": "dallas-stars",
                            "sport": "ICE_HOCKEY"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Colorado Avalanche",
                            "key": "UtU0-wddv-lD6J",
                            "shortName": "COL",
                            "slug": "colorado-avalanche",
                            "sport": "ICE_HOCKEY"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 National Hockey League",
                    "competitionInstanceKey": "g0P0-yiqv-FKyR",
                    "competitionName": "National Hockey League",
                    "competitionShortName": "NHL",
                    "competitionKey": "384d-wddv-w6oc",
                    "previousModifier": 1.5
                }
            },
            {
                "type": "MODIFIER_INCREASE",
                "value": 0.5,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 9,
                        "payout": 2,
                        "source": "FANATICS",
                        "type": "OVER",
                        "live": false,
                        "marketKey": "bOzv-zers-LjiK",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.287Z",
                        "stats": {
                            "minPayout": 1.92,
                            "maxPayout": 1.92
                        }
                    }
                ],
                "context": {
                    "marketKey": "bOzv-zers-LjiK",
                    "marketType": "POINT_TOTAL",
                    "marketSegment": "FULL_MATCH",
                    "eventKey": "wYI2-zers-BnaI",
                    "eventSport": "BASEBALL",
                    "eventName": "Cleveland Guardians @ Pittsburgh Pirates",
                    "eventStartTime": "2025-04-18T22:41:00.000Z",
                    "eventHomeParticipantKey": "wuJg-wegw-q73i",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Cleveland Guardians",
                            "key": "L0aT-wegw-p0im",
                            "shortName": "CLE",
                            "slug": "cleveland-indians",
                            "sport": "BASEBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Pittsburgh Pirates",
                            "key": "wuJg-wegw-q73i",
                            "shortName": "PIT",
                            "slug": "pittsburgh-pirates",
                            "sport": "BASEBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 Major League Baseball",
                    "competitionInstanceKey": "9Jss-zcjh-iOl3",
                    "competitionName": "Major League Baseball",
                    "competitionShortName": "MLB",
                    "competitionKey": "qK0E-wddv-bFet",
                    "previousModifier": 8.5
                }
            },
            {
                "type": "MODIFIER_INCREASE",
                "value": 0.5,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 9,
                        "payout": 1.83,
                        "source": "FANATICS",
                        "type": "UNDER",
                        "live": false,
                        "marketKey": "bOzv-zers-LjiK",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.287Z",
                        "stats": {
                            "minPayout": 1.92,
                            "maxPayout": 1.92
                        }
                    }
                ],
                "context": {
                    "marketKey": "bOzv-zers-LjiK",
                    "marketType": "POINT_TOTAL",
                    "marketSegment": "FULL_MATCH",
                    "eventKey": "wYI2-zers-BnaI",
                    "eventSport": "BASEBALL",
                    "eventName": "Cleveland Guardians @ Pittsburgh Pirates",
                    "eventStartTime": "2025-04-18T22:41:00.000Z",
                    "eventHomeParticipantKey": "wuJg-wegw-q73i",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Cleveland Guardians",
                            "key": "L0aT-wegw-p0im",
                            "shortName": "CLE",
                            "slug": "cleveland-indians",
                            "sport": "BASEBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Pittsburgh Pirates",
                            "key": "wuJg-wegw-q73i",
                            "shortName": "PIT",
                            "slug": "pittsburgh-pirates",
                            "sport": "BASEBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 Major League Baseball",
                    "competitionInstanceKey": "9Jss-zcjh-iOl3",
                    "competitionName": "Major League Baseball",
                    "competitionShortName": "MLB",
                    "competitionKey": "qK0E-wddv-bFet",
                    "previousModifier": 8.5
                }
            },
            {
                "type": "MODIFIER_INCREASE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 45.5,
                        "payout": 1.869565,
                        "source": "DRAFT_KINGS",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "e5uc-zeie-WLC8",
                        "participantKey": "7Jpf-xbdu-9NrH",
                        "time": "2025-04-18T02:29:00.271Z",
                        "stats": {
                            "minPayout": 1.9,
                            "maxPayout": 1.9
                        }
                    }
                ],
                "context": {
                    "marketKey": "e5uc-zeie-WLC8",
                    "marketType": "POINT_SPREAD",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "m1z2-zeie-Xe3H",
                    "eventSport": "AUSTRALIAN_RULES_FOOTBALL",
                    "eventName": "Gold Coast Suns @ Richmond",
                    "eventStartTime": "2025-04-19T09:35:00.000Z",
                    "eventHomeParticipantKey": "7Jpf-xbdu-9NrH",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Richmond",
                            "key": "7Jpf-xbdu-9NrH",
                            "shortName": "RIC",
                            "slug": "richmond",
                            "sport": "AUSTRALIAN_RULES_FOOTBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Gold Coast Suns",
                            "key": "76J7-xbdu-hQQe",
                            "shortName": "GCS",
                            "slug": "gold-coast-suns",
                            "sport": "AUSTRALIAN_RULES_FOOTBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 Australian Football League",
                    "competitionInstanceKey": "6dBj-ykzc-cMtp",
                    "competitionName": "Australian Football League",
                    "competitionShortName": "AFL",
                    "competitionKey": "jcKL-xbdu-POdB",
                    "previousModifier": 44.5
                }
            },
            {
                "type": "MODIFIER_INCREASE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 26.5,
                        "payout": 1.909091,
                        "source": "DRAFT_KINGS",
                        "type": "OVER",
                        "live": false,
                        "marketKey": "e9l0-zerc-ha51",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.274Z",
                        "stats": {
                            "minPayout": 1.87,
                            "maxPayout": 1.87
                        }
                    }
                ],
                "context": {
                    "marketKey": "e9l0-zerc-ha51",
                    "marketType": "INDIVIDUAL_POINT_TOTAL",
                    "marketSegment": "FULL_MATCH",
                    "marketParticipant": {
                        "category": "MENS_PROFESSIONAL",
                        "name": "Tyler Herro",
                        "key": "wDr5-ycAk-nNs5",
                        "shortName": "T. Herro",
                        "slug": "tyler-herro",
                        "sport": "BASKETBALL"
                    },
                    "eventKey": "BsiB-zerb-sFT3",
                    "eventSport": "BASKETBALL",
                    "eventName": "Miami Heat @ Atlanta Hawks",
                    "eventStartTime": "2025-04-18T23:10:00.000Z",
                    "eventHomeParticipantKey": "0Ch7-wddv-OrXs",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Atlanta Hawks",
                            "key": "0Ch7-wddv-OrXs",
                            "shortName": "ATL",
                            "slug": "atlanta-hawks",
                            "sport": "BASKETBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Miami Heat",
                            "key": "biYO-wddv-j7OK",
                            "shortName": "MIA",
                            "slug": "miami-heat",
                            "sport": "BASKETBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 National Basketball Association",
                    "competitionInstanceKey": "g4sK-yinv-Lczx",
                    "competitionName": "National Basketball Association",
                    "competitionShortName": "NBA",
                    "competitionKey": "d791-wddv-30fU",
                    "previousModifier": 25.5
                }
            },
            {
                "type": "MODIFIER_INCREASE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 26.5,
                        "payout": 1.833333,
                        "source": "DRAFT_KINGS",
                        "type": "UNDER",
                        "live": false,
                        "marketKey": "e9l0-zerc-ha51",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.274Z",
                        "stats": {
                            "minPayout": 1.87,
                            "maxPayout": 1.87
                        }
                    }
                ],
                "context": {
                    "marketKey": "e9l0-zerc-ha51",
                    "marketType": "INDIVIDUAL_POINT_TOTAL",
                    "marketSegment": "FULL_MATCH",
                    "marketParticipant": {
                        "category": "MENS_PROFESSIONAL",
                        "name": "Tyler Herro",
                        "key": "wDr5-ycAk-nNs5",
                        "shortName": "T. Herro",
                        "slug": "tyler-herro",
                        "sport": "BASKETBALL"
                    },
                    "eventKey": "BsiB-zerb-sFT3",
                    "eventSport": "BASKETBALL",
                    "eventName": "Miami Heat @ Atlanta Hawks",
                    "eventStartTime": "2025-04-18T23:10:00.000Z",
                    "eventHomeParticipantKey": "0Ch7-wddv-OrXs",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Atlanta Hawks",
                            "key": "0Ch7-wddv-OrXs",
                            "shortName": "ATL",
                            "slug": "atlanta-hawks",
                            "sport": "BASKETBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Miami Heat",
                            "key": "biYO-wddv-j7OK",
                            "shortName": "MIA",
                            "slug": "miami-heat",
                            "sport": "BASKETBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 National Basketball Association",
                    "competitionInstanceKey": "g4sK-yinv-Lczx",
                    "competitionName": "National Basketball Association",
                    "competitionShortName": "NBA",
                    "competitionKey": "d791-wddv-30fU",
                    "previousModifier": 25.5
                }
            },
            {
                "type": "MODIFIER_INCREASE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 11.5,
                        "payout": 2,
                        "source": "DRAFT_KINGS",
                        "type": "OVER",
                        "live": false,
                        "marketKey": "jxxU-zerf-FuOx",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.274Z",
                        "stats": {
                            "minPayout": 1.909091,
                            "maxPayout": 2
                        }
                    }
                ],
                "context": {
                    "marketKey": "jxxU-zerf-FuOx",
                    "marketType": "INDIVIDUAL_POINT_TOTAL",
                    "marketSegment": "FULL_MATCH",
                    "marketParticipant": {
                        "category": "MENS_PROFESSIONAL",
                        "name": "Zach Edey",
                        "key": "okNB-ykqv-rBEH",
                        "shortName": "Z. Edey",
                        "slug": "zach-edey",
                        "sport": "BASKETBALL"
                    },
                    "eventKey": "PFtw-zere-ntHf",
                    "eventSport": "BASKETBALL",
                    "eventName": "Dallas Mavericks @ Memphis Grizzlies",
                    "eventStartTime": "2025-04-19T01:40:00.000Z",
                    "eventHomeParticipantKey": "FQsn-wddv-gGK3",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Dallas Mavericks",
                            "key": "BEYT-wddv-Yfd3",
                            "shortName": "DAL",
                            "slug": "dallas-mavericks",
                            "sport": "BASKETBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Memphis Grizzlies",
                            "key": "FQsn-wddv-gGK3",
                            "shortName": "MEM",
                            "slug": "memphis-grizzlies",
                            "sport": "BASKETBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 National Basketball Association",
                    "competitionInstanceKey": "g4sK-yinv-Lczx",
                    "competitionName": "National Basketball Association",
                    "competitionShortName": "NBA",
                    "competitionKey": "d791-wddv-30fU",
                    "previousModifier": 10.5
                }
            },
            {
                "type": "MODIFIER_INCREASE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 11.5,
                        "payout": 1.769231,
                        "source": "DRAFT_KINGS",
                        "type": "UNDER",
                        "live": false,
                        "marketKey": "jxxU-zerf-FuOx",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.274Z",
                        "stats": {
                            "minPayout": 1.909091,
                            "maxPayout": 2
                        }
                    }
                ],
                "context": {
                    "marketKey": "jxxU-zerf-FuOx",
                    "marketType": "INDIVIDUAL_POINT_TOTAL",
                    "marketSegment": "FULL_MATCH",
                    "marketParticipant": {
                        "category": "MENS_PROFESSIONAL",
                        "name": "Zach Edey",
                        "key": "okNB-ykqv-rBEH",
                        "shortName": "Z. Edey",
                        "slug": "zach-edey",
                        "sport": "BASKETBALL"
                    },
                    "eventKey": "PFtw-zere-ntHf",
                    "eventSport": "BASKETBALL",
                    "eventName": "Dallas Mavericks @ Memphis Grizzlies",
                    "eventStartTime": "2025-04-19T01:40:00.000Z",
                    "eventHomeParticipantKey": "FQsn-wddv-gGK3",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Dallas Mavericks",
                            "key": "BEYT-wddv-Yfd3",
                            "shortName": "DAL",
                            "slug": "dallas-mavericks",
                            "sport": "BASKETBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Memphis Grizzlies",
                            "key": "FQsn-wddv-gGK3",
                            "shortName": "MEM",
                            "slug": "memphis-grizzlies",
                            "sport": "BASKETBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 National Basketball Association",
                    "competitionInstanceKey": "g4sK-yinv-Lczx",
                    "competitionName": "National Basketball Association",
                    "competitionShortName": "NBA",
                    "competitionKey": "d791-wddv-30fU",
                    "previousModifier": 10.5
                }
            },
            {
                "type": "MODIFIER_INCREASE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 56.5,
                        "payout": 2,
                        "source": "DRAFT_KINGS",
                        "type": "OVER",
                        "live": false,
                        "marketKey": "kH4K-zero-LOlD",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.274Z",
                        "stats": {
                            "minPayout": 1.909091,
                            "maxPayout": 1.909091
                        }
                    }
                ],
                "context": {
                    "marketKey": "kH4K-zero-LOlD",
                    "marketType": "POINT_TOTAL",
                    "marketSegment": "QUARTER_1",
                    "eventKey": "BsiB-zerb-sFT3",
                    "eventSport": "BASKETBALL",
                    "eventName": "Miami Heat @ Atlanta Hawks",
                    "eventStartTime": "2025-04-18T23:10:00.000Z",
                    "eventHomeParticipantKey": "0Ch7-wddv-OrXs",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Atlanta Hawks",
                            "key": "0Ch7-wddv-OrXs",
                            "shortName": "ATL",
                            "slug": "atlanta-hawks",
                            "sport": "BASKETBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Miami Heat",
                            "key": "biYO-wddv-j7OK",
                            "shortName": "MIA",
                            "slug": "miami-heat",
                            "sport": "BASKETBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 National Basketball Association",
                    "competitionInstanceKey": "g4sK-yinv-Lczx",
                    "competitionName": "National Basketball Association",
                    "competitionShortName": "NBA",
                    "competitionKey": "d791-wddv-30fU",
                    "previousModifier": 55.5
                }
            },
            {
                "type": "MODIFIER_INCREASE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 56.5,
                        "payout": 1.833333,
                        "source": "DRAFT_KINGS",
                        "type": "UNDER",
                        "live": false,
                        "marketKey": "kH4K-zero-LOlD",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.274Z",
                        "stats": {
                            "minPayout": 1.909091,
                            "maxPayout": 1.909091
                        }
                    }
                ],
                "context": {
                    "marketKey": "kH4K-zero-LOlD",
                    "marketType": "POINT_TOTAL",
                    "marketSegment": "QUARTER_1",
                    "eventKey": "BsiB-zerb-sFT3",
                    "eventSport": "BASKETBALL",
                    "eventName": "Miami Heat @ Atlanta Hawks",
                    "eventStartTime": "2025-04-18T23:10:00.000Z",
                    "eventHomeParticipantKey": "0Ch7-wddv-OrXs",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Atlanta Hawks",
                            "key": "0Ch7-wddv-OrXs",
                            "shortName": "ATL",
                            "slug": "atlanta-hawks",
                            "sport": "BASKETBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Miami Heat",
                            "key": "biYO-wddv-j7OK",
                            "shortName": "MIA",
                            "slug": "miami-heat",
                            "sport": "BASKETBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 National Basketball Association",
                    "competitionInstanceKey": "g4sK-yinv-Lczx",
                    "competitionName": "National Basketball Association",
                    "competitionShortName": "NBA",
                    "competitionKey": "d791-wddv-30fU",
                    "previousModifier": 55.5
                }
            },
            {
                "type": "MODIFIER_INCREASE",
                "value": 0.5,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 1,
                        "payout": 1.741,
                        "source": "BOVADA",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "lX4L-zerx-Mal6",
                        "participantKey": "7eOD-wegw-VR1e",
                        "time": "2025-04-18T02:29:00.254Z",
                        "stats": {
                            "minPayout": 1.61,
                            "maxPayout": 1.61
                        }
                    }
                ],
                "context": {
                    "marketKey": "lX4L-zerx-Mal6",
                    "marketType": "POINT_SPREAD",
                    "marketSegment": "FIRST_5_INNINGS",
                    "eventKey": "fGWY-zers-TGcJ",
                    "eventSport": "BASEBALL",
                    "eventName": "Miami Marlins @ Philadelphia Phillies",
                    "eventStartTime": "2025-04-18T22:46:00.000Z",
                    "eventHomeParticipantKey": "farj-wegw-apsI",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Miami Marlins",
                            "key": "7eOD-wegw-VR1e",
                            "shortName": "MIA",
                            "slug": "miami-marlins",
                            "sport": "BASEBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Philadelphia Phillies",
                            "key": "farj-wegw-apsI",
                            "shortName": "PHI",
                            "slug": "philadelphia-phillies",
                            "sport": "BASEBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 Major League Baseball",
                    "competitionInstanceKey": "9Jss-zcjh-iOl3",
                    "competitionName": "Major League Baseball",
                    "competitionShortName": "MLB",
                    "competitionKey": "qK0E-wddv-bFet",
                    "previousModifier": 0.5
                }
            },
            {
                "type": "MODIFIER_INCREASE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 168.5,
                        "payout": 1.869565,
                        "source": "DRAFT_KINGS",
                        "type": "OVER",
                        "live": false,
                        "marketKey": "laAF-zeoh-HroC",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.271Z",
                        "stats": {
                            "minPayout": 1.909091,
                            "maxPayout": 1.909091
                        }
                    }
                ],
                "context": {
                    "marketKey": "laAF-zeoh-HroC",
                    "marketType": "POINT_TOTAL",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "bznm-zeie-azwa",
                    "eventSport": "AUSTRALIAN_RULES_FOOTBALL",
                    "eventName": "Fremantle @ Melbourne",
                    "eventStartTime": "2025-04-19T03:20:00.000Z",
                    "eventHomeParticipantKey": "9WXU-xbdu-LejR",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Fremantle",
                            "key": "JKJb-xbdu-QVFM",
                            "shortName": "FRE",
                            "slug": "fremantle",
                            "sport": "AUSTRALIAN_RULES_FOOTBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Melbourne",
                            "key": "9WXU-xbdu-LejR",
                            "shortName": "MEL",
                            "slug": "melbourne",
                            "sport": "AUSTRALIAN_RULES_FOOTBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 Australian Football League",
                    "competitionInstanceKey": "6dBj-ykzc-cMtp",
                    "competitionName": "Australian Football League",
                    "competitionShortName": "AFL",
                    "competitionKey": "jcKL-xbdu-POdB",
                    "previousModifier": 167.5
                }
            },
            {
                "type": "MODIFIER_INCREASE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 168.5,
                        "payout": 1.909091,
                        "source": "DRAFT_KINGS",
                        "type": "UNDER",
                        "live": false,
                        "marketKey": "laAF-zeoh-HroC",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.271Z",
                        "stats": {
                            "minPayout": 1.909091,
                            "maxPayout": 1.909091
                        }
                    }
                ],
                "context": {
                    "marketKey": "laAF-zeoh-HroC",
                    "marketType": "POINT_TOTAL",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "bznm-zeie-azwa",
                    "eventSport": "AUSTRALIAN_RULES_FOOTBALL",
                    "eventName": "Fremantle @ Melbourne",
                    "eventStartTime": "2025-04-19T03:20:00.000Z",
                    "eventHomeParticipantKey": "9WXU-xbdu-LejR",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Fremantle",
                            "key": "JKJb-xbdu-QVFM",
                            "shortName": "FRE",
                            "slug": "fremantle",
                            "sport": "AUSTRALIAN_RULES_FOOTBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Melbourne",
                            "key": "9WXU-xbdu-LejR",
                            "shortName": "MEL",
                            "slug": "melbourne",
                            "sport": "AUSTRALIAN_RULES_FOOTBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 Australian Football League",
                    "competitionInstanceKey": "6dBj-ykzc-cMtp",
                    "competitionName": "Australian Football League",
                    "competitionShortName": "AFL",
                    "competitionKey": "jcKL-xbdu-POdB",
                    "previousModifier": 167.5
                }
            },
            {
                "type": "MODIFIER_INCREASE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 9.5,
                        "payout": 2,
                        "source": "DRAFT_KINGS",
                        "type": "OVER",
                        "live": false,
                        "marketKey": "oHNl-zerc-0z62",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.274Z",
                        "stats": {
                            "minPayout": 1.769231,
                            "maxPayout": 1.769231
                        }
                    }
                ],
                "context": {
                    "marketKey": "oHNl-zerc-0z62",
                    "marketType": "INDIVIDUAL_POINT_TOTAL",
                    "marketSegment": "FULL_MATCH",
                    "marketParticipant": {
                        "category": "MENS_PROFESSIONAL",
                        "name": "Kel'el Ware",
                        "key": "tKgT-ykqv-Lthe",
                        "shortName": "K. Ware",
                        "slug": "kelel-ware",
                        "sport": "BASKETBALL"
                    },
                    "eventKey": "BsiB-zerb-sFT3",
                    "eventSport": "BASKETBALL",
                    "eventName": "Miami Heat @ Atlanta Hawks",
                    "eventStartTime": "2025-04-18T23:10:00.000Z",
                    "eventHomeParticipantKey": "0Ch7-wddv-OrXs",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Atlanta Hawks",
                            "key": "0Ch7-wddv-OrXs",
                            "shortName": "ATL",
                            "slug": "atlanta-hawks",
                            "sport": "BASKETBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Miami Heat",
                            "key": "biYO-wddv-j7OK",
                            "shortName": "MIA",
                            "slug": "miami-heat",
                            "sport": "BASKETBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 National Basketball Association",
                    "competitionInstanceKey": "g4sK-yinv-Lczx",
                    "competitionName": "National Basketball Association",
                    "competitionShortName": "NBA",
                    "competitionKey": "d791-wddv-30fU",
                    "previousModifier": 8.5
                }
            },
            {
                "type": "MODIFIER_INCREASE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 9.5,
                        "payout": 1.769231,
                        "source": "DRAFT_KINGS",
                        "type": "UNDER",
                        "live": false,
                        "marketKey": "oHNl-zerc-0z62",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.274Z",
                        "stats": {
                            "minPayout": 1.769231,
                            "maxPayout": 1.769231
                        }
                    }
                ],
                "context": {
                    "marketKey": "oHNl-zerc-0z62",
                    "marketType": "INDIVIDUAL_POINT_TOTAL",
                    "marketSegment": "FULL_MATCH",
                    "marketParticipant": {
                        "category": "MENS_PROFESSIONAL",
                        "name": "Kel'el Ware",
                        "key": "tKgT-ykqv-Lthe",
                        "shortName": "K. Ware",
                        "slug": "kelel-ware",
                        "sport": "BASKETBALL"
                    },
                    "eventKey": "BsiB-zerb-sFT3",
                    "eventSport": "BASKETBALL",
                    "eventName": "Miami Heat @ Atlanta Hawks",
                    "eventStartTime": "2025-04-18T23:10:00.000Z",
                    "eventHomeParticipantKey": "0Ch7-wddv-OrXs",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Atlanta Hawks",
                            "key": "0Ch7-wddv-OrXs",
                            "shortName": "ATL",
                            "slug": "atlanta-hawks",
                            "sport": "BASKETBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Miami Heat",
                            "key": "biYO-wddv-j7OK",
                            "shortName": "MIA",
                            "slug": "miami-heat",
                            "sport": "BASKETBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 National Basketball Association",
                    "competitionInstanceKey": "g4sK-yinv-Lczx",
                    "competitionName": "National Basketball Association",
                    "competitionShortName": "NBA",
                    "competitionKey": "d791-wddv-30fU",
                    "previousModifier": 8.5
                }
            },
            {
                "type": "MODIFIER_INCREASE",
                "value": 0.5,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 6,
                        "payout": 2,
                        "source": "BOVADA",
                        "type": "OVER",
                        "live": false,
                        "marketKey": "ptQI-zerd-6Jsr",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.257Z",
                        "stats": {
                            "minPayout": 1.87,
                            "maxPayout": 1.87
                        }
                    }
                ],
                "context": {
                    "marketKey": "ptQI-zerd-6Jsr",
                    "marketType": "POINT_TOTAL",
                    "marketSegment": "FULL_MATCH",
                    "eventKey": "NOOz-zerd-Sf3r",
                    "eventSport": "ICE_HOCKEY",
                    "eventName": "Colorado Avalanche @ Dallas Stars",
                    "eventStartTime": "2025-04-20T00:40:00.000Z",
                    "eventHomeParticipantKey": "FVI6-wddv-FBYa",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Dallas Stars",
                            "key": "FVI6-wddv-FBYa",
                            "shortName": "DAL",
                            "slug": "dallas-stars",
                            "sport": "ICE_HOCKEY"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Colorado Avalanche",
                            "key": "UtU0-wddv-lD6J",
                            "shortName": "COL",
                            "slug": "colorado-avalanche",
                            "sport": "ICE_HOCKEY"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 National Hockey League",
                    "competitionInstanceKey": "g0P0-yiqv-FKyR",
                    "competitionName": "National Hockey League",
                    "competitionShortName": "NHL",
                    "competitionKey": "384d-wddv-w6oc",
                    "previousModifier": 5.5
                }
            },
            {
                "type": "MODIFIER_INCREASE",
                "value": 0.5,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 6,
                        "payout": 1.833333,
                        "source": "BOVADA",
                        "type": "UNDER",
                        "live": false,
                        "marketKey": "ptQI-zerd-6Jsr",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.257Z",
                        "stats": {
                            "minPayout": 1.87,
                            "maxPayout": 1.87
                        }
                    }
                ],
                "context": {
                    "marketKey": "ptQI-zerd-6Jsr",
                    "marketType": "POINT_TOTAL",
                    "marketSegment": "FULL_MATCH",
                    "eventKey": "NOOz-zerd-Sf3r",
                    "eventSport": "ICE_HOCKEY",
                    "eventName": "Colorado Avalanche @ Dallas Stars",
                    "eventStartTime": "2025-04-20T00:40:00.000Z",
                    "eventHomeParticipantKey": "FVI6-wddv-FBYa",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Dallas Stars",
                            "key": "FVI6-wddv-FBYa",
                            "shortName": "DAL",
                            "slug": "dallas-stars",
                            "sport": "ICE_HOCKEY"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Colorado Avalanche",
                            "key": "UtU0-wddv-lD6J",
                            "shortName": "COL",
                            "slug": "colorado-avalanche",
                            "sport": "ICE_HOCKEY"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 National Hockey League",
                    "competitionInstanceKey": "g0P0-yiqv-FKyR",
                    "competitionName": "National Hockey League",
                    "competitionShortName": "NHL",
                    "competitionKey": "384d-wddv-w6oc",
                    "previousModifier": 5.5
                }
            },
            {
                "type": "MODIFIER_INCREASE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 11.5,
                        "payout": 2,
                        "source": "DRAFT_KINGS",
                        "type": "OVER",
                        "live": false,
                        "marketKey": "q1it-zerf-XUnF",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.274Z",
                        "stats": {
                            "minPayout": 1.909091,
                            "maxPayout": 2
                        }
                    }
                ],
                "context": {
                    "marketKey": "q1it-zerf-XUnF",
                    "marketType": "INDIVIDUAL_POINT_TOTAL",
                    "marketSegment": "FULL_MATCH",
                    "marketParticipant": {
                        "category": "MENS_PROFESSIONAL",
                        "name": "Scotty Pippen Jr.",
                        "key": "8ObT-ycAk-Wm1D",
                        "shortName": "S. Pippen Jr.",
                        "slug": "scotty-pippen-jr",
                        "sport": "BASKETBALL"
                    },
                    "eventKey": "PFtw-zere-ntHf",
                    "eventSport": "BASKETBALL",
                    "eventName": "Dallas Mavericks @ Memphis Grizzlies",
                    "eventStartTime": "2025-04-19T01:40:00.000Z",
                    "eventHomeParticipantKey": "FQsn-wddv-gGK3",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Dallas Mavericks",
                            "key": "BEYT-wddv-Yfd3",
                            "shortName": "DAL",
                            "slug": "dallas-mavericks",
                            "sport": "BASKETBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Memphis Grizzlies",
                            "key": "FQsn-wddv-gGK3",
                            "shortName": "MEM",
                            "slug": "memphis-grizzlies",
                            "sport": "BASKETBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 National Basketball Association",
                    "competitionInstanceKey": "g4sK-yinv-Lczx",
                    "competitionName": "National Basketball Association",
                    "competitionShortName": "NBA",
                    "competitionKey": "d791-wddv-30fU",
                    "previousModifier": 10.5
                }
            },
            {
                "type": "MODIFIER_INCREASE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 11.5,
                        "payout": 1.769231,
                        "source": "DRAFT_KINGS",
                        "type": "UNDER",
                        "live": false,
                        "marketKey": "q1it-zerf-XUnF",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.274Z",
                        "stats": {
                            "minPayout": 1.909091,
                            "maxPayout": 2
                        }
                    }
                ],
                "context": {
                    "marketKey": "q1it-zerf-XUnF",
                    "marketType": "INDIVIDUAL_POINT_TOTAL",
                    "marketSegment": "FULL_MATCH",
                    "marketParticipant": {
                        "category": "MENS_PROFESSIONAL",
                        "name": "Scotty Pippen Jr.",
                        "key": "8ObT-ycAk-Wm1D",
                        "shortName": "S. Pippen Jr.",
                        "slug": "scotty-pippen-jr",
                        "sport": "BASKETBALL"
                    },
                    "eventKey": "PFtw-zere-ntHf",
                    "eventSport": "BASKETBALL",
                    "eventName": "Dallas Mavericks @ Memphis Grizzlies",
                    "eventStartTime": "2025-04-19T01:40:00.000Z",
                    "eventHomeParticipantKey": "FQsn-wddv-gGK3",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Dallas Mavericks",
                            "key": "BEYT-wddv-Yfd3",
                            "shortName": "DAL",
                            "slug": "dallas-mavericks",
                            "sport": "BASKETBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Memphis Grizzlies",
                            "key": "FQsn-wddv-gGK3",
                            "shortName": "MEM",
                            "slug": "memphis-grizzlies",
                            "sport": "BASKETBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 National Basketball Association",
                    "competitionInstanceKey": "g4sK-yinv-Lczx",
                    "competitionName": "National Basketball Association",
                    "competitionShortName": "NBA",
                    "competitionKey": "d791-wddv-30fU",
                    "previousModifier": 10.5
                }
            },
            {
                "type": "MODIFIER_INCREASE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 7.5,
                        "payout": 1.952381,
                        "source": "DRAFT_KINGS",
                        "type": "OVER",
                        "live": false,
                        "marketKey": "tNzI-zerm-35hX",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.274Z",
                        "stats": {
                            "minPayout": 1.91,
                            "maxPayout": 1.91
                        }
                    }
                ],
                "context": {
                    "marketKey": "tNzI-zerm-35hX",
                    "marketType": "INDIVIDUAL_POINT_TOTAL",
                    "marketSegment": "FULL_MATCH",
                    "marketParticipant": {
                        "category": "MENS_PROFESSIONAL",
                        "name": "Duncan Robinson",
                        "key": "pCmL-ycAk-0mSj",
                        "shortName": "D. Robinson",
                        "slug": "duncan-robinson",
                        "sport": "BASKETBALL"
                    },
                    "eventKey": "BsiB-zerb-sFT3",
                    "eventSport": "BASKETBALL",
                    "eventName": "Miami Heat @ Atlanta Hawks",
                    "eventStartTime": "2025-04-18T23:10:00.000Z",
                    "eventHomeParticipantKey": "0Ch7-wddv-OrXs",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Atlanta Hawks",
                            "key": "0Ch7-wddv-OrXs",
                            "shortName": "ATL",
                            "slug": "atlanta-hawks",
                            "sport": "BASKETBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Miami Heat",
                            "key": "biYO-wddv-j7OK",
                            "shortName": "MIA",
                            "slug": "miami-heat",
                            "sport": "BASKETBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 National Basketball Association",
                    "competitionInstanceKey": "g4sK-yinv-Lczx",
                    "competitionName": "National Basketball Association",
                    "competitionShortName": "NBA",
                    "competitionKey": "d791-wddv-30fU",
                    "previousModifier": 6.5
                }
            },
            {
                "type": "MODIFIER_INCREASE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 7.5,
                        "payout": 1.8,
                        "source": "DRAFT_KINGS",
                        "type": "UNDER",
                        "live": false,
                        "marketKey": "tNzI-zerm-35hX",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.274Z",
                        "stats": {
                            "minPayout": 1.91,
                            "maxPayout": 1.91
                        }
                    }
                ],
                "context": {
                    "marketKey": "tNzI-zerm-35hX",
                    "marketType": "INDIVIDUAL_POINT_TOTAL",
                    "marketSegment": "FULL_MATCH",
                    "marketParticipant": {
                        "category": "MENS_PROFESSIONAL",
                        "name": "Duncan Robinson",
                        "key": "pCmL-ycAk-0mSj",
                        "shortName": "D. Robinson",
                        "slug": "duncan-robinson",
                        "sport": "BASKETBALL"
                    },
                    "eventKey": "BsiB-zerb-sFT3",
                    "eventSport": "BASKETBALL",
                    "eventName": "Miami Heat @ Atlanta Hawks",
                    "eventStartTime": "2025-04-18T23:10:00.000Z",
                    "eventHomeParticipantKey": "0Ch7-wddv-OrXs",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Atlanta Hawks",
                            "key": "0Ch7-wddv-OrXs",
                            "shortName": "ATL",
                            "slug": "atlanta-hawks",
                            "sport": "BASKETBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Miami Heat",
                            "key": "biYO-wddv-j7OK",
                            "shortName": "MIA",
                            "slug": "miami-heat",
                            "sport": "BASKETBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 National Basketball Association",
                    "competitionInstanceKey": "g4sK-yinv-Lczx",
                    "competitionName": "National Basketball Association",
                    "competitionShortName": "NBA",
                    "competitionKey": "d791-wddv-30fU",
                    "previousModifier": 6.5
                }
            },
            {
                "type": "MODIFIER_INCREASE",
                "value": 0.5,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 8,
                        "payout": 1.95,
                        "source": "FAN_DUEL",
                        "type": "OVER",
                        "live": false,
                        "marketKey": "trzV-zers-EFNV",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.287Z",
                        "stats": {
                            "minPayout": 2.07,
                            "maxPayout": 2.07
                        }
                    }
                ],
                "context": {
                    "marketKey": "trzV-zers-EFNV",
                    "marketType": "POINT_TOTAL",
                    "marketSegment": "FULL_MATCH",
                    "eventKey": "8NGc-zers-gdWU",
                    "eventSport": "BASEBALL",
                    "eventName": "Athletics @ Milwaukee Brewers",
                    "eventStartTime": "2025-04-19T00:11:00.000Z",
                    "eventHomeParticipantKey": "ma0w-wegw-z0u5",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Milwaukee Brewers",
                            "key": "ma0w-wegw-z0u5",
                            "shortName": "MIL",
                            "slug": "milwaukee-brewers",
                            "sport": "BASEBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Athletics",
                            "key": "UjjR-wegw-akZZ",
                            "shortName": "OAK",
                            "slug": "athletics",
                            "sport": "BASEBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 Major League Baseball",
                    "competitionInstanceKey": "9Jss-zcjh-iOl3",
                    "competitionName": "Major League Baseball",
                    "competitionShortName": "MLB",
                    "competitionKey": "qK0E-wddv-bFet",
                    "previousModifier": 7.5
                }
            },
            {
                "type": "MODIFIER_INCREASE",
                "value": 0.5,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 8,
                        "payout": 1.87,
                        "source": "FAN_DUEL",
                        "type": "UNDER",
                        "live": false,
                        "marketKey": "trzV-zers-EFNV",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.287Z",
                        "stats": {
                            "minPayout": 2.07,
                            "maxPayout": 2.07
                        }
                    }
                ],
                "context": {
                    "marketKey": "trzV-zers-EFNV",
                    "marketType": "POINT_TOTAL",
                    "marketSegment": "FULL_MATCH",
                    "eventKey": "8NGc-zers-gdWU",
                    "eventSport": "BASEBALL",
                    "eventName": "Athletics @ Milwaukee Brewers",
                    "eventStartTime": "2025-04-19T00:11:00.000Z",
                    "eventHomeParticipantKey": "ma0w-wegw-z0u5",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Milwaukee Brewers",
                            "key": "ma0w-wegw-z0u5",
                            "shortName": "MIL",
                            "slug": "milwaukee-brewers",
                            "sport": "BASEBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Athletics",
                            "key": "UjjR-wegw-akZZ",
                            "shortName": "OAK",
                            "slug": "athletics",
                            "sport": "BASEBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 Major League Baseball",
                    "competitionInstanceKey": "9Jss-zcjh-iOl3",
                    "competitionName": "Major League Baseball",
                    "competitionShortName": "MLB",
                    "competitionKey": "qK0E-wddv-bFet",
                    "previousModifier": 7.5
                }
            },
            {
                "type": "MODIFIER_INCREASE",
                "value": 0.5,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 8,
                        "payout": 1.91,
                        "source": "FANATICS",
                        "type": "OVER",
                        "live": false,
                        "marketKey": "trzV-zers-EFNV",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.287Z",
                        "stats": {
                            "minPayout": 2.07,
                            "maxPayout": 2.07
                        }
                    }
                ],
                "context": {
                    "marketKey": "trzV-zers-EFNV",
                    "marketType": "POINT_TOTAL",
                    "marketSegment": "FULL_MATCH",
                    "eventKey": "8NGc-zers-gdWU",
                    "eventSport": "BASEBALL",
                    "eventName": "Athletics @ Milwaukee Brewers",
                    "eventStartTime": "2025-04-19T00:11:00.000Z",
                    "eventHomeParticipantKey": "ma0w-wegw-z0u5",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Milwaukee Brewers",
                            "key": "ma0w-wegw-z0u5",
                            "shortName": "MIL",
                            "slug": "milwaukee-brewers",
                            "sport": "BASEBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Athletics",
                            "key": "UjjR-wegw-akZZ",
                            "shortName": "OAK",
                            "slug": "athletics",
                            "sport": "BASEBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 Major League Baseball",
                    "competitionInstanceKey": "9Jss-zcjh-iOl3",
                    "competitionName": "Major League Baseball",
                    "competitionShortName": "MLB",
                    "competitionKey": "qK0E-wddv-bFet",
                    "previousModifier": 7.5
                }
            },
            {
                "type": "MODIFIER_INCREASE",
                "value": 0.5,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 8,
                        "payout": 1.91,
                        "source": "FANATICS",
                        "type": "UNDER",
                        "live": false,
                        "marketKey": "trzV-zers-EFNV",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.287Z",
                        "stats": {
                            "minPayout": 2.07,
                            "maxPayout": 2.07
                        }
                    }
                ],
                "context": {
                    "marketKey": "trzV-zers-EFNV",
                    "marketType": "POINT_TOTAL",
                    "marketSegment": "FULL_MATCH",
                    "eventKey": "8NGc-zers-gdWU",
                    "eventSport": "BASEBALL",
                    "eventName": "Athletics @ Milwaukee Brewers",
                    "eventStartTime": "2025-04-19T00:11:00.000Z",
                    "eventHomeParticipantKey": "ma0w-wegw-z0u5",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Milwaukee Brewers",
                            "key": "ma0w-wegw-z0u5",
                            "shortName": "MIL",
                            "slug": "milwaukee-brewers",
                            "sport": "BASEBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Athletics",
                            "key": "UjjR-wegw-akZZ",
                            "shortName": "OAK",
                            "slug": "athletics",
                            "sport": "BASEBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 Major League Baseball",
                    "competitionInstanceKey": "9Jss-zcjh-iOl3",
                    "competitionName": "Major League Baseball",
                    "competitionShortName": "MLB",
                    "competitionKey": "qK0E-wddv-bFet",
                    "previousModifier": 7.5
                }
            },
            {
                "type": "MODIFIER_INCREASE",
                "value": 0.5,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 4.5,
                        "payout": 2,
                        "source": "BOVADA",
                        "type": "OVER",
                        "live": false,
                        "marketKey": "ydlK-zerx-BYsR",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.254Z",
                        "stats": {
                            "minPayout": 1.76923,
                            "maxPayout": 1.76923
                        }
                    }
                ],
                "context": {
                    "marketKey": "ydlK-zerx-BYsR",
                    "marketType": "POINT_TOTAL",
                    "marketSegment": "FIRST_5_INNINGS",
                    "eventKey": "8NGc-zers-gdWU",
                    "eventSport": "BASEBALL",
                    "eventName": "Athletics @ Milwaukee Brewers",
                    "eventStartTime": "2025-04-19T00:11:00.000Z",
                    "eventHomeParticipantKey": "ma0w-wegw-z0u5",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Milwaukee Brewers",
                            "key": "ma0w-wegw-z0u5",
                            "shortName": "MIL",
                            "slug": "milwaukee-brewers",
                            "sport": "BASEBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Athletics",
                            "key": "UjjR-wegw-akZZ",
                            "shortName": "OAK",
                            "slug": "athletics",
                            "sport": "BASEBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 Major League Baseball",
                    "competitionInstanceKey": "9Jss-zcjh-iOl3",
                    "competitionName": "Major League Baseball",
                    "competitionShortName": "MLB",
                    "competitionKey": "qK0E-wddv-bFet",
                    "previousModifier": 4
                }
            },
            {
                "type": "MODIFIER_INCREASE",
                "value": 0.5,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 4.5,
                        "payout": 1.76923,
                        "source": "BOVADA",
                        "type": "UNDER",
                        "live": false,
                        "marketKey": "ydlK-zerx-BYsR",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.254Z",
                        "stats": {
                            "minPayout": 1.76923,
                            "maxPayout": 1.76923
                        }
                    }
                ],
                "context": {
                    "marketKey": "ydlK-zerx-BYsR",
                    "marketType": "POINT_TOTAL",
                    "marketSegment": "FIRST_5_INNINGS",
                    "eventKey": "8NGc-zers-gdWU",
                    "eventSport": "BASEBALL",
                    "eventName": "Athletics @ Milwaukee Brewers",
                    "eventStartTime": "2025-04-19T00:11:00.000Z",
                    "eventHomeParticipantKey": "ma0w-wegw-z0u5",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Milwaukee Brewers",
                            "key": "ma0w-wegw-z0u5",
                            "shortName": "MIL",
                            "slug": "milwaukee-brewers",
                            "sport": "BASEBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Athletics",
                            "key": "UjjR-wegw-akZZ",
                            "shortName": "OAK",
                            "slug": "athletics",
                            "sport": "BASEBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 Major League Baseball",
                    "competitionInstanceKey": "9Jss-zcjh-iOl3",
                    "competitionName": "Major League Baseball",
                    "competitionShortName": "MLB",
                    "competitionKey": "qK0E-wddv-bFet",
                    "previousModifier": 4
                }
            }
        ],
        "MODIFIER_DECREASE": [
            {
                "type": "MODIFIER_DECREASE",
                "value": 2,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": -1,
                        "payout": 1.96,
                        "source": "BET_PARX",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "09tI-zerb-qX5s",
                        "participantKey": "biYO-wddv-j7OK",
                        "time": "2025-04-18T02:29:00.161Z",
                        "stats": {
                            "minPayout": 2.2,
                            "maxPayout": 2.2
                        }
                    }
                ],
                "context": {
                    "marketKey": "09tI-zerb-qX5s",
                    "marketType": "POINT_SPREAD",
                    "marketSegment": "FULL_MATCH",
                    "eventKey": "BsiB-zerb-sFT3",
                    "eventSport": "BASKETBALL",
                    "eventName": "Miami Heat @ Atlanta Hawks",
                    "eventStartTime": "2025-04-18T23:10:00.000Z",
                    "eventHomeParticipantKey": "0Ch7-wddv-OrXs",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Atlanta Hawks",
                            "key": "0Ch7-wddv-OrXs",
                            "shortName": "ATL",
                            "slug": "atlanta-hawks",
                            "sport": "BASKETBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Miami Heat",
                            "key": "biYO-wddv-j7OK",
                            "shortName": "MIA",
                            "slug": "miami-heat",
                            "sport": "BASKETBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 National Basketball Association",
                    "competitionInstanceKey": "g4sK-yinv-Lczx",
                    "competitionName": "National Basketball Association",
                    "competitionShortName": "NBA",
                    "competitionKey": "d791-wddv-30fU",
                    "previousModifier": 1
                }
            },
            {
                "type": "MODIFIER_DECREASE",
                "value": 2,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": -1,
                        "payout": 1.96,
                        "source": "BET_RIVERS",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "09tI-zerb-qX5s",
                        "participantKey": "biYO-wddv-j7OK",
                        "time": "2025-04-18T02:29:00.091Z",
                        "stats": {
                            "minPayout": 2.2,
                            "maxPayout": 2.2
                        }
                    }
                ],
                "context": {
                    "marketKey": "09tI-zerb-qX5s",
                    "marketType": "POINT_SPREAD",
                    "marketSegment": "FULL_MATCH",
                    "eventKey": "BsiB-zerb-sFT3",
                    "eventSport": "BASKETBALL",
                    "eventName": "Miami Heat @ Atlanta Hawks",
                    "eventStartTime": "2025-04-18T23:10:00.000Z",
                    "eventHomeParticipantKey": "0Ch7-wddv-OrXs",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Atlanta Hawks",
                            "key": "0Ch7-wddv-OrXs",
                            "shortName": "ATL",
                            "slug": "atlanta-hawks",
                            "sport": "BASKETBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Miami Heat",
                            "key": "biYO-wddv-j7OK",
                            "shortName": "MIA",
                            "slug": "miami-heat",
                            "sport": "BASKETBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 National Basketball Association",
                    "competitionInstanceKey": "g4sK-yinv-Lczx",
                    "competitionName": "National Basketball Association",
                    "competitionShortName": "NBA",
                    "competitionKey": "d791-wddv-30fU",
                    "previousModifier": 1
                }
            },
            {
                "type": "MODIFIER_DECREASE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 7.5,
                        "payout": 1.769231,
                        "source": "DRAFT_KINGS",
                        "type": "OVER",
                        "live": false,
                        "marketKey": "0Qps-zeqt-jqFI",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.274Z",
                        "stats": {
                            "minPayout": 1.91,
                            "maxPayout": 1.91
                        }
                    }
                ],
                "context": {
                    "marketKey": "0Qps-zeqt-jqFI",
                    "marketType": "INDIVIDUAL_POINT_TOTAL",
                    "marketSegment": "FULL_MATCH",
                    "marketParticipant": {
                        "category": "MENS_PROFESSIONAL",
                        "name": "Anthony Black",
                        "key": "Dmsc-ycAk-oTA0",
                        "shortName": "A. Black",
                        "slug": "anthony-black",
                        "sport": "BASKETBALL"
                    },
                    "eventKey": "0HKV-zeqc-tbcB",
                    "eventSport": "BASKETBALL",
                    "eventName": "Orlando Magic @ Boston Celtics",
                    "eventStartTime": "2025-04-20T19:30:00.000Z",
                    "eventHomeParticipantKey": "aUbn-wddv-b90h",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Boston Celtics",
                            "key": "aUbn-wddv-b90h",
                            "shortName": "BOS",
                            "slug": "boston-celtics",
                            "sport": "BASKETBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Orlando Magic",
                            "key": "Q6FU-wddv-9NTI",
                            "shortName": "ORL",
                            "slug": "orlando-magic",
                            "sport": "BASKETBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 National Basketball Association",
                    "competitionInstanceKey": "g4sK-yinv-Lczx",
                    "competitionName": "National Basketball Association",
                    "competitionShortName": "NBA",
                    "competitionKey": "d791-wddv-30fU",
                    "previousModifier": 8.5
                }
            },
            {
                "type": "MODIFIER_DECREASE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 7.5,
                        "payout": 2,
                        "source": "DRAFT_KINGS",
                        "type": "UNDER",
                        "live": false,
                        "marketKey": "0Qps-zeqt-jqFI",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.274Z",
                        "stats": {
                            "minPayout": 1.91,
                            "maxPayout": 1.91
                        }
                    }
                ],
                "context": {
                    "marketKey": "0Qps-zeqt-jqFI",
                    "marketType": "INDIVIDUAL_POINT_TOTAL",
                    "marketSegment": "FULL_MATCH",
                    "marketParticipant": {
                        "category": "MENS_PROFESSIONAL",
                        "name": "Anthony Black",
                        "key": "Dmsc-ycAk-oTA0",
                        "shortName": "A. Black",
                        "slug": "anthony-black",
                        "sport": "BASKETBALL"
                    },
                    "eventKey": "0HKV-zeqc-tbcB",
                    "eventSport": "BASKETBALL",
                    "eventName": "Orlando Magic @ Boston Celtics",
                    "eventStartTime": "2025-04-20T19:30:00.000Z",
                    "eventHomeParticipantKey": "aUbn-wddv-b90h",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Boston Celtics",
                            "key": "aUbn-wddv-b90h",
                            "shortName": "BOS",
                            "slug": "boston-celtics",
                            "sport": "BASKETBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Orlando Magic",
                            "key": "Q6FU-wddv-9NTI",
                            "shortName": "ORL",
                            "slug": "orlando-magic",
                            "sport": "BASKETBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 National Basketball Association",
                    "competitionInstanceKey": "g4sK-yinv-Lczx",
                    "competitionName": "National Basketball Association",
                    "competitionShortName": "NBA",
                    "competitionKey": "d791-wddv-30fU",
                    "previousModifier": 8.5
                }
            },
            {
                "type": "MODIFIER_DECREASE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 8.5,
                        "payout": 1.769231,
                        "source": "DRAFT_KINGS",
                        "type": "OVER",
                        "live": false,
                        "marketKey": "1OSU-zeqj-W5y1",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.274Z",
                        "stats": {
                            "minPayout": 2,
                            "maxPayout": 2
                        }
                    }
                ],
                "context": {
                    "marketKey": "1OSU-zeqj-W5y1",
                    "marketType": "INDIVIDUAL_POINT_TOTAL",
                    "marketSegment": "FULL_MATCH",
                    "marketParticipant": {
                        "category": "MENS_PROFESSIONAL",
                        "name": "Jrue Holiday",
                        "key": "l8Iz-ycAk-jDYB",
                        "shortName": "J. Holiday",
                        "slug": "jrue-holiday",
                        "sport": "BASKETBALL"
                    },
                    "eventKey": "0HKV-zeqc-tbcB",
                    "eventSport": "BASKETBALL",
                    "eventName": "Orlando Magic @ Boston Celtics",
                    "eventStartTime": "2025-04-20T19:30:00.000Z",
                    "eventHomeParticipantKey": "aUbn-wddv-b90h",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Boston Celtics",
                            "key": "aUbn-wddv-b90h",
                            "shortName": "BOS",
                            "slug": "boston-celtics",
                            "sport": "BASKETBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Orlando Magic",
                            "key": "Q6FU-wddv-9NTI",
                            "shortName": "ORL",
                            "slug": "orlando-magic",
                            "sport": "BASKETBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 National Basketball Association",
                    "competitionInstanceKey": "g4sK-yinv-Lczx",
                    "competitionName": "National Basketball Association",
                    "competitionShortName": "NBA",
                    "competitionKey": "d791-wddv-30fU",
                    "previousModifier": 9.5
                }
            },
            {
                "type": "MODIFIER_DECREASE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 8.5,
                        "payout": 2,
                        "source": "DRAFT_KINGS",
                        "type": "UNDER",
                        "live": false,
                        "marketKey": "1OSU-zeqj-W5y1",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.274Z",
                        "stats": {
                            "minPayout": 2,
                            "maxPayout": 2
                        }
                    }
                ],
                "context": {
                    "marketKey": "1OSU-zeqj-W5y1",
                    "marketType": "INDIVIDUAL_POINT_TOTAL",
                    "marketSegment": "FULL_MATCH",
                    "marketParticipant": {
                        "category": "MENS_PROFESSIONAL",
                        "name": "Jrue Holiday",
                        "key": "l8Iz-ycAk-jDYB",
                        "shortName": "J. Holiday",
                        "slug": "jrue-holiday",
                        "sport": "BASKETBALL"
                    },
                    "eventKey": "0HKV-zeqc-tbcB",
                    "eventSport": "BASKETBALL",
                    "eventName": "Orlando Magic @ Boston Celtics",
                    "eventStartTime": "2025-04-20T19:30:00.000Z",
                    "eventHomeParticipantKey": "aUbn-wddv-b90h",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Boston Celtics",
                            "key": "aUbn-wddv-b90h",
                            "shortName": "BOS",
                            "slug": "boston-celtics",
                            "sport": "BASKETBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Orlando Magic",
                            "key": "Q6FU-wddv-9NTI",
                            "shortName": "ORL",
                            "slug": "orlando-magic",
                            "sport": "BASKETBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 National Basketball Association",
                    "competitionInstanceKey": "g4sK-yinv-Lczx",
                    "competitionName": "National Basketball Association",
                    "competitionShortName": "NBA",
                    "competitionKey": "d791-wddv-30fU",
                    "previousModifier": 9.5
                }
            },
            {
                "type": "MODIFIER_DECREASE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 13.5,
                        "payout": 1.8,
                        "source": "DRAFT_KINGS",
                        "type": "OVER",
                        "live": false,
                        "marketKey": "1YaG-zeqj-fe1t",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.274Z",
                        "stats": {
                            "minPayout": 1.87,
                            "maxPayout": 1.87
                        }
                    }
                ],
                "context": {
                    "marketKey": "1YaG-zeqj-fe1t",
                    "marketType": "INDIVIDUAL_POINT_TOTAL",
                    "marketSegment": "FULL_MATCH",
                    "marketParticipant": {
                        "category": "MENS_PROFESSIONAL",
                        "name": "Derrick White",
                        "key": "zoPV-ycAk-mGzn",
                        "shortName": "D. White",
                        "slug": "derrick-white",
                        "sport": "BASKETBALL"
                    },
                    "eventKey": "0HKV-zeqc-tbcB",
                    "eventSport": "BASKETBALL",
                    "eventName": "Orlando Magic @ Boston Celtics",
                    "eventStartTime": "2025-04-20T19:30:00.000Z",
                    "eventHomeParticipantKey": "aUbn-wddv-b90h",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Boston Celtics",
                            "key": "aUbn-wddv-b90h",
                            "shortName": "BOS",
                            "slug": "boston-celtics",
                            "sport": "BASKETBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Orlando Magic",
                            "key": "Q6FU-wddv-9NTI",
                            "shortName": "ORL",
                            "slug": "orlando-magic",
                            "sport": "BASKETBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 National Basketball Association",
                    "competitionInstanceKey": "g4sK-yinv-Lczx",
                    "competitionName": "National Basketball Association",
                    "competitionShortName": "NBA",
                    "competitionKey": "d791-wddv-30fU",
                    "previousModifier": 14.5
                }
            },
            {
                "type": "MODIFIER_DECREASE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 13.5,
                        "payout": 1.952381,
                        "source": "DRAFT_KINGS",
                        "type": "UNDER",
                        "live": false,
                        "marketKey": "1YaG-zeqj-fe1t",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.274Z",
                        "stats": {
                            "minPayout": 1.87,
                            "maxPayout": 1.87
                        }
                    }
                ],
                "context": {
                    "marketKey": "1YaG-zeqj-fe1t",
                    "marketType": "INDIVIDUAL_POINT_TOTAL",
                    "marketSegment": "FULL_MATCH",
                    "marketParticipant": {
                        "category": "MENS_PROFESSIONAL",
                        "name": "Derrick White",
                        "key": "zoPV-ycAk-mGzn",
                        "shortName": "D. White",
                        "slug": "derrick-white",
                        "sport": "BASKETBALL"
                    },
                    "eventKey": "0HKV-zeqc-tbcB",
                    "eventSport": "BASKETBALL",
                    "eventName": "Orlando Magic @ Boston Celtics",
                    "eventStartTime": "2025-04-20T19:30:00.000Z",
                    "eventHomeParticipantKey": "aUbn-wddv-b90h",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Boston Celtics",
                            "key": "aUbn-wddv-b90h",
                            "shortName": "BOS",
                            "slug": "boston-celtics",
                            "sport": "BASKETBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Orlando Magic",
                            "key": "Q6FU-wddv-9NTI",
                            "shortName": "ORL",
                            "slug": "orlando-magic",
                            "sport": "BASKETBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 National Basketball Association",
                    "competitionInstanceKey": "g4sK-yinv-Lczx",
                    "competitionName": "National Basketball Association",
                    "competitionShortName": "NBA",
                    "competitionKey": "d791-wddv-30fU",
                    "previousModifier": 14.5
                }
            },
            {
                "type": "MODIFIER_DECREASE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 12.5,
                        "payout": 1.769231,
                        "source": "DRAFT_KINGS",
                        "type": "OVER",
                        "live": false,
                        "marketKey": "70AA-zerc-Z5Nv",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.274Z",
                        "stats": {
                            "minPayout": 1.833333,
                            "maxPayout": 1.833333
                        }
                    }
                ],
                "context": {
                    "marketKey": "70AA-zerc-Z5Nv",
                    "marketType": "INDIVIDUAL_POINT_TOTAL",
                    "marketSegment": "FULL_MATCH",
                    "marketParticipant": {
                        "category": "MENS_PROFESSIONAL",
                        "name": "Caris LeVert",
                        "key": "HAYl-ycAk-xGFC",
                        "shortName": "C. LeVert",
                        "slug": "caris-levert",
                        "sport": "BASKETBALL"
                    },
                    "eventKey": "BsiB-zerb-sFT3",
                    "eventSport": "BASKETBALL",
                    "eventName": "Miami Heat @ Atlanta Hawks",
                    "eventStartTime": "2025-04-18T23:10:00.000Z",
                    "eventHomeParticipantKey": "0Ch7-wddv-OrXs",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Atlanta Hawks",
                            "key": "0Ch7-wddv-OrXs",
                            "shortName": "ATL",
                            "slug": "atlanta-hawks",
                            "sport": "BASKETBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Miami Heat",
                            "key": "biYO-wddv-j7OK",
                            "shortName": "MIA",
                            "slug": "miami-heat",
                            "sport": "BASKETBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 National Basketball Association",
                    "competitionInstanceKey": "g4sK-yinv-Lczx",
                    "competitionName": "National Basketball Association",
                    "competitionShortName": "NBA",
                    "competitionKey": "d791-wddv-30fU",
                    "previousModifier": 13.5
                }
            },
            {
                "type": "MODIFIER_DECREASE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 12.5,
                        "payout": 2,
                        "source": "DRAFT_KINGS",
                        "type": "UNDER",
                        "live": false,
                        "marketKey": "70AA-zerc-Z5Nv",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.274Z",
                        "stats": {
                            "minPayout": 1.833333,
                            "maxPayout": 1.833333
                        }
                    }
                ],
                "context": {
                    "marketKey": "70AA-zerc-Z5Nv",
                    "marketType": "INDIVIDUAL_POINT_TOTAL",
                    "marketSegment": "FULL_MATCH",
                    "marketParticipant": {
                        "category": "MENS_PROFESSIONAL",
                        "name": "Caris LeVert",
                        "key": "HAYl-ycAk-xGFC",
                        "shortName": "C. LeVert",
                        "slug": "caris-levert",
                        "sport": "BASKETBALL"
                    },
                    "eventKey": "BsiB-zerb-sFT3",
                    "eventSport": "BASKETBALL",
                    "eventName": "Miami Heat @ Atlanta Hawks",
                    "eventStartTime": "2025-04-18T23:10:00.000Z",
                    "eventHomeParticipantKey": "0Ch7-wddv-OrXs",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Atlanta Hawks",
                            "key": "0Ch7-wddv-OrXs",
                            "shortName": "ATL",
                            "slug": "atlanta-hawks",
                            "sport": "BASKETBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Miami Heat",
                            "key": "biYO-wddv-j7OK",
                            "shortName": "MIA",
                            "slug": "miami-heat",
                            "sport": "BASKETBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 National Basketball Association",
                    "competitionInstanceKey": "g4sK-yinv-Lczx",
                    "competitionName": "National Basketball Association",
                    "competitionShortName": "NBA",
                    "competitionKey": "d791-wddv-30fU",
                    "previousModifier": 13.5
                }
            },
            {
                "type": "MODIFIER_DECREASE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": -0.5,
                        "payout": 2.35,
                        "source": "BOVADA",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "7M4G-zero-KesK",
                        "participantKey": "rkK0-wiDr-xpZ3",
                        "time": "2025-04-18T02:29:00.257Z",
                        "stats": {
                            "minPayout": 2.07,
                            "maxPayout": 2.07
                        }
                    }
                ],
                "context": {
                    "marketKey": "7M4G-zero-KesK",
                    "marketType": "POINT_SPREAD",
                    "marketSegment": "FIRST_5_INNINGS",
                    "eventKey": "wp3W-zern-dtnj",
                    "eventSport": "BASEBALL",
                    "eventName": "Fukuoka SoftBank Hawks @ Saitama Seibu Lions",
                    "eventStartTime": "2025-04-18T09:00:00.000Z",
                    "eventHomeParticipantKey": "rkK0-wiDr-xpZ3",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Fukuoka SoftBank Hawks",
                            "key": "5Wnu-wiDr-CnNp",
                            "shortName": "SBH",
                            "slug": "fukuoka-softbank-hawks",
                            "sport": "BASEBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Saitama Seibu Lions",
                            "key": "rkK0-wiDr-xpZ3",
                            "shortName": "SSL",
                            "slug": "saitama-seibu-lions",
                            "sport": "BASEBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 Nippon Professional Baseball League",
                    "competitionInstanceKey": "KLrD-zdeg-kORo",
                    "competitionName": "Nippon Professional Baseball League",
                    "competitionShortName": "NPB",
                    "competitionKey": "CWpx-wiDr-05BA",
                    "previousModifier": 0.5
                }
            },
            {
                "type": "MODIFIER_DECREASE",
                "value": 0.5,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 2,
                        "payout": 1.741,
                        "source": "BOVADA",
                        "type": "OVER",
                        "live": false,
                        "marketKey": "DQGZ-zero-a532",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.257Z",
                        "stats": {
                            "minPayout": 1.833333,
                            "maxPayout": 1.87
                        }
                    }
                ],
                "context": {
                    "marketKey": "DQGZ-zero-a532",
                    "marketType": "POINT_TOTAL",
                    "marketSegment": "FIRST_5_INNINGS",
                    "eventKey": "IlOJ-zern-LQlg",
                    "eventSport": "BASEBALL",
                    "eventName": "Hiroshima Toyo Carp @ Hanshin Tigers",
                    "eventStartTime": "2025-04-18T09:00:00.000Z",
                    "eventHomeParticipantKey": "p6Qm-wiDr-cSCa",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Hiroshima Toyo Carp",
                            "key": "0Ndq-wiDr-NokT",
                            "shortName": "HTC",
                            "slug": "hiroshima-toyo-carp",
                            "sport": "BASEBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Hanshin Tigers",
                            "key": "p6Qm-wiDr-cSCa",
                            "shortName": "HST",
                            "slug": "hanshin-tigers",
                            "sport": "BASEBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 Nippon Professional Baseball League",
                    "competitionInstanceKey": "KLrD-zdeg-kORo",
                    "competitionName": "Nippon Professional Baseball League",
                    "competitionShortName": "NPB",
                    "competitionKey": "CWpx-wiDr-05BA",
                    "previousModifier": 2.5
                }
            },
            {
                "type": "MODIFIER_DECREASE",
                "value": 0.5,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 2,
                        "payout": 2.05,
                        "source": "BOVADA",
                        "type": "UNDER",
                        "live": false,
                        "marketKey": "DQGZ-zero-a532",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.257Z",
                        "stats": {
                            "minPayout": 1.833333,
                            "maxPayout": 1.87
                        }
                    }
                ],
                "context": {
                    "marketKey": "DQGZ-zero-a532",
                    "marketType": "POINT_TOTAL",
                    "marketSegment": "FIRST_5_INNINGS",
                    "eventKey": "IlOJ-zern-LQlg",
                    "eventSport": "BASEBALL",
                    "eventName": "Hiroshima Toyo Carp @ Hanshin Tigers",
                    "eventStartTime": "2025-04-18T09:00:00.000Z",
                    "eventHomeParticipantKey": "p6Qm-wiDr-cSCa",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Hiroshima Toyo Carp",
                            "key": "0Ndq-wiDr-NokT",
                            "shortName": "HTC",
                            "slug": "hiroshima-toyo-carp",
                            "sport": "BASEBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Hanshin Tigers",
                            "key": "p6Qm-wiDr-cSCa",
                            "shortName": "HST",
                            "slug": "hanshin-tigers",
                            "sport": "BASEBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 Nippon Professional Baseball League",
                    "competitionInstanceKey": "KLrD-zdeg-kORo",
                    "competitionName": "Nippon Professional Baseball League",
                    "competitionShortName": "NPB",
                    "competitionKey": "CWpx-wiDr-05BA",
                    "previousModifier": 2.5
                }
            },
            {
                "type": "MODIFIER_DECREASE",
                "value": 0.5,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 2,
                        "payout": 1.769231,
                        "source": "DRAFT_KINGS",
                        "type": "OVER",
                        "live": false,
                        "marketKey": "DQGZ-zero-a532",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.278Z",
                        "stats": {
                            "minPayout": 1.833333,
                            "maxPayout": 1.87
                        }
                    }
                ],
                "context": {
                    "marketKey": "DQGZ-zero-a532",
                    "marketType": "POINT_TOTAL",
                    "marketSegment": "FIRST_5_INNINGS",
                    "eventKey": "IlOJ-zern-LQlg",
                    "eventSport": "BASEBALL",
                    "eventName": "Hiroshima Toyo Carp @ Hanshin Tigers",
                    "eventStartTime": "2025-04-18T09:00:00.000Z",
                    "eventHomeParticipantKey": "p6Qm-wiDr-cSCa",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Hiroshima Toyo Carp",
                            "key": "0Ndq-wiDr-NokT",
                            "shortName": "HTC",
                            "slug": "hiroshima-toyo-carp",
                            "sport": "BASEBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Hanshin Tigers",
                            "key": "p6Qm-wiDr-cSCa",
                            "shortName": "HST",
                            "slug": "hanshin-tigers",
                            "sport": "BASEBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 Nippon Professional Baseball League",
                    "competitionInstanceKey": "KLrD-zdeg-kORo",
                    "competitionName": "Nippon Professional Baseball League",
                    "competitionShortName": "NPB",
                    "competitionKey": "CWpx-wiDr-05BA",
                    "previousModifier": 2.5
                }
            },
            {
                "type": "MODIFIER_DECREASE",
                "value": 0.5,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 2,
                        "payout": 2.1,
                        "source": "DRAFT_KINGS",
                        "type": "UNDER",
                        "live": false,
                        "marketKey": "DQGZ-zero-a532",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.278Z",
                        "stats": {
                            "minPayout": 1.833333,
                            "maxPayout": 1.87
                        }
                    }
                ],
                "context": {
                    "marketKey": "DQGZ-zero-a532",
                    "marketType": "POINT_TOTAL",
                    "marketSegment": "FIRST_5_INNINGS",
                    "eventKey": "IlOJ-zern-LQlg",
                    "eventSport": "BASEBALL",
                    "eventName": "Hiroshima Toyo Carp @ Hanshin Tigers",
                    "eventStartTime": "2025-04-18T09:00:00.000Z",
                    "eventHomeParticipantKey": "p6Qm-wiDr-cSCa",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Hiroshima Toyo Carp",
                            "key": "0Ndq-wiDr-NokT",
                            "shortName": "HTC",
                            "slug": "hiroshima-toyo-carp",
                            "sport": "BASEBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Hanshin Tigers",
                            "key": "p6Qm-wiDr-cSCa",
                            "shortName": "HST",
                            "slug": "hanshin-tigers",
                            "sport": "BASEBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 Nippon Professional Baseball League",
                    "competitionInstanceKey": "KLrD-zdeg-kORo",
                    "competitionName": "Nippon Professional Baseball League",
                    "competitionShortName": "NPB",
                    "competitionKey": "CWpx-wiDr-05BA",
                    "previousModifier": 2.5
                }
            },
            {
                "type": "MODIFIER_DECREASE",
                "value": 0.5,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": -1.5,
                        "payout": 2.4,
                        "source": "BET_PARX",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "GaR0-zern-FjrR",
                        "participantKey": "p0Uo-xfxt-gXxe",
                        "time": "2025-04-18T02:29:00.151Z",
                        "stats": {
                            "minPayout": 2.8,
                            "maxPayout": 2.8
                        }
                    }
                ],
                "context": {
                    "marketKey": "GaR0-zern-FjrR",
                    "marketType": "POINT_SPREAD",
                    "marketSegment": "FULL_MATCH",
                    "eventKey": "RsnQ-zern-J3f5",
                    "eventSport": "BASEBALL",
                    "eventName": "Lotte Giants @ Samsung Lions",
                    "eventStartTime": "2025-04-18T09:30:00.000Z",
                    "eventHomeParticipantKey": "1KPM-xfxt-ijW0",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Samsung Lions",
                            "key": "1KPM-xfxt-ijW0",
                            "shortName": "SAM",
                            "slug": "samsung-lions",
                            "sport": "BASEBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Lotte Giants",
                            "key": "p0Uo-xfxt-gXxe",
                            "shortName": "LOT",
                            "slug": "lotte-giants",
                            "sport": "BASEBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 KBO League",
                    "competitionInstanceKey": "HzgU-zcrx-0Yjr",
                    "competitionName": "KBO League",
                    "competitionShortName": "KBO",
                    "competitionKey": "lyFJ-xfxt-Oy40",
                    "previousModifier": -1
                }
            },
            {
                "type": "MODIFIER_DECREASE",
                "value": 0.5,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": -1.5,
                        "payout": 2.4,
                        "source": "BET_RIVERS",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "GaR0-zern-FjrR",
                        "participantKey": "p0Uo-xfxt-gXxe",
                        "time": "2025-04-18T02:29:00.077Z",
                        "stats": {
                            "minPayout": 2.8,
                            "maxPayout": 2.8
                        }
                    }
                ],
                "context": {
                    "marketKey": "GaR0-zern-FjrR",
                    "marketType": "POINT_SPREAD",
                    "marketSegment": "FULL_MATCH",
                    "eventKey": "RsnQ-zern-J3f5",
                    "eventSport": "BASEBALL",
                    "eventName": "Lotte Giants @ Samsung Lions",
                    "eventStartTime": "2025-04-18T09:30:00.000Z",
                    "eventHomeParticipantKey": "1KPM-xfxt-ijW0",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Samsung Lions",
                            "key": "1KPM-xfxt-ijW0",
                            "shortName": "SAM",
                            "slug": "samsung-lions",
                            "sport": "BASEBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Lotte Giants",
                            "key": "p0Uo-xfxt-gXxe",
                            "shortName": "LOT",
                            "slug": "lotte-giants",
                            "sport": "BASEBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 KBO League",
                    "competitionInstanceKey": "HzgU-zcrx-0Yjr",
                    "competitionName": "KBO League",
                    "competitionShortName": "KBO",
                    "competitionKey": "lyFJ-xfxt-Oy40",
                    "previousModifier": -1
                }
            },
            {
                "type": "MODIFIER_DECREASE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 52.5,
                        "payout": 1.833333,
                        "source": "DRAFT_KINGS",
                        "type": "OVER",
                        "live": false,
                        "marketKey": "L0Tj-zern-wMAv",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.274Z",
                        "stats": {
                            "minPayout": 1.952381,
                            "maxPayout": 1.952381
                        }
                    }
                ],
                "context": {
                    "marketKey": "L0Tj-zern-wMAv",
                    "marketType": "POINT_TOTAL",
                    "marketSegment": "QUARTER_1",
                    "eventKey": "0HKV-zeqc-tbcB",
                    "eventSport": "BASKETBALL",
                    "eventName": "Orlando Magic @ Boston Celtics",
                    "eventStartTime": "2025-04-20T19:30:00.000Z",
                    "eventHomeParticipantKey": "aUbn-wddv-b90h",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Boston Celtics",
                            "key": "aUbn-wddv-b90h",
                            "shortName": "BOS",
                            "slug": "boston-celtics",
                            "sport": "BASKETBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Orlando Magic",
                            "key": "Q6FU-wddv-9NTI",
                            "shortName": "ORL",
                            "slug": "orlando-magic",
                            "sport": "BASKETBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 National Basketball Association",
                    "competitionInstanceKey": "g4sK-yinv-Lczx",
                    "competitionName": "National Basketball Association",
                    "competitionShortName": "NBA",
                    "competitionKey": "d791-wddv-30fU",
                    "previousModifier": 53.5
                }
            },
            {
                "type": "MODIFIER_DECREASE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 52.5,
                        "payout": 2,
                        "source": "DRAFT_KINGS",
                        "type": "UNDER",
                        "live": false,
                        "marketKey": "L0Tj-zern-wMAv",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.274Z",
                        "stats": {
                            "minPayout": 1.952381,
                            "maxPayout": 1.952381
                        }
                    }
                ],
                "context": {
                    "marketKey": "L0Tj-zern-wMAv",
                    "marketType": "POINT_TOTAL",
                    "marketSegment": "QUARTER_1",
                    "eventKey": "0HKV-zeqc-tbcB",
                    "eventSport": "BASKETBALL",
                    "eventName": "Orlando Magic @ Boston Celtics",
                    "eventStartTime": "2025-04-20T19:30:00.000Z",
                    "eventHomeParticipantKey": "aUbn-wddv-b90h",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Boston Celtics",
                            "key": "aUbn-wddv-b90h",
                            "shortName": "BOS",
                            "slug": "boston-celtics",
                            "sport": "BASKETBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Orlando Magic",
                            "key": "Q6FU-wddv-9NTI",
                            "shortName": "ORL",
                            "slug": "orlando-magic",
                            "sport": "BASKETBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 National Basketball Association",
                    "competitionInstanceKey": "g4sK-yinv-Lczx",
                    "competitionName": "National Basketball Association",
                    "competitionShortName": "NBA",
                    "competitionKey": "d791-wddv-30fU",
                    "previousModifier": 53.5
                }
            },
            {
                "type": "MODIFIER_DECREASE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 24.5,
                        "payout": 1.909091,
                        "source": "DRAFT_KINGS",
                        "type": "OVER",
                        "live": false,
                        "marketKey": "Tc96-zeqj-yNqb",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.274Z",
                        "stats": {
                            "minPayout": 1.909091,
                            "maxPayout": 1.952381
                        }
                    }
                ],
                "context": {
                    "marketKey": "Tc96-zeqj-yNqb",
                    "marketType": "INDIVIDUAL_POINT_TOTAL",
                    "marketSegment": "FULL_MATCH",
                    "marketParticipant": {
                        "category": "MENS_PROFESSIONAL",
                        "name": "Paolo Banchero",
                        "key": "Sh0V-ybnn-uhar",
                        "shortName": "P. Banchero",
                        "slug": "paolo-banchero",
                        "sport": "BASKETBALL"
                    },
                    "eventKey": "0HKV-zeqc-tbcB",
                    "eventSport": "BASKETBALL",
                    "eventName": "Orlando Magic @ Boston Celtics",
                    "eventStartTime": "2025-04-20T19:30:00.000Z",
                    "eventHomeParticipantKey": "aUbn-wddv-b90h",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Boston Celtics",
                            "key": "aUbn-wddv-b90h",
                            "shortName": "BOS",
                            "slug": "boston-celtics",
                            "sport": "BASKETBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Orlando Magic",
                            "key": "Q6FU-wddv-9NTI",
                            "shortName": "ORL",
                            "slug": "orlando-magic",
                            "sport": "BASKETBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 National Basketball Association",
                    "competitionInstanceKey": "g4sK-yinv-Lczx",
                    "competitionName": "National Basketball Association",
                    "competitionShortName": "NBA",
                    "competitionKey": "d791-wddv-30fU",
                    "previousModifier": 25.5
                }
            },
            {
                "type": "MODIFIER_DECREASE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 24.5,
                        "payout": 1.833333,
                        "source": "DRAFT_KINGS",
                        "type": "UNDER",
                        "live": false,
                        "marketKey": "Tc96-zeqj-yNqb",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.274Z",
                        "stats": {
                            "minPayout": 1.909091,
                            "maxPayout": 1.952381
                        }
                    }
                ],
                "context": {
                    "marketKey": "Tc96-zeqj-yNqb",
                    "marketType": "INDIVIDUAL_POINT_TOTAL",
                    "marketSegment": "FULL_MATCH",
                    "marketParticipant": {
                        "category": "MENS_PROFESSIONAL",
                        "name": "Paolo Banchero",
                        "key": "Sh0V-ybnn-uhar",
                        "shortName": "P. Banchero",
                        "slug": "paolo-banchero",
                        "sport": "BASKETBALL"
                    },
                    "eventKey": "0HKV-zeqc-tbcB",
                    "eventSport": "BASKETBALL",
                    "eventName": "Orlando Magic @ Boston Celtics",
                    "eventStartTime": "2025-04-20T19:30:00.000Z",
                    "eventHomeParticipantKey": "aUbn-wddv-b90h",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Boston Celtics",
                            "key": "aUbn-wddv-b90h",
                            "shortName": "BOS",
                            "slug": "boston-celtics",
                            "sport": "BASKETBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Orlando Magic",
                            "key": "Q6FU-wddv-9NTI",
                            "shortName": "ORL",
                            "slug": "orlando-magic",
                            "sport": "BASKETBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 National Basketball Association",
                    "competitionInstanceKey": "g4sK-yinv-Lczx",
                    "competitionName": "National Basketball Association",
                    "competitionShortName": "NBA",
                    "competitionKey": "d791-wddv-30fU",
                    "previousModifier": 25.5
                }
            },
            {
                "type": "MODIFIER_DECREASE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 19.5,
                        "payout": 1.869565,
                        "source": "DRAFT_KINGS",
                        "type": "OVER",
                        "live": false,
                        "marketKey": "Uu1b-zerc-LJUp",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.274Z",
                        "stats": {
                            "minPayout": 1.909091,
                            "maxPayout": 1.909091
                        }
                    }
                ],
                "context": {
                    "marketKey": "Uu1b-zerc-LJUp",
                    "marketType": "INDIVIDUAL_POINT_TOTAL",
                    "marketSegment": "FULL_MATCH",
                    "marketParticipant": {
                        "category": "MENS_PROFESSIONAL",
                        "name": "Bam Adebayo",
                        "key": "3GRU-ybft-HJy5",
                        "shortName": "B. Adebayo",
                        "slug": "bam-adebayo",
                        "sport": "BASKETBALL"
                    },
                    "eventKey": "BsiB-zerb-sFT3",
                    "eventSport": "BASKETBALL",
                    "eventName": "Miami Heat @ Atlanta Hawks",
                    "eventStartTime": "2025-04-18T23:10:00.000Z",
                    "eventHomeParticipantKey": "0Ch7-wddv-OrXs",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Atlanta Hawks",
                            "key": "0Ch7-wddv-OrXs",
                            "shortName": "ATL",
                            "slug": "atlanta-hawks",
                            "sport": "BASKETBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Miami Heat",
                            "key": "biYO-wddv-j7OK",
                            "shortName": "MIA",
                            "slug": "miami-heat",
                            "sport": "BASKETBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 National Basketball Association",
                    "competitionInstanceKey": "g4sK-yinv-Lczx",
                    "competitionName": "National Basketball Association",
                    "competitionShortName": "NBA",
                    "competitionKey": "d791-wddv-30fU",
                    "previousModifier": 20.5
                }
            },
            {
                "type": "MODIFIER_DECREASE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 19.5,
                        "payout": 1.869565,
                        "source": "DRAFT_KINGS",
                        "type": "UNDER",
                        "live": false,
                        "marketKey": "Uu1b-zerc-LJUp",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.274Z",
                        "stats": {
                            "minPayout": 1.909091,
                            "maxPayout": 1.909091
                        }
                    }
                ],
                "context": {
                    "marketKey": "Uu1b-zerc-LJUp",
                    "marketType": "INDIVIDUAL_POINT_TOTAL",
                    "marketSegment": "FULL_MATCH",
                    "marketParticipant": {
                        "category": "MENS_PROFESSIONAL",
                        "name": "Bam Adebayo",
                        "key": "3GRU-ybft-HJy5",
                        "shortName": "B. Adebayo",
                        "slug": "bam-adebayo",
                        "sport": "BASKETBALL"
                    },
                    "eventKey": "BsiB-zerb-sFT3",
                    "eventSport": "BASKETBALL",
                    "eventName": "Miami Heat @ Atlanta Hawks",
                    "eventStartTime": "2025-04-18T23:10:00.000Z",
                    "eventHomeParticipantKey": "0Ch7-wddv-OrXs",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Atlanta Hawks",
                            "key": "0Ch7-wddv-OrXs",
                            "shortName": "ATL",
                            "slug": "atlanta-hawks",
                            "sport": "BASKETBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Miami Heat",
                            "key": "biYO-wddv-j7OK",
                            "shortName": "MIA",
                            "slug": "miami-heat",
                            "sport": "BASKETBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 National Basketball Association",
                    "competitionInstanceKey": "g4sK-yinv-Lczx",
                    "competitionName": "National Basketball Association",
                    "competitionShortName": "NBA",
                    "competitionKey": "d791-wddv-30fU",
                    "previousModifier": 20.5
                }
            },
            {
                "type": "MODIFIER_DECREASE",
                "value": 0.5,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 4,
                        "payout": 1.8,
                        "source": "BOVADA",
                        "type": "OVER",
                        "live": false,
                        "marketKey": "WVDd-zerx-otq0",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.254Z",
                        "stats": {
                            "minPayout": 1.952381,
                            "maxPayout": 1.952381
                        }
                    }
                ],
                "context": {
                    "marketKey": "WVDd-zerx-otq0",
                    "marketType": "POINT_TOTAL",
                    "marketSegment": "FIRST_5_INNINGS",
                    "eventKey": "z5RA-zers-0pc0",
                    "eventSport": "BASEBALL",
                    "eventName": "Los Angeles Dodgers @ Texas Rangers",
                    "eventStartTime": "2025-04-19T00:06:00.000Z",
                    "eventHomeParticipantKey": "4T9Y-wegw-9sVP",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Texas Rangers",
                            "key": "4T9Y-wegw-9sVP",
                            "shortName": "TEX",
                            "slug": "texas-rangers",
                            "sport": "BASEBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Los Angeles Dodgers",
                            "key": "CHEM-wegw-VVSn",
                            "shortName": "LAD",
                            "slug": "los-angeles-dodgers",
                            "sport": "BASEBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 Major League Baseball",
                    "competitionInstanceKey": "9Jss-zcjh-iOl3",
                    "competitionName": "Major League Baseball",
                    "competitionShortName": "MLB",
                    "competitionKey": "qK0E-wddv-bFet",
                    "previousModifier": 4.5
                }
            },
            {
                "type": "MODIFIER_DECREASE",
                "value": 0.5,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 4,
                        "payout": 1.952381,
                        "source": "BOVADA",
                        "type": "UNDER",
                        "live": false,
                        "marketKey": "WVDd-zerx-otq0",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.254Z",
                        "stats": {
                            "minPayout": 1.952381,
                            "maxPayout": 1.952381
                        }
                    }
                ],
                "context": {
                    "marketKey": "WVDd-zerx-otq0",
                    "marketType": "POINT_TOTAL",
                    "marketSegment": "FIRST_5_INNINGS",
                    "eventKey": "z5RA-zers-0pc0",
                    "eventSport": "BASEBALL",
                    "eventName": "Los Angeles Dodgers @ Texas Rangers",
                    "eventStartTime": "2025-04-19T00:06:00.000Z",
                    "eventHomeParticipantKey": "4T9Y-wegw-9sVP",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Texas Rangers",
                            "key": "4T9Y-wegw-9sVP",
                            "shortName": "TEX",
                            "slug": "texas-rangers",
                            "sport": "BASEBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Los Angeles Dodgers",
                            "key": "CHEM-wegw-VVSn",
                            "shortName": "LAD",
                            "slug": "los-angeles-dodgers",
                            "sport": "BASEBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 Major League Baseball",
                    "competitionInstanceKey": "9Jss-zcjh-iOl3",
                    "competitionName": "Major League Baseball",
                    "competitionShortName": "MLB",
                    "competitionKey": "qK0E-wddv-bFet",
                    "previousModifier": 4.5
                }
            },
            {
                "type": "MODIFIER_DECREASE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 17.5,
                        "payout": 1.8,
                        "source": "DRAFT_KINGS",
                        "type": "OVER",
                        "live": false,
                        "marketKey": "Z07w-zeqj-JTCL",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.274Z",
                        "stats": {
                            "minPayout": 1.833333,
                            "maxPayout": 1.909091
                        }
                    }
                ],
                "context": {
                    "marketKey": "Z07w-zeqj-JTCL",
                    "marketType": "INDIVIDUAL_POINT_TOTAL",
                    "marketSegment": "FULL_MATCH",
                    "marketParticipant": {
                        "category": "MENS_PROFESSIONAL",
                        "name": "Kristaps Porzingis",
                        "key": "Fy6p-ybfw-AzEm",
                        "shortName": "K. Porzingis",
                        "slug": "kristaps-porzingis",
                        "sport": "BASKETBALL"
                    },
                    "eventKey": "0HKV-zeqc-tbcB",
                    "eventSport": "BASKETBALL",
                    "eventName": "Orlando Magic @ Boston Celtics",
                    "eventStartTime": "2025-04-20T19:30:00.000Z",
                    "eventHomeParticipantKey": "aUbn-wddv-b90h",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Boston Celtics",
                            "key": "aUbn-wddv-b90h",
                            "shortName": "BOS",
                            "slug": "boston-celtics",
                            "sport": "BASKETBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Orlando Magic",
                            "key": "Q6FU-wddv-9NTI",
                            "shortName": "ORL",
                            "slug": "orlando-magic",
                            "sport": "BASKETBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 National Basketball Association",
                    "competitionInstanceKey": "g4sK-yinv-Lczx",
                    "competitionName": "National Basketball Association",
                    "competitionShortName": "NBA",
                    "competitionKey": "d791-wddv-30fU",
                    "previousModifier": 18.5
                }
            },
            {
                "type": "MODIFIER_DECREASE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 17.5,
                        "payout": 1.952381,
                        "source": "DRAFT_KINGS",
                        "type": "UNDER",
                        "live": false,
                        "marketKey": "Z07w-zeqj-JTCL",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.274Z",
                        "stats": {
                            "minPayout": 1.833333,
                            "maxPayout": 1.909091
                        }
                    }
                ],
                "context": {
                    "marketKey": "Z07w-zeqj-JTCL",
                    "marketType": "INDIVIDUAL_POINT_TOTAL",
                    "marketSegment": "FULL_MATCH",
                    "marketParticipant": {
                        "category": "MENS_PROFESSIONAL",
                        "name": "Kristaps Porzingis",
                        "key": "Fy6p-ybfw-AzEm",
                        "shortName": "K. Porzingis",
                        "slug": "kristaps-porzingis",
                        "sport": "BASKETBALL"
                    },
                    "eventKey": "0HKV-zeqc-tbcB",
                    "eventSport": "BASKETBALL",
                    "eventName": "Orlando Magic @ Boston Celtics",
                    "eventStartTime": "2025-04-20T19:30:00.000Z",
                    "eventHomeParticipantKey": "aUbn-wddv-b90h",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Boston Celtics",
                            "key": "aUbn-wddv-b90h",
                            "shortName": "BOS",
                            "slug": "boston-celtics",
                            "sport": "BASKETBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Orlando Magic",
                            "key": "Q6FU-wddv-9NTI",
                            "shortName": "ORL",
                            "slug": "orlando-magic",
                            "sport": "BASKETBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 National Basketball Association",
                    "competitionInstanceKey": "g4sK-yinv-Lczx",
                    "competitionName": "National Basketball Association",
                    "competitionShortName": "NBA",
                    "competitionKey": "d791-wddv-30fU",
                    "previousModifier": 18.5
                }
            },
            {
                "type": "MODIFIER_DECREASE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": -45.5,
                        "payout": 1.869565,
                        "source": "DRAFT_KINGS",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "e5uc-zeie-WLC8",
                        "participantKey": "76J7-xbdu-hQQe",
                        "time": "2025-04-18T02:29:00.271Z",
                        "stats": {
                            "minPayout": 1.9,
                            "maxPayout": 1.9
                        }
                    }
                ],
                "context": {
                    "marketKey": "e5uc-zeie-WLC8",
                    "marketType": "POINT_SPREAD",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "m1z2-zeie-Xe3H",
                    "eventSport": "AUSTRALIAN_RULES_FOOTBALL",
                    "eventName": "Gold Coast Suns @ Richmond",
                    "eventStartTime": "2025-04-19T09:35:00.000Z",
                    "eventHomeParticipantKey": "7Jpf-xbdu-9NrH",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Richmond",
                            "key": "7Jpf-xbdu-9NrH",
                            "shortName": "RIC",
                            "slug": "richmond",
                            "sport": "AUSTRALIAN_RULES_FOOTBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Gold Coast Suns",
                            "key": "76J7-xbdu-hQQe",
                            "shortName": "GCS",
                            "slug": "gold-coast-suns",
                            "sport": "AUSTRALIAN_RULES_FOOTBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 Australian Football League",
                    "competitionInstanceKey": "6dBj-ykzc-cMtp",
                    "competitionName": "Australian Football League",
                    "competitionShortName": "AFL",
                    "competitionKey": "jcKL-xbdu-POdB",
                    "previousModifier": -44.5
                }
            },
            {
                "type": "MODIFIER_DECREASE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 7.5,
                        "payout": 1.77,
                        "source": "ESPN_BET",
                        "type": "OVER",
                        "live": false,
                        "marketKey": "hhD9-zers-BKQX",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.282Z",
                        "stats": {
                            "minPayout": 1.91,
                            "maxPayout": 1.91
                        }
                    }
                ],
                "context": {
                    "marketKey": "hhD9-zers-BKQX",
                    "marketType": "POINT_TOTAL",
                    "marketSegment": "FULL_MATCH",
                    "eventKey": "zNk3-zers-6Vn7",
                    "eventSport": "BASEBALL",
                    "eventName": "St. Louis Cardinals @ New York Mets",
                    "eventStartTime": "2025-04-18T23:11:00.000Z",
                    "eventHomeParticipantKey": "PFuk-wegw-5ViF",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "New York Mets",
                            "key": "PFuk-wegw-5ViF",
                            "shortName": "NYM",
                            "slug": "new-york-mets",
                            "sport": "BASEBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "St. Louis Cardinals",
                            "key": "Icui-wegw-pldc",
                            "shortName": "STL",
                            "slug": "st-louis-cardinals",
                            "sport": "BASEBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 Major League Baseball",
                    "competitionInstanceKey": "9Jss-zcjh-iOl3",
                    "competitionName": "Major League Baseball",
                    "competitionShortName": "MLB",
                    "competitionKey": "qK0E-wddv-bFet",
                    "previousModifier": 8.5
                }
            },
            {
                "type": "MODIFIER_DECREASE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 7.5,
                        "payout": 2.1,
                        "source": "ESPN_BET",
                        "type": "UNDER",
                        "live": false,
                        "marketKey": "hhD9-zers-BKQX",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.282Z",
                        "stats": {
                            "minPayout": 1.91,
                            "maxPayout": 1.91
                        }
                    }
                ],
                "context": {
                    "marketKey": "hhD9-zers-BKQX",
                    "marketType": "POINT_TOTAL",
                    "marketSegment": "FULL_MATCH",
                    "eventKey": "zNk3-zers-6Vn7",
                    "eventSport": "BASEBALL",
                    "eventName": "St. Louis Cardinals @ New York Mets",
                    "eventStartTime": "2025-04-18T23:11:00.000Z",
                    "eventHomeParticipantKey": "PFuk-wegw-5ViF",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "New York Mets",
                            "key": "PFuk-wegw-5ViF",
                            "shortName": "NYM",
                            "slug": "new-york-mets",
                            "sport": "BASEBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "St. Louis Cardinals",
                            "key": "Icui-wegw-pldc",
                            "shortName": "STL",
                            "slug": "st-louis-cardinals",
                            "sport": "BASEBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 Major League Baseball",
                    "competitionInstanceKey": "9Jss-zcjh-iOl3",
                    "competitionName": "Major League Baseball",
                    "competitionShortName": "MLB",
                    "competitionKey": "qK0E-wddv-bFet",
                    "previousModifier": 8.5
                }
            },
            {
                "type": "MODIFIER_DECREASE",
                "value": 0.5,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 7.5,
                        "payout": 1.83,
                        "source": "FAN_DUEL",
                        "type": "OVER",
                        "live": false,
                        "marketKey": "hhD9-zers-BKQX",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.287Z",
                        "stats": {
                            "minPayout": 1.91,
                            "maxPayout": 1.91
                        }
                    }
                ],
                "context": {
                    "marketKey": "hhD9-zers-BKQX",
                    "marketType": "POINT_TOTAL",
                    "marketSegment": "FULL_MATCH",
                    "eventKey": "zNk3-zers-6Vn7",
                    "eventSport": "BASEBALL",
                    "eventName": "St. Louis Cardinals @ New York Mets",
                    "eventStartTime": "2025-04-18T23:11:00.000Z",
                    "eventHomeParticipantKey": "PFuk-wegw-5ViF",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "New York Mets",
                            "key": "PFuk-wegw-5ViF",
                            "shortName": "NYM",
                            "slug": "new-york-mets",
                            "sport": "BASEBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "St. Louis Cardinals",
                            "key": "Icui-wegw-pldc",
                            "shortName": "STL",
                            "slug": "st-louis-cardinals",
                            "sport": "BASEBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 Major League Baseball",
                    "competitionInstanceKey": "9Jss-zcjh-iOl3",
                    "competitionName": "Major League Baseball",
                    "competitionShortName": "MLB",
                    "competitionKey": "qK0E-wddv-bFet",
                    "previousModifier": 8
                }
            },
            {
                "type": "MODIFIER_DECREASE",
                "value": 0.5,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 7.5,
                        "payout": 1.98,
                        "source": "FAN_DUEL",
                        "type": "UNDER",
                        "live": false,
                        "marketKey": "hhD9-zers-BKQX",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.287Z",
                        "stats": {
                            "minPayout": 1.91,
                            "maxPayout": 1.91
                        }
                    }
                ],
                "context": {
                    "marketKey": "hhD9-zers-BKQX",
                    "marketType": "POINT_TOTAL",
                    "marketSegment": "FULL_MATCH",
                    "eventKey": "zNk3-zers-6Vn7",
                    "eventSport": "BASEBALL",
                    "eventName": "St. Louis Cardinals @ New York Mets",
                    "eventStartTime": "2025-04-18T23:11:00.000Z",
                    "eventHomeParticipantKey": "PFuk-wegw-5ViF",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "New York Mets",
                            "key": "PFuk-wegw-5ViF",
                            "shortName": "NYM",
                            "slug": "new-york-mets",
                            "sport": "BASEBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "St. Louis Cardinals",
                            "key": "Icui-wegw-pldc",
                            "shortName": "STL",
                            "slug": "st-louis-cardinals",
                            "sport": "BASEBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 Major League Baseball",
                    "competitionInstanceKey": "9Jss-zcjh-iOl3",
                    "competitionName": "Major League Baseball",
                    "competitionShortName": "MLB",
                    "competitionKey": "qK0E-wddv-bFet",
                    "previousModifier": 8
                }
            },
            {
                "type": "MODIFIER_DECREASE",
                "value": 2,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 2.5,
                        "payout": 1.92,
                        "source": "BET_RIVERS",
                        "type": "OVER",
                        "live": false,
                        "marketKey": "jUVU-zegt-UNba",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.117Z",
                        "stats": {
                            "minPayout": 1.9,
                            "maxPayout": 1.91
                        }
                    }
                ],
                "context": {
                    "marketKey": "jUVU-zegt-UNba",
                    "marketType": "POINT_TOTAL",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "CxVe-zegt-qX5N",
                    "eventSport": "SOCCER",
                    "eventName": "Nantes @ Rennes",
                    "eventStartTime": "2025-04-18T18:45:00.000Z",
                    "eventHomeParticipantKey": "MdYl-wlct-w0Z6",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Rennes",
                            "key": "MdYl-wlct-w0Z6",
                            "shortName": "REN",
                            "slug": "rennes",
                            "sport": "SOCCER"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Nantes",
                            "key": "Lh9r-wlct-BazT",
                            "shortName": "NAN",
                            "slug": "nantes",
                            "sport": "SOCCER"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 French Ligue 1",
                    "competitionInstanceKey": "vqUs-yirv-BL4l",
                    "competitionName": "French Ligue 1",
                    "competitionShortName": "LIGUE_ONE",
                    "competitionKey": "xEL0-wlct-6byJ",
                    "previousModifier": 4.5
                }
            },
            {
                "type": "MODIFIER_DECREASE",
                "value": 2,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 2.5,
                        "payout": 1.88,
                        "source": "BET_RIVERS",
                        "type": "UNDER",
                        "live": false,
                        "marketKey": "jUVU-zegt-UNba",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.117Z",
                        "stats": {
                            "minPayout": 1.9,
                            "maxPayout": 1.91
                        }
                    }
                ],
                "context": {
                    "marketKey": "jUVU-zegt-UNba",
                    "marketType": "POINT_TOTAL",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "CxVe-zegt-qX5N",
                    "eventSport": "SOCCER",
                    "eventName": "Nantes @ Rennes",
                    "eventStartTime": "2025-04-18T18:45:00.000Z",
                    "eventHomeParticipantKey": "MdYl-wlct-w0Z6",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Rennes",
                            "key": "MdYl-wlct-w0Z6",
                            "shortName": "REN",
                            "slug": "rennes",
                            "sport": "SOCCER"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Nantes",
                            "key": "Lh9r-wlct-BazT",
                            "shortName": "NAN",
                            "slug": "nantes",
                            "sport": "SOCCER"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 French Ligue 1",
                    "competitionInstanceKey": "vqUs-yirv-BL4l",
                    "competitionName": "French Ligue 1",
                    "competitionShortName": "LIGUE_ONE",
                    "competitionKey": "xEL0-wlct-6byJ",
                    "previousModifier": 4.5
                }
            },
            {
                "type": "MODIFIER_DECREASE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 7.5,
                        "payout": 1.833333,
                        "source": "DRAFT_KINGS",
                        "type": "OVER",
                        "live": false,
                        "marketKey": "kgLa-zeqj-WYfx",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.274Z",
                        "stats": {
                            "minPayout": 1.91,
                            "maxPayout": 1.91
                        }
                    }
                ],
                "context": {
                    "marketKey": "kgLa-zeqj-WYfx",
                    "marketType": "INDIVIDUAL_POINT_TOTAL",
                    "marketSegment": "FULL_MATCH",
                    "marketParticipant": {
                        "category": "MENS_PROFESSIONAL",
                        "name": "Kentavious Caldwell-Pope",
                        "key": "2zCc-ycAk-Vygr",
                        "shortName": "K. Caldwell-Pope",
                        "slug": "kentavious-caldwell-pope",
                        "sport": "BASKETBALL"
                    },
                    "eventKey": "0HKV-zeqc-tbcB",
                    "eventSport": "BASKETBALL",
                    "eventName": "Orlando Magic @ Boston Celtics",
                    "eventStartTime": "2025-04-20T19:30:00.000Z",
                    "eventHomeParticipantKey": "aUbn-wddv-b90h",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Boston Celtics",
                            "key": "aUbn-wddv-b90h",
                            "shortName": "BOS",
                            "slug": "boston-celtics",
                            "sport": "BASKETBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Orlando Magic",
                            "key": "Q6FU-wddv-9NTI",
                            "shortName": "ORL",
                            "slug": "orlando-magic",
                            "sport": "BASKETBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 National Basketball Association",
                    "competitionInstanceKey": "g4sK-yinv-Lczx",
                    "competitionName": "National Basketball Association",
                    "competitionShortName": "NBA",
                    "competitionKey": "d791-wddv-30fU",
                    "previousModifier": 8.5
                }
            },
            {
                "type": "MODIFIER_DECREASE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 7.5,
                        "payout": 1.909091,
                        "source": "DRAFT_KINGS",
                        "type": "UNDER",
                        "live": false,
                        "marketKey": "kgLa-zeqj-WYfx",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.274Z",
                        "stats": {
                            "minPayout": 1.91,
                            "maxPayout": 1.91
                        }
                    }
                ],
                "context": {
                    "marketKey": "kgLa-zeqj-WYfx",
                    "marketType": "INDIVIDUAL_POINT_TOTAL",
                    "marketSegment": "FULL_MATCH",
                    "marketParticipant": {
                        "category": "MENS_PROFESSIONAL",
                        "name": "Kentavious Caldwell-Pope",
                        "key": "2zCc-ycAk-Vygr",
                        "shortName": "K. Caldwell-Pope",
                        "slug": "kentavious-caldwell-pope",
                        "sport": "BASKETBALL"
                    },
                    "eventKey": "0HKV-zeqc-tbcB",
                    "eventSport": "BASKETBALL",
                    "eventName": "Orlando Magic @ Boston Celtics",
                    "eventStartTime": "2025-04-20T19:30:00.000Z",
                    "eventHomeParticipantKey": "aUbn-wddv-b90h",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Boston Celtics",
                            "key": "aUbn-wddv-b90h",
                            "shortName": "BOS",
                            "slug": "boston-celtics",
                            "sport": "BASKETBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Orlando Magic",
                            "key": "Q6FU-wddv-9NTI",
                            "shortName": "ORL",
                            "slug": "orlando-magic",
                            "sport": "BASKETBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 National Basketball Association",
                    "competitionInstanceKey": "g4sK-yinv-Lczx",
                    "competitionName": "National Basketball Association",
                    "competitionShortName": "NBA",
                    "competitionKey": "d791-wddv-30fU",
                    "previousModifier": 8.5
                }
            },
            {
                "type": "MODIFIER_DECREASE",
                "value": 0.5,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": -1,
                        "payout": 2.05,
                        "source": "BOVADA",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "lX4L-zerx-Mal6",
                        "participantKey": "farj-wegw-apsI",
                        "time": "2025-04-18T02:29:00.254Z",
                        "stats": {
                            "minPayout": 2.2,
                            "maxPayout": 2.2
                        }
                    }
                ],
                "context": {
                    "marketKey": "lX4L-zerx-Mal6",
                    "marketType": "POINT_SPREAD",
                    "marketSegment": "FIRST_5_INNINGS",
                    "eventKey": "fGWY-zers-TGcJ",
                    "eventSport": "BASEBALL",
                    "eventName": "Miami Marlins @ Philadelphia Phillies",
                    "eventStartTime": "2025-04-18T22:46:00.000Z",
                    "eventHomeParticipantKey": "farj-wegw-apsI",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Miami Marlins",
                            "key": "7eOD-wegw-VR1e",
                            "shortName": "MIA",
                            "slug": "miami-marlins",
                            "sport": "BASEBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Philadelphia Phillies",
                            "key": "farj-wegw-apsI",
                            "shortName": "PHI",
                            "slug": "philadelphia-phillies",
                            "sport": "BASEBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 Major League Baseball",
                    "competitionInstanceKey": "9Jss-zcjh-iOl3",
                    "competitionName": "Major League Baseball",
                    "competitionShortName": "MLB",
                    "competitionKey": "qK0E-wddv-bFet",
                    "previousModifier": -0.5
                }
            },
            {
                "type": "MODIFIER_DECREASE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 21.5,
                        "payout": 1.869565,
                        "source": "DRAFT_KINGS",
                        "type": "OVER",
                        "live": false,
                        "marketKey": "llUh-zeqj-m0By",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.274Z",
                        "stats": {
                            "minPayout": 1.95,
                            "maxPayout": 1.95
                        }
                    }
                ],
                "context": {
                    "marketKey": "llUh-zeqj-m0By",
                    "marketType": "INDIVIDUAL_POINT_TOTAL",
                    "marketSegment": "FULL_MATCH",
                    "marketParticipant": {
                        "category": "MENS_PROFESSIONAL",
                        "name": "Franz Wagner",
                        "key": "WtyX-ycAk-UnF5",
                        "shortName": "F. Wagner",
                        "slug": "franz-wagner",
                        "sport": "BASKETBALL"
                    },
                    "eventKey": "0HKV-zeqc-tbcB",
                    "eventSport": "BASKETBALL",
                    "eventName": "Orlando Magic @ Boston Celtics",
                    "eventStartTime": "2025-04-20T19:30:00.000Z",
                    "eventHomeParticipantKey": "aUbn-wddv-b90h",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Boston Celtics",
                            "key": "aUbn-wddv-b90h",
                            "shortName": "BOS",
                            "slug": "boston-celtics",
                            "sport": "BASKETBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Orlando Magic",
                            "key": "Q6FU-wddv-9NTI",
                            "shortName": "ORL",
                            "slug": "orlando-magic",
                            "sport": "BASKETBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 National Basketball Association",
                    "competitionInstanceKey": "g4sK-yinv-Lczx",
                    "competitionName": "National Basketball Association",
                    "competitionShortName": "NBA",
                    "competitionKey": "d791-wddv-30fU",
                    "previousModifier": 22.5
                }
            },
            {
                "type": "MODIFIER_DECREASE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 21.5,
                        "payout": 1.869565,
                        "source": "DRAFT_KINGS",
                        "type": "UNDER",
                        "live": false,
                        "marketKey": "llUh-zeqj-m0By",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.274Z",
                        "stats": {
                            "minPayout": 1.95,
                            "maxPayout": 1.95
                        }
                    }
                ],
                "context": {
                    "marketKey": "llUh-zeqj-m0By",
                    "marketType": "INDIVIDUAL_POINT_TOTAL",
                    "marketSegment": "FULL_MATCH",
                    "marketParticipant": {
                        "category": "MENS_PROFESSIONAL",
                        "name": "Franz Wagner",
                        "key": "WtyX-ycAk-UnF5",
                        "shortName": "F. Wagner",
                        "slug": "franz-wagner",
                        "sport": "BASKETBALL"
                    },
                    "eventKey": "0HKV-zeqc-tbcB",
                    "eventSport": "BASKETBALL",
                    "eventName": "Orlando Magic @ Boston Celtics",
                    "eventStartTime": "2025-04-20T19:30:00.000Z",
                    "eventHomeParticipantKey": "aUbn-wddv-b90h",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Boston Celtics",
                            "key": "aUbn-wddv-b90h",
                            "shortName": "BOS",
                            "slug": "boston-celtics",
                            "sport": "BASKETBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Orlando Magic",
                            "key": "Q6FU-wddv-9NTI",
                            "shortName": "ORL",
                            "slug": "orlando-magic",
                            "sport": "BASKETBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 National Basketball Association",
                    "competitionInstanceKey": "g4sK-yinv-Lczx",
                    "competitionName": "National Basketball Association",
                    "competitionShortName": "NBA",
                    "competitionKey": "d791-wddv-30fU",
                    "previousModifier": 22.5
                }
            },
            {
                "type": "MODIFIER_DECREASE",
                "value": 0.5,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 7.5,
                        "payout": 1.83,
                        "source": "FANATICS",
                        "type": "OVER",
                        "live": false,
                        "marketKey": "m0zP-zers-HZBg",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.287Z",
                        "stats": {
                            "minPayout": 1.91,
                            "maxPayout": 1.91
                        }
                    }
                ],
                "context": {
                    "marketKey": "m0zP-zers-HZBg",
                    "marketType": "POINT_TOTAL",
                    "marketSegment": "FULL_MATCH",
                    "eventKey": "z5RA-zers-0pc0",
                    "eventSport": "BASEBALL",
                    "eventName": "Los Angeles Dodgers @ Texas Rangers",
                    "eventStartTime": "2025-04-19T00:06:00.000Z",
                    "eventHomeParticipantKey": "4T9Y-wegw-9sVP",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Texas Rangers",
                            "key": "4T9Y-wegw-9sVP",
                            "shortName": "TEX",
                            "slug": "texas-rangers",
                            "sport": "BASEBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Los Angeles Dodgers",
                            "key": "CHEM-wegw-VVSn",
                            "shortName": "LAD",
                            "slug": "los-angeles-dodgers",
                            "sport": "BASEBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 Major League Baseball",
                    "competitionInstanceKey": "9Jss-zcjh-iOl3",
                    "competitionName": "Major League Baseball",
                    "competitionShortName": "MLB",
                    "competitionKey": "qK0E-wddv-bFet",
                    "previousModifier": 8
                }
            },
            {
                "type": "MODIFIER_DECREASE",
                "value": 0.5,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 7.5,
                        "payout": 2,
                        "source": "FANATICS",
                        "type": "UNDER",
                        "live": false,
                        "marketKey": "m0zP-zers-HZBg",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.287Z",
                        "stats": {
                            "minPayout": 1.91,
                            "maxPayout": 1.91
                        }
                    }
                ],
                "context": {
                    "marketKey": "m0zP-zers-HZBg",
                    "marketType": "POINT_TOTAL",
                    "marketSegment": "FULL_MATCH",
                    "eventKey": "z5RA-zers-0pc0",
                    "eventSport": "BASEBALL",
                    "eventName": "Los Angeles Dodgers @ Texas Rangers",
                    "eventStartTime": "2025-04-19T00:06:00.000Z",
                    "eventHomeParticipantKey": "4T9Y-wegw-9sVP",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Texas Rangers",
                            "key": "4T9Y-wegw-9sVP",
                            "shortName": "TEX",
                            "slug": "texas-rangers",
                            "sport": "BASEBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Los Angeles Dodgers",
                            "key": "CHEM-wegw-VVSn",
                            "shortName": "LAD",
                            "slug": "los-angeles-dodgers",
                            "sport": "BASEBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 Major League Baseball",
                    "competitionInstanceKey": "9Jss-zcjh-iOl3",
                    "competitionName": "Major League Baseball",
                    "competitionShortName": "MLB",
                    "competitionKey": "qK0E-wddv-bFet",
                    "previousModifier": 8
                }
            },
            {
                "type": "MODIFIER_DECREASE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 15.5,
                        "payout": 1.769231,
                        "source": "DRAFT_KINGS",
                        "type": "OVER",
                        "live": false,
                        "marketKey": "wiT9-zeot-UuDa",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.274Z",
                        "stats": {
                            "minPayout": 1.769231,
                            "maxPayout": 1.833333
                        }
                    }
                ],
                "context": {
                    "marketKey": "wiT9-zeot-UuDa",
                    "marketType": "INDIVIDUAL_POINT_TOTAL",
                    "marketSegment": "FULL_MATCH",
                    "marketParticipant": {
                        "category": "MENS_PROFESSIONAL",
                        "name": "Michael Porter Jr.",
                        "key": "7Iil-ycAk-jEBC",
                        "shortName": "M. Porter Jr.",
                        "slug": "michael-porter-jr",
                        "sport": "BASKETBALL"
                    },
                    "eventKey": "4d0b-zenw-ZAPR",
                    "eventSport": "BASKETBALL",
                    "eventName": "Los Angeles Clippers @ Denver Nuggets",
                    "eventStartTime": "2025-04-19T19:40:00.000Z",
                    "eventHomeParticipantKey": "eI2D-wddv-4NJj",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Denver Nuggets",
                            "key": "eI2D-wddv-4NJj",
                            "shortName": "DEN",
                            "slug": "denver-nuggets",
                            "sport": "BASKETBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Los Angeles Clippers",
                            "key": "OABG-wddv-xt3n",
                            "shortName": "LAC",
                            "slug": "los-angeles-clippers",
                            "sport": "BASKETBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 National Basketball Association",
                    "competitionInstanceKey": "g4sK-yinv-Lczx",
                    "competitionName": "National Basketball Association",
                    "competitionShortName": "NBA",
                    "competitionKey": "d791-wddv-30fU",
                    "previousModifier": 16.5
                }
            },
            {
                "type": "MODIFIER_DECREASE",
                "value": 1,
                "valueType": "POINT",
                "outcomes": [
                    {
                        "modifier": 15.5,
                        "payout": 2,
                        "source": "DRAFT_KINGS",
                        "type": "UNDER",
                        "live": false,
                        "marketKey": "wiT9-zeot-UuDa",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.274Z",
                        "stats": {
                            "minPayout": 1.769231,
                            "maxPayout": 1.833333
                        }
                    }
                ],
                "context": {
                    "marketKey": "wiT9-zeot-UuDa",
                    "marketType": "INDIVIDUAL_POINT_TOTAL",
                    "marketSegment": "FULL_MATCH",
                    "marketParticipant": {
                        "category": "MENS_PROFESSIONAL",
                        "name": "Michael Porter Jr.",
                        "key": "7Iil-ycAk-jEBC",
                        "shortName": "M. Porter Jr.",
                        "slug": "michael-porter-jr",
                        "sport": "BASKETBALL"
                    },
                    "eventKey": "4d0b-zenw-ZAPR",
                    "eventSport": "BASKETBALL",
                    "eventName": "Los Angeles Clippers @ Denver Nuggets",
                    "eventStartTime": "2025-04-19T19:40:00.000Z",
                    "eventHomeParticipantKey": "eI2D-wddv-4NJj",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Denver Nuggets",
                            "key": "eI2D-wddv-4NJj",
                            "shortName": "DEN",
                            "slug": "denver-nuggets",
                            "sport": "BASKETBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Los Angeles Clippers",
                            "key": "OABG-wddv-xt3n",
                            "shortName": "LAC",
                            "slug": "los-angeles-clippers",
                            "sport": "BASKETBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 National Basketball Association",
                    "competitionInstanceKey": "g4sK-yinv-Lczx",
                    "competitionName": "National Basketball Association",
                    "competitionShortName": "NBA",
                    "competitionKey": "d791-wddv-30fU",
                    "previousModifier": 16.5
                }
            }
        ],
        "PAYOUT_INCREASE": [
            {
                "type": "PAYOUT_INCREASE",
                "value": 15.527950310559005,
                "valueType": "PERCENT",
                "outcomes": [
                    {
                        "modifier": 1,
                        "payout": 1.86,
                        "source": "BET_PARX",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "09tI-zerb-qX5s",
                        "participantKey": "0Ch7-wddv-OrXs",
                        "time": "2025-04-18T02:29:00.161Z",
                        "stats": {
                            "minPayout": 1.61,
                            "maxPayout": 1.61
                        }
                    }
                ],
                "context": {
                    "marketKey": "09tI-zerb-qX5s",
                    "marketType": "POINT_SPREAD",
                    "marketSegment": "FULL_MATCH",
                    "eventKey": "BsiB-zerb-sFT3",
                    "eventSport": "BASKETBALL",
                    "eventName": "Miami Heat @ Atlanta Hawks",
                    "eventStartTime": "2025-04-18T23:10:00.000Z",
                    "eventHomeParticipantKey": "0Ch7-wddv-OrXs",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Atlanta Hawks",
                            "key": "0Ch7-wddv-OrXs",
                            "shortName": "ATL",
                            "slug": "atlanta-hawks",
                            "sport": "BASKETBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Miami Heat",
                            "key": "biYO-wddv-j7OK",
                            "shortName": "MIA",
                            "slug": "miami-heat",
                            "sport": "BASKETBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 National Basketball Association",
                    "competitionInstanceKey": "g4sK-yinv-Lczx",
                    "competitionName": "National Basketball Association",
                    "competitionShortName": "NBA",
                    "competitionKey": "d791-wddv-30fU",
                    "previousPayout": 1.61
                }
            },
            {
                "type": "PAYOUT_INCREASE",
                "value": 15.527950310559005,
                "valueType": "PERCENT",
                "outcomes": [
                    {
                        "modifier": 1,
                        "payout": 1.86,
                        "source": "BET_RIVERS",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "09tI-zerb-qX5s",
                        "participantKey": "0Ch7-wddv-OrXs",
                        "time": "2025-04-18T02:29:00.091Z",
                        "stats": {
                            "minPayout": 1.61,
                            "maxPayout": 1.61
                        }
                    }
                ],
                "context": {
                    "marketKey": "09tI-zerb-qX5s",
                    "marketType": "POINT_SPREAD",
                    "marketSegment": "FULL_MATCH",
                    "eventKey": "BsiB-zerb-sFT3",
                    "eventSport": "BASKETBALL",
                    "eventName": "Miami Heat @ Atlanta Hawks",
                    "eventStartTime": "2025-04-18T23:10:00.000Z",
                    "eventHomeParticipantKey": "0Ch7-wddv-OrXs",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Atlanta Hawks",
                            "key": "0Ch7-wddv-OrXs",
                            "shortName": "ATL",
                            "slug": "atlanta-hawks",
                            "sport": "BASKETBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Miami Heat",
                            "key": "biYO-wddv-j7OK",
                            "shortName": "MIA",
                            "slug": "miami-heat",
                            "sport": "BASKETBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 National Basketball Association",
                    "competitionInstanceKey": "g4sK-yinv-Lczx",
                    "competitionName": "National Basketball Association",
                    "competitionShortName": "NBA",
                    "competitionKey": "d791-wddv-30fU",
                    "previousPayout": 1.61
                }
            },
            {
                "type": "PAYOUT_INCREASE",
                "value": 81.82926385782284,
                "valueType": "PERCENT",
                "outcomes": [
                    {
                        "modifier": 0,
                        "payout": 3.55,
                        "source": "BOVADA",
                        "type": "YES",
                        "live": false,
                        "marketKey": "3uVc-zeoq-yaZI",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.271Z",
                        "stats": {
                            "minPayout": 1.952381,
                            "maxPayout": 4.7
                        }
                    }
                ],
                "context": {
                    "marketKey": "3uVc-zeoq-yaZI",
                    "marketType": "BOTH_TEAMS_TO_SCORE",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "j0ix-zeom-eiPC",
                    "eventSport": "SOCCER",
                    "eventName": "NJ/NY Gotham FC @ Angel City FC",
                    "eventStartTime": "2025-04-19T02:30:00.000Z",
                    "eventHomeParticipantKey": "qEU5-zdyf-BZpr",
                    "eventParticipants": [
                        {
                            "category": "WOMENS_PROFESSIONAL",
                            "name": "Angel City FC",
                            "key": "qEU5-zdyf-BZpr",
                            "shortName": "ACFC",
                            "slug": "angel-city-fc",
                            "sport": "SOCCER"
                        },
                        {
                            "category": "WOMENS_PROFESSIONAL",
                            "name": "NJ/NY Gotham FC",
                            "key": "SRlG-zdyf-CeHn",
                            "shortName": "NJY",
                            "slug": "njny-gotham-fc",
                            "sport": "SOCCER"
                        }
                    ],
                    "eventCategory": "WOMENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 National Women's Soccer League",
                    "competitionInstanceKey": "uwPR-zdyf-kN5I",
                    "competitionName": "National Women's Soccer League",
                    "competitionShortName": "NWSL",
                    "competitionKey": "Nsmy-zdyf-GeH4",
                    "previousPayout": 1.952381
                }
            },
            {
                "type": "PAYOUT_INCREASE",
                "value": 13.043463516069975,
                "valueType": "PERCENT",
                "outcomes": [
                    {
                        "modifier": 9.5,
                        "payout": 2,
                        "source": "DRAFT_KINGS",
                        "type": "OVER",
                        "live": false,
                        "marketKey": "4JRn-zeqt-e9KA",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.274Z",
                        "stats": {
                            "minPayout": 1.769231,
                            "maxPayout": 1.769231
                        }
                    }
                ],
                "context": {
                    "marketKey": "4JRn-zeqt-e9KA",
                    "marketType": "INDIVIDUAL_POINT_TOTAL",
                    "marketSegment": "FULL_MATCH",
                    "marketParticipant": {
                        "category": "MENS_PROFESSIONAL",
                        "name": "Payton Pritchard",
                        "key": "zYYZ-ycAk-q2hu",
                        "shortName": "P. Pritchard",
                        "slug": "payton-pritchard",
                        "sport": "BASKETBALL"
                    },
                    "eventKey": "0HKV-zeqc-tbcB",
                    "eventSport": "BASKETBALL",
                    "eventName": "Orlando Magic @ Boston Celtics",
                    "eventStartTime": "2025-04-20T19:30:00.000Z",
                    "eventHomeParticipantKey": "aUbn-wddv-b90h",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Boston Celtics",
                            "key": "aUbn-wddv-b90h",
                            "shortName": "BOS",
                            "slug": "boston-celtics",
                            "sport": "BASKETBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Orlando Magic",
                            "key": "Q6FU-wddv-9NTI",
                            "shortName": "ORL",
                            "slug": "orlando-magic",
                            "sport": "BASKETBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 National Basketball Association",
                    "competitionInstanceKey": "g4sK-yinv-Lczx",
                    "competitionName": "National Basketball Association",
                    "competitionShortName": "NBA",
                    "competitionKey": "d791-wddv-30fU",
                    "previousPayout": 1.769231
                }
            },
            {
                "type": "PAYOUT_INCREASE",
                "value": 13.52657004830919,
                "valueType": "PERCENT",
                "outcomes": [
                    {
                        "modifier": -0.5,
                        "payout": 2.35,
                        "source": "BOVADA",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "7M4G-zero-KesK",
                        "participantKey": "rkK0-wiDr-xpZ3",
                        "time": "2025-04-18T02:29:00.257Z",
                        "stats": {
                            "minPayout": 2.07,
                            "maxPayout": 2.07
                        }
                    }
                ],
                "context": {
                    "marketKey": "7M4G-zero-KesK",
                    "marketType": "POINT_SPREAD",
                    "marketSegment": "FIRST_5_INNINGS",
                    "eventKey": "wp3W-zern-dtnj",
                    "eventSport": "BASEBALL",
                    "eventName": "Fukuoka SoftBank Hawks @ Saitama Seibu Lions",
                    "eventStartTime": "2025-04-18T09:00:00.000Z",
                    "eventHomeParticipantKey": "rkK0-wiDr-xpZ3",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Fukuoka SoftBank Hawks",
                            "key": "5Wnu-wiDr-CnNp",
                            "shortName": "SBH",
                            "slug": "fukuoka-softbank-hawks",
                            "sport": "BASEBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Saitama Seibu Lions",
                            "key": "rkK0-wiDr-xpZ3",
                            "shortName": "SSL",
                            "slug": "saitama-seibu-lions",
                            "sport": "BASEBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 Nippon Professional Baseball League",
                    "competitionInstanceKey": "KLrD-zdeg-kORo",
                    "competitionName": "Nippon Professional Baseball League",
                    "competitionShortName": "NPB",
                    "competitionKey": "CWpx-wiDr-05BA",
                    "previousPayout": 2.07
                }
            },
            {
                "type": "PAYOUT_INCREASE",
                "value": 153.58492479886223,
                "valueType": "PERCENT",
                "outcomes": [
                    {
                        "modifier": 0,
                        "payout": 4.8,
                        "source": "BOVADA",
                        "type": "YES",
                        "live": false,
                        "marketKey": "CZ4j-zeoq-zsNq",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.271Z",
                        "stats": {
                            "minPayout": 1.892857,
                            "maxPayout": 4.8
                        }
                    }
                ],
                "context": {
                    "marketKey": "CZ4j-zeoq-zsNq",
                    "marketType": "BOTH_TEAMS_TO_SCORE",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "UqEF-zeom-nw4K",
                    "eventSport": "SOCCER",
                    "eventName": "Bay FC @ North Carolina Courage",
                    "eventStartTime": "2025-04-19T23:00:00.000Z",
                    "eventHomeParticipantKey": "10Fi-zdyf-XkBc",
                    "eventParticipants": [
                        {
                            "category": "WOMENS_PROFESSIONAL",
                            "name": "Bay FC",
                            "key": "cfr3-zdyf-Nxuk",
                            "shortName": "BAY",
                            "slug": "bay-fc",
                            "sport": "SOCCER"
                        },
                        {
                            "category": "WOMENS_PROFESSIONAL",
                            "name": "North Carolina Courage",
                            "key": "10Fi-zdyf-XkBc",
                            "shortName": "NCC",
                            "slug": "north-carolina-courage",
                            "sport": "SOCCER"
                        }
                    ],
                    "eventCategory": "WOMENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 National Women's Soccer League",
                    "competitionInstanceKey": "uwPR-zdyf-kN5I",
                    "competitionName": "National Women's Soccer League",
                    "competitionShortName": "NWSL",
                    "competitionKey": "Nsmy-zdyf-GeH4",
                    "previousPayout": 1.892857
                }
            },
            {
                "type": "PAYOUT_INCREASE",
                "value": 11.81820214876401,
                "valueType": "PERCENT",
                "outcomes": [
                    {
                        "modifier": 2,
                        "payout": 2.05,
                        "source": "BOVADA",
                        "type": "UNDER",
                        "live": false,
                        "marketKey": "DQGZ-zero-a532",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.257Z",
                        "stats": {
                            "minPayout": 1.833333,
                            "maxPayout": 1.87
                        }
                    }
                ],
                "context": {
                    "marketKey": "DQGZ-zero-a532",
                    "marketType": "POINT_TOTAL",
                    "marketSegment": "FIRST_5_INNINGS",
                    "eventKey": "IlOJ-zern-LQlg",
                    "eventSport": "BASEBALL",
                    "eventName": "Hiroshima Toyo Carp @ Hanshin Tigers",
                    "eventStartTime": "2025-04-18T09:00:00.000Z",
                    "eventHomeParticipantKey": "p6Qm-wiDr-cSCa",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Hiroshima Toyo Carp",
                            "key": "0Ndq-wiDr-NokT",
                            "shortName": "HTC",
                            "slug": "hiroshima-toyo-carp",
                            "sport": "BASEBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Hanshin Tigers",
                            "key": "p6Qm-wiDr-cSCa",
                            "shortName": "HST",
                            "slug": "hanshin-tigers",
                            "sport": "BASEBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 Nippon Professional Baseball League",
                    "competitionInstanceKey": "KLrD-zdeg-kORo",
                    "competitionName": "Nippon Professional Baseball League",
                    "competitionShortName": "NPB",
                    "competitionKey": "CWpx-wiDr-05BA",
                    "previousPayout": 1.833333
                }
            },
            {
                "type": "PAYOUT_INCREASE",
                "value": 14.545475371904612,
                "valueType": "PERCENT",
                "outcomes": [
                    {
                        "modifier": 2,
                        "payout": 2.1,
                        "source": "DRAFT_KINGS",
                        "type": "UNDER",
                        "live": false,
                        "marketKey": "DQGZ-zero-a532",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.278Z",
                        "stats": {
                            "minPayout": 1.833333,
                            "maxPayout": 1.87
                        }
                    }
                ],
                "context": {
                    "marketKey": "DQGZ-zero-a532",
                    "marketType": "POINT_TOTAL",
                    "marketSegment": "FIRST_5_INNINGS",
                    "eventKey": "IlOJ-zern-LQlg",
                    "eventSport": "BASEBALL",
                    "eventName": "Hiroshima Toyo Carp @ Hanshin Tigers",
                    "eventStartTime": "2025-04-18T09:00:00.000Z",
                    "eventHomeParticipantKey": "p6Qm-wiDr-cSCa",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Hiroshima Toyo Carp",
                            "key": "0Ndq-wiDr-NokT",
                            "shortName": "HTC",
                            "slug": "hiroshima-toyo-carp",
                            "sport": "BASEBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Hanshin Tigers",
                            "key": "p6Qm-wiDr-cSCa",
                            "shortName": "HST",
                            "slug": "hanshin-tigers",
                            "sport": "BASEBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 Nippon Professional Baseball League",
                    "competitionInstanceKey": "KLrD-zdeg-kORo",
                    "competitionName": "Nippon Professional Baseball League",
                    "competitionShortName": "NPB",
                    "competitionKey": "CWpx-wiDr-05BA",
                    "previousPayout": 1.833333
                }
            },
            {
                "type": "PAYOUT_INCREASE",
                "value": 21.52172327977522,
                "valueType": "PERCENT",
                "outcomes": [
                    {
                        "modifier": 9.5,
                        "payout": 2.15,
                        "source": "ESPN_BET",
                        "type": "OVER",
                        "live": false,
                        "marketKey": "OFUD-zert-VVgO",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.282Z",
                        "stats": {
                            "minPayout": 1.769231,
                            "maxPayout": 1.769231
                        }
                    }
                ],
                "context": {
                    "marketKey": "OFUD-zert-VVgO",
                    "marketType": "POINT_TOTAL",
                    "marketSegment": "FULL_MATCH",
                    "eventKey": "wVxF-zert-vD7N",
                    "eventSport": "BASEBALL",
                    "eventName": "Cincinnati Reds @ Baltimore Orioles",
                    "eventStartTime": "2025-04-18T23:05:00.000Z",
                    "eventHomeParticipantKey": "s8tZ-wegw-MG5X",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Baltimore Orioles",
                            "key": "s8tZ-wegw-MG5X",
                            "shortName": "BAL",
                            "slug": "baltimore-orioles",
                            "sport": "BASEBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Cincinnati Reds",
                            "key": "Lrjq-wegw-6eFF",
                            "shortName": "CIN",
                            "slug": "cincinnati-reds",
                            "sport": "BASEBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 Major League Baseball",
                    "competitionInstanceKey": "9Jss-zcjh-iOl3",
                    "competitionName": "Major League Baseball",
                    "competitionShortName": "MLB",
                    "competitionKey": "qK0E-wddv-bFet",
                    "previousPayout": 1.769231
                }
            },
            {
                "type": "PAYOUT_INCREASE",
                "value": 40.380945696145446,
                "valueType": "PERCENT",
                "outcomes": [
                    {
                        "modifier": 0,
                        "payout": 2.68,
                        "source": "BOVADA",
                        "type": "YES",
                        "live": false,
                        "marketKey": "Z9tC-zeoq-PO6o",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.271Z",
                        "stats": {
                            "minPayout": 1.909091,
                            "maxPayout": 5
                        }
                    }
                ],
                "context": {
                    "marketKey": "Z9tC-zeoq-PO6o",
                    "marketType": "BOTH_TEAMS_TO_SCORE",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "gFsZ-zeom-XzW7",
                    "eventSport": "SOCCER",
                    "eventName": "San Diego Wave FC @ Racing Louisville FC",
                    "eventStartTime": "2025-04-19T19:00:00.000Z",
                    "eventHomeParticipantKey": "07Ah-zdyf-Z3Af",
                    "eventParticipants": [
                        {
                            "category": "WOMENS_PROFESSIONAL",
                            "name": "Racing Louisville FC",
                            "key": "07Ah-zdyf-Z3Af",
                            "shortName": "LOU",
                            "slug": "racing-louisville-fc",
                            "sport": "SOCCER"
                        },
                        {
                            "category": "WOMENS_PROFESSIONAL",
                            "name": "San Diego Wave FC",
                            "key": "WiRv-zdyf-doDf",
                            "shortName": "SD",
                            "slug": "san-diego-wave-fc",
                            "sport": "SOCCER"
                        }
                    ],
                    "eventCategory": "WOMENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 National Women's Soccer League",
                    "competitionInstanceKey": "uwPR-zdyf-kN5I",
                    "competitionName": "National Women's Soccer League",
                    "competitionShortName": "NWSL",
                    "competitionKey": "Nsmy-zdyf-GeH4",
                    "previousPayout": 1.909091
                }
            },
            {
                "type": "PAYOUT_INCREASE",
                "value": 10.571396979600875,
                "valueType": "PERCENT",
                "outcomes": [
                    {
                        "modifier": 0,
                        "payout": 1.29,
                        "source": "BOVADA",
                        "type": "NO",
                        "live": false,
                        "marketKey": "Z9tC-zeoq-PO6o",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.271Z",
                        "stats": {
                            "minPayout": 1.166667,
                            "maxPayout": 1.833333
                        }
                    }
                ],
                "context": {
                    "marketKey": "Z9tC-zeoq-PO6o",
                    "marketType": "BOTH_TEAMS_TO_SCORE",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "gFsZ-zeom-XzW7",
                    "eventSport": "SOCCER",
                    "eventName": "San Diego Wave FC @ Racing Louisville FC",
                    "eventStartTime": "2025-04-19T19:00:00.000Z",
                    "eventHomeParticipantKey": "07Ah-zdyf-Z3Af",
                    "eventParticipants": [
                        {
                            "category": "WOMENS_PROFESSIONAL",
                            "name": "Racing Louisville FC",
                            "key": "07Ah-zdyf-Z3Af",
                            "shortName": "LOU",
                            "slug": "racing-louisville-fc",
                            "sport": "SOCCER"
                        },
                        {
                            "category": "WOMENS_PROFESSIONAL",
                            "name": "San Diego Wave FC",
                            "key": "WiRv-zdyf-doDf",
                            "shortName": "SD",
                            "slug": "san-diego-wave-fc",
                            "sport": "SOCCER"
                        }
                    ],
                    "eventCategory": "WOMENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 National Women's Soccer League",
                    "competitionInstanceKey": "uwPR-zdyf-kN5I",
                    "competitionName": "National Women's Soccer League",
                    "competitionShortName": "NWSL",
                    "competitionKey": "Nsmy-zdyf-GeH4",
                    "previousPayout": 1.166667
                }
            },
            {
                "type": "PAYOUT_INCREASE",
                "value": 20.000021818185786,
                "valueType": "PERCENT",
                "outcomes": [
                    {
                        "modifier": 2,
                        "payout": 2.2,
                        "source": "BOVADA",
                        "type": "OVER",
                        "live": false,
                        "marketKey": "ZT0J-zern-MjWf",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.257Z",
                        "stats": {
                            "minPayout": 1.833333,
                            "maxPayout": 1.87
                        }
                    }
                ],
                "context": {
                    "marketKey": "ZT0J-zern-MjWf",
                    "marketType": "POINT_TOTAL",
                    "marketSegment": "PERIOD_2",
                    "eventKey": "NOOz-zerd-Sf3r",
                    "eventSport": "ICE_HOCKEY",
                    "eventName": "Colorado Avalanche @ Dallas Stars",
                    "eventStartTime": "2025-04-20T00:40:00.000Z",
                    "eventHomeParticipantKey": "FVI6-wddv-FBYa",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Dallas Stars",
                            "key": "FVI6-wddv-FBYa",
                            "shortName": "DAL",
                            "slug": "dallas-stars",
                            "sport": "ICE_HOCKEY"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Colorado Avalanche",
                            "key": "UtU0-wddv-lD6J",
                            "shortName": "COL",
                            "slug": "colorado-avalanche",
                            "sport": "ICE_HOCKEY"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 National Hockey League",
                    "competitionInstanceKey": "g0P0-yiqv-FKyR",
                    "competitionName": "National Hockey League",
                    "competitionShortName": "NHL",
                    "competitionKey": "384d-wddv-w6oc",
                    "previousPayout": 1.833333
                }
            },
            {
                "type": "PAYOUT_INCREASE",
                "value": 129.26829268292687,
                "valueType": "PERCENT",
                "outcomes": [
                    {
                        "modifier": 0,
                        "payout": 4.7,
                        "source": "BOVADA",
                        "type": "YES",
                        "live": false,
                        "marketKey": "n0nV-zeoq-wtD5",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.271Z",
                        "stats": {
                            "minPayout": 2.05,
                            "maxPayout": 8.25
                        }
                    }
                ],
                "context": {
                    "marketKey": "n0nV-zeoq-wtD5",
                    "marketType": "BOTH_TEAMS_TO_SCORE",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "RoYJ-zeoq-rtiM",
                    "eventSport": "SOCCER",
                    "eventName": "Chicago Stars FC @ Utah Royals",
                    "eventStartTime": "2025-04-19T01:30:00.000Z",
                    "eventHomeParticipantKey": "URcI-zdyf-FR0M",
                    "eventParticipants": [
                        {
                            "category": "WOMENS_PROFESSIONAL",
                            "name": "Chicago Stars FC",
                            "key": "EHQM-zdyf-Ea0A",
                            "shortName": "CHI",
                            "slug": "chicago-stars-fc",
                            "sport": "SOCCER"
                        },
                        {
                            "category": "WOMENS_PROFESSIONAL",
                            "name": "Utah Royals",
                            "key": "URcI-zdyf-FR0M",
                            "shortName": "UTA",
                            "slug": "utah-royals",
                            "sport": "SOCCER"
                        }
                    ],
                    "eventCategory": "WOMENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 National Women's Soccer League",
                    "competitionInstanceKey": "uwPR-zdyf-kN5I",
                    "competitionName": "National Women's Soccer League",
                    "competitionShortName": "NWSL",
                    "competitionKey": "Nsmy-zdyf-GeH4",
                    "previousPayout": 2.05
                }
            },
            {
                "type": "PAYOUT_INCREASE",
                "value": 41.72935298066806,
                "valueType": "PERCENT",
                "outcomes": [
                    {
                        "modifier": 0,
                        "payout": 1.526316,
                        "source": "BOVADA",
                        "type": "NO",
                        "live": false,
                        "marketKey": "n0nV-zeoq-wtD5",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.271Z",
                        "stats": {
                            "minPayout": 1.076923,
                            "maxPayout": 1.741
                        }
                    }
                ],
                "context": {
                    "marketKey": "n0nV-zeoq-wtD5",
                    "marketType": "BOTH_TEAMS_TO_SCORE",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "RoYJ-zeoq-rtiM",
                    "eventSport": "SOCCER",
                    "eventName": "Chicago Stars FC @ Utah Royals",
                    "eventStartTime": "2025-04-19T01:30:00.000Z",
                    "eventHomeParticipantKey": "URcI-zdyf-FR0M",
                    "eventParticipants": [
                        {
                            "category": "WOMENS_PROFESSIONAL",
                            "name": "Chicago Stars FC",
                            "key": "EHQM-zdyf-Ea0A",
                            "shortName": "CHI",
                            "slug": "chicago-stars-fc",
                            "sport": "SOCCER"
                        },
                        {
                            "category": "WOMENS_PROFESSIONAL",
                            "name": "Utah Royals",
                            "key": "URcI-zdyf-FR0M",
                            "shortName": "UTA",
                            "slug": "utah-royals",
                            "sport": "SOCCER"
                        }
                    ],
                    "eventCategory": "WOMENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 National Women's Soccer League",
                    "competitionInstanceKey": "uwPR-zdyf-kN5I",
                    "competitionName": "National Women's Soccer League",
                    "competitionShortName": "NWSL",
                    "competitionKey": "Nsmy-zdyf-GeH4",
                    "previousPayout": 1.076923
                }
            },
            {
                "type": "PAYOUT_INCREASE",
                "value": 32.085719398711525,
                "valueType": "PERCENT",
                "outcomes": [
                    {
                        "modifier": 0,
                        "payout": 1.47619,
                        "source": "BOVADA",
                        "type": "NO",
                        "live": false,
                        "marketKey": "ndKN-zeoq-dt7X",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.271Z",
                        "stats": {
                            "minPayout": 1.1176,
                            "maxPayout": 1.9259
                        }
                    }
                ],
                "context": {
                    "marketKey": "ndKN-zeoq-dt7X",
                    "marketType": "BOTH_TEAMS_TO_SCORE",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "qD5d-zeom-3pbg",
                    "eventSport": "SOCCER",
                    "eventName": "Washington Spirit @ Orlando Pride",
                    "eventStartTime": "2025-04-19T21:00:00.000Z",
                    "eventHomeParticipantKey": "VRPk-zdyf-YHph",
                    "eventParticipants": [
                        {
                            "category": "WOMENS_PROFESSIONAL",
                            "name": "Orlando Pride",
                            "key": "VRPk-zdyf-YHph",
                            "shortName": "ORL",
                            "slug": "orlando-pride",
                            "sport": "SOCCER"
                        },
                        {
                            "category": "WOMENS_PROFESSIONAL",
                            "name": "Washington Spirit",
                            "key": "rTxu-zdyf-pP61",
                            "shortName": "WAS",
                            "slug": "washington-spirit",
                            "sport": "SOCCER"
                        }
                    ],
                    "eventCategory": "WOMENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 National Women's Soccer League",
                    "competitionInstanceKey": "uwPR-zdyf-kN5I",
                    "competitionName": "National Women's Soccer League",
                    "competitionShortName": "NWSL",
                    "competitionKey": "Nsmy-zdyf-GeH4",
                    "previousPayout": 1.1176
                }
            },
            {
                "type": "PAYOUT_INCREASE",
                "value": 13.043463516069975,
                "valueType": "PERCENT",
                "outcomes": [
                    {
                        "modifier": 9.5,
                        "payout": 2,
                        "source": "DRAFT_KINGS",
                        "type": "OVER",
                        "live": false,
                        "marketKey": "oHNl-zerc-0z62",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.274Z",
                        "stats": {
                            "minPayout": 1.769231,
                            "maxPayout": 1.769231
                        }
                    }
                ],
                "context": {
                    "marketKey": "oHNl-zerc-0z62",
                    "marketType": "INDIVIDUAL_POINT_TOTAL",
                    "marketSegment": "FULL_MATCH",
                    "marketParticipant": {
                        "category": "MENS_PROFESSIONAL",
                        "name": "Kel'el Ware",
                        "key": "tKgT-ykqv-Lthe",
                        "shortName": "K. Ware",
                        "slug": "kelel-ware",
                        "sport": "BASKETBALL"
                    },
                    "eventKey": "BsiB-zerb-sFT3",
                    "eventSport": "BASKETBALL",
                    "eventName": "Miami Heat @ Atlanta Hawks",
                    "eventStartTime": "2025-04-18T23:10:00.000Z",
                    "eventHomeParticipantKey": "0Ch7-wddv-OrXs",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Atlanta Hawks",
                            "key": "0Ch7-wddv-OrXs",
                            "shortName": "ATL",
                            "slug": "atlanta-hawks",
                            "sport": "BASKETBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Miami Heat",
                            "key": "biYO-wddv-j7OK",
                            "shortName": "MIA",
                            "slug": "miami-heat",
                            "sport": "BASKETBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 National Basketball Association",
                    "competitionInstanceKey": "g4sK-yinv-Lczx",
                    "competitionName": "National Basketball Association",
                    "competitionShortName": "NBA",
                    "competitionKey": "d791-wddv-30fU",
                    "previousPayout": 1.769231
                }
            },
            {
                "type": "PAYOUT_INCREASE",
                "value": 327.80748663101605,
                "valueType": "PERCENT",
                "outcomes": [
                    {
                        "modifier": 0,
                        "payout": 8,
                        "source": "BOVADA",
                        "type": "YES",
                        "live": false,
                        "marketKey": "pMeO-zeoq-76q5",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.271Z",
                        "stats": {
                            "minPayout": 1.87,
                            "maxPayout": 14
                        }
                    }
                ],
                "context": {
                    "marketKey": "pMeO-zeoq-76q5",
                    "marketType": "BOTH_TEAMS_TO_SCORE",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "DYO2-zeom-thn7",
                    "eventSport": "SOCCER",
                    "eventName": "Houston Dash @ Kansas City Current",
                    "eventStartTime": "2025-04-19T23:30:00.000Z",
                    "eventHomeParticipantKey": "G5CG-zdyf-cMko",
                    "eventParticipants": [
                        {
                            "category": "WOMENS_PROFESSIONAL",
                            "name": "Houston Dash",
                            "key": "nahe-zdyf-q3s0",
                            "shortName": "HOU",
                            "slug": "houston-dash",
                            "sport": "SOCCER"
                        },
                        {
                            "category": "WOMENS_PROFESSIONAL",
                            "name": "Kansas City Current",
                            "key": "G5CG-zdyf-cMko",
                            "shortName": "KC",
                            "slug": "kansas-city-current",
                            "sport": "SOCCER"
                        }
                    ],
                    "eventCategory": "WOMENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 National Women's Soccer League",
                    "competitionInstanceKey": "uwPR-zdyf-kN5I",
                    "competitionName": "National Women's Soccer League",
                    "competitionShortName": "NWSL",
                    "competitionKey": "Nsmy-zdyf-GeH4",
                    "previousPayout": 1.87
                }
            },
            {
                "type": "PAYOUT_INCREASE",
                "value": 13.043463516069975,
                "valueType": "PERCENT",
                "outcomes": [
                    {
                        "modifier": 15.5,
                        "payout": 2,
                        "source": "DRAFT_KINGS",
                        "type": "UNDER",
                        "live": false,
                        "marketKey": "wiT9-zeot-UuDa",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.274Z",
                        "stats": {
                            "minPayout": 1.769231,
                            "maxPayout": 1.833333
                        }
                    }
                ],
                "context": {
                    "marketKey": "wiT9-zeot-UuDa",
                    "marketType": "INDIVIDUAL_POINT_TOTAL",
                    "marketSegment": "FULL_MATCH",
                    "marketParticipant": {
                        "category": "MENS_PROFESSIONAL",
                        "name": "Michael Porter Jr.",
                        "key": "7Iil-ycAk-jEBC",
                        "shortName": "M. Porter Jr.",
                        "slug": "michael-porter-jr",
                        "sport": "BASKETBALL"
                    },
                    "eventKey": "4d0b-zenw-ZAPR",
                    "eventSport": "BASKETBALL",
                    "eventName": "Los Angeles Clippers @ Denver Nuggets",
                    "eventStartTime": "2025-04-19T19:40:00.000Z",
                    "eventHomeParticipantKey": "eI2D-wddv-4NJj",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Denver Nuggets",
                            "key": "eI2D-wddv-4NJj",
                            "shortName": "DEN",
                            "slug": "denver-nuggets",
                            "sport": "BASKETBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Los Angeles Clippers",
                            "key": "OABG-wddv-xt3n",
                            "shortName": "LAC",
                            "slug": "los-angeles-clippers",
                            "sport": "BASKETBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 National Basketball Association",
                    "competitionInstanceKey": "g4sK-yinv-Lczx",
                    "competitionName": "National Basketball Association",
                    "competitionShortName": "NBA",
                    "competitionKey": "d791-wddv-30fU",
                    "previousPayout": 1.769231
                }
            },
            {
                "type": "PAYOUT_INCREASE",
                "value": 13.043527410229302,
                "valueType": "PERCENT",
                "outcomes": [
                    {
                        "modifier": 4.5,
                        "payout": 2,
                        "source": "BOVADA",
                        "type": "OVER",
                        "live": false,
                        "marketKey": "ydlK-zerx-BYsR",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.254Z",
                        "stats": {
                            "minPayout": 1.76923,
                            "maxPayout": 1.76923
                        }
                    }
                ],
                "context": {
                    "marketKey": "ydlK-zerx-BYsR",
                    "marketType": "POINT_TOTAL",
                    "marketSegment": "FIRST_5_INNINGS",
                    "eventKey": "8NGc-zers-gdWU",
                    "eventSport": "BASEBALL",
                    "eventName": "Athletics @ Milwaukee Brewers",
                    "eventStartTime": "2025-04-19T00:11:00.000Z",
                    "eventHomeParticipantKey": "ma0w-wegw-z0u5",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Milwaukee Brewers",
                            "key": "ma0w-wegw-z0u5",
                            "shortName": "MIL",
                            "slug": "milwaukee-brewers",
                            "sport": "BASEBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Athletics",
                            "key": "UjjR-wegw-akZZ",
                            "shortName": "OAK",
                            "slug": "athletics",
                            "sport": "BASEBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 Major League Baseball",
                    "competitionInstanceKey": "9Jss-zcjh-iOl3",
                    "competitionName": "Major League Baseball",
                    "competitionShortName": "MLB",
                    "competitionKey": "qK0E-wddv-bFet",
                    "previousPayout": 1.76923
                }
            }
        ],
        "PAYOUT_DECREASE": [
            {
                "type": "PAYOUT_DECREASE",
                "value": -10.909090909090919,
                "valueType": "PERCENT",
                "outcomes": [
                    {
                        "modifier": -1,
                        "payout": 1.96,
                        "source": "BET_PARX",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "09tI-zerb-qX5s",
                        "participantKey": "biYO-wddv-j7OK",
                        "time": "2025-04-18T02:29:00.161Z",
                        "stats": {
                            "minPayout": 2.2,
                            "maxPayout": 2.2
                        }
                    }
                ],
                "context": {
                    "marketKey": "09tI-zerb-qX5s",
                    "marketType": "POINT_SPREAD",
                    "marketSegment": "FULL_MATCH",
                    "eventKey": "BsiB-zerb-sFT3",
                    "eventSport": "BASKETBALL",
                    "eventName": "Miami Heat @ Atlanta Hawks",
                    "eventStartTime": "2025-04-18T23:10:00.000Z",
                    "eventHomeParticipantKey": "0Ch7-wddv-OrXs",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Atlanta Hawks",
                            "key": "0Ch7-wddv-OrXs",
                            "shortName": "ATL",
                            "slug": "atlanta-hawks",
                            "sport": "BASKETBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Miami Heat",
                            "key": "biYO-wddv-j7OK",
                            "shortName": "MIA",
                            "slug": "miami-heat",
                            "sport": "BASKETBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 National Basketball Association",
                    "competitionInstanceKey": "g4sK-yinv-Lczx",
                    "competitionName": "National Basketball Association",
                    "competitionShortName": "NBA",
                    "competitionKey": "d791-wddv-30fU",
                    "previousPayout": 2.2
                }
            },
            {
                "type": "PAYOUT_DECREASE",
                "value": -10.909090909090919,
                "valueType": "PERCENT",
                "outcomes": [
                    {
                        "modifier": -1,
                        "payout": 1.96,
                        "source": "BET_RIVERS",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "09tI-zerb-qX5s",
                        "participantKey": "biYO-wddv-j7OK",
                        "time": "2025-04-18T02:29:00.091Z",
                        "stats": {
                            "minPayout": 2.2,
                            "maxPayout": 2.2
                        }
                    }
                ],
                "context": {
                    "marketKey": "09tI-zerb-qX5s",
                    "marketType": "POINT_SPREAD",
                    "marketSegment": "FULL_MATCH",
                    "eventKey": "BsiB-zerb-sFT3",
                    "eventSport": "BASKETBALL",
                    "eventName": "Miami Heat @ Atlanta Hawks",
                    "eventStartTime": "2025-04-18T23:10:00.000Z",
                    "eventHomeParticipantKey": "0Ch7-wddv-OrXs",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Atlanta Hawks",
                            "key": "0Ch7-wddv-OrXs",
                            "shortName": "ATL",
                            "slug": "atlanta-hawks",
                            "sport": "BASKETBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Miami Heat",
                            "key": "biYO-wddv-j7OK",
                            "shortName": "MIA",
                            "slug": "miami-heat",
                            "sport": "BASKETBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 National Basketball Association",
                    "competitionInstanceKey": "g4sK-yinv-Lczx",
                    "competitionName": "National Basketball Association",
                    "competitionShortName": "NBA",
                    "competitionKey": "d791-wddv-30fU",
                    "previousPayout": 2.2
                }
            },
            {
                "type": "PAYOUT_DECREASE",
                "value": -11.538450000000001,
                "valueType": "PERCENT",
                "outcomes": [
                    {
                        "modifier": 8.5,
                        "payout": 1.769231,
                        "source": "DRAFT_KINGS",
                        "type": "OVER",
                        "live": false,
                        "marketKey": "1OSU-zeqj-W5y1",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.274Z",
                        "stats": {
                            "minPayout": 2,
                            "maxPayout": 2
                        }
                    }
                ],
                "context": {
                    "marketKey": "1OSU-zeqj-W5y1",
                    "marketType": "INDIVIDUAL_POINT_TOTAL",
                    "marketSegment": "FULL_MATCH",
                    "marketParticipant": {
                        "category": "MENS_PROFESSIONAL",
                        "name": "Jrue Holiday",
                        "key": "l8Iz-ycAk-jDYB",
                        "shortName": "J. Holiday",
                        "slug": "jrue-holiday",
                        "sport": "BASKETBALL"
                    },
                    "eventKey": "0HKV-zeqc-tbcB",
                    "eventSport": "BASKETBALL",
                    "eventName": "Orlando Magic @ Boston Celtics",
                    "eventStartTime": "2025-04-20T19:30:00.000Z",
                    "eventHomeParticipantKey": "aUbn-wddv-b90h",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Boston Celtics",
                            "key": "aUbn-wddv-b90h",
                            "shortName": "BOS",
                            "slug": "boston-celtics",
                            "sport": "BASKETBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Orlando Magic",
                            "key": "Q6FU-wddv-9NTI",
                            "shortName": "ORL",
                            "slug": "orlando-magic",
                            "sport": "BASKETBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 National Basketball Association",
                    "competitionInstanceKey": "g4sK-yinv-Lczx",
                    "competitionName": "National Basketball Association",
                    "competitionShortName": "NBA",
                    "competitionKey": "d791-wddv-30fU",
                    "previousPayout": 2
                }
            },
            {
                "type": "PAYOUT_DECREASE",
                "value": -24.468085106382986,
                "valueType": "PERCENT",
                "outcomes": [
                    {
                        "modifier": 0,
                        "payout": 3.55,
                        "source": "BOVADA",
                        "type": "YES",
                        "live": false,
                        "marketKey": "3uVc-zeoq-yaZI",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.271Z",
                        "stats": {
                            "minPayout": 1.952381,
                            "maxPayout": 4.7
                        }
                    }
                ],
                "context": {
                    "marketKey": "3uVc-zeoq-yaZI",
                    "marketType": "BOTH_TEAMS_TO_SCORE",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "j0ix-zeom-eiPC",
                    "eventSport": "SOCCER",
                    "eventName": "NJ/NY Gotham FC @ Angel City FC",
                    "eventStartTime": "2025-04-19T02:30:00.000Z",
                    "eventHomeParticipantKey": "qEU5-zdyf-BZpr",
                    "eventParticipants": [
                        {
                            "category": "WOMENS_PROFESSIONAL",
                            "name": "Angel City FC",
                            "key": "qEU5-zdyf-BZpr",
                            "shortName": "ACFC",
                            "slug": "angel-city-fc",
                            "sport": "SOCCER"
                        },
                        {
                            "category": "WOMENS_PROFESSIONAL",
                            "name": "NJ/NY Gotham FC",
                            "key": "SRlG-zdyf-CeHn",
                            "shortName": "NJY",
                            "slug": "njny-gotham-fc",
                            "sport": "SOCCER"
                        }
                    ],
                    "eventCategory": "WOMENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 National Women's Soccer League",
                    "competitionInstanceKey": "uwPR-zdyf-kN5I",
                    "competitionName": "National Women's Soccer League",
                    "competitionShortName": "NWSL",
                    "competitionKey": "Nsmy-zdyf-GeH4",
                    "previousPayout": 4.7
                }
            },
            {
                "type": "PAYOUT_DECREASE",
                "value": -34.343444444444444,
                "valueType": "PERCENT",
                "outcomes": [
                    {
                        "modifier": 0,
                        "payout": 1.181818,
                        "source": "BOVADA",
                        "type": "NO",
                        "live": false,
                        "marketKey": "3uVc-zeoq-yaZI",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.271Z",
                        "stats": {
                            "minPayout": 1.181818,
                            "maxPayout": 1.8
                        }
                    }
                ],
                "context": {
                    "marketKey": "3uVc-zeoq-yaZI",
                    "marketType": "BOTH_TEAMS_TO_SCORE",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "j0ix-zeom-eiPC",
                    "eventSport": "SOCCER",
                    "eventName": "NJ/NY Gotham FC @ Angel City FC",
                    "eventStartTime": "2025-04-19T02:30:00.000Z",
                    "eventHomeParticipantKey": "qEU5-zdyf-BZpr",
                    "eventParticipants": [
                        {
                            "category": "WOMENS_PROFESSIONAL",
                            "name": "Angel City FC",
                            "key": "qEU5-zdyf-BZpr",
                            "shortName": "ACFC",
                            "slug": "angel-city-fc",
                            "sport": "SOCCER"
                        },
                        {
                            "category": "WOMENS_PROFESSIONAL",
                            "name": "NJ/NY Gotham FC",
                            "key": "SRlG-zdyf-CeHn",
                            "shortName": "NJY",
                            "slug": "njny-gotham-fc",
                            "sport": "SOCCER"
                        }
                    ],
                    "eventCategory": "WOMENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 National Women's Soccer League",
                    "competitionInstanceKey": "uwPR-zdyf-kN5I",
                    "competitionName": "National Women's Soccer League",
                    "competitionShortName": "NWSL",
                    "competitionKey": "Nsmy-zdyf-GeH4",
                    "previousPayout": 1.8
                }
            },
            {
                "type": "PAYOUT_DECREASE",
                "value": -58.44444444444444,
                "valueType": "PERCENT",
                "outcomes": [
                    {
                        "modifier": 0,
                        "payout": 1.87,
                        "source": "BOVADA",
                        "type": "YES",
                        "live": false,
                        "marketKey": "C0Nu-zeqf-mdmM",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.271Z",
                        "stats": {
                            "minPayout": 1.87,
                            "maxPayout": 4.5
                        }
                    }
                ],
                "context": {
                    "marketKey": "C0Nu-zeqf-mdmM",
                    "marketType": "BOTH_TEAMS_TO_SCORE",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "qMTv-zeom-T34b",
                    "eventSport": "SOCCER",
                    "eventName": "Portland Thorns FC @ Seattle Reign FC",
                    "eventStartTime": "2025-04-19T02:00:00.000Z",
                    "eventHomeParticipantKey": "QRRq-zdyf-AM4e",
                    "eventParticipants": [
                        {
                            "category": "WOMENS_PROFESSIONAL",
                            "name": "Portland Thorns FC",
                            "key": "dc7X-zdyf-12IE",
                            "shortName": "POR",
                            "slug": "portland-thorns-fc",
                            "sport": "SOCCER"
                        },
                        {
                            "category": "WOMENS_PROFESSIONAL",
                            "name": "Seattle Reign FC",
                            "key": "QRRq-zdyf-AM4e",
                            "shortName": "SEA",
                            "slug": "seattle-reign-fc",
                            "sport": "SOCCER"
                        }
                    ],
                    "eventCategory": "WOMENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 National Women's Soccer League",
                    "competitionInstanceKey": "uwPR-zdyf-kN5I",
                    "competitionName": "National Women's Soccer League",
                    "competitionShortName": "NWSL",
                    "competitionKey": "Nsmy-zdyf-GeH4",
                    "previousPayout": 4.5
                }
            },
            {
                "type": "PAYOUT_DECREASE",
                "value": -34.230748663101615,
                "valueType": "PERCENT",
                "outcomes": [
                    {
                        "modifier": 0,
                        "payout": 1.229885,
                        "source": "BOVADA",
                        "type": "NO",
                        "live": false,
                        "marketKey": "C0Nu-zeqf-mdmM",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.271Z",
                        "stats": {
                            "minPayout": 1.2,
                            "maxPayout": 1.87
                        }
                    }
                ],
                "context": {
                    "marketKey": "C0Nu-zeqf-mdmM",
                    "marketType": "BOTH_TEAMS_TO_SCORE",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "qMTv-zeom-T34b",
                    "eventSport": "SOCCER",
                    "eventName": "Portland Thorns FC @ Seattle Reign FC",
                    "eventStartTime": "2025-04-19T02:00:00.000Z",
                    "eventHomeParticipantKey": "QRRq-zdyf-AM4e",
                    "eventParticipants": [
                        {
                            "category": "WOMENS_PROFESSIONAL",
                            "name": "Portland Thorns FC",
                            "key": "dc7X-zdyf-12IE",
                            "shortName": "POR",
                            "slug": "portland-thorns-fc",
                            "sport": "SOCCER"
                        },
                        {
                            "category": "WOMENS_PROFESSIONAL",
                            "name": "Seattle Reign FC",
                            "key": "QRRq-zdyf-AM4e",
                            "shortName": "SEA",
                            "slug": "seattle-reign-fc",
                            "sport": "SOCCER"
                        }
                    ],
                    "eventCategory": "WOMENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 National Women's Soccer League",
                    "competitionInstanceKey": "uwPR-zdyf-kN5I",
                    "competitionName": "National Women's Soccer League",
                    "competitionShortName": "NWSL",
                    "competitionKey": "Nsmy-zdyf-GeH4",
                    "previousPayout": 1.87
                }
            },
            {
                "type": "PAYOUT_DECREASE",
                "value": -36.030047773751825,
                "valueType": "PERCENT",
                "outcomes": [
                    {
                        "modifier": 0,
                        "payout": 1.181818,
                        "source": "BOVADA",
                        "type": "NO",
                        "live": false,
                        "marketKey": "CZ4j-zeoq-zsNq",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.271Z",
                        "stats": {
                            "minPayout": 1.181818,
                            "maxPayout": 1.847458
                        }
                    }
                ],
                "context": {
                    "marketKey": "CZ4j-zeoq-zsNq",
                    "marketType": "BOTH_TEAMS_TO_SCORE",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "UqEF-zeom-nw4K",
                    "eventSport": "SOCCER",
                    "eventName": "Bay FC @ North Carolina Courage",
                    "eventStartTime": "2025-04-19T23:00:00.000Z",
                    "eventHomeParticipantKey": "10Fi-zdyf-XkBc",
                    "eventParticipants": [
                        {
                            "category": "WOMENS_PROFESSIONAL",
                            "name": "Bay FC",
                            "key": "cfr3-zdyf-Nxuk",
                            "shortName": "BAY",
                            "slug": "bay-fc",
                            "sport": "SOCCER"
                        },
                        {
                            "category": "WOMENS_PROFESSIONAL",
                            "name": "North Carolina Courage",
                            "key": "10Fi-zdyf-XkBc",
                            "shortName": "NCC",
                            "slug": "north-carolina-courage",
                            "sport": "SOCCER"
                        }
                    ],
                    "eventCategory": "WOMENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 National Women's Soccer League",
                    "competitionInstanceKey": "uwPR-zdyf-kN5I",
                    "competitionName": "National Women's Soccer League",
                    "competitionShortName": "NWSL",
                    "competitionKey": "Nsmy-zdyf-GeH4",
                    "previousPayout": 1.847458
                }
            },
            {
                "type": "PAYOUT_DECREASE",
                "value": -14.285714285714283,
                "valueType": "PERCENT",
                "outcomes": [
                    {
                        "modifier": -1.5,
                        "payout": 2.4,
                        "source": "BET_PARX",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "GaR0-zern-FjrR",
                        "participantKey": "p0Uo-xfxt-gXxe",
                        "time": "2025-04-18T02:29:00.151Z",
                        "stats": {
                            "minPayout": 2.8,
                            "maxPayout": 2.8
                        }
                    }
                ],
                "context": {
                    "marketKey": "GaR0-zern-FjrR",
                    "marketType": "POINT_SPREAD",
                    "marketSegment": "FULL_MATCH",
                    "eventKey": "RsnQ-zern-J3f5",
                    "eventSport": "BASEBALL",
                    "eventName": "Lotte Giants @ Samsung Lions",
                    "eventStartTime": "2025-04-18T09:30:00.000Z",
                    "eventHomeParticipantKey": "1KPM-xfxt-ijW0",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Samsung Lions",
                            "key": "1KPM-xfxt-ijW0",
                            "shortName": "SAM",
                            "slug": "samsung-lions",
                            "sport": "BASEBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Lotte Giants",
                            "key": "p0Uo-xfxt-gXxe",
                            "shortName": "LOT",
                            "slug": "lotte-giants",
                            "sport": "BASEBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 KBO League",
                    "competitionInstanceKey": "HzgU-zcrx-0Yjr",
                    "competitionName": "KBO League",
                    "competitionShortName": "KBO",
                    "competitionKey": "lyFJ-xfxt-Oy40",
                    "previousPayout": 2.8
                }
            },
            {
                "type": "PAYOUT_DECREASE",
                "value": -14.285714285714283,
                "valueType": "PERCENT",
                "outcomes": [
                    {
                        "modifier": -1.5,
                        "payout": 2.4,
                        "source": "BET_RIVERS",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "GaR0-zern-FjrR",
                        "participantKey": "p0Uo-xfxt-gXxe",
                        "time": "2025-04-18T02:29:00.077Z",
                        "stats": {
                            "minPayout": 2.8,
                            "maxPayout": 2.8
                        }
                    }
                ],
                "context": {
                    "marketKey": "GaR0-zern-FjrR",
                    "marketType": "POINT_SPREAD",
                    "marketSegment": "FULL_MATCH",
                    "eventKey": "RsnQ-zern-J3f5",
                    "eventSport": "BASEBALL",
                    "eventName": "Lotte Giants @ Samsung Lions",
                    "eventStartTime": "2025-04-18T09:30:00.000Z",
                    "eventHomeParticipantKey": "1KPM-xfxt-ijW0",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Samsung Lions",
                            "key": "1KPM-xfxt-ijW0",
                            "shortName": "SAM",
                            "slug": "samsung-lions",
                            "sport": "BASEBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Lotte Giants",
                            "key": "p0Uo-xfxt-gXxe",
                            "shortName": "LOT",
                            "slug": "lotte-giants",
                            "sport": "BASEBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 KBO League",
                    "competitionInstanceKey": "HzgU-zcrx-0Yjr",
                    "competitionName": "KBO League",
                    "competitionShortName": "KBO",
                    "competitionKey": "lyFJ-xfxt-Oy40",
                    "previousPayout": 2.8
                }
            },
            {
                "type": "PAYOUT_DECREASE",
                "value": -37.70138775510205,
                "valueType": "PERCENT",
                "outcomes": [
                    {
                        "modifier": 188.5,
                        "payout": 1.526316,
                        "source": "BOVADA",
                        "type": "UNDER",
                        "live": false,
                        "marketKey": "H51z-zeol-OkRG",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.251Z",
                        "stats": {
                            "minPayout": 2.45,
                            "maxPayout": 2.45
                        }
                    }
                ],
                "context": {
                    "marketKey": "H51z-zeol-OkRG",
                    "marketType": "POINT_TOTAL",
                    "marketSegment": "FULL_MATCH",
                    "eventKey": "6jGn-zeie-n2Av",
                    "eventSport": "AUSTRALIAN_RULES_FOOTBALL",
                    "eventName": "Carlton @ North Melbourne",
                    "eventStartTime": "2025-04-18T05:20:00.000Z",
                    "eventHomeParticipantKey": "OZ1B-xbdu-ToxP",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "North Melbourne",
                            "key": "OZ1B-xbdu-ToxP",
                            "shortName": "NM",
                            "slug": "north-melbourne",
                            "sport": "AUSTRALIAN_RULES_FOOTBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Carlton",
                            "key": "MwYy-xbdu-A0C5",
                            "shortName": "CAR",
                            "slug": "carlton",
                            "sport": "AUSTRALIAN_RULES_FOOTBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 Australian Football League",
                    "competitionInstanceKey": "6dBj-ykzc-cMtp",
                    "competitionName": "Australian Football League",
                    "competitionShortName": "AFL",
                    "competitionKey": "jcKL-xbdu-POdB",
                    "previousPayout": 2.45
                }
            },
            {
                "type": "PAYOUT_DECREASE",
                "value": -46.4,
                "valueType": "PERCENT",
                "outcomes": [
                    {
                        "modifier": 0,
                        "payout": 2.68,
                        "source": "BOVADA",
                        "type": "YES",
                        "live": false,
                        "marketKey": "Z9tC-zeoq-PO6o",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.271Z",
                        "stats": {
                            "minPayout": 1.909091,
                            "maxPayout": 5
                        }
                    }
                ],
                "context": {
                    "marketKey": "Z9tC-zeoq-PO6o",
                    "marketType": "BOTH_TEAMS_TO_SCORE",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "gFsZ-zeom-XzW7",
                    "eventSport": "SOCCER",
                    "eventName": "San Diego Wave FC @ Racing Louisville FC",
                    "eventStartTime": "2025-04-19T19:00:00.000Z",
                    "eventHomeParticipantKey": "07Ah-zdyf-Z3Af",
                    "eventParticipants": [
                        {
                            "category": "WOMENS_PROFESSIONAL",
                            "name": "Racing Louisville FC",
                            "key": "07Ah-zdyf-Z3Af",
                            "shortName": "LOU",
                            "slug": "racing-louisville-fc",
                            "sport": "SOCCER"
                        },
                        {
                            "category": "WOMENS_PROFESSIONAL",
                            "name": "San Diego Wave FC",
                            "key": "WiRv-zdyf-doDf",
                            "shortName": "SD",
                            "slug": "san-diego-wave-fc",
                            "sport": "SOCCER"
                        }
                    ],
                    "eventCategory": "WOMENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 National Women's Soccer League",
                    "competitionInstanceKey": "uwPR-zdyf-kN5I",
                    "competitionName": "National Women's Soccer League",
                    "competitionShortName": "NWSL",
                    "competitionKey": "Nsmy-zdyf-GeH4",
                    "previousPayout": 5
                }
            },
            {
                "type": "PAYOUT_DECREASE",
                "value": -29.63635084297288,
                "valueType": "PERCENT",
                "outcomes": [
                    {
                        "modifier": 0,
                        "payout": 1.29,
                        "source": "BOVADA",
                        "type": "NO",
                        "live": false,
                        "marketKey": "Z9tC-zeoq-PO6o",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.271Z",
                        "stats": {
                            "minPayout": 1.166667,
                            "maxPayout": 1.833333
                        }
                    }
                ],
                "context": {
                    "marketKey": "Z9tC-zeoq-PO6o",
                    "marketType": "BOTH_TEAMS_TO_SCORE",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "gFsZ-zeom-XzW7",
                    "eventSport": "SOCCER",
                    "eventName": "San Diego Wave FC @ Racing Louisville FC",
                    "eventStartTime": "2025-04-19T19:00:00.000Z",
                    "eventHomeParticipantKey": "07Ah-zdyf-Z3Af",
                    "eventParticipants": [
                        {
                            "category": "WOMENS_PROFESSIONAL",
                            "name": "Racing Louisville FC",
                            "key": "07Ah-zdyf-Z3Af",
                            "shortName": "LOU",
                            "slug": "racing-louisville-fc",
                            "sport": "SOCCER"
                        },
                        {
                            "category": "WOMENS_PROFESSIONAL",
                            "name": "San Diego Wave FC",
                            "key": "WiRv-zdyf-doDf",
                            "shortName": "SD",
                            "slug": "san-diego-wave-fc",
                            "sport": "SOCCER"
                        }
                    ],
                    "eventCategory": "WOMENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 National Women's Soccer League",
                    "competitionInstanceKey": "uwPR-zdyf-kN5I",
                    "competitionName": "National Women's Soccer League",
                    "competitionShortName": "NWSL",
                    "competitionKey": "Nsmy-zdyf-GeH4",
                    "previousPayout": 1.833333
                }
            },
            {
                "type": "PAYOUT_DECREASE",
                "value": -13.101604278074872,
                "valueType": "PERCENT",
                "outcomes": [
                    {
                        "modifier": 2,
                        "payout": 1.625,
                        "source": "BOVADA",
                        "type": "UNDER",
                        "live": false,
                        "marketKey": "ZT0J-zern-MjWf",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.257Z",
                        "stats": {
                            "minPayout": 1.833333,
                            "maxPayout": 1.87
                        }
                    }
                ],
                "context": {
                    "marketKey": "ZT0J-zern-MjWf",
                    "marketType": "POINT_TOTAL",
                    "marketSegment": "PERIOD_2",
                    "eventKey": "NOOz-zerd-Sf3r",
                    "eventSport": "ICE_HOCKEY",
                    "eventName": "Colorado Avalanche @ Dallas Stars",
                    "eventStartTime": "2025-04-20T00:40:00.000Z",
                    "eventHomeParticipantKey": "FVI6-wddv-FBYa",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Dallas Stars",
                            "key": "FVI6-wddv-FBYa",
                            "shortName": "DAL",
                            "slug": "dallas-stars",
                            "sport": "ICE_HOCKEY"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Colorado Avalanche",
                            "key": "UtU0-wddv-lD6J",
                            "shortName": "COL",
                            "slug": "colorado-avalanche",
                            "sport": "ICE_HOCKEY"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 National Hockey League",
                    "competitionInstanceKey": "g0P0-yiqv-FKyR",
                    "competitionName": "National Hockey League",
                    "competitionShortName": "NHL",
                    "competitionKey": "384d-wddv-w6oc",
                    "previousPayout": 1.87
                }
            },
            {
                "type": "PAYOUT_DECREASE",
                "value": -11.538450000000001,
                "valueType": "PERCENT",
                "outcomes": [
                    {
                        "modifier": 11.5,
                        "payout": 1.769231,
                        "source": "DRAFT_KINGS",
                        "type": "UNDER",
                        "live": false,
                        "marketKey": "jxxU-zerf-FuOx",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.274Z",
                        "stats": {
                            "minPayout": 1.909091,
                            "maxPayout": 2
                        }
                    }
                ],
                "context": {
                    "marketKey": "jxxU-zerf-FuOx",
                    "marketType": "INDIVIDUAL_POINT_TOTAL",
                    "marketSegment": "FULL_MATCH",
                    "marketParticipant": {
                        "category": "MENS_PROFESSIONAL",
                        "name": "Zach Edey",
                        "key": "okNB-ykqv-rBEH",
                        "shortName": "Z. Edey",
                        "slug": "zach-edey",
                        "sport": "BASKETBALL"
                    },
                    "eventKey": "PFtw-zere-ntHf",
                    "eventSport": "BASKETBALL",
                    "eventName": "Dallas Mavericks @ Memphis Grizzlies",
                    "eventStartTime": "2025-04-19T01:40:00.000Z",
                    "eventHomeParticipantKey": "FQsn-wddv-gGK3",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Dallas Mavericks",
                            "key": "BEYT-wddv-Yfd3",
                            "shortName": "DAL",
                            "slug": "dallas-mavericks",
                            "sport": "BASKETBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Memphis Grizzlies",
                            "key": "FQsn-wddv-gGK3",
                            "shortName": "MEM",
                            "slug": "memphis-grizzlies",
                            "sport": "BASKETBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 National Basketball Association",
                    "competitionInstanceKey": "g4sK-yinv-Lczx",
                    "competitionName": "National Basketball Association",
                    "competitionShortName": "NBA",
                    "competitionKey": "d791-wddv-30fU",
                    "previousPayout": 2
                }
            },
            {
                "type": "PAYOUT_DECREASE",
                "value": -43.03030303030303,
                "valueType": "PERCENT",
                "outcomes": [
                    {
                        "modifier": 0,
                        "payout": 4.7,
                        "source": "BOVADA",
                        "type": "YES",
                        "live": false,
                        "marketKey": "n0nV-zeoq-wtD5",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.271Z",
                        "stats": {
                            "minPayout": 2.05,
                            "maxPayout": 8.25
                        }
                    }
                ],
                "context": {
                    "marketKey": "n0nV-zeoq-wtD5",
                    "marketType": "BOTH_TEAMS_TO_SCORE",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "RoYJ-zeoq-rtiM",
                    "eventSport": "SOCCER",
                    "eventName": "Chicago Stars FC @ Utah Royals",
                    "eventStartTime": "2025-04-19T01:30:00.000Z",
                    "eventHomeParticipantKey": "URcI-zdyf-FR0M",
                    "eventParticipants": [
                        {
                            "category": "WOMENS_PROFESSIONAL",
                            "name": "Chicago Stars FC",
                            "key": "EHQM-zdyf-Ea0A",
                            "shortName": "CHI",
                            "slug": "chicago-stars-fc",
                            "sport": "SOCCER"
                        },
                        {
                            "category": "WOMENS_PROFESSIONAL",
                            "name": "Utah Royals",
                            "key": "URcI-zdyf-FR0M",
                            "shortName": "UTA",
                            "slug": "utah-royals",
                            "sport": "SOCCER"
                        }
                    ],
                    "eventCategory": "WOMENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 National Women's Soccer League",
                    "competitionInstanceKey": "uwPR-zdyf-kN5I",
                    "competitionName": "National Women's Soccer League",
                    "competitionShortName": "NWSL",
                    "competitionKey": "Nsmy-zdyf-GeH4",
                    "previousPayout": 8.25
                }
            },
            {
                "type": "PAYOUT_DECREASE",
                "value": -12.331074095347507,
                "valueType": "PERCENT",
                "outcomes": [
                    {
                        "modifier": 0,
                        "payout": 1.526316,
                        "source": "BOVADA",
                        "type": "NO",
                        "live": false,
                        "marketKey": "n0nV-zeoq-wtD5",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.271Z",
                        "stats": {
                            "minPayout": 1.076923,
                            "maxPayout": 1.741
                        }
                    }
                ],
                "context": {
                    "marketKey": "n0nV-zeoq-wtD5",
                    "marketType": "BOTH_TEAMS_TO_SCORE",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "RoYJ-zeoq-rtiM",
                    "eventSport": "SOCCER",
                    "eventName": "Chicago Stars FC @ Utah Royals",
                    "eventStartTime": "2025-04-19T01:30:00.000Z",
                    "eventHomeParticipantKey": "URcI-zdyf-FR0M",
                    "eventParticipants": [
                        {
                            "category": "WOMENS_PROFESSIONAL",
                            "name": "Chicago Stars FC",
                            "key": "EHQM-zdyf-Ea0A",
                            "shortName": "CHI",
                            "slug": "chicago-stars-fc",
                            "sport": "SOCCER"
                        },
                        {
                            "category": "WOMENS_PROFESSIONAL",
                            "name": "Utah Royals",
                            "key": "URcI-zdyf-FR0M",
                            "shortName": "UTA",
                            "slug": "utah-royals",
                            "sport": "SOCCER"
                        }
                    ],
                    "eventCategory": "WOMENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 National Women's Soccer League",
                    "competitionInstanceKey": "uwPR-zdyf-kN5I",
                    "competitionName": "National Women's Soccer League",
                    "competitionShortName": "NWSL",
                    "competitionKey": "Nsmy-zdyf-GeH4",
                    "previousPayout": 1.741
                }
            },
            {
                "type": "PAYOUT_DECREASE",
                "value": -69.67213333333333,
                "valueType": "PERCENT",
                "outcomes": [
                    {
                        "modifier": 0,
                        "payout": 1.819672,
                        "source": "BOVADA",
                        "type": "YES",
                        "live": false,
                        "marketKey": "ndKN-zeoq-dt7X",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.271Z",
                        "stats": {
                            "minPayout": 1.819672,
                            "maxPayout": 6
                        }
                    }
                ],
                "context": {
                    "marketKey": "ndKN-zeoq-dt7X",
                    "marketType": "BOTH_TEAMS_TO_SCORE",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "qD5d-zeom-3pbg",
                    "eventSport": "SOCCER",
                    "eventName": "Washington Spirit @ Orlando Pride",
                    "eventStartTime": "2025-04-19T21:00:00.000Z",
                    "eventHomeParticipantKey": "VRPk-zdyf-YHph",
                    "eventParticipants": [
                        {
                            "category": "WOMENS_PROFESSIONAL",
                            "name": "Orlando Pride",
                            "key": "VRPk-zdyf-YHph",
                            "shortName": "ORL",
                            "slug": "orlando-pride",
                            "sport": "SOCCER"
                        },
                        {
                            "category": "WOMENS_PROFESSIONAL",
                            "name": "Washington Spirit",
                            "key": "rTxu-zdyf-pP61",
                            "shortName": "WAS",
                            "slug": "washington-spirit",
                            "sport": "SOCCER"
                        }
                    ],
                    "eventCategory": "WOMENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 National Women's Soccer League",
                    "competitionInstanceKey": "uwPR-zdyf-kN5I",
                    "competitionName": "National Women's Soccer League",
                    "competitionShortName": "NWSL",
                    "competitionKey": "Nsmy-zdyf-GeH4",
                    "previousPayout": 6
                }
            },
            {
                "type": "PAYOUT_DECREASE",
                "value": -23.350641258632333,
                "valueType": "PERCENT",
                "outcomes": [
                    {
                        "modifier": 0,
                        "payout": 1.47619,
                        "source": "BOVADA",
                        "type": "NO",
                        "live": false,
                        "marketKey": "ndKN-zeoq-dt7X",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.271Z",
                        "stats": {
                            "minPayout": 1.1176,
                            "maxPayout": 1.9259
                        }
                    }
                ],
                "context": {
                    "marketKey": "ndKN-zeoq-dt7X",
                    "marketType": "BOTH_TEAMS_TO_SCORE",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "qD5d-zeom-3pbg",
                    "eventSport": "SOCCER",
                    "eventName": "Washington Spirit @ Orlando Pride",
                    "eventStartTime": "2025-04-19T21:00:00.000Z",
                    "eventHomeParticipantKey": "VRPk-zdyf-YHph",
                    "eventParticipants": [
                        {
                            "category": "WOMENS_PROFESSIONAL",
                            "name": "Orlando Pride",
                            "key": "VRPk-zdyf-YHph",
                            "shortName": "ORL",
                            "slug": "orlando-pride",
                            "sport": "SOCCER"
                        },
                        {
                            "category": "WOMENS_PROFESSIONAL",
                            "name": "Washington Spirit",
                            "key": "rTxu-zdyf-pP61",
                            "shortName": "WAS",
                            "slug": "washington-spirit",
                            "sport": "SOCCER"
                        }
                    ],
                    "eventCategory": "WOMENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 National Women's Soccer League",
                    "competitionInstanceKey": "uwPR-zdyf-kN5I",
                    "competitionName": "National Women's Soccer League",
                    "competitionShortName": "NWSL",
                    "competitionKey": "Nsmy-zdyf-GeH4",
                    "previousPayout": 1.9259
                }
            },
            {
                "type": "PAYOUT_DECREASE",
                "value": -42.857142857142854,
                "valueType": "PERCENT",
                "outcomes": [
                    {
                        "modifier": 0,
                        "payout": 8,
                        "source": "BOVADA",
                        "type": "YES",
                        "live": false,
                        "marketKey": "pMeO-zeoq-76q5",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.271Z",
                        "stats": {
                            "minPayout": 1.87,
                            "maxPayout": 14
                        }
                    }
                ],
                "context": {
                    "marketKey": "pMeO-zeoq-76q5",
                    "marketType": "BOTH_TEAMS_TO_SCORE",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "DYO2-zeom-thn7",
                    "eventSport": "SOCCER",
                    "eventName": "Houston Dash @ Kansas City Current",
                    "eventStartTime": "2025-04-19T23:30:00.000Z",
                    "eventHomeParticipantKey": "G5CG-zdyf-cMko",
                    "eventParticipants": [
                        {
                            "category": "WOMENS_PROFESSIONAL",
                            "name": "Houston Dash",
                            "key": "nahe-zdyf-q3s0",
                            "shortName": "HOU",
                            "slug": "houston-dash",
                            "sport": "SOCCER"
                        },
                        {
                            "category": "WOMENS_PROFESSIONAL",
                            "name": "Kansas City Current",
                            "key": "G5CG-zdyf-cMko",
                            "shortName": "KC",
                            "slug": "kansas-city-current",
                            "sport": "SOCCER"
                        }
                    ],
                    "eventCategory": "WOMENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 National Women's Soccer League",
                    "competitionInstanceKey": "uwPR-zdyf-kN5I",
                    "competitionName": "National Women's Soccer League",
                    "competitionShortName": "NWSL",
                    "competitionKey": "Nsmy-zdyf-GeH4",
                    "previousPayout": 14
                }
            },
            {
                "type": "PAYOUT_DECREASE",
                "value": -44.99620320855616,
                "valueType": "PERCENT",
                "outcomes": [
                    {
                        "modifier": 0,
                        "payout": 1.028571,
                        "source": "BOVADA",
                        "type": "NO",
                        "live": false,
                        "marketKey": "pMeO-zeoq-76q5",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.271Z",
                        "stats": {
                            "minPayout": 1.028571,
                            "maxPayout": 1.87
                        }
                    }
                ],
                "context": {
                    "marketKey": "pMeO-zeoq-76q5",
                    "marketType": "BOTH_TEAMS_TO_SCORE",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "DYO2-zeom-thn7",
                    "eventSport": "SOCCER",
                    "eventName": "Houston Dash @ Kansas City Current",
                    "eventStartTime": "2025-04-19T23:30:00.000Z",
                    "eventHomeParticipantKey": "G5CG-zdyf-cMko",
                    "eventParticipants": [
                        {
                            "category": "WOMENS_PROFESSIONAL",
                            "name": "Houston Dash",
                            "key": "nahe-zdyf-q3s0",
                            "shortName": "HOU",
                            "slug": "houston-dash",
                            "sport": "SOCCER"
                        },
                        {
                            "category": "WOMENS_PROFESSIONAL",
                            "name": "Kansas City Current",
                            "key": "G5CG-zdyf-cMko",
                            "shortName": "KC",
                            "slug": "kansas-city-current",
                            "sport": "SOCCER"
                        }
                    ],
                    "eventCategory": "WOMENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 National Women's Soccer League",
                    "competitionInstanceKey": "uwPR-zdyf-kN5I",
                    "competitionName": "National Women's Soccer League",
                    "competitionShortName": "NWSL",
                    "competitionKey": "Nsmy-zdyf-GeH4",
                    "previousPayout": 1.87
                }
            },
            {
                "type": "PAYOUT_DECREASE",
                "value": -11.538450000000001,
                "valueType": "PERCENT",
                "outcomes": [
                    {
                        "modifier": 11.5,
                        "payout": 1.769231,
                        "source": "DRAFT_KINGS",
                        "type": "UNDER",
                        "live": false,
                        "marketKey": "q1it-zerf-XUnF",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.274Z",
                        "stats": {
                            "minPayout": 1.909091,
                            "maxPayout": 2
                        }
                    }
                ],
                "context": {
                    "marketKey": "q1it-zerf-XUnF",
                    "marketType": "INDIVIDUAL_POINT_TOTAL",
                    "marketSegment": "FULL_MATCH",
                    "marketParticipant": {
                        "category": "MENS_PROFESSIONAL",
                        "name": "Scotty Pippen Jr.",
                        "key": "8ObT-ycAk-Wm1D",
                        "shortName": "S. Pippen Jr.",
                        "slug": "scotty-pippen-jr",
                        "sport": "BASKETBALL"
                    },
                    "eventKey": "PFtw-zere-ntHf",
                    "eventSport": "BASKETBALL",
                    "eventName": "Dallas Mavericks @ Memphis Grizzlies",
                    "eventStartTime": "2025-04-19T01:40:00.000Z",
                    "eventHomeParticipantKey": "FQsn-wddv-gGK3",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Dallas Mavericks",
                            "key": "BEYT-wddv-Yfd3",
                            "shortName": "DAL",
                            "slug": "dallas-mavericks",
                            "sport": "BASKETBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Memphis Grizzlies",
                            "key": "FQsn-wddv-gGK3",
                            "shortName": "MEM",
                            "slug": "memphis-grizzlies",
                            "sport": "BASKETBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 National Basketball Association",
                    "competitionInstanceKey": "g4sK-yinv-Lczx",
                    "competitionName": "National Basketball Association",
                    "competitionShortName": "NBA",
                    "competitionKey": "d791-wddv-30fU",
                    "previousPayout": 2
                }
            }
        ],
        "PLUS_EV_AVERAGE": [
            {
                "type": "PLUS_EV_AVERAGE",
                "value": 0.00003300656251004064,
                "valueType": "PERCENT",
                "outcomes": [
                    {
                        "modifier": -1.5,
                        "payout": 3.2,
                        "source": "BOVADA",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "0dCz-zerd-Tfga",
                        "participantKey": "UtU0-wddv-lD6J",
                        "time": "2025-04-18T02:29:00.257Z"
                    }
                ],
                "context": {
                    "marketKey": "0dCz-zerd-Tfga",
                    "marketType": "POINT_SPREAD",
                    "marketSegment": "FULL_MATCH",
                    "eventKey": "NOOz-zerd-Sf3r",
                    "eventSport": "ICE_HOCKEY",
                    "eventName": "Colorado Avalanche @ Dallas Stars",
                    "eventStartTime": "2025-04-20T00:40:00.000Z",
                    "eventHomeParticipantKey": "FVI6-wddv-FBYa",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Dallas Stars",
                            "key": "FVI6-wddv-FBYa",
                            "shortName": "DAL",
                            "slug": "dallas-stars",
                            "sport": "ICE_HOCKEY"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Colorado Avalanche",
                            "key": "UtU0-wddv-lD6J",
                            "shortName": "COL",
                            "slug": "colorado-avalanche",
                            "sport": "ICE_HOCKEY"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 National Hockey League",
                    "competitionInstanceKey": "g0P0-yiqv-FKyR",
                    "competitionName": "National Hockey League",
                    "competitionShortName": "NHL",
                    "competitionKey": "384d-wddv-w6oc",
                    "impliedProbability": 0.3125103145507844
                }
            },
            {
                "type": "PLUS_EV_AVERAGE",
                "value": 0.0025156005993056674,
                "valueType": "PERCENT",
                "outcomes": [
                    {
                        "modifier": 0,
                        "payout": 3.7,
                        "source": "FAN_DUEL",
                        "type": "DRAW",
                        "live": false,
                        "marketKey": "0uob-zegg-7rp1",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.286Z"
                    }
                ],
                "context": {
                    "marketKey": "0uob-zegg-7rp1",
                    "marketType": "MONEYLINE_3WAY",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "UcGN-zegg-Ghn8",
                    "eventSport": "SOCCER",
                    "eventName": "Chelsea @ Fulham",
                    "eventStartTime": "2025-04-20T13:00:00.000Z",
                    "eventHomeParticipantKey": "jFtf-wjcs-Wz8k",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Fulham",
                            "key": "jFtf-wjcs-Wz8k",
                            "shortName": "FUL",
                            "slug": "fulham",
                            "sport": "SOCCER"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Chelsea",
                            "key": "XcYR-wjcs-xD5C",
                            "shortName": "CHE",
                            "slug": "chelsea",
                            "sport": "SOCCER"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 English Premier League",
                    "competitionInstanceKey": "dhy8-yiqv-zo8S",
                    "competitionName": "English Premier League",
                    "competitionShortName": "EPL",
                    "competitionKey": "Xa0f-wjcs-tANp",
                    "impliedProbability": 0.27095016232413666
                }
            },
            {
                "type": "PLUS_EV_AVERAGE",
                "value": 0.03624223999713194,
                "valueType": "PERCENT",
                "outcomes": [
                    {
                        "modifier": 0,
                        "payout": 7,
                        "source": "FAN_DUEL",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "0zLx-zegt-q1j2",
                        "participantKey": "wAa2-wlct-nXBV",
                        "time": "2025-04-18T02:29:00.289Z"
                    }
                ],
                "context": {
                    "marketKey": "0zLx-zegt-q1j2",
                    "marketType": "MONEYLINE_3WAY",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "EI12-zegt-OSPo",
                    "eventSport": "SOCCER",
                    "eventName": "Auxerre @ Lille",
                    "eventStartTime": "2025-04-20T13:00:00.000Z",
                    "eventHomeParticipantKey": "T7eS-wlct-D1WG",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Lille",
                            "key": "T7eS-wlct-D1WG",
                            "shortName": "LIL",
                            "slug": "lille",
                            "sport": "SOCCER"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Auxerre",
                            "key": "wAa2-wlct-nXBV",
                            "shortName": "AUX",
                            "slug": "auxerre",
                            "sport": "SOCCER"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 French Ligue 1",
                    "competitionInstanceKey": "vqUs-yirv-BL4l",
                    "competitionName": "French Ligue 1",
                    "competitionShortName": "LIGUE_ONE",
                    "competitionKey": "xEL0-wlct-6byJ",
                    "impliedProbability": 0.148034605713876
                }
            },
            {
                "type": "PLUS_EV_AVERAGE",
                "value": 0.0006179995174651065,
                "valueType": "PERCENT",
                "outcomes": [
                    {
                        "modifier": 0,
                        "payout": 5,
                        "source": "FAN_DUEL",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "3Xm4-zegp-u7qi",
                        "participantKey": "FUvC-yjue-MfC6",
                        "time": "2025-04-18T02:29:00.289Z"
                    }
                ],
                "context": {
                    "marketKey": "3Xm4-zegp-u7qi",
                    "marketType": "MONEYLINE_3WAY",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "nFPR-zegp-nOfj",
                    "eventSport": "SOCCER",
                    "eventName": "Juventus @ Parma",
                    "eventStartTime": "2025-04-21T18:45:00.000Z",
                    "eventHomeParticipantKey": "FUvC-yjue-MfC6",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Juventus",
                            "key": "yAFB-wlct-d10q",
                            "shortName": "JUV",
                            "slug": "juventus",
                            "sport": "SOCCER"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Parma",
                            "key": "FUvC-yjue-MfC6",
                            "shortName": "PAR",
                            "slug": "parma",
                            "sport": "SOCCER"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 Italian Serie A",
                    "competitionInstanceKey": "7uZ7-yiqw-KOeX",
                    "competitionName": "Italian Serie A",
                    "competitionShortName": "SERIE_A",
                    "competitionKey": "H9PU-wlct-DJ8j",
                    "impliedProbability": 0.20012359990349302
                }
            },
            {
                "type": "PLUS_EV_AVERAGE",
                "value": 0.00045605010181826167,
                "valueType": "PERCENT",
                "outcomes": [
                    {
                        "modifier": 0,
                        "payout": 3.25,
                        "source": "BET_PARX",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "4N7K-zego-pWAM",
                        "participantKey": "32CK-xhfv-TyeN",
                        "time": "2025-04-18T02:29:00.241Z"
                    }
                ],
                "context": {
                    "marketKey": "4N7K-zego-pWAM",
                    "marketType": "MONEYLINE_3WAY",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "MbvL-zego-IdlL",
                    "eventSport": "SOCCER",
                    "eventName": "Fiorentina @ Cagliari",
                    "eventStartTime": "2025-04-21T13:00:00.000Z",
                    "eventHomeParticipantKey": "32CK-xhfv-TyeN",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Fiorentina",
                            "key": "D9ab-wlct-0sqC",
                            "shortName": "FIO",
                            "slug": "fiorentina",
                            "sport": "SOCCER"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Cagliari",
                            "key": "32CK-xhfv-TyeN",
                            "shortName": "CAG",
                            "slug": "cagliari",
                            "sport": "SOCCER"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 Italian Serie A",
                    "competitionInstanceKey": "7uZ7-yiqw-KOeX",
                    "competitionName": "Italian Serie A",
                    "competitionShortName": "SERIE_A",
                    "competitionKey": "H9PU-wlct-DJ8j",
                    "impliedProbability": 0.30783263080055945
                }
            },
            {
                "type": "PLUS_EV_AVERAGE",
                "value": 0.00045605010181826167,
                "valueType": "PERCENT",
                "outcomes": [
                    {
                        "modifier": 0,
                        "payout": 3.25,
                        "source": "BET_RIVERS",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "4N7K-zego-pWAM",
                        "participantKey": "32CK-xhfv-TyeN",
                        "time": "2025-04-18T02:29:00.119Z"
                    }
                ],
                "context": {
                    "marketKey": "4N7K-zego-pWAM",
                    "marketType": "MONEYLINE_3WAY",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "MbvL-zego-IdlL",
                    "eventSport": "SOCCER",
                    "eventName": "Fiorentina @ Cagliari",
                    "eventStartTime": "2025-04-21T13:00:00.000Z",
                    "eventHomeParticipantKey": "32CK-xhfv-TyeN",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Fiorentina",
                            "key": "D9ab-wlct-0sqC",
                            "shortName": "FIO",
                            "slug": "fiorentina",
                            "sport": "SOCCER"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Cagliari",
                            "key": "32CK-xhfv-TyeN",
                            "shortName": "CAG",
                            "slug": "cagliari",
                            "sport": "SOCCER"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 Italian Serie A",
                    "competitionInstanceKey": "7uZ7-yiqw-KOeX",
                    "competitionName": "Italian Serie A",
                    "competitionShortName": "SERIE_A",
                    "competitionKey": "H9PU-wlct-DJ8j",
                    "impliedProbability": 0.30783263080055945
                }
            },
            {
                "type": "PLUS_EV_AVERAGE",
                "value": 0.021764708606831773,
                "valueType": "PERCENT",
                "outcomes": [
                    {
                        "modifier": 0,
                        "payout": 8.5,
                        "source": "BET_PARX",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "4oPF-zegt-bpKj",
                        "participantKey": "weJv-wlct-Osz2",
                        "time": "2025-04-18T02:29:00.235Z"
                    }
                ],
                "context": {
                    "marketKey": "4oPF-zegt-bpKj",
                    "marketType": "MONEYLINE_3WAY",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "AJ7b-zegt-mD48",
                    "eventSport": "SOCCER",
                    "eventName": "Angers @ Nice",
                    "eventStartTime": "2025-04-20T15:15:00.000Z",
                    "eventHomeParticipantKey": "H6LB-wlct-uLi8",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Nice",
                            "key": "H6LB-wlct-uLi8",
                            "shortName": "NCE",
                            "slug": "nice",
                            "sport": "SOCCER"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Angers",
                            "key": "weJv-wlct-Osz2",
                            "shortName": "ANG",
                            "slug": "angers",
                            "sport": "SOCCER"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 French Ligue 1",
                    "competitionInstanceKey": "vqUs-yirv-BL4l",
                    "competitionName": "French Ligue 1",
                    "competitionShortName": "LIGUE_ONE",
                    "competitionKey": "xEL0-wlct-6byJ",
                    "impliedProbability": 0.12020761277727433
                }
            },
            {
                "type": "PLUS_EV_AVERAGE",
                "value": 0.021764708606831773,
                "valueType": "PERCENT",
                "outcomes": [
                    {
                        "modifier": 0,
                        "payout": 8.5,
                        "source": "BET_RIVERS",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "4oPF-zegt-bpKj",
                        "participantKey": "weJv-wlct-Osz2",
                        "time": "2025-04-18T02:29:00.117Z"
                    }
                ],
                "context": {
                    "marketKey": "4oPF-zegt-bpKj",
                    "marketType": "MONEYLINE_3WAY",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "AJ7b-zegt-mD48",
                    "eventSport": "SOCCER",
                    "eventName": "Angers @ Nice",
                    "eventStartTime": "2025-04-20T15:15:00.000Z",
                    "eventHomeParticipantKey": "H6LB-wlct-uLi8",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Nice",
                            "key": "H6LB-wlct-uLi8",
                            "shortName": "NCE",
                            "slug": "nice",
                            "sport": "SOCCER"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Angers",
                            "key": "weJv-wlct-Osz2",
                            "shortName": "ANG",
                            "slug": "angers",
                            "sport": "SOCCER"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 French Ligue 1",
                    "competitionInstanceKey": "vqUs-yirv-BL4l",
                    "competitionName": "French Ligue 1",
                    "competitionShortName": "LIGUE_ONE",
                    "competitionKey": "xEL0-wlct-6byJ",
                    "impliedProbability": 0.12020761277727433
                }
            },
            {
                "type": "PLUS_EV_AVERAGE",
                "value": 0.000349303182574201,
                "valueType": "PERCENT",
                "outcomes": [
                    {
                        "modifier": 0,
                        "payout": 3.2,
                        "source": "DRAFT_KINGS",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "5oEQ-zere-hSZe",
                        "participantKey": "BEYT-wddv-Yfd3",
                        "time": "2025-04-18T02:29:00.274Z"
                    }
                ],
                "context": {
                    "marketKey": "5oEQ-zere-hSZe",
                    "marketType": "MONEYLINE",
                    "marketSegment": "FULL_MATCH",
                    "eventKey": "PFtw-zere-ntHf",
                    "eventSport": "BASKETBALL",
                    "eventName": "Dallas Mavericks @ Memphis Grizzlies",
                    "eventStartTime": "2025-04-19T01:40:00.000Z",
                    "eventHomeParticipantKey": "FQsn-wddv-gGK3",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Dallas Mavericks",
                            "key": "BEYT-wddv-Yfd3",
                            "shortName": "DAL",
                            "slug": "dallas-mavericks",
                            "sport": "BASKETBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Memphis Grizzlies",
                            "key": "FQsn-wddv-gGK3",
                            "shortName": "MEM",
                            "slug": "memphis-grizzlies",
                            "sport": "BASKETBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 National Basketball Association",
                    "competitionInstanceKey": "g4sK-yinv-Lczx",
                    "competitionName": "National Basketball Association",
                    "competitionShortName": "NBA",
                    "competitionKey": "d791-wddv-30fU",
                    "impliedProbability": 0.3126091572445544
                }
            },
            {
                "type": "PLUS_EV_AVERAGE",
                "value": 0.02248935670778096,
                "valueType": "PERCENT",
                "outcomes": [
                    {
                        "modifier": 0,
                        "payout": 7,
                        "source": "FAN_DUEL",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "80nA-zemm-wedI",
                        "participantKey": "3NNT-wjcs-7uRN",
                        "time": "2025-04-18T02:29:00.286Z"
                    }
                ],
                "context": {
                    "marketKey": "80nA-zemm-wedI",
                    "marketType": "MONEYLINE_3WAY",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "9EYh-zemm-j07K",
                    "eventSport": "SOCCER",
                    "eventName": "Crystal Palace @ Arsenal FC",
                    "eventStartTime": "2025-04-23T19:00:00.000Z",
                    "eventHomeParticipantKey": "3FBc-wjcs-zkpE",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Crystal Palace",
                            "key": "3NNT-wjcs-7uRN",
                            "shortName": "CRY",
                            "slug": "crystal-palace",
                            "sport": "SOCCER"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Arsenal FC",
                            "key": "3FBc-wjcs-zkpE",
                            "shortName": "ARS",
                            "slug": "arsenal-fc",
                            "sport": "SOCCER"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 English Premier League",
                    "competitionInstanceKey": "dhy8-yiqv-zo8S",
                    "competitionName": "English Premier League",
                    "competitionShortName": "EPL",
                    "competitionKey": "Xa0f-wjcs-tANp",
                    "impliedProbability": 0.14606990810111156
                }
            },
            {
                "type": "PLUS_EV_AVERAGE",
                "value": 0.017607104405299667,
                "valueType": "PERCENT",
                "outcomes": [
                    {
                        "modifier": 0,
                        "payout": 11.5,
                        "source": "BET_PARX",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "8x3T-zemm-AKdS",
                        "participantKey": "BFIM-ybnv-fhZG",
                        "time": "2025-04-18T02:29:00.128Z"
                    }
                ],
                "context": {
                    "marketKey": "8x3T-zemm-AKdS",
                    "marketType": "MONEYLINE_3WAY",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "kBgf-zemm-VS36",
                    "eventSport": "SOCCER",
                    "eventName": "Ipswich Town @ Newcastle United",
                    "eventStartTime": "2025-04-26T14:00:00.000Z",
                    "eventHomeParticipantKey": "MIuT-wjcs-m2L0",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Newcastle United",
                            "key": "MIuT-wjcs-m2L0",
                            "shortName": "NEW",
                            "slug": "newcastle-united",
                            "sport": "SOCCER"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Ipswich Town",
                            "key": "BFIM-ybnv-fhZG",
                            "shortName": "IPS",
                            "slug": "ipswich-town",
                            "sport": "SOCCER"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 English Premier League",
                    "competitionInstanceKey": "dhy8-yiqv-zo8S",
                    "competitionName": "English Premier League",
                    "competitionShortName": "EPL",
                    "competitionKey": "Xa0f-wjcs-tANp",
                    "impliedProbability": 0.08848757429611302
                }
            },
            {
                "type": "PLUS_EV_AVERAGE",
                "value": 0.017607104405299667,
                "valueType": "PERCENT",
                "outcomes": [
                    {
                        "modifier": 0,
                        "payout": 11.5,
                        "source": "BET_RIVERS",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "8x3T-zemm-AKdS",
                        "participantKey": "BFIM-ybnv-fhZG",
                        "time": "2025-04-18T02:29:00.071Z"
                    }
                ],
                "context": {
                    "marketKey": "8x3T-zemm-AKdS",
                    "marketType": "MONEYLINE_3WAY",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "kBgf-zemm-VS36",
                    "eventSport": "SOCCER",
                    "eventName": "Ipswich Town @ Newcastle United",
                    "eventStartTime": "2025-04-26T14:00:00.000Z",
                    "eventHomeParticipantKey": "MIuT-wjcs-m2L0",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Newcastle United",
                            "key": "MIuT-wjcs-m2L0",
                            "shortName": "NEW",
                            "slug": "newcastle-united",
                            "sport": "SOCCER"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Ipswich Town",
                            "key": "BFIM-ybnv-fhZG",
                            "shortName": "IPS",
                            "slug": "ipswich-town",
                            "sport": "SOCCER"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 English Premier League",
                    "competitionInstanceKey": "dhy8-yiqv-zo8S",
                    "competitionName": "English Premier League",
                    "competitionShortName": "EPL",
                    "competitionKey": "Xa0f-wjcs-tANp",
                    "impliedProbability": 0.08848757429611302
                }
            },
            {
                "type": "PLUS_EV_AVERAGE",
                "value": 0.06185089155335621,
                "valueType": "PERCENT",
                "outcomes": [
                    {
                        "modifier": 0,
                        "payout": 12,
                        "source": "FAN_DUEL",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "8x3T-zemm-AKdS",
                        "participantKey": "BFIM-ybnv-fhZG",
                        "time": "2025-04-18T02:29:00.286Z"
                    }
                ],
                "context": {
                    "marketKey": "8x3T-zemm-AKdS",
                    "marketType": "MONEYLINE_3WAY",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "kBgf-zemm-VS36",
                    "eventSport": "SOCCER",
                    "eventName": "Ipswich Town @ Newcastle United",
                    "eventStartTime": "2025-04-26T14:00:00.000Z",
                    "eventHomeParticipantKey": "MIuT-wjcs-m2L0",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Newcastle United",
                            "key": "MIuT-wjcs-m2L0",
                            "shortName": "NEW",
                            "slug": "newcastle-united",
                            "sport": "SOCCER"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Ipswich Town",
                            "key": "BFIM-ybnv-fhZG",
                            "shortName": "IPS",
                            "slug": "ipswich-town",
                            "sport": "SOCCER"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 English Premier League",
                    "competitionInstanceKey": "dhy8-yiqv-zo8S",
                    "competitionName": "English Premier League",
                    "competitionShortName": "EPL",
                    "competitionKey": "Xa0f-wjcs-tANp",
                    "impliedProbability": 0.08848757429611302
                }
            },
            {
                "type": "PLUS_EV_AVERAGE",
                "value": 0.0302815196952263,
                "valueType": "PERCENT",
                "outcomes": [
                    {
                        "modifier": 0,
                        "payout": 10,
                        "source": "BET_PARX",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "Amer-zegt-8mY1",
                        "participantKey": "MGwE-xhcr-C9fb",
                        "time": "2025-04-18T02:29:00.214Z"
                    }
                ],
                "context": {
                    "marketKey": "Amer-zegt-8mY1",
                    "marketType": "MONEYLINE_3WAY",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "arXJ-zegt-oli0",
                    "eventSport": "SOCCER",
                    "eventName": "Bayern Munich @ FC Heidenheim",
                    "eventStartTime": "2025-04-19T13:30:00.000Z",
                    "eventHomeParticipantKey": "MGwE-xhcr-C9fb",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Bayern Munich",
                            "key": "CMsr-wlct-dYkS",
                            "shortName": "BAY",
                            "slug": "bayern-munich",
                            "sport": "SOCCER"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "FC Heidenheim",
                            "key": "MGwE-xhcr-C9fb",
                            "shortName": "HEI",
                            "slug": "fc-heidenheim",
                            "sport": "SOCCER"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 German Bundesliga",
                    "competitionInstanceKey": "AQK0-yiqv-XeTX",
                    "competitionName": "German Bundesliga",
                    "competitionShortName": "DFL",
                    "competitionKey": "deEJ-wlct-ob91",
                    "impliedProbability": 0.10302815196952263
                }
            },
            {
                "type": "PLUS_EV_AVERAGE",
                "value": 0.0302815196952263,
                "valueType": "PERCENT",
                "outcomes": [
                    {
                        "modifier": 0,
                        "payout": 10,
                        "source": "BET_RIVERS",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "Amer-zegt-8mY1",
                        "participantKey": "MGwE-xhcr-C9fb",
                        "time": "2025-04-18T02:29:00.114Z"
                    }
                ],
                "context": {
                    "marketKey": "Amer-zegt-8mY1",
                    "marketType": "MONEYLINE_3WAY",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "arXJ-zegt-oli0",
                    "eventSport": "SOCCER",
                    "eventName": "Bayern Munich @ FC Heidenheim",
                    "eventStartTime": "2025-04-19T13:30:00.000Z",
                    "eventHomeParticipantKey": "MGwE-xhcr-C9fb",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Bayern Munich",
                            "key": "CMsr-wlct-dYkS",
                            "shortName": "BAY",
                            "slug": "bayern-munich",
                            "sport": "SOCCER"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "FC Heidenheim",
                            "key": "MGwE-xhcr-C9fb",
                            "shortName": "HEI",
                            "slug": "fc-heidenheim",
                            "sport": "SOCCER"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 German Bundesliga",
                    "competitionInstanceKey": "AQK0-yiqv-XeTX",
                    "competitionName": "German Bundesliga",
                    "competitionShortName": "DFL",
                    "competitionKey": "deEJ-wlct-ob91",
                    "impliedProbability": 0.10302815196952263
                }
            },
            {
                "type": "PLUS_EV_AVERAGE",
                "value": 0.003908080583449713,
                "valueType": "PERCENT",
                "outcomes": [
                    {
                        "modifier": 0,
                        "payout": 4.9,
                        "source": "BET_PARX",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "CwzH-zemt-2krG",
                        "participantKey": "bhSG-xgpw-OWXx",
                        "time": "2025-04-18T02:29:00.143Z"
                    }
                ],
                "context": {
                    "marketKey": "CwzH-zemt-2krG",
                    "marketType": "MONEYLINE_3WAY",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "uAcz-zemt-7p69",
                    "eventSport": "SOCCER",
                    "eventName": "Sheffield United @ Burnley",
                    "eventStartTime": "2025-04-21T16:30:00.000Z",
                    "eventHomeParticipantKey": "1nNE-xgpw-HOb0",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Burnley",
                            "key": "1nNE-xgpw-HOb0",
                            "shortName": "BFC",
                            "slug": "burnley",
                            "sport": "SOCCER"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Sheffield United",
                            "key": "bhSG-xgpw-OWXx",
                            "shortName": "SHU",
                            "slug": "sheffield-united",
                            "sport": "SOCCER"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 English Football League Championship",
                    "competitionInstanceKey": "U1TI-yiqv-YpWA",
                    "competitionName": "English Football League Championship",
                    "competitionShortName": "EFLC",
                    "competitionKey": "RY22-ybnv-qSWt",
                    "impliedProbability": 0.20487920011907135
                }
            },
            {
                "type": "PLUS_EV_AVERAGE",
                "value": 0.027239875851743256,
                "valueType": "PERCENT",
                "outcomes": [
                    {
                        "modifier": 0,
                        "payout": 7,
                        "source": "FAN_DUEL",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "Cxrw-zegt-Hu1x",
                        "participantKey": "jhwT-wlct-Pv0a",
                        "time": "2025-04-18T02:29:00.288Z"
                    }
                ],
                "context": {
                    "marketKey": "Cxrw-zegt-Hu1x",
                    "marketType": "MONEYLINE_3WAY",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "h4os-zegt-1mNV",
                    "eventSport": "SOCCER",
                    "eventName": "Borussia Moenchengladbach @ Borussia Dortmund",
                    "eventStartTime": "2025-04-20T15:30:00.000Z",
                    "eventHomeParticipantKey": "sVez-wlct-J5KD",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Borussia Dortmund",
                            "key": "sVez-wlct-J5KD",
                            "shortName": "DOR",
                            "slug": "borussia-dortmund",
                            "sport": "SOCCER"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Borussia Moenchengladbach",
                            "key": "jhwT-wlct-Pv0a",
                            "shortName": "BMG",
                            "slug": "borussia-moenchengladbach",
                            "sport": "SOCCER"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 German Bundesliga",
                    "competitionInstanceKey": "AQK0-yiqv-XeTX",
                    "competitionName": "German Bundesliga",
                    "competitionShortName": "DFL",
                    "competitionKey": "deEJ-wlct-ob91",
                    "impliedProbability": 0.1467485536931062
                }
            },
            {
                "type": "PLUS_EV_AVERAGE",
                "value": 0.03313715300028908,
                "valueType": "PERCENT",
                "outcomes": [
                    {
                        "modifier": 0,
                        "payout": 12,
                        "source": "BET_PARX",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "DPCT-zenu-HULP",
                        "participantKey": "4bpW-wlct-4bWa",
                        "time": "2025-04-18T02:29:00.214Z"
                    }
                ],
                "context": {
                    "marketKey": "DPCT-zenu-HULP",
                    "marketType": "MONEYLINE_3WAY",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "D7Eu-zenu-sfle",
                    "eventSport": "SOCCER",
                    "eventName": "Mainz 05 @ Bayern Munich",
                    "eventStartTime": "2025-04-26T13:30:00.000Z",
                    "eventHomeParticipantKey": "CMsr-wlct-dYkS",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Mainz 05",
                            "key": "4bpW-wlct-4bWa",
                            "shortName": "MAI",
                            "slug": "mainz-05",
                            "sport": "SOCCER"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Bayern Munich",
                            "key": "CMsr-wlct-dYkS",
                            "shortName": "BAY",
                            "slug": "bayern-munich",
                            "sport": "SOCCER"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 German Bundesliga",
                    "competitionInstanceKey": "AQK0-yiqv-XeTX",
                    "competitionName": "German Bundesliga",
                    "competitionShortName": "DFL",
                    "competitionKey": "deEJ-wlct-ob91",
                    "impliedProbability": 0.08609476275002409
                }
            },
            {
                "type": "PLUS_EV_AVERAGE",
                "value": 0.03313715300028908,
                "valueType": "PERCENT",
                "outcomes": [
                    {
                        "modifier": 0,
                        "payout": 12,
                        "source": "BET_RIVERS",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "DPCT-zenu-HULP",
                        "participantKey": "4bpW-wlct-4bWa",
                        "time": "2025-04-18T02:29:00.114Z"
                    }
                ],
                "context": {
                    "marketKey": "DPCT-zenu-HULP",
                    "marketType": "MONEYLINE_3WAY",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "D7Eu-zenu-sfle",
                    "eventSport": "SOCCER",
                    "eventName": "Mainz 05 @ Bayern Munich",
                    "eventStartTime": "2025-04-26T13:30:00.000Z",
                    "eventHomeParticipantKey": "CMsr-wlct-dYkS",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Mainz 05",
                            "key": "4bpW-wlct-4bWa",
                            "shortName": "MAI",
                            "slug": "mainz-05",
                            "sport": "SOCCER"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Bayern Munich",
                            "key": "CMsr-wlct-dYkS",
                            "shortName": "BAY",
                            "slug": "bayern-munich",
                            "sport": "SOCCER"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 German Bundesliga",
                    "competitionInstanceKey": "AQK0-yiqv-XeTX",
                    "competitionName": "German Bundesliga",
                    "competitionShortName": "DFL",
                    "competitionKey": "deEJ-wlct-ob91",
                    "impliedProbability": 0.08609476275002409
                }
            },
            {
                "type": "PLUS_EV_AVERAGE",
                "value": 0.008641275159334771,
                "valueType": "PERCENT",
                "outcomes": [
                    {
                        "modifier": 0,
                        "payout": 5.3,
                        "source": "BET_PARX",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "E0it-zenu-JbMh",
                        "participantKey": "uve9-yiww-OIIr",
                        "time": "2025-04-18T02:29:00.235Z"
                    }
                ],
                "context": {
                    "marketKey": "E0it-zenu-JbMh",
                    "marketType": "MONEYLINE_3WAY",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "JtH2-zenu-0tHB",
                    "eventSport": "SOCCER",
                    "eventName": "AS Saint-Etienne @ Strasbourg",
                    "eventStartTime": "2025-04-26T15:00:00.000Z",
                    "eventHomeParticipantKey": "oQii-wlct-dJ9J",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Strasbourg",
                            "key": "oQii-wlct-dJ9J",
                            "shortName": "STR",
                            "slug": "strasbourg",
                            "sport": "SOCCER"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "AS Saint-Etienne",
                            "key": "uve9-yiww-OIIr",
                            "shortName": "ASE",
                            "slug": "as-saint-etienne",
                            "sport": "SOCCER"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 French Ligue 1",
                    "competitionInstanceKey": "vqUs-yirv-BL4l",
                    "competitionName": "French Ligue 1",
                    "competitionShortName": "LIGUE_ONE",
                    "competitionKey": "xEL0-wlct-6byJ",
                    "impliedProbability": 0.19030967455836506
                }
            },
            {
                "type": "PLUS_EV_AVERAGE",
                "value": 0.008641275159334771,
                "valueType": "PERCENT",
                "outcomes": [
                    {
                        "modifier": 0,
                        "payout": 5.3,
                        "source": "BET_RIVERS",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "E0it-zenu-JbMh",
                        "participantKey": "uve9-yiww-OIIr",
                        "time": "2025-04-18T02:29:00.117Z"
                    }
                ],
                "context": {
                    "marketKey": "E0it-zenu-JbMh",
                    "marketType": "MONEYLINE_3WAY",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "JtH2-zenu-0tHB",
                    "eventSport": "SOCCER",
                    "eventName": "AS Saint-Etienne @ Strasbourg",
                    "eventStartTime": "2025-04-26T15:00:00.000Z",
                    "eventHomeParticipantKey": "oQii-wlct-dJ9J",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Strasbourg",
                            "key": "oQii-wlct-dJ9J",
                            "shortName": "STR",
                            "slug": "strasbourg",
                            "sport": "SOCCER"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "AS Saint-Etienne",
                            "key": "uve9-yiww-OIIr",
                            "shortName": "ASE",
                            "slug": "as-saint-etienne",
                            "sport": "SOCCER"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 French Ligue 1",
                    "competitionInstanceKey": "vqUs-yirv-BL4l",
                    "competitionName": "French Ligue 1",
                    "competitionShortName": "LIGUE_ONE",
                    "competitionKey": "xEL0-wlct-6byJ",
                    "impliedProbability": 0.19030967455836506
                }
            },
            {
                "type": "PLUS_EV_AVERAGE",
                "value": 0.008641275159334771,
                "valueType": "PERCENT",
                "outcomes": [
                    {
                        "modifier": 0,
                        "payout": 5.3,
                        "source": "FAN_DUEL",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "E0it-zenu-JbMh",
                        "participantKey": "uve9-yiww-OIIr",
                        "time": "2025-04-18T02:29:00.289Z"
                    }
                ],
                "context": {
                    "marketKey": "E0it-zenu-JbMh",
                    "marketType": "MONEYLINE_3WAY",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "JtH2-zenu-0tHB",
                    "eventSport": "SOCCER",
                    "eventName": "AS Saint-Etienne @ Strasbourg",
                    "eventStartTime": "2025-04-26T15:00:00.000Z",
                    "eventHomeParticipantKey": "oQii-wlct-dJ9J",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Strasbourg",
                            "key": "oQii-wlct-dJ9J",
                            "shortName": "STR",
                            "slug": "strasbourg",
                            "sport": "SOCCER"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "AS Saint-Etienne",
                            "key": "uve9-yiww-OIIr",
                            "shortName": "ASE",
                            "slug": "as-saint-etienne",
                            "sport": "SOCCER"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 French Ligue 1",
                    "competitionInstanceKey": "vqUs-yirv-BL4l",
                    "competitionName": "French Ligue 1",
                    "competitionShortName": "LIGUE_ONE",
                    "competitionKey": "xEL0-wlct-6byJ",
                    "impliedProbability": 0.19030967455836506
                }
            },
            {
                "type": "PLUS_EV_AVERAGE",
                "value": 0.008151349576246969,
                "valueType": "PERCENT",
                "outcomes": [
                    {
                        "modifier": 0,
                        "payout": 2.9,
                        "source": "FAN_DUEL",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "Ez9l-zers-puKR",
                        "participantKey": "7eOD-wegw-VR1e",
                        "time": "2025-04-18T02:29:00.287Z"
                    }
                ],
                "context": {
                    "marketKey": "Ez9l-zers-puKR",
                    "marketType": "MONEYLINE",
                    "marketSegment": "FULL_MATCH",
                    "eventKey": "fGWY-zers-TGcJ",
                    "eventSport": "BASEBALL",
                    "eventName": "Miami Marlins @ Philadelphia Phillies",
                    "eventStartTime": "2025-04-18T22:46:00.000Z",
                    "eventHomeParticipantKey": "farj-wegw-apsI",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Miami Marlins",
                            "key": "7eOD-wegw-VR1e",
                            "shortName": "MIA",
                            "slug": "miami-marlins",
                            "sport": "BASEBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Philadelphia Phillies",
                            "key": "farj-wegw-apsI",
                            "shortName": "PHI",
                            "slug": "philadelphia-phillies",
                            "sport": "BASEBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 Major League Baseball",
                    "competitionInstanceKey": "9Jss-zcjh-iOl3",
                    "competitionName": "Major League Baseball",
                    "competitionShortName": "MLB",
                    "competitionKey": "qK0E-wddv-bFet",
                    "impliedProbability": 0.3476383964056024
                }
            },
            {
                "type": "PLUS_EV_AVERAGE",
                "value": 0.14374199583116964,
                "valueType": "PERCENT",
                "outcomes": [
                    {
                        "modifier": 0,
                        "payout": 19,
                        "source": "BET_PARX",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "GncO-zegt-fc7S",
                        "participantKey": "XNc8-xhdl-11k8",
                        "time": "2025-04-18T02:29:00.235Z"
                    }
                ],
                "context": {
                    "marketKey": "GncO-zegt-fc7S",
                    "marketType": "MONEYLINE_3WAY",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "SWf7-zegt-ML0j",
                    "eventSport": "SOCCER",
                    "eventName": "Le Havre @ Paris St Germain",
                    "eventStartTime": "2025-04-19T15:00:00.000Z",
                    "eventHomeParticipantKey": "w9RG-wlct-BGc9",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Paris St Germain",
                            "key": "w9RG-wlct-BGc9",
                            "shortName": "PSG",
                            "slug": "paris-st-germain",
                            "sport": "SOCCER"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Le Havre",
                            "key": "XNc8-xhdl-11k8",
                            "shortName": "HAC",
                            "slug": "le-havre",
                            "sport": "SOCCER"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 French Ligue 1",
                    "competitionInstanceKey": "vqUs-yirv-BL4l",
                    "competitionName": "French Ligue 1",
                    "competitionShortName": "LIGUE_ONE",
                    "competitionKey": "xEL0-wlct-6byJ",
                    "impliedProbability": 0.06019694714900893
                }
            },
            {
                "type": "PLUS_EV_AVERAGE",
                "value": 0.14374199583116964,
                "valueType": "PERCENT",
                "outcomes": [
                    {
                        "modifier": 0,
                        "payout": 19,
                        "source": "BET_RIVERS",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "GncO-zegt-fc7S",
                        "participantKey": "XNc8-xhdl-11k8",
                        "time": "2025-04-18T02:29:00.117Z"
                    }
                ],
                "context": {
                    "marketKey": "GncO-zegt-fc7S",
                    "marketType": "MONEYLINE_3WAY",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "SWf7-zegt-ML0j",
                    "eventSport": "SOCCER",
                    "eventName": "Le Havre @ Paris St Germain",
                    "eventStartTime": "2025-04-19T15:00:00.000Z",
                    "eventHomeParticipantKey": "w9RG-wlct-BGc9",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Paris St Germain",
                            "key": "w9RG-wlct-BGc9",
                            "shortName": "PSG",
                            "slug": "paris-st-germain",
                            "sport": "SOCCER"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Le Havre",
                            "key": "XNc8-xhdl-11k8",
                            "shortName": "HAC",
                            "slug": "le-havre",
                            "sport": "SOCCER"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 French Ligue 1",
                    "competitionInstanceKey": "vqUs-yirv-BL4l",
                    "competitionName": "French Ligue 1",
                    "competitionShortName": "LIGUE_ONE",
                    "competitionKey": "xEL0-wlct-6byJ",
                    "impliedProbability": 0.06019694714900893
                }
            },
            {
                "type": "PLUS_EV_AVERAGE",
                "value": 0.027458306362395324,
                "valueType": "PERCENT",
                "outcomes": [
                    {
                        "modifier": 0,
                        "payout": 5.8,
                        "source": "FAN_DUEL",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "HaS7-zemm-du3w",
                        "participantKey": "0dJK-wjcs-UywY",
                        "time": "2025-04-18T02:29:00.286Z"
                    }
                ],
                "context": {
                    "marketKey": "HaS7-zemm-du3w",
                    "marketType": "MONEYLINE_3WAY",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "Rrrc-zemm-Xhjx",
                    "eventSport": "SOCCER",
                    "eventName": "Leicester City @ Wolverhampton Wanderers",
                    "eventStartTime": "2025-04-26T14:00:00.000Z",
                    "eventHomeParticipantKey": "2SSk-wjcs-h5oC",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Leicester City",
                            "key": "0dJK-wjcs-UywY",
                            "shortName": "LEI",
                            "slug": "leicester-city",
                            "sport": "SOCCER"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Wolverhampton Wanderers",
                            "key": "2SSk-wjcs-h5oC",
                            "shortName": "WLV",
                            "slug": "wolverhampton-wanderers",
                            "sport": "SOCCER"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 English Premier League",
                    "competitionInstanceKey": "dhy8-yiqv-zo8S",
                    "competitionName": "English Premier League",
                    "competitionShortName": "EPL",
                    "competitionKey": "Xa0f-wjcs-tANp",
                    "impliedProbability": 0.17714798385558542
                }
            },
            {
                "type": "PLUS_EV_AVERAGE",
                "value": 0.005890373416015837,
                "valueType": "PERCENT",
                "outcomes": [
                    {
                        "modifier": 0,
                        "payout": 5.2,
                        "source": "FAN_DUEL",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "JcW0-zegp-vYYR",
                        "participantKey": "JCJ1-wdgk-jUWU",
                        "time": "2025-04-18T02:29:00.287Z"
                    }
                ],
                "context": {
                    "marketKey": "JcW0-zegp-vYYR",
                    "marketType": "MONEYLINE_3WAY",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "1uB2-zegp-dHkd",
                    "eventSport": "SOCCER",
                    "eventName": "Toronto FC @ Real Salt Lake",
                    "eventStartTime": "2025-04-20T01:30:00.000Z",
                    "eventHomeParticipantKey": "Rf7Z-wdgk-ydq4",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Real Salt Lake",
                            "key": "Rf7Z-wdgk-ydq4",
                            "shortName": "RSL",
                            "slug": "real-salt-lake",
                            "sport": "SOCCER"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Toronto FC",
                            "key": "JCJ1-wdgk-jUWU",
                            "shortName": "TFC",
                            "slug": "toronto-fc",
                            "sport": "SOCCER"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 Major League Soccer",
                    "competitionInstanceKey": "RlHj-zcjh-6jYC",
                    "competitionName": "Major League Soccer",
                    "competitionShortName": "MLS",
                    "competitionKey": "H2nG-wddv-NZsP",
                    "impliedProbability": 0.19344045642615687
                }
            },
            {
                "type": "PLUS_EV_AVERAGE",
                "value": 0.0948850893317521,
                "valueType": "PERCENT",
                "outcomes": [
                    {
                        "modifier": 0,
                        "payout": 14,
                        "source": "BET_PARX",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "NUvC-zenu-DAhP",
                        "participantKey": "q4R3-yjue-ahNS",
                        "time": "2025-04-18T02:29:00.220Z"
                    }
                ],
                "context": {
                    "marketKey": "NUvC-zenu-DAhP",
                    "marketType": "MONEYLINE_3WAY",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "3Mlo-zenu-GJF1",
                    "eventSport": "SOCCER",
                    "eventName": "Valladolid @ Real Betis",
                    "eventStartTime": "2025-04-24T19:30:00.000Z",
                    "eventHomeParticipantKey": "q0NG-wlct-XTLY",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Real Betis",
                            "key": "q0NG-wlct-XTLY",
                            "shortName": "BET",
                            "slug": "real-betis",
                            "sport": "SOCCER"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Valladolid",
                            "key": "q4R3-yjue-ahNS",
                            "shortName": "VLD",
                            "slug": "valladolid",
                            "sport": "SOCCER"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 Spanish La Liga",
                    "competitionInstanceKey": "VQM5-yiqw-x4Xi",
                    "competitionName": "Spanish La Liga",
                    "competitionShortName": "LA_LIGA",
                    "competitionKey": "UqE7-wlct-9mU2",
                    "impliedProbability": 0.07820607780941086
                }
            },
            {
                "type": "PLUS_EV_AVERAGE",
                "value": 0.0948850893317521,
                "valueType": "PERCENT",
                "outcomes": [
                    {
                        "modifier": 0,
                        "payout": 14,
                        "source": "BET_RIVERS",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "NUvC-zenu-DAhP",
                        "participantKey": "q4R3-yjue-ahNS",
                        "time": "2025-04-18T02:29:00.115Z"
                    }
                ],
                "context": {
                    "marketKey": "NUvC-zenu-DAhP",
                    "marketType": "MONEYLINE_3WAY",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "3Mlo-zenu-GJF1",
                    "eventSport": "SOCCER",
                    "eventName": "Valladolid @ Real Betis",
                    "eventStartTime": "2025-04-24T19:30:00.000Z",
                    "eventHomeParticipantKey": "q0NG-wlct-XTLY",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Real Betis",
                            "key": "q0NG-wlct-XTLY",
                            "shortName": "BET",
                            "slug": "real-betis",
                            "sport": "SOCCER"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Valladolid",
                            "key": "q4R3-yjue-ahNS",
                            "shortName": "VLD",
                            "slug": "valladolid",
                            "sport": "SOCCER"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 Spanish La Liga",
                    "competitionInstanceKey": "VQM5-yiqw-x4Xi",
                    "competitionName": "Spanish La Liga",
                    "competitionShortName": "LA_LIGA",
                    "competitionKey": "UqE7-wlct-9mU2",
                    "impliedProbability": 0.07820607780941086
                }
            },
            {
                "type": "PLUS_EV_AVERAGE",
                "value": 0.10090911874884789,
                "valueType": "PERCENT",
                "outcomes": [
                    {
                        "modifier": 0,
                        "payout": 8.5,
                        "source": "BET_PARX",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "Nxk7-zenu-WWhh",
                        "participantKey": "H6LB-wlct-uLi8",
                        "time": "2025-04-18T02:29:00.235Z"
                    }
                ],
                "context": {
                    "marketKey": "Nxk7-zenu-WWhh",
                    "marketType": "MONEYLINE_3WAY",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "z1Ap-zenu-yja4",
                    "eventSport": "SOCCER",
                    "eventName": "Nice @ Paris St Germain",
                    "eventStartTime": "2025-04-25T18:45:00.000Z",
                    "eventHomeParticipantKey": "w9RG-wlct-BGc9",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Nice",
                            "key": "H6LB-wlct-uLi8",
                            "shortName": "NCE",
                            "slug": "nice",
                            "sport": "SOCCER"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Paris St Germain",
                            "key": "w9RG-wlct-BGc9",
                            "shortName": "PSG",
                            "slug": "paris-st-germain",
                            "sport": "SOCCER"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 French Ligue 1",
                    "competitionInstanceKey": "vqUs-yirv-BL4l",
                    "competitionName": "French Ligue 1",
                    "competitionShortName": "LIGUE_ONE",
                    "competitionKey": "xEL0-wlct-6byJ",
                    "impliedProbability": 0.12951871985280564
                }
            },
            {
                "type": "PLUS_EV_AVERAGE",
                "value": 0.10090911874884789,
                "valueType": "PERCENT",
                "outcomes": [
                    {
                        "modifier": 0,
                        "payout": 8.5,
                        "source": "BET_RIVERS",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "Nxk7-zenu-WWhh",
                        "participantKey": "H6LB-wlct-uLi8",
                        "time": "2025-04-18T02:29:00.117Z"
                    }
                ],
                "context": {
                    "marketKey": "Nxk7-zenu-WWhh",
                    "marketType": "MONEYLINE_3WAY",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "z1Ap-zenu-yja4",
                    "eventSport": "SOCCER",
                    "eventName": "Nice @ Paris St Germain",
                    "eventStartTime": "2025-04-25T18:45:00.000Z",
                    "eventHomeParticipantKey": "w9RG-wlct-BGc9",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Nice",
                            "key": "H6LB-wlct-uLi8",
                            "shortName": "NCE",
                            "slug": "nice",
                            "sport": "SOCCER"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Paris St Germain",
                            "key": "w9RG-wlct-BGc9",
                            "shortName": "PSG",
                            "slug": "paris-st-germain",
                            "sport": "SOCCER"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 French Ligue 1",
                    "competitionInstanceKey": "vqUs-yirv-BL4l",
                    "competitionName": "French Ligue 1",
                    "competitionShortName": "LIGUE_ONE",
                    "competitionKey": "xEL0-wlct-6byJ",
                    "impliedProbability": 0.12951871985280564
                }
            },
            {
                "type": "PLUS_EV_AVERAGE",
                "value": 0.021663147481096767,
                "valueType": "PERCENT",
                "outcomes": [
                    {
                        "modifier": -1.5,
                        "payout": 2.04,
                        "source": "FAN_DUEL",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "P0HE-zerv-YRI4",
                        "participantKey": "OB2d-wegw-17Wi",
                        "time": "2025-04-18T02:29:00.287Z"
                    }
                ],
                "context": {
                    "marketKey": "P0HE-zerv-YRI4",
                    "marketType": "POINT_SPREAD",
                    "marketSegment": "FULL_MATCH",
                    "eventKey": "NIRg-zerv-spcR",
                    "eventSport": "BASEBALL",
                    "eventName": "Chicago White Sox @ Boston Red Sox",
                    "eventStartTime": "2025-04-18T23:11:00.000Z",
                    "eventHomeParticipantKey": "OB2d-wegw-17Wi",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Boston Red Sox",
                            "key": "OB2d-wegw-17Wi",
                            "shortName": "BOS",
                            "slug": "boston-red-sox",
                            "sport": "BASEBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Chicago White Sox",
                            "key": "61U6-wegw-KOIQ",
                            "shortName": "CWS",
                            "slug": "chicago-white-sox",
                            "sport": "BASEBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 Major League Baseball",
                    "competitionInstanceKey": "9Jss-zcjh-iOl3",
                    "competitionName": "Major League Baseball",
                    "competitionShortName": "MLB",
                    "competitionKey": "qK0E-wddv-bFet",
                    "impliedProbability": 0.5008152683730867
                }
            },
            {
                "type": "PLUS_EV_AVERAGE",
                "value": 0.026337858843365147,
                "valueType": "PERCENT",
                "outcomes": [
                    {
                        "modifier": 0,
                        "payout": 5.5,
                        "source": "FAN_DUEL",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "PN6G-zegt-hRGN",
                        "participantKey": "oQii-wlct-dJ9J",
                        "time": "2025-04-18T02:29:00.289Z"
                    }
                ],
                "context": {
                    "marketKey": "PN6G-zegt-hRGN",
                    "marketType": "MONEYLINE_3WAY",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "Qqs8-zegt-fqGq",
                    "eventSport": "SOCCER",
                    "eventName": "Strasbourg @ Monaco",
                    "eventStartTime": "2025-04-19T17:00:00.000Z",
                    "eventHomeParticipantKey": "L30s-wlct-7TSw",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Strasbourg",
                            "key": "oQii-wlct-dJ9J",
                            "shortName": "STR",
                            "slug": "strasbourg",
                            "sport": "SOCCER"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Monaco",
                            "key": "L30s-wlct-7TSw",
                            "shortName": "AMO",
                            "slug": "monaco",
                            "sport": "SOCCER"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 French Ligue 1",
                    "competitionInstanceKey": "vqUs-yirv-BL4l",
                    "competitionName": "French Ligue 1",
                    "competitionShortName": "LIGUE_ONE",
                    "competitionKey": "xEL0-wlct-6byJ",
                    "impliedProbability": 0.1866068834260664
                }
            },
            {
                "type": "PLUS_EV_AVERAGE",
                "value": 0.0020985051352125916,
                "valueType": "PERCENT",
                "outcomes": [
                    {
                        "modifier": 0,
                        "payout": 7,
                        "source": "BOVADA",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "Pcz4-zerk-5tCg",
                        "participantKey": "s3Vn-wlct-RLJQ",
                        "time": "2025-04-18T02:29:00.259Z"
                    }
                ],
                "context": {
                    "marketKey": "Pcz4-zerk-5tCg",
                    "marketType": "MONEYLINE_3WAY",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "OQty-zerk-wq3V",
                    "eventSport": "SOCCER",
                    "eventName": "Espanyol @ Villarreal",
                    "eventStartTime": "2025-04-27T14:15:00.000Z",
                    "eventHomeParticipantKey": "xdwW-wlct-ihyA",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Villarreal",
                            "key": "xdwW-wlct-ihyA",
                            "shortName": "VIL",
                            "slug": "villarreal",
                            "sport": "SOCCER"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Espanyol",
                            "key": "s3Vn-wlct-RLJQ",
                            "shortName": "ESY",
                            "slug": "espanyol",
                            "sport": "SOCCER"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 Spanish La Liga",
                    "competitionInstanceKey": "VQM5-yiqw-x4Xi",
                    "competitionName": "Spanish La Liga",
                    "competitionShortName": "LA_LIGA",
                    "competitionKey": "UqE7-wlct-9mU2",
                    "impliedProbability": 0.14315692930503038
                }
            },
            {
                "type": "PLUS_EV_AVERAGE",
                "value": 0.0020985051352125916,
                "valueType": "PERCENT",
                "outcomes": [
                    {
                        "modifier": 0,
                        "payout": 7,
                        "source": "FAN_DUEL",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "Pcz4-zerk-5tCg",
                        "participantKey": "s3Vn-wlct-RLJQ",
                        "time": "2025-04-18T02:29:00.289Z"
                    }
                ],
                "context": {
                    "marketKey": "Pcz4-zerk-5tCg",
                    "marketType": "MONEYLINE_3WAY",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "OQty-zerk-wq3V",
                    "eventSport": "SOCCER",
                    "eventName": "Espanyol @ Villarreal",
                    "eventStartTime": "2025-04-27T14:15:00.000Z",
                    "eventHomeParticipantKey": "xdwW-wlct-ihyA",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Villarreal",
                            "key": "xdwW-wlct-ihyA",
                            "shortName": "VIL",
                            "slug": "villarreal",
                            "sport": "SOCCER"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Espanyol",
                            "key": "s3Vn-wlct-RLJQ",
                            "shortName": "ESY",
                            "slug": "espanyol",
                            "sport": "SOCCER"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 Spanish La Liga",
                    "competitionInstanceKey": "VQM5-yiqw-x4Xi",
                    "competitionName": "Spanish La Liga",
                    "competitionShortName": "LA_LIGA",
                    "competitionKey": "UqE7-wlct-9mU2",
                    "impliedProbability": 0.14315692930503038
                }
            },
            {
                "type": "PLUS_EV_AVERAGE",
                "value": 0.019341752487011865,
                "valueType": "PERCENT",
                "outcomes": [
                    {
                        "modifier": 0,
                        "payout": 4.75,
                        "source": "BET_PARX",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "T7SX-zemt-Sbcc",
                        "participantKey": "GHff-yjue-prmE",
                        "time": "2025-04-18T02:29:00.143Z"
                    }
                ],
                "context": {
                    "marketKey": "T7SX-zemt-Sbcc",
                    "marketType": "MONEYLINE_3WAY",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "zl5n-zemt-z9tU",
                    "eventSport": "SOCCER",
                    "eventName": "Oxford United @ Cardiff City",
                    "eventStartTime": "2025-04-21T14:00:00.000Z",
                    "eventHomeParticipantKey": "ORNI-ybnv-QDpl",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Cardiff City",
                            "key": "ORNI-ybnv-QDpl",
                            "shortName": "CAR",
                            "slug": "cardiff-city",
                            "sport": "SOCCER"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Oxford United",
                            "key": "GHff-yjue-prmE",
                            "shortName": "OXF",
                            "slug": "oxford-united",
                            "sport": "SOCCER"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 English Football League Championship",
                    "competitionInstanceKey": "U1TI-yiqv-YpWA",
                    "competitionName": "English Football League Championship",
                    "competitionShortName": "EFLC",
                    "competitionKey": "RY22-ybnv-qSWt",
                    "impliedProbability": 0.2145982636814762
                }
            },
            {
                "type": "PLUS_EV_AVERAGE",
                "value": 0.07585861252506021,
                "valueType": "PERCENT",
                "outcomes": [
                    {
                        "modifier": 0,
                        "payout": 13,
                        "source": "BET_PARX",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "VPLH-zenu-Nfmr",
                        "participantKey": "fY7Q-wlct-mxTa",
                        "time": "2025-04-18T02:29:00.220Z"
                    }
                ],
                "context": {
                    "marketKey": "VPLH-zenu-Nfmr",
                    "marketType": "MONEYLINE_3WAY",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "h4Me-zenu-YB60",
                    "eventSport": "SOCCER",
                    "eventName": "RCD Mallorca @ Barcelona",
                    "eventStartTime": "2025-04-22T19:30:00.000Z",
                    "eventHomeParticipantKey": "DBcT-wlct-84yW",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "RCD Mallorca",
                            "key": "fY7Q-wlct-mxTa",
                            "shortName": "RCD",
                            "slug": "rcd-mallorca",
                            "sport": "SOCCER"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Barcelona",
                            "key": "DBcT-wlct-84yW",
                            "shortName": "FCB",
                            "slug": "barcelona",
                            "sport": "SOCCER"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 Spanish La Liga",
                    "competitionInstanceKey": "VQM5-yiqw-x4Xi",
                    "competitionName": "Spanish La Liga",
                    "competitionShortName": "LA_LIGA",
                    "competitionKey": "UqE7-wlct-9mU2",
                    "impliedProbability": 0.08275835480962002
                }
            },
            {
                "type": "PLUS_EV_AVERAGE",
                "value": 0.07585861252506021,
                "valueType": "PERCENT",
                "outcomes": [
                    {
                        "modifier": 0,
                        "payout": 13,
                        "source": "BET_RIVERS",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "VPLH-zenu-Nfmr",
                        "participantKey": "fY7Q-wlct-mxTa",
                        "time": "2025-04-18T02:29:00.115Z"
                    }
                ],
                "context": {
                    "marketKey": "VPLH-zenu-Nfmr",
                    "marketType": "MONEYLINE_3WAY",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "h4Me-zenu-YB60",
                    "eventSport": "SOCCER",
                    "eventName": "RCD Mallorca @ Barcelona",
                    "eventStartTime": "2025-04-22T19:30:00.000Z",
                    "eventHomeParticipantKey": "DBcT-wlct-84yW",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "RCD Mallorca",
                            "key": "fY7Q-wlct-mxTa",
                            "shortName": "RCD",
                            "slug": "rcd-mallorca",
                            "sport": "SOCCER"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Barcelona",
                            "key": "DBcT-wlct-84yW",
                            "shortName": "FCB",
                            "slug": "barcelona",
                            "sport": "SOCCER"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 Spanish La Liga",
                    "competitionInstanceKey": "VQM5-yiqw-x4Xi",
                    "competitionName": "Spanish La Liga",
                    "competitionShortName": "LA_LIGA",
                    "competitionKey": "UqE7-wlct-9mU2",
                    "impliedProbability": 0.08275835480962002
                }
            },
            {
                "type": "PLUS_EV_AVERAGE",
                "value": 0.02281874659550376,
                "valueType": "PERCENT",
                "outcomes": [
                    {
                        "modifier": 0,
                        "payout": 4.2,
                        "source": "DRAFT_KINGS",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "VZNW-zenw-Rsa2",
                        "participantKey": "rRPh-xfox-eKOd",
                        "time": "2025-04-18T02:29:00.280Z"
                    }
                ],
                "context": {
                    "marketKey": "VZNW-zenw-Rsa2",
                    "marketType": "MONEYLINE",
                    "marketSegment": "FULL_MATCH",
                    "eventKey": "nWG2-zenw-Br9x",
                    "eventSport": "AMERICAN_FOOTBALL",
                    "eventName": "Memphis Showboats @ Michigan Panthers",
                    "eventStartTime": "2025-04-19T00:00:00.000Z",
                    "eventHomeParticipantKey": "SUAX-xfox-2UJB",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Memphis Showboats",
                            "key": "rRPh-xfox-eKOd",
                            "shortName": "MEM",
                            "slug": "memphis-showboats",
                            "sport": "AMERICAN_FOOTBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Michigan Panthers",
                            "key": "SUAX-xfox-2UJB",
                            "shortName": "MCH",
                            "slug": "michigan-panthers",
                            "sport": "AMERICAN_FOOTBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 United Football League",
                    "competitionInstanceKey": "eABI-zdxt-zko1",
                    "competitionName": "United Football League",
                    "competitionShortName": "UFL",
                    "competitionKey": "sY0W-yinv-oOMP",
                    "impliedProbability": 0.24352827299892946
                }
            },
            {
                "type": "PLUS_EV_AVERAGE",
                "value": 0.017604617604617512,
                "valueType": "PERCENT",
                "outcomes": [
                    {
                        "modifier": -1.5,
                        "payout": 2.05,
                        "source": "ESPN_BET",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "VsCL-zenw-ADlE",
                        "participantKey": "UvJ8-xcrw-Wi3H",
                        "time": "2025-04-18T02:29:00.285Z"
                    }
                ],
                "context": {
                    "marketKey": "VsCL-zenw-ADlE",
                    "marketType": "POINT_SPREAD",
                    "marketSegment": "FULL_MATCH",
                    "eventKey": "ORVD-zenw-G4Br",
                    "eventSport": "AMERICAN_FOOTBALL",
                    "eventName": "St. Louis BattleHawks @ Arlington Renegades",
                    "eventStartTime": "2025-04-19T16:30:00.000Z",
                    "eventHomeParticipantKey": "csMg-xcrw-edXj",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Arlington Renegades",
                            "key": "csMg-xcrw-edXj",
                            "shortName": "ARL",
                            "slug": "arlington-renegades",
                            "sport": "AMERICAN_FOOTBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "St. Louis BattleHawks",
                            "key": "UvJ8-xcrw-Wi3H",
                            "shortName": "STL",
                            "slug": "st-louis-battlehawks",
                            "sport": "AMERICAN_FOOTBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 United Football League",
                    "competitionInstanceKey": "eABI-zdxt-zko1",
                    "competitionName": "United Football League",
                    "competitionShortName": "UFL",
                    "competitionKey": "sY0W-yinv-oOMP",
                    "impliedProbability": 0.49639249639249644
                }
            },
            {
                "type": "PLUS_EV_AVERAGE",
                "value": 0.051029051834389993,
                "valueType": "PERCENT",
                "outcomes": [
                    {
                        "modifier": 0,
                        "payout": 4.6,
                        "source": "FAN_DUEL",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "ZlG8-zelf-IILW",
                        "participantKey": "i5Rb-yjue-KhhB",
                        "time": "2025-04-18T02:29:00.286Z"
                    }
                ],
                "context": {
                    "marketKey": "ZlG8-zelf-IILW",
                    "marketType": "MONEYLINE_3WAY",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "rX56-zelf-pb39",
                    "eventSport": "SOCCER",
                    "eventName": "Portsmouth @ Norwich City",
                    "eventStartTime": "2025-04-18T14:00:00.000Z",
                    "eventHomeParticipantKey": "Spig-ybnv-zovm",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Portsmouth",
                            "key": "i5Rb-yjue-KhhB",
                            "shortName": "POR",
                            "slug": "portsmouth",
                            "sport": "SOCCER"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Norwich City",
                            "key": "Spig-ybnv-zovm",
                            "shortName": "NOR",
                            "slug": "norwich-city",
                            "sport": "SOCCER"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 English Football League Championship",
                    "competitionInstanceKey": "U1TI-yiqv-YpWA",
                    "competitionName": "English Football League Championship",
                    "competitionShortName": "EFLC",
                    "competitionKey": "RY22-ybnv-qSWt",
                    "impliedProbability": 0.22848457648573697
                }
            },
            {
                "type": "PLUS_EV_AVERAGE",
                "value": 0.0020395624858157158,
                "valueType": "PERCENT",
                "outcomes": [
                    {
                        "modifier": 0,
                        "payout": 9,
                        "source": "BET_PARX",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "dpt7-zelf-0CaO",
                        "participantKey": "GHff-yjue-prmE",
                        "time": "2025-04-18T02:29:00.143Z"
                    }
                ],
                "context": {
                    "marketKey": "dpt7-zelf-0CaO",
                    "marketType": "MONEYLINE_3WAY",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "e8A0-zelf-NER3",
                    "eventSport": "SOCCER",
                    "eventName": "Leeds United @ Oxford United",
                    "eventStartTime": "2025-04-18T19:00:00.000Z",
                    "eventHomeParticipantKey": "GHff-yjue-prmE",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Leeds United",
                            "key": "c26f-wjcs-yEec",
                            "shortName": "LEE",
                            "slug": "leeds-united",
                            "sport": "SOCCER"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Oxford United",
                            "key": "GHff-yjue-prmE",
                            "shortName": "OXF",
                            "slug": "oxford-united",
                            "sport": "SOCCER"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 English Football League Championship",
                    "competitionInstanceKey": "U1TI-yiqv-YpWA",
                    "competitionName": "English Football League Championship",
                    "competitionShortName": "EFLC",
                    "competitionKey": "RY22-ybnv-qSWt",
                    "impliedProbability": 0.11133772916509063
                }
            },
            {
                "type": "PLUS_EV_AVERAGE",
                "value": 0.0020395624858157158,
                "valueType": "PERCENT",
                "outcomes": [
                    {
                        "modifier": 0,
                        "payout": 9,
                        "source": "BET_RIVERS",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "dpt7-zelf-0CaO",
                        "participantKey": "GHff-yjue-prmE",
                        "time": "2025-04-18T02:29:00.075Z"
                    }
                ],
                "context": {
                    "marketKey": "dpt7-zelf-0CaO",
                    "marketType": "MONEYLINE_3WAY",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "e8A0-zelf-NER3",
                    "eventSport": "SOCCER",
                    "eventName": "Leeds United @ Oxford United",
                    "eventStartTime": "2025-04-18T19:00:00.000Z",
                    "eventHomeParticipantKey": "GHff-yjue-prmE",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Leeds United",
                            "key": "c26f-wjcs-yEec",
                            "shortName": "LEE",
                            "slug": "leeds-united",
                            "sport": "SOCCER"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Oxford United",
                            "key": "GHff-yjue-prmE",
                            "shortName": "OXF",
                            "slug": "oxford-united",
                            "sport": "SOCCER"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 English Football League Championship",
                    "competitionInstanceKey": "U1TI-yiqv-YpWA",
                    "competitionName": "English Football League Championship",
                    "competitionShortName": "EFLC",
                    "competitionKey": "RY22-ybnv-qSWt",
                    "impliedProbability": 0.11133772916509063
                }
            },
            {
                "type": "PLUS_EV_AVERAGE",
                "value": 0.019154719928502595,
                "valueType": "PERCENT",
                "outcomes": [
                    {
                        "modifier": 0,
                        "payout": 6.5,
                        "source": "FAN_DUEL",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "eg63-zemt-BEkE",
                        "participantKey": "QJMh-ybnv-Vk0q",
                        "time": "2025-04-18T02:29:00.286Z"
                    }
                ],
                "context": {
                    "marketKey": "eg63-zemt-BEkE",
                    "marketType": "MONEYLINE_3WAY",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "qDyP-zemt-GIZp",
                    "eventSport": "SOCCER",
                    "eventName": "Blackburn Rovers @ Sunderland",
                    "eventStartTime": "2025-04-21T14:00:00.000Z",
                    "eventHomeParticipantKey": "IaVv-ybnv-mYeW",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Blackburn Rovers",
                            "key": "QJMh-ybnv-Vk0q",
                            "shortName": "BLR",
                            "slug": "blackburn-rovers",
                            "sport": "SOCCER"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Sunderland",
                            "key": "IaVv-ybnv-mYeW",
                            "shortName": "SUN",
                            "slug": "sunderland",
                            "sport": "SOCCER"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 English Football League Championship",
                    "competitionInstanceKey": "U1TI-yiqv-YpWA",
                    "competitionName": "English Football League Championship",
                    "competitionShortName": "EFLC",
                    "competitionKey": "RY22-ybnv-qSWt",
                    "impliedProbability": 0.15679303383515425
                }
            },
            {
                "type": "PLUS_EV_AVERAGE",
                "value": 0.01609689855862284,
                "valueType": "PERCENT",
                "outcomes": [
                    {
                        "modifier": 0,
                        "payout": 4.3,
                        "source": "FAN_DUEL",
                        "type": "DRAW",
                        "live": false,
                        "marketKey": "eg63-zemt-BEkE",
                        "participantKey": "",
                        "time": "2025-04-18T02:29:00.286Z"
                    }
                ],
                "context": {
                    "marketKey": "eg63-zemt-BEkE",
                    "marketType": "MONEYLINE_3WAY",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "qDyP-zemt-GIZp",
                    "eventSport": "SOCCER",
                    "eventName": "Blackburn Rovers @ Sunderland",
                    "eventStartTime": "2025-04-21T14:00:00.000Z",
                    "eventHomeParticipantKey": "IaVv-ybnv-mYeW",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Blackburn Rovers",
                            "key": "QJMh-ybnv-Vk0q",
                            "shortName": "BLR",
                            "slug": "blackburn-rovers",
                            "sport": "SOCCER"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Sunderland",
                            "key": "IaVv-ybnv-mYeW",
                            "shortName": "SUN",
                            "slug": "sunderland",
                            "sport": "SOCCER"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 English Football League Championship",
                    "competitionInstanceKey": "U1TI-yiqv-YpWA",
                    "competitionName": "English Football League Championship",
                    "competitionShortName": "EFLC",
                    "competitionKey": "RY22-ybnv-qSWt",
                    "impliedProbability": 0.2363016043159588
                }
            },
            {
                "type": "PLUS_EV_AVERAGE",
                "value": 0.03378642812565613,
                "valueType": "PERCENT",
                "outcomes": [
                    {
                        "modifier": 0,
                        "payout": 8,
                        "source": "FAN_DUEL",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "ezK9-zenj-ufP0",
                        "participantKey": "Lh9r-wlct-BazT",
                        "time": "2025-04-18T02:29:00.289Z"
                    }
                ],
                "context": {
                    "marketKey": "ezK9-zenj-ufP0",
                    "marketType": "MONEYLINE_3WAY",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "32j9-zenj-KzaN",
                    "eventSport": "SOCCER",
                    "eventName": "Paris St Germain @ Nantes",
                    "eventStartTime": "2025-04-22T18:45:00.000Z",
                    "eventHomeParticipantKey": "Lh9r-wlct-BazT",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Paris St Germain",
                            "key": "w9RG-wlct-BGc9",
                            "shortName": "PSG",
                            "slug": "paris-st-germain",
                            "sport": "SOCCER"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Nantes",
                            "key": "Lh9r-wlct-BazT",
                            "shortName": "NAN",
                            "slug": "nantes",
                            "sport": "SOCCER"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 French Ligue 1",
                    "competitionInstanceKey": "vqUs-yirv-BL4l",
                    "competitionName": "French Ligue 1",
                    "competitionShortName": "LIGUE_ONE",
                    "competitionKey": "xEL0-wlct-6byJ",
                    "impliedProbability": 0.12922330351570702
                }
            },
            {
                "type": "PLUS_EV_AVERAGE",
                "value": 0.059774399500067354,
                "valueType": "PERCENT",
                "outcomes": [
                    {
                        "modifier": 0,
                        "payout": 10.5,
                        "source": "BET_PARX",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "fnAK-zenu-xuEr",
                        "participantKey": "pSOF-xgAw-FzJZ",
                        "time": "2025-04-18T02:29:00.220Z"
                    }
                ],
                "context": {
                    "marketKey": "fnAK-zenu-xuEr",
                    "marketType": "MONEYLINE_3WAY",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "u9bL-zenu-OivH",
                    "eventSport": "SOCCER",
                    "eventName": "Las Palmas @ Athletic Bilbao",
                    "eventStartTime": "2025-04-23T17:00:00.000Z",
                    "eventHomeParticipantKey": "U0fO-wlct-bSMr",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Athletic Bilbao",
                            "key": "U0fO-wlct-bSMr",
                            "shortName": "ATB",
                            "slug": "athletic-bilbao",
                            "sport": "SOCCER"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Las Palmas",
                            "key": "pSOF-xgAw-FzJZ",
                            "shortName": "LPA",
                            "slug": "las-palmas",
                            "sport": "SOCCER"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 Spanish La Liga",
                    "competitionInstanceKey": "VQM5-yiqw-x4Xi",
                    "competitionName": "Spanish La Liga",
                    "competitionShortName": "LA_LIGA",
                    "competitionKey": "UqE7-wlct-9mU2",
                    "impliedProbability": 0.10093089519048261
                }
            },
            {
                "type": "PLUS_EV_AVERAGE",
                "value": 0.059774399500067354,
                "valueType": "PERCENT",
                "outcomes": [
                    {
                        "modifier": 0,
                        "payout": 10.5,
                        "source": "BET_RIVERS",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "fnAK-zenu-xuEr",
                        "participantKey": "pSOF-xgAw-FzJZ",
                        "time": "2025-04-18T02:29:00.115Z"
                    }
                ],
                "context": {
                    "marketKey": "fnAK-zenu-xuEr",
                    "marketType": "MONEYLINE_3WAY",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "u9bL-zenu-OivH",
                    "eventSport": "SOCCER",
                    "eventName": "Las Palmas @ Athletic Bilbao",
                    "eventStartTime": "2025-04-23T17:00:00.000Z",
                    "eventHomeParticipantKey": "U0fO-wlct-bSMr",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Athletic Bilbao",
                            "key": "U0fO-wlct-bSMr",
                            "shortName": "ATB",
                            "slug": "athletic-bilbao",
                            "sport": "SOCCER"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Las Palmas",
                            "key": "pSOF-xgAw-FzJZ",
                            "shortName": "LPA",
                            "slug": "las-palmas",
                            "sport": "SOCCER"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 Spanish La Liga",
                    "competitionInstanceKey": "VQM5-yiqw-x4Xi",
                    "competitionName": "Spanish La Liga",
                    "competitionShortName": "LA_LIGA",
                    "competitionKey": "UqE7-wlct-9mU2",
                    "impliedProbability": 0.10093089519048261
                }
            },
            {
                "type": "PLUS_EV_AVERAGE",
                "value": 0.009308951904826057,
                "valueType": "PERCENT",
                "outcomes": [
                    {
                        "modifier": 0,
                        "payout": 10,
                        "source": "FAN_DUEL",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "fnAK-zenu-xuEr",
                        "participantKey": "pSOF-xgAw-FzJZ",
                        "time": "2025-04-18T02:29:00.289Z"
                    }
                ],
                "context": {
                    "marketKey": "fnAK-zenu-xuEr",
                    "marketType": "MONEYLINE_3WAY",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "u9bL-zenu-OivH",
                    "eventSport": "SOCCER",
                    "eventName": "Las Palmas @ Athletic Bilbao",
                    "eventStartTime": "2025-04-23T17:00:00.000Z",
                    "eventHomeParticipantKey": "U0fO-wlct-bSMr",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Athletic Bilbao",
                            "key": "U0fO-wlct-bSMr",
                            "shortName": "ATB",
                            "slug": "athletic-bilbao",
                            "sport": "SOCCER"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Las Palmas",
                            "key": "pSOF-xgAw-FzJZ",
                            "shortName": "LPA",
                            "slug": "las-palmas",
                            "sport": "SOCCER"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 Spanish La Liga",
                    "competitionInstanceKey": "VQM5-yiqw-x4Xi",
                    "competitionName": "Spanish La Liga",
                    "competitionShortName": "LA_LIGA",
                    "competitionKey": "UqE7-wlct-9mU2",
                    "impliedProbability": 0.10093089519048261
                }
            },
            {
                "type": "PLUS_EV_AVERAGE",
                "value": 0.02489311384916959,
                "valueType": "PERCENT",
                "outcomes": [
                    {
                        "modifier": 0,
                        "payout": 5.4,
                        "source": "FAN_DUEL",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "gDF3-zegt-Uqy4",
                        "participantKey": "U0fO-wlct-bSMr",
                        "time": "2025-04-18T02:29:00.289Z"
                    }
                ],
                "context": {
                    "marketKey": "gDF3-zegt-Uqy4",
                    "marketType": "MONEYLINE_3WAY",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "qnPI-zegt-gGQp",
                    "eventSport": "SOCCER",
                    "eventName": "Athletic Bilbao @ Real Madrid",
                    "eventStartTime": "2025-04-20T19:00:00.000Z",
                    "eventHomeParticipantKey": "eniP-wlct-TqD4",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Athletic Bilbao",
                            "key": "U0fO-wlct-bSMr",
                            "shortName": "ATB",
                            "slug": "athletic-bilbao",
                            "sport": "SOCCER"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Real Madrid",
                            "key": "eniP-wlct-TqD4",
                            "shortName": "MAD",
                            "slug": "real-madrid",
                            "sport": "SOCCER"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 Spanish La Liga",
                    "competitionInstanceKey": "VQM5-yiqw-x4Xi",
                    "competitionName": "Spanish La Liga",
                    "competitionShortName": "LA_LIGA",
                    "competitionKey": "UqE7-wlct-9mU2",
                    "impliedProbability": 0.18979502108317953
                }
            },
            {
                "type": "PLUS_EV_AVERAGE",
                "value": 0.009178046180351618,
                "valueType": "PERCENT",
                "outcomes": [
                    {
                        "modifier": 0,
                        "payout": 1.53,
                        "source": "FAN_DUEL",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "hDMh-zerv-W0yv",
                        "participantKey": "OB2d-wegw-17Wi",
                        "time": "2025-04-18T02:29:00.287Z"
                    }
                ],
                "context": {
                    "marketKey": "hDMh-zerv-W0yv",
                    "marketType": "MONEYLINE",
                    "marketSegment": "FULL_MATCH",
                    "eventKey": "NIRg-zerv-spcR",
                    "eventSport": "BASEBALL",
                    "eventName": "Chicago White Sox @ Boston Red Sox",
                    "eventStartTime": "2025-04-18T23:11:00.000Z",
                    "eventHomeParticipantKey": "OB2d-wegw-17Wi",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Boston Red Sox",
                            "key": "OB2d-wegw-17Wi",
                            "shortName": "BOS",
                            "slug": "boston-red-sox",
                            "sport": "BASEBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Chicago White Sox",
                            "key": "61U6-wegw-KOIQ",
                            "shortName": "CWS",
                            "slug": "chicago-white-sox",
                            "sport": "BASEBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 Major League Baseball",
                    "competitionInstanceKey": "9Jss-zcjh-iOl3",
                    "competitionName": "Major League Baseball",
                    "competitionShortName": "MLB",
                    "competitionKey": "qK0E-wddv-bFet",
                    "impliedProbability": 0.6595934942355239
                }
            },
            {
                "type": "PLUS_EV_AVERAGE",
                "value": 0.024375628215204892,
                "valueType": "PERCENT",
                "outcomes": [
                    {
                        "modifier": 0,
                        "payout": 4.75,
                        "source": "BOVADA",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "hhzG-zeqg-3Jg9",
                        "participantKey": "wdfl-ycbt-OFh5",
                        "time": "2025-04-18T02:29:00.251Z"
                    }
                ],
                "context": {
                    "marketKey": "hhzG-zeqg-3Jg9",
                    "marketType": "MONEYLINE",
                    "marketSegment": "FULL_MATCH",
                    "eventKey": "y62z-zeqg-CRo8",
                    "eventSport": "BASKETBALL",
                    "eventName": "Bayern Munich @ Real Madrid",
                    "eventStartTime": "2025-04-18T18:45:00.000Z",
                    "eventHomeParticipantKey": "nQIi-ycbt-9ekB",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Bayern Munich",
                            "key": "wdfl-ycbt-OFh5",
                            "shortName": "BAY",
                            "slug": "bayern-munich",
                            "sport": "BASKETBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Real Madrid",
                            "key": "nQIi-ycbt-9ekB",
                            "shortName": "MAD",
                            "slug": "real-madrid",
                            "sport": "BASKETBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 EuroLeague",
                    "competitionInstanceKey": "m6Ct-yjxv-KemO",
                    "competitionName": "EuroLeague",
                    "competitionShortName": "EURO_BB",
                    "competitionKey": "kzMY-ycbt-Xaaw",
                    "impliedProbability": 0.21565802699267472
                }
            },
            {
                "type": "PLUS_EV_AVERAGE",
                "value": 0.04722091383127114,
                "valueType": "PERCENT",
                "outcomes": [
                    {
                        "modifier": 0,
                        "payout": 8,
                        "source": "FAN_DUEL",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "iYs2-zelf-cqhm",
                        "participantKey": "wnkZ-ybnv-zlDu",
                        "time": "2025-04-18T02:29:00.286Z"
                    }
                ],
                "context": {
                    "marketKey": "iYs2-zelf-cqhm",
                    "marketType": "MONEYLINE_3WAY",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "Ejd8-zelf-G7zP",
                    "eventSport": "SOCCER",
                    "eventName": "Plymouth Argyle @ Middlesbrough",
                    "eventStartTime": "2025-04-18T14:00:00.000Z",
                    "eventHomeParticipantKey": "ffbj-ybnv-TjPB",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Middlesbrough",
                            "key": "ffbj-ybnv-TjPB",
                            "shortName": "MID",
                            "slug": "middlesbrough",
                            "sport": "SOCCER"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Plymouth Argyle",
                            "key": "wnkZ-ybnv-zlDu",
                            "shortName": "PLY",
                            "slug": "plymouth-argyle",
                            "sport": "SOCCER"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 English Football League Championship",
                    "competitionInstanceKey": "U1TI-yiqv-YpWA",
                    "competitionName": "English Football League Championship",
                    "competitionShortName": "EFLC",
                    "competitionKey": "RY22-ybnv-qSWt",
                    "impliedProbability": 0.1309026142289089
                }
            },
            {
                "type": "PLUS_EV_AVERAGE",
                "value": 0.004319562650005659,
                "valueType": "PERCENT",
                "outcomes": [
                    {
                        "modifier": 0,
                        "payout": 2.7,
                        "source": "DRAFT_KINGS",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "joJ9-zerr-Qwju",
                        "participantKey": "DpdM-wddv-KvEq",
                        "time": "2025-04-18T02:29:00.278Z"
                    }
                ],
                "context": {
                    "marketKey": "joJ9-zerr-Qwju",
                    "marketType": "MONEYLINE",
                    "marketSegment": "FULL_MATCH",
                    "eventKey": "F8eL-zerr-jnjd",
                    "eventSport": "ICE_HOCKEY",
                    "eventName": "Montréal Canadiens @ Washington Capitals",
                    "eventStartTime": "2025-04-21T23:10:00.000Z",
                    "eventHomeParticipantKey": "9wbD-wddv-5oE2",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Montréal Canadiens",
                            "key": "DpdM-wddv-KvEq",
                            "shortName": "MTL",
                            "slug": "montreal-canadiens",
                            "sport": "ICE_HOCKEY"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Washington Capitals",
                            "key": "9wbD-wddv-5oE2",
                            "shortName": "WSH",
                            "slug": "washington-capitals",
                            "sport": "ICE_HOCKEY"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 National Hockey League",
                    "competitionInstanceKey": "g0P0-yiqv-FKyR",
                    "competitionName": "National Hockey League",
                    "competitionShortName": "NHL",
                    "competitionKey": "384d-wddv-w6oc",
                    "impliedProbability": 0.37197020838889094
                }
            },
            {
                "type": "PLUS_EV_AVERAGE",
                "value": 0.014056658432002322,
                "valueType": "PERCENT",
                "outcomes": [
                    {
                        "modifier": 0,
                        "payout": 5.3,
                        "source": "BET_PARX",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "mzHx-zemm-hjMM",
                        "participantKey": "WPB8-wjcs-P0WD",
                        "time": "2025-04-18T02:29:00.128Z"
                    }
                ],
                "context": {
                    "marketKey": "mzHx-zemm-hjMM",
                    "marketType": "MONEYLINE_3WAY",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "Jknx-zemm-hPcD",
                    "eventSport": "SOCCER",
                    "eventName": "Everton @ Chelsea",
                    "eventStartTime": "2025-04-26T11:30:00.000Z",
                    "eventHomeParticipantKey": "XcYR-wjcs-xD5C",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Chelsea",
                            "key": "XcYR-wjcs-xD5C",
                            "shortName": "CHE",
                            "slug": "chelsea",
                            "sport": "SOCCER"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Everton",
                            "key": "WPB8-wjcs-P0WD",
                            "shortName": "EVE",
                            "slug": "everton",
                            "sport": "SOCCER"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 English Premier League",
                    "competitionInstanceKey": "dhy8-yiqv-zo8S",
                    "competitionName": "English Premier League",
                    "competitionShortName": "EPL",
                    "competitionKey": "Xa0f-wjcs-tANp",
                    "impliedProbability": 0.19133144498717025
                }
            },
            {
                "type": "PLUS_EV_AVERAGE",
                "value": 0.014056658432002322,
                "valueType": "PERCENT",
                "outcomes": [
                    {
                        "modifier": 0,
                        "payout": 5.3,
                        "source": "BET_RIVERS",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "mzHx-zemm-hjMM",
                        "participantKey": "WPB8-wjcs-P0WD",
                        "time": "2025-04-18T02:29:00.071Z"
                    }
                ],
                "context": {
                    "marketKey": "mzHx-zemm-hjMM",
                    "marketType": "MONEYLINE_3WAY",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "Jknx-zemm-hPcD",
                    "eventSport": "SOCCER",
                    "eventName": "Everton @ Chelsea",
                    "eventStartTime": "2025-04-26T11:30:00.000Z",
                    "eventHomeParticipantKey": "XcYR-wjcs-xD5C",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Chelsea",
                            "key": "XcYR-wjcs-xD5C",
                            "shortName": "CHE",
                            "slug": "chelsea",
                            "sport": "SOCCER"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Everton",
                            "key": "WPB8-wjcs-P0WD",
                            "shortName": "EVE",
                            "slug": "everton",
                            "sport": "SOCCER"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 English Premier League",
                    "competitionInstanceKey": "dhy8-yiqv-zo8S",
                    "competitionName": "English Premier League",
                    "competitionShortName": "EPL",
                    "competitionKey": "Xa0f-wjcs-tANp",
                    "impliedProbability": 0.19133144498717025
                }
            },
            {
                "type": "PLUS_EV_AVERAGE",
                "value": 0.00585551982239918,
                "valueType": "PERCENT",
                "outcomes": [
                    {
                        "modifier": 0,
                        "payout": 6.75,
                        "source": "BET_PARX",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "n6te-zegg-urBk",
                        "participantKey": "EoGl-wjcs-8BL3",
                        "time": "2025-04-18T02:29:00.128Z"
                    }
                ],
                "context": {
                    "marketKey": "n6te-zegg-urBk",
                    "marketType": "MONEYLINE_3WAY",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "PZsg-zegg-YUeT",
                    "eventSport": "SOCCER",
                    "eventName": "Southampton @ West Ham United",
                    "eventStartTime": "2025-04-19T14:00:00.000Z",
                    "eventHomeParticipantKey": "m0Uq-wjcs-297X",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Southampton",
                            "key": "EoGl-wjcs-8BL3",
                            "shortName": "SOU",
                            "slug": "southampton",
                            "sport": "SOCCER"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "West Ham United",
                            "key": "m0Uq-wjcs-297X",
                            "shortName": "WHU",
                            "slug": "west-ham-united",
                            "sport": "SOCCER"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 English Premier League",
                    "competitionInstanceKey": "dhy8-yiqv-zo8S",
                    "competitionName": "English Premier League",
                    "competitionShortName": "EPL",
                    "competitionKey": "Xa0f-wjcs-tANp",
                    "impliedProbability": 0.14901563256628136
                }
            },
            {
                "type": "PLUS_EV_AVERAGE",
                "value": 0.00585551982239918,
                "valueType": "PERCENT",
                "outcomes": [
                    {
                        "modifier": 0,
                        "payout": 6.75,
                        "source": "BET_RIVERS",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "n6te-zegg-urBk",
                        "participantKey": "EoGl-wjcs-8BL3",
                        "time": "2025-04-18T02:29:00.071Z"
                    }
                ],
                "context": {
                    "marketKey": "n6te-zegg-urBk",
                    "marketType": "MONEYLINE_3WAY",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "PZsg-zegg-YUeT",
                    "eventSport": "SOCCER",
                    "eventName": "Southampton @ West Ham United",
                    "eventStartTime": "2025-04-19T14:00:00.000Z",
                    "eventHomeParticipantKey": "m0Uq-wjcs-297X",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Southampton",
                            "key": "EoGl-wjcs-8BL3",
                            "shortName": "SOU",
                            "slug": "southampton",
                            "sport": "SOCCER"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "West Ham United",
                            "key": "m0Uq-wjcs-297X",
                            "shortName": "WHU",
                            "slug": "west-ham-united",
                            "sport": "SOCCER"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 English Premier League",
                    "competitionInstanceKey": "dhy8-yiqv-zo8S",
                    "competitionName": "English Premier League",
                    "competitionShortName": "EPL",
                    "competitionKey": "Xa0f-wjcs-tANp",
                    "impliedProbability": 0.14901563256628136
                }
            },
            {
                "type": "PLUS_EV_AVERAGE",
                "value": 0.06135556374036688,
                "valueType": "PERCENT",
                "outcomes": [
                    {
                        "modifier": 0,
                        "payout": 8,
                        "source": "FAN_DUEL",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "oIkg-zemm-5Vc8",
                        "participantKey": "Am60-wjcs-vr3e",
                        "time": "2025-04-18T02:29:00.286Z"
                    }
                ],
                "context": {
                    "marketKey": "oIkg-zemm-5Vc8",
                    "marketType": "MONEYLINE_3WAY",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "5ibc-zemm-3HWs",
                    "eventSport": "SOCCER",
                    "eventName": "Tottenham Hotspur @ Liverpool",
                    "eventStartTime": "2025-04-27T15:30:00.000Z",
                    "eventHomeParticipantKey": "G53c-wjcs-mGqJ",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Liverpool",
                            "key": "G53c-wjcs-mGqJ",
                            "shortName": "LIV",
                            "slug": "liverpool",
                            "sport": "SOCCER"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Tottenham Hotspur",
                            "key": "Am60-wjcs-vr3e",
                            "shortName": "TOT",
                            "slug": "tottenham-hotspur",
                            "sport": "SOCCER"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 English Premier League",
                    "competitionInstanceKey": "dhy8-yiqv-zo8S",
                    "competitionName": "English Premier League",
                    "competitionShortName": "EPL",
                    "competitionKey": "Xa0f-wjcs-tANp",
                    "impliedProbability": 0.13266944546754586
                }
            },
            {
                "type": "PLUS_EV_AVERAGE",
                "value": 0.04128699394040869,
                "valueType": "PERCENT",
                "outcomes": [
                    {
                        "modifier": 0,
                        "payout": 12.5,
                        "source": "BET_PARX",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "rcLU-zegg-wslh",
                        "participantKey": "0dJK-wjcs-UywY",
                        "time": "2025-04-18T02:29:00.128Z"
                    }
                ],
                "context": {
                    "marketKey": "rcLU-zegg-wslh",
                    "marketType": "MONEYLINE_3WAY",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "Cax2-zegg-pRI0",
                    "eventSport": "SOCCER",
                    "eventName": "Liverpool @ Leicester City",
                    "eventStartTime": "2025-04-20T15:30:00.000Z",
                    "eventHomeParticipantKey": "0dJK-wjcs-UywY",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Liverpool",
                            "key": "G53c-wjcs-mGqJ",
                            "shortName": "LIV",
                            "slug": "liverpool",
                            "sport": "SOCCER"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Leicester City",
                            "key": "0dJK-wjcs-UywY",
                            "shortName": "LEI",
                            "slug": "leicester-city",
                            "sport": "SOCCER"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 English Premier League",
                    "competitionInstanceKey": "dhy8-yiqv-zo8S",
                    "competitionName": "English Premier League",
                    "competitionShortName": "EPL",
                    "competitionKey": "Xa0f-wjcs-tANp",
                    "impliedProbability": 0.0833029595152327
                }
            },
            {
                "type": "PLUS_EV_AVERAGE",
                "value": 0.04128699394040869,
                "valueType": "PERCENT",
                "outcomes": [
                    {
                        "modifier": 0,
                        "payout": 12.5,
                        "source": "BET_RIVERS",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "rcLU-zegg-wslh",
                        "participantKey": "0dJK-wjcs-UywY",
                        "time": "2025-04-18T02:29:00.071Z"
                    }
                ],
                "context": {
                    "marketKey": "rcLU-zegg-wslh",
                    "marketType": "MONEYLINE_3WAY",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "Cax2-zegg-pRI0",
                    "eventSport": "SOCCER",
                    "eventName": "Liverpool @ Leicester City",
                    "eventStartTime": "2025-04-20T15:30:00.000Z",
                    "eventHomeParticipantKey": "0dJK-wjcs-UywY",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Liverpool",
                            "key": "G53c-wjcs-mGqJ",
                            "shortName": "LIV",
                            "slug": "liverpool",
                            "sport": "SOCCER"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Leicester City",
                            "key": "0dJK-wjcs-UywY",
                            "shortName": "LEI",
                            "slug": "leicester-city",
                            "sport": "SOCCER"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 English Premier League",
                    "competitionInstanceKey": "dhy8-yiqv-zo8S",
                    "competitionName": "English Premier League",
                    "competitionShortName": "EPL",
                    "competitionKey": "Xa0f-wjcs-tANp",
                    "impliedProbability": 0.0833029595152327
                }
            },
            {
                "type": "PLUS_EV_AVERAGE",
                "value": 0.08683763124635324,
                "valueType": "PERCENT",
                "outcomes": [
                    {
                        "modifier": 0,
                        "payout": 14,
                        "source": "BET_PARX",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "stms-zegt-mol7",
                        "participantKey": "Lguq-wlct-iLnQ",
                        "time": "2025-04-18T02:29:00.235Z"
                    }
                ],
                "context": {
                    "marketKey": "stms-zegt-mol7",
                    "marketType": "MONEYLINE_3WAY",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "MpR9-zegt-1xWD",
                    "eventSport": "SOCCER",
                    "eventName": "Montpellier @ Olympique Marseille",
                    "eventStartTime": "2025-04-19T19:05:00.000Z",
                    "eventHomeParticipantKey": "GowT-wlct-XpLb",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Montpellier",
                            "key": "Lguq-wlct-iLnQ",
                            "shortName": "MPL",
                            "slug": "montpellier",
                            "sport": "SOCCER"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Olympique Marseille",
                            "key": "GowT-wlct-XpLb",
                            "shortName": "OLM",
                            "slug": "olympique-marseille",
                            "sport": "SOCCER"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 French Ligue 1",
                    "competitionInstanceKey": "vqUs-yirv-BL4l",
                    "competitionName": "French Ligue 1",
                    "competitionShortName": "LIGUE_ONE",
                    "competitionKey": "xEL0-wlct-6byJ",
                    "impliedProbability": 0.07763125937473953
                }
            },
            {
                "type": "PLUS_EV_AVERAGE",
                "value": 0.08683763124635324,
                "valueType": "PERCENT",
                "outcomes": [
                    {
                        "modifier": 0,
                        "payout": 14,
                        "source": "BET_RIVERS",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "stms-zegt-mol7",
                        "participantKey": "Lguq-wlct-iLnQ",
                        "time": "2025-04-18T02:29:00.117Z"
                    }
                ],
                "context": {
                    "marketKey": "stms-zegt-mol7",
                    "marketType": "MONEYLINE_3WAY",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "MpR9-zegt-1xWD",
                    "eventSport": "SOCCER",
                    "eventName": "Montpellier @ Olympique Marseille",
                    "eventStartTime": "2025-04-19T19:05:00.000Z",
                    "eventHomeParticipantKey": "GowT-wlct-XpLb",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Montpellier",
                            "key": "Lguq-wlct-iLnQ",
                            "shortName": "MPL",
                            "slug": "montpellier",
                            "sport": "SOCCER"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Olympique Marseille",
                            "key": "GowT-wlct-XpLb",
                            "shortName": "OLM",
                            "slug": "olympique-marseille",
                            "sport": "SOCCER"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 French Ligue 1",
                    "competitionInstanceKey": "vqUs-yirv-BL4l",
                    "competitionName": "French Ligue 1",
                    "competitionShortName": "LIGUE_ONE",
                    "competitionKey": "xEL0-wlct-6byJ",
                    "impliedProbability": 0.07763125937473953
                }
            },
            {
                "type": "PLUS_EV_AVERAGE",
                "value": 0.00980641145985861,
                "valueType": "PERCENT",
                "outcomes": [
                    {
                        "modifier": 0,
                        "payout": 4,
                        "source": "BET_PARX",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "toON-zenw-pwWK",
                        "participantKey": "AgrS-xcrw-Sk7F",
                        "time": "2025-04-18T02:29:00.246Z"
                    }
                ],
                "context": {
                    "marketKey": "toON-zenw-pwWK",
                    "marketType": "MONEYLINE",
                    "marketSegment": "FULL_MATCH",
                    "eventKey": "GrFN-zenw-z1Sh",
                    "eventSport": "AMERICAN_FOOTBALL",
                    "eventName": "San Antonio Brahmas @ DC Defenders",
                    "eventStartTime": "2025-04-20T21:00:00.000Z",
                    "eventHomeParticipantKey": "4OpV-xcrw-pbxh",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "DC Defenders",
                            "key": "4OpV-xcrw-pbxh",
                            "shortName": "DC",
                            "slug": "dc-defenders",
                            "sport": "AMERICAN_FOOTBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "San Antonio Brahmas",
                            "key": "AgrS-xcrw-Sk7F",
                            "shortName": "SA",
                            "slug": "san-antonio-brahmas",
                            "sport": "AMERICAN_FOOTBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 United Football League",
                    "competitionInstanceKey": "eABI-zdxt-zko1",
                    "competitionName": "United Football League",
                    "competitionShortName": "UFL",
                    "competitionKey": "sY0W-yinv-oOMP",
                    "impliedProbability": 0.25245160286496465
                }
            },
            {
                "type": "PLUS_EV_AVERAGE",
                "value": 0.00980641145985861,
                "valueType": "PERCENT",
                "outcomes": [
                    {
                        "modifier": 0,
                        "payout": 4,
                        "source": "BET_RIVERS",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "toON-zenw-pwWK",
                        "participantKey": "AgrS-xcrw-Sk7F",
                        "time": "2025-04-18T02:29:00.120Z"
                    }
                ],
                "context": {
                    "marketKey": "toON-zenw-pwWK",
                    "marketType": "MONEYLINE",
                    "marketSegment": "FULL_MATCH",
                    "eventKey": "GrFN-zenw-z1Sh",
                    "eventSport": "AMERICAN_FOOTBALL",
                    "eventName": "San Antonio Brahmas @ DC Defenders",
                    "eventStartTime": "2025-04-20T21:00:00.000Z",
                    "eventHomeParticipantKey": "4OpV-xcrw-pbxh",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "DC Defenders",
                            "key": "4OpV-xcrw-pbxh",
                            "shortName": "DC",
                            "slug": "dc-defenders",
                            "sport": "AMERICAN_FOOTBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "San Antonio Brahmas",
                            "key": "AgrS-xcrw-Sk7F",
                            "shortName": "SA",
                            "slug": "san-antonio-brahmas",
                            "sport": "AMERICAN_FOOTBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 United Football League",
                    "competitionInstanceKey": "eABI-zdxt-zko1",
                    "competitionName": "United Football League",
                    "competitionShortName": "UFL",
                    "competitionKey": "sY0W-yinv-oOMP",
                    "impliedProbability": 0.25245160286496465
                }
            },
            {
                "type": "PLUS_EV_AVERAGE",
                "value": 0.007346539641558403,
                "valueType": "PERCENT",
                "outcomes": [
                    {
                        "modifier": 0,
                        "payout": 4,
                        "source": "FAN_DUEL",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "yXZR-zemm-H4WR",
                        "participantKey": "oAL2-wjcs-9vzu",
                        "time": "2025-04-18T02:29:00.286Z"
                    }
                ],
                "context": {
                    "marketKey": "yXZR-zemm-H4WR",
                    "marketType": "MONEYLINE_3WAY",
                    "marketSegment": "REGULATION_TIME",
                    "eventKey": "jugG-zemm-pMBe",
                    "eventSport": "SOCCER",
                    "eventName": "Manchester United @ AFC Bournemouth",
                    "eventStartTime": "2025-04-27T13:00:00.000Z",
                    "eventHomeParticipantKey": "wKNp-wjcs-1K5J",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "AFC Bournemouth",
                            "key": "wKNp-wjcs-1K5J",
                            "shortName": "BOU",
                            "slug": "afc-bournemouth",
                            "sport": "SOCCER"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "Manchester United",
                            "key": "oAL2-wjcs-9vzu",
                            "shortName": "MUN",
                            "slug": "manchester-united",
                            "sport": "SOCCER"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2024-25 English Premier League",
                    "competitionInstanceKey": "dhy8-yiqv-zo8S",
                    "competitionName": "English Premier League",
                    "competitionShortName": "EPL",
                    "competitionKey": "Xa0f-wjcs-tANp",
                    "impliedProbability": 0.2518366349103896
                }
            },
            {
                "type": "PLUS_EV_AVERAGE",
                "value": 0.013267212983792742,
                "valueType": "PERCENT",
                "outcomes": [
                    {
                        "modifier": 1.5,
                        "payout": 2.4,
                        "source": "BOVADA",
                        "type": "WIN",
                        "live": false,
                        "marketKey": "zpHd-zern-J0v0",
                        "participantKey": "PWCp-xfxt-xemW",
                        "time": "2025-04-18T02:29:00.253Z"
                    }
                ],
                "context": {
                    "marketKey": "zpHd-zern-J0v0",
                    "marketType": "POINT_SPREAD",
                    "marketSegment": "FULL_MATCH",
                    "eventKey": "2ZXI-zern-EUqL",
                    "eventSport": "BASEBALL",
                    "eventName": "LG Twins @ SSG Landers",
                    "eventStartTime": "2025-04-18T09:30:00.000Z",
                    "eventHomeParticipantKey": "PWCp-xfxt-xemW",
                    "eventParticipants": [
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "LG Twins",
                            "key": "ZW0E-xfxt-mKQ0",
                            "shortName": "LG",
                            "slug": "lg-twins",
                            "sport": "BASEBALL"
                        },
                        {
                            "category": "MENS_PROFESSIONAL",
                            "name": "SSG Landers",
                            "key": "PWCp-xfxt-xemW",
                            "shortName": "SSG",
                            "slug": "ssg-landers",
                            "sport": "BASEBALL"
                        }
                    ],
                    "eventCategory": "MENS_PROFESSIONAL",
                    "competitionInstanceName": "2025 KBO League",
                    "competitionInstanceKey": "HzgU-zcrx-0Yjr",
                    "competitionName": "KBO League",
                    "competitionShortName": "KBO",
                    "competitionKey": "lyFJ-xfxt-Oy40",
                    "impliedProbability": 0.42219467207658035
                }
            }
        ]
    }
}

export async function GET(req: NextApiRequest, res: NextApiResponse<ApiResponse<AdvantagesResponse[]>>) {  
    return NextResponse.json({message: 'ok', data: a});
    try {
        const data = await apiService<Sport[]>('/sports');
        res.status(200).json(data);
    } catch (error: any) {
        if(error instanceof Error) res.status(500).json({error: error.message});
    }
}
