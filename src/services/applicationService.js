// src/services/applicationService.js
import api from "./api";

export const getApplications = async () => {
  const { data } = await api.get("/applications");
  return data;
};

export const getApplicationById = async (id) => {
  const { data } = await api.get(`/applications/${id}`);
  return data;
};

export const createApplication = async (appData) => {
  const { data } = await api.post("/applications", appData);
  return data;
};

export const updateApplication = async (id, appData) => {
  const { data } = await api.put(`/applications/${id}`, appData);
  return data;
};

export const deleteApplication = async (id) => {
  const { data } = await api.delete(`/applications/${id}`);
  return data;
};

const applicationService = {
  getApplications,
  getApplicationById,
  createApplication,
  updateApplication,
  deleteApplication,
};

export default applicationService;


// previous version



// import api from "./api";

// // Apply to job (student only)
// export const applyToJob = async (applicationData) => {
//   const res = await api.post("/applications", applicationData);
//   return res.data;
// };

// // Get applications for a student
// export const getStudentApplications = async (studentId) => {
//   const res = await api.get(`/applications/student/${studentId}`);
//   return res.data;
// };

// // Get applications for a company
// export const getCompanyApplications = async (companyId) => {
//   const res = await api.get(`/applications/company/${companyId}`);
//   return res.data;
// };
