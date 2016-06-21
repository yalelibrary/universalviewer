module.exports = {
    sync: {
        // all files that need to be copied from /node_modules to /src/extensions/uv-mediaelement-extension/lib post npm install
        cwd: '<%= config.dirs.npm %>',
        expand: true,
        flatten: true,
        src: [

        ],
        dest: '<%= config.dirs.uvMediaElementExtension %>/lib'
    }
}