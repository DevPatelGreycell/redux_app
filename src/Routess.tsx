import React from "react"
import { BrowserRouter as Router, Route ,Routes , Link, Navigate} from 'react-router-dom'
import LoginPage from "./LoginPage"
import SignUp from "./SignUp"

export default function Routess() {

    return (
        <Router>
         
        <Routes> 
         <Route path="/LoginPage"  element={< LoginPage/>}/>
         <Route path="/" element={< SignUp />}/>
        </Routes>
        </Router>
    )


}