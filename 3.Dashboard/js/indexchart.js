var ctx = document.getElementById('data-plan').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['1st Quarter 2021', '2nd Quarter 2021', '3rd Quarter 2021', '4rd Quarter 2022',
            '1st Quarter 2022', '2nd Quarter 2022', '3rd Quarter 2022', '4rd Quarter 2022'
        ],
        datasets: [{
            label: 'Data Plan Amount',
            data: [1000, 3000, 4000, 6000],
            maxBarThickness: 35,
            fill: false,
            borderColor: '#0c0f3a',
            borderWidth: 1
        }]
    },
    options: {
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            },
            xAxes: [{
                gridLines: {
                    display: false
                },
                ticks: {
                    autoSkip: false,
                    maxRotation: 90,
                    minRotation: 90
                }
            }],
        },
        legend: {
            display: false,
        },
        title: {
            display: true,
            text: 'Amount',
            position: 'left',

        },

    }
});
/** Top Up Chart*/
var ctx = document.getElementById('top-up').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                        labels: ['Bulk Top Up','Multiple Top Up','Single Top Up'],
                        datasets: [{
                            label: 'Mobile Number Count',
                            data: [80000,50000,18000],
                            maxBarThickness: 45,
                            backgroundColor: '#0c0f3a',
                            borderWidth: 1
                        }]
                },
                options: {
                    maintainAspectRatio:false,
				
                    legend:{
                        display:false
                    },
                    responsive:true,
                    
                    
                    scales : {
                            xAxes : [ {
                                gridLines : {
                                    display : false
                                }
                            } ]
                        },
                        myScale: {
                        type: 'logarithmic',
                        position: 'right', // `axis` is determined by the position as `'y'`
                        },
                        
                
                       
                        title: {
                            display: true,
                            text: 'Amount',
                            position:'top'
                         
                        },

                        onClick:function(e){
                            var activePoints = myChart.getElementsAtEvent(e);
                            if (activePoints[0] != undefined ) {
                                var selectedIndex = activePoints[0]._index;
                                var label = this.data.labels[selectedIndex]
                                console.log(label);
                                if (label == "Bulk Top Up") {
                                    
                                    window.location.href = "";

                                }else if (label == "Multiple Top Up") {
                                    window.location.href = "";

                                }else if (label == "Single Top Up") {
                                    window.location.href = "";
                                    
                                }
        
                            }
                
                        },
        }
    });

   /** */

   var data = {
    labels: ['Mec Tel', 'MPT', 'Mytel', 'Ooredoo', 'Telenor'],
    datasets: [{
        label: 'Special Offer Amount',
        data: [4000, 10000, 8000, 5000, 7000],
        maxBarThickness: 35,
        backgroundColor: [
            '#012653'
        ],
        borderColor: [
            '#012653'
        ],
        borderWidth: 1
    }]
};

// config 
var config = {
    type: 'bar',
    data,
    options: {

        layout: {
            padding: 10
        },

        indexAxis: 'y',
        scales: {
            y: {
                beginAtZero: true
            }
        },
        scales: {
            yAxes: [{
                gridLines: {
                    display: false
                }
            }]
        },

    }
};

// render init block
var myChart = new Chart(
    document.getElementById('horizontal-bar'),
    config
);


