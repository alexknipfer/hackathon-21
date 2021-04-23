function GameSchedule({
  homeTeam,
  homeTeamLogo,
  awayTeam,
  awayTeamLogo,
  startDate,
}) {
  return (
    <div className="flex space-between items-center pt-5 ">
      <img className="w-10 pr-5" src={awayTeamLogo} />
      <div className="w-20 pr-5">{awayTeam} </div>
      <div className="w-10 pr-5">@</div>
      <img className="w-10 pr-5" src={homeTeamLogo} />
      <div className="w-20 pr-5">{homeTeam}</div>
      <div className="w-28 pr-5">
        {new Date(startDate).toLocaleTimeString()}
      </div>
      <button
        class="bg-mlb-blue text-white active:bg-mlb-blue font-bold uppercase text-xs px-4 py-3 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
      >
        {" "}
        Play Game
      </button>
    </div>
  );
}

export default GameSchedule;
