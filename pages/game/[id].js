import { useRouter } from "next/router";
import ImageMapper from "react-image-mapper";

import UserScore from "../../components/userScore";
import DefaultLayout from "../../layouts/DefaultLayout";

export default function Game() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <DefaultLayout>
      <div className="flex justify-center">
        <ImageMapper
          onClick={(area) => console.log("AREA: ", area)}
          onImageClick={() => console.log("CLICKED OUTSIDE IMAGE!!!")}
          onLoad={() => console.log("LOADED")}
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
      <UserScore />
    </DefaultLayout>
  );
}
