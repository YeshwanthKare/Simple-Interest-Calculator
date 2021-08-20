const getRate = () => {
  let span = document.getElementById("rate-span");
  let rateValue = rate.value * 0.1 + 0.1;
  let finalRate = rateValue.toFixed(1);
  span.innerHTML = finalRate;

  let currentRate = finalRate;
  return currentRate;
};

const getTime = () => {
  let selectTag = document.getElementById("years").selectedIndex;
  let options = document.querySelectorAll("option");
  let years = options[selectTag].value;
  return years;
};

const computeSimpleInterest = () => {
  let principle = document.getElementById("principle").value;
  let rate = document.getElementById("rate");
  rate.value = getRate();
  let time = document.getElementById("years");
  time.value = getTime();

  let numerator = principle * time.value * rate.value;

  let SI = numerator / 100;

  showResult(principle, time.value, rate.value, SI.toFixed(2));
};

const showResult = (p, t, r, I) => {
  let output = document.querySelector(".output");

  output.textContent =
    "If you deposit " +
    p +
    ",<br>" +
    "at an interest rate of " +
    r +
    " %,<br> " +
    "You will receive an Amount of " +
    I +
    ",<br> in the Year 202" +
    t +
    ".";

  output.innerHTML = output.textContent;
};
