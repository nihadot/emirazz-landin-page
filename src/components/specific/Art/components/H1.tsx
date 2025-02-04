import React from 'react';

interface Props {
  children: React.ReactNode;
}

const H1 = ({ children }: Props) => {
  return (
    <h1 className="md:text-[45px] text-[#FFFFFF] md:leading-[54.86px] font-montserrat capitalize max-w-[700px] w-full  break-words font-bold text-[26px] leading-[31.69px]">
      {children}
    </h1>
  );
};

export default H1;