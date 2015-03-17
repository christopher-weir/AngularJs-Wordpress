<!doctype html>
<html <?php language_attributes(); ?> class="no-js">
    <head>
        <meta charset="<?php bloginfo('charset'); ?>">
        <title><?php wp_title(''); ?><?php if(wp_title('', false)) { echo ' :'; } ?> <?php bloginfo('name'); ?></title>

        <link href="<?php echo get_template_directory_uri(); ?>/img/icons/favicon.ico" rel="shortcut icon">
        <link href="<?php echo get_template_directory_uri(); ?>/img/icons/touch.png" rel="apple-touch-icon-precomposed">

        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="<?php bloginfo('description'); ?>">

        <?php wp_head(); ?>

        <!-- build:js -->
            <script src="<?php echo get_template_directory_uri(); ?>/js/app.js"></script>
        <!-- endbuild -->

    </head>
    <body <?php body_class(); ?> ng-controller="SiteCtrl">

        <!-- wrapper -->
        <div class="wrapper" class="ng-cloak">

            <!-- header -->
            <header class="header clear" role="banner">

                    <!-- logo -->
                    <div class="logo">
                        <a href="<?php echo home_url(); ?>">
                            <!-- svg logo - toddmotto.com/mastering-svg-use-for-a-retina-web-fallbacks-with-png-script -->
                            <img src="<?php echo get_template_directory_uri(); ?>/img/logo.svg" alt="Logo" class="logo-img">
                        </a>
                    </div>
                    <!-- /logo -->

                    <!-- nav -->
                    <nav class="nav" role="navigation">
                        <?php html5blank_nav(); ?>
                    </nav>
                    <!-- /nav -->

            </header>
            <!-- /header -->
