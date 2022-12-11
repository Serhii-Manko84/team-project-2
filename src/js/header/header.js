import axios from 'axios';
import drinkCardTemplate from '../../templates/drink-card.hbs';
import mobileLearnMore from '../../templates/mobile-modal-cocktail.hbs';
import tabletDesktopCocktail from '../../templates/tablet-desktop-cocktail.hbs';
import tabletDesctopIngr from '../../templates/tablet-desctop-ingr-modal.hbs';
import mobileIngrModal from '../../templates/mobile-ingr-modal.hbs';
const BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php';
const RANDOM_URL = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
const INGR_URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php';

const iconHeart1 = document.querySelector('.div-icon-heart1');
const iconHeart2 = document.querySelector('.div-icon-heart2');
const iconClose = document.querySelector('.div-icon-close');
const useHeart1 = iconHeart1.href.baseVal;
const useHeart2 = iconHeart2.href.baseVal;
const useClose = iconClose.href.baseVal;

const axiosGetImages = query => {
  const res = axios.get(`${BASE_URL}?s=${query}`);
  return res;
};

const axiosGetIngrByName = query => {
  const res = axios.get(`${INGR_URL}?i=${query}`);
  return res;
};
window.addEventListener('load', e => {
  randomCocktails(e);
});

async function randomCocktails(e) {
  const allRandomCocktails = [];
  if (window.innerWidth < 768) {
    const r1 = axios.get(RANDOM_URL);
    const r2 = axios.get(RANDOM_URL);
    const r3 = axios.get(RANDOM_URL);

    const allRandom = Promise.all([r1, r2, r3]).then(value => {
      allRandomCocktails.push(value[0].data.drinks[0]);
      allRandomCocktails.push(value[1].data.drinks[0]);
      allRandomCocktails.push(value[2].data.drinks[0]);

      const markup = drinkCardTemplate(allRandomCocktails);

      refs.cardsCaption.style.display = 'block';
      refs.cardsContainerEl.innerHTML = markup;

      const btnsRemove = document.querySelectorAll('.card-btn__remove');
      for (let btn of btnsRemove) {
        btn.style.display = 'none';
      }
      addSvgUseHearts();
    });
  } else if (window.innerWidth >= 768 && window.innerWidth < 1280) {
    const r1 = axios.get(RANDOM_URL);
    const r2 = axios.get(RANDOM_URL);
    const r3 = axios.get(RANDOM_URL);
    const r4 = axios.get(RANDOM_URL);
    const r5 = axios.get(RANDOM_URL);
    const r6 = axios.get(RANDOM_URL);

    const allRandom = Promise.all([r1, r2, r3, r4, r5, r6]).then(value => {
      allRandomCocktails.push(value[0].data.drinks[0]);
      allRandomCocktails.push(value[1].data.drinks[0]);
      allRandomCocktails.push(value[2].data.drinks[0]);
      allRandomCocktails.push(value[3].data.drinks[0]);
      allRandomCocktails.push(value[4].data.drinks[0]);
      allRandomCocktails.push(value[5].data.drinks[0]);

      const markup = drinkCardTemplate(allRandomCocktails);
      refs.cardsCaption.style.display = 'block';
      refs.cardsContainerEl.innerHTML = markup;

      const btnsRemove = document.querySelectorAll('.card-btn__remove');
      for (let btn of btnsRemove) {
        btn.style.display = 'none';
      }
      addSvgUseHearts();
    });
  } else if (window.innerWidth >= 1280) {
    const r1 = axios.get(RANDOM_URL);
    const r2 = axios.get(RANDOM_URL);
    const r3 = axios.get(RANDOM_URL);
    const r4 = axios.get(RANDOM_URL);
    const r5 = axios.get(RANDOM_URL);
    const r6 = axios.get(RANDOM_URL);
    const r7 = axios.get(RANDOM_URL);
    const r8 = axios.get(RANDOM_URL);
    const r9 = axios.get(RANDOM_URL);

    const allRandom = Promise.all([r1, r2, r3, r4, r5, r6, r7, r8, r9]).then(
      value => {
        allRandomCocktails.push(value[0].data.drinks[0]);
        allRandomCocktails.push(value[1].data.drinks[0]);
        allRandomCocktails.push(value[2].data.drinks[0]);
        allRandomCocktails.push(value[3].data.drinks[0]);
        allRandomCocktails.push(value[4].data.drinks[0]);
        allRandomCocktails.push(value[5].data.drinks[0]);
        allRandomCocktails.push(value[6].data.drinks[0]);
        allRandomCocktails.push(value[7].data.drinks[0]);
        allRandomCocktails.push(value[8].data.drinks[0]);

        const markup = drinkCardTemplate(allRandomCocktails);
        //  ---- footer
        document.body.style.display = 'block';
        refs.cardsCaption.style.display = 'block';
        refs.cardsContainerEl.innerHTML = markup;

        const btnsRemove = document.querySelectorAll('.card-btn__remove');
        for (let btn of btnsRemove) {
          btn.style.display = 'none';
        }
        addSvgUseHearts();
      }
    );
  }
}

