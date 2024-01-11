

$(document).ready(function() {
        $('.gallery-item').hover(
          function() {
            // Mouse enters the element
            $(this).find('.caption').css({
              'transform': 'translateY(0%)',
              'opacity': '1'
            });
          }, function() {
            // Mouse leaves the element
            $(this).find('.caption').css({
              'transform': 'translateY(100%)',
              'opacity': '0'
            });
          }
        );
      });
      