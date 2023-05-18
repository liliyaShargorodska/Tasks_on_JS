// let myArea = document.getElementById('text1').value;
//
// let words = myArea.split(" ");
// let capitalizedWords = [];
//
// for (let i = 0; i < words.length; i++) {
//   let word = words[i];
//   let capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
//   capitalizedWords.push(capitalizedWord);
// }
//
// let capitalizedArea = capitalizedWords.join(" ");
//  console.log(capitalizedArea);
//
//  function convertToCharacterCodes() {
//      const characterCodes = [];
//      for (let i = 0; i < myArea.length; i++) {
//        const charCode = myArea.charCodeAt(i);
//        characterCodes.push(charCode);
//      }
//      console.log(characterCodes);
//    }
//
//    function findLongestUniqueSubstring() {
////task 2
//     function findLongestSubstring(str) {
//       let longestSubstring = "";
//       let currentSubstring = "";
//       const visitedCharacters = new Set();
//
//       for (let i = 0; i < str.length; i++) {
//         const char = str[i];
//
//         if (visitedCharacters.has(char)) {
//           if (currentSubstring.length > longestSubstring.length) {
//             longestSubstring = currentSubstring;
//           }
//
//           currentSubstring = "";
//           visitedCharacters.clear();
//         }
//
//         visitedCharacters.add(char);
//         currentSubstring += char;
//       }
//       if (currentSubstring.length > longestSubstring.length) {
//         longestSubstring = currentSubstring;
//       }
//
//       return longestSubstring;
//     }
//
//     const longestUniqueSubstring = findLongestSubstring(myArea);
//     console.log(longestUniqueSubstring);
//   }
//task3

const table = document.getElementById('myTable');
const tbody = table.getElementsByTagName('tbody')[0];
const rows = Array.from(tbody.getElementsByTagName('tr'));

const sortColumn = (columnName) => {
  const columnIndex = Array.from(table.tHead.rows[0].cells).findIndex((th) => th.textContent === columnName);
  rows.sort((a, b) => {
    const cellA = a.cells[columnIndex].textContent.toLowerCase();
    const cellB = b.cells[columnIndex].textContent.toLowerCase();
    return cellA.localeCompare(cellB);
  });
  rows.forEach((row) => tbody.appendChild(row));
};


// Create the tableData object
const tableData = {
  rows: [
    {
      id: 1,
      first: "Mark",
      last: "Otto",
      handle: "@mdo"
    },
    {
      id: 2,
      first: "Jacob",
      last: "Thornton",
      handle: "@fat"
    },
    {
      id: 3,
      first: "Larry",
      last: "the Bird",
      handle: "@twitter"
    }
  ]
};
