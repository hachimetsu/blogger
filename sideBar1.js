!function () {
    const showNavbar = () => {
      $('#header-toggle').on("click", () => {
          console.log($(this).text());
          // show navbar
          $('#nav-bar').toggleClass('show');
          // change icon
          $('#header-toggle').toggleClass('bx-x');
          // add padding to body
          // $('#body-pd').toggleClass('body-pd')
          // add padding to header
           $('#header').toggleClass('body-pd');
          $('#content').toggleClass('bg-light');
      });
    };
  if($('#header-toggle'))   showNavbar();
  
//     /*===== LINK ACTIVE =====*/
  const $linkColor = $('.nav_link');
    $linkColor.forEach($l => $l.on("click", () => {
      if ($linkColor) {
            $linkColor.forEach($l => $l.removeClass('active'))
            $(this).addClass('active')
        }
    }))
  
}(jQuery);
