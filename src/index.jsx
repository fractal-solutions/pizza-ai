/* @refresh reload */
import { render } from 'solid-js/web'
import { lazy } from "solid-js";
import { Router, Route } from "@solidjs/router"
import './index.css'
import App from './App'
//import Chat from './Chat'
const Chat = lazy(() => import("./Chat"))

const root = document.getElementById('root')

render(
        () => (
            <Router>
                
                    <Route path="/" component={App} />
                    <Route path="/Chat" component={Chat} />
                
            </Router>  
        ),   
        root
    )
