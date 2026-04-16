import React from 'react';

export const statusConfig = {
  overdue: { label: 'Overdue', className: 'bg-red-100 text-red-800' },
  'almost due': {
    label: 'Almost Due',
    className: 'bg-yellow-100 text-yellow-800',
  },
  'on-track': { label: 'On-Track', className: 'bg-green-100 text-green-800' },
};

export const tagColors = [
  'bg-violet-100 text-violet-800',
  'bg-blue-100 text-blue-800',
  'bg-pink-100 text-pink-800',
  'bg-emerald-100 text-emerald-800',
  'bg-orange-100 text-orange-800',
];

const FriendsShowPage = ({ friend }) => {
 
  if (!friend) return null;

  const status = statusConfig[friend.status] || statusConfig['on-track'];

  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-5 flex flex-col items-center gap-2 text-center shadow-sm hover:shadow-md transition-shadow h-full cursor-pointer">
      <img
        src={friend.picture}
        alt={friend.name}
        className="w-16 h-16 rounded-full object-cover border border-gray-200"
      />
      <p className="font-semibold text-gray-800 text-base">{friend.name}</p>
      <p className="text-sm text-gray-400">{friend.days_since_contact}d ago</p>
      <div className="flex flex-wrap gap-1 justify-center">
        {friend.tags?.map((tag, i) => (
          <span
            key={tag}
            className={`text-xs font-semibold px-2 py-0.5 rounded-full uppercase tracking-wide ${tagColors[i % tagColors.length]}`}
          >
            {tag}
          </span>
        ))}
      </div>
      <span
        className={`text-xs font-semibold px-3 py-1 rounded-full mt-1 ${status.className}`}
      >
        {status.label}
      </span>
    </div>
  );
};

export default FriendsShowPage;
