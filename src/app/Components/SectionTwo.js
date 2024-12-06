/** @format */
import axios from "axios";
// import React, { useState, useEffect } from "react";
export default function SectionTwo({
  userLink,
  setUserLink,
  shortUrl,
  setShortUrl,
  setLoading,
  setErrorMsg,
  setError,
  error,
  SetSuccessful,
}) {
  // const [originalUrl, setOriginalUrl] = useState(null);

  function handleUserLinkInput(e) {
    setUserLink(() => e.target.value);
  }

  async function shortLink(userLink) {
    const API_URL = "https://api.tinyurl.com/create";
    const API_KEY =
      "auQlsUvfKeE2exiDePFXwywXH5pWhV4GjFmdCDLsKPQc7zNc8uW9MIbvqeUK"; // Replace with your TinyURL API key
    console.log(userLink);
    setLoading(true);

    // https://www.youtube.com/watch?v=w7SadV0VkS4
    //https://www.youtube.com/watch?v=QaJz0Zr7VAk

    try {
      const response = await axios.post(
        API_URL,
        { url: userLink }, // Request payload
        {
          headers: {
            Authorization: `Bearer ${API_KEY}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data && response.data.data.tiny_url) {
        setShortUrl(response.data.data.tiny_url); // TinyURL API response
        SetSuccessful(true);
        setError(false);
        console.log(response.data);
      } else {
        setError(true);
        setErrorMsg("Failed to shorten the URL. Try again.");
      }
    } catch (err) {
      setError(true);
      console.log(error);
      setErrorMsg("An error occurred. Please check your input or try again.");
      console.error(err.response || err.message);
    } finally {
      setLoading(false);
    }
  }

  function handleShortenUrl(userLink) {
    console.log(userLink);
    if (!userLink) {
      setErrorMsg("Please enter a valid URL.");
      setError(true);
      setLoading(false);
    } else {
      shortLink(userLink);
    }
    // setOriginalUrl(userLink);
  }
  // const shortenLink = async (longUrl) => {
  //   const apiKey = "268209fbeb0944ee96901907e0f2fa5b";
  //   try {
  //     setLoading(true);
  //     const url = "https://api.rebrandly.com/v1/links";
  //     const response = await axios.post(
  //       url,
  //       { destination: longUrl },
  //       { headers: { apikey: apiKey } }
  //     );

  //     // Check if the response status is OK
  //     if (response.status >= 200 && response.status < 300) {
  //       const shortUrl = response.data.shortUrl;
  //       console.log(shortUrl);
  //       setShortUrl(shortUrl);
  //       // console.log("Success:", response.data);
  //       // return response.data; // Process the response as needed
  //     } else {
  //       // console.error("Unexpected Response Status:", response.status);
  //       setError(() => true);
  //     }
  //   } catch (err) {
  //     console.log(err);
  //     // setError(true);
  //     setErrorMsg("Failed to shorten the URL. Try again.");
  //     // console.log("error!");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // const API_URL = "https://url-shortener-service.p.rapidapi.com/v1/url"; // Replace with your API endpoint
  // const API_KEY = "93cc48958amsh6d5be5ba7be4bb9p1b4361jsn1349f964b375"; // Replace with your RapidAPI key

  // const shortenLink = async (userLink) => {
  //   setError(""); // Reset error

  //   if (!userLink) {
  //     setError("Please enter a valid URL.");
  //     return;
  //   }

  //   try {
  //     const response = await axios.post(
  //       API_URL,
  //       { url: userLink }, // Payload as per API documentation
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //           "X-RapidAPI-Key": API_KEY,
  //           "X-RapidAPI-Host": "url-link-shortener.p.rapidapi.com", // Update to match your API
  //         },
  //       }
  //     );

  //     console.log(response);

  //     if (response.data && response.data.shortUrl) {
  //       setShortUrl(response.data.shortUrl);
  //     } else {
  //       setError("Failed to shorten the URL. Try again.");
  //     }
  //   } catch (err) {
  //     setError("An error occurred. Please check your input or try again.");
  //     console.error(err);
  //   }
  // };

  // function handleShortBtn(userLink) {
  //   shortenLink(userLink);
  //   console.log(userLink);
  // }

  return (
    <div className="relative top-14 overflow-x-hidden ">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleShortenUrl(userLink);
        }}
        className=" flex justify-between gap-4 h-auto w-full pt-3  py-4 px-5 lg:pt-10  lg:py-8 lg:px-10 bg-primary-dark-violet bg-[url('/images/bg-shorten-mobile.svg')] lg:bg-[url('/images/bg-shorten-desktop.svg')] bg-cover bg-blend-multiply rounded-[0.5rem]"
      >
        <input
          className={`${
            error === true ? " border-red-500" : "border-none"
          }border outline-none  px-4 rounded-[0.5rem] w-full bg-base-100  `}
          placeholder="Shorten a link here..."
          value={userLink}
          typeof="text"
          onChange={handleUserLinkInput}
        />
        <button
          className="btn border-none px-2 lg:px-6 text-base-100 bg-primary-cyan"
          // onClick={() => handleShortBtn(userLink)}
        >
          shorten it!
        </button>
      </form>
    </div>
  );
}
