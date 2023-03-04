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
        console.log(singleCard);
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card', 'border-0');
        cardDiv.innerHTML = `
            <img src="${singleCard.image}" class="card-img-top h-100" alt="...">
            <div class="card-body">
                <h5 class="card-title fw-bold">Features</h5>
                <div style="line-height: 10px;" class="mt-4">
                    <p>1. <span>${singleCard.features[0]}</span></p>
                    <p>2. <span>${singleCard.features[1]}</span></p>
                    <p>3. <span>${singleCard.features[2]}</span></p>
                </div>
                <hr>
                <div class="d-flex justify-content-between align-items-center">
                    <div>
                        <h5 class="card-title fw-bold">${singleCard.name}</h5>
                        <div class="d-flex gap-2 align-items-center ">
                            <p><i class="fa-regular fa-calendar-days"></i></p>
                            <p>${singleCard.published_in}</p>
                        </div>
                    </div>
                    <div>
                        <p><i class="fa-solid fa-arrow-right"></i></p>
                    </div>
                </div>
            </div>
        `
        cardContainer.appendChild(cardDiv);
    });
}


fetchCard();