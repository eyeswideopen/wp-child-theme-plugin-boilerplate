<?php
/*
Plugin Name: <project name> Custom Plugin
Description: Plugin for extended custom functionality for the <project name> website
*/
/* Start Adding Functions Below this Line */


//get the style and js stuff going
	//wp_enqueue_style( 'photostack_style', plugins_url('photostack/css/photostack.css', __FILE__) );

function add_scripts()
{
    // Register the script like this for a plugin:
    //dependencies are needed to override theme js functions

    wp_register_script( '<project name>', plugins_url( '/js/<project name>.min.js', __FILE__ ) , array( 'jquery' ),'',true);

    //CSS
    //wp_register_style( '<project name>-css', plugins_url( '/css/style.min.css', __FILE__ ),'','', 'all' );

    //dequeue bridge theme default js to override properly with own version
    //wp_register_script( 'default', plugins_url( '/js/default.js', __FILE__ ) , '','',true);

    // For either a plugin or a theme, you can then enqueue the script:
    wp_enqueue_script('<project name>');

    //wp_enqueue_style('<project name>-css');
    //wp_enqueue_script('default');

}
//15 is the priority. 10 is default and 15 is chosen to ensure the stlyes are loaded after other ones
add_action( 'wp_enqueue_scripts', 'add_scripts', 15 );

?>
