/** @format */
"use client";

import { useState, useEffect } from "react";
import Layout from "@/app/Components/Layout";
import Header from "@/app/Components/Header";
import SectionOne from "./Components/SectionOne";
import SectionTwo from "./Components/SectionTwo";
import SectionThree from "./Components/SectionThree";
import SectionFour from "./Components/SectionFour";
import Footer from "./Components/Footer";
import { TbMenu2 } from "react-icons/tb";
import Loading from "./Components/Loading";

export default function Home() {
  const [userLink, setUserLink] = useState("");
  const [shortUrl, setShortUrl] = useState();
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);
  const [error, setError] = useState(false);
  const [successful, SetSuccessful] = useState(false);
  // For Mobile Devices
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 1020px)").matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1020px)");
    const handleMediaChange = () => setIsMobile(mediaQuery.matches);

    // Add listener
    mediaQuery.addEventListener("change", handleMediaChange);

    // Clean up the listener
    return () => mediaQuery.removeEventListener("change", handleMediaChange);
  }, []);

  return (
    <div className="relative bg-base-100 sm:text-center">
      {loading && <Loading />}
      {isMobile && <Menu />}
      <Header isMobile={isMobile} />
      <Layout>
        <div className="w-full px-[1rem] lg:px-[6rem]">
          <SectionOne />
          <SectionTwo
            userLink={userLink}
            setUserLink={setUserLink}
            shortUrl={shortUrl}
            setShortUrl={setShortUrl}
            setLoading={setLoading}
            setErrorMsg={setErrorMsg}
            error={error}
            setError={setError}
            SetSuccessful={SetSuccessful}
          />
        </div>
        <SectionThree
          shortUrl={shortUrl}
          loading={loading}
          errorMsg={errorMsg}
          error={error}
          userLink={userLink}
          successful={successful}
        />
        <SectionFour />
        <Footer />
      </Layout>
    </div>
  );
}

function Menu() {
  return (
    <div className="drawer drawer-end absolute top-0 left-0 right-0 z-10">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex  justify-end">
        {/* Page content here */}
        <label
          htmlFor="my-drawer-4"
          className="drawer-button btn bg-transparent border-none shadow-none"
        >
          <TbMenu2 fontSize={20} />
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-50 p-4">
          {/* Sidebar content here */}
          <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
