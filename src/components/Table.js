import TableData from "./TableData";

const Table = ({
  tableData,
  sortByPincodeHandler,
  sortByOrderDateHandler,
  isPincodeAscending,
  isDateAscending,
}) => {
  return (
    <div className="flex items-center py-3">
      <div className="table w-full">
        <div className="tableHeaderRow grid grid-cols-12 p-4 bg-purple-500 text-white font-poppins rounded-t-md">
          <div className="tableHeaderCol col-span-2 text-center">
            <h4>Order Id</h4>
          </div>
          <div className="tableHeaderCol col-span-2 text-center">
            <h4>Cust Id</h4>
          </div>
          <div className="tableHeaderCol col-span-2 text-center">
            <button onClick={sortByPincodeHandler}>
              Pin Code
              {!isPincodeAscending ? (
                <svg
                  className="w-6 h-6 inline-block"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              ) : (
                <svg
                  class="w-6 h-6 inline-block"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              )}
            </button>
          </div>
          <div className="tableHeaderCol col-span-2 text-center">
            <button onClick={sortByOrderDateHandler}>
              OrderDate
              {!isDateAscending ? (
                <svg
                  className="w-6 h-6 inline-block"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              ) : (
                <svg
                  className="w-6 h-6 inline-block"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              )}
            </button>
          </div>
          <div className="tableHeaderCol col-span-4 text-center">
            <h4>Items</h4>
          </div>
        </div>
        <div className="tableDataSection">
          {tableData.map((data) => {
            return <TableData data={data} key={data.orderId} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Table;
