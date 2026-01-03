import Header from '@/components/Header'
import Link from 'next/link'

export default function DigitalTransformationPage() {
  return (
    <main className="min-h-screen bg-windows-dark-bg">
      <Header />
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link href="/#solutions" className="text-windows-dark-accent hover:text-windows-dark-accent-hover mb-8 inline-block">
            ← Back to Solutions
          </Link>
        </div>

        {/* Immersive Full-Page Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 p-4 md:p-6 max-w-[1920px] mx-auto">
          {/* Hero Section */}
          <div className="md:col-span-2 lg:col-span-4 windows-card p-12 md:p-16 bg-gradient-to-br from-purple-600/30 via-pink-500/20 to-purple-400/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <div className="text-8xl md:text-9xl mb-6">🚀</div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Digital Transformation</h1>
              <p className="text-xl md:text-2xl text-windows-dark-text-secondary max-w-4xl leading-relaxed">
                Transform your business with cutting-edge digital technologies. Drive innovation, improve customer 
                experience, and create competitive advantages through strategic digital initiatives that reshape 
                how you operate, compete, and deliver value.
              </p>
            </div>
          </div>

          {/* Transformation Strategy - Large */}
          <div className="md:col-span-2 lg:col-span-2 windows-card p-8 md:p-12 hover:border-windows-dark-accent transition-all bg-gradient-to-br from-windows-dark-surface to-windows-dark-bg">
            <div className="text-6xl md:text-7xl mb-6">🎯</div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Transformation Strategy</h2>
            <p className="text-windows-dark-text-secondary text-base md:text-lg mb-6 leading-relaxed">
              Develop a comprehensive digital transformation roadmap aligned with your business objectives. 
              We work with you to identify opportunities, prioritize initiatives, and create a clear path forward.
            </p>
            <ul className="space-y-3 text-windows-dark-text-secondary text-base">
              <li className="flex items-start">
                <span className="text-windows-dark-accent mr-3 text-xl">→</span>
                <span>Digital maturity assessment and capability gap analysis</span>
              </li>
              <li className="flex items-start">
                <span className="text-windows-dark-accent mr-3 text-xl">→</span>
                <span>Technology roadmap development with phased approach</span>
              </li>
              <li className="flex items-start">
                <span className="text-windows-dark-accent mr-3 text-xl">→</span>
                <span>Change management and organizational readiness planning</span>
              </li>
              <li className="flex items-start">
                <span className="text-windows-dark-accent mr-3 text-xl">→</span>
                <span>ROI modeling and success metrics definition</span>
              </li>
            </ul>
          </div>

          {/* Transformation Services */}
          <div className="windows-card p-6 md:p-8 hover:border-windows-dark-accent transition-all group cursor-pointer">
            <div className="text-5xl md:text-6xl mb-4">🤖</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">AI & Automation</h2>
            <p className="text-windows-dark-text-secondary text-sm md:text-base mb-4">
              Leverage artificial intelligence and automation to streamline operations and enhance decision-making. 
              Transform manual processes into intelligent, automated workflows.
            </p>
            <div className="text-windows-dark-accent text-sm font-medium">Learn more →</div>
          </div>

          <div className="windows-card p-6 md:p-8 hover:border-windows-dark-accent transition-all group cursor-pointer">
            <div className="text-5xl md:text-6xl mb-4">📱</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Customer Experience</h2>
            <p className="text-windows-dark-text-secondary text-sm md:text-base mb-4">
              Create seamless, personalized customer experiences across all digital touchpoints. 
              Omnichannel engagement and customer journey optimization.
            </p>
            <div className="text-windows-dark-accent text-sm font-medium">Learn more →</div>
          </div>

          <div className="windows-card p-6 md:p-8 hover:border-windows-dark-accent transition-all group cursor-pointer">
            <div className="text-5xl md:text-6xl mb-4">📊</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Data-Driven Insights</h2>
            <p className="text-windows-dark-text-secondary text-sm md:text-base mb-4">
              Transform data into actionable insights that drive business growth and innovation. 
              Advanced analytics and predictive modeling.
            </p>
            <div className="text-windows-dark-accent text-sm font-medium">Learn more →</div>
          </div>

          <div className="windows-card p-6 md:p-8 hover:border-windows-dark-accent transition-all group cursor-pointer">
            <div className="text-5xl md:text-6xl mb-4">☁️</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Cloud-First Approach</h2>
            <p className="text-windows-dark-text-secondary text-sm md:text-base mb-4">
              Adopt cloud-native technologies for agility, scalability, and innovation. 
              Modern application development and DevOps practices.
            </p>
            <div className="text-windows-dark-accent text-sm font-medium">Learn more →</div>
          </div>

          <div className="windows-card p-6 md:p-8 hover:border-windows-dark-accent transition-all group cursor-pointer">
            <div className="text-5xl md:text-6xl mb-4">🔄</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Agile Transformation</h2>
            <p className="text-windows-dark-text-secondary text-sm md:text-base mb-4">
              Implement agile methodologies and DevOps practices for faster delivery cycles. 
              Continuous integration, delivery, and deployment.
            </p>
            <div className="text-windows-dark-accent text-sm font-medium">Learn more →</div>
          </div>

          {/* Transformation Pillars */}
          <div className="md:col-span-2 lg:col-span-4 windows-card p-10 md:p-16 bg-gradient-to-br from-windows-dark-surface to-windows-dark-bg">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-10">Transformation Pillars</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <div>
                <div className="text-5xl mb-4">🔧</div>
                <h3 className="text-2xl font-semibold text-white mb-4">Technology Modernization</h3>
                <p className="text-windows-dark-text-secondary text-base md:text-lg leading-relaxed mb-4">
                  Modernize legacy systems and adopt cutting-edge technologies that enable innovation. 
                  Replace outdated infrastructure with cloud-native, scalable solutions.
                </p>
                <p className="text-windows-dark-text-secondary text-base md:text-lg leading-relaxed">
                  Containerization, microservices, API-first architecture, and modern development frameworks 
                  to build applications that scale and adapt quickly.
                </p>
              </div>
              <div>
                <div className="text-5xl mb-4">⚙️</div>
                <h3 className="text-2xl font-semibold text-white mb-4">Process Optimization</h3>
                <p className="text-windows-dark-text-secondary text-base md:text-lg leading-relaxed mb-4">
                  Redesign business processes to be more efficient, customer-centric, and data-driven. 
                  Eliminate bottlenecks and streamline operations.
                </p>
                <p className="text-windows-dark-text-secondary text-base md:text-lg leading-relaxed">
                  Workflow automation, robotic process automation (RPA), and intelligent process mining 
                  to identify and eliminate inefficiencies.
                </p>
              </div>
              <div>
                <div className="text-5xl mb-4">👥</div>
                <h3 className="text-2xl font-semibold text-white mb-4">Culture & Change</h3>
                <p className="text-windows-dark-text-secondary text-base md:text-lg leading-relaxed mb-4">
                  Foster a culture of innovation and continuous improvement across your organization. 
                  Empower employees with digital tools and skills.
                </p>
                <p className="text-windows-dark-text-secondary text-base md:text-lg leading-relaxed">
                  Change management, digital literacy training, and creating an environment where experimentation 
                  and innovation are encouraged and rewarded.
                </p>
              </div>
              <div>
                <div className="text-5xl mb-4">🧪</div>
                <h3 className="text-2xl font-semibold text-white mb-4">Innovation Labs</h3>
                <p className="text-windows-dark-text-secondary text-base md:text-lg leading-relaxed mb-4">
                  Establish innovation labs to experiment with emerging technologies and new business models. 
                  Rapid prototyping and proof-of-concept development.
                </p>
                <p className="text-windows-dark-text-secondary text-base md:text-lg leading-relaxed">
                  Explore AI, IoT, blockchain, and other emerging technologies to identify new opportunities 
                  and competitive advantages.
                </p>
              </div>
            </div>
          </div>

          {/* Transformation Journey */}
          <div className="md:col-span-2 lg:col-span-4 windows-card p-10 md:p-16 bg-gradient-to-br from-purple-600/10 to-pink-500/10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-10">Your Transformation Journey</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              <div className="text-center">
                <div className="text-6xl mb-4">📊</div>
                <div className="text-3xl font-bold text-windows-dark-accent mb-2">Assess</div>
                <p className="text-windows-dark-text-secondary text-base">
                  Evaluate current state, identify opportunities, and define transformation vision. 
                  Digital maturity assessment and gap analysis.
                </p>
              </div>
              <div className="text-center">
                <div className="text-6xl mb-4">🎨</div>
                <div className="text-3xl font-bold text-windows-dark-accent mb-2">Design</div>
                <p className="text-windows-dark-text-secondary text-base">
                  Create transformation roadmap and design target state architecture. 
                  Define success metrics and change management strategy.
                </p>
              </div>
              <div className="text-center">
                <div className="text-6xl mb-4">🚀</div>
                <div className="text-3xl font-bold text-windows-dark-accent mb-2">Implement</div>
                <p className="text-windows-dark-text-secondary text-base">
                  Execute transformation initiatives with agile methodology. 
                  Continuous delivery and iterative improvement.
                </p>
              </div>
              <div className="text-center">
                <div className="text-6xl mb-4">📈</div>
                <div className="text-3xl font-bold text-windows-dark-accent mb-2">Optimize</div>
                <p className="text-windows-dark-text-secondary text-base">
                  Measure results, optimize performance, and scale successful initiatives. 
                  Continuous improvement and innovation.
                </p>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="md:col-span-2 lg:col-span-4 windows-card p-10 md:p-16 bg-gradient-to-br from-windows-dark-surface to-windows-dark-bg">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-10">Transformation Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <div>
                <div className="text-5xl mb-4">📈</div>
                <h3 className="text-2xl font-semibold text-white mb-4">Increased Revenue</h3>
                <p className="text-windows-dark-text-secondary text-base md:text-lg leading-relaxed">
                  Digital transformation enables new revenue streams and business models. Improve customer 
                  acquisition and retention through enhanced digital experiences.
                </p>
              </div>
              <div>
                <div className="text-5xl mb-4">⚡</div>
                <h3 className="text-2xl font-semibold text-white mb-4">Operational Efficiency</h3>
                <p className="text-windows-dark-text-secondary text-base md:text-lg leading-relaxed">
                  Streamline operations and reduce costs through automation and process optimization. 
                  Improve productivity and reduce time-to-market for new products and services.
                </p>
              </div>
              <div>
                <div className="text-5xl mb-4">😊</div>
                <h3 className="text-2xl font-semibold text-white mb-4">Customer Experience</h3>
                <p className="text-windows-dark-text-secondary text-base md:text-lg leading-relaxed">
                  Deliver exceptional customer experiences across all touchpoints. Personalization, 
                  omnichannel engagement, and seamless interactions drive customer satisfaction.
                </p>
              </div>
              <div>
                <div className="text-5xl mb-4">🏆</div>
                <h3 className="text-2xl font-semibold text-white mb-4">Competitive Advantage</h3>
                <p className="text-windows-dark-text-secondary text-base md:text-lg leading-relaxed">
                  Stay ahead of competitors with innovative digital capabilities. Rapid innovation, 
                  data-driven decision making, and agile operations create sustainable competitive advantages.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="md:col-span-2 lg:col-span-4 windows-card p-12 md:p-16 bg-gradient-to-br from-windows-dark-accent/20 to-windows-dark-accent/5 text-center">
            <div className="text-7xl md:text-8xl mb-6">🌟</div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Begin Your Digital Journey</h2>
            <p className="text-windows-dark-text-secondary mb-10 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Partner with us to transform your business and unlock new opportunities in the digital age. 
              Our transformation experts will guide you through every step of your journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="windows-button windows-button-primary text-lg md:text-xl px-10 py-4">
                Start Transformation
              </button>
              <button className="windows-button text-lg md:text-xl px-10 py-4">
                View Success Stories
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
