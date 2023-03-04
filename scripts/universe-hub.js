// fetch card link
const fetchCard = () => {
    fetch('https://openapi.programming-hero.com/api/ai/tools')
    .then(res => res.json())
    .then(data => displayAllCards(data.data))
}

// display all cards on UI 
const displayAllCards = data => {
    // console.log(data);
    const cardContainer = document.getElementById('card-container');

    data.tools.slice(0, 6).forEach(singleCard => {
        // console.log(singleCard);
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card');
        cardDiv.innerHTML = `
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
        `
        cardContainer.appendChild(cardDiv);
    });
}


fetchCard();