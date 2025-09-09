import Hero from '@/components/Hero';
import PricingCard from '@/components/PricingCard';

export default function GhostwritingPage() {
  const ghostwritingPackage = {
    title: 'Basic',
    price: '999',
    priceUnit: 'per project',
    features: [
      'You\'ll receive a professional writer who may have limited experience with published books',
      'Services included: Writing, Formatting, Proofreading, and Editing',
      'Enjoy unlimited rounds of free revisions and amendments to refine your content'
    ]
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero 
        title="Professional Ghostwriting Services"
        subtitle="Transform your ideas into compelling content with our expert ghostwriting services. We capture your voice and bring your vision to life."
        ctaText="Start Your Project"
        ctaLink="#pricing"
        backgroundImage="/ghost-writing.jpg"
      />

      {/* Ghostwriting Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Ghostwriting Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We work closely with you to understand your vision and create content that authentically represents your voice and message.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center" data-aos="fade-up" data-aos-delay="100">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Discovery & Planning</h3>
              <p className="text-gray-600">
                We dive deep into your ideas, goals, and vision to create a comprehensive outline and writing plan.
              </p>
            </div>
            
            <div className="text-center" data-aos="fade-up" data-aos-delay="200">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Writing & Collaboration</h3>
              <p className="text-gray-600">
                Our experienced writers craft your content while maintaining regular communication and incorporating your feedback.
              </p>
            </div>
            
            <div className="text-center" data-aos="fade-up" data-aos-delay="300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Revision & Finalization</h3>
              <p className="text-gray-600">
                We refine and polish your content until it perfectly captures your message and meets your expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Offered Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What We Write
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From books to articles, our ghostwriting services cover a wide range of content types and genres.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg" data-aos="fade-right">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Book Ghostwriting</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Memoirs and autobiographies
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Business and self-help books
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Fiction and non-fiction
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Academic and technical content
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg" data-aos="fade-left">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Content Creation</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Blog posts and articles
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Marketing copy and materials
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Speeches and presentations
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Social media content
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Ghostwriting Package Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect ghostwriting package for your project. No hidden fees, just clear, upfront pricing.
            </p>
          </div>
          
          <div className="flex justify-center">
            <PricingCard
              title={ghostwritingPackage.title}
              price={ghostwritingPackage.price}
              priceUnit={ghostwritingPackage.priceUnit}
              features={ghostwritingPackage.features}
            />
          </div>
        </div>
      </section>
    </div>
  );
} 