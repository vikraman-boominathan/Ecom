export default function Contact() {
  return (
    <div className="lg:flex sm:grid sm:grid-cols-1 mx-4 my-10">
      <div className="w-full lg:w-1/3 mb-10 lg:mb-0">
        <div className="flex gap-2 mb-6 items-center">
          <svg
            width="35"
            height="35"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="50" cy="50" r="50" fill="#FF5252" />
            <path
              d="M70.02,61.88l-5.23-3.64c-1.73-1.2-4.06-.86-5.38.65l-2.57,3c-8.56-4.6-15.71-11.76-20.31-20.32l2.99-2.57c1.5-1.32,1.85-3.65,.65-5.38l-3.64-5.23c-1.26-1.81-3.77-2.22-5.56-.94l-3.43,2.61c-1.55,1.18-2.34,3.09-2.08,5.03,1.57,11.27,7.06,21.74,15.25,29.93,8.19,8.19,18.66,13.68,29.93,15.25,1.94,.26,3.84-.53,5.03-2.08l2.61-3.43c1.27-1.79,.87-4.3-.94-5.56Z"
              fill="white"
            />
          </svg>
          <span className="font-medium">Call to us</span>
        </div>
        <div className="mb-4">We are available 24/7, 7 days a week.</div>
        <div className="mb-4">Phone: +8801611112222</div>
        <hr className="border-t border-black my-6" />

        <div className="flex gap-2 items-center">
          <svg
            width="35"
            height="35"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="50" cy="50" r="50" fill="#FF5252" />
            <rect x="20" y="30" width="60" height="40" fill="white" />
            <polyline
              points="20,30 50,55 80,30"
              fill="none"
              stroke="#FF5252"
              stroke-width="3"
            />
          </svg>
          <span className="font-medium">Write To Us</span>
        </div>
        <div className="w-full mb-4">
          Fill out our form and we will contact you within 24 hours.
        </div>
        <div className="mb-4">Emails: customer@exclusive.com</div>
        <div className="mb-4">Emails: support@exclusive.com</div>
      </div>
      <div className="w-full lg:ml-40">
        <form>
          <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-4 mb-4">
            <input
              className="bg-gray-100 p-2 rounded-md w-full"
              type="text"
              placeholder="Your Name*"
              required
            />
            <input
              className="bg-gray-100 p-2 rounded-md w-full"
              type="email"
              placeholder="Your Email*"
              required
            />
            <input
              className="bg-gray-100 p-2 rounded-md w-full"
              type="tel"
              placeholder="Your Phone*"
              required
            />
          </div>
          <div className="mb-4">
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              rows="4"
              className="bg-gray-100 h-72 p-2 rounded-md w-full"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-red-500 text-white w-full lg:w-44 py-3 rounded-md mt-4 lg:float-end"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
