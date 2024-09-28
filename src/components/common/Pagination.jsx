import ArrowLeftIcon from "@/assets/svg/ArrowLeftIcon";
import ArrowRightIcon from "@/assets/svg/ArrowRightIcon";
import "./Pagination.scss";

const TablePagination = ({ totalPages, currentPage, onPageChange }) => {
  const isPrevDisabled = currentPage <= 1;
  const isNextDisabled = currentPage >= totalPages;

  const visiblePages = () => {
    if (totalPages <= 3) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    } else if (currentPage === 1) {
      return [1, 2, 3];
    } else if (currentPage === totalPages) {
      return [totalPages - 2, totalPages - 1, totalPages];
    } else {
      return [currentPage - 1, currentPage, currentPage + 1];
    }
  };

  const goToPrevPage = () => {
    if (!isPrevDisabled) {
      onPageChange(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (!isNextDisabled) {
      onPageChange(currentPage + 1);
    }
  };

  const goToPage = (page) => {
    onPageChange(page);
  };

  return (
    <ul className="pagination">
      <li
        className={
          isPrevDisabled
            ? "pagination__button pagination__button_disabled"
            : "pagination__button"
        }
        onClick={goToPrevPage}
      >
        <ArrowLeftIcon />
      </li>
      {visiblePages().map((page) => (
        <li
          key={page}
          className={
            page === currentPage
              ? "pagination__button pagination__button_active"
              : "pagination__button"
          }
          onClick={() => goToPage(page)}
        >
          {page}
        </li>
      ))}
      <li
        className={
          isNextDisabled
            ? "pagination__button pagination__button_disabled"
            : "pagination__button"
        }
        onClick={goToNextPage}
      >
        <ArrowRightIcon />
      </li>
    </ul>
  );
};

export default TablePagination;
