import { FiberManualRecord, Create, InsertComment, Inbox, Drafts, BookmarkBorder, PeopleAlt, Apps, FileCopy, ExpandLess, ExpandMore, Add } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import SideBarOptions from './SideBarOptions'
import { useCollection } from 'react-firebase-hooks/firestore'
import { db } from '../firebaseConfig'

    

const Sidebar = () => {

    const [channels, loading, error] = useCollection(db.collection('rooms'))
    console.log("Channels", channels)
    

    return (
        <SidebarContainer>
            <SidebarHeader>
                <SidebarInfo>
                    <h2>D's Dungeon</h2>
                    <h3>
                        <FiberManualRecord />
                        Dolwin Fernandes
                    </h3>
                </SidebarInfo>
                <Create />
            </SidebarHeader>

            <SideBarOptions Icon={InsertComment} title="Threads" />
            <SideBarOptions Icon={Inbox} title="Mentions and Reactions" />
            <SideBarOptions Icon={Drafts} title="Saved items" />
            <SideBarOptions Icon={BookmarkBorder} title="Channel browser" />
            <SideBarOptions Icon={PeopleAlt} title="People + Users and Groups" />
            <SideBarOptions Icon={Apps} title="Apps" />
            <SideBarOptions Icon={FileCopy} title="File browser" />
            <SideBarOptions Icon={ExpandLess} title="Show less" />
            <hr />
            <SideBarOptions Icon={ExpandMore} title='Channels' />
            <hr />
            <SideBarOptions Icon={Add} addChannelOption title='Add Channel' />

            {channels?.docs.map((doc) => 
                <SideBarOptions key={doc.id} id={doc.id} title={doc.data().name} />
            )}
        </SidebarContainer>
    )
}

export default Sidebar

const SidebarContainer = styled.div`

background-color: var(--slack-color);
color: white;
flex: 0.3;
margin-top: 60px;
max-width: 260px;

> hr {
    margin-top: 10px;
    margin-bottom: 10px;
    opacity: 0.3;
}
`;

const SidebarHeader = styled.div`
display: flex;
border-bottom: 1px solid #49274b;
padding: 13px;

> .MuiSvgIcon-root {
    padding: 8px;
    color: #49274b;
    font-size: 18px;
    background: white;
    border-radius: 999px;
}
`;

const SidebarInfo = styled.div`

flex: 1;

> h2 {
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 5px;
}

> h3 {
    display: flex;
    font-size: 13px;
    font-weight: 400;
    align-items: center;
}

> h3 > .MuiSvgIcon-root {
    font-size: 14px;
    margin-top: 1px;
    margin-right: 2px;
    color: green
}
`;