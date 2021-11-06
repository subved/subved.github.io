import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import "antd/dist/antd.css";
import { MetamaskStateProvider } from "use-metamask";
import BnxTools from "./BnxTools";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAfA970qMp5tM0hbrLVwtaFaToYz1bnCNA",
  authDomain: "toolcat-28074.firebaseapp.com",
  projectId: "toolcat-28074",
  storageBucket: "toolcat-28074.appspot.com",
  messagingSenderId: "778492543794",
  appId: "1:778492543794:web:986c0f27f7e2034985cd2b",
  measurementId: "G-V6RF47HVR9"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.render(
  <React.StrictMode>
    <MetamaskStateProvider>
      <BnxTools />
    </MetamaskStateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
