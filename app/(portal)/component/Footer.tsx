const Footer = async () => {
  return (
    <>
      <footer className="bg-[#e9fdff] py-6">
        <div className="container mx-auto px-4 lg:px-28">
          <div className="flex flex-col lg:flex-row justify-between gap-4 lg:gap-8 border-b border-white pb-14">
            <div className="lg:w-[30%]">
              <h3 className="text-18 lg:text-26  text-black lg:pb-3">আমাদের সম্পর্কে</h3>
              <p className="text-12 lg:text-14 text-black text-justify">
                bangla.gov.bd তথ্য ও যোগাযোগ প্রযুক্তি বিভাগের অধীনে বাংলাদেশ
                কম্পিউটার কাউন্সিলের এর তত্ত্বাবধানে আন্তর্জাতিক পরিসরে
                নেতৃস্থানীয় ভাষা হিসেবে বাংলাকে প্রতিষ্ঠার লক্ষ্যে বিশেষ করে,
                কম্পিউটিং ও আইসিটিতে বাংলা ভাষাকে অভিযোজিত করার উদ্দেশ্যে
                ‘গবেষণা ও উন্নয়নের মাধ্যমে তথ্য প্রযুক্তিতে বাংলা ভাষা
                সমৃদ্ধকরণ’ প্রকল্পের ওয়েবসাইট।
              </p>
            </div>
            <ul className="lg:w-[20%] flex flex-col lg:gap-1">
              <li className="lg:pb-1">
                <a className="text-18 lg:text-26  text-black">লিংক</a>
              </li>
              <li>
                <a href="#" className="text-12 lg:text-14  text-black">
                  ডাউনলোড
                </a>
              </li>
              <li>
                <a href="#" className="text-12 lg:text-14  text-black">
                  ফোরাম
                </a>
              </li>
              <li>
                <a href="#" className="text-12 lg:text-14  text-black">
                  সার্ভিস ফিডব্যাক
                </a>
              </li>
              <li>
                <a href="#" className="text-12 lg:text-14  text-black underline">
                  Resource Download
                </a>
              </li>
              <li>
                <a href="#" className="text-12 lg:text-14  text-black underline">
                  My account
                </a>
              </li>
              <li>
                <a href="#" className="text-12 lg:text-14  text-black underline">
                  Checkout
                </a>
              </li>
            </ul>
            <div className="lg:w-[25%]">
              <h3 className="text-18 lg:text-26  text-black lg:pb-3">যোগাযোগ</h3>
              <ul className="flex flex-col gap-2 pb-5">
                <li className="text-12 lg:text-14 text-black flex gap-2">
                  <span>
                    <svg
                      className="w-2 lg:w-4 h-2 lg:h-4 fill-current mt-1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path d="M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8H224V432c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z" />
                    </svg>
                  </span>
                  <span>
                    ICT Tower,9th Floor, E-14/X, Sher-E-Bangla nagar, Dhaka-1207
                  </span>
                </li>
                <li className="text-12 lg:text-14 text-black flex gap-2">
                  <span>
                    <svg
                      className="w-2 lg:w-4 h-2 lg:h-4 fill-current mt-1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                    </svg>
                  </span>
                  <span>+88-02-55006880</span>
                </li>
                <li className="text-12 lg:text-14 text-black flex gap-2">
                  <span>
                    <svg
                      className="w-2 lg:w-4 h-2 lg:h-4 fill-current mt-1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                    </svg>
                  </span>
                  <span>pdeblict@bcc.net.bd</span>
                </li>
              </ul>
              <div className="flex items-center gap-4">
                <a href="#" className="text-black">
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z" />
                  </svg>
                </a>
                <a href="#" className="text-black">
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <p className="text-15 text-center text-black pt-8">
            &copy; {new Date().getFullYear()}, Bangla.gov.bd. All rights
            reserved by EBLICT Project.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
