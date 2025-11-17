import { createBrowserRouter } from "react-router";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import MyPage from "../pages/MyPage";
import Layout from "../styles/Layout";
import Member from "../pages/Member";

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
    element: <Layout />,
    children: [
      {
        path: "",
        Component: MyPage,
      },
      {
        path: "members",
        Component: Member,
      },
    ],
  },
  //   {
  //     path: '/pokemon/:name',
  //     Component: PokemonDetail,
  //   },
]);

export default router;
