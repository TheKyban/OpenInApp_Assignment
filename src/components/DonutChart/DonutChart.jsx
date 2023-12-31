"use client";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement);

const DonutChart = ({ dataSet }) => {
    const data = {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
            {
                label: "# of Votes",
                data: dataSet,
                backgroundColor: ["#98D89E", "#F6DC7D", "#EE8484"],
                borderColor: ["#98D89E", "#F6DC7D", "#EE8484"],
                borderWidth: [1, 1, 1],
                borderRadius: [5, 5, 5],
            },
        ],
    };

    return (
        <Doughnut
            data={data}
            options={{
                scales: {
                    // outerWidth: 0,
                },
            }}
        />
    );
};

export default DonutChart;
