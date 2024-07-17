import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import linkedin from "../assets/linkedin.svg";
import instagram from "../assets/instagram.svg";
import youtube from "../assets/youtube.svg";
import facebook from "../assets/facebook.svg";
import { t } from "../i18n";

export default function Footer() {
  return (
    <>
      <footer className="border-t bg-black w-full text-white flex flex-wrap gap-4 justify-between items-center px-16 py-12 md:justify-center">
        <div
          className="flex flex-row items-center gap-4 cursor-pointer"
          onClick={() => {
            window.location.href = "/projet2final/";
          }}
        >
          <img src={logo} alt="Cup Quest logo" className="w-10 h-10" />
          <span className="font-bold">Cup Quest</span>
        </div>
        <div>
          <ul className="flex flex-row gap-4 items-center">
            <li>
              <img src={facebook} alt="Facebook Icon" />
            </li>
            <li>
              <img src={linkedin} alt="LinkedIn Icon" />
            </li>
            <li>
              <img src={youtube} alt="Youtube Icon" />
            </li>
            <li>
              <img src={instagram} alt="Instagram Icon" />
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex flex-row gap-8 font-bold">
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
        </div>
      </footer>
    </>
  );
}
