import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../../components/NavBar/Navbar";
import "./Layout.scss";
import Footer from "../../components/NavBar/Footer";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function Layout() {
  return (
    <div className="layout">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}


function RequiredAuth() {
  const { currentUser } = useContext(AuthContext);
  // useEffect(() => {
  //   if (!currentUser) {
  //     <Navigate to="/login" />
  //   }
  // }, [currentUser]);

  return (
    !currentUser ? <Navigate to="/login" /> :
      (
        <div className="layout">
          <div className="navbar">
            <Navbar />
          </div>
          <div className="content">
            <Outlet />
          </div>

          <Footer />
        </div>
      )
  );
}
export { Layout, RequiredAuth };
