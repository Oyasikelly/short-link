/** @format */

import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";

export default function ShortLink({ shortLink, onClick }) {
  const [copied, setCopied] = useState(false);

  function setCopy() {
    setTimeout(() => {
      setCopied(false);
    }, 1000);
    setCopied(true);
    // https://www.youtube.com/watch?v=S-VfRdKAbjI
  }
  return (
    <>
      <div className="flex justify-between  gap-4 items-center mt-[1rem] w-full h-12 rounded bg-base-100 px-4 py-2 ">
        <p className="w-full h-full text-center flex items-center">
          {shortLink}
        </p>
        <CopyToClipboard text={shortLink} onCopy={setCopy}>
          <button className="flex items-center gap-2 bg-primary-cyan hover:bg-primary-cyan-hover text-base-100 px-6 h-full text-center rounded">
            <IoCopyOutline fontSize={15} />
            {copied === true ? "copied" : "copy"}
          </button>
        </CopyToClipboard>
      </div>
    </>
  );
}
