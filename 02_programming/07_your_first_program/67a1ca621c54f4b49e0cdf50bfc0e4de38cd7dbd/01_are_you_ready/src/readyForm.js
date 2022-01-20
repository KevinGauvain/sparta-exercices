const readyForm = (reader) => {
  // Code here
  reader.question("Are you ready ? ", (redline) => {
    console.log(`Wait : ${redline} ? Really ? Come on, Go go go !`);
    reader.close();
  });
};

// Leave line below for tests to work
module.exports = readyForm;
