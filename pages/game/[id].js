import { useRouter } from "next/router";

export default function Game() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>GAME: {id}</h1>
    </div>
  );
}
