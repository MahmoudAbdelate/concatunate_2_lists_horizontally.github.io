const errorBox = document.getElementById('errorBox');

const lineSeparate = '\n\n'; // between input lists' items
const itemSeparate = ','; // between the two items that concatenated horizontally in one line

// making two lists concatenate horizontally
function concatenate(v1, v2) {
  // split lists' items
  v1 = v1.split(lineSeparate);
  v2 = v2.split(lineSeparate);

  // checking length equality
  if (v1.length != v2.length) {
    errorBox.innerText = "Lists' length isn't equal";
    return;
  }

  // concatenate
  let result = '';

  v1.forEach((item, index) => {
    result += `${item}${itemSeparate}${v2[index]}\n`;
  });

  return result;
}

// saving the first list once the page open
const v1 = navigator.clipboard.readText();

// Second Step
function finish() {
  // 1. saving the second list
  const v2 = navigator.clipboard.readText();

  // 2. concatenate
  const result = concatenate(v1, v2);

  // 3. save result to clipboard
  navigator.clipboard.writeText(result);
}
