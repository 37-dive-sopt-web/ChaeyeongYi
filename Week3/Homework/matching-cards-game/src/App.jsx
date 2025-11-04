import { ThemeProvider } from "@emotion/react";
import { theme } from "./styles/theme";
import Header from "./components/header/Header";
import GameCard from "./components/game/GameCard";
import { useState } from "react";
function App() {
  const [activePage, setActivePage] = useState("game");

  return (
    <ThemeProvider theme={theme}>
      <Header handlePageChange={setActivePage} />
      <main />
      {activePage === "game" ? <GameCard/> : <div>랭킹페이지</div>}
    </ThemeProvider>
  );
}

export default App;
