import Hero from '@/components/Hero';
import PricingCard from '@/components/PricingCard';
import Gallery from '@/components/Gallery';

export default function BookCoverDesignPage() {
  const coverDesignPackage = {
    title: 'Basic Cover Design',
    price: '149',
    priceUnit: 'per cover',
    features: [
      'Professional front cover design',
      'Back cover layout and spine design',
      'Typography and color scheme selection',
      '3 initial concepts to choose from',
      '2 rounds of revisions included',
      'Print-ready files in multiple formats',
      
      'Digital format files for e-books'
    ]
  };

  // Gallery images for book covers
  const coverImages = [
    '/covers/1.jpg',
    '/covers/2.jpg',
    '/covers/3.jpg',
    '/covers/4.jpg',
    '/covers/5.jpg',
    '/covers/6.jpg',
    '/covers/7.jpg',
    '/covers/8.jpg'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero 
        title="Professional Book Cover Design"
        subtitle="Create covers that grab attention and drive sales. Our designers craft eye-catching covers that perfectly represent your story and appeal to your target audience."
        ctaText="Design Your Cover"
        ctaLink="#pricing"
        backgroundImage="/book-cover.jpg"
      />

      {/* Design Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Design Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a proven design process to create covers that not only look great but also perform well in the market.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center" data-aos="fade-up" data-aos-delay="100">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Research & Strategy</h3>
              <p className="text-gray-600">
                We analyze your genre, target audience, and market trends to develop a strategic design approach.
              </p>
            </div>
            
            <div className="text-center" data-aos="fade-up" data-aos-delay="200">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Concept Development</h3>
              <p className="text-gray-600">
                Our designers create multiple concepts, exploring different visual approaches and styles.
              </p>
            </div>
            
            <div className="text-center" data-aos="fade-up" data-aos-delay="300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Refinement & Delivery</h3>
              <p className="text-gray-600">
                We refine the chosen concept based on your feedback and deliver print-ready files in all required formats.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Design Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What We Deliver
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete cover design packages that include everything you need for both print and digital publication.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg" data-aos="fade-right">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Cover Design Elements</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Front cover design
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Back cover layout
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Spine design
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Typography and layout
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg" data-aos="fade-left">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">File Deliverables</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  High-resolution print files
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Digital format files
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Source files for future edits
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Multiple size variations
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <Gallery 
        images={coverImages}
        title="Our Book Cover Designs Portfolio"
        description="Take a look at some of our recent work. Each cover is carefully crafted to capture the essence of the story and appeal to the target audience."
      />

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Cover Design Package Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect cover design package for your book. No hidden fees, just clear, upfront pricing.
            </p>
          </div>
          
          <div className="flex justify-center">
            <PricingCard
              title={coverDesignPackage.title}
              price={coverDesignPackage.price}
              priceUnit={coverDesignPackage.priceUnit}
              features={coverDesignPackage.features}
            />
          </div>
        </div>
      </section>
    </div>
  );
} 