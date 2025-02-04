import { Link } from 'react-router';
import Button, { HeadingType } from './Button'
import Image from './Image';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { rightDownArrow } from '../../../assets/svg';

type Props = {
    className: string;
    text: string;
    type: HeadingType;
    link: string;
    black?: boolean;
}

function IconButton({ className, text, type, link, black }: Props) {
    const language = useSelector((state: RootState) => state?.language?.language);

    return (
        <Link to={link}>
            <div className="flex gap-2 pt-2 items-center">
                <Button
                    text={text}
                    type={type}
                    className={className}
                />
                {black ? <Image
                    alt='arrow'
                    src={rightDownArrow}
                    className={`${language === 'en' ? ' rotate-0' : 'rotate-180'} w-3 h-3 object-cover`}
                /> : <Image
                    alt='arrow'
                    src={rightDownArrow}
                    className={`${language === 'en' ? ' rotate-0' : 'rotate-180'} w-3 h-3 object-cover`}
                />}
            </div>
        </Link>
    )
}

export default IconButton