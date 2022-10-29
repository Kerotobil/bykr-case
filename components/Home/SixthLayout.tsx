import { StarIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

export const SixthLayout = () => {
  const comment = [
    {
      userName: 'Brooklyn Simmons',
      company: 'Pendron Inc., Ceo',
      photoUrl: '/Ellipse5.png',
      comment:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit semper consequat in dolor mattis pellentesque suspendisse vulputate nec. Scelerisque elementum, consequat pharetra lectus eget vivamus ut. Magna aliquam tellus at volutpat cras aliquet facilisi quis adipiscing. Proin egestas et pellentesque augue pretium, amet. Natoque blandit augue integer maecenas mattis amet, nec.',
      starCount: 5,
    },
    {
      userName: 'Jenny Wilson',
      company: 'Bettero Inc., Ceo',
      photoUrl: '/Ellipse6.png',
      comment:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit semper consequat in dolor mattis pellentesque suspendisse vulputate nec. Scelerisque elementum, consequat pharetra lectus eget vivamus ut. Magna aliquam tellus at volutpat cras aliquet facilisi quis adipiscing. Proin egestas et pellentesque augue pretium, amet. Natoque blandit augue integer maecenas mattis amet, nec.',
      starCount: 5,
    },
  ];
  return (
    <div className="pb-24 pl-36 mt-28 ">
      <h2>What say happy clients</h2>
      <div className="flex space-x-5 overflow-hidden mt-12">
        {comment.map((item, index) => (
          <div style={{ backgroundColor: '#353F5B' }} className="flex-none max-w-3xl rounded-4xl px-14 py-14">
            <svg
              width="62"
              className="opacity-20"
              height="48"
              viewBox="0 0 62 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M28.8 35.4602C28.8729 37.1637 28.5695 38.8623 27.9113 40.4351C27.2532 42.0079 26.2564 43.4164 24.992 44.5602L24.982 44.5682C22.3641 46.8894 18.9547 48.1166 15.458 47.9962H15.48C13.3665 48.1105 11.2537 47.758 9.29169 46.9637C7.32974 46.1693 5.56677 44.9527 4.12802 43.4002L4.12002 43.3922C1.2356 39.9694 -0.235612 35.5758 0.00601776 31.1062L0.00401776 31.1482C-0.130028 26.5066 0.732695 21.8902 2.53402 17.6102L2.45402 17.8242C3.89225 14.4686 5.88773 11.3803 8.35602 8.69023L8.33402 8.71423C10.3732 6.50204 12.7361 4.61189 15.342 3.10823L15.486 3.03223C17.457 1.8952 19.5139 0.914204 21.638 0.0982344L21.95 -0.00776563L28.218 10.5722C25.6134 11.6231 23.3271 13.3339 21.584 15.5362L21.558 15.5702C19.8224 17.6376 18.7338 20.1703 18.428 22.8522L18.422 22.9162C19.7859 22.9504 21.1272 23.2724 22.358 23.8611C23.5889 24.4497 24.6814 25.2919 25.564 26.3322L25.576 26.3462C27.8202 28.845 28.9812 32.1323 28.804 35.4862L28.806 35.4562L28.8 35.4602ZM62.696 35.4602C62.7682 37.1641 62.4642 38.8629 61.8057 40.436C61.1472 42.0091 60.1504 43.4179 58.886 44.5622L58.876 44.5702C56.2586 46.8923 52.8489 48.1196 49.352 47.9982H49.374C47.2604 48.1131 45.1474 47.7608 43.1854 46.9664C41.2233 46.1721 39.4604 44.9552 38.022 43.4022L38.014 43.3922C35.1284 39.9693 33.6571 35.5746 33.9 31.1042L33.898 31.1462C33.764 26.5046 34.6267 21.8882 36.428 17.6082L36.348 17.8222C37.7856 14.4671 39.7796 11.379 42.246 8.68823L42.224 8.71223C44.2639 6.5 46.6274 4.60985 49.234 3.10623L49.378 3.03023C51.3486 1.8924 53.4056 0.911372 55.53 0.0962344L55.842 -0.00976562L62.108 10.5702C59.503 11.6224 57.2167 13.3346 55.474 15.5382L55.448 15.5722C53.7124 17.6397 52.6238 20.1723 52.318 22.8542L52.312 22.9182C53.6754 22.9522 55.0162 23.2741 56.2464 23.8628C57.4766 24.4516 58.5683 25.2938 59.45 26.3342L59.462 26.3482C61.7087 28.8451 62.8719 32.132 62.696 35.4862L62.698 35.4562L62.696 35.4602Z"
                fill="white"
              />
            </svg>

            <p className="mt-8">{item.comment} </p>
            <div className="mt-8 flex justify-between">
              <div className="flex">
                <div>
                  <Image src={item.photoUrl} alt="" width={70} height={70} />
                </div>
                <div className="ml-4 my-auto">
                  <h6 className="text-lg">{item.userName} </h6>
                  <p className="text-yellow-500">{item.company} </p>
                </div>
              </div>
              <div className="flex mt-4">
                {Array.from(Array(item.starCount).keys()).map(() => (
                  <StarIcon className="w-5 h-5 " />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
