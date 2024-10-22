import React, { useEffect } from "react";
import Middle_Bar from "./components/Middle_Bar";
import Game from "./components/Game";
import Bottom_Bar from "./components/Bottom_Bar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Bottom from "./pages/layout/Bottom";
import Middle from "./pages/layout/Middle";
import Top from "./pages/layout/Top";
import Start from "./pages/Start";
import Search from "./pages/Search";
import { useDispatch } from "react-redux";
import { getGames } from "./actions/game";

const App: React.FC = () => {
  const dispatch: any = useDispatch();
  useEffect(() => {
    dispatch(getGames());
  }, []);

  return (
    <Router>
      <div className="bg-white p-2 w-full flex flex-col h-screen">
        <Top />
        <Middle />
        <div className="overflow-y-auto grow">
          <Routes>
            <Route path="/start" element={<Start />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </div>
        <Bottom />
      </div>
    </Router>
  );
};

export default App;
