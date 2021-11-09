import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import { MetamaskStateProvider } from "use-metamask";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import App from "./App";
import { HashRouter } from "react-router-dom";
import { LocaleProvider } from "@douyinfe/semi-ui";
import zh_CN from '@douyinfe/semi-ui/lib/es/locale/source/zh_CN';

console.log(zh_CN)
const firebaseConfig = {
  apiKey: "AIzaSyAfA970qMp5tM0hbrLVwtaFaToYz1bnCNA",
  authDomain: "toolcat-28074.firebaseapp.com",
  projectId: "toolcat-28074",
  storageBucket: "toolcat-28074.appspot.com",
  messagingSenderId: "778492543794",
  appId: "1:778492543794:web:986c0f27f7e2034985cd2b",
  measurementId: "G-V6RF47HVR9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app); // const analytics = 

// cookie.save(
//   "__cf_bm",
//   "GsRqSxteCn0jAn6MirQwPN5U7oIoHz8fhKhmJlIEbTs-1636193240-0-AYOJbgCWeGfteuz73Jfx/S5vvg7gOMytot7MGKxFi5rnEP0kC8fFIb7T0F6qyUuQ1zS4+1EikPCbmnmd3pQnJeHMTdaF15h2drplyiQ9f2TmjqYcZ6Gjea/mJlYeYoFp+g==",
// );
// cookie.save(
//   "cf_clearance",
//   "n8ayhkgV4Q40D2J8L5CcMnD70HHjbEm64VpRuWMvZY8-1636191861-0-150"
// );
// cookie.save(
//   "cf_chl_seq_eed15b305183c47",
//   "c501ce91fdf425e"
// );
// setTimeout(() => {
//   cookie.remove("_ga_V6RF47HVR9");
//   cookie.remove("_ga");
// }, 4000);
ReactDOM.render(
  <React.StrictMode>
    <LocaleProvider>
      <HashRouter>
        <MetamaskStateProvider>
          <App />
        </MetamaskStateProvider>
      </HashRouter>
    </LocaleProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
