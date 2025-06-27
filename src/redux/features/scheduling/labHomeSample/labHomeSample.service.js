import api from "../../API";

// Create Update Doctor Schedule
const createUpdateLabSampleCollection = async (data) => {
  const response = await api.post(`/labSampleCollection/save`, data);
  return response.data;
};

// Get All Doctor Schedule
const getAllLabSampleCollection = async (data) => {
  const response = await api.get(`/labSampleCollection/getAll`, {
    params: data,
  });
  return response.data;
};

const labHomeSampling = {
  createUpdateLabSampleCollection,
  getAllLabSampleCollection,
};

export default labHomeSampling;
