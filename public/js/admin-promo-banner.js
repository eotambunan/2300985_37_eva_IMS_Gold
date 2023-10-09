// delete Banner Start
const deleteButton = document.querySelectorAll(".delete-button");
const deleteBannerEndPoint = "/admin/promo-banner/delete";

for (let i = 0; i < deleteButton.length; i++) {
    deleteButton[i].addEventListener("click", async (event) => {
        event.preventDefault();
        const bannerId = deleteButton[i].getAttribute("data-banner-id");
        const response = await fetch(deleteBannerEndPoint, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                id : bannerId
            }),
        });
        const json = await response.json()
        if(json.statusCode == 202){
            window.location.reload()
        }else if(json.statusCode == 400){
            alert("Failed to delete banner")
        }
    });
}

// delete Banner End
