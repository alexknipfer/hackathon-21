import useSWR from "swr";
import { useRouter } from "next/router";
import { useUser } from "../provider/User";
function UserScore({ moundGameId, homeTeam, awayTeam }) {
  const router = useRouter();
  const { user } = useUser();
  const { id } = router.query;
  const { data } = useSWR(
    id && user
      ? `https://hackathon-ascendum.ue.r.appspot.com/v1/api/game/moundGame/${moundGameId}/score?userName=${user}`
      : null
  );

  const getScoreForIndex = (index) => {
    if (!data || !data[index]) {
      return "";
    } else if (data[index].score === 0) {
      return "0";
    } else {
      return `${data[index].score}`;
    }
  };

  const totalforTeam = (isHomeTeam) => {
    if (data) {
      var oddOnes = [],
        evenOnes = [];
      for (var i = 0; i < data.length; i++) {
        (i % 2 == 0 ? evenOnes : oddOnes).push(data[i].score);
      }
      if (isHomeTeam) {
        return evenOnes.reduce((a, b) => a + b, 0);
      } else {
        return oddOnes.reduce((a, b) => a + b, 0).toString();
      }
    } else {
      return "";
    }
  };

  return (
    <div className="mt-10">
      <table id="score" className="border-2 w-full text-center">
        <tbody>
          <tr>
            <th>Team</th>
            <th>1st</th>
            <th>2nd</th>
            <th>3rd</th>
            <th>4th</th>
            <th>5th</th>
            <th>6th</th>
            <th>7th</th>
            <th>8th</th>
            <th>9th</th>
            <th>Tot</th>
          </tr>
          <tr>
            <td className="border-2  pl-1 h-6 w-16">{awayTeam}</td>
            <td className="border-2  pl-1 h-6">{getScoreForIndex(0)}</td>
            <td className="border-2  pl-1 h-6">{getScoreForIndex(2)}</td>
            <td className="border-2  pl-1 h-6">{getScoreForIndex(4)}</td>
            <td className="border-2  pl-1 h-6">{getScoreForIndex(6)}</td>
            <td className="border-2  pl-1 h-6">{getScoreForIndex(8)}</td>
            <td className="border-2  pl-1 h-6">{getScoreForIndex(10)}</td>
            <td className="border-2  pl-1 h-6">{getScoreForIndex(12)}</td>
            <td className="border-2  pl-1 h-6">{getScoreForIndex(14)}</td>
            <td className="border-2  pl-1 h-6">{getScoreForIndex(16)}</td>
            <td className="border-2  pl-1 h-6">{totalforTeam(false)}</td>
          </tr>
          <tr>
            <td className="border-2  pl-1 h-6">{homeTeam}</td>
            <td className="border-2  pl-1 h-6">{getScoreForIndex(1)}</td>
            <td className="border-2  pl-1 h-6">{getScoreForIndex(3)}</td>
            <td className="border-2  pl-1 h-6">{getScoreForIndex(5)}</td>
            <td className="border-2  pl-1 h-6">{getScoreForIndex(7)}</td>
            <td className="border-2  pl-1 h-6">{getScoreForIndex(9)}</td>
            <td className="border-2  pl-1 h-6">{getScoreForIndex(11)}</td>
            <td className="border-2  pl-1 h-6">{getScoreForIndex(13)}</td>
            <td className="border-2  pl-1 h-6">{getScoreForIndex(15)}</td>
            <td className="border-2  pl-1 h-6">{getScoreForIndex(17)}</td>
            <td className="border-2  pl-1 h-6">{totalforTeam(true)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default UserScore;
