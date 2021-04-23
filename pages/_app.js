import "../styles/globals.css";
import "tailwindcss/tailwind.css";

import { UserProvider } from "../provider/User";

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
}

export default MyApp;
