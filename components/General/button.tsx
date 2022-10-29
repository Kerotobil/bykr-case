import { ArrowUpRightIcon } from '@heroicons/react/24/solid';

interface Props {
  text: string;
  href?: string;
  onClickEvent?: () => void;
  bgColor?: string;
  borderClasses?: string;
  textClasses?: string;
}

export const Button = (props: Props) => {
  return (
    <button
      className={`w-36 md:w-48 flex items-center justify-center h-14 mt-10 text-lg rounded-full ${
        props.bgColor == null ? 'bg-yellow-500' : props.bgColor
      } ${props.borderClasses == null ? 'border-0' : props.borderClasses} ${
        props.textClasses == null ? 'text-black' : props.textClasses
      }`}
    >
      {props.text} <ArrowUpRightIcon className="w-4 h-4 ml-3" />
    </button>
  );
};
