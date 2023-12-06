import React from "react";
import Image from "next/image";

interface Content {
  id: string;
  icon: string;
  title: string;
  description: string;
}



const WhoWeAre = () => {
  return (
    <section className="bg-white dark:bg-dark">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Who We Are
          </h2>
          <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
            Explore the whole collection of open-source web components and
            elements built with the utility classNamees from Tailwind
          </p>
        </div>

        <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
          <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                alt="Bonnie Avatar"
              />
            </a>
            <div className="p-5">
              <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Bonnie Green</a>
              </h3>
              <span className="text-gray-500 dark:text-gray-400">
                CEO & Web Developer
              </span>
              <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                Bonnie drives the technical strategy of the flowbite platform
                and brand.
              </p>
              
            </div>
          </div>
          <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                alt="Jese Avatar"
              />
            </a>
            <div className="p-5">
              <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Jese Leos</a>
              </h3>
              <span className="text-gray-500 dark:text-gray-400">CTO</span>
              <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                Jese drives the technical strategy of the flowbite platform and
                brand.
              </p>
               
            </div>
          </div>
          <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                alt="Michael Avatar"
              />
            </a>
            <div className="p-5">
              <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Michael Gough</a>
              </h3>
              <span className="text-gray-500 dark:text-gray-400">
                Senior Front-end Developer
              </span>
              <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                Michael drives the technical strategy of the flowbite platform
                and brand.
              </p>
               
            </div>
          </div>
          <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png"
                alt="Sofia Avatar"
              />
            </a>
            <div className="p-5">
              <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="#">Lana Byrd</a>
              </h3>
              <span className="text-gray-500 dark:text-gray-400">
                Marketing & Sale
              </span>
              <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                Lana drives the technical strategy of the flowbite platform and
                brand.
              </p>
               
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
