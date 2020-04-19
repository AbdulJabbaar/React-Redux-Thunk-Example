import React, { Suspense } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./App.css";
import logo from "./logo.svg";
import { appStore } from "./config/AppStore";
import Routes from "./routes/Routes";
import { RouteNames } from "./utils/Constants";

function App() {
  return (
    <Provider store={appStore}>
      {
        <Router>
          <Suspense fallback={<div>Loading...</div>}>
            <div>
              <header className="App-header" style={{ minHeight: "40px" }}>
                <ul>
                  <li>
                    <Link to={RouteNames.Login}>Login</Link>
                  </li>
                  <li>
                    <Link to={RouteNames.Dashboard}>Dashboard</Link>
                  </li>
                </ul>
                <img src={logo} className="App-logo" alt="logo" />
              </header>
              <Routes />
            </div>
          </Suspense>
        </Router>
      }
      {
        // <Suspense fallback={<div>Loading...</div>}>
        //   <Router>
        //     <div>
        //       <header className="App-header" style={{ minHeight: "40px" }}>
        //         <ul>
        //           <li>
        //             <Link to={RouteNames.Login}>Login</Link>
        //           </li>
        //           <li>
        //             <Link to={RouteNames.Dashboard}>Dashboard</Link>
        //           </li>
        //         </ul>
        //         <img src={logo} className="App-logo" alt="logo" />
        //       </header>
        //       {
        //         // <Switch>
        //         //   <Route
        //         //     path={["/", RouteNames.Login]}
        //         //     exact
        //         //     render={() => <Login />}
        //         //   />
        //         //   <Route
        //         //     path={RouteNames.Dashboard}
        //         //     exact
        //         //     render={() => <Home />}
        //         //   />
        //         // </Switch>
        //       }
        //       <Routes />
        //     </div>
        //   </Router>
        // </Suspense>
      }
    </Provider>
  );
}

export default App;
