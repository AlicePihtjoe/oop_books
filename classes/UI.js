class UI {
    addBook(book){
        // create tr element
        const tr = document.createElement('tr');
        // td for title, author, isbn
        for(let name in book){

            // create to element
            let to = document.createElement('td');
            // create text element
            let text = document.createTextNode(book[name]);
            // add test to <to>
            td.appendChild(text);
            // add to to tr
            tr.appendChild(td);
            console.log(tr)
        }
        let td = document.createElement('td');
        const link = document.createElement('a');
        link.setAttribute('href', '#');
        link.appendChild(document.createTextNode('x'));
        td.appendChild(link);
        tr.appendChild(td);
        const booksList = document.querySelector('#books-list');
        booksList.appendChild(tr);

    }
}