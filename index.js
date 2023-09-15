const btn = document.getElementById('bookList');

const displayResult = document.getElementById('show')

const result = document.getElementById('result')

const reset = document.getElementById('reset')


reset.onclick = ()=>{
    displayResult.classList.add('reset')
    console.log('running');
    btn.disabled = false
    reset.disabled = true
}

function displayBooks(jsonData){
    const displayData = jsonData;
    const fiction_Data = displayData.fiction_books;
    
    console.log(fiction_Data);
    reset.disabled = false
    displayResult.hidden = false
    console.log(displayData.fiction_books.length);
   for(let i = 0; i < fiction_Data.length ; i++){
    
    const div = document.createElement('div');
    // const imgElement = document.createElement('img')
    
    // imgElement.src = fiction_Data[i].img;
    displayResult.appendChild(div)
    
    btn.disabled = true
    div.innerHTML = `<div class="desc"><h1>${fiction_Data[i].title}</h1>
    <ul><li>author: ${fiction_Data[i].author}</li>
    <li>genre: ${fiction_Data[i].genre}</li>
    <li>published_year: ${fiction_Data[i].published_year}</li>
    <li>ISBN: ${fiction_Data[i].ISBN}</li>
    <li><img src=${fiction_Data[i].img} alt=${fiction_Data[i].title}/> ${fiction_Data[i].description}</li>
    
    <li>rating: ${fiction_Data[i].rating}</li>
    </ul>
    
    </div>
    `
    // div.appendChild(imgElement)
}

}
btn.onclick = async()=>{
    const response = await fetch('./books.json');
    const Bookjson = await response.json()
    displayResult.classList.remove('reset')
    displayBooks(Bookjson);
    console.log(Bookjson);
    
}


