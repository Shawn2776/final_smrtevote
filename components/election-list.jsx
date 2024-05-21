const ElectionsList = ({ elections }) => {
  return (
    <div className="w-full h-full">
      <div className="p-4 ml-10 mr-10 bg-white rounded-md">
        <ul>
          <li>
            <div className="grid grid-cols-7 mb-4 font-extrabold">
              <p>Name</p>
              <p>Description</p>
              <p>Date</p>
              <p>Status</p>
              <p>Type</p>
              <p>Candidates</p>
            </div>
          </li>
          {elections.map((election, index) => (
            <li key={election.id}>
              <div
                className={`grid grid-cols-7 text-sm gap-4 ${
                  index % 2 === 0 ? "bg-gray-300" : ""
                }`}
              >
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
    </div>
  );
};

export default ElectionsList;
