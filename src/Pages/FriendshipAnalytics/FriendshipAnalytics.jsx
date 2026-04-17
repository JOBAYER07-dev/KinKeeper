import React from 'react';
import { useTimeline } from '../../Context/TimelineContext';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const FriendshipAnalytics = () => {
  const { entries } = useTimeline();

  const interactionCounts = entries.reduce(
    (acc, entry) => {
      acc[entry.type] = (acc[entry.type] || 0) + 1;
      return acc;
    },
    { Call: 0, Text: 0, Video: 0 },
  );

  const data = [
    { name: 'Text', value: interactionCounts['Text'] },
    { name: 'Call', value: interactionCounts['Call'] },
    { name: 'Video', value: interactionCounts['Video'] },
  ].filter(item => item.value > 0);

  const COLORS = {
    Text: '#8B5CF6', // Purple
    Call: '#2D4A3E', // Dark Green
    Video: '#3CB371', // Light Green
  };

  // এখানে flex এবং flex-col যোগ করা হয়েছে যাতে সবকিছু মাঝখানে আসে
  return (
    <div className="container mx-auto flex flex-col items-center px-4 py-10 bg-[#FAFAFA] min-h-screen">
      {/* টাইটেলটাকেও মাঝখানে রাখার জন্য text-center দেওয়া যায়, অথবা বামে রাখতে চাইলে শুধু w-full max-w-3xl দিতে পারো */}
      <h1 className="text-4xl font-extrabold text-[#1f2937] mb-8 w-full max-w-3xl">
        Friendship Analytics
      </h1>

      {/* এখানে mx-auto এবং w-full যোগ করা হয়েছে */}
      <div className="bg-white border border-gray-100 shadow-sm rounded-xl p-8 w-full max-w-3xl mx-auto">
        <h3 className="text-lg font-semibold text-[#2D4A3E] mb-6 text-center">
          By Interaction Type
        </h3>

        {entries.length === 0 ? (
          <div className="text-center py-20 text-gray-400">
            <p>No interactions logged yet.</p>
            <p className="text-sm mt-2">
              Go to a friend's details page to log a Call, Text, or Video.
            </p>
          </div>
        ) : (
          <div className="h-80 w-full flex justify-center items-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  innerRadius={90}
                  outerRadius={120}
                  paddingAngle={5}
                  dataKey="value"
                  stroke="none"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[entry.name]} />
                  ))}
                </Pie>

                <Tooltip
                  contentStyle={{
                    borderRadius: '10px',
                    border: 'none',
                    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
                  }}
                />

                <Legend
                  iconType="circle"
                  verticalAlign="bottom"
                  align="center"
                  wrapperStyle={{ paddingTop: '20px' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
    </div>
  );
};

export default FriendshipAnalytics;
