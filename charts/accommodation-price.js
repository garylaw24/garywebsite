function accommodationPriceChart(accommodations) {
    const accommodationPrice = {
      lessThan500: 0,
      lessThan1000: 0,
      lessThan2000: 0,
      lessThan4000: 0,
      moreThan3999: 0
    };
  
    accommodations.forEach(accommodation => {
      if (accommodation.price < 500) {
        accommodationPrice.lessThan500 += 1;
      } else if (accommodation.price < 1000) {
        accommodationPrice.lessThan1000 += 1;
      } else if (accommodation.price < 2000) {
        accommodationPrice.lessThan2000 += 1;
      } else if (accommodation.price < 4000) {
        accommodationPrice.lessThan4000 += 1;
      } else if (accommodation.price > 3999) {
        accommodationPrice.moreThan3999 += 1;
      }
    });
  
    console.log("what's the distribution of accommodationPrice", accommodationPrice);
    Highcharts.chart('accommodation-price-chart', {
      chart: {
        type: 'pie'
      },
      title: {
          text: 'Accommodation price'
      },
      series: [{
        name: 'Brands',
        innerSize: '40%',
        colorByPoint: true,
        data: [{
            name: 'Less than 500',
            y: accommodationPrice.lessThan500,
        }, {
            name: 'Less than 1000',
            y: accommodationPrice.lessThan1000
        }, {
            name: 'Less than 2000',
            y: accommodationPrice.lessThan2000
        }, {
            name: 'Less than 4000',
            y: accommodationPrice.lessThan4000
        }, {
            name: 'More than 3999',
            y: accommodationPrice.moreThan3999
        }]
      }]
    });
  }