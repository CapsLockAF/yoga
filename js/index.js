window.addEventListener('DOMContentLoaded', function(){
    'use strict';

    const wraptabs = document.querySelector('.info-header'),
          tabs = document.querySelectorAll('.info-header-tab'),
          tabContent =document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[a].classList.remove('show');
            tabContent[a].classList.add('hide');
        }
    }

    hideTabContent(1);

    
});