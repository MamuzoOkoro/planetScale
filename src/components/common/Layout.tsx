import { Outlet } from "react-router-dom";
import Header from "../static/Header";
import Footer from "../static/Footer";
import Homepage from "../../pages/Homepage";

const Layout = () => {
  return (
    <div>
      {/* <Header/> */}
      <Homepage/>
      <Outlet />
      <Footer/>
    </div>
  );
};

export default Layout;
