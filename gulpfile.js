'use strict';

const $gulp = require('gulp'),
      $autoprefixer = require('gulp-autoprefixer'),
      $uglify = require('gulp-uglify'),
      $sass = require('gulp-sass'),
      $sourcemaps = require('gulp-sourcemaps'),
      $rename = require( 'gulp-rename' ),
      $rigger = require('gulp-rigger'),
      $cssmin = require('gulp-cssmin'),
      $imagemin = require('gulp-imagemin'),
      $pngquant = require('imagemin-pngquant');


const {
    dest: $trg,
    series: $series,
    src: $src,
    task: $task,
    watch: $watch
} = $gulp;

$task( 'default:init', () =>
    $src( 'src/*.html' )
        .pipe($rigger())
        .pipe($trg('public/')),
    $src( 'src/styles/main.scss' )
        .pipe( $sass().on('error', $sass.logError) )
        .pipe($sourcemaps.init())
        .pipe( $autoprefixer({
            overrideBrowserslist: ['last 2 versions'],
            cascade: false,
        }))
        .pipe( $cssmin() )
        .pipe($sourcemaps.write())
        .pipe( $rename({suffix: '.min'}) )
        .pipe( $trg( 'public/styles/' ) ),
    $src( 'src/scripts/main.js')
        .pipe($rigger())
        .pipe($sourcemaps.init())
        .pipe($uglify())
        .pipe( $rename({
            basename: 'script',
            suffix: '.min'
        }) )
        .pipe($sourcemaps.write())
        .pipe($trg( 'public/scripts/')),
    $src ('src/img/**/*.*')
        .pipe($imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [$pngquant()],
            interlaced: true
        }))
        .pipe($trg('public/img/'))
);

$task( 'default:watch', () =>
    $watch( 'src/**/*.html', $series( 'default:init' ) ),
    $watch(  'src/styles/**/*.scss', $series( 'default:init' ) ),
    $watch(  'src/scripts/**/*.js', $series( 'default:init' ) ),
    $watch(  'src/img/**/*.*', $series( 'default:init' ) )
);

$task( 'default', $series( 'default:init', 'default:watch' ) );
