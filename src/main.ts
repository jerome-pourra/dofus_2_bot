import * as util from "util";
import * as frida from "frida";
import { Hook, HookableProcesses } from "./frida/hook";
import { Mitm } from "./network/Mitm";

const HOOK_NAME = "Dofus";
const LISTEN_HOST = "127.0.0.1";
const LISTEN_PORT = 54321;

new Mitm(LISTEN_HOST, LISTEN_PORT);

HookableProcesses("Dofus").then((processes: frida.Process[]) => {

    if (processes.length === 0) {
        console.log("Aucun processus " + HOOK_NAME + " trouvé");
        process.exit(1);
    }

    processes.forEach((process: frida.Process) => {
        Hook(process.pid, LISTEN_PORT, "true").then(() => {
            console.log("Hooking du processus " + process.name + " [" + process.pid + "] effectué");
        }, (reason) => {
            console.log("Erreur lors du hooking du processus " + process.name + " [" + process.pid + "]: " + reason);
        });
    });

});