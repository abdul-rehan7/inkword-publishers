import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import PricingCard from '@/components/PricingCard';
import Contact from '@/components/Contact';
import Link from 'next/link';

export default function Home() {
  const services = [
    {
      title: 'Publishing',
      description: 'Professional book publishing services to bring your manuscript to life and get it into readers\' hands.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      href: '/publishing'
    },
    {
      title: 'Ghostwriting',
      description: 'Expert ghostwriting services to help you create compelling content while maintaining your unique voice.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      ),
      href: '/ghostwriting'
    },
    {
      title: 'Editing',
      description: 'Comprehensive editing services including developmental, copy, and proofreading to perfect your manuscript.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
      href: '/editing'
    },
    {
      title: 'Illustration',
      description: 'Beautiful custom illustrations that bring your story to life and captivate your readers.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
        </svg>
      ),
      href: '/illustration'
    },
    {
      title: 'Cover Design',
      description: 'Eye-catching book cover designs that grab attention and drive sales in today\'s competitive market.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      href: '/book-cover-design'
    }
  ];

  const bookPackage = {
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
        title="Book Publishing Made Simple"
        subtitle="Professional publishing services to transform your manuscript into a published book. From writing to design, we handle every step of your publishing journey."
        ctaText="Start Publishing Today"
        ctaLink="/publishing"
        backgroundImage="/hero-bg.jpg"
      />

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive publishing solutions tailored to your needs. We offer everything from initial writing to final publication.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 3).map((service, index) => (
              <div 
                key={index} 
                data-aos="fade-up" 
                data-aos-delay={index * 100}
              >
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  href={service.href}
                />
              </div>
            ))}
          </div>
          
          {/* Second row with 2 centered cards */}
          <div className="flex justify-center mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl">
              {services.slice(3).map((service, index) => (
                <div 
                  key={index + 3} 
                  data-aos="fade-up" 
                  data-aos-delay={(index + 3) * 100}
                >
                  <ServiceCard
                    title={service.title}
                    description={service.description}
                    icon={service.icon}
                    href={service.href}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      {/* <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Book Publishing Package Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect package for your publishing needs. No hidden fees, just clear, upfront pricing.
            </p>
          </div>
          
          <div className="flex justify-center">
            <PricingCard
              title={bookPackage.title}
              price={bookPackage.price}
              priceUnit={bookPackage.priceUnit}
              features={bookPackage.features}
            />
          </div>
        </div>
      </section> */}

      {/* Contact Section */}
      

      <Contact />
    
    </div>
  );
}
