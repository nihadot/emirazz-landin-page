import React from 'react';
import { RootState } from '../../../store';
import { useSelector } from 'react-redux';

interface Props {
  children: React.ReactNode;
}

const H1 = ({ children }: Props) => {

  const language = useSelector((state: RootState) => state?.language?.language);

  return (
    <h1 className={`${language === 'en' ? 'font-montserrat' : 'font-almaraiLight'} md:text-[85px] text-[#FFFFFF] md:leading-[103.62px]  uppercase max-w-[650px] w-full  break-words font-bold text-[50px] leading-[60.95px]`}>
      {children}
    </h1>
  );
};

export default H1;