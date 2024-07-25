import { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import c1 from '../../assets/c1.png';
import c2 from '../../assets/c2.png';
import c3 from '../../assets/c3.png';
import c4 from '../../assets/c4.png';
import c5 from '../../assets/c5.png';
import { PlayIcon, StopIcon } from '../../helper/svg';
const TemplateSection = () => {
  const [autoplay, toggleAutoplay] = useState<boolean>(true);

  const Item = ({img=c1}:{img:string}) => {
    return (
      <div className="cursor-pointer p-6 rounded-[2.5rem] h-[20vw] min-h-[250px] w-full ">
        <img src={img} className='h-full w-full' alt="" />
      </div>
    )
  }
  return (
    <div className="w-full bg-[#e8eaec]">
      <div className="text-center py-20 pb-8">
        <p className="text-5xl font-black py-3">Templates designed to sell.</p>
        <p>Choose from 100s of designs for every idea and industry.</p>
      </div>
      {/* carousel */}
      <div>
        <Carousel
          additionalTransfrom={0}
          arrows={false}
          autoPlay={autoplay}
          autoPlaySpeed={1000}
          centerMode={false}
          containerClass="container-with-dots"
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: { max: 3000, min: 1024 },
              items: 3,
              partialVisibilityGutter: 40
            },
            mobile: {
              breakpoint: { max: 464, min: 0 },
              items: 1,
              partialVisibilityGutter: 30
            },
            tablet: {
              breakpoint: { max: 1024, min: 464 },
              items: 2,
              partialVisibilityGutter: 30
            }
          }}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          sliderClass=""
          slidesToSlide={2}
          swipeable
        >
          <Item img={c1}/>
          <Item img={c2}/>
          <Item img={c3}/>
          <Item img={c4}/>
          <Item img={c5}/>

        </Carousel>
      </div>
      <div className="text-right py-0">
        <button className="m-30 relative top-[40px] right-[30px]" onClick={() => toggleAutoplay(!autoplay)}>
          <span className="rounded-lg cursor-pointer hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-black dark:focus:ring-blue-800 ">
            {autoplay ? <PlayIcon /> : <StopIcon />}
          </span>
        </button>
      </div>
      <div className="text-center pb-10">
        <button className="m-30">
          <span className="mr-3 px-5 py-3 text-sm font-medium text-center text-white bg-black rounded-lg cursor-pointer hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-black dark:focus:ring-blue-800">Browse All Templates</span>
        </button>

      </div>
    </div>
  )
}

export default TemplateSection