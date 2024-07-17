import { Outlet, Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { useState, useEffect } from "react";
import { t, locale } from "../i18n";
import { useStore } from "@nanostores/react";

export default function Navigation() {
  const $locale = useStore(locale);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-5rem";
    }
    prevScrollpos = currentScrollPos;
  };

  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      setSidebarOpen(false);
    }
  });

  return (
    <>
      <nav
        id="navbar"
        className="bg-black h-20 w-full sticky text-white flex justify-between items-center px-8 py-2 font-bold shadow-lg transition-all duration-300"
      >
        <div className="flex flex-row gap-8 justify-start items-center">
          <div
            className="flex flex-row items-center gap-4 cursor-pointer"
            onClick={() => {
              window.location.href = "/projet2/";
            }}
          >
            <img src={logo} alt="Cup Quest Logo" className="w-10 h-10" />
            <span className="font-bold">Cup Quest</span>
          </div>
          <button
            className="flex w-16 items-center justify-center border-2 rounded-xl p-4 cursor-pointer font-bold transition-all duration-200 hover:bg-neutral-800"
            type="submit"
            onClick={() => {
              locale.set($locale === "en" ? "fr" : "en");
            }}
          >
            {`${$locale === "en" ? "fr" : "en"}`.toUpperCase()}
          </button>
        </div>
        <div>
          <ul
            className={
              sidebarOpen
                ? "flex flex-col gap-4 absolute top-20 right-0 bg-black text-white p-4 rounded-lg shadow-lg"
                : "flex flex-row gap-8 md:hidden"
            }
          >
            <li>
              <Link to="/statistiques" className="hover:underline">
                {t("navbar.stats")}
              </Link>
            </li>
            <li>
              <Link to="/predictions" className="hover:underline">
                {t("navbar.predictions")}
              </Link>
            </li>
            <li>
              <Link to="/chat" className="hover:underline">
                {t("navbar.chat")}
              </Link>
            </li>
          </ul>
          <button
            className="hidden md:block"
            onClick={() => {
              setSidebarOpen(!sidebarOpen);
            }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </nav>
      <Outlet />
    </>
  );
}
