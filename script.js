$("#button").click(function() {
    var txt1 = $("#new").val();
    $("ol").append('<li>' +txt1+' '+'<button id="cancle">x</button>'+ '</li>');

  });

  $(document).on('click','button', function(){
          $(this).parent().fadeOut('slow');
        });
// $('#cancle').click(function(){
//   $(this).parent().fadeOut('slow');
// })
// var re= $('#cancle');
// re.toggleClass('strike').fadeOut('slow');
