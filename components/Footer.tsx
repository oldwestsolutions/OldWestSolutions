export default function Footer() {
  return (
    <footer className="bg-windows-dark-surface border-t border-windows-dark-border mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Old West Solutions</h3>
            <p className="text-windows-dark-text-secondary text-sm">
              Enterprise IT services and solutions for modern businesses.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-windows-dark-text-secondary">
              <li><a href="#services" className="hover:text-windows-dark-accent">Cloud Solutions</a></li>
              <li><a href="#services" className="hover:text-windows-dark-accent">Network Security</a></li>
              <li><a href="#services" className="hover:text-windows-dark-accent">IT Consulting</a></li>
              <li><a href="#services" className="hover:text-windows-dark-accent">Managed Services</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-windows-dark-text-secondary">
              <li><a href="#about" className="hover:text-windows-dark-accent">About Us</a></li>
              <li><a href="#contact" className="hover:text-windows-dark-accent">Contact</a></li>
              <li><a href="#" className="hover:text-windows-dark-accent">Careers</a></li>
              <li><a href="#" className="hover:text-windows-dark-accent">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-windows-dark-text-secondary">
              <li>Email: info@oldwestsolutions.com</li>
              <li>Phone: (555) 123-4567</li>
              <li>Address: 123 Tech Street</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-windows-dark-border text-center text-sm text-windows-dark-text-secondary">
          <p>&copy; {new Date().getFullYear()} Old West Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

