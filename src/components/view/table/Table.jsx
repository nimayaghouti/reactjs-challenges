import TableContent from "./TableContent";
import Pagination from "@/components/common/Pagination";
import usePagination from "@/hooks/usePagination";
import "./Table.scss";

const Table = ({ data, itemsPerPage, columns }) => {
  const { totalPages, currentPage, currentPageData, handlePageChange } =
    usePagination(data, itemsPerPage);

  return (
    <div className="table-wrapper">
      <TableContent pageData={currentPageData} columns={columns} />
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Table;
