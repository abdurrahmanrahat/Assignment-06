// fetch card link
const fetchCard = () => {
    fetch('https://openapi.programming-hero.com/api/ai/tools')
        .then(res => res.json())
        .then(data => displayAllCards(data.data))
}

// display first six cards on UI 
const displayAllCards = data => {
    // console.log(data);
    const cardContainer = document.getElementById('card-container');

    const card = data.tools.slice(0, 6);

    card.forEach(singleCard => {
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
    if (isLoading) {
        spinnerDiv.classList.remove('d-none');
    }
    else {
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
    const accuracy = `${data.accuracy.score}`;
    const accuracySlice = accuracy.slice(2, 4);
    const acc = '% Accuracy';
    console.log(data.integrations);

    // const accuracyBtn = () => {
    //     const accuracyBtnEle = document.getElementById('accuracy-btn');
    //     accuracyBtnEle.classList.add('d-none');
    // }

    document.getElementById('modal-body').innerHTML = `
        <div class="w-md-50 border border-danger-subtle rounded p-2">
            <p class="fw-bold">${data.description}</p>
            <div class="d-flex justify-content-around fw-bold p-2 ">
                <div class="text-success mx-2" style="line-height: 10px;">
                    <p>${data.pricing[0].price}</p>
                    <p>${data.pricing[0].plan}</p>
                </div>
                <div class="text-warning mx-2" style="line-height: 10px;">
                    <p>${data.pricing[1].price}</p>
                    <p>${data.pricing[1].plan}</p>
                </div>
                <div class="text-danger mx-2">
                    <p style="line-height: 14px;">${data.pricing[2].price}</p>
                    <p style="line-height: 10px;">${data.pricing[2].plan}</p>
                </div>
            </div>
            <div class="d-flex gap-1">
                <div>
                    <h5 class="card-title fw-bold">Features</h5>
                    <ul>
                        <li>${data.features['1'].feature_name}</li>
                        <li>${data.features['2'].feature_name}</li>
                        <li>${data.features['3'].feature_name}</li>
                    </ul>
                </div>
                <div>
                    <h5 class="card-title fw-bold">Integrations</h5>
                    <ul>
                        <li>${data.integrations[0]}</li>
                        <li>${data.integrations[1] ? data.integrations[1] : 'No data Found'}</li>
                        <li>${data.integrations[2] ? data.integrations[2] : 'No data Found'}</li>
                    </ul>
                </div>
            </div>
        </div>
        <div id="accuracy-btn-container" class="text-center w-md-50">
            <img src="${data.image_link[0]}" class="card-img-top img-fluid rounded" alt="...">
            <button id="accuracy-btn" class="btn btn-danger fw-semibold mt-2">${data.accuracy.score == null ? 'No data Found' : accuracySlice+acc}</button>
            <p class="fw-bold fs-5 mt-4">${data.input_output_examples[0].input}</p>
            <p>${data.input_output_examples[0].output}</p>
        </div>
    `
}


// show all cards by clicking see more button
const allCards = async () => {
    // const allCardsurl = 'https://openapi.programming-hero.com/api/ai/tools';
    // const res = await fetch(allCardsurl);
    // const data = await res.json();
    // displayAllCardsByBtn(data.data);
    fetch('https://openapi.programming-hero.com/api/ai/tools')
    .then(res => res.json())
    .then(data => displayAllCardsByBtn(data.data))
}

const displayAllCardsByBtn = data => {
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = '';

    const card = data.tools;

    card.forEach(singleCard => {
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

    const seeAllBtn = document.getElementById('see-more-btn');
    seeAllBtn.classList.add('d-none');
}
