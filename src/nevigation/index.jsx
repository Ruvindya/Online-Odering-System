import { BrowserRouter, Route, Routes} from "react-router-dom";
import { Header } from "../componnts/Header";
import Cart from "../pages/Cart";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Menu from "../pages/Menu";
import PaymentSuccess from "../pages/PaymentSuccess";
import Register from "../pages/Register";

const Nevigation = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/" element={<Cart />} />
                <Route path="/" element={<Login />} />
                <Route path="/" element={<Menu />} />
                <Route path="/" element={<PaymentSuccess />} />
                <Route path="/" element={<Register />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Nevigation;