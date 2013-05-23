$(document).ready(function(){
  $("#get_color").click(function(e){
    e.preventDefault();
    $.post("/color", function(response){
      var li_array = $("#color_me").find('li')
      $(li_array[response.cell-1]).css("background-color", response.color);
    }, "json");
  });
});
