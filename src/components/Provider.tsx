import React from "react";

type ProviderProps = {
  image_url: string; // Define image_url as a string
  provider: string; // Additional class names
  number: string; // Additional class names
};

const Provider: React.FC<ProviderProps> = (props) => {
  const { image_url, provider, number, ...rest } = props;
  return (
    <div className="mx-1 rounded-lg flex flex-col w-[116px]">
      <div className="rounded-t-lg h-16 w-full bg-gray-200 flex justify-center items-center">
        <img src={image_url} alt="" />
      </div>
      <div className="flex flex-col justify-center items-center bg-gray-100 rounded-b-lg">
        <h1 className="text-base">{provider}</h1>
        <h1 className="text-base text-gray-500">{number} juegos</h1>
      </div>
    </div>
  );
};

export default Provider;
