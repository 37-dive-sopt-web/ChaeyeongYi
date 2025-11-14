import { createBrowserRouter } from "react-router";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
const router = createBrowserRouter([
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/signup",
    Component: SignUp,
  },
  //   {
  //     path: '/pokemon/:name',
  //     Component: PokemonDetail,
  //   },
]);

export default router;
