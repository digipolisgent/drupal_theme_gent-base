<?php

/**
 * @file
 * HTML template file.
 */
?>
<!DOCTYPE html>
<html lang="<?php print $language->language; ?>" dir="<?php print $language->dir; ?>"<?php print $rdf_namespaces; ?>>
<head>
  <title><?php print $head_title; ?></title>

  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
  <meta http-equiv="cleartype" content="on" />
  <?php print $head; ?>
  <meta name="HandheldFriendly" content="True" />
  <meta name="MobileOptimized" content="320" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <?php if (!empty($type_kit_id)) :?>
  <!-- Load Typekit -->
  <script>
    (function(d) {
      var config = {
          kitId: '<?php print $type_kit_id; ?>',
          scriptTimeout: 3000,
          async: true
        },
        h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
    })(document);
  </script>
  <?php endif; ?>


  <?php print $styles; ?>

  <?php if (isset($head_scripts)): ?>
    <?php print $head_scripts; ?>
  <?php endif; ?>

  <meta name="msapplication-TileImage" content="<?php print $base_theme_path ?>mstile-144x144.png" />
  <meta name="msapplication-TileColor" content="#009de0">
  <meta name="msapplication-square310x310logo" content="<?php print $base_theme_path ?>mstile-310x310.png" />
  <meta name="msapplication-wide310x150logo" content="<?php print $base_theme_path ?>mstile-310x150.png" />
  <meta name="msapplication-square150x150logo" content="<?php print $base_theme_path ?>mstile-150x150.png" />
  <meta name="msapplication-square70x70logo" content="<?php print $base_theme_path ?>mstile-70x70.png" />
  <link rel="apple-touch-icon" sizes="57x57" href="<?php print $base_theme_path ?>apple-touch-icon-57x57.png" />
  <link rel="apple-touch-icon" sizes="114x114" href="<?php print $base_theme_path ?>apple-touch-icon-114x114.png" />
  <link rel="apple-touch-icon" sizes="72x72" href="<?php print $base_theme_path ?>apple-touch-icon-72x72.png" />
  <link rel="apple-touch-icon" sizes="144x144" href="<?php print $base_theme_path ?>apple-touch-icon-144x144.png" />
</head>

<body<?php print $attributes;?>>

  <?php print $page_top; ?>
  <div id="rs_area">
  <!-- RSPEAK_STOP -->
  <?php print $page; ?>
  </div>

  <?php print $scripts; ?>

  <?php print $page_bottom; ?>

  <?php if (isset($closure)): ?>
    <?php print $closure; ?>
  <?php endif; ?>
</body>
</html>
