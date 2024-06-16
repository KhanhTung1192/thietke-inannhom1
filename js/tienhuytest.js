const rowofButtons = document.querySelector('.test.text-center');
const buttonControl = document.querySelectorAll('.testbtn');

rowofButtons.addEventListener('click', e => {
    buttonControl.forEach(testbtn => {
  
      if(testbtn.getAttribute('id') === e.target.getAttribute('id'))
        testbtn.classList.add('chosen');
      else
      testbtn.classList.remove('chosen');
    });
   });