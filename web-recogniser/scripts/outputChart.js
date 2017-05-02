function OutputChart(){
    this.ctx = document.getElementById("outputChart");
    this.ctx.width = 650;
    this.ctx.height=250;
    this.chart = new Chart(this.ctx, {
        type: 'bar',
        data: {
            labels: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
            scaleShowLabels : false,
            datasets: [{
                label: 'Match rate',
                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                borderWidth: 1
            }]
        },
        options: {
            responsive: false,
            legend: {
                display: false
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true,
                        max: 1.0
                    }
                }]
            }
        }
    });
}
OutputChart.prototype.plot = function(output){
    var resetBgColor = '0'.repeat(10).split('').map(x => 'rgba(59, 79, 94, 0.6)');
    var resetBorder = '0'.repeat(10).split('').map(x => 'rgba(77, 82, 110, 0.6)');
    var maxIndex = output.indexOf(Math.max(...output));
    this.chart.data.datasets[0].backgroundColor = resetBgColor;
    this.chart.data.datasets[0].borderColor = resetBorder;
    this.chart.data.datasets[0].data = output;
    this.chart.data.datasets[0].backgroundColor[maxIndex] = 'rgba(219, 181, 36, 0.4)';
    this.chart.data.datasets[0].borderColor[maxIndex] = 'rgba(219, 181, 36, 0.5)';

    this.chart.update();
}
OutputChart.prototype.clear = function(){
    this.chart.data.datasets[0].data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.chart.update();
}