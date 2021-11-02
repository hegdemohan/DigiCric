import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
// import { renderRoutes } from 'react-router-config';
import "./App.scss";
import { PacmanLoader } from "react-spinners";
import CommonService from "./commonService";

const loading = () => (
  <div className="animated fadeIn pt-3 text-center">Loading...</div>
);

// Containers
const DefaultLayout = React.lazy(() => import("./containers/DefaultLayout"));

// Pages
const Login = React.lazy(() => import("./views/Pages/Login"));
const Register = React.lazy(() => import("./views/Pages/Register"));
const Page404 = React.lazy(() => import("./views/Pages/Page404"));
const Page500 = React.lazy(() => import("./views/Pages/Page500"));

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loader: false
    };

    this.setLoader = this.setLoader.bind(this);
  }

  componentDidMount() {
    CommonService.setAppContext(this);
  }

  setLoader = val => {
    this.setState({ loader: val });
  };

  render() {
    return (
      <HashRouter>
        <React.Suspense fallback={loading()}>
          {this.state.loader ? (
            <div
              style={{
                height: "100%",
                width: "100%",
                position: "fixed",
                zIndex: 9999,
                backgroundColor: "black",
                opacity: 0.5
              }}
            >
              <span
                style={{
                  position: "fixed",
                  top: "50%",
                  left: "50%",
                  marginTop: "-50px",
                  marginLeft: "-100px"
                }}
              >
                <PacmanLoader
                  sizeUnit={"px"}
                  size={25}
                  margin={"2px"}
                  color={"white"}
                ></PacmanLoader>
              </span>
            </div>
          ) : null}
          <Switch>
            <Route
              exact
              path="/login"
              name="Login Page"
              render={props => <Login {...props} />}
            />
            <Route
              exact
              path="/register"
              name="Register Page"
              render={props => <Register {...props} />}
            />
            <Route
              exact
              path="/404"
              name="Page 404"
              render={props => <Page404 {...props} />}
            />
            <Route
              exact
              path="/500"
              name="Page 500"
              render={props => <Page500 {...props} />}
            />
            <Route
              path="/"
              name="Home"
              render={props => <DefaultLayout {...props} />}
            />
          </Switch>
        </React.Suspense>
      </HashRouter>
    );
  }
}

export default App;
