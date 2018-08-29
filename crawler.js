
// crawler:

// var Crawler = require("js-crawler");
 
// new Crawler().configure({depth: 3})
//   .crawl("https://www.timeanddate.com/", function onSuccess(page) {
//     console.log(page.url);
//   });
  

//x-ray first edition:

// var Xray = require('x-ray');
// var x = Xray();
 
// x('https://www.timeanddate.com/weather/?low=4','tr', [{
//   firstGroup:{
//     city: 'td a',
//     link: 'td a@href',
//     temp: 'td.rbi',
//     img: 'img@src',
//     humidity: x('td a@href', 'p:nth-child(7)'),
//     wind: x('td a@href', 'p:nth-child(6)')
//   },
//   secGroup:{
//     city: 'td:nth-child(5) a',
//     link: 'td:nth-child(5) a@href',
//     temp: 'td:nth-child(8)',
//     img: 'td:nth-child(7) img@src',
    
//   },
//   thirdGroup:{
//     city: 'td:nth-child(9) a',
//     link: 'td:nth-child(9) a@href',
//     temp: 'td:nth-child(12)',
//     img: 'td:nth-child(11) img@src',
    
//   }  


// }])
// // .paginate('td a@href')
// // .limit(3)
// .write('results.json');



//x-ray 2nd edition:

// var Xray = require('x-ray');
// var x = Xray();
 
// x('https://www.timeanddate.com/weather/?low=4','tr', [{
  
//     city: 'td a',
//     link: 'td a@href',
//     temp: 'td.rbi',
//     img: 'img@src',
//     humidity: x('td a@href', 'p:nth-child(7)'),
//     wind: x('td a@href', 'p:nth-child(6)'),
  
  
//     citySec: 'td:nth-child(5) a',
//     linkSec: 'td:nth-child(5) a@href',
//     tempSec: 'td:nth-child(8)',
//     imgSec: 'td:nth-child(7) img@src',
    
  
  
//     cityThird: 'td:nth-child(9) a',
//     linkThird: 'td:nth-child(9) a@href',
//     tempThird: 'td:nth-child(12)',
//     imgThird: 'td:nth-child(11) img@src',
    
  


// }])
// // .paginate('td a@href')
// // .limit(3)
// .write('results.json');





//x-ray 3 files (can be used), third edition:
var Xray = require('x-ray');
var x = Xray();
 
x('https://www.timeanddate.com/weather/?low=4','tr', [{
  
    city: 'td a',
    link: 'td a@href',
    temp: 'td.rbi',
    img: 'img@src',
    humidity: x('td a@href', 'p:nth-child(7)'),
    wind: x('td a@href', 'p:nth-child(6)'),
  
  
  
}])
// .paginate('td a@href')
// .limit(5)
.write('results.json');


x('https://www.timeanddate.com/weather/?low=4','tr', [{

citySec: 'td:nth-child(5) a',
linkSec: 'td:nth-child(5) a@href',
tempSec: 'td:nth-child(8)',
imgSec: 'td:nth-child(7) img@src',
// humiditySec: x('td:nth-child(5) a@href', 'p:nth-child(7)'),
}])
// .paginate('td a@href')
// .limit(5)
.write('results2.json');


x('https://www.timeanddate.com/weather/?low=4','tr', [{

cityThird: 'td:nth-child(9) a',
linkThird: 'td:nth-child(9) a@href',
tempThird: 'td:nth-child(12)',
imgThird: 'td:nth-child(11) img@src',

}])
// .paginate('td a@href')
// .limit(5)
.write('results3.json');