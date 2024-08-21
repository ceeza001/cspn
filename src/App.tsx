import { Routes, Route } from "react-router-dom";

import {
  Home,
  Roadmap,
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
          <Route path="/roadmap" element={<Roadmap />} />
          
        </Route>
      </Routes>

    </main>
  );
};

export default App;