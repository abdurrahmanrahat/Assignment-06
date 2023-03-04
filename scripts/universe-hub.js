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
        loadingSpinner(true);
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
                        <p><i class="fa-solid fa-arrow-right" onclick="fetchModalDetails('${singleCard.id}')" data-bs-toggle="modal" data-bs-target="#exampleModal"></i></p>
                    </div>
                </div>
            </div>
        `
        cardContainer.appendChild(cardDiv);
        loadingSpinner(false);
    });
}

fetchCard();


// spinner section
const loadingSpinner = isLoading => {
    const spinnerDiv = document.getElementById('spinner');
    if(isLoading){
        spinnerDiv.classList.remove('d-none');
    }
    else{
        spinnerDiv.classList.add('d-none');
    }
}


// code for modal 
const fetchModalDetails = cardId => {
    // console.log(cardId);
    const url = `https://openapi.programming-hero.com/api/ai/tool/${cardId}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayModalDetails(data.data))    
}

const displayModalDetails = data => {
    console.log(data);
    document.getElementById('modal-body').innerHTML = `
        <div>
            <p class="fw-bold">${data.description}</p>
        </div>
        <div class="text-center">
            <img src="${data.image_link[0]}" class="card-img-top img-fluid rounded" alt="...">
            <p class="fw-bold fs-5 mt-4">${data.input_output_examples[0].input}</p>
            <p>${data.input_output_examples[0].output}</p>
        </div>
    `
}