import React from "react"
import { BrowserRouter as Router, Route ,Routes , Link, Navigate} from 'react-router-dom'
import LoginPage from "./LoginPage"
import SignUp from "./SignUp"
import Profile from "./Profile"

export default function Routess() {

    return (
        <Router>
         
        <Routes> 
        <Route path="/redux"/>
         <Route path="/LoginPage"  element={< LoginPage/>}/>
         <Route path="/" element={< SignUp />}/>
         <Route path="/Profile/:id" element= {<Profile />} />
        </Routes>
        </Router>
    )


}