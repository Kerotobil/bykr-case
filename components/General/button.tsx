import { ArrowUpRightIcon } from '@heroicons/react/24/solid';

interface Props {
  text: string;
  href?: string;
  onClickEvent?: () => void;
}

export const Button = (props: Props) => {
  return (
    <button className="w-48 flex items-center justify-center h-14 mt-10 text-lg bg-yellow-500 text-black rounded-full">
      {props.text} <ArrowUpRightIcon className="w-4 h-4 ml-3" />
    </button>
  );
};
