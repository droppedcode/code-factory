module.exports = function (gulp, plugins, task) {
  let sourceRoot = './images/';
  let sourcePath = [
    sourceRoot + '**/*.{png,jpg,svg}'
  ];
  let destinationPath = './../release/wwwroot/images/';

  return {
    default: function (callback) {
      plugins.runSequence(task + ':clean', task + ':build', callback);
    },
    release: function (callback) {
      plugins.runSequence(task + ':clean', task + ':build', callback);
    },
    'release-aot': function (callback) {
      plugins.runSequence(task + ':clean', task + ':build', callback);
    },
    build: function () {
      return gulp.src(sourcePath)
        .pipe(gulp.dest(destinationPath));
    },
    clean: function () {
      return gulp.src([destinationPath])
        .pipe(plugins.clean({force: true}));
    },
    watch: function () {
      return gulp.watch(sourcePath, [task]);
    }
  };
};