module.exports = ($) => {

	$.gulp.task('default', (cb) => {
	  	$.runSequence(
	  		'clean:deploy', 
	  		'scripts',
	        [
	        	'stylus', 
	        	'jade',
	        	'watch',
	        	'server'
	        ],
	    cb);
	}); 
}
