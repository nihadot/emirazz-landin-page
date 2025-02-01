import React from 'react';

interface Props {
  children: React.ReactNode;
}

const H1 = ({ children }: Props) => {
  return (
    <h1 className="md:text-[45px] text-[#FFFFFF] md:leading-[54.86px] font-bold   font-montserrat uppercase max-w-[825px] w-full  break-words  text-[26px] leading-[31.69px]">
      {children}
    </h1>
  );
};

export default H1;