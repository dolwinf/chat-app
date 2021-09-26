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
import Login from './components/Login'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from './firebaseConfig';



function App() {

  const [user, loading] = useAuthState(auth)

  if (!user) {
    return ( <AppLoading>
              <AppLoadingContents>
                  Loading........
              </AppLoadingContents>
            </AppLoading>)
  }

  return (
    <Router>
      {!user ? (<Login />) : <div>
        <Header />
        <AppBody>
          <SideBar />
          <Switch>
            <Route path="/" exact>
             <Chat />
            </Route>
         </Switch>
        </AppBody>
    </div>}
      
  </Router>
  );
}

export default App;

const AppBody = styled.div`

display: flex;
height: 100vh;

`;

const AppLoading = styled.div``;
const AppLoadingContents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  

`;