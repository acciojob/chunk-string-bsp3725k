function stringChop(str, size) {
  // Handle invalid input cases
  if (!str || size <= 0) {
    return [];
  }

  const result = [];
  for (let i = 0; i < str.length; i += size) {
    // Extract substrings of length `size`
    result.push(str.slice(i, i + size));
  }
  
  return result;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = parseInt(prompt("Enter Chunk Size."), 10); // Ensure size is parsed as a number
alert(stringChop(str, size));

