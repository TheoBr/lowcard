import React from "react";
import { CardPage } from "../features/cards/card-page";
import { ThemeProvider } from "styled-components";

function App() {
  return (
    <ThemeProvider
      theme={{
        backgroundColor: "#00112A",
        color: "#ffffff",
        font: "Montserrat",
      }}
    >
      <div className="App">
        <CardPage />
      </div>
    </ThemeProvider>
  );
}

export default App;
