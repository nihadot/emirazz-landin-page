import React from 'react';

interface Props {
  children: React.ReactNode;
}

const H1 = ({ children }: Props) => {
  return (
    <h1 className="md:text-[50px] text-[#FFFFFF] md:leading-[60.95px] font-montserrat capitalize max-w-[650px] w-full font-bold text-[35px] leading-[42.67px]">
      {children}
    </h1>
  );
};

export default H1;