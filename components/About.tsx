export default function About() {
  return (
    <section id="about" className="py-20 bg-windows-dark-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">About Old West Solutions</h2>
            <p className="text-windows-dark-text-secondary mb-4 text-lg">
              We are a leading provider of enterprise IT services, dedicated to helping businesses
              leverage technology for growth and success. With years of experience and a team of
              certified professionals, we deliver reliable, scalable, and secure IT solutions.
            </p>
            <p className="text-windows-dark-text-secondary mb-4 text-lg">
              Our mission is to empower organizations with cutting-edge technology while ensuring
              maximum uptime, security, and efficiency. We understand that every business is unique,
              which is why we tailor our services to meet your specific needs.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div>
                <div className="text-3xl font-bold text-windows-dark-accent mb-2">500+</div>
                <div className="text-windows-dark-text-secondary">Clients Served</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-windows-dark-accent mb-2">15+</div>
                <div className="text-windows-dark-text-secondary">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-windows-dark-accent mb-2">99.9%</div>
                <div className="text-windows-dark-text-secondary">Uptime SLA</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-windows-dark-accent mb-2">24/7</div>
                <div className="text-windows-dark-text-secondary">Support Available</div>
              </div>
            </div>
          </div>
          <div className="windows-card p-8">
            <h3 className="text-2xl font-semibold text-white mb-6">Why Choose Us?</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-windows-dark-accent mr-3">✓</span>
                <span className="text-windows-dark-text-secondary">
                  Certified IT professionals with industry expertise
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-windows-dark-accent mr-3">✓</span>
                <span className="text-windows-dark-text-secondary">
                  Proven track record of successful implementations
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-windows-dark-accent mr-3">✓</span>
                <span className="text-windows-dark-text-secondary">
                  Customized solutions for your unique business needs
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-windows-dark-accent mr-3">✓</span>
                <span className="text-windows-dark-text-secondary">
                  Responsive support and proactive monitoring
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-windows-dark-accent mr-3">✓</span>
                <span className="text-windows-dark-text-secondary">
                  Competitive pricing with transparent billing
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

