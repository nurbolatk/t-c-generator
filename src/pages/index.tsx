import React from "react";
import { Link } from "react-router-dom";
import SloganGenImg from "assets/slogan-gen.png";
import DescriptionGenImg from "assets/description-gen.png";
import WhatsGenImg from "assets/whats-gen.png";
import qrGenImg from "assets/qr-gen.png";
import termGenImg from "assets/term-gen.png";
import bgRemImg from "assets/bg-rem.png";

export const HomeRoute = () => {
  return (
    <div className="relative">
      <div className="relative z-10 text-center">
        <h1 className="text-7xl font-semibold text-black">
          Free tools to run your business
        </h1>
        <p className="text-lg my-5">Get notified as new tools are released.</p>
        <div className="bg-white rounded-full inline-flex overflow-hidden shadow-paper">
          <input
            type="text"
            placeholder="Enter your E-mail address"
            className="px-6 py-3 rounded-full w-72"
          />
          <button className="bg-black rounded-full text-white px-8">
            Notify me
          </button>
        </div>
      </div>

      <div className="blob-1"></div>
      <div className="blob-2"></div>

      <section className="my-72 flex flex-wrap gap-5">
        <div className="space-y-5 flex-1">
          <Link to="#" className="card group w-full">
            <img src={SloganGenImg} alt="Slogan Generator" />
            <h4 className="group-hover:underline text-orange-400 text-xl font-semibold mt-6">
              Slogan Generator
            </h4>
            <p className="text-sm mt-1">
              Create catchy slogan for your brand with our FREE Slogan
              generator.
            </p>
          </Link>
          <Link to="#" className="card group w-full">
            <img
              src={DescriptionGenImg}
              alt="Product description generator"
              className="-mt-2"
            />
            <h4 className="group-hover:underline text-cyan-400 text-xl font-semibold -mt-6">
              Product description generator
            </h4>
            <p className="text-sm mt-1">
              Generate product descriptions fast and free
            </p>
          </Link>
        </div>
        <div className="space-y-5 flex-1 mt-10">
          <Link to="#" className="card group w-full">
            <img
              src={WhatsGenImg}
              alt="WhatsApp link Generator"
              className="-mt-2"
            />
            <h4 className="group-hover:underline text-green-400 text-xl font-semibold -mt-6">
              WhatsApp link Generator
            </h4>
            <p className="text-sm mt-1">
              Create WhatsApp links with message templates and share them with
              your business customers.
            </p>
          </Link>
          <Link to="#" className="card group w-full">
            <img
              src={qrGenImg}
              alt="QR Code Generator"
              className="mx-auto mt-2"
            />
            <h4 className="group-hover:underline text-purple-400 text-xl font-semibold mt-6">
              QR Code Generator
            </h4>
            <p className="text-sm mt-1">
              Free QR code Generator for your website
            </p>
          </Link>
        </div>
        <div className="space-y-5 flex-1">
          <Link to="/generator" className="card group w-full">
            <img
              src={termGenImg}
              alt="Terms and Conditions Generator"
              className="mx-auto"
            />
            <h4 className="group-hover:underline text-blue-400 text-xl font-semibold -mt-8">
              Terms and Conditions Generator
            </h4>
            <p className="text-sm mt-1">
              Generate T&C for your store with our free generator.
            </p>
          </Link>
          <Link to="#" className="card group w-full">
            <img
              src={bgRemImg}
              alt="Background Remover"
              className="mx-auto mt-1"
            />
            <h4 className="group-hover:underline text-fuchsia-400 text-xl font-semibold mt-3">
              Background Remover
            </h4>
            <p className="text-sm mt-1">
              Remove background from your images for free
            </p>
          </Link>
        </div>
      </section>
    </div>
  );
};
