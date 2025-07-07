const celestialData = {
    constellations: [
        {
            name: "URSA MAJOR (Большая Медведица)",
            objects: [
                { 
                    name: "Двойная звезда (Мицар и Алькор)", 
                    description: "Знаменитая визуально-двойная звезда в ручке ковша. Мицар - система из 4 звёзд, Алькор - 3 звёзды. Отличный тест на зрение.",
                    image: "Stacked_37_Mizar_10.0s_IRCUT_20250705-231001.jpg"
                },
                { 
                    name: "Галактика Боде М81", 
                    description: "Классическая спиральная галактика в 12 млн световых лет от нас. Имеет идеальные симметричные рукава и яркое ядро.",
                    image: "Stacked_18_M 81_10.0s_IRCUT_20250606-004509.jpg"
                },
                { 
                    name: "Галактика Сигара М82", 
                    description: "Галактика со вспышкой звездообразования. Из-за гравитационного взаимодействия с М81 имеет вытянутую форму и активное звездообразование."
                },
                { 
                    name: "Галактика Вертушка М101", 
                    description: "Грандиозная спиральная галактика, видимая плашмя. Диаметр около 170,000 световых лет - почти вдвое больше Млечного Пути.",
                    image: "Stacked_14_M 101_10.0s_IRCUT_20250606-003608.jpg"
                },
                { 
                    name: "Активная галактика Глаз тигра NGC2841", 
                    description: "Спиральная галактика с необычной структурой. Имеет множество мелких спиральных ветвей и активное ядро."
                },
                { 
                    name: "Туманность Сова М97", 
                    description: "Планетарная туманность возрастом около 8,000 лет. Названа так из-за сходства с глазами совы в любительские телескопы."
                },
                { 
                    name: "Галактика Пылесос М109", 
                    description: "Пересечённая спиральная галактика с яркой центральной перемычкой. Перемычка направляет газ к центру, питая активное ядро."
                },
                { 
                    name: "Двойная звезда М40", 
                    description: "Оптически-двойная звезда, ошибочно занесённая Мессье как туманность. На самом деле просто две несвязанные звезды на одном луче зрения."
                }
            ]
        },
        {
            name: "CEPHEUS (Цефей)",
            objects: [
                { 
                    name: "Туманность Колдун NGC7380", 
                    description: "Эмиссионная туманность с открытым скоплением. Форма напоминает волшебника с поднятыми руками, отчего и получила название."
                },
                { 
                    name: "Туманность Хобот слона IC1396", 
                    description: "Тёмная туманность длиной 20 световых лет. Является частью огромного звёздообразующего комплекса в Цефее."
                },
                { 
                    name: "Туманность Ирис С4", 
                    description: "Отражательная туманность, подсвеченная звездой SAO 19158. Голубой цвет обусловлен рассеянием света на пылевых частицах.",
                    image: "Stacked_116_C 4_10.0s_IRCUT_20250706-002133.jpg"
                },
                { 
                    name: "Скопление Плывущий аллигатор NGC7160", 
                    description: "Молодое рассеянное скопление возрастом около 10 млн лет. Форма напоминает силуэт плывущего аллигатора."
                },
                { 
                    name: "Скопление Поляриссимы С1", 
                    description: "Яркое скопление недалеко от Полярной звезды. Содержит несколько горячих голубых гигантов."
                },
                { 
                    name: "Мю Цефея (Гранатовая звезда)", 
                    description: "Красный сверхгигант с глубоким гранатовым оттенком. Одна из самых больших известных звёзд - в 1,650 раз больше Солнца."
                }
            ]
        },
        {
            name: "CASSIOPEIA (Кассиопея)",
            objects: [
                { 
                    name: "Туманность Сердце IC1805", 
                    description: "Гигантская эмиссионная туманность размером 200 световых лет. Форма напоминает человеческое сердце."
                },
                { 
                    name: "Туманность Малыш IC1848", 
                    description: "Туманность 'Душа' - компаньон 'Сердца'. Вместе они образуют огромный комплекс звездообразования."
                },
                { 
                    name: "NGC1027", 
                    description: "Яркое рассеянное скопление, содержащее около 30 звёзд. Хорошо видно в небольшие телескопы."
                },
                { 
                    name: "Скопление Стрекоза C13", 
                    description: "Рассеянное скопление, получившее название за характерную форму. Содержит звёзды 8-10 величины."
                },
                { 
                    name: "NGC129", 
                    description: "Старое рассеянное скопление возрастом около 70 млн лет. Расположено недалеко от характерного W-образного рисунка Кассиопеи."
                },
                { 
                    name: "Скопление Роза Каролины NGC7789", 
                    description: "Красивое рассеянное скопление, открытое Каролиной Гершель. Напоминает розу с лепестками из звёздных цепочек."
                },
                { 
                    name: "М13", 
                    description: "Великолепное шаровое скопление в Геркулесе, содержащее сотни тысяч звезд.",
                    image: "Stacked_216_M 13_10.0s_IRCUT_20250617-003801.jpg"
                },
                { 
                    name: "М92", 
                    description: "Яркое шаровое скопление в Геркулесе, одно из самых старых в нашей галактике.",
                    image: "Stacked_63_M 92_10.0s_IRCUT_20250703-235353.jpg"
                }
            ]
        },
        {
            name: "PERSEUS (Персей)",
            objects: [
                { 
                    name: "Спиральное скопление М34", 
                    description: "Яркое рассеянное скопление, видимое невооружённым глазом. Содержит около 100 звёзд на площади лунного диска."
                },
                { 
                    name: "Скопление Малый скорпион NGC1342", 
                    description: "Небольшое рассеянное скопление, форма которого напоминает миниатюрного скорпиона."
                },
                { 
                    name: "Двойное скопление С14", 
                    description: "Два соседних рассеянных скопления (h и χ Персея). Видны невооружённым глазом как туманное пятно."
                },
                { 
                    name: "NGC1582", 
                    description: "Неяркое рассеянное скопление с рыхлой структурой. Содержит несколько жёлтых и оранжевых звёзд."
                },
                { 
                    name: "Двойное скопление m&m", 
                    description: "Радиант метеорного потока Персеиды (активен с 17 июля по 24 августа, максимум 12 августа)."
                }
            ]
        },
        {
            name: "ANDROMEDA (Андромеда)",
            objects: [
                { 
                    name: "Туманность Андромеды М31", 
                    description: "Гигантская спиральная галактика, ближайшая к Млечному Пути. Видна невооружённым глазом как туманное пятно."
                },
                { 
                    name: "М32", 
                    description: "Компаньон галактики Андромеды - компактная эллиптическая галактика. Содержит в основном старые жёлтые звёзды."
                },
                { 
                    name: "М110", 
                    description: "Ещё один спутник галактики Андромеды. Имеет необычную для эллиптических галактик структуру с тёмными пылевыми полосами."
                },
                { 
                    name: "С28", 
                    description: "Рассеянное скопление в Андромеде. Содержит несколько десятков звёзд 9-11 величины."
                }
            ]
        },
        {
            name: "TRIANGULUM (Треугольник)",
            objects: [
                { 
                    name: "Галактика Треугольника М33", 
                    description: "Спиральная галактика, третья по величине в Местной группе. Видна невооружённым глазом при идеальных условиях."
                }
            ]
        },
        {
            name: "CYGNUS (Лебедь)",
            objects: [
                { 
                    name: "Туманность Вуаль С33", 
                    description: "Остаток сверхновой, взорвавшейся 5,000-8,000 лет назад. Представляет собой сложную сеть волокон горячего газа."
                },
                { 
                    name: "Волокнистая туманность С34", 
                    description: "Часть туманности Вуаль. Состоит из тонких светящихся нитей, оставшихся после взрыва сверхновой."
                },
                { 
                    name: "М39", 
                    description: "Яркое рассеянное скопление около Денеба. Содержит около 30 звёзд, расположенных на площади больше лунного диска.",
                    image: "Stacked_53_M 39_10.0s_IRCUT_20250704-012959.jpg"
                },
                { 
                    name: "Туманность Северная Америка C20", 
                    description: "Эмиссионная туманность, поразительно напоминающая очертания континента Северная Америка."
                },
                { 
                    name: "IC5076", 
                    description: "Туманность 'Пеликан' - часть того же газового комплекса, что и Северная Америка. Форма напоминает пеликана."
                },
                { 
                    name: "Туманность Полумесяц С27", 
                    description: "Эмиссионная туманность, освещаемая мощным звёздным ветром от центральной звезды. Форма напоминает полумесяц."
                },
                { 
                    name: "NGC6811", 
                    description: "Рассеянное скопление с 'дырой' в центре. Возраст около 1 миллиарда лет, содержит много бело-голубых звёзд."
                }
            ]
        },
        {
            name: "LYRA (Лира)",
            objects: [
                { 
                    name: "М56", 
                    description: "Шаровое скопление на расстоянии 32,900 световых лет. Содержит десятки тысяч старых звёзд.",
                    image: "Stacked_42_M 56_10.0s_IRCUT_20250704-005002.jpg"
                },
                { 
                    name: "Туманность Кольцо М57", 
                    description: "Классическая планетарная туманность - сброшенные оболочки умирающей звезды. Один из самых популярных объектов для наблюдений.",
                    image: "Stacked_11_M 57_10.0s_LP_20250703-235956.jpg"
                },
                { 
                    name: "NGC6791", 
                    description: "Одно из самых старых и богатых металлами рассеянных скоплений. Возраст около 8 миллиардов лет."
                },
                { 
                    name: "NGC6743", 
                    description: "Небольшое рассеянное скопление в Лире. Содержит несколько десятков звёзд 10-12 величины."
                }
            ]
        },
        {
            name: "SCUTUM (Щит)",
            objects: [
                { 
                    name: "Скопление санки Санты NGC6664", 
                    description: "Яркое рассеянное скопление, форма которого напоминает рождественские сани. Содержит несколько горячих голубых звёзд."
                },
                { 
                    name: "М26", 
                    description: "Плотное рассеянное скопление. Из-за межзвёздной пыли центр скопления выглядит менее населённым."
                },
                { 
                    name: "Скопление Дикая утка М11", 
                    description: "Одно из самых богатых и компактных рассеянных скоплений. Содержит около 3,000 звёзд.",
                    image: "Stacked_47_M 11_10.0s_IRCUT_20250704-022539.jpg"
                },
                { 
                    name: "NGC6649", 
                    description: "Небольшое рассеянное скопление в Щите. Содержит несколько десятков звёзд 9-11 величины."
                }
            ]
        },
        {
            name: "VULPECULA (Лисичка)",
            objects: [
                { 
                    name: "Туманность Гантель", 
                    description: "Планетарная туманность М27 - одна из самых ярких. Форма напоминает гантель или ядро, вылетающее из яблока.",
                    image: "Stacked_97_M 27_10.0s_LP_20250703-231953.jpg"
                },
                { 
                    name: "Звёздное скопление Облачная скульптура", 
                    description: "Необычное рассеянное скопление, форма которого напоминает абстрактную скульптуру из облаков."
                },
                { 
                    name: "Скопление Мотра", 
                    description: "Рассеянное скопление, получившее название за сходство с силуэтом мотылька или бабочки."
                }
            ]
        },
        {
            name: "SAGITTARIUS (Стрелец)",
            objects: [
                { 
                    name: "М28", 
                    description: "Плотное шаровое скопление, содержащее множество переменных звёзд. Находится недалеко от лямбда Стрельца."
                },
                { 
                    name: "Большое скопление Стрельца М22", 
                    description: "Одно из самых ярких шаровых скоплений. Содержит около 80,000 звёзд и несколько планетарных туманностей."
                },
                { 
                    name: "М25", 
                    description: "Яркое рассеянное скопление, видимое невооружённым глазом. Содержит несколько жёлтых гигантов."
                },
                { 
                    name: "Туманность Лагуна М8", 
                    description: "Гигантская область звездообразования. Содержит тёмные 'глобулы' - места рождения новых звёзд."
                },
                { 
                    name: "Трехраздельная туманность М20", 
                    description: "Уникальная туманность, сочетающая эмиссионные (красные) и отражательные (голубые) участки, разделённые тёмными пылевыми полосами."
                },
                { 
                    name: "Крест Вебба М21", 
                    description: "Яркое рассеянное скопление, названное в честь астронома Т.В. Вебба. Форма напоминает крест."
                },
                { 
                    name: "М23", 
                    description: "Богатое рассеянное скопление, содержащее около 150 звёзд. Возраст около 220 миллионов лет."
                },
                { 
                    name: "Звёздное облако Стрельца М24", 
                    description: "Не скопление, а плотный участок Млечного Пути. Содержит тысячи звёзд, видимых невооружённым глазом.",
                    image: "Stacked_4_M 24_10.0s_IRCUT_20250617-005804.jpg"
                },
                { 
                    name: "Галактика Барнарда С57", 
                    description: "Пересечённая спиральная галактика с яркой центральной перемычкой. Видна почти с ребра."
                }
            ]
        },
        {
            name: "OPHIUCHUS (Змееносец)",
            objects: [
                { 
                    name: "Скопление Труляля NGC6633", 
                    description: "Яркое рассеянное скопление, видимое невооружённым глазом. Содержит несколько десятков звёзд 7-9 величины."
                },
                { 
                    name: "Скопление Летний улей IC4665", 
                    description: "Молодое рассеянное скопление, напоминающее по форме улей. Возраст всего около 40 миллионов лет."
                },
                { 
                    name: "М10", 
                    description: "Яркое шаровое скопление, одно из самых близких к нам. Имеет слегка сплюснутую форму.",
                    image: "Stacked_69_M 10_10.0s_IRCUT_20250620-015048.jpg"
                },
                { 
                    name: "Скопление Распятие М107", 
                    description: "Шаровое скопление с относительно рыхлой структурой. Содержит несколько десятков переменных звёзд."
                },
                { 
                    name: "М14", 
                    description: "Шаровое скопление средней яркости. Содержит необычно много переменных звёзд - более 70."
                },
                { 
                    name: "Шаровое скопление Жвачка М12", 
                    description: "Шаровое скопление с необычно малым количеством маломассивных звёзд. Возможно, они были 'вырваны' гравитацией Млечного Пути."
                }
            ]
        },
        {
            name: "SUMMER-AUTUMN TRIANGLE (Летний треугольник)",
            objects: [
                { 
                    name: "Vega (α Lyrae)", 
                    description: "Ярчайшая звезда в Лире. Голубовато-белый карлик, в 2.1 раза массивнее Солнца. Одна из вершин Летнего треугольника."
                },
                { 
                    name: "Deneb (α Cygni)", 
                    description: "Белый сверхгигант в Лебеде. Одна из самых далёких звёзд, видимых невооружённым глазом (~2,600 световых лет)."
                },
                { 
                    name: "Altair (α Aquilae)", 
                    description: "Ярчайшая звезда в Орле. Белая звезда главной последовательности, вращающаяся с огромной скоростью (1 оборот за 9 часов)."
                }
            ]
        }
    ]
};

