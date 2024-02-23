import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {StreamChat} from "stream-chat";
import {ChannelList, Chat} from "stream-chat-react";
import Cookies from "universal-cookie";
import {ChannelContainer,ChannelListContainer,TeamChannelList,Auth} from "./Components";
function App() {
  const [count, setCount] = useState(0)
  const apiKey="4y7uwz3twmtx";
  const chatRoom=StreamChat.getInstance(apiKey);
  const authToken=false;


  // if (!authToken){
  //   return <Auth/>
  // }

  return (
    <>
      <div className='app__wrapper'>
          <Chat client={chatRoom} theme='team light'>
             <ChannelListContainer/>
             <ChannelContainer/>
            
          </Chat>
      </div>
    </>
  )
}

export default App
