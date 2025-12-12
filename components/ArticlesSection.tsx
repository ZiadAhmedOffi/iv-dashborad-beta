import { ExternalLink, Calendar } from 'lucide-react';

const articles = [
  {
    title: 'Growth Equity Fund III Closes with Record $847M in Commitments',
    source: 'Financial Times',
    date: 'November 28, 2024',
    url: '#',
  },
  {
    title: 'Strategic Investment in Southeast Asian Tech Sector Shows Promise',
    source: 'Bloomberg Markets',
    date: 'October 15, 2024',
    url: '#',
  },
  {
    title: 'BIC Investment Philosophy: Driving Sustainable Growth',
    source: 'Investment Weekly',
    date: 'September 3, 2024',
    url: '#',
  },
  {
    title: 'Fund Reports 18.5% IRR in Latest Quarter',
    source: 'Private Equity International',
    date: 'August 22, 2024',
    url: '#',
  },
];

export function ArticlesSection() {
  return (
    <div className="mb-8">
      <h2 className="text-gray-900 mb-4">Related Articles</h2>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 divide-y divide-gray-200">
        {articles.map((article, index) => (
          <a
            key={index}
            href={article.url}
            className="block p-4 hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-gray-900 mb-2">{article.title}</h3>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <span>{article.source}</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {article.date}
                  </span>
                </div>
              </div>
              <ExternalLink className="w-5 h-5 text-gray-400 flex-shrink-0" />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
