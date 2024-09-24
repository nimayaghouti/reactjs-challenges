import DoneIcon from "@/assets/svg/DoneIcon";
import "./TableContent.scss";

const TableContent = ({ pageData }) => {
  return (
    <table className="table">
      <thead className="table__header">
        <tr className="table__row table__row_header">
          <td className="table__data table__data_header">Title</td>
          <td className="table__data table__data_header">Status</td>
          <td className="table__data table__data_header">UserId</td>
        </tr>
      </thead>
      <tbody className="table__body">
        {pageData.map((data) => (
          <tr className="table__row table__row_body" key={data.id}>
            <td className="table__data">{data.todo}</td>
            <td className="table__data">
              {data.completed ? "Completed" : "Incomplete"}
              {data.completed && <DoneIcon />}
            </td>
            <td className="table__data">{data.userId}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableContent;
