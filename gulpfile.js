
var gulp = require( 'gulp' );
var gutil = require( 'gulp-util' );
var ftp = require( 'vinyl-ftp' );

const globs = [
    "vue/*",
    "template-frame.php"
];

function deploy () {

    const conn = ftp.create({
        host: '91.219.194.6',
        user: 'bh64997',
        password: 'B7XMC074T2hD476',
        parallel: 10,
        log: gutil.log
    });
    
   

    // using base = '.' will transfer everything to /public_html correctly
    // turn off buffering in gulp.src for best performance

    return gulp.src(globs, {base: '.', buffer: false})
        .pipe(conn.newer( '/yelka.wonser.ru/wp-content/themes/yelka' ))
        .pipe(conn.dest('/yelka.wonser.ru/wp-content/themes/yelka'));
};


gulp.task('watch', ()=>{
    gulp.watch(globs, deploy);
})
