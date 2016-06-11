module.exports = ($) => {
	$.gulp.task('server', () => {
		require(`./../${$.server}/server`)($) 
	}); 
}