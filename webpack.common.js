const path = require("path");
const fs = require("fs");
var HTMLWebpackPlugin = require("html-webpack-plugin");

// List all files in a directory in Node.js recursively in a synchronous fashion
// https://gist.github.com/kethinov/6658166#gistcomment-1976458
const walkSync = (dir, filelist = []) => {
    fs.readdirSync(dir).forEach((file) => {
        filelist = fs.statSync(path.join(dir, file)).isDirectory() ?
            walkSync(path.join(dir, file), filelist) :
            filelist.concat(path.join(dir, file));
    });
    return filelist;
};

const dir = "src/pages";
const pages = walkSync(dir).map((el) => el.slice(dir.length + 1));

console.log(pages);

module.exports = {
    entry: {
        index: "./src/index.js",
        content: "./src/js/content.js",
        members: "./src/js/members.js",
        attributions: "./src/js/attributions.js",
        memes: "./src/js/memes.js"
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
    devtool: "none", // avoid eval statements
    // https://stackoverflow.com/questions/44557802/how-to-create-multiple-pages-in-webpack
    plugins: [
        new HTMLWebpackPlugin({
            filename: "index.html",
            template: "./src/index.pug",
            excludeChunks: ["content", "members", "attributions", "memes"],
        }),
        ...pages.map(
            (page) =>
            new HTMLWebpackPlugin({
                template: "./src/pages/" + page,
                filename: page.slice(0, -4) + "/index.html",
                excludeChunks: ["index", "members", "attributions", "memes"],
            })
        ),
        new HTMLWebpackPlugin({
            filename: "Members/index.html",
            template: "./src/pages/Members.pug",
            excludeChunks: ["index", "content", "attributions", "memes"],
        }),
        new HTMLWebpackPlugin({
            filename: "Attributions/index.html",
            template: "./src/pages/Attributions.pug",
            excludeChunks: ["index", "content", "members", "memes"],
        }),
        new HTMLWebpackPlugin({
            filename: "Memes/index.html",
            template: "./src/pages/Memes.pug",
            excludeChunks: ["index", "content", "members", "attributions"]
        })
    ],
    module: {
        rules: [{
            test: /\.pug$/,
            use: ["pug-loader"],
        }, ],
    },
};