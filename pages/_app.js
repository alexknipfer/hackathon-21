import { SWRConfig } from "swr";
import "../styles/globals.css";
import "tailwindcss/tailwind.css";

import { UserProvider } from "../provider/User";

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <SWRConfig
        value={{
          fetcher: (resource, init) =>
            fetch(resource, init).then((res) => res.json()),
        }}
      >
        <Component {...pageProps} />
      </SWRConfig>
    </UserProvider>
  );
}

export default MyApp;
