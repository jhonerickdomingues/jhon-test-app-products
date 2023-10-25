declare global {
  interface Window {
    GLOBAL_VARIABLES: {
      BASE_URL: string;
      HEADERS: any;
    };
  }
}

window.GLOBAL_VARIABLES = {
  BASE_URL: "https://products-test-stafanini.free.beeceptor.com",
  HEADERS: {},
};

import App from "./App.tsx";
import ReactDOM from "react-dom/client";
import "./style.css";
import "antd/dist/reset.css";

import { seti18n } from "jhon-test-utils";

seti18n();
import {
  createBrowserRouter,
  RouterProvider,
  redirect,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: ":language",
    loader: async ({ params }) => {
      if (!params.language) return redirect("pt-br");

      if (["pt-br", "en-us"].indexOf(params.language) === -1)
        return redirect("/pt-br");

      return true;
    },
    Component: App,
  },
  {
    path: "*",
    loader: async () => {
      return redirect("/pt-br");
    },
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
