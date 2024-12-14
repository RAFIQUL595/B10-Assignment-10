import React from "react";

const GameReleases = () => {
  const recentlyReleased = [
    { name: "Fitness Boxing 3: Your Personal Trainer", date: "DEC 5" },
    { name: "FANTASIAN Neo Dimension", date: "DEC 5" },
    { name: "Mythwrecked: Ambrosia Island", date: "DEC 5" },
    { name: "ANTONBLAST", date: "DEC 3" },
    { name: "Spirit Mancer", date: "NOV 22" },
  ];

  const upcomingReleases = [
    { name: "Marvel Rivals", date: "DEC 6" },
    { name: "Indiana Jones and the Great Adventure", date: "DEC 9" },
    { name: "Legacy of Kain: Soul Reaver 1", date: "DEC 10" },
    { name: "Mighty Morphin Power Rangers", date: "DEC 10" },
    { name: "Freedom Wars Remastered", date: "JAN 10" },
  ];

  const reviewedToday = [
    { name: "Infinity Nikki", date: "DEC 4" },
    { name: "FANTASIAN Neo Dimension", date: "DEC 5" },
    { name: "The Thaumaturge", date: "MAR 4" },
    { name: "Nine Sols", date: "MAY 29" },
    { name: "Cards of Heart", date: "SEP 7" },
  ];

  return (
    <div className="w-11/12 mx-auto p-4 my-10">
      <h2 className="text-center text-4xl font-bold mb-5">Game Releases</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Recently Released Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">🔹 RECENTLY RELEASED</h2>
          <ul className="space-y-2 text-lg">
            {recentlyReleased.map((game, index) => (
              <li key={index} className="flex justify-between">
                <span>{game.name}</span>
                <span className="text-gray-500">{game.date}</span>
              </li>
            ))}
            <li className="text-blue-500 cursor-pointer">View More →</li>
          </ul>
        </div>

        {/* Upcoming Releases Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">🔹 UPCOMING RELEASES</h2>
          <ul className="space-y-2 text-lg">
            {upcomingReleases.map((game, index) => (
              <li key={index} className="flex justify-between">
                <span>{game.name}</span>
                <span className="text-gray-500">{game.date}</span>
              </li>
            ))}
            <li className="text-blue-500 cursor-pointer">View More →</li>
          </ul>
        </div>

        {/* Reviewed Today Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">🔹 REVIEWED TODAY</h2>
          <ul className="space-y-2 text-lg">
            {reviewedToday.map((game, index) => (
              <li key={index} className="flex justify-between">
                <span>{game.name}</span>
                <span className="text-gray-500">{game.date}</span>
              </li>
            ))}
            <li className="text-blue-500 cursor-pointer">
              Reviewed This Week →
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GameReleases;
