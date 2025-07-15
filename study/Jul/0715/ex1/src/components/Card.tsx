export function Card() {
  return (
    <div className="max-w-sm p-6 mx-auto mt-10 text-center bg-white border rounded-lg shadow">
      <img
        src="https://jasonryu.net/wp-content/uploads/2020/10/2021-chevrolet-trailblazer-rs-midnight-package-01-1.jpg?w=1500&h=768&crop=1"
        alt="이미지 로드 실패"
        className="mb-4 rounded mx-50"
      />
      <h3 className="text-xl font-semibold">윤찬우</h3>
      <p className="text-gray-500">Frontend Developer</p>
      <p className="mt-2 text-sm text-gray-700">
        React와 Tailwind를 배우는 중입니다.
      </p>
    </div>
  );
}

export default Card;
