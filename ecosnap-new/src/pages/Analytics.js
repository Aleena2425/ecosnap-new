import React, { useEffect, useState } from 'react';
import { getAnalytics, logEvent } from 'firebase/analytics';
import { firebaseApp } from '../firebase/config';

const Analytics = () => {
  const [analyticsData, setAnalyticsData] = useState(null);

  useEffect(() => {
    const analytics = getAnalytics(firebaseApp);
    logEvent(analytics, 'page_view');

    // Fetch or compute analytics data here
    // For demonstration, we'll just set some dummy data
    const dummyData = {
      users: 100,
      sessions: 250,
      bounceRate: '30%',
    };
    setAnalyticsData(dummyData);
  }, []);

  return (
    <div>
      <h1>Analytics</h1>
      {analyticsData ? (
        <div>
          <p>Users: {analyticsData.users}</p>
          <p>Sessions: {analyticsData.sessions}</p>
          <p>Bounce Rate: {analyticsData.bounceRate}</p>
        </div>
      ) : (
        <p>Loading analytics data...</p>
      )}
    </div>
  );
};

export default Analytics;