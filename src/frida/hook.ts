import * as frida from "frida";
import * as fs from "fs";

const SCRIPT = fs.readFileSync("dist/frida/inject.js");

export async function HookableProcesses(filter: string) {
    const device = await frida.getLocalDevice();
    const processes = await device.enumerateProcesses();
    return processes.filter(process => process.name.includes(filter));
}

export async function Hook(pid: number, port: number = 8080, filter: string = "true") {

    return new Promise<void>((resolve, reject) => {

        let script = SCRIPT.toString("utf8").replace("__PORT__", port.toString()).replace("__FILTER__", filter);

        frida.attach(pid).then((session) => {
            session.createScript(script).then((script) => {
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