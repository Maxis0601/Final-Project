const $gulp = require( 'gulp' );
const $autoprefixer = require( 'gulp-autoprefixer' );
const $cssmin = require( 'gulp-cssmin' );
const $rename = require( 'gulp-rename' );
const $sass = require( 'gulp-sass' );
const {
    dest: $trg,
    series: $series,
    src: $src,
    task: $task,
    watch: $watch
} = $gulp;

$task( 'styles:init', () =>
    $src( 'src/styles/main.scss' )
        .pipe( $sass().on('error', $sass.logError) )
        .pipe( $autoprefixer({
            overrideBrowserslist: ['last 2 versions'],
            cascade: false,
        }))
        .pipe( $cssmin() )
        .pipe( $rename({suffix: '.min'}) )
        .pipe( $trg( 'public/css/' ) )
);

$task( 'styles:watch', () =>
    $watch( 'src/styles/**/*.scss', $series( 'styles:init' ) )
);

$task( 'scss', $series( 'styles:init', 'styles:watch' ) );

