function chunkString(str, size) {
  // Handle edge cases where input is invalid
  if (!str || size <= 0) {
    return [];
  }

  let result = [];
  for (let i = 0; i < str.length; i += size) {
    // Extract substring chunks of `size` length
    result.push(str.slice(i, i + size));
  }

  return result;
}
// Example usag
const str = prompt("Enter String:"); // Input string
const size = parseInt(prompt("Enter Chunk Size:"), 10); // Chunk size as integer

if (isNaN(size) || size <= 0) {
  alert("Please enter a valid positive number for the chunk size!");
} else {
  const chunks = chunkString(str, size);
  alert(JSON.stringify(chunks)); // Display result in JSON format
}