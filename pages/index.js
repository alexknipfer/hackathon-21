import Head from "next/head";
import { Fragment, useState } from "react";
import useSWR from "swr";
import GameSchedule from "../components/gameSchedule.js";

import DefaultLayout from "../layouts/DefaultLayout";
import { useUser } from "../provider/User";

export default function Home() {
  const { data } = useSWR(
    " https://hackathon-ascendum.ue.r.appspot.com/v1/api/game/all"
  );
  const [value, setValue] = useState("");
  const { user, login } = useUser();

  if (!data) {
    // Data is loading....
    return <div>Data is loading... </div>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("HANDLE SUBMIT! ", value);
    login(value);
  };

  return (
    <DefaultLayout>
      {!user ? (
        <form onSubmit={handleSubmit} className="flex flex-col">
          <input
            type="text"
            value={value}
            placeholder="Enter a username"
            className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
            onChange={(e) => setValue(e.target.value)}
          />
          <button
            type="submit"
            className="bg-mlb-blue text-white active:bg-mlb-blue font-bold uppercase text-xs px-4 py-3 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 mt-4"
          >
            Login
          </button>
        </form>
      ) : (
        <Fragment>
          {data.map((game, index) => {
            return (
              <GameSchedule key={`${game.startDate}-${index}`} {...game} />
            );
          })}
        </Fragment>
      )}
    </DefaultLayout>
  );
}
