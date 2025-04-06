
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FeatureHighlight = ({
  title,
  description,
  image,
  alt,
  buttonText,
  buttonLink,
  reversed = false,
}) => {
  return (
    <div className={`py-12 ${reversed ? 'bg-legal-lightblue' : 'bg-white'}`}>
      <div className="legal-container">
        <div className={`flex flex-col ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}>
          <div className="lg:w-1/2">
            <img
              src={image}
              alt={alt}
              className="w-full rounded-lg shadow-lg object-cover"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-serif font-bold text-legal-navy mb-4">
              {title}
            </h2>
            <p className="text-gray-600 text-lg mb-6">
              {description}
            </p>
            <Link to={buttonLink}>
              <Button
                className="bg-legal-navy hover:bg-legal-navy/90 text-white"
              >
                {buttonText}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureHighlight;
