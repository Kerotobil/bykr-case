import { FourImage } from './FourImage';
import { Button } from '../General/button';
import { NumericText } from './NumericText';

export const SecondLayout = () => {
  return (
    <div className="mx-auto mt-10 md:mt-0 px-6 md:px-32">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="pr-2 md:pr-0 md:w-1/2">
          <h1 className=" pr-32 md:pr-0 text-2xl md:text-5xl w-96">We Are A Creative Digital Agency</h1>
          <p className="text-base mt-6 md:mt-10 max-w-lg leading-8">
            Dalio started with a vision for building an agency to solve the business problems of the future, and that
            requires a different model. We’re not a branding agency that dabbles in tech, and we’re not a development
            shop that leaves you hanging when it’s time to go to market. <br /> <br /> We start with human experience
            and layer in technology and marketing to deliver truly integrated digital solutions. This unique set of
            capabilities sets us apart from other agencies and positions DIG to help you attack your goals.
          </p>
          <Button text="Contact Us" />
        </div>
        <div className="mt-10 w-72 md:w-auto">
          <FourImage />
        </div>
      </div>
      <div className="flex flex-col md:flex-row space-y-24 md:space-y-0 justify-between mt-12 md:mt-36 pb-36">
        <NumericText primaryText="4.8k" secondaryText="Job Completed" />
        <NumericText primaryText="12+" secondaryText="Industry Experience" />
        <NumericText primaryText="2.5k+" secondaryText="World wide clients" />
        <NumericText primaryText="120" secondaryText="Won Awards" />
      </div>
    </div>
  );
};
