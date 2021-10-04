import React from 'react'
import styled from 'styled-components'
import { Avatar } from '@mui/material'
import { AccessTime } from '@mui/icons-material'
import SearchIcon from '@mui/icons-material/Search';
import { HelpOutline } from '@mui/icons-material';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebaseConfig';
const Header = () => {

    const [user] = useAuthState(auth)
    const [display, setDisplay] = React.useState(false)
    return (
        <HeaderContainer>
            <HeaderLeft>
                {/* <HeaderAvatar onClick={() => auth.signOut()} src={user?.photoURL} alt={user?.displayName} /> */}
                {/* <AccessTime /> */}
            </HeaderLeft>

            <HeaderSearch>
                <SearchIcon />
                <input placeholder="Search Chat" />
            </HeaderSearch>
            <HeaderRight>
                {display && <span onClick={() => auth.signOut()} style={{ marginRight: '1em', marginBottom: '10px', cursor: 'pointer'}}>Logout</span>}
                 <HeaderAvatar onClick={() => setDisplay(!display)} src={user?.photoURL} alt={user?.displayName} />
            </HeaderRight>
        </HeaderContainer>
    )
}

export default Header



const HeaderRight = styled.div`
flex: 0.3;
display: flex;
align-items: flex-end;
justify-content: end;
margin-right: 2em;

> .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 100px;
}
`;

const HeaderSearch = styled.div`

display: flex;
flex: 0.4;
opacity: 1;
border-radius: 6px;
text-align: center;
text-align: 0 50px;
border: 1px gray solid;
color: gray;

> input {
    background-color: transparent;
    border: none;
    text-align: center;
    min-width: 30vw;
    outline: 0;
}

`;

const HeaderContainer = styled.div`
display: flex;
position: fixed;
width: 100%;
align-items: center;
justify-content: space-between;
padding: 10px 0;
background-color: var(--slack-color);
color: white;
`;

const HeaderLeft = styled.div`
flex: 0.3;
display: flex;
align-items: center;
margin-left: 20px;

> .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 30px;
}
`;

const HeaderAvatar = styled(Avatar)`
cursor: pointer;

:hover {
    opacity: 0.8px;
}

`;