import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
} from "react-router-dom";
import Layout from "../Project/Main/Layout";
import Home from '../Project/Home/Home';
import Contact from '../Project/Contact/Contact';
import ErrorPage from '../shared/components/ErrorPage/ErrorPage';

const Router = () => {
    return (
        <BrowserRouter basename="/">
            <Routes>
                <Route path="/" element={<Navigate replace to="/app" />} />
                <Route path="/app" element={<Layout />}></Route>
                <Route path="/home" element={<Home />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
                <Route path="*" element={<ErrorPage />}></Route>
            </Routes>
        </BrowserRouter>
    )
};

export default Router;