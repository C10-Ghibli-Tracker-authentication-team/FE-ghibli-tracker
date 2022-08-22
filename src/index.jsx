import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain="fe-ghibli-tracker.us.auth0.com"
    clientId="wSWws7UuTIbhpmDkLZKz3oAhA41jyscW"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);