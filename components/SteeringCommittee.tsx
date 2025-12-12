import { Mail, Linkedin } from 'lucide-react';

const members = [
  {
    name: 'Sarah Chen',
    role: 'Chair, Steering Committee',
    bio: 'Former CEO of TechVentures Asia with 20+ years in growth equity',
    image: 'https://images.unsplash.com/photo-1496180470114-6ef490f3ff22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHdvbWFufGVufDF8fHx8MTc2NTQzNzkwOXww&ixlib=rb-4.1.0&q=80&w=1080',
    email: 'sarah.chen@example.com',
    linkedin: '#',
  },
  {
    name: 'Michael Rodriguez',
    role: 'Investment Strategy Lead',
    bio: 'Senior Partner with expertise in emerging market technology investments',
    image: 'https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMG1hbnxlbnwxfHx8fDE3NjU1MDI4OTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    email: 'michael.rodriguez@example.com',
    linkedin: '#',
  },
  {
    name: 'Priya Kapoor',
    role: 'Risk Management Officer',
    bio: 'Risk assessment specialist with deep experience in portfolio management',
    image: 'https://images.unsplash.com/photo-1758518727888-ffa196002e59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGVjdXRpdmUlMjBwb3J0cmFpdCUyMHdvbWFufGVufDF8fHx8MTc2NTUyNTcwNnww&ixlib=rb-4.1.0&q=80&w=1080',
    email: 'priya.kapoor@example.com',
    linkedin: '#',
  },
  {
    name: 'David Thompson',
    role: 'Portfolio Advisor',
    bio: 'Serial entrepreneur and advisor to multiple high-growth companies',
    image: 'https://images.unsplash.com/photo-1543132220-7bc04a0e790a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGVjdXRpdmUlMjBwb3J0cmFpdCUyMG1hbnxlbnwxfHx8fDE3NjU0Nzc3Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    email: 'david.thompson@example.com',
    linkedin: '#',
  },
];

export function SteeringCommittee() {
  return (
    <div className="mb-8">
      <h2 className="text-gray-900 mb-4">Steering Committee</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {members.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
          >
            <div className="flex gap-4">
              <img
                src={member.image}
                alt={member.name}
                className="w-20 h-20 rounded-full object-cover flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <h3 className="text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm mb-3">{member.bio}</p>
                <div className="flex items-center gap-3">
                  <a
                    href={`mailto:${member.email}`}
                    className="text-gray-500 hover:text-gray-700 transition-colors"
                    title="Email"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                  <a
                    href={member.linkedin}
                    className="text-gray-500 hover:text-gray-700 transition-colors"
                    title="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
