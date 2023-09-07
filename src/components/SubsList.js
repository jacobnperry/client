import React, { useState, useEffect} from "react";

const baseURL = "http://localhost:5050/record";

const RetrieveSubs = ({ sub }) => {
  const [recordsData, setRecordsData] = useState("");

  useEffect(() => {
    const fetchRecords = async () => {
      const response = await fetch(baseURL + `/subscribers/` + sub);
      const recordsResp = await response.json();
      setRecordsData(recordsResp);
    };

    fetchRecords();
  }, [sub]);

  return (
    <div>
      {recordsData && (
        <ul>
          {recordsData.map(record => (
            <li key={record.id}>{record.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

const SubscriberList = ({ sub }) => {
  return (
    <div>
      <RetrieveSubs/>
    </div>
  );
};

export default SubscriberList;
