import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header'
import SideBar from './components/Sidebar'
import Chat from './components/Chat'
import styled from 'styled-components'

function App() {
  return (
    <Router>
      <div>
        <Header />
        <AppBody>
          <SideBar />
          <Switch>
            <Route path="/" exact>
             <Chat />
            </Route>
         </Switch>
        </AppBody>
    </div>
  </Router>
  );
}

export default App;

const AppBody = styled.div`

display: flex;
height: 100vh;

`;