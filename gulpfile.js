const {src, watch, dest, series} = require('gulp')
const sass = require('gulp-sass')(require('sass'))

function buildStyles(){
    return src('index.scss').pipe(sass()).pipe(dest('css'))
}

function watchTask(){
    watch(['index.scss'],buildStyles);
    watch(['_navs.scss'],buildStyles);
    watch(['_vars.scss'],buildStyles);
}

exports.default = series(buildStyles,watchTask);