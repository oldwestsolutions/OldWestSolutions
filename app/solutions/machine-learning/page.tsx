import Header from '@/components/Header'
import Link from 'next/link'

export default function MachineLearningPage() {
  return (
    <main className="min-h-screen bg-windows-dark-bg">
      <Header />
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link href="/#solutions" className="text-windows-dark-accent hover:text-windows-dark-accent-hover mb-8 inline-block">
            ← Back to Solutions
          </Link>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="windows-card p-12 md:p-16 bg-gradient-to-br from-windows-dark-accent/30 via-windows-dark-accent/20 to-windows-dark-accent/10 text-center mb-12 md:mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Machine Learning</h1>
            <p className="text-xl md:text-2xl text-windows-dark-text-secondary max-w-3xl mx-auto">
              Build intelligent systems that learn from data and improve performance over time without explicit programming.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
            <div className="windows-card p-6 md:p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Supervised Learning</h3>
              <p className="text-windows-dark-text-secondary mb-4">
                Train models on labeled data to make predictions and classifications for new, unseen data.
              </p>
              <ul className="space-y-2 text-windows-dark-text-secondary">
                <li>• Classification models</li>
                <li>• Regression analysis</li>
                <li>• Feature engineering</li>
                <li>• Model evaluation</li>
              </ul>
            </div>

            <div className="windows-card p-6 md:p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Unsupervised Learning</h3>
              <p className="text-windows-dark-text-secondary mb-4">
                Discover hidden patterns and structures in unlabeled data through clustering and dimensionality reduction.
              </p>
              <ul className="space-y-2 text-windows-dark-text-secondary">
                <li>• Clustering algorithms</li>
                <li>• Anomaly detection</li>
                <li>• Dimensionality reduction</li>
                <li>• Pattern recognition</li>
              </ul>
            </div>

            <div className="windows-card p-6 md:p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Deep Learning</h3>
              <p className="text-windows-dark-text-secondary mb-4">
                Leverage neural networks with multiple layers to solve complex problems in vision, language, and more.
              </p>
              <ul className="space-y-2 text-windows-dark-text-secondary">
                <li>• Neural network architecture</li>
                <li>• Convolutional networks</li>
                <li>• Recurrent networks</li>
                <li>• Transfer learning</li>
              </ul>
            </div>

            <div className="windows-card p-6 md:p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Model Training & Optimization</h3>
              <p className="text-windows-dark-text-secondary mb-4">
                Optimize model performance through hyperparameter tuning and advanced training techniques.
              </p>
              <ul className="space-y-2 text-windows-dark-text-secondary">
                <li>• Hyperparameter optimization</li>
                <li>• Cross-validation</li>
                <li>• Model selection</li>
                <li>• Performance tuning</li>
              </ul>
            </div>

            <div className="windows-card p-6 md:p-8">
              <h3 className="text-2xl font-bold text-white mb-4">MLOps & Deployment</h3>
              <p className="text-windows-dark-text-secondary mb-4">
                Deploy and manage machine learning models in production with monitoring and continuous improvement.
              </p>
              <ul className="space-y-2 text-windows-dark-text-secondary">
                <li>• Model deployment pipelines</li>
                <li>• A/B testing</li>
                <li>• Model versioning</li>
                <li>• Performance monitoring</li>
              </ul>
            </div>

            <div className="windows-card p-6 md:p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Data Preparation</h3>
              <p className="text-windows-dark-text-secondary mb-4">
                Prepare and preprocess data for machine learning with cleaning, transformation, and feature extraction.
              </p>
              <ul className="space-y-2 text-windows-dark-text-secondary">
                <li>• Data cleaning</li>
                <li>• Feature engineering</li>
                <li>• Data transformation</li>
                <li>• Data validation</li>
              </ul>
            </div>
          </div>

          <div className="windows-card p-12 md:p-16 bg-gradient-to-br from-windows-dark-accent/20 to-windows-dark-accent/5 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Build ML Solutions?</h2>
            <p className="text-windows-dark-text-secondary mb-10 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Partner with us to develop and deploy machine learning models that drive business value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="windows-button windows-button-primary text-lg md:text-xl px-10 py-4">
                Get Started
              </button>
              <button className="windows-button text-lg md:text-xl px-10 py-4">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

