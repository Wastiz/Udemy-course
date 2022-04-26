window.addEventListener('DOMContentLoaded', () => {

    //Tabs

    const tabs = document.querySelectorAll('.tabheader_item'),
          tabsContent = document.querySelectorAll(".tabcontent"),
          tabsParent = document.querySelector('.tabheader_items');
    
    function hideTabContent(){
        tabsContent.forEach(item => {
            item.style.display = "none";
        });
        tabs.forEach(tab =>{
            tab.classList.remove("tabheader_active");
        });
    }
    function showTabContent(i = 0){
        tabsContent.forEach(item => {
            item.style.display = "block";
        });
        tabs[i].classList.add('tabheader_active');
    }
    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (event)=>{
        const target = event.target;
        if (target && target.classList.contains('tabheader_item')){
            tabs.forEach((item, i)=>{
                if (target == item){
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });

    //Timer 

    const deadline = '2022-05-07';

    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date());
        const days = Math.floor(t / (1000 * 60 * 60 * 24));
        const hours = Math.floor((t / (1000 * 60 * 60) % 24));
        const minutes = Math.floor((t / (1000 * 60)) % 60);
        const seconds = Math.floor((t / 1000) % 60);

        return{
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds,
        };
    }
    function setClock(selector, endtime){
        const timer = document.querySelector(selector);
        const days = timer.querySelector('#days');
        const hours = timer.querySelector('#hours');
        const minutes = timer.querySelector('#minutes');
        const seconds = timer.querySelector('#seconds');
        const timeInterval = setInterval(updateClock, 1000);

        function updateClock(){
            const t = getTimeRemaining(endtime);

            days.innerHTML = t.days;
            hours.innerHTML = t.hours;
            minutes.innerHTML = t.minutes;
            seconds.innerHTML = t.seconds;

            if(t.total <= 0){
                clearInterval(timeInterval);
            }
        }
    }

    setClock('.timer', deadline);
});