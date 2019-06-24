import React, { useReducer } from "react";

import { initialState, appReducer, Context } from "./data/store";

import styled, { ThemeProvider } from "styled-components";
import { Light } from "./theme/Light";
import GlobalStyle from "./styles/Global";

import Header from "./components/Header";
import Display from "./sides/Display";
import Contoller from "./sides/Controller";


const PageHolder = styled.div`
  display:grid;
  height: 100vh;
  grid-template-rows: 60px auto;
`
const ContentHolder = styled.div`
  display:grid;
  grid-template-columns: auto 300px;
`

function App() {
  const [store, dispatch] = useReducer(appReducer, initialState);
  return (
    <PageHolder>
      <Context.Provider value={{ store, dispatch }}>
        <ThemeProvider theme={Light}>
          <>
          <GlobalStyle />
          <Header />
          <ContentHolder>
            <Display />
            <Contoller />
          </ContentHolder>
          </>
        </ThemeProvider>
      </Context.Provider>
    </PageHolder>
  );
}

export default App;
