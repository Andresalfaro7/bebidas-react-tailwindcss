import { Routes, Route } from 'react-router-dom'
import Home from "../views/Home";

const Router = () =>{
    return(
        <div>
            <Routes>
                <Route path='/' element={<Home/>} />
            </Routes>
        </div>
    )
}

export default Router;