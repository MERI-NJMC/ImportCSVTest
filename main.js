var options = {
    chart: {
        renderTo: 'container',
        //defaultSeriesType: 'column',
        defaultSeriesType: 'spline'
    },
    title: {
        text: 'Flooding'
    },
    xAxis: {
        categories: []

    },
    yAxis: {
        title: {
            text: 'Height'
        }
    },
    series: [{

        name: 'Water Height',
        data: []
    }]
};

$.get('HAWKCSV.csv', function(data) 
{
    // Split the lines
    var lines = data.split('\n'); // Splits based on the end of the line
    //console.log(lines);
    // Iterate over the lines and add categories or series
    
    var Xs = []; //holds the categories
    //console.log(Xs);

    var Ys = []; //holds the values
    //console.log(Ys);

    $.each(lines, function(lineNo, line) //indexes each lineNo = 0, line = value associated
    { 
        var items = line.split(','); //split by commas
        //console.log(items);
        
        
        //console.log('Date/Time(x): ' + items[0]);
        //console.log('Values(y): ' + items[1]);
        
        Xs.push(items[0]);
        //console.log('X: ' + Xs);
    
        Ys.push(items[1]);
        //console.log('Y: ' + Ys);
        //console.log('Values(y): ' + items[1]);
    });


    Xs.splice(0,1);  //removes first element
    Ys.splice(0,1); 
    Xs.splice(143,1); //removes last undefined element from array
    Ys.splice(143,1); 
    

    options.xAxis.categories.push(Xs);
    options.series.push(Ys);
    //console.log(Xs);
    //console.log(Ys);

    // Create the chart
    var chart = new Highcharts.Chart(options);
    //console.log(chart);
});