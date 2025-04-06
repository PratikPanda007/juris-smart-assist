
const testimonials = [
  {
    content:
      "JurisSmart has revolutionized our contract process. What used to take days now takes minutes, and the quality of the output is impressive.",
    author: "Sarah Johnson",
    role: "Legal Director, TechCorp Inc.",
  },
  {
    content:
      "The document analysis feature has saved me countless hours of review time. It accurately identifies risks and provides actionable insights.",
    author: "Michael Chen",
    role: "Corporate Attorney",
  },
  {
    content:
      "As a small business owner, I couldn't afford dedicated legal counsel. JurisSmart provides reliable advice at a fraction of the cost.",
    author: "Rebecca Martinez",
    role: "CEO, Startup Ventures",
  },
];

const Testimonials = () => {
  return (
    <div className="py-16 bg-legal-gray">
      <div className="legal-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-legal-navy mb-4">
            Trusted by Legal Professionals
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how JurisSmart is transforming legal workflows for businesses and law firms.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
            >
              <div className="flex items-center mb-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="h-5 w-5 text-legal-gold"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 15.585l-7.07 3.707 1.35-7.867-5.72-5.573 7.9-1.147L10 0l3.54 7.705 7.9 1.147-5.72 5.573 1.35 7.867z"
                      clipRule="evenodd"
                    />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
              <div>
                <p className="font-semibold text-legal-navy">{testimonial.author}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
