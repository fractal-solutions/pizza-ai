import { createSignal, createMemo } from 'solid-js'
import { render } from 'solid-js/web'
import './App.css'
import TopBar from './components/topbar'
import BottomNav from './components/bottomnav'

const [userInput, setUserInput] = ("")
const [messages, setMessages] = createSignal([])

function Chat() {
    
    const initMessage = {
        actor: 1 ,
        message: "Hello, welcome to pizza.ai"
    }
    const initReply = {
        actor: 2 ,
        message: "Hi, I would like a pizza, kindly"
    }
    setMessages([initMessage,initReply])
    const m = messages()
    m.push(initMessage)
    setMessages(m)
    console.log(messages())
  
    return (
      <>
        <TopBar/>
            <div className="p-6 pt-20 pb-20 mb-8 scroll-auto overflow-x-hidden overflow-y-scroll snap-y snap-mandatory" id="chat">
                <For each={messages()}>{ 
                    (payload,i) => 
                    payload.actor === 1 ? <AIChatBubble payload = {payload} setMessages = {setMessages}/> : <UserChatBubble payload = {payload}  setMessages = {setMessages}/> 
                    }
                </For>
                
            </div>
            <UserInputBox/>
        <BottomNav/>
      </>
    )
}


function UserInputBox() {
    const [value, setValue] = createSignal('')
    const update = (value) => {
        const x = {actor: 2, message: value} 
        setMessages([...messages(),x])
        console.log(messages())
        setValue('')
        document.getElementById("user-input").value = ''
        document.getElementById("chat").lastElementChild.scrollIntoView()
    }

    return (
        <div className="fixed bottom-12 pl-6 -pr-4 w-full bg-white z-50">
            <input id="user-input" type="text" placeholder="Type your message..." className="input input-sm input-bordered w-9/12 pb-1" onInput={(e) => {
                setValue(e.target.value)
                //console.log(value())
            }}/>
            <button className="btn btn-ghost w-2/12 ml-2 pb-1 text-xl" onClick={() => update(value())}>📤</button>
        </div>
    )
}

function AIChatBubble(props) {

    return (
        <div className="chat chat-start scroll-mb-8 snap-end">
            <div className="chat-bubble chat-bubble-info">{props.payload.message}</div>
        </div>

    )
}

function UserChatBubble(props) {

    return (
        <div className="chat chat-end scroll-mb-8 snap-end">
            <div className="chat-bubble">{props.payload.message}</div>
        </div>
    )
}

  
  
  export default Chat