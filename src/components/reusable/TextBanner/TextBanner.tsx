import Paragraph from '../Paragraph/Paragraph'
import HeaderFour from '../Titles/MainHeading/HeaderFour'
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';

type Props = {
  heading: string;
  paragraph?: string;
  containerClassName?: string;
  paragraphClassName?: string;
  headingClassName?: string;

}

function TextBanner({ heading, paragraph, containerClassName, paragraphClassName, headingClassName }: Props) {

  const language = useSelector((state: RootState) => state.language.language);

  return (
    <div dir={language === 'en' ? 'ltr' : 'rtl'} className={` bg-black  text-white max-w-[700px] pe-16 py-8  rounded-2xl w-full  sm:max-h-[288px] h-full ${containerClassName} `}>
      <HeaderFour

        content={heading}
        className={`md:mb-6 mb-3 pt-8 sm:pt-0 ${headingClassName}`}

      />
      <Paragraph
        className={`text-white/80 !text-[16px] ${paragraphClassName}`}

        content={paragraph}
      />
    </div>
  )
}

export default TextBanner