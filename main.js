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
    series: []
};

$.get('HAWKCSV.csv', function(data) {
    // Split the lines
    var lines = data.split('\n'); // Splits based on the end of the line
    //console.log(lines);
    // Iterate over the lines and add categories or series
    
    var Xs = []; //holds the categories
    //console.log(Xs);

    var Ys = []; //holds the values
    //console.log(Ys);




    $.each(lines, function(lineNo, line) { //indexes each lineNo = 0, line = value associated
        var items = line.split(','); //split by commas
        //console.log(items);
        // header line containes categories
        
        //console.log('Date/Time: ' + items[0]);
        //console.log('Values: ' + items[1]);

        
        if(items[0] != "Date"){
            Xs.push(items[0]);
            //console.log('X: ' + Xs);
         } 

        
        if(items[1] != "Flood_Depth" ) {
            Ys.push(items[1]);
            //console.log('Y: ' + Ys);
         }
        
    });


    options.xAxis.categories.push(Xs);
    options.series.push(Ys);
    console.log(Xs);
    console.log(Ys);

        
        
        
            
        
          

        
        
        /*
        if (lineNo == 0) {
            $.each(items, function(itemNo, item) { 
                //console.log('item no:  ' + itemNo);
                //console.log('item : '  + item);
                //if (itemNo > 0) options.xAxis.categories.push(item);

            });
        }
        */
        
        // the rest of the lines contain data with their name in the first 
        // position
        //else {
            
            
            /*
            var series = {
                data: []
            };
            $.each(items, function(itemNo, item) {
                //console.log('item no :' + itemNo);
               //console.log('item :' + item);
                if (itemNo == 0) {
                    series.name = item;
                } else {
                    series.data.push(parseFloat(item));
                }
            });
            
            
            options.series.push(series);
        //}
        */

        

        
        
    
    
    // Create the chart
    var chart = new Highcharts.Chart(options);
});