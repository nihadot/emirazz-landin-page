
// Define the type for the `type` prop
type DescriptionType = 'type1' | 'type2' | 'type3' | 'type4' | 'type5' | 'type6' | 'type7' | 'type8' | 'type9' | 'type10' | 'type11';

// Define the Props interface
interface Props {
    text: string;
    type: DescriptionType;
    className?: string;
}

function Description({ text, type, className }: Props) {
    // Function to get class names based on the type
    const getClassNames = (type: DescriptionType): string => {
        switch (type) {
            case 'type1':
                return 'md:text-[18px]  md:leading-[27.80px] text-[#C1C1C1] font-montserrat font-light text-[15px] leading-[20.85px]'; ////
            case 'type4':
                return 'md:text-[18px] md:leading-[25.02px] text-[#FFFFFF] font-normal font-montserrat text-[15px] leading-[20.85px]'; ////
            case 'type6':
                return 'md:text-[18px] md:leading-[27.80px] text-[#CECECE] font-normal font-montserrat text-[15px] leading-[20.85px]'; ////
            case 'type2':
                return 'md:text-[15px] md:leading-[20.02px] text-[#CECECE] font-normal font-montserrat text-[15px] leading-[20.85px]';
            case 'type3':
                return 'text-[15px] leading-[20.85px] text-[#CECECE] font-montserrat font-medium  md:text-[20px] md:leading-[27.80px]';
            default:
                return '';
        }
    };

    // font-normal - 400
    // font-medium - 500
    return (
        <p className={` ${getClassNames(type)} ${className}`}>
            {text}
        </p>
    );
}

export default Description;