import {exec} from "child_process";

export const tscAlias = () => {
    return {
        name: "tscAlias",
        writeBundle: () => {
            return new Promise((resolve, reject) => {
                exec("tsc-alias", function callback(error, stdout, stderr) {
                    if (stderr || error) {
                        reject(stderr || error);
                    } else {
                        resolve(stdout);
                    }
                });
            });
        },
    };
};
