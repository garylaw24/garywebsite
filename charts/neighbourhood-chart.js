function neighbourhoodChart(accommodations) {
    // Extract labels
    const neighbourhoodLabels = Array.from(new Set(accommodations.map(accommodation => accommodation.neighbourhood))).sort();

    // Store the data for the
    const data = {
      privateRooms: {},
      entireHome: {},
      shared: {}
    };
  
    // Populate the data
    accommodations.forEach(accommodation => {
      if (accommodation.room_type === 'Private room') {
        if (data.privateRooms[accommodation.neighbourhood] === undefined) {
          data.privateRooms[accommodation.neighbourhood] = 1;
        } else {
          data.privateRooms[accommodation.neighbourhood] += 1;
        }
      } else if (accommodation.room_type === 'Entire home/apt') {
        if (data.entireHome[accommodation.neighbourhood] === undefined) {
          data.entireHome[accommodation.neighbourhood] = 1;
        } else {
          data.entireHome[accommodation.neighbourhood] += 1;
        }
      } else if (accommodation.room_type === 'Shared room') {
        if (data.shared[accommodation.neighbourhood] === undefined) {
          data.shared[accommodation.neighbourhood] = 1;
        } else {
          data.shared[accommodation.neighbourhood] += 1;
        }
      }
    });
  
    // Extract the data
    const privateRooms = Object.keys(data.privateRooms).sort().map(neighbourhood => data.privateRooms[neighbourhood]);
    const entireHome = Object.keys(data.entireHome).sort().map(neighbourhood => data.entireHome[neighbourhood]);
    const shared = Object.keys(data.shared).sort().map(neighbourhood => data.shared[neighbourhood]);
  
    console.log("what's the neighbourhood?", accommodation.neighbourhood);
    Highcharts.chart('neighbourhood-chart', {
      chart: {
        type: 'area'
      },
      xAxis: {
        categories: neighbourhoodLabels
      },
      title: {
        text: 'Neighbourhood'
      },
      series: [{
        name: 'Private room',
        data: privateRooms
      }, {
        name: 'Entire home/apt',
        data: entireHome
      }, {
        name: 'Shared room',
        data: shared
      }]
    });
  }