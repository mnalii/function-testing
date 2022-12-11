function fishBash(num) {
  for (let i = 1; i <= num; i++) {
    if (i % 15 === 0) {
      console.log(i + ': fish bash');
    } else if (i % 5 === 0) {
      console.log(i + ': bash');
    } else if (i % 3 === 0) {
      console.log(i + ': fish');
    }
  }

  return 1;
}

module.exports = fishBash;
