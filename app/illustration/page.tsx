import Hero from '@/components/Hero';
import PricingCard from '@/components/PricingCard';
import Gallery from '@/components/Gallery';

export default function IllustrationPage() {
  const illustrationPackage = {
    title: 'Basic',
    price: '25',
    priceUnit: 'per page',
    features: [
      'Simple, clean illustrations with vibrant colors',
      'Suitable for short stories or beginner projects',
      'Includes 4 revision per page'
    ]
  };

  // Gallery images for illustrations
  const illustrationImages = [
    '/illusts/1.jpg',
    '/illusts/2.jpg',
    '/illusts/3.jpg',
    '/illusts/4.jpg',
    '/illusts/5.jpg',
    '/illusts/6.jpg',
    '/illusts/7.jpg',
    '/illusts/8.jpg'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero 
        title="Custom Book Illustrations"
        subtitle="Bring your story to life with beautiful, custom illustrations that captivate readers and enhance your narrative."
        ctaText="Start Your Illustration Project"
        ctaLink="#pricing"
        backgroundImage="/illustrations.jpg"
      />

      {/* Illustration Styles Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Illustration Styles & Techniques
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our talented artists work in various styles and mediums to create illustrations that perfectly match your vision and story.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100" data-aos="fade-right">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Traditional Art Styles</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Watercolor and acrylic paintings
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Pencil and charcoal drawings
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Oil paintings and mixed media
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Hand-drawn sketches and line art
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100" data-aos="fade-left">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Digital Art Styles</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Digital painting and concept art
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Vector graphics and clean designs
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  3D modeling and rendering
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Comic and manga-style artwork
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Illustration Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We work collaboratively with you to ensure every illustration perfectly captures your vision and enhances your story.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center" data-aos="fade-up" data-aos-delay="100">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Concept & Planning</h3>
              <p className="text-gray-600">
                We discuss your vision, review your story, and create initial concept sketches to establish the style and direction.
              </p>
            </div>
            
            <div className="text-center" data-aos="fade-up" data-aos-delay="200">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Creation & Development</h3>
              <p className="text-gray-600">
                Our artists bring your concepts to life, creating detailed illustrations that capture the essence of your story.
              </p>
            </div>
            
            <div className="text-center" data-aos="fade-up" data-aos-delay="300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Refinement & Delivery</h3>
              <p className="text-gray-600">
                We refine the illustrations based on your feedback and deliver high-quality files ready for publication.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <Gallery 
        images={illustrationImages}
        title="Our Illustration Portfolio"
        description="Explore our diverse range of illustration styles and techniques. From whimsical children's book art to detailed fantasy illustrations, we bring stories to life with stunning visuals."
      />

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Illustration Package Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect illustration package for your project. No hidden fees, just clear, upfront pricing.
            </p>
          </div>
          
          <div className="flex justify-center">
            <PricingCard
              title={illustrationPackage.title}
              price={illustrationPackage.price}
              priceUnit={illustrationPackage.priceUnit}
              features={illustrationPackage.features}
            />
          </div>
        </div>
      </section>
    </div>
  );
} 