import React from "react";
import { CardCreatorPage } from "../pages/card-creator-page";
import { ThemeProvider } from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { CardViewPage } from "../pages/card-view-page";
import { ChatPage } from "../pages/chat-page";

function App() {
  return (
    <ThemeProvider
      theme={{
        backgroundColor: "#00112A",
        color: "#ffffff",
        font: "Montserrat",
      }}
    >
      <BrowserRouter>
        <Switch>
          <Route path="/card">
            <CardViewPage />
          </Route>
          <Route path="/chat">
            <ChatPage />
          </Route>
          <Route path="/">
            <CardCreatorPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
