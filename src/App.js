
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FirstPage from "./components/Pages/FirstPage";
import SecondPage from "./components/Pages/SecondPage";



function App() {


    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element = {<FirstPage></FirstPage>}></Route>
                <Route path="/S" element = {<SecondPage></SecondPage>}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;