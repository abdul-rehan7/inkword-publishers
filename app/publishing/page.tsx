import Hero from '@/components/Hero';
import PricingCard from '@/components/PricingCard';

export default function PublishingPage() {
  const publishingPackage = {
    title: 'Basic',
    price: '199',
    priceUnit: '',
    features: [
      'Publishing on Amazon in eBook, Paperback, & Hardcover Formats',
      'Complimentary Proofreading and Formatting',
      'Beta-readers Feedback Report',
      'Categories Research & Listing',
      'Prelisting on Amazon',
      'ePub Formating',
      'Dedicated Account Manager',
      'Keywords Research & Listing'
    ]
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero 
        title="Professional Book Publishing"
        subtitle="Transform your manuscript into a professionally published book with our comprehensive publishing services."
        ctaText="Start Your Publishing Journey"
        ctaLink="#pricing"
        backgroundImage="/publishing.jpg"
      />

      {/* Publishing Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Publishing Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We guide you through every step of the publishing journey, ensuring your book reaches its full potential.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center" data-aos="fade-up" data-aos-delay="100">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Manuscript Review</h3>
              <p className="text-gray-600">
                Our expert editors review your manuscript, providing detailed feedback and recommendations for improvement.
              </p>
            </div>
            
            <div className="text-center" data-aos="fade-up" data-aos-delay="200">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Professional Editing</h3>
              <p className="text-gray-600">
                Comprehensive editing including developmental, copy, and proofreading to perfect your manuscript.
              </p>
            </div>
            
            <div className="text-center" data-aos="fade-up" data-aos-delay="300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Publication & Distribution</h3>
              <p className="text-gray-600">
                Professional formatting, cover design, and distribution to major retailers and online platforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Included Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What's Included
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our publishing packages include everything you need to bring your book to market successfully.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg" data-aos="fade-right">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Professional Services</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Manuscript evaluation and feedback
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Developmental editing
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Copy editing and proofreading
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Professional formatting
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg" data-aos="fade-left">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Design & Production</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Custom cover design
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Interior layout design
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Print and digital formatting
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  ISBN assignment
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
              Publishing Package Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect publishing package for your book. No hidden fees, just clear, upfront pricing.
            </p>
          </div>
          
          <div className="flex justify-center">
            <PricingCard
              title={publishingPackage.title}
              price={publishingPackage.price}
              priceUnit={publishingPackage.priceUnit}
              features={publishingPackage.features}
            />
          </div>
        </div>
      </section>
    </div>
  );
} 