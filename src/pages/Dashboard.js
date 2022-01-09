import { useState } from "react";
import toast from "react-hot-toast";
import Input from "../components/Input";
import Table from "../components/Table";
import DATA from "../data/dataset";

const MAX_ROW_PER_PAGE = 5;

const Dashboard = () => {
  const [tableData, setTableData] = useState(DATA);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(5);
  const [isPincodeAscending, setIsPincodeAscending] = useState(false);
  const [isDateAscending, setIsDateAscending] = useState(false);

  const searchByPincode = (pincode) => {
    if (pincode.length === 0) {
      setTableData(DATA);
      return;
    }
    const newTableData = tableData.filter((data) =>
      data.deliveryPincode.toString().startsWith(pincode)
    );
    if (newTableData.length === 0 && pincode.length === 6) {
      toast.error("Not found!");
      setTableData(DATA);
    } else {
      setTableData(newTableData);
    }
  };
  const searchByItem = (item) => {
    if (item.length === 0) {
      setTableData(DATA);
      return;
    }
    const newTableData = tableData.filter((data) => data.items.includes(item));
    if (newTableData.length === 0) {
      toast.error("Not found!");
      setTableData(DATA);
    } else {
      setTableData(newTableData);
    }
  };

  const searchByDate = (date) => {
    if (date.length === 0) {
      setTableData(DATA);
      return;
    }
    const dateArr = date.split("-");
    const reversedDate = dateArr.reverse();
    const formatedDate = reversedDate.join("/");
    const newTableData = tableData.filter(
      (data) => data.orderDate === formatedDate
    );
    if (newTableData.length === 0) {
      toast.error("Not found!");
      setTableData(DATA);
    } else {
      setTableData(newTableData);
    }
  };

  const nextPage = () => {
    setEndIndex((prev) => prev + MAX_ROW_PER_PAGE);
    setStartIndex((prev) => prev + MAX_ROW_PER_PAGE);
  };
  const previousPage = () => {
    setEndIndex((prev) => prev - MAX_ROW_PER_PAGE);
    setStartIndex((prev) => prev - MAX_ROW_PER_PAGE);
  };

  const sortByPincodeHandler = () => {
    setIsPincodeAscending((prev) => !prev);
    isPincodeAscending
      ? setTableData(
          tableData.sort((a, b) =>
            a.deliveryPincode > b.deliveryPincode ? 1 : -1
          )
        )
      : setTableData(
          tableData.sort((a, b) =>
            a.deliveryPincode < b.deliveryPincode ? 1 : -1
          )
        );
  };
  const sortByOrderDateHandler = () => {
    setIsDateAscending((prev) => !prev);
    isDateAscending
      ? setTableData(
          tableData.sort((a, b) => (a.orderDate > b.orderDate ? 1 : -1))
        )
      : setTableData(
          tableData.sort((a, b) => (a.orderDate < b.orderDate ? 1 : -1))
        );
  };

  return (
    <div className="p-10 w-full font-poppins">
      <div className="filterSection flex items-center justify-between">
        <Input type="text" label="Pincode" onChangeHandler={searchByPincode} />
        <Input type="text" label="Item" onChangeHandler={searchByItem} />
        <Input type="date" label="Date" onChangeHandler={searchByDate} />
      </div>
      <div className="tableSection">
        <Table
          tableData={tableData.slice(startIndex, endIndex)}
          sortByPincodeHandler={sortByPincodeHandler}
          sortByOrderDateHandler={sortByOrderDateHandler}
          isPincodeAscending={isPincodeAscending}
          isDateAscending={isDateAscending}
        />
      </div>
      <div className="tablePaginator flex justify-between items-center bg-gray-100 p-2 text-white text-center">
        <button
          className="bg-purple-700 rounded-md px-4 py-2 disabled:bg-gray-600"
          onClick={previousPage}
          disabled={startIndex < 5}
        >
          <svg
            className="w-6 h-6 inline-block mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z"
              clipRule="evenodd"
            ></path>
          </svg>
          Previous
        </button>
        <button
          className="bg-purple-700 rounded-md px-4 py-2 disabled:bg-gray-600"
          onClick={nextPage}
          disabled={endIndex > tableData.length}
        >
          Next
          <svg
            className="w-6 h-6 inline-block ml-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
