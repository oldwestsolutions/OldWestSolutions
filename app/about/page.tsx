import Header from '@/components/Header'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-windows-dark-bg">
      <Header />
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link href="/" className="text-windows-dark-accent hover:text-windows-dark-accent-hover mb-8 inline-block">
            ← Back to Home
          </Link>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          {/* Hero Section */}
          <div className="windows-card p-12 md:p-16 bg-gradient-to-br from-windows-dark-accent/30 via-windows-dark-accent/20 to-windows-dark-accent/10 text-center mb-12 md:mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">About Old West Solutions</h1>
            <p className="text-xl md:text-2xl text-windows-dark-text-secondary max-w-3xl mx-auto">
              Empowering businesses with cutting-edge technology solutions since 2026
            </p>
          </div>

          {/* Vision & Mission */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-20">
            <div className="windows-card p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Our Vision</h2>
              <p className="text-windows-dark-text-secondary text-base md:text-lg leading-relaxed mb-4">
                To be the leading enterprise IT solutions provider, empowering businesses worldwide 
                to achieve digital transformation through innovative technology, strategic partnerships, 
                and unparalleled expertise.
              </p>
              <p className="text-windows-dark-text-secondary text-base md:text-lg leading-relaxed">
                We envision a future where every organization, regardless of size, has access to 
                enterprise-grade technology solutions that drive growth, efficiency, and competitive advantage.
              </p>
            </div>

            <div className="windows-card p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Our Mission</h2>
              <p className="text-windows-dark-text-secondary text-base md:text-lg leading-relaxed mb-4">
                To deliver cutting-edge IT solutions and services that transform how businesses operate, 
                compete, and succeed in the digital age. We combine deep technical expertise with strategic 
                business insight to help our clients achieve their goals.
              </p>
              <p className="text-windows-dark-text-secondary text-base md:text-lg leading-relaxed">
                Established in 2026, Old West Solutions is committed to providing world-class technology 
                services, fostering innovation, and building lasting partnerships with our clients and 
                technology partners.
              </p>
            </div>
          </div>

          {/* Our Team Section */}
          <div className="mb-12 md:mb-20">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Team</h2>
              <p className="text-windows-dark-text-secondary text-lg md:text-xl max-w-3xl mx-auto">
                Meet the experts behind Old West Solutions. Our team brings together decades of combined 
                experience in enterprise IT, cloud computing, security, and digital transformation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
              <div className="windows-card p-6 md:p-8 text-center">
                <div className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-windows-dark-accent/30 to-windows-dark-accent/10 flex items-center justify-center">
                  <span className="text-4xl md:text-5xl">👨‍💼</span>
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">Leadership Team</h3>
                <p className="text-windows-dark-text-secondary text-sm md:text-base">
                  Our executive leadership brings strategic vision and industry expertise to guide 
                  Old West Solutions in delivering exceptional value to our clients.
                </p>
              </div>

              <div className="windows-card p-6 md:p-8 text-center">
                <div className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-windows-dark-accent/30 to-windows-dark-accent/10 flex items-center justify-center">
                  <span className="text-4xl md:text-5xl">👨‍💻</span>
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">Technical Experts</h3>
                <p className="text-windows-dark-text-secondary text-sm md:text-base">
                  Certified engineers and architects with deep expertise in cloud platforms, security, 
                  AI, and enterprise infrastructure solutions.
                </p>
              </div>

              <div className="windows-card p-6 md:p-8 text-center">
                <div className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-windows-dark-accent/30 to-windows-dark-accent/10 flex items-center justify-center">
                  <span className="text-4xl md:text-5xl">👩‍💼</span>
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">Client Success</h3>
                <p className="text-windows-dark-text-secondary text-sm md:text-base">
                  Dedicated account managers and support specialists ensuring your success with 
                  proactive monitoring and responsive assistance.
                </p>
              </div>
            </div>

            <div className="windows-card p-8 md:p-12 bg-gradient-to-br from-windows-dark-surface to-windows-dark-bg">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Why Our Team Stands Out</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <span className="text-windows-dark-accent mr-3 text-xl md:text-2xl">✓</span>
                  <div>
                    <h4 className="text-white font-semibold mb-2 text-lg md:text-xl">Certified Professionals</h4>
                    <p className="text-windows-dark-text-secondary text-sm md:text-base">
                      Our team holds certifications from leading technology partners including Salesforce, 
                      Microsoft Azure, Google Cloud, Snowflake, and IBM.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-windows-dark-accent mr-3 text-xl md:text-2xl">✓</span>
                  <div>
                    <h4 className="text-white font-semibold mb-2 text-lg md:text-xl">Industry Experience</h4>
                    <p className="text-windows-dark-text-secondary text-sm md:text-base">
                      Decades of combined experience working with Fortune 500 companies, startups, 
                      and organizations across various industries.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-windows-dark-accent mr-3 text-xl md:text-2xl">✓</span>
                  <div>
                    <h4 className="text-white font-semibold mb-2 text-lg md:text-xl">Continuous Learning</h4>
                    <p className="text-windows-dark-text-secondary text-sm md:text-base">
                      Our team stays current with the latest technologies, best practices, and industry 
                      trends through ongoing training and certification programs.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-windows-dark-accent mr-3 text-xl md:text-2xl">✓</span>
                  <div>
                    <h4 className="text-white font-semibold mb-2 text-lg md:text-xl">Client-Focused</h4>
                    <p className="text-windows-dark-text-secondary text-sm md:text-base">
                      Every team member is committed to understanding your business needs and delivering 
                      solutions that drive measurable results.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Company Values */}
          <div className="windows-card p-8 md:p-12 mb-12 md:mb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 md:mb-8">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">Innovation</h3>
                <p className="text-windows-dark-text-secondary text-sm md:text-base">
                  We embrace cutting-edge technologies and innovative approaches to solve complex 
                  business challenges.
                </p>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">Excellence</h3>
                <p className="text-windows-dark-text-secondary text-sm md:text-base">
                  We are committed to delivering exceptional quality in every project, every interaction, 
                  and every solution.
                </p>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">Partnership</h3>
                <p className="text-windows-dark-text-secondary text-sm md:text-base">
                  We build long-term relationships with our clients and partners, working together 
                  to achieve shared success.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="windows-card p-12 md:p-16 bg-gradient-to-br from-windows-dark-accent/20 to-windows-dark-accent/5 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Work With Us?</h2>
            <p className="text-windows-dark-text-secondary mb-10 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Discover how Old West Solutions can help transform your business with our enterprise IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/#shop" className="windows-button windows-button-primary text-lg md:text-xl px-10 py-4">
                Explore Our Services
              </a>
              <a href="/#solutions" className="windows-button text-lg md:text-xl px-10 py-4">
                View Solutions
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

