$(".detail-product").on("click", function () {
    const title = $(this).data("title");
    const writer = $(this).data("writer");
    const year = $(this).data("year");
    const category = $(this).data("category");
    const price = $(this).data("price");
    const synopsis = $(this).data("synopsis");
    const image = $(this).data("image");
    $(".title-modal").text(title);
    $(".writer-modal").text(writer);
    $(".year-modal").text(year);
    $(".category-modal").text(category);
    $(".price-modal").text(price);
    $(".synopsis-modal").text(synopsis);
    $(".image-modal").attr("src", `/image/uploaded_images/${image}`);
});

// fitur search
// Selector
const searchInput = document.getElementById("searchProduct");
const card = document.querySelectorAll("#card");
const title = document.querySelectorAll(".card-title");
const writer = document.querySelectorAll(".writer");
const buttonFilter = document.querySelectorAll("#button-filter");
const category = document.querySelectorAll("#product .category");
const pHeader = document.querySelector("#header p");
const spanHeader = document.querySelector("#header span");

// dataTitle
let dataTitle = [];
for (let i = 0; i < title.length; i++) {
    const element = title[i].innerHTML.toLocaleLowerCase();
    dataTitle.push(element);
}
// dataWriter
let dataWriter = [];
for (let i = 0; i < writer.length; i++) {
    const element = writer[i].innerHTML.toLocaleLowerCase();
    dataWriter.push(element);
}
// dataWriter
let dataCategory = [];
for (let i = 0; i < category.length; i++) {
    const element = category[i].innerHTML.toLocaleLowerCase();
    dataCategory.push(element);
}

// search feature Start
// function
const filter = (match, i) => {
    if (match) {
        card[i].setAttribute("style", "display:");
    } else {
        card[i].setAttribute("style", "display:none");
    }
};

// event listener
searchInput.addEventListener("keyup", function () {
    const searchInputValue = searchInput.value.toLowerCase();
    for (let i = 0; i < title.length; i++) {
        let match = dataTitle[i].includes(searchInputValue) || dataWriter[i].includes(searchInputValue);
        filter(match, i);
    }
    const cardTotal = document.querySelectorAll("#card");
    console.log(cardTotal);
    spanHeader.innerHTML = `" ${searchInputValue} "`;
});

for (let i = 0; i < buttonFilter.length; i++) {
    buttonFilter[i].addEventListener("click", function () {
        const buttonFilterValue = this.getAttribute("data-category").toLowerCase();
        console.log(buttonFilterValue);
        for (let i = 0; i < category.length; i++) {
            let match = dataCategory[i].includes(buttonFilterValue);
            filter(match, i);
            if (buttonFilterValue === "clear") {
                window.location.reload()
            }
        }
    });
}
// search feature End

// Pagination Start
const items = $(".item");
const numItems = items.length;
const perPage = 4;

items.slice(perPage).hide();
$("#pagination-container").pagination({
    items: numItems,
    itemsOnPage: perPage,
    prevText: "<",
    nextText: ">",
    onPageClick: function (pageNumber) {
        const showFrom = perPage * (pageNumber - 1);
        const showTo = showFrom + perPage;
        items.hide().slice(showFrom, showTo).show();
    },
});
// Pagination End
