
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layout
import DefaultLayout from "./layouts/DefaultLayout";

// Pages
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import Posts from "./pages/Posts";

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path="/" Component={HomePage} />
            <Route path="/aboutus" Component={AboutUs} />
            <Route path="/posts" Component={Posts} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
