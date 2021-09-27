
//dashboard page

export const doughnutData = {
    labels: ['State1', 'State2', 'State3'],
    datasets: [
        {
            data: [300, 50, 100],
            backgroundColor: ['#ff8084', '#13c9ca', '#a5a5a5']
        }

    ]
}

export const doughnutOption = {
    maintainAspectRatio: false,
    legend: {
        display: false,
    },
}

export const pieData = {
    labels: ['State1', 'State2', 'State3', 'State4'],
    datasets: [
        {
            data: [120, 200, 200, 150],
            backgroundColor: ['#ff8084', '#13c9ca', '#f0b54d', '#a5a5a5']
        }
    ]

}

export const pieOptions = {
    maintainAspectRatio: false,
    legend: {
        display: false,
    },
}

export const lineData = {
    labels: ['100', '200', '300', '400', '500', '600', '700', '800'],
    datasets: [
        {
            lagend: 'none',
            data: [2.5, 3, 3, 0.9, 1.3, 1.8, 3.8, 1.5],
            borderColor: "#ff8084",
            backgroundColor: "#ff8084",
            borderWidth: 2
        },
        {
            lagend: 'none',
            data: [3.8, 1.8, 4.3, 2.3, 3.6, 2.8, 2.8, 2.8],
            borderColor: "#a5a5a5",
            backgroundColor: "#a5a5a5",
            borderWidth: 2
        }
    ]
};
export const lineOptions = {

    maintainAspectRatio: false,
    animation: false,
    legend: {
        display: false,
    },
    scales: {
        xAxes: [{
            barPercentage: 0.7,
            categoryPercentage: 0.4,
            gridLines: {
                display: false,
            },
        }],
        yAxes: [{
            barPercentage: 0.7,
            categoryPercentage: 0.4

        }]
    },
}


