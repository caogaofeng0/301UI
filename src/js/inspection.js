import '../css/inspection.scss';
import './conmons/navmenu';

const  trend = document.getElementsByClassName('inspenction-con')[0];
const  pop = document.getElementsByClassName("pop")[0];
const  popHide = document.getElementsByClassName("close-tag")[0];
trend.onclick = function (e) {
    if (e.target.className === 'popUp') {
       pop.setAttribute('class', 'pop  pop-show')
    }
};
popHide.onclick = function (e) {
  pop.setAttribute('class', 'pop  pop-hide')
};