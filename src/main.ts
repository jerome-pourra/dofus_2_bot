import * as frida from "frida";
import { Hook, HookableProcesses } from "./frida/hook";
import { Mitm } from "./network/Mitm";
import { config } from "./config";

// process.exit(0);

new Mitm(config.mitm.host, config.mitm.port);

HookableProcesses(config.hook.search).then((processes: frida.Process[]) => {

    if (processes.length === 0) {
        console.log("No process found matching the regex '" + config.hook.search.source + "'");
        process.exit(1);
    }

    processes.forEach((process: frida.Process) => {
        Hook(process.pid, config.mitm.port, "true").then(() => {
            console.log("Hooking of process " + process.name + " [" + process.pid + "] done");
        }, (reason) => {
            console.log("Error while hooking process " + process.name + " [" + process.pid + "]: " + reason);
        });
    });

});