import React, { useState } from "react";
import Start from "./Start";
import Provider from "./Provider";
import { Drawer } from "antd";
import type { DrawerProps } from "antd";
import { useSelector } from "react-redux";
import isEmpty from "../utils/isEmpty";
import Game from "../components/Game";

const Search: React.FC = (props) => {
  const games = useSelector((store: any) => store.games.games);
  const [open, setOpen] = useState(false);
  const [filterText, setFilterText] = useState("");
  const [filter, setFilter] = useState("");

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center max-w-sm mx-auto w-full">
        <label className="sr-only">Search</label>
        <div className="relative w-full">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <img src="/assets/image/search-alt-2-svgrepo-com 1.svg" alt="" />
          </div>
          <input
            type="text"
            value={filterText}
            id="simple-search"
            className="border border-gray-300 rounded-lg focus:border-blue-500 block w-full ps-10 p-2.5 "
            placeholder="Search branch name..."
            required
            onChange={(e) => setFilterText(e.target.value)}
          />
        </div>
        <button
          onClick={() => setFilter(filterText)}
          className="p-1 m-2 rounded-lg border-2"
        >
          <img src="/assets/image/u338.svg.svg" alt="" className="w-8 h-8" />
          <span className="sr-only">Search</span>
        </button>
      </div>
      <div className="overflow-y-auto grow">
        <div className="flex flex-wrap justify-center">
          {!isEmpty(games) &&
            games
              .filter((item: any) => item.name.toLowerCase().includes(filter.toLowerCase()))
              .map((item: any) => <Game game={item} key={item._id} />)}
        </div>
        <div className="flex py-2" onClick={showDrawer}>
          <h1 className="text-base">Proveedores de juego</h1>
          <button className="ml-auto px-3">
            <img src="/assets/image/SVG.svg" alt="" />
          </button>
          <button className="px-3">
            <img src="/assets/image/SVG (1).svg" alt="" />
          </button>
        </div>
        <Provider />
        <Drawer
          placement="bottom"
          closable={false}
          onClose={onClose}
          open={open}
          height="530px"
          bodyStyle={{ padding: "0px" }} // Removes padding inside the drawer
          style={{ padding: "0px", margin: "0px" }}
        >
          <div className="h-10 bg-blue-400 text-white flex p-2 ite">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
            >
              <path
                fill="white"
                d="m19.31 18.9l3.08 3.1L21 23.39l-3.12-3.07c-.69.43-1.51.68-2.38.68c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5s4.5 2 4.5 4.5c0 .88-.25 1.71-.69 2.4m-3.81.1a2.5 2.5 0 0 0 0-5a2.5 2.5 0 0 0 0 5M21 4v2H3V4zM3 16v-2h6v2zm0-5V9h18v2h-2.03c-1.01-.63-2.2-1-3.47-1s-2.46.37-3.47 1z"
              ></path>
            </svg>
            Game Provider
            <div className="border mx-2 border-white p-2 rounded-full flex justify-center items-center">
              119
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              className="ml-auto"
              onClick={onClose}
            >
              <path
                fill="white"
                d="m13.4 12l6.3-6.3c.4-.4.4-1 0-1.4s-1-.4-1.4 0L12 10.6L5.7 4.3c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l6.3 6.3l-6.3 6.3c-.2.2-.3.4-.3.7c0 .6.4 1 1 1c.3 0 .5-.1.7-.3l6.3-6.3l6.3 6.3c.2.2.4.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4z"
              ></path>
            </svg>
          </div>
          <div className="flex flex-wrap p-2 justify-evenly">
            <div className="py-1 px-9 m-2 bg-gray-100 rounded-lg">
              <img src="/assets/image/PNG.svg" alt="" />
            </div>
            <div className="py-1 px-9 m-2 bg-gray-100 rounded-lg">
              <img src="/assets/image/PNG.svg" alt="" />
            </div>
            <div className="py-1 px-9 m-2 bg-gray-100 rounded-lg">
              <img src="/assets/image/PNG.svg" alt="" />
            </div>
            <div className="py-1 px-9 m-2 bg-gray-100 rounded-lg">
              <img src="/assets/image/PNG.svg" alt="" />
            </div>
            <div className="py-1 px-9 m-2 bg-gray-100 rounded-lg">
              <img src="/assets/image/PNG.svg" alt="" />
            </div>
            <div className="py-1 px-9 m-2 bg-gray-100 rounded-lg">
              <img src="/assets/image/PNG.svg" alt="" />
            </div>
            <div className="py-1 px-9 m-2 bg-gray-100 rounded-lg">
              <img src="/assets/image/PNG.svg" alt="" />
            </div>
            <div className="py-1 px-9 m-2 bg-gray-100 rounded-lg">
              <img src="/assets/image/PNG.svg" alt="" />
            </div>
            <div className="py-1 px-9 m-2 bg-gray-100 rounded-lg">
              <img src="/assets/image/PNG.svg" alt="" />
            </div>
            <div className="py-1 px-9 m-2 bg-gray-100 rounded-lg">
              <img src="/assets/image/PNG.svg" alt="" />
            </div>
            <div className="py-1 px-9 m-2 bg-gray-100 rounded-lg">
              <img src="/assets/image/PNG.svg" alt="" />
            </div>
            <div className="py-1 px-9 m-2 bg-gray-100 rounded-lg">
              <img src="/assets/image/PNG.svg" alt="" />
            </div>
            <div className="py-1 px-9 m-2 bg-gray-100 rounded-lg">
              <img src="/assets/image/PNG.svg" alt="" />
            </div>
            <div className="py-1 px-9 m-2 bg-gray-100 rounded-lg">
              <img src="/assets/image/PNG.svg" alt="" />
            </div>
            <div className="py-1 px-9 m-2 bg-gray-100 rounded-lg">
              <img src="/assets/image/PNG.svg" alt="" />
            </div>
            <div className="py-1 px-9 m-2 bg-gray-100 rounded-lg">
              <img src="/assets/image/PNG.svg" alt="" />
            </div>
          </div>
        </Drawer>
      </div>
    </div>
  );
};

export default Search;
