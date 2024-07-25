
import Layout from "../layout";
import step1 from '../assets/Screenshot_1.png';
import step2 from '../assets/Screenshot_2.png';
import step3 from '../assets/Screenshot_3.png';
import godaddyguid from '../assets/godaddyguide.png';
const SearchDomainSection = () => {
  return (
    <div className="relative rounded-xl overflow-auto p-8 w-full">
      <div className="grid xl:grid-cols-2 2xl:grid-cols-3">
        <div className="p-4 col-span-2">
          <div className="flex">
            <div className="relative w-full mr-0 formkit-field">
              <input id="member_email" className="bg-[#ddd] border text-sm rounded-none  block w-full pl-10 p-5 " name="email_address" aria-label="Email Address" placeholder="Type the domain you want" required={true} />
            </div>
            <button data-element="submit" className="formkit-submit bg-[#01838c] w-1/3">
              <span className="text-sm font-medium text-center text-white rounded-none cursor-pointer ">Search Domain</span>
            </button>
          </div>
        </div>
        <div className="p-2 col-span-2 xl:col-span-2 2xl:col-span-1">
          <div className="h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-screen-xl flex flex-wrap text-center items-center justify-between mx-auto p-4">
            <div className="">
              <b>.online</b> $0.99
            </div>
            <div className="">
              <b>.net</b> $14.99
            </div>
            <div className="">
              <b>.inc</b> $9.99
            </div>
            <div className="">
              <b>.edu</b> $0.99
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
const GetStartSection = () => {
  const SetStartSttyle = {
    background: 'url(https://img1.wsimg.com/cdnassets/transform/a4a12cf6-d7d3-4475-b371-0ac1f38c0ac8/mrq-hp-airo-landscape)',
    backgroundSize: 'cover'
  }
  return (
    <div className="p-8 w-full block">
      <div className="grid grid-cols-3 " >
        <div className="col-span-3 lg:col-span-3 xl:col-span-2 mb-5" >
          <div className="h-full px-10  rounded-md grid grid-cols-2 mr-0 lg:mr-0 xl:mr-3" style={SetStartSttyle}>
            <div className="py-20">
              <p >
                <b>Websites &Commerce</b>
              </p>
              <h1 className="text-5xl font-semibold py-8 font-serif">Tools for all your Businesses first</h1>
              <p>Websites and store solutions for any small business.</p>
              <div className="py-4">
                <button>
                  <span className="mr-3 px-5 py-3 text-sm font-medium text-center text-white bg-black rounded-lg cursor-pointer hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-black dark:focus:ring-blue-800">Get started</span>
                </button>
                <span>Learn more</span>
              </div>
              <p className="text-sm">No Credit Card Required**</p>
            </div>
          </div>
          <div className="w-[100px] h-[100px]"></div>
        </div>
        <div className="col-span-3 col-span-3 lg:col-span-3 xl:col-span-1 mb-5 p-10 pr-20 rounded-md bg-green-200">
          <div>
            <p >
              <b>Domain Names</b>
            </p>
            <h1 className="text-4xl py-2">Grab a.com for just<br /> $0.1*/1st yr</h1>
            <p className="py-3">2-year purchase required*</p>
            <div className="py-4">
              <button>
                <span className="mr-3 px-5 py-3 text-sm font-medium text-center text-white bg-black rounded-lg cursor-pointer hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-black dark:focus:ring-blue-800 px-12">Find your Domain</span>
              </button>
            </div>
            <p className="py-3">Transfor Your Domains*</p>

            <p className="text-sm">No Credit Card Required**</p>
          </div>

        </div>
      </div>
      <div className="grid md:grid-cols-3 lg:grid-cols-5  grid-rows-2 py-4">
        <div className="border-slate-200	border text-center p-4">Domains</div>
        <div className="border-slate-200	border text-center p-4">SSL Security</div>
        <div className="border-slate-200	border text-center p-4">Websites</div>
        <div className="border-slate-200	border text-center p-4">Wordpress</div>
        <div className="border-slate-200	border text-center p-4 row-span-2">
          <p className="text-5xl font-black">.Shop</p>
          <p>Sale! $0.99*/1st yr.</p>
          <p>Attract Shoppers. Sell more staff</p>
        </div>
        <div className="border-slate-200	border text-center p-4">Email&Microsoft 365</div>
        <div className="border-slate-200	border text-center p-4">Website Design Services</div>
        <div className="border-slate-200	border text-center p-4">Online Store</div>
        <div className="border-slate-200	border text-center p-4 col-span-1 sm-col-span-1 md:col-span-3 lg:col-span-1">Web Hosting</div>
      </div>
    </div>
  );
}
const SuccessSection = () => {
  return (<div className="w-full p-20">
    <div className="flex flex-wrap mx-auto items-center justify-between px-8 p-4 max-w-screen-lg grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="row-span-1 pb-10 grid grid-cols-2 ">
        <p className="text-4xl pb-10">Success in<br /> 3 easy steps.</p>
      </div>
      <div className="row-span-2">
        <img className="h-auto max-w-full pb-8 rounded-lg" src={step1} alt="" />
        <p>01</p>
        <p className="text-lg font-black py-4">Sell online with a WEBSITE</p>
        <p className="text-xs">Sell anything for physical products to download and services,<br /> and manage to all in one place.</p>
        <div className="py-4">
          <button>
            <span className="mr-3 px-5 py-3 text-sm font-medium text-center text-white bg-black rounded-lg cursor-pointer hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-black dark:focus:ring-blue-800">Start Get Paid</span>
          </button>
          <span>Learn more</span>
        </div>
      </div>
      <div className="row-span-2">
        <img className="h-auto max-w-full rounded-lg" src={step2} alt="" />
        <p>02</p>

        <p className="text-lg font-black py-4">Save with the lowest fees</p>
        <p className="text-xs">
          2.3% + 0@ per in=-person transaction.<br />
          2.3% + 30@ per online transaction.<br />
          Enjoy the lowest transaction fees compared to other leasing <br /> providers.
        </p>
        <div className="py-4">
          <button>
            <span className="mr-3 px-5 py-3 text-sm font-medium text-center text-white bg-black rounded-lg cursor-pointer hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-black dark:focus:ring-blue-800">Get started</span>
          </button>
          <span>Learn more</span>
        </div>
      </div>
      <div className="row-span-2">
        <img className="h-auto max-w-full rounded-lg" src={step3} alt="" />
        <p>03</p>

        <p className="text-lg font-black py-4">Sell in-person and on the go</p>
        <p className="text-xs">
          Our new Point of Sale devices are designed to fit any business and <br /> budget.Choose the one that's right for you.
        </p>
        <div className="py-4">
          <button>
            <span className="mr-3 px-5 py-3 text-sm font-medium text-center text-white bg-black rounded-lg cursor-pointer hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-black dark:focus:ring-blue-800">Learn More</span>
          </button>
        </div>
      </div>
    </div>
  </div>
  )
};

const TemplateSection = () => {
  return (
    <div className="w-full bg-[#e8eaec]">
      <div className="text-center py-20">
        <p className="text-5xl font-black py-3">Templates designed to sell.</p>
        <p>Choose from 100s of designs for every idea and industry.</p>
      </div>
      {/* carousel */}
      <div className="text-center">
        <button className="m-30">
          <span className="mr-3 px-5 py-3 text-sm font-medium text-center text-white bg-black rounded-lg cursor-pointer hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-black dark:focus:ring-blue-800">Browse All Templates</span>
        </button>
      </div>
      <div className="text-center py-5">
      </div>
    </div>
  )
}
const FooterSection = () => {
  return (
    <div className="w-full bg-black text-white">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 p-10 border-white border-b-1">
        <div className="p-4">
          <p>Sign Up for news and special offers</p>
          <div className="flex">
            <div className="relative w-full mr-0 formkit-field">
              <input id="member_email" className="bg-[#888] border text-sm rounded-none  block w-full pl-10 p-5 text-black " name="email_address" aria-label="Email Address" placeholder="Type the domain you want" required={true} />
            </div>
            <button data-element="submit" className="formkit-submit bg-white w-1/3">
              <span className="text-sm font-medium text-center text-black rounded-none cursor-pointer ">Sign Up</span>
            </button>
          </div>
        </div>
        <div className="p-4">
          <p>We love taking your call.</p>
          <img src={godaddyguid} />
        </div>
      </div>


      <footer className="">
        <div className="w-full">
          <div className="grid grid-cols-6 justify-items-end p-20">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase dark:text-white">About Godaddy</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="https://flowbite.com/" className="hover:underline">About Us</a>
                </li>
                <li>
                  <a href="https://tailwindcss.com/" className="hover:underline">NewsRoom</a>
                </li>
                <li>
                  <a href="https://tailwindcss.com/" className="hover:underline">Invester Relations</a>
                </li>
                <li>
                  <a href="https://tailwindcss.com/" className="hover:underline">Cooperation Responsiblity</a>
                </li>
                <li>
                  <a href="https://tailwindcss.com/" className="hover:underline">NewsRoom</a>
                </li>
                <li>
                  <a href="https://tailwindcss.com/" className="hover:underline">NewsRoom</a>
                </li>
                <li>
                  <a href="https://tailwindcss.com/" className="hover:underline">NewsRoom</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase dark:text-white">Resources</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="https://flowbite.com/" className="hover:underline">Flowbite</a>
                </li>
                <li>
                  <a href="https://tailwindcss.com/" className="hover:underline">Tailwind CSS</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase dark:text-white">Resources</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="https://flowbite.com/" className="hover:underline">Flowbite</a>
                </li>
                <li>
                  <a href="https://tailwindcss.com/" className="hover:underline">Tailwind CSS</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase dark:text-white">Resources</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="https://flowbite.com/" className="hover:underline">Flowbite</a>
                </li>
                <li>
                  <a href="https://tailwindcss.com/" className="hover:underline">Tailwind CSS</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase dark:text-white">Resources</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="https://flowbite.com/" className="hover:underline">Flowbite</a>
                </li>
                <li>
                  <a href="https://tailwindcss.com/" className="hover:underline">Tailwind CSS</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase dark:text-white">Follow us</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="https://github.com/themesberg/flowbite" className="hover:underline ">Github</a>
                </li>
                <li>
                  <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Discord</a>
                </li>
              </ul>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.
            </span>
            <div className="flex mt-4 sm:justify-center sm:mt-0">
              <a href="#" className="text-gray-500 hover dark:hover:text-white">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                  <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd" />
                </svg>
                <span className="sr-only">Facebook page</span>
              </a>
              <a href="#" className="text-gray-500 hover dark:hover:text-white ms-5">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                  <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
                </svg>
                <span className="sr-only">Discord community</span>
              </a>
              <a href="#" className="text-gray-500 hover dark:hover:text-white ms-5">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                  <path fillRule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clipRule="evenodd" />
                </svg>
                <span className="sr-only">Twitter page</span>
              </a>
              <a href="#" className="text-gray-500 hover dark:hover:text-white ms-5">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clipRule="evenodd" />
                </svg>
                <span className="sr-only">GitHub account</span>
              </a>
              <a href="#" className="text-gray-500 hover dark:hover:text-white ms-5">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z" clipRule="evenodd" />
                </svg>
                <span className="sr-only">Dribbble account</span>
              </a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  )
}
const Home = () => {

  return (
    <Layout>
      <div className="h-screen">
        <SearchDomainSection />
        <GetStartSection />
        <SuccessSection />
        <TemplateSection />
        <FooterSection />
      </div>
    </Layout>
  );
};

export default Home;
