import React from "react";
import ProviderComponent from "../components/Provider";

const Provider: React.FC = (props) => {
  return (
    <div className="flex flex-wrap">
      <ProviderComponent image_url="/assets/image/GAMEART.svg" provider="GameArt" number="117" />
      <ProviderComponent image_url="/assets/image/GG.webp.svg" provider="Games Global" number="8" />
      <ProviderComponent image_url="/assets/image/HAB.svg" provider="Habanero" number="206" />
    </div>
  );
};

export default Provider;
