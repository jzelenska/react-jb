import { useMemo, useState } from "react";
export function usePagination(items = [], pageSize = 10){
  const [page, setPage] = useState(1);
  const totalPages = Math.max(1, Math.ceil(items.length / pageSize));
  const pageItems = useMemo(() => items.slice((page-1)*pageSize, page*pageSize), [items, page, pageSize]);
    return { page, totalPages, pageItems, setPage };
}
export default usePagination;



// import { useState, useMemo } from "react";

// export default function usePagination(data, desktopLimit = 25, mobileLimit = 10) {
//   const [page, setPage] = useState(1);
//   const isMobile = window.innerWidth < 768;
//   const limit = isMobile ? mobileLimit : desktopLimit;
//   const maxPage = Math.ceil(data.length / limit);

//   const currentData = useMemo(() => {
//     const start = (page - 1) * limit;
//     return data.slice(start, start + limit);
//   }, [data, page, limit]);

//   return { page, setPage, maxPage, currentData, limit };
// }
