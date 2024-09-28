import "./TableContent.scss";

const TableContent = ({ pageData, columns }) => {
  return (
    <table className="table">
      <thead className="table__header">
        <tr className="table__row table__row_header">
          {columns.map((col, index) => (
            <td key={index} className="table__data table__data_header">
              {col.title}
            </td>
          ))}
        </tr>
      </thead>
      <tbody className="table__body">
        {pageData.map((data) => (
          <tr className="table__row table__row_body" key={data.id}>
            {columns.map((col, index) => (
              <td key={index} className="table__data">
                {data[col.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableContent;
