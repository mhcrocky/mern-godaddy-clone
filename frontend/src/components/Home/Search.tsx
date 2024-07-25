const SearchSection = () => {
    return (
      <div className="relative rounded-xl overflow-auto px-8 w-full">
        <div className="grid xl:grid-cols-2 2xl:grid-cols-3">
          <div className="py-4 col-span-2">
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

  export default SearchSection;