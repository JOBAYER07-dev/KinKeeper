import React, { useState } from 'react';
import { FaPhoneAlt, FaRegCommentDots, FaVideo } from 'react-icons/fa';
import { useTimeline } from '../../Context/TimelineContext';

const icons = {
  Call: { icon: <FaPhoneAlt />, bg: 'bg-green-100', text: 'text-green-600' },
  Text: {
    icon: <FaRegCommentDots />,
    bg: 'bg-blue-100',
    text: 'text-blue-600',
  },
  Video: { icon: <FaVideo />, bg: 'bg-purple-100', text: 'text-purple-600' },
};

const TimelinePage = () => {
  const { entries } = useTimeline();
  const [filter, setFilter] = useState('All');

  const filtered =
    filter === 'All' ? entries : entries.filter(e => e.type === filter);

  return (
    <div className="max-w-2xl mx-auto px-4 py-8 bg-[#FAFAFA] min-h-screen">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-6">Timeline</h1>

      {/* Filter */}
      <select
        className="select select-bordered select-sm mb-5 w-48"
        value={filter}
        onChange={e => setFilter(e.target.value)}
      >
        <option value="All">Filter timeline</option>
        <option value="Call">Call</option>
        <option value="Text">Text</option>
        <option value="Video">Video</option>
      </select>

      {/* Entries */}
      <div className="flex flex-col gap-3">
        {filtered.length === 0 ? (
          <p className="text-gray-400 text-sm text-center py-12">
            No interactions yet. Go to a friend's page and log one!
          </p>
        ) : (
          filtered.map(entry => {
            const config = icons[entry.type];
            return (
              <div
                key={entry.id}
                className="bg-white border border-dashed border-blue-100 rounded-xl px-4 py-3 flex items-center gap-4 shadow-sm"
              >
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center text-lg ${config.bg} ${config.text}`}
                >
                  {config.icon}
                </div>
                <img
                  src={entry.picture}
                  alt={entry.name}
                  className="w-10 h-10 rounded-full object-cover border border-gray-200"
                />
                <div className="flex-1">
                  <p className="font-semibold text-sm text-gray-800">
                    <span className={`font-bold ${config.text}`}>
                      {entry.type}
                    </span>{' '}
                    with {entry.name}
                  </p>
                  <p className="text-xs text-gray-400">{entry.date}</p>
                </div>
                <span className="badge badge-primary badge-sm">New</span>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default TimelinePage;
