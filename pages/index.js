import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Title, Legend } from "chart.js";
Chart.register(ArcElement, Tooltip, Title, Legend);

const dashboard = () => {
  const data = {
    labels: [
      "Application received",
      "Scholarship applications",
      "Seats remaining",
    ],
    datasets: [
      {
        data: [16, 6, 19],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };
  return (
    <>
      <div className="main">
        <div className="cards">
          <div className="card">
            <p className="title">Total Programs</p>
            <h3>8</h3>
          </div>
          <div className="card">
            <p className="title">Total Facilities</p>
            <h3>15</h3>
          </div>
          <div className="card">
            <p className="title">Total Students</p>
            <h3>8k +</h3>
          </div>
          <div className="card">
            <p className="title">Applied Students</p>
            <h3>16</h3>
          </div>
        </div>
        <div className="graphs">
          <div className="graph">
            <Doughnut
              data={data}
              width={"1000%"}
              options={{ maintainAspectRatio: false }}
            />
          </div>
          <div className="additional_info">
            <div className="info">
              <h5>Application received</h5>
              <p>16</p>
            </div>
            <div className="info">
              <h5>Scholarship applications</h5>
              <p>6</p>
            </div>
            <div className="info">
              <h5>Seats remaining</h5>
              <p>19</p>
            </div>
            <div className="info">
              <h5>Total Graduates</h5>
              <p>5k +</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default dashboard;
