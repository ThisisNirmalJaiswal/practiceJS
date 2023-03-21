let dataArr = ["Mar 26 2023 1:56 AM", "april 26 2023 2:56 AM", "May 26 2023 3:56 AM"];

for (let i = 0; i < dataArr.length; i++) {
  // Create a new Date object for the current element of the array
  let date = new Date(dataArr[i]);

  // Format the date in the desired format
  let formattedDate = `${date.getDate()} ${date.toLocaleString('default', { month: 'short' })} ${date.getFullYear()}`;

  // Extract the time from the current element of the array
  let time = dataArr[i].split(' ')[3];

//   console.log(formattedDate)
  // Output the formatted date and time for the current element of the array
//   console.log(`date[${i}] = "${formattedDate}"`);
//   console.log(`time[${i}] = "${time}"`);
}
// function dateTime(arr){
//     let date = "";
//     let time = "";
//     for (let i = 0; i < arr.length; i++) {
//         let newArr = arr[i].split(" ");
//         date += newArr[1] + " ";
//         date += newArr[0] + " ";
//         date += newArr[2] + " ";
//         time += newArr[3] + " ";
//         time += newArr[4] + " ";
//     }
//     console.log("date: " + date);
//     console.log("time: " + time);
// }



// console.log(dateTime(dataArr))


// let dataArr = ["Mar 26 2023 1:56 AM", "april 26 2023 2:56 AM", "May 26 2023 3:56 AM"];

// let dateArr = [];
// let timeArr = [];

// const regex = /(\w{3,9})\s+(\d{1,2})\s+(\d{4})\s+(\d{1,2}:\d{2}\s+[AP]M)/;

// for (let i = 0; i < dataArr.length; i++) {
//   const matches = dataArr[i].match(regex);
//   if (matches) {
//     dateArr.push(`${matches[1]} ${matches[2]} ${matches[3]}`);
//     timeArr.push(matches[4]);
//   }
// }

// console.log(dateArr);
// console.log(timeArr);
