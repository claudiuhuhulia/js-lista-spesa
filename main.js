console.log('js-ok')

const shop = ['pane','pasta','melanzane','latte','pollo','riso'];
const shoplist = document.getElementById('spesa');


let ElementList = '<ul>';


for(i=0 ; i < shop.length; i++){

    
    ElementList += `<li> ${shop[i]} </li>`

}

ElementList += '</ul>';

shoplist.innerHTML= ElementList;