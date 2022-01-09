const TableData = ({ data }) => {
  return (
    <div
      className={`tableDataRow grid grid-cols-12 items-center p-4 bg-gray-100 text-black border-b ${
        data.orderId % 5 === 0 ? "rounded-b-md" : ""
      }`}
    >
      <div className="tableDataCol col-span-2 text-center">
        <span>{data.orderId}</span>
      </div>
      <div className="tableDataCol col-span-2 text-center">
        <span>{data.customerId}</span>
      </div>
      <div className="tableDataCol col-span-2 text-center">
        <span>{data.deliveryPincode}</span>
      </div>
      <div className="tableDataCol col-span-2 text-center">
        <span>{data.orderDate}</span>
      </div>
      <div className="tableDataCol col-span-4 text-center">
        <ul>
          {data.items.split(";").map((item) => {
            return (
              <li key={item + Math.floor(Math.random() * 100)}>
                {item.split(":").join(" - ")}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default TableData;
