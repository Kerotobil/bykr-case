import { FourImage } from './FourImage';
import { Button } from './General/button';

export const SecondLayout = () => {
  return (
    <div className="flex px-32 justify-between">
      <div className="w-1/2">
        <h1 className="text-5xl w-96">We Are A Creative Digital Agency</h1>
        <p className="text-base mt-10 max-w-lg leading-8">
          Dalio started with a vision for building an agency to solve the business problems of the future, and that
          requires a different model. We’re not a branding agency that dabbles in tech, and we’re not a development shop
          that leaves you hanging when it’s time to go to market. <br /> <br /> We start with human experience and layer
          in technology and marketing to deliver truly integrated digital solutions. This unique set of capabilities
          sets us apart from other agencies and positions DIG to help you attack your goals.
        </p>
        <Button text="Contact Us" />
      </div>
      <FourImage />
    </div>
  );
};
