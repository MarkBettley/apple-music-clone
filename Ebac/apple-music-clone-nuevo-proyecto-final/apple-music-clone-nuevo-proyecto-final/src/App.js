import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import GlobalStyle from "./styles/GlobalStyle";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import SearchResults from "./components/SearchResults/SearchResults";
import SongDetail from "./components/SongDetail/SongDetail";

function App() {
  const [query, setQuery] = useState("");
  const [selectedSong, setSelectedSong] = useState(null);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <SearchBar onSearch={setQuery} />
      <SearchResults query={query} onSelectSong={setSelectedSong} />
      {selectedSong && (
        <SongDetail song={selectedSong} onClose={() => setSelectedSong(null)} />
      )}
    </ThemeProvider>
  );
}

export default App;
