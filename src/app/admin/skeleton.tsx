export const MainSkeleton = () => {
  return (
    <section>
      <div className="w-full p-4 bg-white bg-opacity-50 rounded-lg space-y-4">
        <div className="space-x-4">
          <button
            className="border border-gray-300 animate-pulse rounded p-2 opacity-50 cursor-not-allowed w-[100px] justify-left items-center align-left animate-pulse"
            disabled={true}
          >
            <div className="flex justify-left animate-pulse  items-center space-x-2">
              <div className="w-full h-4 bg-gray-300 animate-pulse  rounded" />
            </div>
          </button>
        </div>

        <div className="border border-gray-200 rounded-lg overflow-hidden">
          <table className="table-auto w-full border-collapse border border-gray-200 rounded-lg overflow-hidden">
            <thead className="border-b border-gray-200 p-4 rounded-t-lg text-sm">
              <tr className="text-left">
                <th className="p-4">Name</th>
                <th className="p-4">Category</th>
                <th className="p-4">File Number</th>
              </tr>
            </thead>
            <tbody>
              {Array(50)
                .fill(0)
                .map((_, index) => (
                  <tr
                    key={index}
                    className="text-left border-b border-gray-200 animate-pulse"
                  >
                    <td className="p-4">
                      <div className="w-full h-6 bg-gray-200 rounded-lg" />
                    </td>
                    <td className="p-4">
                      <div className="w-full h-6 bg-gray-200 rounded-lg" />
                    </td>
                    <td className="p-4 text-gray-400">
                      <div className="w-full h-6 bg-gray-200 rounded-lg" />
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
