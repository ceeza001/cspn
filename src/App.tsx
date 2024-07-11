import { Routes, Route } from "react-router-dom";

import {
  Home,
  About,
  Ideas,
  LinkTree,
} from "@/_root/pages";

import "./globals.css";
import RootLayout from "@/_root/RootLayout"

const App = () => {
  return (
    <main>
      <Routes>
        {/* private routes */}
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/ideas" element={<Ideas />} />
          <Route path="/link-tree" element={<LinkTree />} />
          
        </Route>
      </Routes>

    </main>
  );
};

export default App;