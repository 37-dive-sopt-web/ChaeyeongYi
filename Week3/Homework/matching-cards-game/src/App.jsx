import { ThemeProvider } from "@emotion/react";
import { theme } from "./styles/theme";
import Header from "./components/header/Header";
import GamePage from "./components/game/GamePage";
import RankPage from "./components/ranking/RankPage";
import { useState } from "react";

function App() {
  const [activePage, setActivePage] = useState("game");

  return (
    <ThemeProvider theme={theme}>
      <Header activePage={activePage} onPageChange={setActivePage} />
      {activePage === "game" ? <GamePage /> : <RankPage />}
    </ThemeProvider>
  );
}

export default App;
