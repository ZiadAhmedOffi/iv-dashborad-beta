import { MetricsSection } from './components/MetricsSection';
import { ArticlesSection } from './components/ArticlesSection';
import { SteeringCommittee } from './components/SteeringCommittee';
import { PortfolioSection } from './components/PortfolioSection';
import { DocumentsSection } from './components/DocumentsSection';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Background */}
      <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAgNHYyaC0ydjJoMnYtMmgydi0yaC0yem0tMiAydi0yaC0ydjJoMnptMi0xMHYyaDJ2LTJoLTJ6bS0yIDB2Mmg0di0yaC00em0yLTJ2Mmgydi0yaC0yem0wLTR2Mmgydi0yaC0yem0tMiA0djJoNHYtMmgtNHptMiAydjJoMnYtMmgtMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-white mb-3">Growth Equity Fund III</h1>
            <p className="text-blue-100 max-w-3xl">
              A strategic investment vehicle focused on high-growth technology companies in emerging markets
            </p>
          </div>

          {/* Metrics Section */}
          <MetricsSection />
        </div>
      </div>

      {/* Rest of content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Articles Section */}
        <ArticlesSection />

        {/* Steering Committee */}
        <SteeringCommittee />

        {/* Portfolio Section */}
        <PortfolioSection />

        {/* Documents Section */}
        <DocumentsSection />
      </div>
    </div>
  );
}