const refs = {
  menu: document.querySelector('[data-menu]'),
  formEl: document.querySelector('.search-form'),
  mobileFormEl: document.querySelector('.search-form-mobile'),
  siteFavoriteHeaderWrapper: document.querySelector(
    '.site-nav-favorite-wrapper'
  ),
  favoriteHeaderWrapper: document.querySelector('.favorite-wrapper'),
  mobileFavorite: document.querySelector('.mobile-favorite'),
  mobileFavorites: document.querySelector('.mobile-favorites'),
  iconArrow: document.querySelector('.mobile-arrow'),
  //   formEl: document.querySelector('.header-form'),
  cardsContainerEl: document.querySelector('.cards-container'),
  cardsCaption: document.querySelector('.cards-title'),
  errorEl: document.querySelector('.not-found-markup'),
  modalIngr: document.querySelector('.modal-ingr'),
  paginationContainer: document.querySelector('.pagination-container'),
  paginationListContainer: document.querySelector('.pagination'),
};

refs.favoriteHeaderWrapper.style.display = 'none';
refs.siteFavoriteHeaderWrapper.addEventListener('mouseover', () => {
  refs.favoriteHeaderWrapper.style.display = 'block';
});
refs.siteFavoriteHeaderWrapper.addEventListener('mouseout', () => {
  refs.favoriteHeaderWrapper.style.display = 'none';
});

// refs.iconArrow.transform = 'rotate(180deg)';
refs.mobileFavorite.addEventListener('click', () => {
  refs.mobileFavorites.classList.toggle('hide-show');
  refs.iconArrow.classList.toggle('rotate180');
});

refs.errorEl.style.display = 'none';

refs.cardsCaption.style.display = 'none';
refs.formEl.addEventListener('submit', handlerSubmitForm);
refs.mobileFormEl.addEventListener('submit', handlerSubmitForm);
refs.cardsContainerEl.addEventListener('click', handlerAddToLS);
refs.cardsContainerEl.addEventListener('click', handlerRemoveFromLS);
refs.cardsContainerEl.addEventListener('click', handlerLearnMore);

