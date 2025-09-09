import Hero from '@/components/Hero';
import PricingCard from '@/components/PricingCard';

export default function EditingPage() {
  const editingPackage = {
    title: 'Basic Package',
    price: '2',
    priceUnit: 'per page',
    features: [
      'Ideal for straightforward edits, including grammar, punctuation, and spelling corrections',
      'Focuses on enhancing clarity and coherence',
      'Includes unlimited rounds of free revisions and formatting to ensure your manuscript is polished'
    ]
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero 
        title="Professional Editing Services"
        subtitle="Transform your manuscript with our comprehensive editing services. From developmental editing to final proofreading, we ensure your work is polished and publication-ready."
        ctaText="Get Your Manuscript Edited"
        ctaLink="#pricing"
        backgroundImage="/editing.jpg"
      />

      {/* Editing Types Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Types of Editing We Offer
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our editing services cover every aspect of manuscript preparation, ensuring your work meets the highest standards.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Developmental Editing</h3>
              <p className="text-gray-600 mb-4">
                Big-picture editing that focuses on structure, plot, character development, and overall narrative flow.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Plot and structure analysis</li>
                <li>• Character development review</li>
                <li>• Theme and message refinement</li>
                <li>• Pacing and flow optimization</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Copy Editing</h3>
              <p className="text-gray-600 mb-4">
                Line-by-line editing that improves clarity, consistency, and readability while maintaining your voice.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Grammar and punctuation</li>
                <li>• Sentence structure and flow</li>
                <li>• Consistency and clarity</li>
                <li>• Style and tone refinement</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Proofreading</h3>
              <p className="text-gray-600 mb-4">
                Final review to catch any remaining errors and ensure your manuscript is publication-ready.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Spelling and grammar errors</li>
                <li>• Formatting consistency</li>
                <li>• Typographical errors</li>
                <li>• Final quality check</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Editing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Editing Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our experienced editors are committed to helping you create the best possible version of your work.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Expert Editors</h3>
              <p className="text-gray-600 mb-4">
                Our team consists of experienced editors with backgrounds in publishing, literature, and various genres.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Industry experience and expertise
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Genre-specific knowledge
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Professional certifications
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Personalized Approach</h3>
              <p className="text-gray-600 mb-4">
                We work closely with you to understand your vision and provide feedback that enhances your work.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Detailed feedback and suggestions
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Collaborative revision process
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Ongoing support and guidance
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Editing Package Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect editing package for your manuscript.
            </p>
          </div>
          
          <div className="flex justify-center">
            <PricingCard
              title={editingPackage.title}
              price={editingPackage.price}
              priceUnit={editingPackage.priceUnit}
              features={editingPackage.features}
            />
          </div>
        </div>
      </section>
    </div>
  );
} 