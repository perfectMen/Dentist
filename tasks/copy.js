module.exports = ($) => {
	const copy = (dev, deploy) => 
		($.gulp.src(`${dev}`)
	    .pipe($.gulp.dest(`${deploy}`)))
	
	$.gulp.task('script-vendor', () => {
		copy(`./${$.dev.vendor}/**/*.js`, `./${$.deploy.vendor}`)
		copy(`./${$.dev.vendor}/**/*.css`, `./${$.deploy.vendor}`)
		copy(`./${$.dev.vendor}/**/*`, `./${$.deploy.vendor}`) 
		copy(`./${$.dev.img}/**/*`, `./${$.deploy.img}`)
	})
}