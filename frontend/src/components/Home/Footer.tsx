import godaddyguid from '../../assets/godaddyguide.png';
import { ReactNode } from 'react';
import { ArrowDownWhite, Youtube, Instagram, Facebook, GoDaddy, Twitter } from '../../helper/svg';
const FooterSection = () => {
  const BFooter = () => {
    const socialcls = 'text-gray-500 hover dark:hover:text-white';
    const CountryButton = ({ title = '' }: { title: string }) => {
      return (
        <button className='relative top-1 px-3'>
          <span className='flex text-white'>{title} <span className='px-2 rotate-180	'>
            <ArrowDownWhite />
          </span>
          </span>
        </button>
      )
    }
    const Social = () => {
      return (
        <div className="w-full px-20">
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              <GoDaddy />
            </span>
            <div className='w-full text-sm'>
              <CountryButton title={'United states-English'} />
              <CountryButton title={'USD'} />

            </div>
            <div className="flex mt-4 sm:justify-center sm:mt-0">
              <a href="#" className={socialcls}>
                <Facebook />
                <span className="sr-only">Facebook page</span>
              </a>
              <a href="#" className={`${socialcls} ms-5`}>
                <Instagram />
                <span className="sr-only">Discord community</span>
              </a>
              <a href="#" className={`${socialcls} ms-5`}>
                <Twitter />
                <span className="sr-only">Twitter page</span>
              </a>
              <a href="#" className={`mr-10 ${socialcls} ms-5`}>
                <Youtube />
                <span className="sr-only">Dribbble account</span>
              </a>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        </div>
      )
    }
    return (
      <>
        <Social />
        <div className='w-full p-20 pt-0'>
          <div className='flex justify-between'>
            <div className='text-sm pb-10  text-white'>
              Copyright © 1999 - 2024 GoDaddy Operating Company, LLC. All Rights Reserved.&nbsp;The GoDaddy word mark is a registered trademark of GoDaddy Operating Company, LLC in the US and other countries. The “GO” logo is a registered trademark
              of GoDaddy.com, LLC in the US.
            </div>
            <div className="text-xs flex flex-row flex-wrap min-w-[200px] justify-between ml-20">
                <div>Legal</div>
                <div>Privacy Policy</div>
                <div>Cookies</div>
            </div>
          </div>
          <div className='flex justify-between	'>
            <div className='text-xs  text-white'>
              <span>Use of this Site is subject to express terms of use. By using this site, you signify that you agree to be bound by these
                <span className='px-2 text-[#487a80] cursor-pointer'>
                  Universal Terms of Service
                </span>
                .</span>
            </div>

            <div className='text-xs'>
              Do not share my personal information
            </div>

          </div>

        </div>
      </>
    )
  }
  const SignupForm = () => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 p-10 border-white border-b-1">
        <div className="p-4">
          <p className='text-white pb-2 text-bold'>Sign Up for news and special offers</p>
          <div className="flex">
            <div className="relative w-full mr-0 formkit-field">
              <input id="member_email" className="bg-[#2b2b2b] text-sm rounded-none  block w-full pl-10 p-3 text-black " name="email_address" aria-label="Email Address" placeholder="Email address" required={true} />
            </div>
            <button data-element="submit" className="formkit-submit bg-white w-1/3">
              <span className="text-sm font-medium text-center text-black rounded-none cursor-pointer ">Sign Up</span>
            </button>
          </div>
        </div>
        <div className="p-4">
          <p className='pb-2 text-bold'>We love taking your call.</p>
          <img src={godaddyguid} />
        </div>
      </div>
    )
  }
  const FooterList = ({ title, children = '' }: { title: string, children: ReactNode }) => {
    return (
      <li>
        <div className="font-sm text-white">{title}</div>
        <ul className="text-xs flex flex-col	flex-wrap">
          {children}
        </ul>
      </li>
    )
  }
  const FooterItem = ({ children = '' }: { children: string }) => {
    return (
      <li className="mt-[12px]">
        <a>
          <span>{children}</span>
        </a>
      </li>
    )
  }
  return (
    <footer className='bg-[#111111] text-[#6d6f72]'>
      <section>
        <div>
          <SignupForm />
          <hr className="my-0 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <nav className="px-20 py-[4vh]">
            <ul className="flex justify-between flex-wrap	">
              <FooterList title={'About GoDaddy'}>
                <FooterItem>About Us</FooterItem>
                <FooterItem>Careers</FooterItem>
                <FooterItem>Corporate Responsibility</FooterItem>
                <FooterItem>Investor Relations</FooterItem>
                <FooterItem>Legal</FooterItem>
                <FooterItem>Newsroom</FooterItem>
                <FooterItem>Trust Center</FooterItem>
              </FooterList>
              <FooterList title={'Help Center'}>
                <FooterItem>Help Center</FooterItem>
                <FooterItem>Venture Forward: Microbusiness Data</FooterItem>
                <FooterItem>GoDaddy Blog</FooterItem>
                <FooterItem>Contact Us</FooterItem>
                <FooterItem>Report Abuse</FooterItem>
              </FooterList>
              <FooterList title={'Resources'}>
                <FooterItem>Webmail</FooterItem>
                <FooterItem>WHOIS</FooterItem>
                <FooterItem>GoDaddy Mobile App</FooterItem>
                <FooterItem>ICANN Confirmation</FooterItem>
                <FooterItem>Designers &amp; Developers</FooterItem>
                <FooterItem>Corporate Domains</FooterItem>
                <FooterItem>Redeem Code</FooterItem>
                <FooterItem>Product Catalog</FooterItem>
                <FooterItem>Videos</FooterItem>
                <FooterItem>Business Name Generator</FooterItem>
              </FooterList>
              <FooterList title={'Partner Programs'}>
                <FooterItem>Affiliates</FooterItem>
                <FooterItem>Reseller Programs</FooterItem>
                <FooterItem>GoDaddy Pro</FooterItem>
              </FooterList>
              <FooterList title={'Account'}>
                <FooterItem>My Products</FooterItem>
                <FooterItem>Renewals &amp; Billing</FooterItem>
                <FooterItem>Create Account</FooterItem>
              </FooterList>
              <FooterList title={'Shopping'}>
                <FooterItem>Buy a Domain</FooterItem>
                <FooterItem>Websites</FooterItem>
                <FooterItem>WordPress</FooterItem>
                <FooterItem>Hosting</FooterItem>
                <FooterItem>Web Security</FooterItem>
                <FooterItem>Business Email</FooterItem>
                <FooterItem>Phone Numbers</FooterItem>
              </FooterList>
            </ul>
          </nav>
          <BFooter />

        </div>

      </section>
    </footer>
  )
}
export default FooterSection