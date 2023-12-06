import React from 'react';

const HeroSection = () => {
  const backgroundImageUrl = '/Consulting.jpg';

  const sectionStyle = {
    marginTop: '36px',
    marginBottom: '40px',
    overflow: 'hidden',
  };

  const containerStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundPosition: '50%',
    backgroundRepeat: 'no-repeat',
    height: '500px',
  };

  const overlayStyle = {
    backgroundColor: 'hsla(0,0%,0%,0.75)',
  };

  return (
    <section style={sectionStyle}>
      <div style={containerStyle} className="relative overflow-hidden bg-cover bg-no-repeat">
        <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed" style={overlayStyle}>
          <div className="flex h-full items-center">
            <div className="px-6 text-white md:px-12">
            <p>ACCOUNTING SOFTWARE | INTUIT QUICKBOOKS | GLOBAL</p>
              <h1 className="mb-16 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">
              Smart, simple online accounting software for small business
              </h1>
              <a className="mb-2 inline-block rounded-full border-2 border-neutral-50 px-[46px] pt-[14px] pb-[12px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 md:mr-2 md:mb-0"
                data-te-ripple-init data-te-ripple-color="light" href="#!" role="button">Get started</a>
            </div>
          </div>
        </div>
      </div>

      <div className="-mt-2.5 text-white dark:text-dark md:-mt-4 lg:-mt-6 xl:-mt-10 h-[50px] scale-[2] origin-[top_center]">
        <svg viewBox="0 0 2880 48" xmlns="http://www.w3.org/2000/svg">
          <path d="M 0 48 L 1437.5 48 L 2880 48 L 2880 0 L 2160 0 C 1453.324 60.118 726.013 4.51 720 0 L 0 0 L 0 48 Z" fill="currentColor"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
