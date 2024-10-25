import "./App.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Screen1 from "./container/screen-1/S1";
import Forgot from './container/screen-1/Fortgotpassword';
import Screen2 from "./container/Screen-2/S2";
import Screen3 from "./container/Screen-3/S3";
import About from './container/Screen-3/AboutsUs/About';
import Agric from './container/Screen-3/BestAgriPartices/Agri';
import Govt from './container/Screen-3/GovtSchemes/govt';
import Corner from "./container/Screen-3/Student Corner/corner";
// import Feed from "./container/Screen-3/News Feed/feed"
import Contact from './container/Screen-3/ContactUs/Contact';
import Screen4 from "./container/Screen-4/S4"
import Screen5 from "./container/Screen-5/S5"
import Screen6 from './container/Screen-6/S6';
import Screen7 from './container/Screen-7/S7';






function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/"  exact={true} element={<Screen1/>}/>
          <Route path="/forgot" element={<Forgot/>}/>
          <Route path="/registration" element={<Screen2/>} />
          <Route path="/dashboard" element={<Screen3/>} />
          <Route path="/dashboard/about" element={<About/>} />
          <Route path="/dashboard/postyouridea" element={<Screen4/>} />
          {/* <Route path="/dashboard/news" element={<Feed/>} /> */}
          <Route path="/dashboard/agric" element={<Agric/>} />
          <Route path="/dashboard/govt" element={<Govt/>} />
          <Route path="/dashboard/corner" element={<Corner/>} />
          <Route path="/dashboard/contact" element={<Contact/>} />
          <Route path="/application" element={<Screen5/>} />
          <Route path="/submit" element={<Screen6/>} />
          <Route path="/alert" element={<Screen7/>}/>
        </Routes>
      </BrowserRouter>
    
  );
}

export default App;