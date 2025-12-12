import { TrendingUp, DollarSign, Building2, Calendar } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const metrics = [
  {
    label: 'Total Assets Under Management',
    value: '$847M',
    change: '+12.3%',
    trend: 'up',
    icon: DollarSign,
    expandable: true,
    chartData: [
      { month: 'Jan', value: 720 },
      { month: 'Feb', value: 735 },
      { month: 'Mar', value: 750 },
      { month: 'Apr', value: 770 },
      { month: 'May', value: 795 },
      { month: 'Jun', value: 810 },
      { month: 'Jul', value: 825 },
      { month: 'Aug', value: 847 },
    ],
  },
  {
    label: 'Portfolio Companies',
    value: '23',
    change: '+3',
    trend: 'up',
    icon: Building2,
    expandable: true,
    chartData: [
      { month: 'Jan', value: 18 },
      { month: 'Feb', value: 18 },
      { month: 'Mar', value: 19 },
      { month: 'Apr', value: 20 },
      { month: 'May', value: 20 },
      { month: 'Jun', value: 21 },
      { month: 'Jul', value: 22 },
      { month: 'Aug', value: 23 },
    ],
  },
  {
    label: 'Average IRR',
    value: '18.5%',
    change: '+2.1%',
    trend: 'up',
    icon: TrendingUp,
    expandable: true,
    chartData: [
      { month: 'Jan', value: 15.2 },
      { month: 'Feb', value: 15.8 },
      { month: 'Mar', value: 16.1 },
      { month: 'Apr', value: 16.5 },
      { month: 'May', value: 17.2 },
      { month: 'Jun', value: 17.6 },
      { month: 'Jul', value: 18.0 },
      { month: 'Aug', value: 18.5 },
    ],
  },
  {
    label: 'Fund Vintage',
    value: '2021',
    change: 'Q2 2021',
    trend: 'neutral',
    icon: Calendar,
    expandable: false,
    chartData: [],
  },
];

export function MetricsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current && hoveredIndex !== null) {
        const rect = sectionRef.current.getBoundingClientRect();
        // If the section is scrolled past (top is above viewport), reset hover
        if (rect.bottom < 0) {
          setHoveredIndex(null);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hoveredIndex]);

  return (
    <div className="mb-8" ref={sectionRef}>
      <h2 className="text-white font-bold mb-4">Current Metrics</h2>
      <div className="relative">
        {hoveredIndex !== null ? (
          <div className="space-y-4">
            {/* Expanded Card */}
            <motion.div
              key={`expanded-${hoveredIndex}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-lg shadow-lg border border-gray-200 p-6"
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  {(() => {
                    const Icon = metrics[hoveredIndex].icon;
                    return <Icon className="w-6 h-6 text-blue-600" />;
                  })()}
                  <h3 className="text-gray-900">
                    {metrics[hoveredIndex].label.replace(/Fund/gi, 'IV')}
                  </h3>
                </div>
                <div className="text-right">
                  <div className="text-gray-900 mb-1">{metrics[hoveredIndex].value}</div>
                  {metrics[hoveredIndex].trend === 'up' && (
                    <span className="text-green-600 text-sm">{metrics[hoveredIndex].change}</span>
                  )}
                  {metrics[hoveredIndex].trend === 'neutral' && (
                    <span className="text-gray-500 text-sm">{metrics[hoveredIndex].change}</span>
                  )}
                </div>
              </div>
              <motion.div
                key={`chart-${hoveredIndex}`}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 300 }}
                transition={{ duration: 0.25, ease: 'easeInOut' }}
              >
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={metrics[hoveredIndex].chartData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="month" stroke="#6b7280" />
                    <YAxis stroke="#6b7280" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'white',
                        border: '1px solid #e5e7eb',
                        borderRadius: '0.5rem',
                      }}
                    />
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="#2563eb"
                      strokeWidth={2}
                      dot={{ fill: '#2563eb', r: 4 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </motion.div>
            </motion.div>

            {/* Other Cards Below */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2, delay: 0.05 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {metrics.map((metric, index) => {
                if (index === hoveredIndex) return null;
                const Icon = metric.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className={`bg-white rounded-lg shadow-sm border border-gray-200 p-6 ${metric.expandable ? 'cursor-pointer hover:shadow-md' : ''} transition-shadow`}
                    onMouseEnter={() => metric.expandable && setHoveredIndex(index)}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <Icon className="w-5 h-5 text-blue-600" />
                      {metric.trend === 'up' && (
                        <span className="text-green-600 text-sm">{metric.change}</span>
                      )}
                      {metric.trend === 'neutral' && (
                        <span className="text-gray-500 text-sm">{metric.change}</span>
                      )}
                    </div>
                    <div className="text-gray-900 mb-1">{metric.value}</div>
                    <div className="text-gray-600 text-sm">{metric.label.replace(/Fund/gi, 'IV')}</div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {metrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <motion.div
                  key={index}
                  whileHover={metric.expandable ? { scale: 1.03, y: -2 } : undefined}
                  transition={{ duration: 0.2 }}
                  className={`bg-white rounded-lg shadow-sm border border-gray-200 p-6 ${metric.expandable ? 'cursor-pointer hover:shadow-md' : ''} transition-shadow`}
                  onMouseEnter={() => metric.expandable && setHoveredIndex(index)}
                >
                  <div className="flex items-center justify-between mb-3">
                    <Icon className="w-5 h-5 text-blue-600" />
                    {metric.trend === 'up' && (
                      <span className="text-green-600 text-sm">{metric.change}</span>
                    )}
                    {metric.trend === 'neutral' && (
                      <span className="text-gray-500 text-sm">{metric.change}</span>
                    )}
                  </div>
                  <div className="text-gray-900 mb-1">{metric.value}</div>
                  <div className="text-gray-600 text-sm">{metric.label.replace(/Fund/gi, 'IV')}</div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}