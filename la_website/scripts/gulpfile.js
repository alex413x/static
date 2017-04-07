var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

gulp.task('styles', function() {
    return gulp.src([
        '../scss/la_website.scss'
    ])
    .pipe(sass({
        includePaths: [
            './bower_components/foundation-sites/scss'
        ]
    }))
    .pipe(concat('la_website.css'))
    .pipe(gulp.dest('../css'));
});

gulp.task('default', ['styles']);