async function handlerSubmitForm(e) {
  e.preventDefault();
  if (e.target[0].classList.contains('mobile-btn-search')) {
    refs.menu.classList.toggle('is-open');
    window.scrollTo({
      top: 800,
      behavior: 'smooth',
    });
  }

  refs.paginationContainer.innerHTML = '';
  refs.paginationListContainer.innerHTML = '';
  try {
    const userDrink = e.target.drink.value;
    const { data } = await axiosGetImages(userDrink);
    console.log(data.drinks);

    if (data.drinks === null) {
      refs.cardsCaption.style.display = 'none';
      refs.cardsContainerEl.innerHTML = refs.errorEl.innerHTML;
      return;
    }
    refs.cardsCaption.style.display = 'block';
    const btnsRemove = document.querySelectorAll('.card-btn__remove');
    for (let btn of btnsRemove) {
      btn.style.display = 'none';
    }

    //   pagination test //
    const cocktailsData = data.drinks;
    let currentPage = 1;
    let rows;
    if (window.innerWidth < 768) {
      rows = 3;
    } else if (window.innerWidth >= 768 && window.innerWidth < 1280) {
      rows = 6;
    } else if (window.innerWidth >= 1280) {
      rows = 9;
    }

    function displayList(cocktailsArr, rowPerPage, page) {
      const paginationContainer = document.querySelector(
        '.pagination-container'
      );
      paginationContainer.innerHTML = '';
      page--;
      const start = rowPerPage * page;
      const end = start + rowPerPage;
      const paginatedData = cocktailsArr.slice(start, end);
      //
      refs.cardsContainerEl.innerHTML = drinkCardTemplate(paginatedData);
      addSvgUseHearts();
      //  ---- footer
      document.body.style.display = 'block';
      const btnsRemove = document.querySelectorAll('.card-btn__remove');
      for (let btn of btnsRemove) {
        btn.style.display = 'none';
      }
      //

      paginatedData.forEach(el => {
        const cocktailEl = document.createElement('div');
        cocktailEl.innerHTML = el.strDrink;
      });
    }
    function displayPagination(cocktailsArr, rowPerPage) {
      const paginationEl = document.querySelector('.pagination');
      const pagesCount = Math.ceil(cocktailsArr.length / rowPerPage);
      const ulEl = document.createElement('ul');
      ulEl.classList.add('pagination-list');

      for (let i = 0; i < pagesCount; i++) {
        const liEl = displayPaginationBtn(i + 1);
        ulEl.appendChild(liEl);
      }
      paginationEl.appendChild(ulEl);
    }
    function displayPaginationBtn(page) {
      const liEl = document.createElement('li');
      const spanEl = document.createElement('span');
      spanEl.classList.add('pagination-btn-page');
      liEl.classList.add('pagination-btn');
      liEl.appendChild(spanEl);
      spanEl.textContent = page;

      if (currentPage === page) liEl.classList.add('pagination-btn-active');

      liEl.addEventListener('click', () => {
        currentPage = page;
        displayList(cocktailsData, rows, currentPage);

        const currentLi = document.querySelector('li.pagination-btn-active');
        currentLi.classList.remove('pagination-btn-active');

        liEl.classList.add('pagination-btn-active');
      });
      return liEl;
    }

    displayList(cocktailsData, rows, currentPage);
    if (cocktailsData.length > rows) {
      displayPagination(cocktailsData, rows);
    }

    //   pagination test //
  } catch (error) {
    console.log(error);
  }
}

let favoriteDrinks = [];
let favoriteIngridients = [];

async function handlerAddToLS(e) {
  const article = e.target.closest('.card');
  if (e.target.classList.contains('card-btn__add')) {
    const nameQuery = article.children[1].textContent;
    console.dir(article.children[1].textContent);
    const { data } = await axiosGetImages(nameQuery);
    console.log(data.drinks[0]);
    let drink = { ...data.drinks[0] };
    favoriteDrinks.push(drink);
    localStorage.setItem('favorites', JSON.stringify(favoriteDrinks));
    const btnRemove = article.children[2].children[2];
    btnRemove.style.display = 'block';
    const btnAdd = article.children[2].children[1];
    btnAdd.style.display = 'none';
  }
}

function handlerRemoveFromLS(e) {
  const article = e.target.closest('.card');
  if (e.target.classList.contains('card-btn__remove')) {
    favoriteDrinks = favoriteDrinks.filter(
      drink => drink.idDrink !== article.id
    );

    localStorage.setItem('favorites', JSON.stringify(favoriteDrinks));

    const btnRemove = article.children[2].children[2];
    btnRemove.style.display = 'none';
    const btnAdd = article.children[2].children[1];
    btnAdd.style.display = 'block';
  }
}

// ===== Learn more ========  //
const modalCocktailEl = document.querySelector('.modal-cocktail');

