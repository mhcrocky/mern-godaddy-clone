import { ReactNode } from 'react';
import step1 from '../../assets/Screenshot_1.png';
import step2 from '../../assets/Screenshot_2.png';
import step3 from '../../assets/Screenshot_3.png';

const SuccessSection = () => {
  const StepComponent = ({
    id = '',
    title = '',
    detail = '',
    btntext = '',
    islearnmore = false,
    image = step1
  }: {
    image: any,
    id: string,
    title: string,
    detail: ReactNode,
    btntext: string,
    islearnmore: boolean
  }) => {

    return (
      <div className="row-span-2">
        <img className="h-auto max-w-full pb-6 rounded-lg" src={image} alt="" />
        <p>{id}</p>
        <p className="text-lg font-black py-4">{title}</p>
        <p className="text-xs">{detail}</p>
        <div className="py-4">
          <button>
            <span className="mr-3 px-5 py-3 text-sm font-medium text-center text-white bg-black rounded-lg cursor-pointer hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-black dark:focus:ring-blue-800">{btntext}</span>
          </button>
          <span>{islearnmore ? 'Learn more' : ''}</span>
        </div>
      </div>
    )
  }
  return (<div className="w-full p-20">
    <div className="flex flex-wrap mx-auto items-center justify-between px-8 p-4 max-w-screen-lg grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="row-span-1 pb-10 grid grid-cols-2 ">
        <p className="text-4xl font-bold font-serif pb-10">Success in<br /> 3 easy steps.</p>
      </div>
      <StepComponent
        id={'01'}
        title='Sell online with a WEBSITE'
        detail={<>Sell anything for physical products to download and services,<br /> and manage to all in one place.</>}
        btntext='Start Get Paid'
        islearnmore={true}
        image={step1}
      />
      <StepComponent
        id={'02'}
        title='Save with the lowest fees'
        detail={<>2.3% + 0@ per in=-person transaction.<br />
          2.3% + 30@ per online transaction.<br />
          Enjoy the lowest transaction fees compared to other leasing <br /> providers.</>}
        btntext='Get Start'
        islearnmore={true}
        image={step2}
      />
      <StepComponent
        id={'03'}
        title='Sell in-person and on the go'
        detail={<>Our new Point of Sale devices are designed to fit any business and <br /> budget.Choose the one that's right for you.</>}
        btntext='Learn more'
        islearnmore={false}
        image={step3}
      />
    </div>
  </div>
  )
};
export default SuccessSection;