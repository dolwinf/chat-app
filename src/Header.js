import React from 'react'
import styled from 'styled-components'
import { Avatar } from '@mui/material'
import { AccessTime } from '@mui/icons-material'
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
    return (
        <HeaderContainer>
            <HeaderLeft>
                <HeaderAvatar />
                <AccessTime />
            </HeaderLeft>

            <HeaderSearch>
                <SearchIcon />
                <input placeholder="Search Chat" />
            </HeaderSearch>
        </HeaderContainer>
    )
}

export default Header

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