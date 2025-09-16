import { useState, useEffect } from "react";
import jobService from "../services/jobService";

const useJobs = (filters, sortBy, page) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true);
      try {
        const data = await jobService.getJobs({ filters, sortBy, page });
        setJobs(data.jobs);
        setTotalPages(data.totalPages);
      } catch (err) {
        console.error("Failed to fetch jobs:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, [filters, sortBy, page]);

  return { jobs, loading, totalPages };
};

export default useJobs;

// previous version


// // src/hooks/useJobs.js
// import { useEffect, useMemo, useState, useCallback, useRef } from "react";
// import * as jobService from "../services/jobService";

// /**
//  * useJobs
//  * - query: free-text
//  * - filters: { location, type, minSalary }
//  * - sort: { key, direction } or simple string
//  * - page, pageSize
//  *
//  * Returns:
//  * { jobs, total, loading, error, page, setPage, createJob, updateJob, deleteJob, refresh }
//  */
// export function useJobs({ query = "", filters = {}, sort = null, page = 1, pageSize = 10 } = {}) {
//   const [jobs, setJobs] = useState([]);
//   const [total, setTotal] = useState(0);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [currentPage, setCurrentPage] = useState(page);
//   const optionsRef = useRef({ query, filters, sort, page, pageSize });

//   // normalize incoming params
//   useEffect(() => {
//     optionsRef.current = { query, filters, sort, page, pageSize };
//     setCurrentPage(page);
//   }, [query, JSON.stringify(filters), JSON.stringify(sort), page, pageSize]);

//   const fetch = useCallback(async (opts = optionsRef.current) => {
//     setLoading(true);
//     setError(null);
//     try {
//       // We use jobService.listJobs (which accepts a query string) for simplicity.
//       // In a real API you would pass filters/sort/pagination as params.
//       const q = opts.query || "";
//       const res = await jobService.listJobs(q);
//       let items = res.jobs ? [...res.jobs] : [];

//       // apply client-side filters
//       if (opts.filters) {
//         const { location, type, minSalary } = opts.filters;
//         if (location) items = items.filter(j => j.location?.toLowerCase().includes(location.toLowerCase()));
//         if (type) items = items.filter(j => (j.type || "").toLowerCase() === (type || "").toLowerCase());
//         if (minSalary) {
//           // try to parse numeric salary from "€55k" etc; fallback ignore
//           items = items.filter(j => {
//             if (!j.salary) return false;
//             const num = Number(String(j.salary).replace(/[^\d]/g, ""));
//             return !isNaN(num) ? num >= Number(minSalary) : true;
//           });
//         }
//       }

//       // apply client-side sorting
//       if (opts.sort) {
//         // sort can be { key, direction } or string like 'recent' / 'salary'
//         if (typeof opts.sort === "string") {
//           if (opts.sort === "recent") items.sort((a,b) => new Date(b.postedAt) - new Date(a.postedAt));
//           if (opts.sort === "salary") items.sort((a,b) => (Number(String(b.salary||"").replace(/[^\d]/g,"")) || 0) - (Number(String(a.salary||"").replace(/[^\d]/g,"")) || 0));
//         } else if (opts.sort.key) {
//           const { key, direction } = opts.sort;
//           items.sort((a,b) => {
//             if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
//             if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
//             return 0;
//           });
//         }
//       }

//       // pagination
//       const totalItems = items.length;
//       const p = opts.page || 1;
//       const size = opts.pageSize || 10;
//       const start = (p - 1) * size;
//       const paged = items.slice(start, start + size);

//       setJobs(paged);
//       setTotal(totalItems);
//     } catch (e) {
//       console.error("useJobs.fetch error", e);
//       setError(e);
//     } finally {
//       setLoading(false);
//     }
//   }, []);

//   // initial & dependency-driven fetch
//   useEffect(() => {
//     fetch(optionsRef.current);
//   }, [fetch, optionsRef.current.query, JSON.stringify(optionsRef.current.filters), JSON.stringify(optionsRef.current.sort), optionsRef.current.page, optionsRef.current.pageSize]);

//   // CRUD helpers that keep local state in sync
//   const createJob = useCallback(async (payload) => {
//     setLoading(true);
//     try {
//       const newJob = await jobService.createJob(payload);
//       // optimistic refresh: put new job at the top
//       setJobs(prev => [newJob, ...prev]);
//       // full refresh to update totals
//       await fetch();
//       return newJob;
//     } catch (e) {
//       setError(e);
//       throw e;
//     } finally {
//       setLoading(false);
//     }
//   }, [fetch]);

//   const updateJob = useCallback(async (id, payload) => {
//     setLoading(true);
//     try {
//       const updated = await jobService.updateJob(id, payload);
//       setJobs(prev => prev.map(j => j.id === updated.id ? updated : j));
//       await fetch();
//       return updated;
//     } catch (e) {
//       setError(e);
//       throw e;
//     } finally {
//       setLoading(false);
//     }
//   }, [fetch]);

//   const deleteJob = useCallback(async (id) => {
//     setLoading(true);
//     try {
//       await jobService.deleteJob(id);
//       setJobs(prev => prev.filter(j => j.id !== id));
//       await fetch();
//       return true;
//     } catch (e) {
//       setError(e);
//       throw e;
//     } finally {
//       setLoading(false);
//     }
//   }, [fetch]);

//   const refresh = useCallback(() => fetch(optionsRef.current), [fetch]);

//   return {
//     jobs,
//     total,
//     loading,
//     error,
//     page: currentPage,
//     setPage: setCurrentPage,
//     createJob,
//     updateJob,
//     deleteJob,
//     refresh
//   };
// }


// import { useState, useEffect } from "react";
// import jobService from "../services/jobService";

// const useJobs = (filters, sortBy, page) => {
//   const [jobs, setJobs] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [totalPages, setTotalPages] = useState(1);

//   useEffect(() => {
//     const fetchJobs = async () => {
//       setLoading(true);
//       try {
//         const data = await jobService.getJobs({ filters, sortBy, page });
//         setJobs(data.jobs);
//         setTotalPages(data.totalPages);
//       } catch (err) {
//         console.error("Failed to fetch jobs:", err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchJobs();
//   }, [filters, sortBy, page]);

//   return { jobs, loading, totalPages };
// };

// export default useJobs;
