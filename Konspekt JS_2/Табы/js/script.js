window.addEventListener('DOMContentLoaded', () => {
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
});