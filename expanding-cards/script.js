const panelList = document.querySelectorAll('.panel');


panelList.forEach(panel => {
    panel.addEventListener('click', ()=>{
        removeActiveforOtherPanels();
        panel.classList.add('active');
    })
});


function removeActiveforOtherPanels(){
    panelList.forEach((panel)=>{
        panel.classList.remove('active');
    })
}