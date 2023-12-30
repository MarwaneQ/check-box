let checkBoxs = document.querySelectorAll('input[type = "checkbox"]');

let lastChecked;

function Hamdelcheck(e) {
    let inBetween = false;
    if(e.shiftKey && this.checked){
        checkBoxs.forEach(checkbox => {
            console.log(checkbox);
            if (checkbox === this || checkbox === lastChecked) {
                inBetween = !inBetween
            }
            if (inBetween) {
                checkbox.checked = true
            }
        })
    }
    
    lastChecked = this;
}
checkBoxs.forEach(checkBox => checkBox.addEventListener('click',Hamdelcheck));