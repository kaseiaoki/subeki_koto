
let message = 'text';
let json;
let isItem = JSON.parse(localStorage.getItem('items'));

window.onload = (getCard());

Object.prototype.push = function (values) {
    var result = this;
    for (let key in values) {
        result[key] = values[key];
    }
    return result;
};

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
    if(isItem == null){
        localStorage.setItem('items',JSON.stringify({ 1 : item}));
    }else{
        let i =  Object.keys(isItem).length+1;
        isItem.push({ [i] : item})
        localStorage.setItem('items',JSON.stringify(isItem));
    }
}

const da = document.getElementById("clearAll");
da.addEventListener("click", clearAll, false);

const st = document.getElementById("send");
st.addEventListener("click", sendTask, false);

function changeStorage() {
    isItem = JSON.parse(localStorage.getItem('items'));
    console.log("hoge");
    getCard();
}
(window.onload = function() {
    window.addEventListener('storage', changeStorage);
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

