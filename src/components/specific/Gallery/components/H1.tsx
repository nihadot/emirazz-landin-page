import React from 'react';

interface Props {
  children: React.ReactNode;
}

const H1 = ({ children }: Props) => {
  return (
    <h1 className="md:text-[50px] text-[#FFFFFF] md:leading-[60.95px] font-montserrat capitalize max-w-[700px] w-full font-medium break-words text-[26px] leading-[31.69px]">
      {children}
    </h1>
  );
};

export default H1;