async function handlerLearnMore(e) {
  const article = e.target.closest('.card');

  if (e.target.classList.contains('card-btn__learn')) {
    const nameQuery = article.children[1].textContent;
    const { data } = await axiosGetImages(nameQuery);
    console.log(data);
    const newOneData = { ...data.drinks[0] };
    const ingridientsArray = [];

    for (let key in newOneData) {
      if (key.includes('strIngredient') && newOneData[key] !== null) {
        ingridientsArray.push(newOneData[key]);
      }
    }
    newOneData['ingridients'] = ingridientsArray;
    const newData = [{ ...newOneData }];
    console.log(newOneData);

    console.log(window.innerWidth);
    if (window.innerWidth > 768) {
      modalCocktailEl.innerHTML = tabletDesktopCocktail(newData);
      document.querySelector(
        '.cocktail-icon-close'
      ).innerHTML = `<use class="use-heart1" href='${useClose}'></use>`;

      const listIngridients = document.querySelector(
        '.cocktail-ingridients-list'
      );
      listIngridients.addEventListener('click', async e => {
        if (e.target.nodeName === 'LI') {
          const ingrNameQuery = e.target.textContent;
          console.log(ingrNameQuery);

          const ingrData = await axiosGetIngrByName(ingrNameQuery);
          console.log(ingrData.data.ingredients[0]);
          const ingrArr = [{ ...ingrData.data.ingredients[0] }];
          refs.modalIngr.innerHTML = tabletDesctopIngr(ingrArr);
          document.querySelector(
            '.ingr-icon-close'
          ).innerHTML = `<use class="use-heart1" href='${useClose}'></use>`;
          const ingrBackdrop = document.querySelector('.ingr-backdrop');
          ingrBackdrop.classList.remove('is-hidden');

          const ingrIconClose = document.querySelector('.ingr-icon-close');
          ingrIconClose.addEventListener('click', e => {
            ingrBackdrop.classList.add('is-hidden');
            document.body.style.overflow = 'hidden';
          });

          const ingrBtnRemove = document.querySelector('.ingr-btn__remove');
          const ingrBtnAdd = document.querySelector('.ingr-btn__add');
          ingrBtnRemove.style.display = 'none';

          ingrBtnAdd.addEventListener('click', () => {
            favoriteIngridients.push(ingrData.data.ingredients[0]);
            localStorage.setItem(
              'ingridients',
              JSON.stringify(favoriteIngridients)
            );

            ingrBtnAdd.style.display = 'none';
            ingrBtnRemove.style.display = 'block';
          });
          ingrBtnRemove.addEventListener('click', () => {
            favoriteIngridients.pop();
            localStorage.setItem(
              'ingridients',
              JSON.stringify(favoriteIngridients)
            );
            ingrBtnRemove.style.display = 'none';
            ingrBtnAdd.style.display = 'block';
          });
        }
      });

      const backdrop = document.querySelector('.backdrop');
      backdrop.classList.remove('is-hidden');
      document.body.style.overflow = 'hidden';

      const addBtn = document.querySelector('.tablet-btn-add');
      const removeBtn = document.querySelector('.tablet-btn-remove');
      removeBtn.style.display = 'none';

      addBtn.addEventListener('click', () => {
        favoriteDrinks.push(data.drinks[0]);
        localStorage.setItem('favorites', JSON.stringify(favoriteDrinks));
        removeBtn.style.display = 'block';
        addBtn.style.display = 'none';
      });

      removeBtn.addEventListener('click', () => {
        favoriteDrinks.pop();
        localStorage.setItem('favorites', JSON.stringify(favoriteDrinks));
        removeBtn.style.display = 'none';
        addBtn.style.display = 'block';
      });

      backdrop.addEventListener('click', e => {
        if (e.target.classList.contains('backdrop')) {
          backdrop.classList.add('is-hidden');
          document.body.style.overflow = 'auto';
        }
      });

      const iconClose = document.querySelector('.cocktail-icon-close');
      iconClose.addEventListener('click', () => {
        backdrop.classList.add('is-hidden');
        document.body.style.overflow = 'auto';
      });
    } else if (window.innerWidth < 768) {
      modalCocktailEl.innerHTML = mobileLearnMore(newData);
      const cocktailModal = document.querySelector('.coctail');
      console.log(cocktailModal);

      document.querySelector(
        '.mobile-icon-close'
      ).innerHTML = `<use class="use-heart1" href='${useClose}'></use>`;

      //
      document.body.style.overflow = 'hidden';
      //
      const listIngridients = document.querySelector(
        '.cocktail-ingridients-list'
      );
      listIngridients.addEventListener('click', async e => {
        if (e.target.nodeName === 'LI') {
          const ingrNameQuery = e.target.textContent;
          console.log(ingrNameQuery);

          const ingrData = await axiosGetIngrByName(ingrNameQuery);
          console.log(ingrData.data.ingredients[0]);
          const ingrArr = [{ ...ingrData.data.ingredients[0] }];
          refs.modalIngr.innerHTML = mobileIngrModal(ingrArr);
          document.querySelector(
            '.mobile-ingr-icon-close'
          ).innerHTML = `<use class="use-heart1" href='${useClose}'></use>`;
          const ingrBackdrop = document.querySelector('.ingr-backdrop');
          ingrBackdrop.classList.remove('is-hidden');
          document.body.style.overflow = 'hidden';

          const ingrIconClose = document.querySelector('.ingr-icon-close');
          ingrIconClose.addEventListener('click', () => {
            ingrBackdrop.classList.add('is-hidden');
            document.body.style.overflow = 'hidden';
          });

          const ingrBtnRemove = document.querySelector('.ingr-btn__remove');
          const ingrBtnAdd = document.querySelector('.ingr-btn__add');
          ingrBtnRemove.style.display = 'none';

          ingrBtnAdd.addEventListener('click', () => {
            favoriteIngridients.push(ingrData.data.ingredients[0]);
            localStorage.setItem(
              'ingridients',
              JSON.stringify(favoriteIngridients)
            );

            ingrBtnAdd.style.display = 'none';
            ingrBtnRemove.style.display = 'block';
          });
          ingrBtnRemove.addEventListener('click', () => {
            favoriteIngridients.pop();
            localStorage.setItem(
              'ingridients',
              JSON.stringify(favoriteIngridients)
            );
            ingrBtnRemove.style.display = 'none';
            ingrBtnAdd.style.display = 'block';
          });
        }
      });
      //

      cocktailModal.style.transform = 'translateX(0%)';

      const iconClose = document.querySelector('.mobile-icon-close');
      iconClose.addEventListener('click', () => {
        cocktailModal.style.transform = 'translateX(-150%)';
        document.body.style.overflow = 'auto';
      });

      const addBtn = document.querySelector('.modal-btn-add');
      const removeBtn = document.querySelector('.modal-btn-remove');
      removeBtn.style.display = 'none';

      addBtn.addEventListener('click', () => {
        console.log('me add');
        favoriteDrinks.push(data.drinks[0]);
        localStorage.setItem('favorites', JSON.stringify(favoriteDrinks));
        removeBtn.style.display = 'block';
        addBtn.style.display = 'none';
      });

      removeBtn.addEventListener('click', () => {
        favoriteDrinks.pop();
        localStorage.setItem('favorites', JSON.stringify(favoriteDrinks));
        removeBtn.style.display = 'none';
        addBtn.style.display = 'block';
      });
    }
  }
}

export { handlerLearnMore };

//=========== close modal cocktail ========== //

function addSvgUseHearts() {
  const addBtnsSvg = document.querySelectorAll('.card-btn__add svg');
  for (let svg of addBtnsSvg) {
    svg.innerHTML = `<use class="use-heart1" href='${useHeart1}'></use>`;
  }
  const removeBtnsSvg = document.querySelectorAll('.card-btn__remove svg');
  for (let svg of removeBtnsSvg) {
    svg.innerHTML = `<use class="use-heart1" href='${useHeart2}'></use>`;
  }
}
