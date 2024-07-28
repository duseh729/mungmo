import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue } from "recoil";

import "./App.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import AppRouter from "./router/router.jsx";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <RecoilRoot>
        <main id="main">
          <div id="web-view">
            <AppRouter />
          </div>
        </main>
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default App;
