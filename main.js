console.log('js-ok')

const shop = ['pane','pasta','melanzane','latte','pollo','riso'];
const shoplist = document.getElementById('spesa');


/* let ListItem = '<ul>';


for(i=0 ; i < shop.length; i++){

    ListItem += `<li> ${shop[i]} </li>`

}

ListItem += '</ul>'; */


let ListItem = '<ul>';

i = 0;


while( i < shop.length ){

    ListItem += `<li> ${shop[i]} </li>`

    i++;
}

ListItem += '</ul>';


shoplist.innerHTML= ListItem;