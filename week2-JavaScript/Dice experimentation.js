"use strict";

function runExperiment(sampleSize) {
  const valueCounts = [0, 0, 0, 0, 0, 0];

  // Looping to simulate rolling a die `sampleSize` times
  for (let i = 0; i < sampleSize; i++) {
    let randomInteger = Math.floor(Math.random() * 6) + 1;
    valueCounts[randomInteger - 1] += 1; 
  }

  const results = [];

  // Looping to compute percentages
  for (let count of valueCounts) {
    let percentage = (count / sampleSize) * 100; 
    results.push(percentage.toFixed(2)); 
  }

  return results;
}

function main() {
  const sampleSizes = [100, 1000, 1000000];

  for (let sampleSize of sampleSizes) {
    const percentages = runExperiment(sampleSize);
    console.log(`[${percentages}] ${sampleSize}`);
  }
}

main();
