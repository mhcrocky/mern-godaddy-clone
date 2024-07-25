const HeroSection = () => {
    const SetStartSttyle = {
      background: 'url(https://img1.wsimg.com/cdnassets/transform/a4a12cf6-d7d3-4475-b371-0ac1f38c0ac8/mrq-hp-airo-landscape)',
      backgroundSize: 'cover'
    }
    return (
      <div className="px-8 w-full block">
        <div className="grid grid-cols-3 " >
          <div className="col-span-3 lg:col-span-3 xl:col-span-2 mb-5" >
            <div className="h-full px-10  rounded-md grid grid-cols-2 mr-0 lg:mr-0 xl:mr-3" style={SetStartSttyle}>
              <div className="pt-20">
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

  export default HeroSection;