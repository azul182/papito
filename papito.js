const siz = {x: 40, y:200}

class Btn{
    constructor(Color, Text, Size){
    this.color = Color;
    this.text = Text;
    this.size = Size; 
    }

    show(id){
        const element = document.createElement('div');
        element.style.backgroundColor(this.color)
        element.style.width = this.size.x;
        element.style.height = this.size.y;
        const txt = document.createElement('p')
        innerHTML(this.text)
        element.appendChild(txt)
        id.appendChild(element);
    }
}

const botao = new Btn('FF0000', 'Hello', s);

botao.show('body')