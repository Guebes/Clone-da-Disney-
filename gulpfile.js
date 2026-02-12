const pkgGulp = require('gulp');
const pkgSass_GulpSass = require('gulp-sass')(require('sass'))

//1 - Função para compilar o Sass
function SassCss(){
    //Quero que essa função execute..
    return pkgGulp.src('./source/styles/*.scss')
    .pipe(
        pkgSass_GulpSass({
            outputStyle:'compressed'
        })
    )
    .pipe(pkgGulp.dest('./build/styles'))
}

function observar(){
    //watch() precisa de dois argumentos, sendo eles o caminho do(s) arquivo(s) que vai observar e a função que vai ser disparada
    pkgGulp.watch('./source/styles/*.scss', pkgGulp.parallel(SassCss))
}

exports.default = SassCss;
exports.watch = observar;