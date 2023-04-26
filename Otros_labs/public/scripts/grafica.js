import {Chart} from "chart.js";

const burnup_chart = document.getElementById('burnup_chart').getContext("2d");
new Chart(burnup_chart,{
    type:'line',
    data:{
        labels: [0, 1, 2, 3, 4, 5, 6, 7],
        datasets:[
            {
                label:'Goal Points',
                data: [0, 11, 21, 32, 43, 54, 64, 75],
                borderColor://azul marino
                    'rgb(1, 41, 95)',
                backgroundColor://azul marino
                    'rgb(1, 41, 95)',
            },
            {
                label:'Points Done',
                data:[0, 4, 12, 15, 33, 38, 58, 75],
                borderColor://tverde olivo
                    'rgb(132,147,36)',
                backgroundColor://tverde olivo
                    'rgb(132,147,36)'
            },
            {
                label:'Scope Points',
                data:[67, 67, 67, 67, 67, 72, 75, 75],
                borderColor://azul teal
                    'rgb(67,127,151)',
                backgroundColor://azul teal
                    'rgb(67,127,151)',
            }
        ]
    },
});