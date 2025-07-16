interface CardData {
  id: number;
  icon: string;
  title: string;
  content: string;
}

const cardData: CardData[] = [
  { id: 1, icon: "🌱", title: "식물 가꾸기", content: "매일 물 좀 줘" },
  { id: 2, icon: "📅", title: "캘린더", content: "일정 좀 기록해라" },
  { id: 3, icon: "💬", title: "커뮤니티", content: "자유롭게 이야기 나눠요" },
];

interface CardProps {
  data: CardData;
}

const Card: React.FC<CardProps> = ({ data }) => {
  return (
    <div className="p-4 text-center bg-white border rounded shadow">
      <div>{data.icon}</div>
      <h3 className="mt-2 text-lg font-bold">{data.title}</h3>
      <p className="text-sm text-gray-600">{data.content}</p>
    </div>
  );
};

const CardGrid: React.FC = () => {
  return (
    <div className="grid gap-4 p-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {cardData.map((item) => (
        <Card key={item.id} data={item} />
      ))}
    </div>
  );
};

export default CardGrid;
