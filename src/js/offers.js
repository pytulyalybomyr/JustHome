fetch("../data.json")
    .then((response) => response.json())
    .then((data) => {
        let countsType = {};
        let countsCity = {};

        data.apartments.forEach(({ type, city }) => {
            countsType[type] = (countsType[type] || 0) + 1;
            countsCity[city] = (countsCity[city] || 0) + 1;
        });

        console.log(countsType);

        let section = `
    <form action="" method="get" class="filter_class__form">
            <input type="text" placeholder="Search" name="search" id="search" value="${SearchValue() == "Search..." ? "" : SearchValue()}" class="filter_class__form-input">
            <div class="filter_class__form-filter">
                            <select id="type" name="type" class="filter_class__select--type">
    <option value="">Type</option>
    ${Object.keys(countsType).map(type => {
            return `<option value="${type}" ${TypeValue() === type ? "selected" : ""}>${type}</option>`;
        }).join('')}
</select>

<select id="city" name="city" class="filter_class__select--city">
    <option value="">City</option>
    ${Object.keys(countsCity).map(city => {
            return `<option value="${city}" ${CityValue() === city ? "selected" : ""}>${city}</option>`;
        }).join('')}
</select>

            <input type="number" placeholder="Min Price" name="min" id="min" value="${MinValue()}" class="filter_class__input">
            <input type="number" placeholder="Max Price" name="max" id="max" value="${MaxValue()}" class="filter_class__input">
            </div>

            <button type="submit">Submit</button>
        </form>
`;
        const headerOfferSelect = document.getElementById("services");

        const header_offer = Object.keys(countsType).map(type => {
            // value буде повний URL з параметрами
            const url = `/pages/offers.html?search=&type=${type}&city=&min=&max=`;
            return `<option value="${url}">${type}</option>`;
        }).join('');

        headerOfferSelect.innerHTML += header_offer;

        // При зміні select – переходимо на URL
        headerOfferSelect.addEventListener("change", function () {
            const selectedURL = this.value;
            if (selectedURL) {
                window.location.href = selectedURL;
            }
        });




        let filter_class__form = document.querySelector(".filter_class__select");
        filter_class__form.innerHTML += section;



        function SearchValue() {
            const params = new URLSearchParams(window.location.search);
            const searchValue = params.get("search") || "";
            return searchValue;
        }

        function TypeValue() {
            const params = new URLSearchParams(window.location.search);
            const typeValue = params.get("type") || "";
            return typeValue;
        }

        function CityValue() {
            const params = new URLSearchParams(window.location.search);
            const cityValue = params.get("city") || "";
            return cityValue;
        }

        function MinValue() {
            const params = new URLSearchParams(window.location.search);
            const minValue = params.get("min") || "";
            return minValue;
        }

        function MaxValue() {
            const params = new URLSearchParams(window.location.search);
            const maxValue = params.get("max") || "";
            return maxValue;
        }

        function PageValue() {
            const params = new URLSearchParams(window.location.search);
            return parseInt(params.get("page") || 1);
        }

        function renderPagination(totalItems, currentPage, perPage = 8) {
            const totalPages = Math.ceil(totalItems / perPage);
            const paginationContainer = document.querySelector(".pagination");
            paginationContainer.innerHTML = "";

            for (let i = 1; i <= totalPages; i++) {
                const link = document.createElement("a");
                link.href = updateQueryString("page", i);
                link.textContent = i;
                if (i === currentPage) link.classList.add("active");
                paginationContainer.appendChild(link);
            }
        }

        // Оновлює URL з новою page
        function updateQueryString(key, value) {
            const params = new URLSearchParams(window.location.search);
            params.set(key, value);
            return window.location.pathname + "?" + params.toString();
        }



        function filterSearch(apartments, search, type, city, min, max) {
            const filteredApartments = apartments.filter(apartment => {
                const values = Object.values(apartment).map(v => typeof v === 'string' ? v.toLowerCase() : '');

                const matchSearch = search ? values.some(v => v.includes(search)) : true;
                const matchType = type ? values.some(v => v.includes(type.toLowerCase())) : true;
                const matchCity = city ? values.some(v => v.includes(city.toLowerCase())) : true;

                const matchMin = min ? apartment.price >= parseInt(min) : true;
                const matchMax = max ? apartment.price <= parseInt(max) : true;

                return matchSearch && matchType && matchCity && matchMin && matchMax;
            });


            // Виводимо відфільтровані елементи в консоль
            return filteredApartments;
        }

        function InnerElements(filterdElements) {
            filterdElements.map(data => {
                const cards = document.querySelector(".cards__container");

                const card = `
        <div class= "properties__block-card">
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
                            <img src="../assets/room.svg" alt="">
                                <button>${data.bedrooms}</button>
                        </li>
                        <li>
                            <img src="../assets/bathroom.svg" alt="">
                                <button>${data.bathrooms}</button>
                        </li>
                        <li>

                            <img src="../assets/sqr.svg" alt="">
                                <button>${data.square_meters}</button>
                        </li>
                    </ul>
                </div>
                <div class="properties__block-card_inform__price">
                    <h2>$${data.price}<span>/month</span></h2>
                    <button><img src="../assets/heart.svg" alt=""></button>
                </div>
            </div>
        </div>`;
                cards.innerHTML += card;
            })

        }

        function paginate(items, currentPage, perPage = 8) {
            const start = (currentPage - 1) * perPage;
            return items.slice(start, start + perPage);
        }

        const filtered = filterSearch(data.apartments, SearchValue().toLowerCase(), TypeValue(), CityValue(), MinValue(), MaxValue());
        const paginated = paginate(filtered, PageValue(), 8);

        InnerElements(paginated);
        renderPagination(filtered.length, PageValue());

    })
    .catch((error) => {
        console.error("Error fetching data:", error);
    });