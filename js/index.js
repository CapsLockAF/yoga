window.addEventListener('DOMContentLoaded', function(){
    'use strict';

    //TABS________________________________________________________

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

    // TIMER_______________________________________________________

    let deadline = '2019-06-09T20:00';

    function getTimeRemaining(endtime) {
        let x = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((x/1000) % 60),
            minutes = Math.floor((x/1000/60) % 60),
            hours = Math.floor((x/(1000*60*60)));
            // hours = Math.floor((t/1000/60/60) % 24)
            // days = Math.floor((t/(1000*60*60*24)))
        return {
            'total': x,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function setClock(id, endtime) {
        const timer = document.querySelector(id),
              hours = timer.querySelector('.hours'),
              minutes = timer.querySelector('.minutes'),
              seconds = timer.querySelector('.seconds');
        
        function padStart(time){
            if(time < 10){
                time = '0' + time;
            }
            return time;
        }

        function updateClock() {
            
            let timeInterval = setTimeout(function count() {
                let t = getTimeRemaining(endtime);
                hours.textContent = padStart(t.hours);
                minutes.textContent = padStart(t.minutes);
                seconds.textContent = padStart(t.seconds);
                
                if (t.total <= 0){
                    clearTimeout(timeInterval);
                    hours.textContent = '00';
                    minutes.textContent = '00';
                    seconds.textContent = '00';
                    return;
                }

                setTimeout(count, 100);             
                
            }, 1000);
        }
        
        updateClock();      
    }

    setClock('#timer', deadline);

    //MODAL___________________________________________

    const more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');

    more.addEventListener('click', function () {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
    });

    close.addEventListener('click', function () {
        overlay.style.display = 'none';
        this.classList.remove('more-splash');
    });
});