import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import Header from './Extends/Header';
import Footer from './Extends/Footer';
import reportWebVitals from './reportWebVitals';

import Minthere from "./Views/Minthere/Index";
import Utility from "./Views/Utility/Index";
import About from "./Views/About/Index";
import FAQ from "./Views/FAQ/Index";
import Roadmap from "./Views/Roadmap/Index";
import Staking from "./Views/Staking/Index";
class Main extends React.Component {
  render() {
    return (
  <BrowserRouter>
   <header className='pageheader'>
      <Header />
    </header>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="minthere" element={<Minthere />} />
      <Route path="Utility" element={<Utility />} />
      <Route path="About" element={<About />} />
      <Route path="FAQ" element={<FAQ />} />
      <Route path="Roadmap" element={<Roadmap />} />
      <Route path="Staking" element={<Staking />} />
    </Routes>
    <footer>
      <Footer />
    </footer>
  </BrowserRouter>
  // document.getElementById('root')
);
}
}
ReactDOM.render(<Main />, document.getElementById("root"));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
