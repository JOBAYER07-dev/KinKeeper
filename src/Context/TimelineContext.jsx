import React, { createContext, useContext, useState } from 'react';

const TimelineContext = createContext();

export const TimelineProvider = ({ children }) => {
  const [entries, setEntries] = useState([]);

  const addEntry = (friend, type) => {
    setEntries(prev => [
      {
        id: Date.now(),
        name: friend.name,
        picture: friend.picture,
        type,
        date: new Date().toLocaleDateString('en-US', {
          month: 'long',
          day: 'numeric',
          year: 'numeric',
        }),
      },
      ...prev,
    ]);
  };

  return (
    <TimelineContext.Provider value={{ entries, addEntry }}>
      {children}
    </TimelineContext.Provider>
  );
};

export const useTimeline = () => useContext(TimelineContext);
