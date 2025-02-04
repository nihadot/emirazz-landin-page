import { Link } from 'react-router';
import Button, { HeadingType } from './Button'
import Image from './Image';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store';
import { blackIcon } from '../../../../assets/images';
import { rightArrow } from '../../../../assets/svg';

type Props = {
    className?: string;
    text: string;
    type: HeadingType;
    link: string;
    black?:boolean;
}

function ArrowIconButton({ className, text, type, link,black }: Props) {
    const language = useSelector((state: RootState) => state?.language?.language);
    return (
        <Link to={link}>
            <div className="flex gap-2 pt-2 items-center">
            { black ? <Image
                    alt='arrow'
                    src={blackIcon}
                    className={`${ language === 'en' ? ' rotate-0' : 'rotate-180'} w-8 h-8 object-cover`}
                /> : <Image
                    alt='arrow'
                    src={rightArrow}
                    className={`${ language === 'en' ? ' rotate-0' : 'rotate-180'} w-8 h-8 object-cover`}
                />}
                <Button
                    text={text}
                    type={type}
                    className={` object-cover ${className}`}
                />
              
            </div>
        </Link>
    )
}

export default ArrowIconButton