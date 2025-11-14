import { NavLink } from "react-router-dom";
import { snakeCaseToTitle } from "../utils/helperFunctions";
import { Activity } from "react";

const DynamicTable = ({ columns, data, onEditLink, onDelete }) => {
  const showActions = onDelete && onEditLink;

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gradient-to-r from-gray-50 to-gray-100">
            <tr>
              <th className="px-8 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider border-b border-gray-200">S.No</th>
              {columns.map((col) => (
                <th
                  key={col}
                  className="px-8 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider border-b border-gray-200"
                >
                  <div className="flex items-center gap-2">
                    <span>{snakeCaseToTitle(col)}</span>
                    <div className="w-1 h-4 bg-gradient-to-b from-blue-400 to-purple-500 rounded-full opacity-60"></div>
                  </div>
                </th>
              ))}
              <Activity mode={showActions ? "visible" : "hidden"}>
                <th className="px-8 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider border-b border-gray-200">
                  <div className="flex items-center gap-2">
                    <span>Actions</span>
                    <div className="w-1 h-4 bg-gradient-to-b from-blue-400 to-purple-500 rounded-full opacity-60"></div>
                  </div>
                </th>
              </Activity>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100max-h-[500px] overflow-auto">
            {data.map((item, idx) => (
              <tr
                key={idx}
                className="transition-all duration-200 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 group"
              >
 <td className="px-8 py-6 text-sm text-gray-700 group-hover:text-gray-900 transition-colors duration-200"
                  >
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                      <span className="font-medium">
                        {idx+1}</span>
                    </div>
                  </td>
                {columns.map((col) => (
                  <td
                    key={col}
                    className="px-8 py-6 text-sm text-gray-700 group-hover:text-gray-900 transition-colors duration-200"
                  >
                    <div className="flex items-center">

                      <span className="font-medium">{item[col] || "N/A"}</span>
                    </div>
                  </td>
                ))}
                <Activity mode={showActions ? "visible" : "hidden"}>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-2">
                      {/* Edit Button */}
                      <NavLink
                        to={`${onEditLink}/${item.id}`}
                        className="inline-flex items-center justify-center p-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 group/btn"
                        title="Edit"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                          />
                        </svg>
                        <span className="ml-1 text-xs font-medium">Edit</span>
                      </NavLink>

                      {/* Delete Button */}
                      <button
                        onClick={() => onDelete(item.id)}
                        className="inline-flex items-center justify-center p-2 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 group/btn"
                        title="Delete"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                        <span className="ml-1 text-xs font-medium">Delete</span>
                      </button>
                    </div>
                  </td>
                </Activity>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Empty State */}
      <Activity mode={data.length === 0 ? "visible" : "hidden"}>
        <div className="text-center py-16">
          <div className="w-20 h-20 bg-gradient-to-r from-gray-100 to-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-10 h-10 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            No records found
          </h3>
          <p className="text-gray-500 max-w-sm mx-auto leading-relaxed">
            There are no records to display at the moment. Start by adding new
            data to your collection.
          </p>
        </div>
      </Activity>
    </div>
  );
};

export default DynamicTable;
