import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import Layout from "../Project/Main/Layout";
import Home from '../Project/Home/Home';
import Contact from '../Project/Contact/Contact';
import ErrorPage from '../shared/components/ErrorPage/ErrorPage';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Layout />}></Route>
                {/* <Route exact path="/topic/:topic" element={}></Route> */}
                <Route path="/home" element={<Home />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
                <Route path="*" element={<ErrorPage />}></Route>
            </Routes>
        </BrowserRouter>
    )
};

export default Router;