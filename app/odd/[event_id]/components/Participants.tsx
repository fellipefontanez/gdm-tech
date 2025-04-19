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
    <div className="bg-gray-900 p-6 rounded-lg my-8 w-full md:w-[400px] max-w-[95%]">
      <div className="flex items-center justify-center">
        {participants.map((p, index) => (
          <div key={p.key} className="flex items-center">
            <div className={`text-center px-6 py-3 rounded-lg ${p.key === homeParticipantKey ? "bg-gray-800" : "bg-gray-700"}`}>
              <h2 className={`font-bold text-xl ${p.key === homeParticipantKey ? "text-white" : "text-gray-300"}`}>{p.shortName}</h2>
              <p className={`text-sm ${p.key === homeParticipantKey ? "text-[#0199dc]" : "text-gray-400"}`}>{p.name}</p>
            </div>

            {index === 0 && <div className="mx-4 text-white font-bold text-2xl">×</div>}
          </div>
        ))}
      </div>

      <div className="mt-6 text-center">
        <span className="inline-block px-3 py-1 bg-[#016ca5] text-white text-xs rounded-full">
          Time da Casa: {participants.find((p) => p.key === homeParticipantKey)?.shortName}
        </span>
      </div>
    </div>
  );
};

export default Participants;
