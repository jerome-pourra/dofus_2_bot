import * as frida from "frida";
import * as fs from "fs";
import { inject } from "./inject";
import { config } from "../config";

const SCRIPT = fs.readFileSync("dist/frida/inject.js");

export async function HookableProcesses(regex: RegExp) {
    const device = await frida.getLocalDevice();
    const processes = await device.enumerateProcesses();
    return processes.filter(process => regex.test(process.name));
}

export async function Hook(pid: number, port: number = 8080, filter: string = "true") {

    return new Promise<void>((resolve, reject) => {

        let script = SCRIPT.toString("utf8").replace("__PORT__", port.toString()).replace("__FILTER__", filter);

        frida.attach(pid).then((session) => {
            session.createScript(`(${inject.toString()})("${config.mitm.host}", ${config.mitm.port}, [${config.hook.redirectPorts}]);`).then((script) => {
                script.load().then(() => {
                    resolve();
                }, (reason) => {
                    reject(reason);
                });
            }, (reason) => {
                reject(reason);
            });
        }, (reason) => {
            reject(reason);
        });

    });

}