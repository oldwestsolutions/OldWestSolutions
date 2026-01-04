import { MapPin, Mail, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-windows-dark-surface border-t border-windows-dark-border mt-12 md:mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 md:gap-8">
          <div>
            <h3 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4">Old West Solutions</h3>
            <p className="text-windows-dark-text-secondary text-xs md:text-sm">
              Enterprise IT services and solutions for modern businesses.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-3 md:mb-4 text-sm md:text-base">Products</h4>
            <ul className="space-y-2 text-xs md:text-sm text-windows-dark-text-secondary">
              <li><a href="/products/virtual-machines" className="hover:text-windows-dark-accent">Virtual Machines</a></li>
              <li><a href="/products/applications" className="hover:text-windows-dark-accent">Applications</a></li>
              <li><a href="/products/blockchain" className="hover:text-windows-dark-accent">Blockchain</a></li>
              <li><a href="/products/kubernetes" className="hover:text-windows-dark-accent">Kubernetes</a></li>
              <li><a href="/products/crypto" className="hover:text-windows-dark-accent">Crypto</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-3 md:mb-4 text-sm md:text-base">Solutions</h4>
            <ul className="space-y-2 text-xs md:text-sm text-windows-dark-text-secondary">
              <li><a href="/solutions/dev-ops-ci-cd" className="hover:text-windows-dark-accent">Dev Ops CI/CD</a></li>
              <li><a href="/solutions/artificial-intelligence" className="hover:text-windows-dark-accent">Artificial Intelligence</a></li>
              <li><a href="/solutions/machine-learning" className="hover:text-windows-dark-accent">Machine Learning</a></li>
              <li><a href="/solutions/quantum-computing" className="hover:text-windows-dark-accent">Quantum Computing</a></li>
              <li><a href="/solutions/cybersecurity" className="hover:text-windows-dark-accent">CyberSecurity</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-3 md:mb-4 text-sm md:text-base">Company</h4>
            <ul className="space-y-2 text-xs md:text-sm text-windows-dark-text-secondary">
              <li><a href="/university" className="hover:text-windows-dark-accent">University</a></li>
              <li><a href="/careers" className="hover:text-windows-dark-accent">Careers</a></li>
              <li><a href="/about" className="hover:text-windows-dark-accent">About Us</a></li>
              <li><a href="#contact" className="hover:text-windows-dark-accent">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-3 md:mb-4 text-sm md:text-base">Contact</h4>
            <ul className="space-y-3 text-xs md:text-sm text-windows-dark-text-secondary">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-windows-dark-accent" />
                <a href="mailto:info@oldwestsolutions.com" className="hover:text-windows-dark-accent transition-colors">
                  Mail Us
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 text-windows-dark-accent" />
                <a href="tel:9453824660" className="hover:text-windows-dark-accent transition-colors">
                  945 382 4660
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-windows-dark-accent" />
                <span>4230 Avondale Avenue<br />Dallas, TX 75219</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-windows-dark-border text-center text-xs md:text-sm text-windows-dark-text-secondary">
          <p>&copy; {new Date().getFullYear()} Old West Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

