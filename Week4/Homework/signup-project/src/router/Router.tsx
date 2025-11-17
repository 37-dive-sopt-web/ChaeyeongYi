import { createBrowserRouter } from "react-router";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import MyPage from "../pages/MyPage";

const router = createBrowserRouter([
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/signup",
    Component: SignUp,
  },
  {
    path: "/mypage",
    Component: MyPage,
  },
  //   {
  //     path: '/pokemon/:name',
  //     Component: PokemonDetail,
  //   },
]);

export default router;
