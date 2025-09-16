import React, { useState } from "react";
import useJobs from "../hooks/useJobs";
import JobList from "../components/jobs/JobList";
import JobFilters from "../components/jobs/JobFilters";
import JobSort from "../components/jobs/JobSort";
import Pagination from "../components/common/Pagination";
import SearchBar from "../components/common/SearchBar";
import LoadingSpinner from "../components/common/LoadingSpinner";

const MainJobs = () => {
  const [filters, setFilters] = useState({ type: "", location: "", search: "" });
  const [sortBy, setSortBy] = useState("date");
  const [page, setPage] = useState(1);

  const { jobs, loading, totalPages } = useJobs(filters, sortBy, page);

  const handleFilterChange = (field, value) => {
    setFilters((prev) => ({ ...prev, [field]: value }));
    setPage(1);
  };

  const handleSearch = (value) => {
    setFilters((prev) => ({ ...prev, search: value }));
    setPage(1);
  };

  return (
    <div className="p-4 md:p-6">
      <h1 className="text-2xl font-bold mb-4">Job Listings</h1>

      <SearchBar onSearch={handleSearch} />
      <JobFilters filters={filters} onFilterChange={handleFilterChange} />
      <JobSort sortBy={sortBy} onSortChange={setSortBy} />

      {loading ? (
        <LoadingSpinner />
      ) : (
        <JobList jobs={jobs} />
      )}

      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={setPage}
      />
    </div>
  );
};

export default MainJobs;



// import React, { useState } from "react";
// import useJobs from "../hooks/useJobs";
// import JobList from "../components/jobs/JobList";
// import JobFilters from "../components/jobs/JobFilters";
// import JobSort from "../components/jobs/JobSort";
// import Pagination from "../components/common/Pagination";
// import SearchBar from "../components/common/SearchBar";
// import LoadingSpinner from "../components/common/LoadingSpinner";

// const MainJobs = () => {
//   const [filters, setFilters] = useState({ type: "", location: "", search: "" });
//   const [sortBy, setSortBy] = useState("date");
//   const [page, setPage] = useState(1);

//   const { jobs, loading, totalPages } = useJobs(filters, sortBy, page);

//   const handleFilterChange = (field, value) => {
//     setFilters((prev) => ({ ...prev, [field]: value }));
//     setPage(1);
//   };

//   const handleSearch = (value) => {
//     setFilters((prev) => ({ ...prev, search: value }));
//     setPage(1);
//   };

//   return (
//     <div className="p-4 md:p-6">
//       <h1 className="text-2xl font-bold mb-4">Job Listings</h1>

//       <SearchBar onSearch={handleSearch} />
//       <JobFilters filters={filters} onFilterChange={handleFilterChange} />
//       <JobSort sortBy={sortBy} onSortChange={setSortBy} />

//       {loading ? (
//         <LoadingSpinner />
//       ) : (
//         <JobList jobs={jobs} />
//       )}

//       <Pagination
//         currentPage={page}
//         totalPages={totalPages}
//         onPageChange={setPage}
//       />
//     </div>
//   );
// };

// export default MainJobs;
