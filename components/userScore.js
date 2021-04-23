import useSWR from "swr";
import { useRouter } from "next/router";
import { useUser } from "../provider/User";
function UserScore() {
  const router = useRouter();
  const { user } = useUser();
  const { id } = router.query;
  const { data } = useSWR(
    id && user
      ? `https://hackathon-ascendum.ue.r.appspot.com/v1/api/game/moundGame/${id}/score?userName=${user}`
      : null
  );

  if (!data) {
    return null;
  }

  return (
    <div className="mt-10">
      <table id="score" className="border-2 w-full">
        <tbody>
          <tr>
            <th>1st</th>
            <th>2nd</th>
            <th>3rd</th>
            <th>4th</th>
            <th>5th</th>
            <th>6th</th>
            <th>7th</th>
            <th>8th</th>
            <th>9th</th>
          </tr>
          <tr>
            <td className="border-2  pl-1">
              {data[0] && data[0].score ? data[0].score : ""}
            </td>
            <td className="border-2  pl-1">
              {data[2] && data[2].score ? data[2].score : ""}
            </td>
            <td className="border-2  pl-1">
              {data[4] && data[4].score ? data[4].score : ""}
            </td>
            <td className="border-2  pl-1">
              {data[6] && data[6].score ? data[6].score : ""}
            </td>
            <td className="border-2  pl-1">
              {data[8] && data[8].score ? data[8].score : ""}
            </td>
            <td className="border-2  pl-1">
              {data[10] && data[10].score ? data[10].score : ""}
            </td>
            <td className="border-2  pl-1">
              {data[12] && data[12].score ? data[12].score : ""}
            </td>
            <td className="border-2  pl-1">
              {data[14] && data[14].score ? data[14].score : ""}
            </td>
            <td className="border-2  pl-1">
              {data[16] && data[16].score ? data[16].score : ""}
            </td>
          </tr>
          <tr>
            <td className="border-2  pl-1">
              {data[1] && data[1].score ? data[1].score : ""}
            </td>
            <td className="border-2  pl-1">
              {data[3] && data[3].score ? data[3].score : ""}
            </td>
            <td className="border-2  pl-1">
              {data[5] && data[5].score ? data[5].score : ""}
            </td>
            <td className="border-2  pl-1">
              {data[7] && data[7].score ? data[7].score : ""}
            </td>
            <td className="border-2  pl-1">
              {data[9] && data[9].score ? data[9].score : ""}
            </td>
            <td className="border-2  pl-1">
              {data[11] && data[11].score ? data[11].score : ""}
            </td>
            <td className="border-2  pl-1">
              {data[13] && data[13].score ? data[13].score : ""}
            </td>
            <td className="border-2  pl-1">
              {data[15] && data[15].score ? data[15].score : ""}
            </td>
            <td className="border-2  pl-1">
              {data[17] && data[17].score ? data[17].score : ""}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
import { formatWithValidation } from "next/dist/next-server/lib/utils";

export default UserScore;
