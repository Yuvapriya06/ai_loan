import axios from "axios";

// Change this URL if your FastAPI runs on another port
const API = axios.create({
    baseURL: "http://127.0.0.1:8000"
});

// Loan Prediction
export const predictLoan = async (loanData) => {

    try {

        const response = await API.post("/predict", loanData);

        return response.data;

    } catch (error) {

        console.error("Prediction Error:", error);

        throw error;

    }

};