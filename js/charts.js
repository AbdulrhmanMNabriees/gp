var earnings = {
    series: [53, 16, 31],
    labels: ['Sales', 'Costs', 'Revenue'],
    colors: ['#286C56', '#284E4E', '#28C76F',],
    chart: {
    type: 'donut',
    width: '100%',
    },
    legend: {
        show: true,
        position: 'top',
        horizontalAlign: 'left',
        labels: {
            colors: '#DDD',
            useSeriesColors: false,
        },
    }, 
    stroke: {
        show: false,
    },
    dataLabels:{
        enabled: true,
        style: {
            fontSize: '13px'
        }
    },
    responsive: [{
        breakpoint: 1000,
        options: {
            dataLabels:{
                style:{
                    fontSize: '9px'
                }
            }
        },
    }]
};

var chart = new ApexCharts(document.querySelector("#earnings"), earnings);
chart.render();
// Second Charts

var revenue = {
    series: [{
        name: 'Revenue',
        data: [4, 3, 10, 9, 29, 19, 7, 19, 5, 13, 9],
    }],
    chart: {
        width: '100%',
        type: 'line',
    },
    stroke: {
        width: 5,
        curve: 'smooth'
    },
    xaxis: {
        type: 'string',
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Oct', 'Nov', 'Des'],
        labels: {
            style: {
                colors: '#DDD'
            }
        }
    },
    yaxis: {
        labels: {
            style: {
                colors: '#DDD'
            }
        }
    },
    fill: {
    type: 'gradient',
    gradient: {
            shade: 'dark',
            gradientToColors: ['#ea5455'],
            type: 'horizontal',
            stops: [0, 100, 100, 100]
        },
    },
};

var chart = new ApexCharts(document.querySelector("#revenue"), revenue);
chart.render();

// Third Charts:
var profit = {
    series: [65],
    chart: {
        height: 350,
        type: 'radialBar',
        toolbar: {
            show: false
        },
    },
    plotOptions: {
        radialBar: {
        startAngle: -135,
        endAngle: 225,
        hollow: {
            margin: 0,
            size: '70%',
            background: '',
            dropShadow: {
            enabled: true,
            top: 3,
            left: 0,
            blur: 4,
            opacity: 0.24
            }
        },
        track: {
            background: '#555',
            strokeWidth: '70%',
            dropShadow: {
            enabled: false,
            top: 3,
            left: 0,
            blur: 10,
            }
        },
    
        dataLabels: {
            show: true,
            name: {
            offsetY: -10,
            show: true,
            color: '#CCC',
            fontSize: '17px'
            },
            value: {
            color: '#fff',
            fontSize: '40px',
            show: true,
            }
        }
        }
    },
    fill: {
        type: 'gradient',
        gradient: {
        type: 'vertical',
        gradientToColors: ['#ea5455', '#28c76f'],
        stops: [0, 100]
        }
    },
    stroke: {
        lineCap: 'round'
    },
    labels: ['Increase Profit'],
};

var chart = new ApexCharts(document.querySelector("#profit"), profit);
chart.render();


// Fourth Chart

var categories = {
    series: [42, 47, 52],
    chart: {
        width: '100%',
        type: 'polarArea'
    },
    labels: ['Healthy', 'E-Commerce', 'Learning'],
    colors: ['#AD54FF', '#5A7FF3', '#45BBFD'],
    fill: {
        opacity: 1,
        colors: ['#AD54FF', '#5A7FF3', '#45BBFD'],
    },
    yaxis: {
        show: false
    },
    legend: {
        show: true,
        position: 'bottom',
        labels: {
            colors: '#DDD',
        },
    },
    stroke: {
        width: 0,
    },
    plotOptions: {
        polarArea: {
        rings: {
            strokeWidth: 0
        },
        spokes: {
            strokeWidth: 0
        },
        }
    },
    theme: {
        monochrome: {
        enabled: false,
        shadeTo: 'light',
        shadeIntensity: 0.6
        }
    },
};  

var chart = new ApexCharts(document.querySelector("#categories"), categories);
chart.render();