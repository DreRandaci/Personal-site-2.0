var list_of_cities = [
  "nashville",
  "nashville",
  "los angeles",
  "nashville",
  "memphis",
  "barcelona",
  "sevillia",
  "isla canary",
  "barcelona"
]


// return a count of the distinct duplicates ( not the times an entry is repeated ) entries in the list above. You can run your code by pressing the aqua colored "Run" button above left.
function countDuplicatesInList(city_list) {
  var count = 0;
  // fill in code here

  // Count the number of times we see each city and flatten into an object with cityName/count pairs.
  // All cities start with a count of 0.
  const defaultCityCount = 0;
  const countsForEachCity = city_list.reduce((cityCountObj, city) => {
    cityCountObj[city] = (cityCountObj[city] = 1 + (cityCountObj[city] || defaultCityCount));
    return cityCountObj;
  }, {});

  // If any of the cities have a count > 1, add 1 to the counter
  for (const city in countsForEachCity) {
    if (countsForEachCity[city] > 1) {
      count = count + 1;
    }
  };

  return count;
}


function main() {
  var count = countDuplicatesInList(list_of_cities);
  if (count == 2) {
    console.log("yep!");
  } else {
    console.log("failed :( count = " + count);
  }
}

main();