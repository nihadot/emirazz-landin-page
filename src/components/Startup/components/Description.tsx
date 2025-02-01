
// Define the type for the `type` prop
type DescriptionType = 'type1';

// Define the Props interface
interface Props {
    text: string;
    type: DescriptionType;
    className?:string;
}

function Description({ text, type,className }: Props) {
    const getClassNames = (type: DescriptionType): string => {
        switch (type) {
            case 'type1':
                return 'md:text-[20px]  md:leading-[27.80px] text-[#FFFFFF] font-normal font-montserrat text-[15px] leading-[20.85px]'; /////
           default:
                return '';
        }
    };

    return (
        <p className={` ${getClassNames(type)} ${className}`}>
            {text}
        </p>
    );
}

export default Description;