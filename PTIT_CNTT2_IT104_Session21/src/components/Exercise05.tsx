export default function Exercise05() {
  return (
    <div className="relative w-[330px] h-[230px] bg-sky-100 p-4 border-[1px] border-sky-200 rounded-lg">
      <div className="relative w-[300px] h-[200px] bg-sky-200 p-4">
        <p className="text-sky-800 font-semibold">Relative parent</p>
        <div className="absolute bottom-2 left-2 bg-sky-500 text-white font-bold px-3 py-1 rounded-md">
          Absolute child
        </div>
      </div>
    </div>
  );
}
