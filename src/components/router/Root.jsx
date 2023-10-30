import Header from "../header/header";
import { Outlet } from "react-router-dom";

function Root() {
    return (
      <>
        <div className="container">
            <Header />
            <main>
                <Outlet />
            </main>
        </div>
      </>
    );
  }

  export default Root;