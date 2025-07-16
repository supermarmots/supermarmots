export function ButtonGroup() {
  return (
    <div className="flex items-center justify-center mt-10 space-x-2">
      <button className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
        홈
      </button>
      <button className="px-4 py-2 text-white bg-green-500 rounded hover:bg-blue-600">
        소개
      </button>
      <button className="px-4 py-2 text-white bg-purple-500 rounded hover:bg-blue-600">
        연락
      </button>
    </div>
  );
}

export default ButtonGroup;
