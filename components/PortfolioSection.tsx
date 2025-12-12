import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

const portfolioCompanies = [
  {
    name: 'TechFlow Solutions',
    sector: 'Enterprise SaaS',
    investmentDate: 'Mar 2022',
    ownership: '18.5%',
    currentValue: '$42.3M',
    performance: 'up',
    performanceValue: '+24.5%',
  },
  {
    name: 'GreenEnergy Innovations',
    sector: 'Clean Technology',
    investmentDate: 'Jun 2021',
    ownership: '22.0%',
    currentValue: '$58.7M',
    performance: 'up',
    performanceValue: '+31.2%',
  },
  {
    name: 'HealthAI Labs',
    sector: 'Healthcare Tech',
    investmentDate: 'Sep 2022',
    ownership: '15.3%',
    currentValue: '$35.1M',
    performance: 'up',
    performanceValue: '+18.7%',
  },
  {
    name: 'FinTrust Digital',
    sector: 'Fintech',
    investmentDate: 'Jan 2023',
    ownership: '20.5%',
    currentValue: '$48.9M',
    performance: 'neutral',
    performanceValue: '+2.1%',
  },
  {
    name: 'LogiChain Systems',
    sector: 'Supply Chain',
    investmentDate: 'Nov 2021',
    ownership: '25.0%',
    currentValue: '$67.2M',
    performance: 'up',
    performanceValue: '+42.8%',
  },
  {
    name: 'EduConnect Platform',
    sector: 'EdTech',
    investmentDate: 'Apr 2023',
    ownership: '12.8%',
    currentValue: '$28.5M',
    performance: 'down',
    performanceValue: '-5.3%',
  },
];

export function PortfolioSection() {
  return (
    <div className="mb-8">
      <h2 className="text-gray-900 mb-4">Portfolio Companies</h2>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        {/* Desktop view */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left px-6 py-3 text-gray-700">Company</th>
                <th className="text-left px-6 py-3 text-gray-700">Sector</th>
                <th className="text-left px-6 py-3 text-gray-700">Investment Date</th>
                <th className="text-left px-6 py-3 text-gray-700">Ownership</th>
                <th className="text-left px-6 py-3 text-gray-700">Current Value</th>
                <th className="text-left px-6 py-3 text-gray-700">Performance</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {portfolioCompanies.map((company, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-gray-900">{company.name}</td>
                  <td className="px-6 py-4 text-gray-600">{company.sector}</td>
                  <td className="px-6 py-4 text-gray-600">{company.investmentDate}</td>
                  <td className="px-6 py-4 text-gray-600">{company.ownership}</td>
                  <td className="px-6 py-4 text-gray-900">{company.currentValue}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1">
                      {company.performance === 'up' && (
                        <>
                          <TrendingUp className="w-4 h-4 text-green-600" />
                          <span className="text-green-600">{company.performanceValue}</span>
                        </>
                      )}
                      {company.performance === 'down' && (
                        <>
                          <TrendingDown className="w-4 h-4 text-red-600" />
                          <span className="text-red-600">{company.performanceValue}</span>
                        </>
                      )}
                      {company.performance === 'neutral' && (
                        <>
                          <Minus className="w-4 h-4 text-gray-500" />
                          <span className="text-gray-600">{company.performanceValue}</span>
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile view */}
        <div className="md:hidden divide-y divide-gray-200">
          {portfolioCompanies.map((company, index) => (
            <div key={index} className="p-4">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="text-gray-900 mb-1">{company.name}</h3>
                  <p className="text-gray-600 text-sm">{company.sector}</p>
                </div>
                <div className="flex items-center gap-1">
                  {company.performance === 'up' && (
                    <>
                      <TrendingUp className="w-4 h-4 text-green-600" />
                      <span className="text-green-600 text-sm">{company.performanceValue}</span>
                    </>
                  )}
                  {company.performance === 'down' && (
                    <>
                      <TrendingDown className="w-4 h-4 text-red-600" />
                      <span className="text-red-600 text-sm">{company.performanceValue}</span>
                    </>
                  )}
                  {company.performance === 'neutral' && (
                    <>
                      <Minus className="w-4 h-4 text-gray-500" />
                      <span className="text-gray-600 text-sm">{company.performanceValue}</span>
                    </>
                  )}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>
                  <span className="text-gray-600">Invested: </span>
                  <span className="text-gray-900">{company.investmentDate}</span>
                </div>
                <div>
                  <span className="text-gray-600">Ownership: </span>
                  <span className="text-gray-900">{company.ownership}</span>
                </div>
                <div className="col-span-2">
                  <span className="text-gray-600">Current Value: </span>
                  <span className="text-gray-900">{company.currentValue}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
