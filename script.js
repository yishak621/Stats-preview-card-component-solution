//declaration
const companies = document.querySelector('.companies');
const templates = document.querySelector('.templates');
const queries = document.querySelector('.queries');

const updateCount = (el) => {
  const value = parseInt(el.dataset.num);
  const increment = Math.ceil(value / 1000);

  let initialValue = 0;
  //count function
  const increaseCount = setInterval(() => {
    initialValue += increment;
    //to stop counting when it > value
    if (initialValue > value) {
      el.textContent = `10K+`;
      clearInterval(increaseCount);
      return; //<!--TODO: important
    }
    el.textContent = `${initialValue}K+`;
  }, 20); //1 mili second
  //console.log(increaseCount); the id that each span get
};
const updateCountTwo = (el) => {
  const value = parseInt(el.dataset.num);
  const increment = Math.ceil(value / 1000);

  let initialValue = 0;
  //count function
  const increaseCount = setInterval(() => {
    initialValue += increment;
    //to stop counting when it > value
    if (initialValue > value) {
      el.textContent = `${value}`;
      clearInterval(increaseCount);
      return; //<!--TODO: important
    }
    el.textContent = `${initialValue}`;
  }, 10); //1 mili second
  //console.log(increaseCount); the id that each span get
};
const updateCountThree = (el) => {
  const value = parseInt(el.dataset.num);
  const increment = Math.ceil(value / 1000);

  let initialValue = 0;
  //count function
  const increaseCount = setInterval(() => {
    initialValue += increment;
    //to stop counting when it > value
    if (initialValue > value) {
      el.textContent = `12M+`;
      clearInterval(increaseCount);
      return; //<!--TODO: important
    }
    el.textContent = `${initialValue}M+`;
  }, 20); //1 mili second
  //console.log(increaseCount); the id that each span get
};

updateCount(companies);
updateCountTwo(templates);
updateCountThree(queries);
