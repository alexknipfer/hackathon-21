function GameSchedule({
  homeTeam,
  homeTeamLogo,
  awayTeam,
  awayTeamLogo,
  startDate,
}) {
  return (
    <div className="flex items-center pt-5 w-full">
      <img className="w-10 flex-initial" src={awayTeamLogo} />
      <div className="w-6 pl-2 flex-1">{awayTeam} </div>
      <div className="w-1 flex-initial pr-5">@</div>
      <img className="w-10 h-10 flex-initial" src={homeTeamLogo} />
      <div className="w-6 pl-2 flex-1">{homeTeam}</div>
      <div className="w-32 pl-2 flex-1">
        {new Date(startDate).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </div>
      <button
        className="flex-1 bg-mlb-blue text-white active:bg-mlb-blue font-bold uppercase text-xs px-4 py-3 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
      >
        Play Game
      </button>
    </div>
  );
}

export default GameSchedule;
