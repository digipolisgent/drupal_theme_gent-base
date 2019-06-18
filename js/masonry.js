/**
 * @file
 * Set up masonry for Gent base.
 */

(function ($) {

  /**
   * Make sure we have the Gent Base root namespace.
   */
  Drupal.gentBase = Drupal.gentBase || {};

  /**
   * Drupal behavior that applies masonry.
   *
   * Masonry will be applied to a grid using the multi-column-items class.
   * Individual items need to use the island class.
   */
  Drupal.behaviors.masonry = {
    attach: function (context) {
      $('.multi-column-items', context).once('masonry', Drupal.gentBase.initMasonry);
    }
  };

  /**
   * Callback function that applies masonry on the object.
   */
  Drupal.gentBase.initMasonry = function () {
    if (typeof $.fn.masonry !== 'undefined') {
      var that = $(this);

      that.masonry({
        itemSelector: 'article',
        columnWidth: '.island',
        isAnimated: true,
        gutter: '.gutter'
      });

      that.imagesLoaded(function () {
        that.masonry();
      });
    }
  };

  /**
   * Listener for the views_load_more new_content event.
   *
   * After a views load more has been executed, we need to reload masonry.
   */
  $(window).bind('views_load_more.new_content', function () {
    $('.multi-column-items').each(function () {
      var that  = $(this);
      that.imagesLoaded(function () {
        // Anything new will not be positioned by masonry and still have
        // a relative position.
        var $new_items = $('.island:not(:absolute)');
        // Let masonry know about the items and re-tile the layout
        that.masonry('appended', $new_items).masonry('layout');
      });
    });
  });

})(jQuery);