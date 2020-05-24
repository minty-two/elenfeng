// Require Tasks
var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var del = require('del');
var runSequence = require('run-sequence');
var concat = require('gulp-concat');
var util = require("gulp-util");
// Development Tasks
// -----------------
// Start browserSync server
function startBrowserSync(done) {
  browserSync({
    server: {
      baseDir: 'app'
    }
  })
  done();
}
//
function compileSass(done) { //never call it scss/sass/css
  gulp.src('./app/scss/styles.scss') //
    .pipe(sass().on('error', sass.logError)) //
    .pipe(gulp.dest('./app/css')) //
    .pipe(concat('styles.min.css')) //
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({
      stream: true
    }));
  done();
}
//
function watcher(done) {
  gulp.watch('./app/scss/**/*.scss', compileSass);
  gulp.watch('./app/*.html', browserSync.reload);
  gulp.watch('./app/js/**/*.js', browserSync.reload);
  done();
}
// Optimization Tasks
// ------------------
// Optimizing CSS and JavaScript
function compileHTML(done) {
  return gulp.src('app/*.html')//
  .pipe(useref())//
  .pipe(gulp.dest('dist'));
  done();
}
// Optimizing CSS and JavaScript
function compileCss(done) {
  return gulp.src('app/css/**/*.css') //
    .pipe(gulp.dest('dist/css'));
  done();
}

// Optimizing CSS and JavaScript
function scripts(done) {
  return gulp.src('app/js/**/*.js')//
  .pipe(gulp.dest('dist/js'));
  done();
}
function uglifyScript(done) {
  return gulp.src('dist/js/**/*.js') //
    .pipe(uglify())//
    .pipe(concat('main.min.js'))//
    .pipe(gulp.dest('dist/js'));
  done();
}
// Optimizing Images
function images(done) {
  return gulp.src('app/img/**/*.+(png|jpg|jpeg|gif|svg)')
    // Caching images that ran through imagemin
    // .pipe(cache(imagemin({
    //   interlaced: true,
    // })))
    .pipe(gulp.dest('dist/img'));
  done();
}
// Copying fonts
function fonts(done) {
  return gulp.src('app/fonts/**/*').pipe(gulp.dest('dist/fonts'));
  done();
}
// Cleaning
function clean(done) {
  del.sync('dist', function() {
    return cache.clearAll();
  });
  done();
}
//
function cleanDist(done) {
  del.sync(['dist/**/*', '!dist/img', '!dist/img/**/*']);

  done();
}
// Build Sequences
// ---------------
function message(done) {
  util.log(util.colors.magenta("------------------------------------------------------"));
  util.log(util.colors.magenta("gulp watch"), util.colors.cyan("|"), "Compile SCSS, start BrowserSync and Watch");
  util.log(util.colors.cyan("------------------------------------------------------"));
  util.log(util.colors.magenta("gulp build"), util.colors.cyan("|"), "Build out the dist folder");
  util.log(util.colors.magenta("------------------------------------------------------"));
  done();
}
const dist = gulp.series(compileHTML, compileCss, scripts, uglifyScript, images, fonts);
const build = gulp.series(compileSass, cleanDist, clean, dist);
const watch = gulp.parallel(compileSass, compileCss, startBrowserSync, watcher);
//
// export tasks

// exports.clean = clean;
// exports.images = images;
// exports.sass = compileSass;
// exports.css = compileCss;
// exports.scripts = scripts;
// exports.test = compileHTML;
// exports.build = build; still needs testing
exports.build = build;
exports.watch = watch;
exports.default = message;
