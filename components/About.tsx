export default function About() {
  return (
    <section id="solutions" className="py-12 md:py-20 bg-windows-dark-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Smarter business. Real impact.</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-20">
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Success Stories</h3>
            <p className="text-windows-dark-text-secondary mb-4 md:mb-6 text-base md:text-lg">
              Leading enterprises trust Old West Solutions to transform their IT infrastructure. 
              Our clients have seen significant improvements in efficiency, security, and operational excellence.
            </p>
            <p className="text-windows-dark-text-secondary mb-4 md:mb-6 text-sm md:text-base">
              From Fortune 500 companies to growing startups, we've helped organizations build 
              new digital capabilities, expand their reach, and increase productivity through 
              innovative technology solutions.
            </p>
            <a href="#" className="text-windows-dark-accent hover:text-windows-dark-accent-hover font-medium text-sm md:text-base">
              Learn how we help businesses transform →
            </a>
            
            <div className="mt-6 md:mt-8 space-y-2 md:space-y-3">
              {['Enterprise Solutions', 'Cloud Migration', 'Security Implementation', 'Digital Transformation'].map((item, index) => (
                <div key={index} className="flex items-center justify-between windows-card p-3 md:p-4 hover:border-windows-dark-accent transition-colors cursor-pointer group">
                  <span className="text-white group-hover:text-windows-dark-accent transition-colors text-sm md:text-base">{item}</span>
                  <span className="text-windows-dark-text-secondary group-hover:text-windows-dark-accent">→</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="windows-card p-6 md:p-8 bg-gradient-to-br from-windows-dark-surface to-windows-dark-bg">
            <div className="aspect-video bg-gradient-to-br from-windows-dark-accent/20 to-windows-dark-accent/5 rounded mb-4 md:mb-6 flex items-center justify-center">
              <div className="text-4xl md:text-6xl">💼</div>
            </div>
            <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 md:mb-6">Why Choose Us?</h3>
            <ul className="space-y-3 md:space-y-4">
              <li className="flex items-start">
                <span className="text-windows-dark-accent mr-3 text-lg md:text-xl">✓</span>
                <span className="text-windows-dark-text-secondary text-sm md:text-base">
                  Certified IT professionals with industry expertise
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-windows-dark-accent mr-3 text-lg md:text-xl">✓</span>
                <span className="text-windows-dark-text-secondary text-sm md:text-base">
                  Proven track record of successful implementations
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-windows-dark-accent mr-3 text-lg md:text-xl">✓</span>
                <span className="text-windows-dark-text-secondary text-sm md:text-base">
                  Customized solutions for your unique business needs
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-windows-dark-accent mr-3 text-lg md:text-xl">✓</span>
                <span className="text-windows-dark-text-secondary text-sm md:text-base">
                  Responsive support and proactive monitoring
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          <div className="text-center">
            <div className="text-2xl md:text-4xl font-bold text-windows-dark-accent mb-1 md:mb-2">500+</div>
            <div className="text-windows-dark-text-secondary text-xs md:text-sm">Clients Served</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-4xl font-bold text-windows-dark-accent mb-1 md:mb-2">15+</div>
            <div className="text-windows-dark-text-secondary text-xs md:text-sm">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-4xl font-bold text-windows-dark-accent mb-1 md:mb-2">99.9%</div>
            <div className="text-windows-dark-text-secondary text-xs md:text-sm">Uptime SLA</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-4xl font-bold text-windows-dark-accent mb-1 md:mb-2">24/7</div>
            <div className="text-windows-dark-text-secondary text-xs md:text-sm">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  )
}

