"use client";
import { useEffect, useState } from "react";

export default function Scoreboard() {
  const [serve, setServe] = useState("home");

  const [homeTeam, setHomeTeam] = useState("Домакини");
  const [awayTeam, setAwayTeam] = useState("Гости");
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);
  const [homeSets, setHomeSets] = useState(0);
  const [awaySets, setAwaySets] = useState(0);
  const [homeTimeouts, setHomeTimeouts] = useState(2);
  const [awayTimeouts, setAwayTimeouts] = useState(2);

  const handleTeamNameChange = (team: string, newName: string) => {
    if (team === "home") {
      setHomeTeam(newName);
    } else {
      setAwayTeam(newName);
    }
  };

  const incrementScore = (team: string) => {
    if (team === "home") {
      setHomeScore((prev) => prev + 1);
      setServe("home");
    } else {
      setAwayScore((prev) => prev + 1);
      setServe("away");
    }
  };

  useEffect(() => {
    if (homeScore >= 25 || awayScore >= 25) {
      if (Math.abs(homeScore - awayScore) >= 2) {
        if (homeScore > awayScore) {
          setHomeSets((prev) => prev + 1);
          setHomeScore(0);
          setAwayScore(0);
        } else {
          setAwaySets((prev) => prev + 1);
          setHomeScore(0);
          setAwayScore(0);
        }
      }
    }
  }, [homeScore, awayScore]);

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="flex flex-row justify-end items-center">
          <input
            type="text"
            value={homeTeam}
            onChange={(e) => handleTeamNameChange("home", e.target.value)}
            className="bg-transparent text-left w-full text-4xl focus:outline-none"
          />
          {serve === "home" && <span className="ml-2 text-4xl">🏐</span>}
        </div>
        <div className="flex flex-row-reverse justify-start items-center">
          <input
            type="text"
            value={awayTeam}
            onChange={(e) => handleTeamNameChange("away", e.target.value)}
            className="bg-transparent text-right w-full text-4xl focus:outline-none"
          />
          {serve === "away" && <span className="mr-2 text-4xl">🏐</span>}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4" style={{ height: "75vh" }}>
        <button
          onClick={() => incrementScore("home")}
          className="bg-transparent border border-yellow-500 rounded-lg text-[16rem] flex items-center justify-center"
        >
          {homeScore}
        </button>
        <button
          onClick={() => incrementScore("away")}
          className="bg-transparent border border-yellow-500 rounded-lg text-[16rem] flex items-center justify-center"
        >
          {awayScore}
        </button>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-row items-center justify-between">
          <div className="flex items-center mb-2 gap-1">
            <input type="checkbox" className="h-12 w-12 text-yellow-500" />
            <input type="checkbox" className="h-12 w-12 text-yellow-500" />
            <span className="mx-2">30s</span>
          </div>
          <button className="bg-transparent border border-yellow-500 rounded-lg text-2xl px-4 py-2">
            {homeSets}
          </button>
        </div>
        <div className="flex flex-row-reverse items-center justify-between">
          <div className="flex flex-row-reverse items-center mb-2 gap-1">
            <input type="checkbox" className="h-12 w-12 text-yellow-500" />

            <input type="checkbox" className="h-12 w-12 text-yellow-500" />

            <span className="mx-2">30s</span>
          </div>
          <button className="bg-transparent border border-yellow-500 rounded-lg text-2xl px-4 py-2">
            {awaySets}
          </button>
        </div>
      </div>
    </div>
  );
}
