import React from 'react';
import { RootState } from '../../../../store';
import { useSelector } from 'react-redux';

interface Props {
  children: React.ReactNode;
}

const H1 = ({ children }: Props) => {
  const language = useSelector((state: RootState) => state?.language?.language);

  return (
    <h1 className={`md:text-[50px] ${language === 'en' ? 'font-montserrat' : 'font-almaraiLight'} text-[#FFFFFF] md:leading-[60.95px] capitalize max-w-[700px] w-full font-medium break-words text-[26px] leading-[31.69px]`}>
      {children}
    </h1>
  );
};

export default H1;