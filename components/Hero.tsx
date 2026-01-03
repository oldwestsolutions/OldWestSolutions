export default function Hero() {
  return (
    <section id="home" className="relative bg-gradient-to-b from-windows-dark-bg to-windows-dark-surface py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Enterprise IT Solutions
          </h1>
          <p className="text-xl md:text-2xl text-windows-dark-text-secondary mb-8 max-w-3xl mx-auto">
            Empowering your business with cutting-edge technology and reliable IT services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="windows-button windows-button-primary text-lg px-8 py-3">
              Get Started
            </button>
            <button className="windows-button text-lg px-8 py-3">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

