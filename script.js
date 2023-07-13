let volume_el = document.querySelector('.volume');
let brix_el = document.querySelector('.brix');

document.querySelector('button').addEventListener('click', (e) => {
  e.preventDefault()
  
  let volume = parseFloat(volume_el.value);
  let brix = parseFloat(brix_el.value);

  let sugar = volume * (brix / 100)
  let juice = volume - sugar
  let onetoone = volume - (sugar * 2)
  let twotoone = (volume * 2) - (sugar * 3)

  document.querySelector('.sugar').textContent = `${Math.round(sugar*100) / 100} grams`;
  document.querySelector('.juice').textContent = `${Math.round(juice*100) / 100} grams`;
  document.querySelector('.onetoone').textContent = `${Math.round(onetoone*100) / 100} grams`;
  document.querySelector('.twotoone').textContent = `${Math.round(twotoone*100) / 100} grams`;

  document.querySelector('.results').style.display = 'block';

})