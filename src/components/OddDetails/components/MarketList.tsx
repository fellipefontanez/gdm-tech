interface Market {
  key: string;
  type: string;
  segment: string;
  lastFoundAt: string;
  participantKey: string | null;
  participant: any;
}

interface MarketListProps {
  markets: Market[];
}

const MarketList: React.FC<MarketListProps> = ({ markets }) => {
  const marketTypeDictionary: { [key: string]: string } = {
    MONEYLINE: "Vencedor da Partida",
    POINT_SPREAD: "Handicap de Pontos",
    POINT_TOTAL: "Total de Pontos",
  };

  const marketSegmentDictionary: { [key: string]: string } = {
    FULL_MATCH: "Partida Inteira",
    REGULATION_TIME: "Tempo Regulamentar",
  };

  const segmentColorMap: Record<string, string> = {
    GAME: "bg-green-100 text-green-800",
    SET: "bg-blue-100 text-blue-800",
  };

  return (
    <div className="@mt-8 bg-white rounded-lg p-6 shadow-md border border-gray-200">
      <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
        <svg className="w-6 h-6 mr-2 text-[#016ca5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
          />
        </svg>
        Mercados Disponíveis
      </h3>

      <div className="grid gap-5 @md:grid-cols-2 @lg:grid-cols-3 mt-4">
        {markets.map((market) => (
          <div
            key={market.key}
            className="bg-white p-4 rounded-lg border border-gray-300 hover:border-[#016ca5] transition-all shadow-sm hover:shadow-md"
          >
            <div className="flex justify-between items-center mb-3">
              <h4 className="font-bold text-gray-900 text-lg">{marketTypeDictionary[market.type] || market.type}</h4>
              <span
                className={`text-xs px-2 py-1 rounded-full 
                ${segmentColorMap[market.segment] || "bg-purple-100 text-purple-800"}`}
              >
                {marketSegmentDictionary[market.segment] || market.segment}
              </span>
            </div>

            <div className="flex items-center text-sm text-gray-600 mb-3">
              <svg className="w-4 h-4 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {new Date(market.lastFoundAt).toLocaleString("pt-BR")}
            </div>

            {market.participantKey && (
              <div className="pt-2 mt-2 border-t border-gray-200 text-sm">
                <span className="text-gray-500">Relacionado:</span>{" "}
                <span className="font-medium text-gray-700">{market.participant?.name || market.participantKey}</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {markets.length === 0 && (
        <div className="text-center py-8 text-gray-500 bg-gray-50 rounded-lg mt-3 @md:mt-0">
          <svg className="w-12 h-12 mx-auto text-gray-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          Nenhum mercado disponível no momento
        </div>
      )}
    </div>
  );
};

export default MarketList;
