"use client";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import React from "react";

ChartJS.register(CategoryScale, LinearScale, BarElement);

const Chart = () => {
    const labels = ["Week 1", "Week 2", "Week 3", "Week 4"];
    return (
        <Bar
            data={{
                labels,
                datasets: [
                    {
                        label: "Dataset 1",
                        data: labels.map(() =>
                            faker.number.int({ min: 0, max: 500 })
                        ),
                        backgroundColor: "#98D89E",
                        borderRadius: 10,
                        barPercentage: 0.7,
                    },
                    {
                        label: "Dataset 2",
                        data: labels.map(() =>
                            faker.number.int({ min: 0, max: 500 })
                        ),

                        backgroundColor: "#EE8484",
                        borderRadius: 10,
                        barPercentage: 0.7,
                    },
                ],
            }}
            options={{
                maintainAspectRatio: false,
                responsive: true,

                scales: {
                    x: {
                        grid: {
                            display: false,
                            drawBorder: false,
                        },
                        border: {
                            display: false,
                        },
                    },
                    y: {
                        border: {
                            display: false,
                        },
                        ticks: {
                            stepSize: 100,
                        },
                    },
                },
            }}
        />
    );
};

export default React.memo(Chart);
