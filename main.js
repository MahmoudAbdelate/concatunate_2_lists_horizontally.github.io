const messageBox = document.getElementById('messageBox');

// making two lists concatenate horizontally
function concatenate(list1, list2) {
  let result = '';

  list1.forEach((item, index) => {
    result += `${item},${list2[index]}\n`;
  });

  return result;
}

const listsSeparator = '\n\n\n'; // between input lists
const lineSeparator = '\n\n'; // between input lists' items

// 1. saving the second list
navigator.clipboard.readText().then((copiedText) => {
  // checking if it's undefined
  if (copiedText === undefined) {
    messageBox.innerText = 'copy text first';
    return;
  }

  // split copiedText to 2 lists
  lists = copiedText.split(listsSeparator);

  // validating the length of lists
  if (lists.length !== 2) {
    messageBox.innerText = `lists aren't separated correctly\n\nlists' length: ${lists.length}\n\n${lists}`;
    return;
  }

  // split lists' items
  list1 = lists[0].split(lineSeparator);
  list2 = lists[1].split(lineSeparator);

  // checking lists' items number equality
  if (list1.length !== list2.length) {
    messageBox.innerText = `lists' items number aren't equal\n1st list has ${list1.length} item\n2nd list has ${list2.length} item`;
    return;
  }

  // concatenate
  const result = concatenate(copiedText[0], copiedText[1]);

  // save result to clipboard
  navigator.clipboard.writeText(result);

  // showing the result on the screen with 'Done' message
  messageBox.innerText = 'Done\nSaved to clipboard';
});
