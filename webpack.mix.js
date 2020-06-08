const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

if(!mix.inProduction()){
    mix.postCss('src/datepicker.css', 'dev/vue-datepicker.css', [
        require('tailwindcss'),
    ])
}

if(mix.inProduction()){
    mix.postCss('src/datepicker.css', 'dist/vue-datepicker.css', [
        require('tailwindcss'),
    ])
}