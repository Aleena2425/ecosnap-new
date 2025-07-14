import React, { useEffect, useState } from 'react';
import { db } from '../firebase/config'; // Import your Firebase configuration
import { collection, getDocs } from 'firebase/firestore';

const ActivityLog = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const fetchActivities = async () => {
      const activitiesCollection = collection(db, 'activities'); // Adjust the collection name as needed
      const activitySnapshot = await getDocs(activitiesCollection);
      const activityList = activitySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setActivities(activityList);
    };

    fetchActivities();
  }, []);

  return (
    <div>
      <h1>Activity Log</h1>
      <ul>
        {activities.map(activity => (
          <li key={activity.id}>
            {activity.description} - {activity.timestamp.toDate().toLocaleString()} {/* Adjust based on your data structure */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActivityLog;