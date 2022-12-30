const { readdirSync } = require("fs");
const path = require("path");

const createWebpackAlias = (srcDir = 'src') => {
    return {
        extensions: ['.ts', '.tsx', '.js', '.json', '.png', '.svg', '.css', 'less'],
        alias: readdirSync(path.resolve(srcDir), { withFileTypes: true })
            .filter((dirent) => dirent.isDirectory())
            .map((dirent) => dirent.name)
            .reduce(
                (aliases, folderName) => ({
                    ...aliases,
                    [`$${folderName}`]: path.resolve(`${srcDir}/${folderName}`),
                }),
                {},
            ),
    };
};

module.exports = {
    createWebpackAlias,
};