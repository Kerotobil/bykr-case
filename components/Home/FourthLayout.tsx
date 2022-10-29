import { ArrowUpRightIcon } from '@heroicons/react/24/solid';
import { Button } from '../General/button';

export const FourthLayout = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex justify-between h-28 items-center mt-28">
        <h1 className="text-5xl max-w-sm">Service we can help you</h1>
        <button
          className={`w-32 flex items-center my-auto justify-center h-14 text-lg text-white rounded-full bg-transparent border `}
        >
          {'See All'} <ArrowUpRightIcon className="w-4 h-4 ml-3" />
        </button>
      </div>
      <div className="grid grid-cols-2 gap-8 max-w-5xl mx-auto justify-items-center mt-10">
        <div className="max-w-lg space-y-8">
          <div className="bg-custom px-7 py-20 rounded-tl-4xl ">
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M44.4679 12.8873L51.1126 19.5289L44.4679 12.8873ZM48.7408 7.03626L30.7736 25.0035C29.8452 25.9306 29.2121 27.1117 28.954 28.398L27.2943 36.7056L35.6019 35.0428C36.8882 34.7856 38.0678 34.155 38.9964 33.2263L56.9637 15.2591C57.5036 14.7192 57.9319 14.0782 58.2241 13.3728C58.5163 12.6673 58.6667 11.9112 58.6667 11.1477C58.6667 10.3841 58.5163 9.62803 58.2241 8.92259C57.9319 8.21715 57.5036 7.57617 56.9637 7.03626C56.4237 6.49634 55.7828 6.06805 55.0773 5.77585C54.3719 5.48365 53.6158 5.33325 52.8522 5.33325C52.0887 5.33325 51.3326 5.48365 50.6272 5.77585C49.9217 6.06805 49.2808 6.49634 48.7408 7.03626V7.03626Z"
                stroke="#FFC93E"
                strokeWidth="2.5"
              />
              <path
                d="M52.3926 42.98V52.3919C52.3926 54.056 51.7316 55.652 50.5549 56.8287C49.3782 58.0054 47.7822 58.6665 46.1181 58.6665H11.6079C9.94379 58.6665 8.34783 58.0054 7.17112 56.8287C5.9944 55.652 5.33334 54.056 5.33334 52.3919V17.8818C5.33334 16.2176 5.9944 14.6217 7.17112 13.445C8.34783 12.2682 9.94379 11.6072 11.6079 11.6072H21.0198"
                stroke="#FFC93E"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
            <h1 className="text-3xl mt-8">Content Writing</h1>
            <p className="text-base mt-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. A consequat nunc id purus pretium sagittis. Nulla
              ridiculus nullam bibendum luctus viverra. Eu pellentesque sem sed platea diam dignissim duis purus.{' '}
            </p>
            <Button text="Read More" bgColor="bg-transparent" borderClasses="border" textClasses="text-white" />
          </div>
          <div className="bg-custom px-7 py-20 rounded-bl-4xl ">
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M18.6667 31.1257V45.3331H32.8741L29.9111 42.3702H21.6296V34.0887L18.6667 31.1257Z"
                fill="#FFC93E"
              />
              <path
                d="M56.9926 53.1703L52.7407 48.8592V52.7407H11.2592V46.5925H14.2222V44.2222H11.2592V34.3703H14.2222V32H11.2592V22.5185H14.2222V20.1481H11.2592V11.8666L34.8741 35.3481V31.1703L10.8296 7.2444C10.6224 7.03547 10.3576 6.89298 10.0691 6.8351C9.78062 6.77721 9.4814 6.80656 9.20964 6.9194C8.93787 7.03224 8.70586 7.22346 8.54319 7.46867C8.38052 7.71389 8.29456 8.00199 8.29627 8.29625V54.2222C8.29627 54.6151 8.45236 54.9919 8.73019 55.2697C9.00802 55.5476 9.38484 55.7037 9.77776 55.7037H55.9407C56.235 55.7054 56.5231 55.6194 56.7683 55.4567C57.0135 55.2941 57.2047 55.0621 57.3176 54.7903C57.4304 54.5185 57.4597 54.2193 57.4019 53.9308C57.344 53.6423 57.2015 53.3775 56.9926 53.1703V53.1703Z"
                fill="#FFC93E"
              />
              <path
                d="M40.8889 49.7776H46.8148C47.6006 49.7776 48.3543 49.4655 48.9099 48.9098C49.4656 48.3541 49.7778 47.6005 49.7778 46.8147V18.2221L46.3703 11.9554C46.1068 11.4988 45.7263 11.1208 45.2679 10.8604C44.8096 10.6 44.29 10.4666 43.7629 10.4739C43.2239 10.4782 42.6962 10.6295 42.2368 10.9114C41.7773 11.1933 41.4035 11.5953 41.1555 12.0739L37.9259 18.2517V46.8147C37.9259 47.6005 38.2381 48.3541 38.7937 48.9098C39.3494 49.4655 40.103 49.7776 40.8889 49.7776ZM40.8889 18.9628L43.7629 13.3776L46.8148 18.9776V40.8887H40.8889V18.9628ZM40.8889 43.3035H46.8148V46.9184H40.8889V43.3035Z"
                fill="#FFC93E"
              />
            </svg>

            <h1 className="text-3xl mt-8">Branding</h1>
            <p className="text-base mt-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. A consequat nunc id purus pretium sagittis. Nulla
              ridiculus nullam bibendum luctus viverra. Eu pellentesque sem sed platea diam dignissim duis purus.{' '}
            </p>
            <Button text="Read More" bgColor="bg-transparent" borderClasses="border" textClasses="text-white" />
          </div>
        </div>
        <div className="max-w-lg mt-10 space-y-8">
          <div className="bg-custom px-7 py-20 rounded-tr-4xl ">
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M24 45.3332H32M10.6667 10.6666V53.3332C10.6667 54.7477 11.2286 56.1043 12.2288 57.1045C13.229 58.1047 14.5855 58.6666 16 58.6666H48C49.4145 58.6666 50.7711 58.1047 51.7713 57.1045C52.7715 56.1043 53.3334 54.7477 53.3334 53.3332V22.2453C53.3333 21.5347 53.1912 20.8314 52.9155 20.1766C52.6399 19.5217 52.2361 18.9286 51.728 18.4319L39.888 6.85325C38.8917 5.87901 37.5535 5.33343 36.16 5.33325H16C14.5855 5.33325 13.229 5.89515 12.2288 6.89535C11.2286 7.89554 10.6667 9.2521 10.6667 10.6666V10.6666ZM24 34.6666H40H24Z"
                stroke="#FFC93E"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M37.3334 5.33325V15.9999C37.3334 17.4144 37.8953 18.771 38.8955 19.7712C39.8957 20.7713 41.2522 21.3333 42.6667 21.3333H53.3334"
                stroke="#FFC93E"
                stroke-width="2.5"
                stroke-linejoin="round"
              />
            </svg>

            <h1 className="text-3xl mt-8">UX Research</h1>
            <p className="text-base mt-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. A consequat nunc id purus pretium sagittis. Nulla
              ridiculus nullam bibendum luctus viverra. Eu pellentesque sem sed platea diam dignissim duis purus.{' '}
            </p>
            <Button text="Read More" />
          </div>
          <div className="bg-custom px-7 py-20 rounded-br-4xl ">
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M21.3333 53.3334H42.6666M5.33331 16.0001C5.33331 14.5856 5.89522 13.229 6.89541 12.2288C7.8956 11.2287 9.25216 10.6667 10.6666 10.6667H53.3333C54.7478 10.6667 56.1044 11.2287 57.1045 12.2288C58.1047 13.229 58.6666 14.5856 58.6666 16.0001V40.0001C58.6666 41.4146 58.1047 42.7711 57.1045 43.7713C56.1044 44.7715 54.7478 45.3334 53.3333 45.3334H10.6666C9.25216 45.3334 7.8956 44.7715 6.89541 43.7713C5.89522 42.7711 5.33331 41.4146 5.33331 40.0001V16.0001Z"
                stroke="#FFC93E"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <h1 className="text-3xl mt-8">Web Design</h1>
            <p className="text-base mt-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. A consequat nunc id purus pretium sagittis. Nulla
              ridiculus nullam bibendum luctus viverra. Eu pellentesque sem sed platea diam dignissim duis purus.{' '}
            </p>
            <Button text="Read More" bgColor="bg-transparent" borderClasses="border" textClasses="text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};