document.addEventListener('DOMContentLoaded', function() {
    setupNavigation();
    renderCatalog();
    showPage('instructions');
});

function setupNavigation() {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelectorAll('.nav-link').forEach(navLink => {
                navLink.classList.remove('active');
            });
            this.classList.add('active');
            const pageId = this.getAttribute('data-page');
            showPage(pageId);
        });
    });
}

function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    const activePage = document.getElementById(`${pageId}-page`);
    if (activePage) {
        activePage.classList.add('active');
    }
}

function renderCatalog() {
    const container = document.getElementById('catalog-container');
    if (!container) return;
    container.innerHTML = '';
    const sortedConstellations = [...celestialData.constellations].sort((a, b) => 
        a.name.localeCompare(b.name));
    sortedConstellations.forEach((constellation, index) => {
        const accordionItem = document.createElement('div');
        accordionItem.className = 'accordion-item';
        accordionItem.innerHTML = `
            <h2 class="accordion-header" id="heading${index}">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" 
                    data-bs-target="#collapse${index}" aria-expanded="false" aria-controls="collapse${index}">
                    ${constellation.name}
                </button>
            </h2>
            <div id="collapse${index}" class="accordion-collapse collapse" aria-labelledby="heading${index}">
                <div class="accordion-body" id="constellation-${index}-objects"></div>
            </div>
        `;
        container.appendChild(accordionItem);
        addObjectsToConstellation(constellation, index);
    });
}

