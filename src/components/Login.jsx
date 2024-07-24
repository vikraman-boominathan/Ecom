import cart from "../svg/istockphoto-1257717000-612x612.jpg";

export default function Login() {
  return (
    <div className="flex justify-center md:justify-start">
      <div className="my-20 min-h-1/2  hidden md:block md:ml-2 lg:ml-0">
        <img height={700} width={700} src={cart} />
      </div>
      <div className="flex flex-col pl-2 my-40 w-96 lg:ml-20   md:mx-10">
        <div className="text-3xl ">Log in to Exclusive</div>
        <div className="mt-10">Enter your details below</div>
        <div className="flex flex-col gap-4 mt-8 mb-4 ">
          <input
            type="text"
            placeholder="Email or phone number"
            className="border-b-2 focus-visible:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="border-b-2 focus-visible:outline-none"
          />
        </div>
        <div className="flex justify-between items-center gap-4 ma mt-10">
          <button className="bg-red-500 text-white w-32 py-3 rounded-md ">
            Login
          </button>
          <a href="/login" className="text-red-400 ">
            Forgot Password?
          </a>
        </div>
      </div>
    </div>
  );
}
