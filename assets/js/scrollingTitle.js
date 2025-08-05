document.addEventListener("DOMContentLoaded", function () {
    let title = "squirrel freakaycitie ";
    let scrollTitle = title;

    function scroll() {
        scrollTitle = scrollTitle.substring(1) + scrollTitle[0];
        document.title = scrollTitle;
    }

    setInterval(scroll, 200);
});
