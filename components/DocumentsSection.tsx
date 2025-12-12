import { FileText, Download } from 'lucide-react';

const documents = [
  {
    name: 'Investment Vehicle Mandate',
    description: 'Comprehensive overview of the fund\'s investment objectives and strategy',
    size: '2.4 MB',
    type: 'PDF',
    lastUpdated: 'Dec 1, 2024',
  },
  {
    name: 'Leadership Team Document',
    description: 'Detailed profiles of the fund\'s leadership and advisory team',
    size: '1.8 MB',
    type: 'PDF',
    lastUpdated: 'Nov 15, 2024',
  },
  {
    name: 'Investment Vehicle Orientation',
    description: 'Onboarding guide for new investors and stakeholders',
    size: '3.1 MB',
    type: 'PDF',
    lastUpdated: 'Oct 22, 2024',
  },
  {
    name: 'BIC Investing Philosophy',
    description: 'Framework and principles guiding our investment approach',
    size: '1.5 MB',
    type: 'PDF',
    lastUpdated: 'Sep 10, 2024',
  },
];

export function DocumentsSection() {
  const handleDownload = (documentName: string) => {
    // In a real application, this would trigger an actual file download
    console.log(`Downloading: ${documentName}`);
  };

  return (
    <div className="mb-8">
      <h2 className="text-gray-900 mb-4">Documents</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {documents.map((doc, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-gray-900 mb-1">{doc.name.replace(' Document', '')}</h3>
                <p className="text-gray-600 text-sm mb-3">{doc.description}</p>
                <div className="flex items-center justify-between gap-3">
                  <div className="text-sm text-gray-500">
                    <span>{doc.type}</span>
                    <span className="mx-2">•</span>
                    <span>{doc.size}</span>
                  </div>
                  <button
                    onClick={() => handleDownload(doc.name)}
                    className="flex items-center gap-2 px-3 py-1.5 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm"
                  >
                    <Download className="w-4 h-4" />
                    Download
                  </button>
                </div>
                <div className="text-xs text-gray-500 mt-2">
                  Updated {doc.lastUpdated}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}