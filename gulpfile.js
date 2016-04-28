var $gulp = require('gulp'),
    $jade = require('gulp-jade');


$gulp.task('html', function () {
    return $gulp.src([
        'src/jade/*.jade',
    ]).pipe($jade({
        pretty: '\t'
    })).pipe($gulp.dest('var/build'));
});

$gulp.task('default', ['html']);
