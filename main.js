$(document).ready(function() {
	$.getJSON('https://api.etsy.com/v2/listings/active.js?api_key=h9oq2yf3twf4ziejn10b717i&keywords=whiskey&includes=Images,Shop&callback=?', function(data){
  console.log(data)



  
  var itemsHTML = ''

  data.results.forEach(function(item){
  item.Images.forEach(function(image){ 

  
      var template = `
        <div class= "smaller">
          <a href=${item.url} ><img class="smallImg" src=${image.url_170x135}></a>
          <div id="imgText">
            <h4 class="imgTitle">${item.title}</h4>
            <p id="maker">${item.Shop.shop_name}</p>
            <p id="pricing">$${item.price}</p>
          </div>
        </div>
      `

      itemsHTML += template

    })
    })


    $('.section1').html(itemsHTML)

  })
})
  
