import { useState } from "react";

function LoanForm({ onPredict }) {

    const [formData, setFormData] = useState({

        age: "",

        gender: "M",

        education: "GRADUATE",

        income: "",

        credit_score: "",

        credit_enquiries: 0,

        credit_card: 1,

        personal_loan: 0,

        home_loan: 0,

        gold_loan: 0

    });

    const handleChange = (e) => {

        const { name, value } = e.target;

        setFormData((prev) => ({

            ...prev,

            [name]: value

        }));

    };

    const handleSubmit = (e) => {

        e.preventDefault();

        onPredict({

            ...formData,

            age: Number(formData.age),
            income: Number(formData.income),
            credit_score: Number(formData.credit_score),
            credit_enquiries: Number(formData.credit_enquiries),
            credit_card: Number(formData.credit_card),
            personal_loan: Number(formData.personal_loan),
            home_loan: Number(formData.home_loan),
            gold_loan: Number(formData.gold_loan)

        });

    };

    return (

        <div className="card">

            <h3>Loan Application</h3>

            <form onSubmit={handleSubmit}>

                <div className="form-group">

                    <label>Age</label>

                    <input
                        type="number"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        required
                    />

                </div>

                <div className="form-group">

                    <label>Gender</label>

                    <select
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                    >

                        <option value="M">Male</option>

                        <option value="F">Female</option>

                    </select>

                </div>

                <div className="form-group">

                    <label>Education</label>

                    <select
                        name="education"
                        value={formData.education}
                        onChange={handleChange}
                    >

                        <option value="SSC">SSC</option>

                        <option value="12TH">12TH</option>

                        <option value="UNDER GRADUATE">Under Graduate</option>

                        <option value="GRADUATE">Graduate</option>

                        <option value="POST-GRADUATE">Post Graduate</option>

                        <option value="PROFESSIONAL">Professional</option>

                        <option value="OTHERS">Others</option>

                    </select>

                </div>

                <div className="form-group">

                    <label>Monthly Income</label>

                    <input
                        type="number"
                        name="income"
                        value={formData.income}
                        onChange={handleChange}
                        required
                    />

                </div>

                <div className="form-group">

                    <label>Credit Score</label>

                    <input
                        type="number"
                        name="credit_score"
                        value={formData.credit_score}
                        onChange={handleChange}
                        required
                    />

                </div>

                <div className="form-group">

                    <label>Credit Enquiries</label>

                    <input
                        type="number"
                        name="credit_enquiries"
                        value={formData.credit_enquiries}
                        onChange={handleChange}
                    />

                </div>

                <div className="form-group">

                    <label>Has Credit Card</label>

                    <select
                        name="credit_card"
                        value={formData.credit_card}
                        onChange={handleChange}
                    >

                        <option value={1}>Yes</option>

                        <option value={0}>No</option>

                    </select>

                </div>

                <div className="form-group">

                    <label>Has Personal Loan</label>

                    <select
                        name="personal_loan"
                        value={formData.personal_loan}
                        onChange={handleChange}
                    >

                        <option value={0}>No</option>

                        <option value={1}>Yes</option>

                    </select>

                </div>

                <div className="form-group">

                    <label>Has Home Loan</label>

                    <select
                        name="home_loan"
                        value={formData.home_loan}
                        onChange={handleChange}
                    >

                        <option value={0}>No</option>

                        <option value={1}>Yes</option>

                    </select>

                </div>

                <div className="form-group">

                    <label>Has Gold Loan</label>

                    <select
                        name="gold_loan"
                        value={formData.gold_loan}
                        onChange={handleChange}
                    >

                        <option value={0}>No</option>

                        <option value={1}>Yes</option>

                    </select>

                </div>

                <button
                    type="submit"
                    className="predict-btn"
                >

                    Predict Loan

                </button>

            </form>

        </div>

    );

}

export default LoanForm;