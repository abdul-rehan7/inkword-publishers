interface PricingCardProps {
  title: string;
  price: string;
  priceUnit?: string;
  features: string[];
  popular?: boolean;
}

const PricingCard = ({ title, price, priceUnit, features, popular = false }: PricingCardProps) => {
  return (
    <div 
      className={`relative bg-white md:w-[25vw] rounded-2xl shadow-xl p-8 border-2 ${
        popular ? 'border-blue-500 scale-105' : 'border-gray-200'
      }`}
      data-aos="zoom-in"
      data-aos-delay="200"
      data-aos-duration="800"
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
      
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
        <div className="flex items-baseline justify-center">
          <span className="text-4xl font-bold text-blue-600">${price}</span>
          {priceUnit && (
            <span className="text-lg text-gray-600 ml-1">{priceUnit}</span>
          )}
        </div>
      </div>
      
      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      
      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
        Get Started
      </button>
    </div>
  );
};

export default PricingCard;
