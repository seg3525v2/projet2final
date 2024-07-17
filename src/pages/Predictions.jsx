import oilers from "../assets/oilers.png";
import panthers from "../assets/panthers.png";
import mcdavid from "../assets/mcdavid.png";
import barkov from "../assets/barkov.png";
import { t } from "../i18n";

export default function Predictions() {
  return (
    <section className="w-full h-full flex flex-col items-center bg-slate-200  py-16">
      <h1 className="text-3xl font-bold text-center p-4 mb-10">
        {t("predictions.title")}
      </h1>
      <div className="flex flex-col items-center justify-center w-10/12 md:w-11/12">
        <div className="flex w-full justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">{t("predictions.today")}</h2>
          <span className="text-lg">Score : 14/45</span>
        </div>
        <div className="bg-white w-full rounded-lg shadow-md p-6 mb-6">
          <h3 className="text-xl font-bold mb-4">
            {t("predictions.nextGame")}
          </h3>
          <div className="grid grid-cols-2 w-full gap-4">
            <div
              id="vote1green"
              className="flex flex-col items-center border-4 border-green-500 bg-slate-100 p-4 rounded-lg"
            >
              <img src={oilers} alt="Oilers Logo" className="w-16 h-16 mb-4" />
              <span className="text-2xl font-bold mb-2">54%</span>
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded duration-200 hover:bg-hover"
                onClick={() => {
                  document.getElementById("vote1green").style.backgroundColor =
                    "#21c55d";
                  document.getElementById("vote1red").style.backgroundColor =
                    "#f1f5f9";
                }}
              >
                {t("predictions.vote")}
              </button>
            </div>
            <div
              id="vote1red"
              className="flex flex-col items-center border-4 border-red-500 bg-slate-100 p-4 rounded-lg"
            >
              <img
                src={panthers}
                alt="Panthers Logo"
                className="w-16 h-16 mb-4"
              />
              <span className="text-2xl font-bold mb-2">46%</span>
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded duration-200 hover:bg-hover"
                onClick={() => {
                  document.getElementById("vote1green").style.backgroundColor =
                    "#f1f5f9";
                  document.getElementById("vote1red").style.backgroundColor =
                    "#ef4444";
                }}
              >
                {t("predictions.vote")}
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white w-full rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold mb-4">
            {t("predictions.firstGoal")}
          </h3>
          <div className="grid grid-cols-3 gap-4">
            <div
              id="vote2green1"
              className="flex flex-col items-center border-4 border-red-500 bg-slate-100 p-4 rounded-lg"
            >
              <img
                src={mcdavid}
                alt="McDavid Headshot"
                className="w-16 h-16 mb-4"
              />
              <span className="text-2xl font-bold mb-2">27%</span>
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded duration-200 hover:bg-hover"
                onClick={() => {
                  document.getElementById("vote2green1").style.backgroundColor =
                    "#ef4444";
                  document.getElementById("vote2green2").style.backgroundColor =
                    "#f1f5f9";
                  document.getElementById("vote2red").style.backgroundColor =
                    "#f1f5f9";
                }}
              >
                {t("predictions.vote")}
              </button>
            </div>
            <div
              id="vote2green2"
              className="flex flex-col items-center border-4 border-red-500 bg-slate-100 p-4 rounded-lg"
            >
              <img
                src={barkov}
                alt="Barkov Headshot"
                className="w-16 h-16 mb-4"
              />
              <span className="text-2xl font-bold mb-2">16%</span>
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded duration-200 hover:bg-hover"
                onClick={() => {
                  document.getElementById("vote2green2").style.backgroundColor =
                    "#ef4444";
                  document.getElementById("vote2green1").style.backgroundColor =
                    "#f1f5f9";
                  document.getElementById("vote2red").style.backgroundColor =
                    "#f1f5f9";
                }}
              >
                {t("predictions.vote")}
              </button>
            </div>
            <div
              id="vote2red"
              className="flex flex-col items-center border-4 border-green-500 bg-slate-100 p-4 rounded-lg"
            >
              <span className="text-2xl font-bold mb-2">
                {t("predictions.other")}
              </span>
              <span className="text-2xl font-bold mb-2">57%</span>
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded duration-200 hover:bg-hover"
                onClick={() => {
                  document.getElementById("vote2green2").style.backgroundColor =
                    "#f1f5f9";
                  document.getElementById("vote2green1").style.backgroundColor =
                    "#f1f5f9";
                  document.getElementById("vote2red").style.backgroundColor =
                    "#21c55d";
                }}
              >
                {t("predictions.vote")}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-10/12 md:w-11/12 mt-24">
        <div className="flex w-full justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">{t("fantasy.title")}</h2>
          <span className="text-lg">{t("fantasy.betterOdd")}</span>
        </div>
        <div className="bg-white w-full rounded-lg shadow-md p-6 md:p-2 mt-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col items-center border-4 border-blue-500 bg-slate-100 p-4 rounded-lg transition-all duration-200  hover:bg-blue-300">
              <span className="text-2xl font-bold mb-2">1</span>
              <span className="text-lg">{t("fantasy.tip1title")}</span>
              <span className="text-md text-neutral-500 mb-8">
                (ex: Connor Hellebuyck, Andrei Vasilevskiy)
              </span>
              <span>{t("fantasy.tip1desc")}</span>
            </div>
            <div className="flex flex-col items-center border-4 border-blue-500 bg-slate-100 p-4 rounded-lg transition-all duration-200  hover:bg-blue-300">
              <span className="text-2xl font-bold mb-2">2</span>
              <span className="text-lg">{t("fantasy.tip2title")}</span>
              <span className="text-md text-neutral-500 mb-8">
                (ex: Connor McDavid, Leon Draisaitl)
              </span>
              <span>{t("fantasy.tip2desc")}</span>
            </div>
            <div className="flex flex-col items-center border-4 border-blue-500 bg-slate-100 p-4 rounded-lg transition-all duration-200  hover:bg-blue-300">
              <span className="text-2xl font-bold mb-2">3</span>
              <span className="text-lg">{t("fantasy.tip3title")}</span>
              <span className="text-md text-neutral-500 mb-8">
                (ex: Échanger un gardien contre un attaquant)
              </span>
              <span>{t("fantasy.tip3desc")}</span>
            </div>
            <div className="flex flex-col items-center border-4 border-blue-500 bg-slate-100 p-4 rounded-lg transition-all duration-200  hover:bg-blue-300">
              <span className="text-2xl font-bold mb-2">4</span>
              <span className="text-lg">{t("fantasy.tip3title")}</span>
              <span className="text-md text-neutral-500 mb-8">
                (ex: Remplacer un joueur blessé par un joueur en santé)
              </span>
              <span>{t("fantasy.tip4desc")}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
