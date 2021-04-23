import { useRouter } from "next/router";
import DefaultLayout from "../../layouts/DefaultLayout";

export default function Game() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <DefaultLayout>
      <h1>GAME: {id}</h1>
    </DefaultLayout>
  );
}
