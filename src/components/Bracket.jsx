import bracket from "../assets/bracket.png";
import { Link } from "react-router-dom";
import { t } from "../i18n";

export default function Bracket() {
  return (
    <section className="w-full h-auto bg-[#1a1a1a] flex flex-col items-center gap-0 justify-center py-16">
      <h1 className="text-3xl font-bold text-center p-4 mb-12 text-white">
        {t("bracket.title")}
      </h1>
      <img
        src={bracket}
        alt="Playoff Bracket Picture"
        className="w-[80%] h-auto object-cover border pt-8"
      />
      <div className="flex flex-row items-center justify-center mt-16">
        <Link to="/predictions">
          <button className="bg-button text-white font-bold p-4 rounded-xl duration-200 hover:bg-hover">
            {t("bracket.btn")}
          </button>
        </Link>
      </div>
    </section>
  );
}
