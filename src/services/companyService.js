// src/services/companyService.js
import api from "./api";

export const getCompanies = async () => {
  const { data } = await api.get("/companies");
  return data;
};

export const getCompanyById = async (id) => {
  const { data } = await api.get(`/companies/${id}`);
  return data;
};

export const createCompany = async (companyData) => {
  const { data } = await api.post("/companies", companyData);
  return data;
};

export const updateCompany = async (id, companyData) => {
  const { data } = await api.put(`/companies/${id}`, companyData);
  return data;
};

export const deleteCompany = async (id) => {
  const { data } = await api.delete(`/companies/${id}`);
  return data;
};

const companyService = {
  getCompanies,
  getCompanyById,
  createCompany,
  updateCompany,
  deleteCompany,
};

export default companyService;
