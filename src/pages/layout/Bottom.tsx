import React from "react";
import Bottom_Bar from "../../components/Bottom_Bar";

const Bottom: React.FC = (props) => {
  return (
    <div className="py-2 flex justify-between">
      <Bottom_Bar image_url="/assets/image/Frame 80.svg" text="SPORTS" />
      <Bottom_Bar image_url="/assets/image/Star 1.svg" text="FAVORITES" />
      <Bottom_Bar image_url="/assets/image/svgexport-2 1.svg" text="INVITE" />
      <Bottom_Bar image_url="/assets/image/Frame 81.svg" text="CASINO LIVE" />
      <Bottom_Bar image_url="/assets/image/Frame (1).svg" text="CASHIER" />
    </div>
  );
};

export default Bottom;
