import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store';

interface Props {
  children: React.ReactNode;
}

const H1 = ({ children }: Props) => {
  const language = useSelector((state: RootState) => state?.language?.language);

  return (
    <h1 className={`${language === 'en' ? 'font-montserrat' : 'font-almaraiLight'} md:text-[50px] text-[#FFFFFF] md:leading-[60.95px] capitalize max-w-[800px] w-full font-bold text-[35px] leading-[42.67px]`}>
      {children}
    </h1>
  );
};

export default H1;