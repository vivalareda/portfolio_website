import Image from 'next/image';
import section from './path-to-your-image.jpg';

const FadedImage = () => {
    return (
        <div
          className="hidden md:flex justify-center relative overflow-hidden"
        >
          <Image
            src={section}
            alt="sectionimage"
            className="md:w-[1300px] w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black from-2%" />
        </div>
      );
};

export default FadedImage;
