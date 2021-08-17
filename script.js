window.onload = () => {
  computeRate();
  compute();
};

function computeRate() {
  let rate = document.getElementById("rate");
  let span = document.getElementById("rate-span");

  rate.oninput = function () {
    let rateValue = rate.value * 0.1 + 0.1;
    let finalRate = rateValue.toFixed(1);
    span.innerHTML = finalRate + " " + "%";
    getRate(span.value);
  };
}

const getRate = (rateAmount) => {
  return rateAmount;
};

function compute(principleAmount) {
  principleAmount = document.getElementById("principal").value;
}

const selectYears = (year) => {
  //   return year;
  computeSimpleInterest(principle, rate, year);
};

const computeSimpleInterest = (principle, rate, time) => {
  console.log({ principle: principle, rate: rate, time: time });
};
