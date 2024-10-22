import React from 'react';

type BottomBarProps = {
  image_url: string; // Define image_url as a string
  text:String;
  className?: string; // Additional class names
};

const Bottom_Bar: React.FC<BottomBarProps> = (props) => {
  const {image_url,text,className,...rest}=props;
  return (
    <div {...rest} className={`flex flex-col justify-center items-center px-1 ${className || ''}`}>
      <img src={image_url} alt={image_url} className='px-1 size-8'/>
      <h1 className='text-[14px]'>{text}</h1>
    </div>
  );
};

export default Bottom_Bar;
