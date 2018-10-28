const MyComponent = {
    props: ['msg'],
    template: '<div class="notification">' +
        +'<button class="delete" ></button>'
        +'{{msg.text}}</div>'
}

const timeLine = new Vue({
    el: '#example',
    data:function(){
        let isItem=JSON.parse(localStorage.getItem('items'));
        console.log(isItem);
        let messageArray =[];
        for(let item in isItem){
           messageArray.push({id:item, text:isItem[item]});
        }
        return {message:messageArray};
    },
    components: {
        'my-component': MyComponent
    },
    method:{
        taskText:{}
    }
})

const form = new Vue({
    el: '#msgForm',
    data: {
        message: 'text',
        items: [],
        json:'',
        lastPost:''
    },
    mounted() {
        this.items = JSON.parse(localStorage.getItem('items')) || [];
    },
    methods: {
    addItem() {
        this.items.push(this.message);
        this.setItems();
        let date = new Date();
        this.lastPost = date;
    },delete(ev) {
        console.log("hoge");
        this.delId = this.items.indexOf(item);
        this.items.splice(this.delId,1);
        document.querySelectorAll('.delete').forEach((elm) => {
            elm.addEventListener('click', (ev) => {
                const target = ev.target.closest('.notification');
                if (target) {
                    target.parentNode.removeChild(target);
                    localStorage.removeItem('');
                }
            });
        });
        },
    deleteAllItems() {
        this.items = [];
        this.setItems();
        document.querySelectorAll('.delete').forEach((elm) => {
            elm.parentNode.remove('.notification');
        });
    },
    setItems() {
        localStorage.setItem('items', JSON.stringify(this.items));
    }, async submit () {
            await timeLine.message.push({id:timeLine.message.length+1,text:this.message});
            await this.addItem();
            this.message='';
        }
    },
});

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

