export default function NavHeader() {
  return (
    <div className="bg-black  ">
      <div className=" hidden lg:flex justify-between max-w-7xl mx-auto pt-2">
        <div className="hidden lg:flex text-white h-8 items-center">
          Summer Sale for all Swim Suits and Free Express Delivery - OFF 50%!{" "}
          <span className="px-2  font-semibold">
            <button className="underline">Shop Now</button>
          </span>
        </div>
        <div className="text-white ">
          <select
            name="language"
            className="bg-black text-white focus-visible:outline-none "
          >
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            <option value="French">French</option>
            <option value="German">German</option>
          </select>
        </div>
      </div>
    </div>
  );
}
