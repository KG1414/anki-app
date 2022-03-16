import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import Layout from '../Project/Layout/Layout';
import Home from '../Project/Home/Home';
import Contact from '../Project/Contact/Contact';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Layout />}></Route>
                <Route path="/home" element={<Home />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
            </Routes>
        </BrowserRouter>
    )
};

export default Router;