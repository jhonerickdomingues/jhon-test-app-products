import "./boot.ts";
import List from "./pages/List.tsx";
import ReactDOM from "react-dom/client";
import "antd/dist/reset.css";
import {
  createBrowserRouter,
  RouterProvider,
  redirect,
} from "react-router-dom";
import { seti18n } from "jhon-test-utils";
import "./style.css";

seti18n();

const router = createBrowserRouter([
  {
    path: ":language",
    loader: async ({ params }) => {
      if (!params.language) return redirect("pt-br");

      if (["pt-br", "en-us"].indexOf(params.language) === -1)
        return redirect("/pt-br");

      return true;
    },
    Component: List,
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
