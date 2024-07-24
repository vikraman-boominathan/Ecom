import cart from "../svg/istockphoto-1257717000-612x612.jpg";

export default function CreateAccount() {
  return (
    <div className="flex justify-center md:justify-start">
      <div className="my-20 min-h-1/2 hidden md:block md:ml-2 lg:ml-0">
        <img height={700} width={700} src={cart} />
      </div>
      <div className="flex flex-col my-20 lg:ml-20 sm:mx-auto md:mx-10">
        <div className="text-3xl ">Create an account</div>
        <div>Enter your details below</div>
        <div className="flex flex-col gap-4 mt-8 mb-4 ">
          <input
            type="text"
            placeholder="Name"
            className="border-b-2 focus-visible:outline-none"
          />
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
        <div className="flex flex-col gap-4  ">
          <button className="bg-red-500 text-white w-72 py-3 rounded-md ">
            Create Account
          </button>
          <button className="flex items-center justify-center gap-2 border-[2px] border-gray-300 rounded-md w-72 py-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="24"
              height="24"
              viewBox="0 0 48 48"
            >
              <path
                fill="#fbc02d"
                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
              ></path>
              <path
                fill="#e53935"
                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
              ></path>
              <path
                fill="#4caf50"
                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
              ></path>
              <path
                fill="#1565c0"
                d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
              ></path>
            </svg>
            Sign up with Google
          </button>
        </div>
        <div className="mt-4">
          <center>Already have an account? <a href="/login" className="text-gray-500 underline">Login</a></center>
        </div>
      </div>
    </div>
  );
}
