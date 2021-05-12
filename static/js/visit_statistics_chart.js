function getVisitStatisticsChartOption() {
    function date_transformer(date) {
        var y = date.getFullYear();
        var m = date.getMonth() + 1;
        m = m < 10 ? '0' + m : m;
        var d = date.getDate();
        d = d < 10 ? ('0' + d) : d;
        return y + '/' + m + '/' + d;
    }

    var timeRange = []
    var test_y = []

    var base = +new Date() - 3600 * 24 * 30 * 1000
    var end = +new Date()
    while (base <= end) {
        timeRange.push(date_transformer(new Date(base)))
        base += 3600 * 24 * 1000

        test_y.push(Math.floor(Math.random() * 10))
    }
    console.log(timeRange)

    var option = {
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: timeRange,
            axisLabel: {
                interval: timeRange.length - 17
            }
        },
        yAxis: {
            type: 'value',
            show: false,

        },

        tooltip: {
            show: true,
            trigger: 'axis'
        },
        series: [{
            name: 'visit',
            data: test_y,
            smooth: true,
            type: 'line',
            symbolSize: 1, //拐点大小
            itemStyle: {

            },
            areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(58,77,233,0.8)'
                }, {
                    offset: 1,
                    color: 'rgba(58,77,233,0.3)'
                }])
            }
        }]
    };

    return option
}

$(function() {
    var visitStatisticsChart = echarts.init(document.getElementById('visit_statistics_chart'))
    visitStatisticsChart.setOption(getVisitStatisticsChartOption())

    window.addEventListener('resize', function() {

        console.log('页面缩放变化了');
        visitStatisticsChart.resize()

    });
})