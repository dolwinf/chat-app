import { Button } from '@mui/material'
import React, { useState } from 'react'
import styled from 'styled-components'
import { auth, db } from '../firebaseConfig'
import firebase from "firebase/compat/app"
import { useAuthState } from 'react-firebase-hooks/auth'

const ChatInput = ({ channelName, channelId, chatRef }) => {

    const [input, setInput] = useState('');
    const [user] = useAuthState(auth)

    const sendMessage = (e) => {
        e.preventDefault()
        if (!channelId) {
            return
        }
        db.collection('rooms').doc(channelId).collection('messages').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            user: user?.displayName,
            userImage: user?.photoURL
        })

        chatRef?.current.scrollIntoView({
            behavior: 'smooth'
        })

        setInput('')
    }

    return (
        <ChatInputContainer>
            
            <form>
                <input value={input} placeholder={`Message #${channelName}`} onChange={(e) => setInput(e.target.value)} />
                <Button type='submit' onClick={sendMessage}>Send Message</Button>
           </form>
        </ChatInputContainer>
    )
}

export default ChatInput

const ChatInputContainer = styled.div`

border-radius: 30px;

> form {
    /* position: relative; */
    display: flex;
    justify-content: center;
}

> form > input {
    position: fixed;
    bottom: 30px;
    width: 60%;
    border: 1px solid gray;
    border-radius: 3px;
    padding: 20px;
    outline: none
}

> form > button {
    display: none;
}

`;