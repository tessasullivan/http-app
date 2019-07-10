import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import * as Sentry from '@sentry/browser';
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

Sentry.init({dsn: "https://d2df9a7d37914f65885e0d2c949123ac@sentry.io/1502050"});

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
