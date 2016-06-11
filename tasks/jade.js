module.exports = ($) => {

	$.gulp.task('jade', () => {
	
	  	$.gulp.src([
	  		`./${$.dev.dir}/**/**/*.jade`,
	  		`!./${$.dev.dir}/_**/**/**/*.jade`
	  	])

	  	.pipe($.data( (file) => $.fn.dataJade(file) ))
	    .pipe($.jade({ pretty: true }))
	    .pipe($.gulp.dest(`${$.deploy.dir}`))	
	})

}