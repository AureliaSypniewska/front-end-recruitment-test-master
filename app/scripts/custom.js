(function() {
$(document).ready(function(){
  $("button#clone").click(function(){
    $("#image img").clone().appendTo("#image");
  });
});
})();