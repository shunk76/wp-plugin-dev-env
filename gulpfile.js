'use strict'

const { src, dest, watch } = require('gulp')
const postcss = require('gulp-postcss')
const rename = require('gulp-rename')
const sass = require('gulp-sass')
const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')
const merge = require('gulp-merge-media-queries')
const browserSync = require('browser-sync').create()

const files_dir = './'
const src_dir = files_dir + 'src/'

const compileSass = () =>
  src(src_dir + 'scss/*.scss')
    .pipe(sass({
      outputStyle: 'expanded'
    }))
    .pipe(postcss([
      autoprefixer({ grid: true })
    ]))
    .pipe(merge())
    .pipe(dest(files_dir))
    .pipe(postcss([
      cssnano()
    ]))
    .pipe(rename({ suffix: '.min' }))
    .pipe(dest(files_dir))
    .pipe(browserSync.stream())

const serve = () => {
  browserSync.init({
    proxy: ''
  })

  watch(src_dir + 'scss/*.scss', compileSass)
  watch([files_dir + '*.php', files_dir + '*.js']).on('change', browserSync.reload)
}

exports.default = serve