function addObjectsToConstellation(constellation, index) {
    const objectsContainer = document.getElementById(`constellation-${index}-objects`);
    if (!objectsContainer) return;

    constellation.objects.forEach((object) => {
        const objectElement = document.createElement('div');
        objectElement.className = 'object-item';
        objectElement.innerHTML = `
            <h5>${object.name}</h5>
            <p class="mb-0">${object.description}</p>
        `;
        objectElement.addEventListener('click', () => showObjectModal(object));
        objectsContainer.appendChild(objectElement);
    });
}

function showObjectModal(object) {
    const modalElement = document.getElementById('objectModal');
    if (!modalElement) return;
    
    document.getElementById('objectModalTitle').textContent = object.name;
    document.querySelector('.object-description').textContent = object.description;
    
    const videoContainer = document.querySelector('.object-video');
    if (videoContainer) {
        videoContainer.innerHTML = '';
        
        if (object.image) {
            const imgWrapper = document.createElement('div');
            imgWrapper.style.display = 'flex';
            imgWrapper.style.justifyContent = 'center';
            imgWrapper.style.alignItems = 'center';
            imgWrapper.style.width = '100%';
            imgWrapper.style.height = '100%';
            imgWrapper.style.overflow = 'hidden';
            
            const img = new Image();
            img.src = object.image;
            img.alt = object.name;
            img.style.maxWidth = '100%';
            img.style.maxHeight = '60vh';
            img.style.objectFit = 'contain';
            
            img.onload = function() {
                if (img.naturalWidth > img.naturalHeight) {
                    img.style.width = '100%';
                    img.style.height = 'auto';
                } else {
                    img.style.width = 'auto';
                    img.style.height = '80%';
                }
            };
            
            img.onerror = function() {
                videoContainer.innerHTML = `
                    <div class="placeholder-video">
                        <div class="play-icon"></div>
                        <p>Не удалось загрузить изображение</p>
                    </div>
                `;
            };
            
            imgWrapper.appendChild(img);
            videoContainer.appendChild(imgWrapper);
        } else if (object.video) {
            videoContainer.innerHTML = `<iframe src="${object.video}" frameborder="0" allowfullscreen style="width:100%;height:100%;"></iframe>`;
        } else {
            videoContainer.innerHTML = `
                <div class="placeholder-video">
                    <div class="play-icon"></div>
                    <p>Здесь будет фото объекта</p>
                </div>
            `;
        }
    }
    
    const modal = new bootstrap.Modal(modalElement);
    modal.show();
}
