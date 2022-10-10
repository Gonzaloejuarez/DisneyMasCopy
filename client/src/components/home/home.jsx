import React from "react"
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from "../inicio/login&register/login";
import Register from "../inicio/login&register/register";
export const Home = () => {
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Login />}></Route>
                    <Route path="/register" element={<Register />}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Home