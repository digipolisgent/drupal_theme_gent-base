<?php

/**
 * @file
 * Helper class to support theming in the Gent Base theme.
 */

/**
 * ThemeHelper Class Doc Comment.
 *
 * Include this in the theme file to access the helper methods.
 *
 * @category Class
 * @package gent_base
 */
class ThemeHelper {

  /**
   * @param string $key
   *   The view mode key.
   *
   * @return mixed
   *   Returns the view mode if found.
   */
  public static function isViewMode($key) {
    return \Drupal::service('entity_type.manager')
      ->getStorage('entity_view_display')
      ->load($key);
  }

}
