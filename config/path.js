

const pathSrc = "./src";
const pathDest = "./public";

module.exports = {
    root: pathDest,
    html: {
        src: pathSrc + "/html/*.html",
        watch: pathSrc + "/html/**/*.html",
        dest: pathDest
    },
    css: {
        src: pathSrc + "/css/*.css",
        watch: pathSrc + "/css/**/*.css",
        dest: pathDest + "/css"
    },
    sass: {
        src: pathSrc + "/sass/*.scss",
        watch: pathSrc + "/sass/**/*.scss",
        dest: pathDest + "/sass"
    },
    js: {
        src: pathSrc + "/js/*.js",
        watch: pathSrc + "/js/**/*.js",
        dest: pathDest + "/js"
    },
    img: {
        src: pathSrc + "/img/*.{jpg,png,jpeg,gif,svg}",
        watch: pathSrc + "/img/**/*.{jpg,png,jpeg,gif,svg}",
        dest: pathDest + "/img"
    },
    fonts: {
        src: pathSrc + "/webfonts/*.{eot,ttf,otf,otc,ttc,ttc,woff,woff2,svg}",
        watch: pathSrc + "/webfonts/**/*.{eot,ttf,otf,otc,ttc,ttc,woff,woff2,svg}",
        dest: pathDest + "/webfonts"
    }

}