const errorBox = document.getElementById('errorBox');

const lineSeparator = '\n\n'; // between input lists' items
const itemSeparator = ','; // between the two items that concatenated horizontally in one line

// making two lists concatenate horizontally
function concatenate(v1, v2) {
  // split lists' items
  v1 = v1.split(lineSeparator);
  v2 = v2.split(lineSeparator);

  // checking length equality
  if (v1.length != v2.length) {
    errorBox.innerText = "Lists' length isn't equal";
    return;
  }

  // concatenate
  let result = '';

  v1.forEach((item, index) => {
    result += `${item}${itemSeparator}${v2[index]}\n`;
  });

  return result;
}

const listsSeparator = '\n\n\n';

// 1. saving the second list
const copiedText = await navigator.clipboard.readText();
copiedText = copiedText.split(listsSeparator);

// 2. concatenate
const result = concatenate(copiedText[0], copiedText[1]);

// 3. save result to clipboard
navigator.clipboard.writeText(result);
