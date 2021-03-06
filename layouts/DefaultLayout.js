import { Fragment } from "react";
import Image from "next/image";

export default function DefaultLayout({ children }) {
  return (
    <Fragment>
      <nav className="bg-mlb-blue h-16 flex justify-center py-2 fixed w-full z-10">
        <Image width={90} height={110} src="/static/images/mlb_logo.png" />
      </nav>
      <main className="flex flex-col px-3 pb-5 pt-24">{children}</main>
    </Fragment>
  );
}
