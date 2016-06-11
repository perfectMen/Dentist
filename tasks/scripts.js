module.exports = ($) => {
	$.gulp.task('scripts', ['script-vendor'], () => {

		return $.gulp.src([
				`./${$.dev.dir}/**/*.js`,
				`!./${$.dev.dir}/_**/**/*.js`
			]) 
			.pipe($.babel({ presets: ['es2015'] }))
			.pipe($.gulp.dest(`./${$.deploy.dir}/`))	
	})
}