import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RecoilRoot } from "recoil";
import router from "./Router.tsx";
// router를 여기서 쓰면 모든 페이지는 reactrouterdom의 영향을 받는다
// router안에 root도 있고 이런 저런 페이지가 있기 때문에 root를 지우고 RouterProvider만 썼다

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <RecoilRoot>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </RecoilRoot>
);
