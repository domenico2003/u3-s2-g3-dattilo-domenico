import TVShows from "./components/TVShows";
import logo from "./assets/netflix_logo.png";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./scss/style.scss";
import MyNav from "./components/secondaryComponents/MyNav";

import AccountPage from "./components/AccountPage";
import SettingsPage from "./components/SettingsPage";
import MovieDetails from "./components/MovieDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <MyNav netflixLogo={logo} />

        <Routes>
          <Route path="/" element={<TVShows />} />
          <Route path="/accountPage" element={<AccountPage />} />
          <Route path="/settingsPage" element={<SettingsPage />} />
          <Route path="/movieDetails/:filmId" element={<MovieDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
