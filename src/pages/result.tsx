import React, { useEffect, useState } from "react";
import termGenImg from "assets/term-square.png";

let timeOutId: number | undefined;

export const ResultRoute = () => {
  const [show, setShow] = useState<boolean>(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText("My terms!");
    showToast();
  };

  const showToast = () => {
    if (!show) {
      setShow(true);
      timeOutId = setTimeout(() => setShow(false), 2000) as unknown as number;
    }
  };

  useEffect(() => {
    return () => clearTimeout(timeOutId);
  }, []);

  return (
    <div className="card pb-16 space-y-12">
      <header className="flex items-center gap-10">
        <div className="shrink-[1]">
          <img src={termGenImg} alt="Terms and Conditions Generator" />
        </div>
        <h2 className="text-black font-semibold text-4xl shrink-[2]">
          Your custom terms and conditions has been successfully created.
        </h2>
      </header>
      <div className="relative">
        <button
          type="submit"
          className="rounded-lg bg-primary-500 py-3 px-8 font-semibold text-white"
          onClick={copyToClipboard}
        >
          Copy to clipboard
        </button>
        {show && (
          <div className="p-2 bg-white shadow-paper text-xs inline-block rounded ml-2">
            Copied!
          </div>
        )}
      </div>
      <div>
        <h3>Terms and Conditions</h3>
        <p className="text-slate-600 mt-2">
          Fill in the form below, and the tool will generate a free terms and
          conditions page for your website.
        </p>
      </div>
    </div>
  );
};
