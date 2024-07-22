import * as net from "net";
import * as frida from "frida";
import { Hook, HookableProcesses } from "./frida/hook";
import { Game } from "./network/Game";
import { Logger } from "./tools/Logger";

// const HOOK_NAME = "Dofus.exe";
const HOOK_NAME = "Dofus";
const LISTEN_HOST = "127.0.0.1";
const LISTEN_PORT = 54321;

// function hex2bin(hex){
//     return (parseInt(hex, 16).toString(2)).padStart(8, '0');
// }

// console.log(Buffer.from("2b4bbaf9300", "hex").toString("utf8"));


HookableProcesses(HOOK_NAME).then((processes: frida.Process[]) => {

    if (processes.length === 0) {
        Logger.Error("Aucun processus " + HOOK_NAME + " trouvé");
        process.exit(1);
    }

    processes.forEach((process: frida.Process) => {
        Hook(process.pid, LISTEN_PORT, "true").then(() => {
            Logger.Info("Hooking du processus " + process.name + " [" + process.pid + "] effectué");
        }, (reason) => {
            Logger.Error("Erreur lors du hooking du processus " + process.name + " [" + process.pid + "]: " + reason);
        });
    });

});

const MITM = new net.Server();

MITM.on("connection", (cltSocket) => {
	new Game(cltSocket);
});

MITM.listen(LISTEN_PORT, LISTEN_HOST, () => {
	Logger.Info("Ecoute sur l'adresse " + LISTEN_HOST + "::" + LISTEN_PORT);
});


export const TEST_VAR = 150;