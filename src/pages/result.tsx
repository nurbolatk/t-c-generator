import React, { useEffect, useState } from "react";
import * as ReactDOMServer from "react-dom/server";
import termGenImg from "assets/term-square.png";
import { generateJSX } from "components/TermsTemplate";
import { TermsFormValues } from "types";
import { getData } from "helpers/terms";
import { Link } from "react-router-dom";

let timeOutId: number | undefined;

export const ResultRoute = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [data, setData] = useState<TermsFormValues | null>(null);

  useEffect(() => {
    getData().then((newData) => {
      setData(newData);
      setIsLoading(false);
    });
  }, []);

  const [show, setShow] = useState<boolean>(false);

  const copyToClipboard = () => {
    if (data) {
      const text = ReactDOMServer.renderToStaticMarkup(generateJSX(data));
      console.log(text);

      navigator.clipboard.writeText(text);
      showToast();
    }
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
      {isLoading && (
        <div className="animate-pulse space-y-4">
          <div className="flex-1 space-y-6 py-1">
            <div className="h-2 w-1/3 bg-slate-300 rounded"></div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-slate-300 rounded col-span-2"></div>
                <div className="h-2 bg-slate-300 rounded col-span-1"></div>
              </div>
              <div className="h-2 bg-slate-300 rounded"></div>
            </div>
          </div>
          <div className="flex-1 space-y-3 py-1">
            <div className="h-2 bg-slate-300 rounded"></div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-slate-300 rounded col-span-2"></div>
                <div className="h-2 bg-slate-300 rounded col-span-1"></div>
              </div>
              <div className="h-2 bg-slate-300 rounded"></div>
            </div>
          </div>
        </div>
      )}
      {!isLoading && !data && (
        <div>
          <h4>You didn't submit your data</h4>
          <p className="mt-2">
            In order to get your Terms & Conditions, please, submit your data in{" "}
            <Link className="text-primary-400" to="/generator">
              this page
            </Link>
          </p>
        </div>
      )}
      {data && <div className="prose max-w-full">{generateJSX(data)}</div>}
    </div>
  );
};
