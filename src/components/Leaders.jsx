import goal_bg from "../assets/goal_bg.webp";
import oilers from "../assets/oilers.png";
import mcdavid from "../assets/mcdavid.png";
import panthers from "../assets/panthers.png";
import barkov from "../assets/barkov.png";
import { Link } from "react-router-dom";
import { t } from "../i18n";

export default function Leaders() {
  return (
    <div
      className="w-full h-auto bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${goal_bg})` }}
    >
      <div className="w-full h-full bg-black bg-opacity-75 py-48">
        <div className="w-full h-full flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold text-center p-4 mb-36 text-white">
            {t("leaders.title")}
          </h1>

          <div className="w-7/12 grid grid-cols-2 gap-32 md:grid-cols-1">
            <div className="bg-white p-4 rounded-lg">
              <div className="flex flex-row items-center gap-4">
                <img
                  src={mcdavid}
                  alt="McDavid"
                  className="w-32 h-32 absolute -translate-y-[9.375rem]"
                />
                <img
                  src={oilers}
                  alt="Oilers"
                  className="w-24 h-24 absolute translate-x-32 -translate-y-36"
                />
                <div className="relative">
                  <h2 className="font-bold">Connor McDavid</h2>
                  <p className="font-bold text-zinc-600">#97 • EDM • C</p>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="flex flex-col items-center bg-zinc-300 rounded-xl p-4">
                      <span className="font-bold text-3xl">42</span>
                      <span>{t("leaders.points")}</span>
                    </div>
                    <div className="flex flex-col items-center bg-zinc-300 rounded-xl p-4">
                      <span className="font-bold text-3xl">8</span>
                      <span>{t("leaders.goals")}</span>
                    </div>
                    <div className="flex flex-col items-center bg-zinc-300 rounded-xl p-4">
                      <span className="font-bold text-3xl">34</span>
                      <span>{t("leaders.assists")}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <div className="flex flex-row items-center gap-4">
                <img
                  src={barkov}
                  alt="Barkov"
                  className="w-32 h-32 absolute -translate-y-[9.375rem]"
                />
                <img
                  src={panthers}
                  alt="Panthers"
                  className="w-24 h-24 absolute translate-x-32 -translate-y-36"
                />
                <div className="relative">
                  <h2 className="font-bold">Aleksander Barkov</h2>
                  <p className="font-bold text-zinc-600">#16 • FLA • C</p>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="flex flex-col items-center bg-zinc-300 rounded-xl p-4">
                      <span className="font-bold text-3xl">22</span>
                      <span>{t("leaders.points")}</span>
                    </div>
                    <div className="flex flex-col items-center bg-zinc-300 rounded-xl p-4">
                      <span className="font-bold text-3xl">8</span>
                      <span>{t("leaders.goals")}</span>
                    </div>
                    <div className="flex flex-col items-center bg-zinc-300 rounded-xl p-4">
                      <span className="font-bold text-3xl">14</span>
                      <span>{t("leaders.assists")}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-row items-center justify-center gap-4 mt-16">
            <Link to="/statistiques">
              <button className="bg-button text-white font-bold p-4 rounded-xl duration-200 hover:bg-hover">
                {t("leaders.btn")}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
