'use strict';
document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против...",
        ]
    };

    const ad = document.querySelectorAll(".promo__adv img"),
        genre = document.getElementsByClassName("promo__genre"),
        bgpromo = document.querySelector(".promo__bg"),
        movieList = document.querySelector(".promo__interactive-list"),
        input = document.querySelector(".adding__input"),
        addForm = document.querySelector(".add"),
        checkbox = addForm.querySelector("[type='checkbox']"),
        trash = document.querySelectorAll(".delete");

    genre[0].textContent = "ДРАМА";

    bgpromo.style.backgroundImage = "url('img/bg.jpg')";

    movieList.innerHTML = '';

    movieDB.movies.sort();

    function createMovieList(films, parent) {
        parent.innerHTML = '';

        films.forEach((film, i) => {
            parent.innerHTML += `
    <li class="promo__interactive-item"> ${i + 1} ${film}
        <div class="delete"></div>
    </li>
    `;
        });

        document.querySelectorAll(".delete").forEach((btn, i) => {
            btn.addEventListener("click", function () {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1); //вырезает определенный элемент с массива. 
                // Синтаксис: сначала номер, который нужно удалить, потом сколько элемов надо удалить
                createMovieList(movieDB.movies, movieList);
            });
        });
    }

    createMovieList(movieDB.movies, movieList);



    addForm.addEventListener("submit", function (event) {
        event.preventDefault();
        let addFilm = input.value;
        const favorite = checkbox.checked;
        if (input.value == "" || input.value == null) {
            addForm.reset();
            if (addFilm.lenght > 21) {
                addFilm = `${addFilm.substring(0, 22)}...`;
            }
        } else {
            movieDB.movies.push(addFilm);
            movieDB.movies.sort();
            createMovieList(movieDB.movies, movieList);
        }
        if (favorite == true) {
            console.log("Добавляем в понравившиеся");
        }
        addForm.reset();
    });

    function deleteAD(elem) {
        elem.forEach(item => {
            item.remove();
        });
    }
    deleteAD(ad);





});