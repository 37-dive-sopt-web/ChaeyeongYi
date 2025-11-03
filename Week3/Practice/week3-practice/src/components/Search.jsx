import { css } from "@emotion/react";

const searchContainerStyle = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: end;
  width: 100%;
  gap: 0.5rem;
`;

const buttonStyle = css`
  width: 5rem;
  height: 2rem;
  border-radius: 0.5rem;
  border: none;
  background-color: #3b82f6;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2563eb;
  }
`;

const inputStyle = css`
  width: 40rem;
  border-radius: 0.5rem;
  border: 1px solid #d1d5db;
  padding: 0.5rem 1rem;
  font-size: 1rem;
`;

const Search = ({ search, handleSearchChange, handleSearch }) => {
  return (
    <div css={searchContainerStyle}>
      <input
        css={inputStyle}
        type="text"
        style={{ marginTop: "80px" }}
        value={search}
        onChange={handleSearchChange}
      />
      <button css={buttonStyle} onClick={handleSearch}>
        검색
      </button>
    </div>
  );
};

export default Search;
