const getData = async (path) => {
  try {
    const response = await fetch(path);
    return await response.json();
  } catch (err) {}
};

const data = await getData("./data.json");
console.log(data);

const chart = document.querySelector(".chart");
console.log(chart);

const createChart = () => {
  data.forEach((el) => {
    el = `<div class="chart__element">
          <div class="chart__element__popup"></div>
          <div class="chart__element__bar"></div>
          <div class="chart__element__label"></div>
        </div>`;
    chart.insertAdjacentHTML("afterbegin", el);
  });

  const bars = document.querySelectorAll(".chart__element__bar");
  const labels = document.querySelectorAll(".chart__element__label");
  const popUps = document.querySelectorAll(".chart__element__popup");

  popUps.forEach(
    (popUp, index) => (popUp.textContent = `$${data[index].amount}`)
  );

  bars.forEach(
    (el, index) => (el.style.height = `${data[index].amount * 2.5}px`)
  );
  labels.forEach((label, index) => {
    label.textContent = data[index].day;
  });
};
createChart();
