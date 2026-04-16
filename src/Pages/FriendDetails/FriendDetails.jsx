import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { useTimeline } from '../../Context/TimelineContext';
import {
  FaRegBell,
  FaArchive,
  FaTrashAlt,
  FaPhoneAlt,
  FaVideo,
  FaRegCommentDots,
} from 'react-icons/fa';

const FriendDetails = () => {
  const friend = useLoaderData();
  const { addEntry } = useTimeline();
  const navigate = useNavigate();

  const handleCheckIn = type => {
    addEntry(friend, type);
    navigate('/timeline');
  };

  if (!friend) {
    return (
      <div className="text-center mt-20 text-xl font-bold">No data found!</div>
    );
  }

  const getStatusColor = status => {
    if (status === 'overdue') return 'bg-red-500 text-white';
    if (status === 'on-track') return 'bg-green-500 text-white';
    return 'bg-yellow-500 text-white';
  };

  const formatDate = dateString => {
    if (!dateString) return 'N/A';
    const options = { month: 'short', day: 'numeric', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div className="max-w-5xl mx-auto p-4 lg:p-10 bg-[#FAFAFA] min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="space-y-4">
          <div className="bg-white shadow-sm border border-gray-100 p-6 flex flex-col items-center text-center rounded-xl">
            <div className="avatar">
              <div className="w-24 rounded-full shadow-md">
                <img src={friend.picture} alt={friend.name} />
              </div>
            </div>
            <h2 className="text-xl font-bold mt-4 text-gray-800">
              {friend.name}
            </h2>
            <div className="flex flex-col gap-2 mt-2 items-center">
              <span
                className={`px-4 py-1 rounded-full text-xs font-semibold capitalize ${getStatusColor(friend.status)}`}
              >
                {friend.status}
              </span>
              {friend.tags?.length > 0 && (
                <span className="px-4 py-1 rounded-full text-xs font-bold bg-[#D1F2DD] text-[#2D664E] uppercase tracking-wider">
                  {friend.tags[0]}
                </span>
              )}
            </div>
            <p className="text-sm italic text-gray-500 mt-4 leading-relaxed">
              "{friend.bio}"
            </p>
            <p className="text-xs text-gray-400 mt-3 font-medium">
              Preferred: email
            </p>
          </div>

          <button className="btn w-full bg-white border border-gray-200 shadow-sm hover:bg-gray-50 flex justify-center gap-2 font-medium text-gray-700 rounded-lg">
            <FaRegBell className="text-lg" /> Snooze 2 Weeks
          </button>
          <button className="btn w-full bg-white border border-gray-200 shadow-sm hover:bg-gray-50 flex justify-center gap-2 font-medium text-gray-700 rounded-lg">
            <FaArchive className="text-lg" /> Archive
          </button>
          <button className="btn w-full bg-white border border-red-100 shadow-sm hover:bg-red-50 flex justify-center gap-2 font-bold text-red-500 rounded-lg">
            <FaTrashAlt className="text-lg" /> Delete
          </button>
        </div>

        <div className="md:col-span-2 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white border border-gray-100 shadow-sm rounded-xl p-6 text-center flex flex-col justify-center">
              <p className="text-4xl font-bold text-[#1A433D]">
                {friend.days_since_contact}
              </p>
              <p className="text-sm text-gray-500 mt-2 font-medium">
                Days Since Contact
              </p>
            </div>
            <div className="bg-white border border-gray-100 shadow-sm rounded-xl p-6 text-center flex flex-col justify-center">
              <p className="text-4xl font-bold text-[#1A433D]">{friend.goal}</p>
              <p className="text-sm text-gray-500 mt-2 font-medium">
                Goal (Days)
              </p>
            </div>
            <div className="bg-white border border-gray-100 shadow-sm rounded-xl p-6 text-center flex flex-col justify-center">
              <p className="text-2xl font-bold text-[#1A433D]">
                {formatDate(friend.next_due_date)}
              </p>
              <p className="text-sm text-gray-500 mt-2 font-medium">Next Due</p>
            </div>
          </div>

          <div className="bg-white border border-gray-100 shadow-sm rounded-xl p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold text-[#1A433D]">
                Relationship Goal
              </h3>
              <button className="btn btn-sm bg-gray-50 hover:bg-gray-100 border-gray-200 text-gray-600 rounded-md px-4">
                Edit
              </button>
            </div>
            <p className="text-gray-600 text-md">
              Connect every{' '}
              <span className="font-bold text-gray-800">
                {friend.goal} days
              </span>
            </p>
          </div>

          <div className="bg-white border border-gray-100 shadow-sm rounded-xl p-6">
            <h3 className="text-lg font-bold text-[#1A433D] mb-4">
              Quick Check-In
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <button
                onClick={() => handleCheckIn('Call')}
                className="btn h-28 bg-[#FAFAFA] border border-gray-200 hover:bg-gray-100 flex flex-col gap-3 shadow-sm rounded-xl"
              >
                <FaPhoneAlt className="text-2xl text-gray-700" />
                <span className="text-gray-700 font-medium">Call</span>
              </button>
              <button
                onClick={() => handleCheckIn('Text')}
                className="btn h-28 bg-[#FAFAFA] border border-gray-200 hover:bg-gray-100 flex flex-col gap-3 shadow-sm rounded-xl"
              >
                <FaRegCommentDots className="text-2xl text-gray-700" />
                <span className="text-gray-700 font-medium">Text</span>
              </button>
              <button
                onClick={() => handleCheckIn('Video')}
                className="btn h-28 bg-[#FAFAFA] border border-gray-200 hover:bg-gray-100 flex flex-col gap-3 shadow-sm rounded-xl"
              >
                <FaVideo className="text-2xl text-gray-700" />
                <span className="text-gray-700 font-medium">Video</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetails;
