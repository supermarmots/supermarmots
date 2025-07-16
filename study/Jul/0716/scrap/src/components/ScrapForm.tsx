type LoginInfo = { name: string; carNum: string };

export default function ScrapForm({ name, carNum }: LoginInfo) {
  return (
    <div className="p-4 bg-white border rounded shadow">
      <label>이름</label>
      <input id="name" type="text" value={name} />
      <label>차량번호</label>
      <input id="carNum" type="text" value={carNum} />
    </div>
  );
}
