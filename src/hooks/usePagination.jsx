import { useState, useEffect } from "react";

const usePagination = (data = [], itemsPerPage = 10) => {
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(1);
  }, [data, itemsPerPage]);

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const currentPageData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return { totalPages, currentPage, currentPageData, handlePageChange };
};

export default usePagination;
