import api from "../../API"

// Create Update Doctor Schedule
const createUpdateDoctorSchedule = async (data) => {
  const response = await api.post(`/doctorSchedule/save`, data);
  return response.data;
};

// Get All Doctor Schedule
const getAllDoctorSchedule = async (data) => {
  const response = await api.get(`/doctorSchedule/getAll`, {
      params: data,
    });
  return response.data;
};

const doctorSchedule = {
  createUpdateDoctorSchedule,
  getAllDoctorSchedule,
};

export default doctorSchedule;
