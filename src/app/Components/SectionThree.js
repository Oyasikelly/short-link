/** @format */

import React, { useEffect, useState } from "react";
import ShortLink from "./ShortLink";
import { MdDelete } from "react-icons/md";

export default function SectionThree({
  userLink,
  shortUrl,
  loading,
  errorMsg,
  error,
  successful,
}) {
  const [storedUrls, setStoredUrls] = useState(() => {
    const saved = localStorage.getItem("shortUrl");
    return saved ? JSON.parse(saved) : []; // Retrieve or initialize to an empty array
  });

  useEffect(() => {
    if (shortUrl) {
      setStoredUrls((prevUrls) => {
        if (!prevUrls.includes(shortUrl)) {
          const updatedUrls = [...prevUrls, shortUrl];
          localStorage.setItem("shortUrl", JSON.stringify(updatedUrls));
          return updatedUrls;
        }
        return prevUrls; // Avoid unnecessary state updates
      });
    }
  }, [shortUrl]);

  // Remove URL from localStorage and state
  const handleRemove = (urlToRemove) => {
    // Filter out the URL to remove
    const updatedUrls = storedUrls.filter((url) => url !== urlToRemove);
    setStoredUrls(updatedUrls); // Update state
    localStorage.setItem("shortUrl", JSON.stringify(updatedUrls)); // Update localStorage
  };

  const finallStoredUrl = storedUrls.filter((empty) => empty != []);
  // console.log(storedUrls);
  console.log(finallStoredUrl);
  return (
    <div className="bg-gray-200 lg:px-[6rem] lg:py-[6rem] px-[1rem] py-[6rem]  overflow-x-hidden flex flex-col items-center">
      {(error === true || !userLink) && (
        <p className="text-red-400">{errorMsg}</p>
      )}

      {/* Render stored short URLs */}
      {storedUrls && storedUrls != [] && storedUrls.length > 0 && (
        <div className="w-full flex flex-col gap-4">
          {storedUrls.map((url, index) => (
            <div className="flex flex-col" key={index}>
              <ShortLink shortLink={url} />
              <span
                className="pt-2 self-end cursor-pointer"
                // onClick={() => handleRemove(url)}
              >
                <MdDelete fontSize={15} onClick={() => handleRemove(url)} />
              </span>
            </div>
          ))}
        </div>
      )}

      <h1 className="text-2xl font-bold mt-10 pb-4">Advanced Statistics</h1>
      <p className="mb-[6rem] max-w-sm text-center text-gray-400">
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </p>
      <div className="w-full relative">
        <div className="flex flex-row gap-4 lg:flex-col justify-center">
          <div className="h-full w-2 lg:h-2 lg:w-full  bg-primary-cyan   absolute lg:top-[50%]  "></div>
          <div className="flex-col-1 lg:flex-col-3  lg:gap-4 lg:flex  lg:justify-between">
            <div className=" flex flex-col justify-center  card mb-[2rem] lg:mb-auto bg-white w-auto lg:w-96 shadow-xl relative rounded-[0.5rem] ">
              <figure className="bg-primary-dark-violet rounded-[50%] self-center -mt-[2rem] mb-6 p-4 w-[60px]">
                <img
                  src="/images/icon-brand-recognition.svg"
                  alt="Icon-brand-recognition"
                />
              </figure>
              <div className="card-body flex flex-col  items-center lg:items-start">
                <h2 className="card-title text-xl font-bold -mt-[3rem]">
                  Brand Recognition
                </h2>
                <p className="text-gray-400  text-center lg:text-start">
                  Boost your brand recognition with each click. Generic links
                  don’t mean a thing. Branded links help instil confidence in
                  your content.
                </p>
              </div>
            </div>
            <div className=" flex flex-col justify-centercard bg-white mb-[2rem] lg:mb-auto w-auto lg:w-96 shadow-xl relative top-8 rounded-[0.5rem]">
              <figure className="bg-primary-dark-violet rounded-[50%] self-center -mt-[2rem] mb-6  p-4 w-[60px]">
                <img
                  src="/images/icon-detailed-records.svg"
                  alt="Icon-detailed-record"
                />
              </figure>
              <div className="card-body flex flex-col  items-center lg:items-start">
                <h2 className="card-title text-xl font-bold -mt-[3rem]">
                  Detailed Records
                </h2>
                <p className="text-gray-400  text-center lg:text-start">
                  Gain insights into who is clicking your links. Knowing when
                  and where people engage with your content helps inform better
                  decisions.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center card bg-white mb-[2rem] lg:mb-auto w-auto lg:w-96 shadow-xl relative top-16 rounded-[0.5rem]">
              <figure className="bg-primary-dark-violet rounded-[50%] self-center -mt-[2rem] mb-6 p-4 w-[60px]">
                <img
                  src="/images/icon-fully-customizable.svg"
                  alt="Icon-fully-customizable"
                />
              </figure>
              <div className="card-body flex flex-col  items-center lg:items-start">
                <h2 className="card-title text-xl font-bold -mt-[3rem]">
                  Fully Customizable
                </h2>
                <p className="text-gray-400  text-center lg:text-start">
                  Improve brand awareness and content discoverability through
                  customizable links, supercharging audience engagement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
