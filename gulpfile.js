const $gulp = require( 'gulp' );
const $autoprefixer = require( 'gulp-autoprefixer' );
const $cssmin = require( 'gulp-cssmin' );
const $rename = require( 'gulp-rename' );
const $sass = require( 'gulp-sass' );
const $sourcemaps = require('gulp-sourcemaps');
const {
    dest: $trg,
    parallel: $parallel,
    series:$series,
    src: $src,
    task: $task,
    watch: $watch
} = $gulp;

$task( 'scss:init', () =>
    $src( 'src/scss/styles.scss' )
        .pipe( $sourcemaps.init() )
        .pipe( $sass().on('error', $sass.logError) )
        .pipe( $autoprefixer({
            overrideBrowserslist: ['last 2 versions'],
            cascade: false,
        }))
        .pipe( $cssmin() )
        .pipe( $rename({suffix: '.min'}) )
        .pipe( $sourcemaps.write() )
        .pipe( $trg( 'public/' ) )
);

$task( 'scss:watch', () =>
    $watch( 'src/scss/**/*.scss', $series( 'scss:init' ) )
);

$task( 'scss', $series( 'scss:init', 'scss:watch' ) );

