const API_URL = "http://localhost:3001";

export const getDoctorsByCity = async (city) => {
  try {
    const response = await fetch(`${API_URL}/doctors?city=${city}`);
    if (!response.ok) {
      throw new Error("Failed to fetch doctors");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching doctors:", error.message);
    throw error;
  }
};

export default getDoctorsByCity;
