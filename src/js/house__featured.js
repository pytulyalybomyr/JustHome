fetch("../data.json")
    .then((response) => response.json())
    .then((data) => {
        let featured = data.apartments.filter((apartment) => apartment.Featured === true);

        let countsType = {};

        data.apartments.forEach(({ type }) => {
            countsType[type] = (countsType[type] || 0) + 1;
        });

        const headerOfferSelect = document.getElementById("services");

        const header_offer = Object.keys(countsType).map(type => {
            // value буде повний URL з параметрами
            const url = `/pages/offers.html?search=&type=${type}&city=&min=&max=`;
            return `<option value="${url}">${type}</option>`;
        }).join('');

        headerOfferSelect.innerHTML += header_offer;

        headerOfferSelect.addEventListener("change", function () {
            const selectedURL = this.value;
            if (selectedURL) {
                window.location.href = selectedURL;
            }
        });

        let elementCount;

        function updateElementCount() {
            if (window.innerWidth <= 700) {
                elementCount = 1;
            } else if (window.innerWidth <= 1100) {
                elementCount = 2;
            } else {
                elementCount = 3;
            }
        }

        // Встановлюємо початкове значення
        updateElementCount();

        // Оновлюємо при зміні розміру вікна
        window.addEventListener("resize", () => {
            updateElementCount()
        });


        // window.addEventListener("resize", updateElementCount);
        let currentIndex = 0;

        const cardsContainer = document.querySelector(".properties__block-cards");

        // Функція для додавання карток
        function loadMoreCards() {
            // Додаємо наступні елементи
            const nextBatch = featured.slice(currentIndex, currentIndex + elementCount);
            nextBatch.forEach(data => {
                const card = `
                <div class="properties__block-card">
                    <img class="properties__block-card_MainImg" src="${data.photo}" alt="">
                    <div class="properties__block-card_inform">
                        <div class="properties__block-card_inform__adress">
                            <h2>${data.name}</h2>
                            <div class="properties__block-card_inform__adress-location">
                                <img src="./assets/mark.svg" alt="">
                                <h3>${data.address}</h3>
                            </div>
                        </div>
                        <div class="properties__block-card_inform__buttons">
                            <ul>
                                <li>
                                    <img src="./assets/room.svg" alt="">
                                    <button>${data.bedrooms}</button>
                                </li>
                                <li>
                                    <img src="./assets/bathroom.svg" alt="">
                                    <button>${data.bathrooms}</button>
                                </li>
                                <li>
                                    <img src="./assets/sqr.svg" alt="">
                                    <button>${data.square_meters}</button>
                                </li>
                            </ul>
                        </div>
                        <div class="properties__block-card_inform__price">
                            <h2>$${data.price}<span>/month</span></h2>
                            <button><img src="./assets/heart.svg" alt="heart"></button>
                        </div>
                    </div>
                </div>`;

                cardsContainer.innerHTML += card;

                if (currentIndex + elementCount >= featured.length) {
                    // Якщо більше немає карток, приховуємо кнопку
                    document.getElementById("load-more-button").style.display = "none";
                }
            });

            // Оновлюємо індекс для наступної порції
            currentIndex += elementCount;
        }

        // Додаємо подію на кнопку для завантаження більше карток
        const loadMoreButton = document.getElementById("load-more-button");
        loadMoreButton.addEventListener("click", loadMoreCards);

        // Завантажуємо перші 4 картки автоматично при завантаженні
        loadMoreCards();

    })
    .catch((error) => {
        console.error("Error fetching data:", error);
    });
