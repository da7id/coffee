Template.history.pourHistory = function() {
  let hario = Pours.find({brew: 'Hario v60' }).fetch().map(function(data) {
    return data.brewDate;
  });
  let hario_data=[0,0,0,0,0,0,0,0,0,0,0,0]; 
  hario.forEach(function(date) {
    month=date.substring(0,2);
    hario_data[month-1]+=1;
  });
  
  let chemex = Pours.find({brew: 'Chemex' }).fetch().map(function(data) {
    return data.brewDate;
  });
  let chemex_data=[0,0,0,0,0,0,0,0,0,0,0,0]; 
  chemex.forEach(function(date) {
    month=date.substring(0,2);
    chemex_data[month-1]+=1;
  });
  let french = Pours.find({brew: 'French Press' }).fetch().map(function(data) {
    return data.brewDate;
  });
  let french_data=[0,0,0,0,0,0,0,0,0,0,0,0]; 
  french.forEach(function(date) {
    month=date.substring(0,2);
    french_data[month-1]+=1;
  });
  return {
    chart: {
    type: 'area'
  },
  title: {
    text: 'Your coffee drinking'
  },
  credits: {
    enabled: false
  },
  xAxis: {
    categories: ['January','February','March','April','May','June','July','August','September','October','November','December']
  },

  yAxis: {
    title: {
      text: 'Month'
    }
  },

  tooltip: {
    pointFormat: 'You drank <b>{point.y}</b> pours of {point.series.name} in the {point.x}th month'
  },

  plotOptions: {
    area: {
      marker: {
        enabled: false,
        symbol: 'circle',
        radius: 4,
        states: {
          hover: {
            enabled: true
          }
        }
      }
    }
  },

  series: [{
      name: 'Hario v60',
      data: hario_data 
    },{
      name: 'French Press',
      data: french_data
    },{
      name: 'Chemex',
      data: chemex_data
    }
    ]
  };
}
