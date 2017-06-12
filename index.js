$(document).ready(function() {
  var wikiApi = "https://en.wikipedia.org/w/api.php?action=opensearch&search=";
  //when search button is clicked
  $("#search").click(function() {
    //create var for search text
    var searchTerm = $("#searchTerm").val();
    //create var to searchwiki with search term
    var searchUrl = wikiApi + searchTerm + "&format=json&callback=?";
    
    $.ajax({
      type: "GET",
      url: searchUrl,
      dataType: "json",
      success: function(data){
        //heading console.log(data[1][0]);
        //description console.log(data[2][0]);
        //link console.log(data[3][0]);
        $("#output").html("");
        for (var i=0; i < data[1].length; i++) {
          $("#output").append("<li><a target=blank href= " + data[3][i] + "><h4>" + data[1][i] + "</h4><p>" + data[2][i] + "</p></a></li>"); 
        }
        $("#searchTerm").val("");
      },
      error: function(error){
        alert("Retry");
      } 
    });
  });
  $("#searchTerm").keypress(function(e) {
      var keycode = (e.keyCode ? e.keyCode : e.which);
      if (keycode == "13")
        $("#search").click();
    });
});
