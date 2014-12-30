var options = {
    chart: {
        renderTo: 'container',
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
    series: []

};

$.get('HAWKCSV.csv', function(data) 
{
    // Split the lines
    var lines = data.split('\n'); // Splits based on the end of the line
    //console.log(lines);
    
    var categories = []; //holds the categories
    //console.log(categories);
    
    
    var series = { 
        name: 'Height',
        data: [] //holds the series values 
    }; 

    //document.write('1');
    

    $.each(lines, function(lineNo, line) //indexes each lineNo = 0, line = value associated
    { 
        var items = line.split(','); //split by commas
        //console.log(items);
        
        
        //console.log('Date/Time(x): ' + items[0]);
        //console.log('Values(y): ' + items[1]);
        
        categories.push(items[0]);
        //console.log('X: ' + categories);
    
        
        series.data.push(items[1]);
        //console.log('Y: ' + series.data);
        //console.log('Values(y): ' + items[1]);

    //document.write('2');

        
    });

    //document.write('3');

    categories.splice(0,1);  //removes first element
    series.data.splice(0,1); 
    categories.splice(143,1); //removes last undefined element from array
    series.data.splice(143,1); 
    //console.log(categories);
    
    console.log('Series name: ' + series.name);
    console.log('Y: ' + series.data)
    

    options.xAxis.categories.push(categories);
    console.log('x axis: ' + options.xAxis.categories);
    
    console.log(series);
    options.series.push(series);
    console.log(options.series);
    console.log('y axis: ' + options.series.data);
    console.log(options.series.data);
    console.log(options.series.name);

    // Create the chart
    var chart = new Highcharts.Chart(options);
    //console.log(chart);
});


