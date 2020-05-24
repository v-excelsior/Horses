let gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync').create()

gulp.task('sass', function () {
    return gulp.src('./src/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/css'))
        .pipe(browserSync.stream());
});

gulp.task('watchAll', function () {
    browserSync.init({
        server: {
            baseDir: "./",
        }
    });
    gulp.watch('./src/sass/**/*.scss', gulp.series('sass'));
    gulp.watch('./*.html').on('change', browserSync.reload);
});

gulp.task("default", gulp.series(gulp.parallel("watchAll")));