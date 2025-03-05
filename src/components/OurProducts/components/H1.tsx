import React from 'react';
import { RootState } from '../../../store';
import { useSelector } from 'react-redux';

interface Props {
  children: React.ReactNode;
}

const H1 = ({ children }: Props) => {

  const language = useSelector((state: RootState) => state.language.language);

  return (
    <h1 className={`${language === 'en' ? 'font-montserrat' : 'font-almaraiLight'} md:text-[45px] text-[#FFFFFF] md:leading-[54.86px]  capitalize max-w-[700px] w-full  break-words font-bold text-[26px] leading-[31.69px]`}>
      {children}
    </h1>
  );
};

export default H1;