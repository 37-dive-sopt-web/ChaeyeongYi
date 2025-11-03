import Header from "./components/Header";
import Card from "./components/Card";
import Search from "./components/Search";
import { members } from "./mocks/member";
import useSearch from "./hooks/useSearch";
function App() {
  const { search, filteredData, handleSearchChange, handleSearch } =
    useSearch(members);
  return (
    <>
      <Header />
      <Search
        search={search}
        handleSearchChange={handleSearchChange}
        handleSearch={handleSearch}
      />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          marginTop: "10px",
        }}
      >
        {filteredData.map((it) => (
          <Card
            key={it.id}
            name={it.name}
            englishName={it.englishName}
            github={it.github}
          />
        ))}
      </div>
    </>
  );
}

export default App;
