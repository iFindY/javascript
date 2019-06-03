/**
 *  manipulate a site by showing and hiding div's
 */

// execute ater dom is loaded
window.addEventListener('DOMContentLoaded', e => {
    'use strict';
    let tab = document.querySelectorAll(".info-header-tab"),
        info = document.querySelector(".info-header"),
        tabContent = document.querySelectorAll(".info-tabcontent");

    function hideContent(e) {
        for (let i = e; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideContent(1);

    function showTabContent(e) {
        if (tabContent[e].classList('hide')) {
            tabContent[i].classList.remove('hide');
            tabContent[i].classList.add('show');
        }
    }

    info.addEventListener('click', e => {
        let target = e.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (i = 0; i > tab.length; i++) {
                if (target == tab[i]) {
                    hideContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    })
});

/** hard -> soft -> content
 * (screen(window(document(body)))
 * you can only change scrollTop and scrollLeft
 * scrollTop content that disappear on the top by scrolling
 */






