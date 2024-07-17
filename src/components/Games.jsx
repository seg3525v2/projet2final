import oilers from "../assets/oilers.png";
import panthers from "../assets/panthers.png";
import { t } from "../i18n";

export default function Games() {
  const data = [
    {
      team1: t("games.oilers"),
      picture1: oilers,
      team2: t("games.panthers"),
      picture2: panthers,
      score1: 5,
      score2: 1,
      tag: "SCF - Game 6",
      date: "2024-6-21",
    },
    {
      team1: t("games.oilers"),
      picture1: oilers,
      team2: t("games.panthers"),
      picture2: panthers,
      score1: 5,
      score2: 3,
      tag: "SCF - Game 5",
      date: "2024-6-18",
    },
    {
      team1: t("games.oilers"),
      picture1: oilers,
      team2: t("games.panthers"),
      picture2: panthers,
      score1: 8,
      score2: 1,
      tag: "SCF - Game 4",
      date: "2024-6-15",
    },
    {
      team1: t("games.oilers"),
      picture1: oilers,
      team2: t("games.panthers"),
      picture2: panthers,
      score1: 3,
      score2: 4,
      tag: "SCF - Game 3",
      date: "2024-6-14",
    },
  ];

  return (
    <section className="bg-slate-300 py-16">
      <h1 className="text-3xl font-bold text-center p-4 mb-10">
        {t("games.title")}
      </h1>
      <div className="flex items-center justify-center w-full">
        <div className="w-10/12 grid grid-cols-2 gap-8 md:grid-cols-1">
          {data.map((gameData) => (
            <GameCard key={gameData.date} gameData={gameData} />
          ))}
        </div>
      </div>
    </section>
  );
}

const GameCard = ({ gameData }) => {
  return (
    <div className="flex flex-row items-center justify-center gap-4 p-4 bg-slate-100 border-gray-500 border-4 rounded-xl">
      <div className="flex flex-col items-center">
        <img src={gameData.picture1} alt="Card team1" className="w-20 h-20" />
        <span className="font-bold">{gameData.team1}</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="font-bold text-3xl">
          {gameData.score1} - {gameData.score2}
        </span>
        <span className="text-gray-900">{gameData.tag}</span>
      </div>
      <div className="flex flex-col items-center">
        <img src={gameData.picture2} alt="Card team2" className="w-20 h-20" />
        <span className="font-bold">{gameData.team2}</span>
      </div>
    </div>
  );
};
