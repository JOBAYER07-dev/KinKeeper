import React from 'react';
import { FaPlus } from 'react-icons/fa';
import FriendsShowPage from '../FriendsShowPage/FriendsShowPage';
import { useLoaderData, Link } from 'react-router-dom';

const Homepage = () => {
  const friendsData = useLoaderData();

  return (
    <div className="container mx-auto my-10">
      <div className="text-center">
        <h2 className="text-5xl font-bold ">
          Friends to keep close in your life
        </h2>
        <p className="my-4 text-gray-500">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the <br />
          relationships that matter most.
        </p>
        <button className="btn btn-success text-white">
          <FaPlus />
          Add a Friend
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 my-10">
        <div className="bg-base-300 p-6 rounded-2xl text-center">
          <h1 className="text-3xl">10</h1>
          <p className="text-gray-500">Total Friends</p>
        </div>
        <div className="bg-base-300 p-6 rounded-2xl text-center">
          <h1 className="text-3xl">3</h1>
          <p className="text-gray-500">On Track</p>
        </div>
        <div className="bg-base-300 p-6 rounded-2xl text-center">
          <h1 className="text-3xl">6</h1>
          <p className="text-gray-500">Need Attention</p>
        </div>
        <div className="bg-base-300 p-6 rounded-2xl text-center">
          <h1 className="text-3xl">12</h1>
          <p className="text-gray-500">Interactions This Month</p>
        </div>
      </div>

     
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {friendsData.map(friend => (
          <Link to={`/friends/${friend.id}`} key={friend.id}>
            
            <FriendsShowPage friend={friend} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Homepage;
