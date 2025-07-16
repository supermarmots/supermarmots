type Summary = {
  user: string;
  car: string;
  date: string;
};

export default function SummaryTable({ user, car, date }: Summary) {
  return (
    <div className="w-1/4 text-center text-white bg-gray-200 rounded-md shadow-md h-1/4">
      <h1 className="text-black">폐차 완료!</h1>
      <h2>{user}</h2>
      <h2>{car}</h2>
      <h2>{date}</h2>
    </div>
  );
}
