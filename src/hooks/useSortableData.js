import { useMemo, useState } from "react";

export function useSortableData(items, config = null) {
    const [sortConfig, setSortConfig] = useState(config);
    const sortedItems = useMemo(() => {
    const arr = [...(items || [])];
    if (sortConfig !== null) {
    arr.sort((a, b) => {
    const { key, direction } = sortConfig;
    if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
    if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
    return 0;
    });
    }
    return arr;
    }, [items, sortConfig]);
    const requestSort = (key) => {
    let direction = "asc";
    if (sortConfig && sortConfig.key === key && sortConfig.direction === "asc") direction = "desc";
    setSortConfig({ key, direction });
    };
    return { items: sortedItems, requestSort, sortConfig };
}





// import { useState } from "react";

// export default function useSortableData(items, config = null) {
//   const [sortConfig, setSortConfig] = useState(config);

//   const sortedItems = [...items].sort((a, b) => {
//     if (!sortConfig) return 0;
//     const { key, direction } = sortConfig;
//     if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
//     if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
//     return 0;
//   });

//   const requestSort = key => {
//     let direction = "asc";
//     if (sortConfig?.key === key && sortConfig.direction === "asc") {
//       direction = "desc";
//     }
//     setSortConfig({ key, direction });
//   };

//   return { items: sortedItems, requestSort, sortConfig };
// }

