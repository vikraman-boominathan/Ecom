export default function NotFound() {
  return (
    <div className="flex flex-col justify-center gap-6 items-center my-40">
      <div className="text-9xl ">404 Not Found</div>
      <div>Your visited page not found. You may go home page.</div>
      <button className="bg-red-500 text-white w-72 py-3 rounded-md mt-20 ">
        Back To Home
      </button>
    </div>
  );
}
