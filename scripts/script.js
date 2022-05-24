import './header_hide.js'

$(document).ready(function () {
    // Местоположение
    var locationToggle = document.getElementById('location-toggle');
    var locationIcon = document.querySelector('.location-icon');
    var locationClose = document.getElementById('location-close');
    var locationModal = document.getElementById('location-modal');
    var locationBtn = document.querySelector('.location-primary-btn')
    // Модальное окно местоположения
    var newLocationModalWrapper = document.querySelector('.new-location-wrapper');
    var newLocationToggle = document.getElementById('new-location-toggle');
    var newLocationClose = document.getElementById('new-location-close');
    var locDelete = document.querySelector('.input-delete-btn');
    var locInput = document.querySelector('.change-city');
    // Place
    var placeBtn = document.querySelector('.place-btn')
    var placeList = document.getElementById('place-list')
    // All Category
    var categoryBtn = document.getElementById('category-btn')
    var categoryBtnMin = document.getElementById('category-btn-min')
    var categoryModal = document.getElementById('category-modal')
    // Input Category
    var inputCategoryBtn = document.getElementById('input-category-toggle')
    var inputCategoryList = document.getElementById('input-category-list')
    var inputCategoryClean = document.querySelector('.input-clean')
    var inputCategory = document.querySelector('.heads-wrapper .category-input')
    var inputItemsArray = [];

    // Функции для работы с Cookie
    // ================================================
    // запись значений
    function writeCookie(name, val, expires) {
        var date = new Date;
        date.setDate(date.getDate() + expires);
        document.cookie = name + "=" + val + "; expires=" + date.toUTCString();
    }
    // получение значений
    function readCookie(name) {
        var matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }
    // удаление значений
    function delete_cookie(name) {
        writeCookie(name, "", -1)
    }

    // <===================== МЕСТОПОЛОЖЕНИЕ =========================>
    locationToggle.onclick = function () {
        locationModal.classList.toggle('closed');
    };
    locationBtn.onclick = function () {
        locationModal.classList.toggle('closed');
    };
    locationIcon.onclick = function () {
        locationModal.classList.toggle('closed');
    };
    locationClose.onclick = function () {
        locationModal.classList.toggle('closed');
    };
    newLocationToggle.onclick = function () {
        newLocationModalWrapper.style.display = 'flex'
        document.querySelector('html').style.overflow = 'hidden'
    };
    newLocationClose.onclick = function () {
        newLocationModalWrapper.style.display = 'none'
        document.querySelector('html').style.overflow = 'auto'
    }
    newLocationModalWrapper.onclick = function (e) {
        if (e.target == newLocationModalWrapper) {
            newLocationModalWrapper.style.display = 'none'
            document.querySelector('html').style.overflow = 'auto'
        }
    }

    locDelete.onclick = () => {
        locInput.value = "";
    }
    locInput.onfocus = () => {
        locInput.classList.add('active')
    }
    locInput.onblur = () => {
        locInput.classList.remove('active')
    }


    document.addEventListener('click', function (e) {
        const target = e.target;
        const its_geoModal_toggle = target == locationToggle;
        const its_geoModal_icon = target == locationIcon;
        const its_geoModal = target == locationModal || locationModal.contains(target);
        const geoModal_is_active = locationModal.classList.contains('closed');

        if (!its_geoModal && !geoModal_is_active && !its_geoModal_toggle && !its_geoModal_icon) {
            locationModal.classList.toggle('closed');
        }
    });
    // <================================= ПРОФИЛЬ =================================>
    var Btn = document.querySelector('.profile-elems-wrapper')
    var Modal = document.querySelector('.profile-modal-wrapper')
    if (readCookie('device_type') == 'desktop') {
        Btn.onmouseenter = () => {
            Modal.classList.add('active')
        }
        Btn.onmouseleave = () => {
            Modal.classList.remove('active')
        }
    } else {
        var userLink = document.getElementById('user-toggle')
        userLink.setAttribute('href', '#')
        var counterLink = 0;
        Btn.onclick = () => {
            counterLink++
            Modal.classList.add('active')
            if (counterLink == 2) {
                userLink.setAttribute('href', 'user')
                counterLink = 0
            }
        }
    }

    document.addEventListener('click', function (e) {
        var target = e.target
        // закрытие
        var its_profileBtn = target == Btn || Btn.contains(target);
        var its_profileModal = target == Modal || Modal.contains(target);
        var profileModal_is_active = Modal.classList.contains('active');

        if (!its_profileBtn && profileModal_is_active && !its_profileModal) {
            Modal.classList.remove('active');
            counterLink = 0
        }
    })


    // <================================= PLACE =================================>
    placeBtn.onclick = () => {
        placeList.classList.toggle('modal-show')
    }

    document.addEventListener('click', function (e) {
        const target = e.target;
        const its_place_btn = target == placeBtn;
        const its_placeList = target == placeList || placeList.contains(target);
        const placeList_is_active = placeList.classList.contains('modal-show');

        if (!its_placeList && placeList_is_active && !its_place_btn) {
            placeList.classList.remove('modal-show');
        }
    });


    // <================================= ALL CATEGORY =================================>
    categoryBtn.onclick = () => {
        categoryModal.classList.toggle('closed')
    }
    categoryBtnMin.onclick = () => {
        categoryModal.classList.toggle('closed')
    }

    document.addEventListener('click', function (e) {
        const target = e.target;
        const its_categoryBtn = target == categoryBtn;
        const its_categoryBtnMin = target == categoryBtnMin;
        const its_categoryModal = target == categoryModal || categoryModal.contains(target);
        const categoryModal_is_active = categoryModal.classList.contains('closed');

        if (!its_categoryModal && !categoryModal_is_active && !its_categoryBtn && !its_categoryBtnMin) {
            categoryModal.classList.toggle('closed');
        }
    });


    // <================================== INPUT CATEGORY ===============================>
    document.addEventListener('click', function (e) {
        const target = e.target;

        if (target.closest('.input-category-btn')) {
            inputCategoryList.classList.toggle('modal-show')
        }

        const its_inputCategoryBtn = target.closest('.input-category-btn');
        const its_inputCategoryList = target == inputCategoryList || inputCategoryList.contains(target);
        const inputCategoryListt_is_active = inputCategoryList.classList.contains('modal-show');

        if (!its_inputCategoryList && inputCategoryListt_is_active && !its_inputCategoryBtn) {
            inputCategoryList.classList.toggle('modal-show')
        }
    });

    inputCategory.onfocus = () => {
        document.querySelector('.input-background').classList.add('active')
    }
    inputCategory.onblur = () => {
        document.querySelector('.input-background').classList.remove('active')
    }


    inputCategoryClean.onclick = () => {
        inputCategory.value = ''
    }

    // INPUT CATEGORIES CHECKBOX

    var $checks = $("input.checkboxacti");
    $(".all").on("change", function () {
        var groupId = $(this).data('id');
        $('.one[data-id="' + groupId + '"]').prop("checked", this.checked);
    });
    $("#unchecked").on("click", function () {
        $checks.prop('checked', false);
    });

    $(".heads .one").on("change", function () {
        var groupId = $(this).data('id');
        var allChecked = $('.one[data-id="' + groupId + '"]:not(:checked)').length == 0;
        $('.all[data-id="' + groupId + '"]').prop("checked", allChecked);
    });

    // checked
    document.addEventListener('click', function () {
        document.querySelectorAll('.heads .switcher-options .checkboxacti').forEach(item => {
            if (item.checked == true) {
                item.setAttribute('checked', true)
            } else {
                item.removeAttribute('checked')
            }
        })

        document.querySelectorAll('.heads .input-category-list .checkboxacti').forEach(item => {
            if (item.checked == true) {
                item.setAttribute('checked', true)
            } else {
                item.removeAttribute('checked')
            }
        })
    })



    // появление кнопки "очистить"
    inputCategory.addEventListener('input', function () {
        if (inputCategory.value != '') {
            inputCategoryClean.classList.remove('closed')
        } else if (inputCategory.value == '') {
            inputCategoryClean.classList.add('closed')
        }
    })
    inputCategoryClean.addEventListener('click', hide)
    function hide() {
        this.classList.add('closed')
        document.querySelector('.heads-wrapper .search-history').classList.remove('active')
        document.querySelector('.heads-wrapper .search-list').classList.remove('active')
    }

    // ==================our lord bless the category==================
    let customerTab = $('#global-menu-customer');

    let workerTab = $('#global-menu-worker');

    let emplyerTab = $('#global-menu-emplyer');

    let employeeTab = $('#global-menu-employee');

    let buyerTab = $('#global-menu-buyer');

    let sellerTab = $('#global-menu-seller');

    let servicesTab = $('#global-menu-services');

    let pictureContainer = $('.pic-container');

    customerTab.on('mouseover', function () {
        $('.second-block-title').text('Услуги исполнителей')
        pictureContainer.addClass('customer')
        pictureContainer.removeClass('applicant  services-img  sellerbuyer employee employer services')
    })
    workerTab.on('mouseover', function () {
        $('.second-block-title').text('Задания заказчиков')
        pictureContainer.addClass('applicant')
        pictureContainer.removeClass('customer services-img  seller buyer employee employer  ')
    })

    emplyerTab.on('mouseover', function () {
        $('.second-block-title').text('Резюме соискателей')
        pictureContainer.addClass('employer')
        pictureContainer.removeClass('applicant services-img  seller buyer employee customer ')
    })
    employeeTab.on('mouseover', function () {
        $('.second-block-title').text('Вакансии работодателей')
        pictureContainer.addClass('employee')
        pictureContainer.removeClass('applicant services-img  seller  buyer employer customer ')
    })


    buyerTab.on('mouseover', function () {
        $('.second-block-title').text('Объявления о продаже')
        pictureContainer.addClass('buyer')
        pictureContainer.removeClass('applicant services-img  employee  seller employer customer ')
    })
    sellerTab.on('mouseover', function () {
        $('.second-block-title').text('Объявления о покупке')
        pictureContainer.addClass('seller')
        pictureContainer.removeClass('applicant  services-img employee buyer employer customer ')
    })
    servicesTab.on('mouseover', function () {
        $('.second-block-title').text('Сервисы AT-WORK')
        pictureContainer.addClass('services-img')
        pictureContainer.removeClass('applicant seller employee buyer employer customer')
    })


    // Категории 
    var categoriesBtns = document.querySelectorAll('.all-categories-btns .all-categories-btn').length ? document.querySelectorAll('.all-categories-btns .all-categories-btn') : console.log(null);

    var ifCategoryList = document.querySelectorAll('.category-list-wrapper')
    var CategoryLists = ifCategoryList.length ? ifCategoryList : console.log(null);
    categoriesBtns.forEach(item => {
        item.onmouseover = () => {
            CategoryLists.forEach(list => {
                let itemDataColor = item.getAttribute('data-color')
                let listDataColor = list.getAttribute('data-color')
                if (itemDataColor == listDataColor) {
                    list.classList.remove('closed')
                } else {
                    list.classList.add('closed')
                }
            })
        }
    })



    // замещение текста в кнoпке категорий
    // поиск
    document.addEventListener('change', function (e) {
        var target = e.target;
        // клик на чекбокс
        if (target.closest('.item') && target.closest('.input-category-list')) {
            var cur_check = target.closest('.item').querySelector('P').textContent;
            if (target.closest('.item label').querySelector('input').checked == true) {
                inputItemsArray.push(cur_check)
            } else {
                var indexCheck = inputItemsArray.indexOf(cur_check)
                inputItemsArray.splice(indexCheck, 1)
            }
            if (inputItemsArray.length == document.querySelectorAll('.input-category-list .item').length) {
                document.querySelector('.input-category-btn span').textContent = 'Все категории';
            } else {
                document.querySelector('.input-category-btn span').textContent = inputItemsArray.join(', ');
            }
            if (inputItemsArray.length == 0) {
                document.querySelector('.input-category-btn span').textContent = 'Все категории';
            }
        }
        // все категории
        if (target.closest('#select-all-cb')) {
            if (target.closest('#select-all-cb input').checked == true) {
                inputItemsArray.length = 0
                document.querySelector('.input-category-btn span').textContent = 'Все категории';
                document.querySelectorAll('.input-category-list .item').forEach(item => {
                    inputItemsArray.push(item.querySelector('p').textContent)
                })
            } else {
                inputItemsArray.length = 0
            }
        }
    })
    // очистить
    document.querySelector('.clear-category-list').onclick = () => {
        inputItemsArray.length = 0;
        document.querySelector('.input-category-btn span').textContent = 'Все категории';
    }




    // открытие и закрытие окон поиска
    // история поиска
    inputCategory.onfocus = () => {
        if (document.querySelector('.heads-wrapper .search-history').querySelectorAll('.search-history__item').length != 0) {
            document.querySelector('.heads-wrapper .search-history').classList.add('active')
        }
    }
    // поиск
    inputCategory.oninput = () => {
        if (inputCategory.value != '') {
            document.querySelector('.heads-wrapper .search-list').classList.add('active')
        }
    }

    // запись введенного запроса в куки
    var inputEnter = function () {
        if (inputCategory.value != "" && inputCategory.value.trim().length != 0) {
            let valArr = [];
            let value = inputCategory.value.toLowerCase().trim();
            let link = `http://atwrk.ru/search/?q=${value}`;
            let catArr = [];
            let linkArr = [];
            if ((readCookie('searchList') != undefined && readCookie('searchList') != '') && (readCookie('searchLinks') != undefined && readCookie('searchLinks') != '')) {
                valArr = JSON.parse(decodeURIComponent(readCookie('searchList')));
                linkArr = JSON.parse(decodeURIComponent(readCookie('searchLinks')));
                // ======================================================================================================================================
                if (valArr.length > 4) {
                    valArr.splice(0, 1)
                    linkArr.splice(0, 1)
                }
                // чекбоксы
                document.querySelector('.heads .input__category-list').querySelectorAll('.item').forEach(item => {
                    if (item.querySelector('input').checked == true) {
                        catArr.push(item.getAttribute('data-search'))
                    }
                    link = `http://atwrk.ru/search/?q=${value}${catArr.join('')}`
                })
                // свитчеры
                document.querySelector('.heads .input__category-list').querySelectorAll('.filter__salary-checkbox').forEach(item => {
                    if (item.querySelector('input').checked == true) {
                        catArr.push(item.getAttribute('data-search'))
                    }
                    link = `http://atwrk.ru/search/?q=${value}${catArr.join('')}`
                })

                function eq(item) {
                    return item.toLowerCase().split(" ").join("") == value.split(" ").join("");
                }
                let test = valArr.some(eq);
                if (test == false) {
                    valArr.push(value)
                    linkArr.push(link)
                }
                writeCookie('searchLinks', encodeURIComponent(JSON.stringify(linkArr)), 30)
                writeCookie('searchList', encodeURIComponent(JSON.stringify(valArr)), 30)
                window.location.href = link;

                // ======================================================================================================================================
            } else {
                // чекбоксы
                document.querySelector('.heads .input__category-list').querySelectorAll('.item').forEach(item => {
                    if (item.querySelector('input').checked == true) {
                        catArr.push(item.getAttribute('data-search'))
                    }
                    link = `http://atwrk.ru/search/?q=${value}${catArr.join('')}`
                })
                // свитчеры
                document.querySelector('.heads .input__category-list').querySelectorAll('.filter__salary-checkbox').forEach(item => {
                    if (item.querySelector('input').checked == true) {
                        catArr.push(item.getAttribute('data-search'))
                    }
                    link = `http://atwrk.ru/search/?q=${value}${catArr.join('')}`
                })

                valArr.push(value)
                linkArr.push(link)
                writeCookie('searchLinks', encodeURIComponent(JSON.stringify(linkArr)), 30)
                writeCookie('searchList', encodeURIComponent(JSON.stringify(valArr)), 30)
                window.location.href = link;
                // ======================================================================================================================================
            }

        }
        inputCategory.value = ''
    }

    // ENTER
    inputCategory.addEventListener('keypress', function (e) {
        if (e.which === 13) {
            e.preventDefault();
            inputEnter()
        }
    });
    // КЛИК ПО ИКОНКЕ ПОИСКА
    document.querySelector('.input-search').onclick = () => {
        inputEnter()
    }
    // КЛИК ПО ЭЛЕМЕНТУ ИЗ СПИСКА
    document.addEventListener('click', function (e) {
        let target = e.target
        if (target.closest('.heads-wrapper .search-list__item')) {
            let valArr = [];
            let itemText = target.closest('.heads-wrapper .search-list__item').querySelector('.search-list__text p').textContent
            let itemValue = itemText.split(" ").join("").toLowerCase()
            if (readCookie('searchList') != undefined) {
                valArr = JSON.parse(decodeURIComponent(readCookie('searchList')));
                // ======================================================================================================================================
                function eq(item) {
                    return item.toLowerCase().split(" ").join("") == itemText.split(" ").join("");
                }
                let test = valArr.some(eq);

                if (test == false) {
                    valArr.push(itemText)
                }
                if (valArr.length > 5) {
                    valArr.splice(0, 1)
                }
                writeCookie('searchList', encodeURIComponent(JSON.stringify(valArr)), 30)
                window.location.href = `http://atwrk.ru/search/?q=${itemValue}`;
                // ======================================================================================================================================
            } else {
                valArr.push(itemText)
                writeCookie('searchList', encodeURIComponent(JSON.stringify(valArr)), 30)
                window.location.href = `http://atwrk.ru/search/?q=${itemValue}`;
                // ======================================================================================================================================
            }
            inputCategory.value = ''
        }
    })

    // Закрытие окон поиска при клико во вне
    document.onclick = (e) => {
        let target = e.target
        if (!target.closest('.heads-wrapper .search-list__item') && !target.closest('.heads-wrapper .search-history__item') && !target.closest('.heads-wrapper .category-input')) {
            document.querySelector('.heads-wrapper .search-list').classList.remove('active')
            document.querySelector('.heads-wrapper .search-history').classList.remove('active')
        }
    }

    // Удаление
    document.addEventListener('click', function (e) {
        let target = e.target
        // очистить
        if (target.closest('.search-history__all-clear')) {
            delete_cookie('searchList')
            delete_cookie('searchLinks')
            document.querySelectorAll('.heads-wrapper .search-history .search-history__item').forEach(item => {
                item.remove()
            })
        }
        // удалить
        if (target.closest('.search-history__delete')) {
            e.preventDefault()
            if (readCookie('searchList') != undefined) {
                var searchHistoryArray = JSON.parse(decodeURIComponent(readCookie('searchList')))
                var searchLinksArray = JSON.parse(decodeURIComponent(readCookie('searchLinks')))
                var itemIndex = target.closest('.search-history__item').getAttribute('data-count')
                searchHistoryArray.splice(itemIndex, 1)
                searchLinksArray.splice(itemIndex, 1)
                target.closest('.search-history__item').remove()
                writeCookie('searchList', encodeURIComponent(JSON.stringify(searchHistoryArray)), 30)
                writeCookie('searchLinks', encodeURIComponent(JSON.stringify(searchLinksArray)), 30)

            }
            if (document.querySelector('.heads-wrapper .search-history').querySelectorAll('.search-history__item').length == 0) {
                document.querySelector('.heads-wrapper .search-history').classList.remove('active')
            }
        }
    })

    if (readCookie('searchList') != undefined && readCookie('searchList') != '') {
        var searchHistoryArray = JSON.parse(decodeURIComponent(readCookie('searchList')))
        // создание элемента
        searchHistoryArray.forEach((item, index) => {
            var searchHistoryList = document.querySelector('.heads-wrapper .search-history__list')
            var searchHistoryItem = document.createElement("a")
            searchHistoryItem.setAttribute('href', JSON.parse(decodeURIComponent(readCookie('searchLinks')))[index])
            searchHistoryItem.classList.add('search-history__item');
            searchHistoryItem.setAttribute('data-count', index)

            var icon = document.createElement('div')
            icon.classList.add('search-history__icon')
            let iconImg = document.createElement('img')
            iconImg.setAttribute('src', './img/search-history-icon.svg')
            icon.appendChild(iconImg)
            searchHistoryItem.appendChild(icon)

            var text = document.createElement("div")
            text.classList.add('search-history__text')
            var itemText = document.createElement('p')
            itemText.textContent = item
            text.appendChild(itemText)
            searchHistoryItem.appendChild(text)

            var delIcon = document.createElement('div')
            delIcon.classList.add('search-history__delete')
            let delBtn = document.createElement('button')
            delBtn.textContent = 'Удалить'
            delIcon.appendChild(delBtn)
            searchHistoryItem.appendChild(delIcon)

            searchHistoryList.appendChild(searchHistoryItem)
        })
    }
});