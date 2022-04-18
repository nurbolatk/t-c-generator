import React from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { ReactComponent as Logo } from "assets/logo.svg";
import { HomeRoute } from "pages";
import { GeneratorRoute } from "pages/generator";
import { ResultRoute } from "pages/result";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <header className="p-3 md:p-5 flex items-center gap-4">
          <Link to="/" className="max-w-max mr-auto">
            <Logo className="w-[min(50%,_10rem)]" />
          </Link>
          <Link to="#">Demo Store</Link>
          <button className="rounded-full bg-black py-3 px-8 text-white">
            Get Shopboxo for Free
          </button>
        </header>
        <main className="container flex-1 mt-4">
          <Routes>
            <Route path="/">
              <Route index element={<HomeRoute />} />
              <Route path="generator" element={<GeneratorRoute />} />
              <Route path="result" element={<ResultRoute />} />
            </Route>
          </Routes>
        </main>
        <footer className="flex justify-between gap-4 p-5">
          <div className="flex divide-x">
            <Link to="#" className="pr-4">
              Request a demo
            </Link>
            <Link to="#" className="pl-4">
              Terms & Policies
            </Link>
          </div>
          <Link to="#">{new Date().getFullYear()} Made by Appboxo</Link>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
