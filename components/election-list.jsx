"use client";

const ElectionsList = ({ elections }) => {
  return (
    <div className="w-full p-4 mx-auto bg-white rounded-md max-w-7xl">
      <ul>
        {elections.map((election) => (
          <li key={election.id}>
            <div className="flex justify-between">
              <p>{election.name}</p>
              <p>{election.description}</p>
              <p>{election.electionDate}</p>
              <p>{election.status}</p>
              <p>{election.electionType}</p>
              <p>{election.candidates}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ElectionsList;
