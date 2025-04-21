interface Participant {
  key: string;
  slug: string;
  name: string;
  shortName: string;
  sport: string;
}

interface ParticipantsProps {
  participants: Participant[];
  homeParticipantKey: string;
}

const Participants: React.FC<ParticipantsProps> = ({ participants, homeParticipantKey }) => {
  return (
    <div className="bg-white p-6 rounded-lg my-8 w-full @md:w-[400px] border border-gray-200 shadow-sm">
      <div className="flex items-center justify-center">
        {participants.map((p, index) => (
          <div key={p.key} className="flex items-center">
            <div
              className={`text-center px-6 py-3 rounded-lg ${
                p.key === homeParticipantKey ? "bg-blue-50 border border-blue-100" : "bg-gray-50 border border-gray-100"
              }`}
            >
              <h2 className={`font-bold text-xl ${p.key === homeParticipantKey ? "text-blue-600" : "text-gray-700"}`}>{p.shortName}</h2>
              <p className={`text-sm ${p.key === homeParticipantKey ? "text-blue-500" : "text-gray-500"}`}>{p.name}</p>
            </div>
            {index === 0 && <div className="mx-4 text-gray-400 font-bold text-2xl">×</div>}
          </div>
        ))}
      </div>
      <div className="mt-6 text-center">
        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full border border-blue-200">
          Time da Casa: {participants.find((p) => p.key === homeParticipantKey)?.shortName}
        </span>
      </div>
    </div>
  );
};

export default Participants;
