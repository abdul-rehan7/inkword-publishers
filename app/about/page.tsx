import Hero from '@/components/Hero';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero 
        title="About Us"
        subtitle="Learn about our mission to make book publishing accessible and successful for every author."
        showCTA={false}
        backgroundImage="/about-us.jpg"
      />

      {/* Company Description Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* First Paragraph - Mission with Image on Right */}
          <div className="mb-20">
            <h2 className="md:text-4xl text-3xl font-bold text-gray-900 mb-8 text-center" data-aos="fade-up">
              <span className="absolute z-[-10] mr-7 bg-green-300 h-9 w-9 rounded-full"></span>
              Our Mission
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2  items-center">
              <div className="space-y-6 md:text-xl text-justify text-gray-600 leading-relaxed" data-aos="fade-right">
                <p>
                  At Inkword Publishers, our mission is to empower authors to bring their stories to life with professionalism and creativity. We provide end-to-end publishing solutions, from editing and ghostwriting to illustration and book cover design, ensuring every book we handle meets the highest standards of quality.
                </p>
              </div>
              
              <div className="flex justify-center lg:justify-end" data-aos="fade-left">
                <img 
                  src="/author-img.png" 
                  alt="Author working on manuscript" 
                  className="rounded-lg  max-w-[70%] h-auto"
                />
              </div>
            </div>
          </div>

          {/* Second Paragraph - Why Choose Us with Image on Left */}
          <div>
            <h2 className="md:text-4xl text-3xl font-bold text-gray-900 mb-8 text-center" data-aos="fade-up">
              Why Choose Us
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2  items-center">
              <div className="flex justify-center lg:justify-start order-2 lg:order-1" data-aos="fade-right">
                <img 
                  src="/why-choose-us.png" 
                  alt="Team collaboration and expertise" 
                  className="rounded-lg md:w-[70%] h-auto"
                />
              </div>
              
              <div className="space-y-6 text-gray-600 md:text-xl text-justify leading-relaxed order-1 lg:order-2" data-aos="fade-left">
                <p>
                  We combine years of industry experience with a passion for storytelling. Our team works closely with authors, offering personalized guidance and innovative solutions, so every project reflects the author's unique vision. With a focus on excellence and client satisfaction, PineTree Press is your trusted partner in the publishing journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 