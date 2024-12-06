/** @format */

export default function Loading() {
  return (
    <div className="fixed flex justify-center top-0 left-0 right-0 z-30  bg-base-400 backdrop-blur-[2px] w-full h-screen">
      <span className="loading loading-dots loading-xs"></span>
      <span className="loading loading-dots loading-sm"></span>
      <span className="loading loading-dots loading-md"></span>
      <span className="loading loading-dots loading-lg"></span>
    </div>
  );
}
