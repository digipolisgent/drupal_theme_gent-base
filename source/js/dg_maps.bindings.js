/* global allieTabs */

/**
 * @file
 * Filter component binding.
 */
(function (Drupal) {
  'use strict';

  Drupal.behaviors.gentBaseLoadDGMaps = {
    attach: function (context, settings) {
      if (!allieTabs) { // eslint-disable-line no-undef
        return;
      }

      var selected = document.querySelectorAll('.js-map-tabs');
      for (var i = selected.length; i--;) {
        allieTabs.init(selected[i], {
          changeTab: function (tab, tabs, tabpanels, component, init) {
            for (var i = tabs.length; i > 0; i--) {
              tabs[i - 1].setAttribute('aria-selected', false);
              tabs[i - 1].tabIndex = -1;
            }

            tab.setAttribute('aria-selected', true);
            tab.tabIndex = 0;

            for (var i = tabpanels.length; i > 0; i--) {
              tabpanels[i - 1].setAttribute('aria-hidden', true);
            }

            var tabpanel = component.querySelector(tab.hash);
            if (tabpanel) {
              tabpanel.setAttribute('aria-hidden', false);

              if (!init) {
                tab.focus();
              }
            }
          }
        });
      }
    }
  };
})(Drupal);
