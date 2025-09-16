// src/services/jobService.js
import api from "./api";

const getJobs = async () => {
  const response = await api.get("/jobs");
  return response.data;
};

const getJobById = async (id) => {
  const response = await api.get(`/jobs/${id}`);
  return response.data;
};

const createJob = async (jobData) => {
  const response = await api.post("/jobs", jobData);
  return response.data;
};

const updateJob = async (id, jobData) => {
  const response = await api.put(`/jobs/${id}`, jobData);
  return response.data;
};

const deleteJob = async (id) => {
  const response = await api.delete(`/jobs/${id}`);
  return response.data;
};

// ✅ Named object export
const jobService = {
  getJobs,
  getJobById,
  createJob,
  updateJob,
  deleteJob,
};

export default jobService;


// previous version

// import api from "./api";

// // Fetch all jobs
// export const getAllJobs = async () => {
//   const res = await api.get("/jobs");
//   return res.data;
// };

// // Fetch single job
// export const getJobById = async (jobId) => {
//   const res = await api.get(`/jobs/${jobId}`);
//   return res.data;
// };

// // Post a new job (company only)
// export const createJob = async (jobData) => {
//   const res = await api.post("/jobs", jobData);
//   return res.data;
// };

// // Delete a job
// export const deleteJob = async (jobId) => {
//   const res = await api.delete(`/jobs/${jobId}`);
//   return res.data;
// };
