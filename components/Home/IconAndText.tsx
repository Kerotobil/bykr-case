interface Props {
  title: string;
  text: string;
}
export const IconAndText = (props: Props) => {
  return (
    <div className="flex space-x-5">
      <div>
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M27.5 13.8501V15.0001C27.4985 17.6956 26.6256 20.3184 25.0117 22.4774C23.3977 24.6363 21.1291 26.2157 18.5442 26.98C15.9593 27.7442 13.1966 27.6525 10.6681 26.7183C8.1396 25.7842 5.98082 24.0577 4.5137 21.7964C3.04658 19.5351 2.34974 16.8602 2.5271 14.1705C2.70445 11.4808 3.74651 8.92048 5.49785 6.87142C7.24919 4.82235 9.61598 3.3943 12.2452 2.80026C14.8745 2.20621 17.6253 2.478 20.0875 3.57508"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M27.5 5L15 17.5125L11.25 13.7625"
            stroke="white"
            strokeWidth="2"
          />
        </svg>
      </div>
      <div>
        <h1 className="text-2xl font-bold"> {props.title} </h1>
        <p className="mt-4 text-base text-zinc-200 max-w-md">{props.text} </p>
      </div>
    </div>
  );
};
