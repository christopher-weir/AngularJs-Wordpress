<?php
/*
 *  Author: Christopher Weir | @dead_pony
 *  URL: https://github.com/christopher-weir/AngularJs-Wordpress
 *  Custom functions, support, custom post types and more.
 */

add_action('init', 'create_post_type_projects');


// Create custom post type for projects
function create_post_type_projects()
{
    register_taxonomy_for_object_type('category', 'projects'); // Register Taxonomies for Category
    register_taxonomy_for_object_type('post_tag', 'projects');
    register_post_type('projects', // Register Custom Post Type
        array(
        'labels' => array(
            'name' => __('Projects', 'projects'), // Rename these to suit
            'singular_name' => __('Project', 'projects'),
            'add_new' => __('Add New Project', 'projects'),
            'add_new_item' => __('Add New Project', 'projects'),
            'edit' => __('Edit', 'projects'),
            'edit_item' => __('Edit "Project"', 'projects'),
            'new_item' => __('New "Project" Page', 'projects'),
            'view' => __('View "Project" Page', 'projects'),
            'view_item' => __('View "Project" Page', 'projects'),
            'search_items' => __('Search "Project" Page', 'projects'),
            'not_found' => __('No "Project" Pages found', 'projects'),
            'not_found_in_trash' => __('No "Project" Pages found in Trash', 'projects')
        ),
        'public' => true,
        'hierarchical' => true, // Allows your posts to behave like Hierarchy Pages
        'has_archive' => true,
        'menu_position' => 5,
        'supports' => array(
            'title',
            'editor',
            'thumbnail'
        ),
        'can_export' => true, // Allows export in Tools > Export
        'taxonomies' => array() // Add Category and Post Tags support
    ));
}


// Load AngularTheme Styles
function angulartheme_styles()
{
    wp_register_style('AngularTheme', get_template_directory_uri() . '/style.css', array(), '1.0', 'all');
    wp_enqueue_style('AngularTheme'); // Enqueue it!
}

add_action('wp_enqueue_scripts', 'angulartheme_styles'); // Add Theme Stylesheet

function wp_api_encode_acf($data,$post,$context){
    $data['meta'] = array_merge($data['meta'],get_fields($post['ID']));
    return $data;
}

if( function_exists('get_fields') ){
    add_filter('json_prepare_post', 'wp_api_encode_acf', 10, 3);
}

remove_filter ('acf_the_content', 'wpautop');

?>
