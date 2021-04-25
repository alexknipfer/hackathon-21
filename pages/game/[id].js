import { useRouter } from "next/router";
import ImageMapper from "react-image-mapper";
import useSWR from "swr";

import UserScore from "../../components/userScore";
import DefaultLayout from "../../layouts/DefaultLayout";
import { postRequest } from "../../lib/fetch";
import { useUser } from "../../provider/User";

export default function Game() {
  const router = useRouter();
  const { id } = router.query;
  const { user } = useUser();
  const { data } = useSWR(
    id
      ? `https://hackathon-ascendum.ue.r.appspot.com/v1/api/game/${id}/moundGame`
      : null
  );

  if (!data) {
    return null;
  }

  const handleSubmitScore = async (submission) => {
    if (!data) {
      return;
    }

    const currentRoundId =
      data.moundGameResults[data.moundGameResults.length - 1].id;

    try {
      await postRequest(`/game/moundResult/${currentRoundId}/submit`, {
        username: user,
        submission,
      });

      alert("You have submitted your score!");
    } catch (error) {
      alert(`Error: ${error}`);
    }
  };

  return (
    <DefaultLayout>
      <div>
        <div className="flex justify-center pb-4">
          <img className="w-6 h-6" src={data.baseballGame.awayTeamLogo} />
          <div className="pl-2">{data.baseballGame.awayTeam}</div>
          <div className="mx-5">@</div>
          <img className="w-6 h-6" src={data.baseballGame.homeTeamLogo} />
          <div className="pl-2">{data.baseballGame.homeTeam}</div>
        </div>
      </div>
      <div>
        <div className="flex justify-center pb-4">
          Hello {user}, Select your pick on or off the mound!
        </div>
      </div>
      <div className="flex justify-center">
        <ImageMapper
          onClick={() => handleSubmitScore("ON")}
          onImageClick={() => handleSubmitScore("OFF")}
          width={320}
          active={false}
          src="/static/images/baseball.png"
          map={{
            name: "map-name",
            areas: [
              {
                name: "5",
                shape: "circle",
                coords: [170, 280, 45],
              },
            ],
          }}
        />
      </div>
      <UserScore
        moundGameId={data.id}
        homeTeam={data.baseballGame.homeTeam}
        awayTeam={data.baseballGame.awayTeam}
      />
    </DefaultLayout>
  );
}
