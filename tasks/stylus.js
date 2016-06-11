module.exports = ($) => {
	$.gulp.task('stylus', () => {
		return $.gulp.src([
				`./${$.dev.dir}/**/*.styl`,
				`!./${$.dev.dir}/_**/**/**/*.styl`
			])
	    	.pipe($.stylus())
	    	.pipe($.gulp.dest(`./${$.deploy.dir}/`));
	})
}