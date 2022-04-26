$(document).ready(function () {    
  $( ".bold_options" ).on( "click", function() {
    var checkExistTime = setInterval(function () {
        if ($(".bold_option_title:contains('Hidden')").length > 0){
          setTimeout(function () {
            $(".bold_option_title:contains('Hidden')" ).hide();
            $(".bold_option_value_title:contains('Hidden')" ).hide();
            $(".bold_option_value_title:contains('Hidden')" ).parent().hide();
            $(".bold_option_title:contains('Hidden')" ).parent().addClass('CustomSwatch')
            $('.CustomSwatch .bold_option_value_swatch').css('width', '200px')
                                          .css('height', '200px');
            $('.CustomSwatch .bold_option_value_element')
            .css('box-shadow', '0 0 2px 1px .2')
            .css('border', '3px solid #fff')
          }, 10)
          clearInterval(checkExistTime);
        }
      })
  });


  var checkExistTime2 = setInterval(function () {
    if ($(".bold_option_title:contains('Hidden')").length > 0){
      setTimeout(function () {
        $(".bold_option_title:contains('Hidden')" ).hide();
        $(".bold_option_value_title:contains('Hidden')" ).hide();
        $(".bold_option_value_title:contains('Hidden')" ).parent().hide();
        $(".bold_option_title:contains('Hidden')" ).parent().addClass('CustomSwatch')
        $('.CustomSwatch .bold_option_value_swatch').css('width', '200px')
                                      .css('height', '200px');
        $('.CustomSwatch .bold_option_value_element')
        .css('box-shadow', '0 0 2px 1px .2')
        .css('border', '3px solid #fff')
      }, 10)
      clearInterval(checkExistTime2);
    }
  })
})
