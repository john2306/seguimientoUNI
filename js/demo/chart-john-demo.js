var ctx = document.getElementById('myChartPais').getContext('2d');


var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        labels: ['Perú', 'Chile', 'Francia', 'España', 'México', 'China', 'EEUU', 'Bolivia', 'Brasil','Otros'],
        datasets: [{
            label: 'Países laborales de los graduados UNI',
            data: [65,5,6,5,3,3,4,2,1,6],
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(225, 75, 229, 0.2)',
                'rgba(77, 227, 98, 0.2)',
                'rgba(232, 179, 72, 0.2)',
                'rgba(34, 24, 230, 0.2)',
                'rgba(24, 210, 230, 0.2)',
                'rgba(14, 48, 30, 0.2)'
              ],
              borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(225, 75, 229, 1)',
                'rgba(77, 227, 98, 1)',
                'rgba(232, 179, 72, 1)',
                'rgba(34, 24, 230, 1)',
                'rgba(24, 210, 230, 1)',
                'rgba(14, 48, 30, 1)'
              ],
              borderWidth: 1
        }]
    },

    // Configuration options go here
    options: {
        cutoutPercentage: 40,
        responsive: true,
    }
});


var ctxEconomico = document.getElementById('myChartEconomico').getContext('2d');
var chartEconomico = new Chart(ctxEconomico, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        labels: ['Educación', 'Minería', 'Telecomunicaciones', 'Construcción', 'Logística', 'Comercio', 'Servicios', 'Banca y Finanzas', 'Manufactura','Otros'],
        datasets: [{
            label: 'Sectores económicos de los graduados UNI',
            data: [4,8,13,17,10,12,6,12,8,10],
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(225, 75, 229, 0.2)',
                'rgba(77, 227, 98, 0.2)',
                'rgba(232, 179, 72, 0.2)',
                'rgba(34, 24, 230, 0.2)',
                'rgba(24, 210, 230, 0.2)',
                'rgba(14, 48, 30, 0.2)'
              ],
              borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(225, 75, 229, 1)',
                'rgba(77, 227, 98, 1)',
                'rgba(232, 179, 72, 1)',
                'rgba(34, 24, 230, 1)',
                'rgba(24, 210, 230, 1)',
                'rgba(14, 48, 30, 1)'
              ],
              borderWidth: 1
        }]
    },

    // Configuration options go here
    options: {
        cutoutPercentage: 40,
        responsive: true,
    }
});

var ctxCompetencias = document.getElementById('myChartCompetencias').getContext('2d');
var chartCompetencias = new Chart(ctxCompetencias, {
    // The type of chart we want to create
    type: 'radar',

    // The data for our dataset
    data: {
        labels: ['Responsabilidad', 'Liderazgo', 'Tenacidad', 'Trabajo en equipo', 'Comunicación asertiva', 'Empatía', 'Creatividad', 'Capacidad investigativa'],
        datasets: [{
            label: "FIIS",
            backgroundColor: 'rgba(255, 99, 132, 0.1)',
            borderColor: 'rgba(255, 99, 132, 1)',
            pointBackgroundColor: 'rgba(0, 0, 0, 1)',
            data: [17,13,15,12,18,15,18,17],
            },
            {
            label: "FIC",
            backgroundColor: 'rgba(54, 162, 235,0.1)',
            borderColor: 'rgba(54, 162, 235,1)',
            pointBackgroundColor: 'rgba(0, 0, 0, 1)',
            data: [17,16,16,16,18,17,19,16],
            },
            {
            label: "FIEE",
            backgroundColor: 'rgba(255, 206, 86,0.1)',
            borderColor: 'rgba(255, 206, 86,1)',
            pointBackgroundColor: 'rgba(0, 0, 0, 1)',
            data: [15,16,14,15,16,16,15,14],
            },
            {
            label: "FC",
            backgroundColor: 'rgba(225, 75, 229, 0.1)',
            borderColor: 'rgba(225, 75, 229, 1)',
            pointBackgroundColor: 'rgba(0, 0, 0, 1)',
            data: [12,15,18,12,19,18,19,18],
            },
            {
            label: "FIGMM",
            backgroundColor: 'rgba(77, 227, 98, 0.1)',
            borderColor: 'rgba(77, 227, 98, 1)',
            pointBackgroundColor: 'rgba(0, 0, 0, 1)',
            data: [14,16,18,14,19,15,18,14],
            },
            {
            label: "FIM",
            backgroundColor: 'rgba(232, 179, 72, 0.1)',
            borderColor: 'rgba(232, 179, 72, 1)',
            pointBackgroundColor: 'rgba(0, 0, 0, 1)',
            data: [17,18,14,15,18,17,19,19],
            },{
            label: "FIQT",
            backgroundColor: 'rgba(34, 24, 230, 0.1)',
            borderColor: 'rgba(34, 24, 230, 1)',
            pointBackgroundColor: 'rgba(0, 0, 0, 1)',
            data: [13,14,16,14,14,16,13,13],
            },{
            label: "ARQUITECTURA",
            backgroundColor: 'rgba(24, 210, 230, 0.1)',
            borderColor: 'rgba(24, 210, 230, 1)',
            pointBackgroundColor: 'rgba(0, 0, 0, 1)',
            data: [19,18,15,12,13,18,17,20],
            },
            {
            label: "FIP",
            backgroundColor: 'rgba(14, 48, 30, 0.1)',
            borderColor:  'rgba(74, 148, 130, 1)',
            pointBackgroundColor: 'rgba(0, 0, 0, 1)',
            data: [19,17,13,17,14,15,16,17],
            },
            {
            label: "FIA",
            backgroundColor: 'rgba(14, 10, 230,0.1)',
            borderColor: 'rgba(116, 120, 230, 1)',
            pointBackgroundColor: 'rgba(0, 0, 0, 1)',
            data: [16,13,17,19,14,17,13,18],
            },
            {
            label: "FIEECS",
            backgroundColor: 'rgba(222, 110, 230, 0.1)',
            borderColor: 'rgba(222, 110, 230, 1)',
            pointBackgroundColor: 'rgba(0, 0, 0, 1)',
            data: [14,13,15,15,13,17,18,17],
            },
            {
            label: "COMUNIDAD UNI",
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
            borderColor: 'rgba(0, 0, 0, 1)',
            pointBackgroundColor: 'rgba(0, 0, 0, 1)',
            data: [14,16,18,17,18,15,17,19],
            }]
    },

    // Configuration options go here
    options: {
        scale: {
            angleLines: {
                display: false
            },
            ticks: {
                suggestedMin: 0,
                suggestedMax: 20
            }
        }
    }
});

var ctxSueldos = document.getElementById('myChartSueldos').getContext('2d');
var chartSueldos = new Chart(ctxSueldos, {
    type: 'bar',
    data: {
        labels:["FIIS","FIC","FIEE","FC","FIGMM","FIM","FIQT","ARQUITECTURA","FIP","FIA","FIEECS","COMUNIDAD UNI"],
        datasets: [{
            label: "Sueldo promedio ",
            data: [5200,4800,4000,3000,4050,4200,3750,4000,3900,3100,3600,4010],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            xAxes: [{
                stacked: true
            }],
            yAxes: [{
                stacked: true
            }]
        }

    }
});
