import Head from "next/head";
import { useState } from "react";
import DefaultLayout from "../layouts/DefaultLayout";
import { useUser } from "../provider/User";

export default function Home() {
  const [value, setValue] = useState("");
  const { user, updateUser } = useUser();

  return (
    <DefaultLayout>
      {!user ? (
        <div className="flex flex-col">
          <input
            type="text"
            value={value}
            placeholder="Enter a username"
            className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
            onChange={(e) => setValue(e.target.value)}
          />
          <button
            className="bg-mlb-blue text-white active:bg-mlb-blue font-bold uppercase text-xs px-4 py-3 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 mt-4"
            type="button"
            onClick={() => updateUser(value)}
          >
            Login
          </button>
        </div>
      ) : (
        <h1>Mound Pro</h1>
      )}
    </DefaultLayout>
  );
}
