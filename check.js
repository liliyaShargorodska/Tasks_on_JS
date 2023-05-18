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
//
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
  //tasks 3
function sortColumn(column) {
  const table = document.getElementById("myTable");
  const tbody = table.querySelector("tbody");
  const rows = Array.from(tbody.getElementsByTagName("tr"));
  const columnIndex = Array.from(table.tHead.rows[0].cells).findIndex(
    (cell) => cell.textContent === column
  );

  rows.sort((rowA, rowB) => {
    const cellA = rowA.getElementsByTagName("td")[columnIndex].textContent;
    const cellB = rowB.getElementsByTagName("td")[columnIndex].textContent;
    return cellA.localeCompare(cellB);
  });

  for (let i = 0; i < rows.length; i++) {
    tbody.appendChild(rows[i]);
  }
}
