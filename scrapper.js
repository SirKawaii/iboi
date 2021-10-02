const fs = require('fs');
const axios = require("axios");
const cheerio = require("cheerio");
const pretty = require("pretty");
const { log } = require('console');



async function main(){
  var contentHtml = fs.readFileSync('E:\\mitdev\\node\\iboi\\example_data\\LiveData.html', 'utf8');
  const url = "http://mylocalweatherpage.com/asdasdasddwsa";
  // const { contentHtml } = await axios.get(url);

  const $ = cheerio.load(contentHtml);

  let receiverTimeSelector = "html body table tbody tr td input.item_2";

  let receiverTime = $('body > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(8) > td:nth-child(2) > input:nth-child(1)');
  let time = receiverTime.attr().value;
  
  let outdoorTemperature = $('body > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(16) > td:nth-child(2) > input:nth-child(1)').attr().value;

  let outdoorHumidity = $('body > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(17) > td:nth-child(2) > input:nth-child(1)').attr().value;
  let windDirection = $('body > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(18) > td:nth-child(2) > input:nth-child(1)').attr().value;
  let windSpeed = $('body > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(19) > td:nth-child(2) > input:nth-child(1)').attr().value;
  let windGust = $('body > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(20) > td:nth-child(2) > input:nth-child(1)').attr().value;
  let dailyMaxGust = $('body > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(21) > td:nth-child(2) > input:nth-child(1)').attr().value;
  let solarRadiation = $('body > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(22) > td:nth-child(2) > input:nth-child(1)').attr().value;
  let uvi = $('body > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(23) > td:nth-child(2) > input:nth-child(1)').attr().value;
  let hourlyRainData = $('body > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(26) > td:nth-child(2) > input:nth-child(1)').attr().value;
  let eventRain = $('body > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(27) > td:nth-child(2) > input:nth-child(1)').attr().value;
  let dailyRain = $('body > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(28) > td:nth-child(2) > input:nth-child(1)').attr().value;
  let weeklyRain = $('body > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(29) > td:nth-child(2) > input:nth-child(1)').attr().value;
  let mounthRain = $('body > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(30) > td:nth-child(2) > input:nth-child(1)').attr().value;
  let yearlyRain = $('body > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(31) > td:nth-child(2) > input:nth-child(1)').attr().value;


  console.log(yearlyRain);

}

main();