import { Routes, Route } from "react-router-dom";

import {
  Home,
  Ecosystem,
  Social,
  Whitepaper,
  Staking,
  Team,
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
          <Route path="/ecosystem" element={<Ecosystem />} />
          <Route path="/whitepaper" element={<Whitepaper />} />
          <Route path="/social" element={<Social />} />
          <Route path="/staking" element={<Staking />} />
          <Route path="/team" element={<Team />} />
          
        </Route>
      </Routes>

    </main>
  );
};

export default App;