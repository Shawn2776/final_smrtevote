import { FaRegCheckCircle } from "react-icons/fa";
import { FaRegCircleXmark } from "react-icons/fa6";

const CandidateTable = ({ candidates }) => {
  return (
    <section className="relative py-4 bg-blueGray-50">
      <div className="w-full px-4 mb-12">
        <div className="relative flex flex-col w-full min-w-0 mb-6 text-white break-words rounded shadow-lg bg-slate-900">
          <div className="block w-full overflow-x-auto ">
            <table className="items-center w-full bg-transparent border-collapse">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid whitespace-nowrap bg-slate-800 text-slate-300 border-slate-700">
                    Name
                  </th>
                  <th className="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid whitespace-nowrap bg-slate-800 text-slate-300 border-slate-700">
                    Position
                  </th>
                  <th className="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid whitespace-nowrap bg-slate-800 text-slate-300 border-slate-700">
                    Description
                  </th>
                  {/* <th className="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid whitespace-nowrap bg-slate-800 text-slate-300 border-slate-700">
                    Voter Key
                  </th>
                  <th className="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid whitespace-nowrap bg-slate-800 text-slate-300 border-slate-700">
                    Has Voted?{" "}
                  </th>
                  <th className="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid whitespace-nowrap bg-slate-800 text-slate-300 border-slate-700"></th> */}
                </tr>
              </thead>

              <tbody>
                {candidates.map((candidate) => (
                  <tr
                    key={candidate.id}
                    className="hover:cursor-pointer hover:text-neutral-950 hover:bg-neutral-200"
                  >
                    <th className="flex items-center p-4 px-6 text-xs text-left align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                      {candidate.name}
                    </th>
                    <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                      {candidate.position}
                    </td>
                    <td className="p-4 px-10 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                      {candidate.notes}
                    </td>
                    {/* <td className="p-4 px-10 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                      {voter.voterKey}
                    </td>
                    <td className="p-4 px-10 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                      {voter.hasVoted ? (
                        <FaRegCheckCircle className="w-6 h-6 text-green-400" />
                      ) : (
                        <FaRegCircleXmark className="w-6 h-6 text-red-400" />
                      )}
                    </td>
                    <td className="p-4 px-6 text-xs text-right align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                      <a
                        href="#pablo"
                        className="block px-3 py-1 text-blueGray-500"
                        onclick="openDropdown(event,'table-dark-1-dropdown')"
                      >
                        <i className="fas fa-ellipsis-v"></i>
                      </a>
                      <div
                        className="z-50 hidden float-left py-2 text-base text-left list-none bg-white rounded shadow-lg min-w-48"
                        id="table-dark-1-dropdown"
                      >
                        <a
                          href="#pablo"
                          className="block w-full px-4 py-2 text-sm font-normal bg-transparent whitespace-nowrap text-blueGray-700"
                        >
                          Action
                        </a>
                        <a
                          href="#pablo"
                          className="block w-full px-4 py-2 text-sm font-normal bg-transparent whitespace-nowrap text-blueGray-700"
                        >
                          Another action
                        </a>
                        <a
                          href="#pablo"
                          className="block w-full px-4 py-2 text-sm font-normal bg-transparent whitespace-nowrap text-blueGray-700"
                        >
                          Something else here
                        </a>
                        <div className="h-0 my-2 border border-solid border-blueGray-100"></div>
                        <a
                          href="#pablo"
                          className="block w-full px-4 py-2 text-sm font-normal bg-transparent whitespace-nowrap text-blueGray-700"
                        >
                          Seprated link
                        </a>
                      </div>
                    </td> */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CandidateTable;
