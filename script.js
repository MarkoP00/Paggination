//Selecting HTML elements

const pagesDiv = document.querySelector('.pages');
const contentDiv = document.querySelector('.content');

//Writing array of objects with links and descriptions

const objectPaggination = [
    {
        link: 'https://i.etsystatic.com/11522950/r/il/d3f378/1263788535/il_1080xN.1263788535_e051.jpg',
        desc: 'Fancy cool animal'
    },
    {
        link: 'https://i.insider.com/5c79a8cfeb3ce837863155f5?width=1000&format=jpeg&auto=webp',
        desc: 'Hold up!'
    },
    {
        link: 'https://i.pinimg.com/564x/fa/fd/09/fafd09ca449c615a28447760e2b413f6.jpg',
        desc: 'Gangsta Chiken'
    },
    {
        link: 'https://www.telegraph.co.uk/content/dam/Travel/leadAssets/34/97/comedy-hamster_3497562a.jpg?imwidth=680',
        desc: `I'm fast as fuck boii`
    },
    {
        link: 'https://www.brainstormltd.co.uk/wp-content/uploads/2020/09/Disc-1-6-web.jpg',
        desc: 'Hello there!'
    },
    {
        link: 'https://static.euronews.com/articles/stories/04/97/98/10/1440x810_cmsv2_9446b8f9-0634-5f1d-94ab-f3fa5fef911a-4979810.jpg',
        desc: 'Chilling with my bro'
    },
    {
        link: 'https://us.123rf.com/450wm/maru1122maru/maru1122maru1508/maru1122maru150800140/43616463-giraffe.jpg?ver=6',
        desc: 'Mad face'
    },
    {
        link: 'https://www.womansworld.com/wp-content/uploads/2023/01/shutterstock_editorial_12786072g-1.jpg',
        desc: 'Quick interview'
    },
    {
        link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNKGFjf_kn13zs8OC5mbYmsOCAqOZhijZN3g&usqp=CAU',
        desc: 'Wierd animal'
    },
    {
        link: 'https://media.gettyimages.com/id/170462856/photo/dog-working-comfortably-from-home.jpg?s=612x612&w=gi&k=20&c=5cRp7-r9eZJXWRKTNZBr8umcfHrsraY6eec-BcFqlCk=',
        desc: `Adult dog`
    },
]

//Define pageIntex and how many items to show per page

let pageIndex = 0;
let itemsPerPage = 2;

//Handling with items and calculations

function loadItems(){
    let startIndex = pageIndex * itemsPerPage;
    contentDiv.innerHTML = '' //Kapucino say's "Always make your div empty!"

    for(let i = startIndex; i < startIndex + itemsPerPage; i++){ //In first case, i will be 0,1
        if(!objectPaggination[i]) {break} //check if object includes element with i. If i does not exists there, it will be executed
        const item = document.createElement('div');

        item.innerHTML = `
    <div class="item">
        <div class="pictureBox">
            <img src="${objectPaggination[i].link}" alt= "Image not found">
        </div>
        <div>
            <h1>${objectPaggination[i].desc}</h1>
        </div>
    </div>
        `
        contentDiv.append(item);
    }
    //calling second function here
    loadPage();
}
loadItems();


//Handling with pages

function loadPage(){
    pagesDiv.innerHTML = '' // Listening to Kapucino's advice again!
    for(let i = 0; i < (objectPaggination.length / itemsPerPage); i++){ //We have 10 elements in object - (i = 0; i < 5; i++)
        const spanElement = document.createElement('span');
        spanElement.innerHTML = i + 1; //We put +1 because i is 0, and we dont want to show page 0,1,2,3. We want to start from 1
    
        spanElement.addEventListener('click', (e)=>{
            pageIndex = e.target.textContent - 1; //take care of variable defining.
            loadItems(); //connecting first function here
        });

        //lets now make difference bettwen clicked span and other span elements
        if(i === pageIndex){
            spanElement.style.fontSize = '25px';
            spanElement.style.fontWeight = 'bold';
            spanElement.style.cursor = 'pointer';
        }
        pagesDiv.append(spanElement); //appending span elements
    }
}