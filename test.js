const { exec } = require('child_process');

exec('node index.js', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error}`);
    process.exit(1);
  }
  if (stdout.includes('Hello, World!')) {
    console.log("Test passed.");
    process.exit(0);
  } else {
    console.error("Test failed.");
    process.exit(1);
  }
});
