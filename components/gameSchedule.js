import { useRouter } from "next/router";

function GameSchedule({
  id,
  homeTeam,
  homeTeamLogo,
  awayTeam,
  awayTeamLogo,
  startDate,
}) {
  const router = useRouter();
  return (
    <div className="flex justify-between items-center pt-5 w-full">
      <div className="flex">
        <img className="w-6 h-6" src={awayTeamLogo} />
        <div className="pl-2">{awayTeam} </div>
        <div className="mx-5">@</div>
        <img className="w-6 h-6" src={homeTeamLogo} />
        <div className="pl-2">{homeTeam}</div>
      </div>
      <div className="flex items-center">
        <div className="px-2 text-xs">
          {new Date(startDate).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </div>
        <button
          className="flex-1 bg-mlb-blue text-white active:bg-mlb-blue font-bold uppercase text-xs p-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          onClick={() => {
            router.push(`/game/${id}`);
          }}
        >
          Play
        </button>
      </div>
    </div>
  );
}

export default GameSchedule;
