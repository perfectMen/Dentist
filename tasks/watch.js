module.exports = ($) => {
	$.gulp.task('watch', function() {
		$.gulp.watch(`./${$.dev.dir}/**/*.js`, ['scripts'])
		$.gulp.watch(`./${$.dev.dir}/**/*.jade`, ['jade'])
		$.gulp.watch(`./${$.dev.dir}/**/*.styl`, ['stylus'])

		return $.gulp.watch([`./${$.deploy.dir}/**/*`], (event) => {
            const FILE_NAME = $.path.relative(__dirname, event.path)

            $.tinylr.changed({
                body: {
                    files: [FILE_NAME]
                }
            })
        })
	})
}