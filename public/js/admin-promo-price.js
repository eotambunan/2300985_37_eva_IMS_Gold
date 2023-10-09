// add Promo button
const button = document.querySelectorAll("#add-promo");
const discount = document.getElementById("aselole");
const submitPromo = document.getElementById("save");
const addPromoEndPoint = "/admin/promo-price/add";

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", () => {
        const productId = button[i].getAttribute("data-product_id");
        event.preventDefault();
        submitPromo.addEventListener("click", async () => {
            const discountValue = discount.value;
            const response = await fetch(addPromoEndPoint, {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({
                    product_id: productId,
                    discount: discountValue,
                }),
            });
            const json = await response.json();
            if (json.statusCode == 202) {
                window.location.reload();
            } else if (json.statusCode == 400) {
                console.log("error bang messi");
            }
        });
    });
}
