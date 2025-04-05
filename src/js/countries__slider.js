fetch('../data.json')
    .then(response => response.json())
    .then(data => {
        let countsCountry = {};

        data.apartments.forEach(({ country }) => {
            countsCountry[country] = (countsCountry[country] || 0) + 1;
        });

        let slide = `
            <div class="swiper">
                <div class="swiper-wrapper">
                    ${Object.entries(countsCountry).map(([country]) => `
                        <div class="swiper-slide">
                            <div class="swiper-slide__block">
                                <img src="./assets/countries_v2/${country}.png" alt="${country}" class="swiper-slide__img">
                                
                                <div class="swiper-slide__block-text">
                                    <h1>${country}</h1>
                                    <h2>${countsCountry[country]} Properties</h2>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>`;

        const wrapper = document.querySelector('.countries_v2__block-slider');
        wrapper.innerHTML = slide;

        setTimeout(() => {
            new Swiper('.swiper', {
                loop: true, // вимикаємо loop, щоб слайди не перекривались
                slidesPerView: 'auto', // автоматична ширина слайдів
                spaceBetween: 54, // відступи між слайдами
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                }
            });
        }, 0);
    })
    .catch(error => console.error('Error fetching data:', error));
