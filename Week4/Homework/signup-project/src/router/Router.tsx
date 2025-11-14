import { createBrowserRouter } from "react-router";
import Login from "../pages/Login";

const router = createBrowserRouter([
  {
    path: "/login",
    Component: Login,
  },
  //   {
  //     path: '/pokemon/:name',
  //     Component: PokemonDetail,
  //   },
]);

export default router;
