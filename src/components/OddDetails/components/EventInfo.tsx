interface EventInfoProps {
  name: string;
  startTime: string;
}

const EventInfo: React.FC<EventInfoProps> = ({ name, startTime }) => {
  const date = new Date(startTime).toLocaleString('pt-BR');

  return (
    <div className="bg-gray-900 p-6 rounded-lg w-800px h-fit @md:max-w-full border-l-4 border-[#016ca5]">
      <h1 className="text-2xl font-semibold text-white mb-2">{name}</h1>
      <div className="flex items-center gap-2 mt-4 @md:mt-0">
        <div className="w-2 h-2 bg-[#016ca5] rounded-full"></div>
        <p className="text-gray-300">Início: {date}</p>
      </div>
    </div>
  );
};

export default EventInfo;
