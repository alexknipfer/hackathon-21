import { Fragment } from "react";
import Image from "next/image";

export default function DefaultLayout({ children }) {
  return (
    <Fragment>
      <nav className="bg-mlb-blue h-16 flex justify-center py-2">
        <Image width={90} height={100} src="/static/images/mlb_logo.png" />
      </nav>
      <main className="flex flex-col px-5 py-10">{children}</main>
    </Fragment>
  );
}
