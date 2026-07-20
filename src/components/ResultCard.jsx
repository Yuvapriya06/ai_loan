function ResultCard({ result }) {

    if (!result) return null;

    const {

        prediction,
        approval_probability,
        rejection_probability,

        applicant,

        calculated_features,

        shap_summary,
        feature_plot,

        report

    } = result;

    return (

        <div className="card">

            <h2>Loan Prediction Result</h2>

            <div
                className={
                    prediction === "Approved"
                        ? "status approved"
                        : "status rejected"
                }
            >

                {prediction === "Approved"
                    ? "🟢 APPROVED"
                    : "🔴 REJECTED"}

            </div>

            <div className="result">

                <h4>Prediction Probability</h4>

                <p>

                    Approval :
                    <b> {approval_probability}%</b>

                </p>

                <p>

                    Rejection :
                    <b> {rejection_probability}%</b>

                </p>

            </div>

            {applicant && (

                <div className="result">

                    <h4>Applicant Summary</h4>

                    <p><b>Age:</b> {applicant.age}</p>

                    <p><b>Gender:</b> {applicant.gender}</p>

                    <p><b>Education:</b> {applicant.education}</p>

                    <p><b>Income:</b> ₹{applicant.income}</p>

                    <p><b>Credit Score:</b> {applicant.credit_score}</p>

                </div>

            )}

            {calculated_features && (

                <div className="result">

                    <h4>Calculated Banking Features</h4>

                    <p>

                        Employment Stability :
                        <b> {calculated_features.employment_score}</b>

                    </p>

                    <p>

                        Credit Behaviour :
                        <b> {calculated_features.credit_behaviour}</b>

                    </p>

                    <p>

                        Repayment History :
                        <b> {calculated_features.repayment_history}</b>

                    </p>

                    <p>

                        Credit Risk :
                        <b> {calculated_features.credit_risk}</b>

                    </p>

                    <p>

                        Debt Exposure :
                        <b> {calculated_features.debt_exposure}</b>

                    </p>

                </div>

            )}

            {shap_summary && (

                <div className="result">

                    <h4>SHAP Summary Plot</h4>

                    <img
                        src={shap_summary}
                        alt="SHAP Summary"
                        width="100%"
                    />

                </div>

            )}

            {feature_plot && (

                <div className="result">

                    <h4>Feature Impact Plot</h4>

                    <img
                        src={feature_plot}
                        alt="Feature Impact"
                        width="100%"
                    />

                </div>

            )}

            {report && (

                <div className="report">

                    <h4>🤖 AI Underwriting Report</h4>

                    <p>{report}</p>

                </div>

            )}

        </div>

    );

}

export default ResultCard;