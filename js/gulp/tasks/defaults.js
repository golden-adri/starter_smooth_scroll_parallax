var gulp = require('gulp');





gulp.task('build', function() {

	gulp.watch('styles/sass/**/*.scss',['styles']);
	gulp.watch('js/*.js',['babel']);

	
});

gulp.task('default', ['build']);

