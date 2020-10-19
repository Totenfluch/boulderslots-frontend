

function ComputeSMA(data, window_size, index) {
  let r_avgs = [], avg_prev = 0;
  for (let i = 0; i <= data.length - window_size; i++){
    let curr_avg = 0.00, t = i + window_size;
    for (let k = i; k < t && k <= data.length; k++) {
      curr_avg += (data[k][index] || data[k - 1][index]) / window_size;
    }
    r_avgs.push({ set: data.slice(i, i + window_size), avg: Math.floor(curr_avg) });
    avg_prev = curr_avg;
  }
  return r_avgs;
}

module.exports = {
  predict: ComputeSMA,
};