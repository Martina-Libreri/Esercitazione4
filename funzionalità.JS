
function abilita(){
    let inputs= document.querySelectorAll("input[type='text'],input[type='text']")
    let button= document.querySelector("input[type='submit']")

    button.disabled=""

    for(let i=0; i<inputs.length;i++){
        if(inputs[i].value==""){
            button.disabled = "disabled"
            break;
        }
    }

}

function inserisci(){
    let key = document.getElementById("key").value;
    let valore = document.getElementById("value").value;
    let storage= window.localStorage;

    storage.setItem(key,valore);

}

function remove(){
    let key = document.getElementById("key").value
    let storage= window.localStorage;
    storage.removeItem(key)

    alert("Ti sei disiscritto dalla newsletter")
}