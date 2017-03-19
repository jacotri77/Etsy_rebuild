$(document).ready(function() {
	$.getJSON('https://api.etsy.com/v2/listings/active.js?api_key=h9oq2yf3twf4ziejn10b717i&keywords=whiskey&includes=Images,Shop&callback=?', function(data){
  console.log(data)

  
  var itemsHTML = ''

  data.results.forEach(function(item){
  
      var image = item.Images[0].url_fullxfull
      var template = `
        <div class= "smaller">
          <a href=${item.url}><img class="smallImg" src=${image}></a>
          <div id="imgText">
            <h4 class="imgTitle">${item.title}</h4>
            <p id="maker">${item.Shop.shop_name}</p>
            <p id="pricing">$${item.price}</p>
          </div>
        </div>

      `

      itemsHTML += template
    
    
    
})

    $('.section1').html(itemsHTML)

  })

  $("#signIns").hover(function(mouseenter){
    $(this).css("background-color", "rgba(52,168,196,.20)")
    }, 
      function(mouseleave){
      $(this).css("background-color", "white")
  })

    $(".leftnav button").hover(function(mouseenter){
      $(this).css("background-color", "rgba(52,168,196,.85)")
    }, 
      function(mouseleave){
      $(this).css("background-color", "rgb(52,168,196)")
    })

    $("a").hover(function(mouseenter){
      $(this).css("text-decoration", "underline", "#ccc")
    }, 
      function(mouseleave){
      $(this).css("text-decoration", "none")
    })


})
  
