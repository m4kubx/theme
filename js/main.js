//Get references
imagePreview = $(".main-image img");
figcaptionPreview = $(".main-image figcaption");
pricePreview = $(".preview span");

$(document).on("ready", function() {
	//Setting product's prices on daily deals
	$(".product-price").each(function() {
		$(this).text(+$(this).data("price"));		
	});
});

// Set product selected on preview
$(".product").on("click", function() {
	var image = $(this).find("img").attr("src");
	var description = $(this).find("span").data("description");
	var price = $(this).find("span").data("price");
	imagePreview.attr("src", image);
	figcaptionPreview.text(description);
	pricePreview.text(price)
});