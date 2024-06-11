const indicator  = document.querySelector('.col.page-indicator');
const btns = document.querySelectorAll('.pageBtn'); 
const indicatorSubject = document.querySelector('.col.page-indicator-subject');
const btnsubject = document.querySelectorAll('.pageBtnsubject');

indicator.addEventListener('click', e => {

 btns.forEach(pageBtn => {

    if(pageBtn.getAttribute('id') === e.target.getAttribute('id'))
      pageBtn.classList.add('chosen');
    else
      pageBtn.classList.remove('chosen');
    });
});

indicatorSubject.addEventListener('click', e => {

  btnsubject.forEach(pageBtnsubject => {
 
     if(pageBtnsubject.getAttribute('id') === e.target.getAttribute('id'))
       pageBtnsubject.classList.add('chosen');
     else
       pageBtnsubject.classList.remove('chosen');
     });
 });