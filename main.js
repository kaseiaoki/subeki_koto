

let message = 'text';
let json;
let isItem = JSON.parse(localStorage.getItem('items'));

window.onload = (getCard());

function getCard(){
    let messageArray =[];
    for(let item in isItem){
        messageArray.push({id:item, text:isItem[item]});
    }
    setTemplate(messageArray);
}

function setTemplate(messageArray) {
    messageArray.forEach(function(message) {
        let text = message.text
        let id = message.id
        console.log(text);
        console.log(id);
        var el = document.getElementById("task");
        const template = "<div class='notification taskCard' id='"+ id +"'>"+text+"<button class='delete' ></button></div>";
        el.insertAdjacentHTML('afterend', template);
    });
}

function clearAll() {
    this.items = [];
    localStorage.clear();
    document.querySelectorAll('.delete').forEach((elm) => {
        elm.parentNode.remove('.notification');
    });
}

function sendTask() {
    let task = document.getElementById("taskText");
    let item = task.value;
    let itmeid = isItem.length;
    localStorage.setItem('items',JSON.stringify({'item': item}));
}

const da = document.getElementById("clearAll");
da.addEventListener("click", clearAll, false);

const st = document.getElementById("send");
st.addEventListener("click", sendTask, false);


(window.onload = function() {
    document.querySelectorAll('.delete').forEach((elm) => {
        elm.addEventListener('click', (ev) => {
            const target = ev.target.closest('.notification');
            if (target) {
                target.parentNode.removeChild(target);
                localStorage.removeItem('');
            }
        });
    });
})();

