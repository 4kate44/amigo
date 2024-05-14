(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();

    // Fixed Navbar
    $(window).scroll(function () {
        if ($(window).width() < 992) {
            if ($(this).scrollTop() > 55) {
                $('.fixed-top').addClass('shadow');
            } else {
                $('.fixed-top').removeClass('shadow');
            }
        } else {
            if ($(this).scrollTop() > 55) {
                $('.fixed-top').addClass('shadow').css('top', -55);
            } else {
                $('.fixed-top').removeClass('shadow').css('top', 0);
            }
        }
    });

    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });

    // Testimonial carousel
    $(".testimonial-carousel").owlCarousel({
        // OwlCarousel configuration...
    });

    // Vegetable carousel
    $(".vegetable-carousel").owlCarousel({
        // OwlCarousel configuration...
    });

    // Fetch recent movies and update the DOM
    function fetchRecentMovies() {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "/movies-top20", true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    var recentMovies = JSON.parse(xhr.responseText);
                    var moviesListContainer = document.getElementById("moviesList");
                    moviesListContainer.innerHTML = "";
                    recentMovies.forEach(function(movie) {
                        var movieElement = document.createElement("div");
                        movieElement.innerHTML = "<h4>" + movie.title + "</h4>";
                        movieElement.innerHTML += "<p>장르: " + movie.genreName + "</p>";
                        movieElement.innerHTML += "<p>평점: " + movie.score + "</p>";
                        moviesListContainer.appendChild(movieElement);
                    });
                } else {
                    console.error("Failed to retrieve recent movies. Status code: " + xhr.status);
                }
            }
        };
        xhr.send();
    }

    // 비밀번호 일치 여부 확인
    function checkPasswordMatch() {
        var password = $("#password").val();
        var confirmPassword = $("#password2").val();
        if (password != confirmPassword) {
            $("#password2")[0].setCustomValidity("Passwords do not match.");
        } else {
            $("#password2")[0].setCustomValidity("");
        }
    }
    $(document).on("input", "#password2", checkPasswordMatch);

    // 별점 평가 기능
    $(document).ready(function() {
        const ratingStars = $(".rating__star");
        // Rating stars functionality...
    });

})(jQuery);
