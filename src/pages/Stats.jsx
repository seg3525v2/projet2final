import { useState } from "react";
import oilers from "../assets/oilers.png";
import mcdavid from "../assets/mcdavid.png";
import blackhawks from "../assets/blackhawks.png";
import bedard from "../assets/bedard.png";
import { t } from "../i18n";

export default function Stats() {
  const playerData = [
    {
      name: "Connor McDavid",
      team: t("stats.teams.edmonton"),
      position: t("stats.positions.center"),
      points: 105,
      goals: 33,
      assists: 72,
      gamesPlayed: 56,
      plusMinus: 21,
    },
    {
      name: "Leon Draisaitl",
      team: t("stats.teams.edmonton"),
      position: t("stats.positions.center"),
      points: 84,
      goals: 31,
      assists: 53,
      gamesPlayed: 56,
      plusMinus: 28,
    },
    {
      name: "Mitch Marner",
      team: t("stats.teams.toronto"),
      position: t("stats.positions.rightWing"),
      points: 67,
      goals: 20,
      assists: 47,
      gamesPlayed: 56,
      plusMinus: 22,
    },
    {
      name: "Auston Matthews",
      team: t("stats.teams.toronto"),
      position: t("stats.positions.center"),
      points: 66,
      goals: 41,
      assists: 25,
      gamesPlayed: 52,
      plusMinus: 21,
    },
    {
      name: "Brad Marchand",
      team: t("stats.teams.boston"),
      position: t("stats.positions.leftWing"),
      points: 69,
      goals: 29,
      assists: 40,
      gamesPlayed: 53,
      plusMinus: 23,
    },

    {
      name: "David Pastrnak",
      team: t("stats.teams.boston"),
      position: t("stats.positions.rightWing"),
      points: 48,
      goals: 20,
      assists: 28,
      gamesPlayed: 48,
      plusMinus: 9,
    },
    {
      name: "Mark Stone",
      team: t("stats.teams.vegas"),
      position: t("stats.positions.rightWing"),
      points: 61,
      goals: 21,
      assists: 40,
      gamesPlayed: 55,
      plusMinus: 26,
    },
    {
      name: "Max Pacioretty",
      team: t("stats.teams.vegas"),
      position: t("stats.positions.leftWing"),
      points: 51,
      goals: 24,
      assists: 27,
      gamesPlayed: 48,
      plusMinus: 5,
    },
    {
      name: "Nathan MacKinnon",
      team: t("stats.teams.colorado"),
      position: t("stats.positions.center"),
      points: 65,
      goals: 20,
      assists: 45,
      gamesPlayed: 48,
      plusMinus: 17,
    },
    {
      name: "Mikko Rantanen",
      team: t("stats.teams.colorado"),
      position: t("stats.positions.rightWing"),
      points: 66,
      goals: 30,
      assists: 36,
      gamesPlayed: 52,
      plusMinus: 25,
    },
    {
      name: "Patrick Kane",
      team: t("stats.teams.chicago"),
      position: t("stats.positions.rightWing"),
      points: 66,
      goals: 15,
      assists: 51,
      gamesPlayed: 56,
      plusMinus: -2,
    },
    {
      name: "Alex DeBrincat",
      team: t("stats.teams.chicago"),
      position: t("stats.positions.leftWing"),
      points: 54,
      goals: 32,
      assists: 22,
      gamesPlayed: 52,
      plusMinus: 3,
    },
    {
      name: "Kirill Kaprizov",
      team: t("stats.teams.minnesota"),
      position: t("stats.positions.leftWing"),
      points: 51,
      goals: 27,
      assists: 24,
      gamesPlayed: 55,
      plusMinus: 10,
    },
    {
      name: "Kevin Fiala",
      team: t("stats.teams.minnesota"),
      position: t("stats.positions.rightWing"),
      points: 40,
      goals: 20,
      assists: 20,
      gamesPlayed: 50,
      plusMinus: 8,
    },
    {
      name: "Anze Kopitar",
      team: t("stats.teams.losangeles"),
      position: t("stats.positions.center"),
      points: 62,
      goals: 14,
      assists: 48,
      gamesPlayed: 56,
      plusMinus: 2,
    },
    {
      name: "Dustin Brown",
      team: t("stats.teams.losangeles"),
      position: t("stats.positions.rightWing"),
      points: 51,
      goals: 17,
      assists: 34,
      gamesPlayed: 56,
      plusMinus: 2,
    },
    {
      name: "Johnny Gaudreau",
      team: t("stats.teams.calgary"),
      position: t("stats.positions.leftWing"),
      points: 49,
      goals: 19,
      assists: 30,
      gamesPlayed: 56,
      plusMinus: 2,
    },
    {
      name: "Matthew Tkachuk",
      team: t("stats.teams.calgary"),
      position: t("stats.positions.leftWing"),
      points: 43,
      goals: 8,
      assists: 35,
      gamesPlayed: 56,
      plusMinus: -3,
    },
  ];

  const [sortBy, setSortBy] = useState("points");

  return (
    <div className="w-full h-full flex flex-col items-center bg-slate-200 py-16">
      <h1 className="text-3xl font-bold text-center p-4 mb-10">
        {t("stats.title")}
      </h1>

      <div className="flex flex-col items-center justify-center w-10/12 lg:w-full border overflow-auto">
        <select
          className="w-1/4 lg:w-1/2 bg-button text-white font-bold p-4 rounded-xl mb-4 duration-200 hover:bg-hover cursor-pointer"
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="points">{t("stats.points")}</option>
          <option value="goals">{t("stats.goals")}</option>
          <option value="assists">{t("stats.assists")}</option>
          <option value="gamesPlayed">{t("stats.gamesPlayed")}</option>
          <option value="plusMinus">{t("stats.plusMinus")}</option>
          <option value="team">{t("stats.team")}</option>
        </select>
        <table className="border border-black bg-slate-100 rounded-xl">
          <thead>
            <tr className="border border-black">
              <th className="p-4 text-center">{t("stats.player")} &#9786;</th>
              <th
                className={`p-4 text-center ${
                  sortBy == "team" && "bg-yellow-200"
                }`}
              >
                {t("stats.team")}
              </th>
              <th className="p-4 text-center">{t("stats.position")}</th>
              <th
                className={`p-4 text-center ${
                  sortBy == "points" && "bg-yellow-200"
                }`}
              >
                {t("stats.points")} &#9733;
              </th>
              <th
                className={`p-4 text-center ${
                  sortBy == "goals" && "bg-yellow-200"
                }`}
              >
                {t("stats.goals")}
              </th>
              <th
                className={`p-4 text-center ${
                  sortBy == "assists" && "bg-yellow-200"
                }`}
              >
                {t("stats.assists")}
              </th>
              <th
                className={`p-4 text-center ${
                  sortBy == "gamesPlayed" && "bg-yellow-200"
                }`}
              >
                {t("stats.gamesPlayed")}
              </th>
              <th
                className={`p-4 text-center ${
                  sortBy == "plusMinus" && "bg-yellow-200"
                }`}
              >
                {t("stats.plusMinus")} &#177;
              </th>
            </tr>
          </thead>
          <tbody>
            {playerData
              .sort((a, b) => b[sortBy] - a[sortBy])
              .map((player, i) => (
                <tr
                  key={player.name}
                  className={`border border-black ${
                    i % 2 === 0 ? "bg-slate-200" : "bg-slate-100"
                  }`}
                >
                  <td className="p-4 text-center">{player.name}</td>
                  <td
                    className={`p-4 text-center ${
                      sortBy == "team" && "bg-yellow-200"
                    }`}
                  >
                    {player.team}
                  </td>
                  <td className="p-4 text-center">{player.position}</td>
                  <td
                    className={`p-4 text-center ${
                      sortBy == "points" && "bg-yellow-200"
                    }`}
                  >
                    {player.points}
                  </td>
                  <td
                    className={`p-4 text-center ${
                      sortBy == "goals" && "bg-yellow-200"
                    }`}
                  >
                    {player.goals}
                  </td>
                  <td
                    className={`p-4 text-center ${
                      sortBy == "assists" && "bg-yellow-200"
                    }`}
                  >
                    {player.assists}
                  </td>
                  <td
                    className={`p-4 text-center ${
                      sortBy == "gamesPlayed" && "bg-yellow-200"
                    }`}
                  >
                    {player.gamesPlayed}
                  </td>
                  <td
                    className={`p-4 text-center ${
                      sortBy == "plusMinus" && "bg-yellow-200"
                    }`}
                  >
                    {player.plusMinus}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>

        <h2 className="text-2xl font-bold text-center p-4 my-10">
          {t("pros.title")}
        </h2>
        <div className="flex  flex-col items-center justify-center w-10/12 border gap-4">
          <div className="flex md:flex-col flex-row items-center justify-left bg-slate-300 rounded-xl p-8 w-full">
            <img src={oilers} alt="Oilers Logo" className="w-16 h-16" />
            <img src={mcdavid} alt="McDavid Headshot" className="w-16 h-16" />
            <p className="p-4 text-center">{t("pros.mcdavid")}</p>
            <p className="p-4 text-center font-bold">
              {" "}
              - John Doe, {t("pros.espn")}
            </p>
          </div>
          <div className="flex md:flex-col flex-row items-center justify-left bg-slate-300 rounded-xl p-8 w-full">
            <img src={blackhawks} alt="BlackHawks Logo" className="w-16 h-16" />
            <img src={bedard} alt="Bedard headshot" className="w-16 h-16" />
            <p className="p-4 text-center">{t("pros.bedard")}</p>
            <p className="p-4 text-center font-bold">
              {" "}
              - Marc Doe, {t("pros.sportsnet")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
