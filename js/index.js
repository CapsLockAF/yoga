window.addEventListener('DOMContentLoaded', function(){
    'use strict';

    const wraptabs = document.querySelector('.info-header'),
          tabs = document.querySelectorAll('.info-header-tab'),
          tabContent =document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    wraptabs.addEventListener('click', function (event) {
        const target = event.target;
        console.log(target);
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tabs.length; i++) {
                if (target == tabs[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });

    // TIMER

    let deadline = '2019-06-09';

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t/1000) % 60),
            minutes = Math.floor((t/1000/60) % 60),
            hours = Math.floor((t/(1000*60*60)));
            // hours = Math.floor((t/1000/60/60) % 24)
            // days = Math.floor((t/(1000*60*60*24)))
        return {
            'total': t,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function setClock(id, endtime) {
        const timer = document.querySelector(id),
              hours = timer.querySelector('.hours'),
              minutes = timer.querySelector('.minutes'),
              seconds = timer.querySelector('.seconds'),
              timeInterval = setTimeout(updateClock, 1000);
        
        function padStart(time){
            if(time < 10){
                time = '0' + time;
            }
            return time;
        }

        function updateClock() {
            let t = getTimeRemaining(endtime);
           
            hours.textContent = padStart(t.hours);
            minutes.textContent = padStart(t.minutes);
            seconds.textContent = padStart(t.seconds);

            setTimeout(updateClock, 1000);

            if (t.total <= 0){
                clearTimeout(timeInterval);
            }
           
        }
    }

    setClock('#timer', deadline);
});