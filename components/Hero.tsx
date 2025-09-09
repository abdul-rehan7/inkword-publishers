import Link from 'next/link';

interface HeroProps {
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  showCTA?: boolean;
  backgroundImage?: string;
}

const Hero = ({ 
  title, 
  subtitle, 
  ctaText = "Get Started", 
  ctaLink = "/pricing", 
  showCTA = true,
  backgroundImage = "/hero-bg.jpg"
}: HeroProps) => {
  return (
    <section 
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 to-black/50"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl sm:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
        {showCTA && (
          <div className="flex justify-center">
            <Link
              href={ctaLink}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              {ctaText}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero; 