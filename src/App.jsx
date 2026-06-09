import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { FavoritesProvider } from "./context/FavoritesContext";
import Header from "./components/layout/Header";
import HomePage from "./pages/HomePage";
import TeamPage from "./pages/TeamPage";
import MatchesPage from "./pages/MatchesPage";
import FavoritesPage from "./pages/FavoritesPage";
import Sidebar from "./components/layout/Sidebar";

export default function App() {
  const [competition, setCompetition] = useState("PL");

  return (
    <BrowserRouter basename="/football-app">
      <FavoritesProvider>
        <Header />
        <div className="app-shell">
          <Sidebar selected={competition} onSelect={setCompetition} />
          <main className="app-content">
            <Routes>
              <Route
                path="/"
                element={<HomePage competition={competition} />}
              />
              <Route path="/team/:id" element={<TeamPage />} />
              <Route
                path="/matches"
                element={<MatchesPage competition={competition} />}
              />
              <Route path="/favorites" element={<FavoritesPage />} />
            </Routes>
          </main>
        </div>
      </FavoritesProvider>
    </BrowserRouter>
  );
}
