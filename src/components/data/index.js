export const data = {
    options: {
        colors: ["#E91E63", "#FF9800"],
        chart: {
            id: "basic-bar",
        },
        xaxis: {
            categories: [
                "day-1",
                "day-2",
                "day-3",
                "day-4",
                "day-5",
                "day-6",
                "day-7",
                "day-8",
            ],
        },
    },
    series: [
        {
            name: "calories intake",
            data: [2030, 1940, 1845, 2050, 2149, 1860, 1670,2000],
        },
        {
            name: "calories burnt",
            data: [820, 760, 635, 580, 749, 770, 620, 881],
        },
    ],
}