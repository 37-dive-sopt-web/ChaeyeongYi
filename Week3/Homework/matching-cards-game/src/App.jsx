import { ThemeProvider } from "@emotion/react";
import { theme } from "./styles/theme";
import Header from "./components/header/Header";
import GameCard from "./components/game/GameCard";
import RankCard from "./components/ranking/RankCard";
import { useState } from "react";

function App() {
  const [activePage, setActivePage] = useState("game");

  return (
    <ThemeProvider theme={theme}>
      <Header activePage={activePage} onPageChange={setActivePage} />
      <main />
      {activePage === "game" ? <GameCard /> : <RankCard />}
    </ThemeProvider>
  );
}

export default App;
