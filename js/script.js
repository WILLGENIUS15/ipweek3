$(document).ready(function () {
   $("#form1").submit(function (event){
      event.preventDefault();
       var val1 = parseInt($("[name=variable]:checked").val());
       var val2 = parseInt($("[name=sub]:checked").val());
       var val3 = parseInt($("[name=con]:checked").val());
       var val4 = parseInt($("input[name=t]:checked").val());
       var val5 = parseInt($("input[name=b]:checked").val());
       var val6 = parseInt($("input[name=c]:checked").val());
       var val7 = parseInt($("input[name=d]:checked").val());
       var val8 = parseInt($("input[name=e]:checked").val());
       var val9 = parseInt($("input[name=f]:checked").val());
       var val10 = parseInt($("input[name=g]:checked").val());

       var result = parseInt(val1 + val2 + val3 + val4 + val5 + val6 +val7 + val8 + val9 + val10);

       $("#output").text("Your score is: " + result);
});
});
