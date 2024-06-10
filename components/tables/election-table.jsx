import { FaRegCheckCircle } from "react-icons/fa";
import { FaRegCircleXmark } from "react-icons/fa6";

const ElectionTable = ({ elections }) => {
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
                    Description
                  </th>
                  <th className="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid whitespace-nowrap bg-slate-800 text-slate-300 border-slate-700">
                    Date(s)
                  </th>
                  <th className="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid whitespace-nowrap bg-slate-800 text-slate-300 border-slate-700">
                    Status
                  </th>
                  <th className="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid whitespace-nowrap bg-slate-800 text-slate-300 border-slate-700">
                    Type
                  </th>
                  <th className="px-6 py-3 text-xs font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid whitespace-nowrap bg-slate-800 text-slate-300 border-slate-700">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody>
                {elections.map((election) => (
                  <tr
                    key={election.id}
                    className="hover:cursor-pointer hover:text-neutral-950 hover:bg-neutral-200"
                  >
                    <th className="flex items-center p-4 px-6 text-xs text-left align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                      {election.name}
                    </th>
                    <td className="p-4 px-6 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                      {election.description}
                    </td>
                    <td className="p-4 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                      {election.electionDate}
                    </td>
                    <td className="p-4 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                      {election.status}
                    </td>
                    <td className="p-4 text-xs capitalize align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                      {election.electionType}
                    </td>
                    <td className="p-4 px-10 text-xs align-middle border-t-0 border-l-0 border-r-0 whitespace-nowrap">
                      {election.actions}
                    </td>
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

export default ElectionTable;
