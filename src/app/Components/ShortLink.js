/** @format */

import React, { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";

export default function ShortLink({ shortLink }) {
  const [copied, setCopied] = useState(false);

  // Function to handle copying to clipboard
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shortLink); // Use Clipboard API to copy text
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 1000); // Reset copied state after 1 second
    } catch (error) {
      console.error("Failed to copy text: ", error);
    }
  };

  return (
    <>
      <div className="flex justify-between gap-4 items-center mt-[1rem] w-full h-12 rounded bg-base-100 px-4 py-2">
        <p className="w-full h-full text-center flex items-center">
          {shortLink}
        </p>
        {/* Button triggers the Clipboard API */}
        <button
          onClick={handleCopy}
          className="flex items-center gap-2 bg-primary-cyan hover:bg-primary-cyan-hover text-base-100 px-6 h-full text-center rounded"
        >
          <IoCopyOutline fontSize={15} />
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
    </>
  );
}
