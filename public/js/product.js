$(".product-id").on('click', function (){
    const productId = $(this).data('product-id')
    $(".confirm-delete").on('click',function() {
        $.ajax({
            url: `/admin/product/${productId}`,
            type: 'POST',
            success : function(response){
                window.location.reload()
                console.log("success delete");
            },
            error: function(error){
                console.error(error);
            }
        })
    })
})