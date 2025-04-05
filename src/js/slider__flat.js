fetch('../data.json')
    .then(response => response.json())
    .then(data => {
        let counts = {};

        // Підраховуємо кількість квартир по країнах
        data.apartments.forEach(({ country }) => {
            counts[country] = (counts[country] || 0) + 1;
        });

        // Створюємо HTML слайдів для кожної країни
        const slider = `
            <div class="swiper">
                <!-- Additional required wrapper -->
                <div class="swiper-wrapper">
                    ${Object.entries(counts).map(([country, count]) => {
            return `
                            <div class="swiper-slide">
                                <div class="swiper-slide__block">
                                    <div class="swiper-slide__ImgBlock">
                                        <img src="../assets/countries/${country}.svg" alt="${country}" class="swiper-slide__image">
                                    </div>
                                    <div class="swiper-slide__text">
                                        <h1>${country}</h2>
                                        <p>${count} apartments</p>
                                    </div> 
                                </div>

                            </div>
                        `;
        }).join('')}
                </div>
                <div class="swiper-pagination"></div>
            </div>`;

        // Ініціалізація Swiper


        // Додаємо слайдер на сторінку
        const wrapper = document.querySelector('.counties__block-slider');
        wrapper.innerHTML += slider;

        // const swiper = new Swiper('.swiper', {

        //     loop: true,
        //     autoScroll: true,
        //     slidesPerView: 4,
        //     centeredSlides: false,
        //     pagination: {
        //         el: '.swiper-pagination',
        //         clickable: true, // Додано для активації пагінації
        //     },
        // });
    })
    .catch(error => console.error('Error fetching JSON:', error));
