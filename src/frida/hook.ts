import * as frida from "frida";
import { inject } from "./inject";
import { config } from "../config";

export class FridaHookManager {

    public static async initialize(): Promise<void> {

        try {

            const processes = await this.getHookableProcesses(config.hook.search);

            if (processes.length === 0) {
                console.log("No process found matching the regex '" + config.hook.search.source + "'");
                process.exit(1);
            }

            for (const process of processes) {
                try {
                    await this.hookProcess(process.pid);
                    console.log("Hooking of process " + process.name + " [" + process.pid + "] done");
                } catch (reason) {
                    console.log(reason);
                }
            }

        } catch (error) {
            console.error("Error while getting hookable processes:", error);
            process.exit(1);
        }

    }

    public static async getHookableProcesses(regex: RegExp): Promise<frida.Process[]> {
        const device = await frida.getLocalDevice();
        const processes = await device.enumerateProcesses();
        return processes.filter(process => regex.test(process.name));
    }

    public static async hookProcess(pid: number): Promise<void> {
        try {
            const session = await frida.attach(pid);
            const scriptCode = `(${inject.toString()})("${config.mitm.host}", ${config.mitm.port}, [${config.hook.redirectPorts}]);`;
            const script = await session.createScript(scriptCode);
            await script.load();
        } catch (error) {
            throw new Error("Error while hooking process " + pid + ": " + error.message);
        }
    }
}