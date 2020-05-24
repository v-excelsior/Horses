const gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync').create(),
    cleanCSS = require('gulp-clean-css'),
    sourcemaps = require('gulp-sourcemaps');
rename = require('gulp-rename');

gulp.task('sass', function () {
    return gulp.src('./css/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.stream());
});

gulp.task('minify-css', () => {
    return gulp.src('css/style.css')
        .pipe(sourcemaps.init())
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(cleanCSS())
        .pipe(rename({ suffix: '.min' }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./css'));
});

gulp.task('watchAll', function () {
    browserSync.init({
        server: {
            baseDir: "./",
        }
    });
    gulp.watch('./css/scss/**/*.scss', gulp.series('sass', 'minify-css')).on('change', browserSync.reload);
    gulp.watch('./*.html').on('change', browserSync.reload);

});

gulp.task("default", gulp.series(gulp.parallel("watchAll")));