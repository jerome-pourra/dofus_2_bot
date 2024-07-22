try {
    
    const REDIRECT_PORTS = [443, 5555];
    function filter(sa_family: number, addr: string, port: number): boolean {
        // @ts-ignore
        return __FILTER__;
    }
    
    let connect_p = Module.getExportByName(null, "connect");
    let send_p = Module.getExportByName(null, "send");
    let socket_send = new NativeFunction(send_p, "int", ["int", "pointer", "int", "int"]);
    let recv_p = Module.getExportByName(null, "recv");
    let socket_recv = new NativeFunction(recv_p, "int", ["int", "pointer", "int", "int"]);
    
    let sockfd: NativePointer;
    let sockaddr_p: NativePointer;
    let sa_family: number;
    let port: number;
    let addr: string;
    let hook: boolean;
    
    Interceptor.attach(connect_p, {
    
        onEnter: function (args) {
    
            sockfd = args[0];
            sockaddr_p = args[1];
            sa_family = sockaddr_p.add(1).readU8();
            port = 256 * sockaddr_p.add(2).readU8() + sockaddr_p.add(3).readU8();
    
            let addList: number[] = [];
    
            for (let i = 0; i < 4; i++) {
                addList.push(sockaddr_p.add(4 + i).readU8());
            }
    
            addr = addList.join(".");
            
            if (REDIRECT_PORTS.includes(port)) {
    
                hook = filter(sa_family, addr, port);
                if(!hook) {
                    console.log("[OnEnter] -> la connexion à l'adresse: " + addr + "::" + port + " ne passe pas les filtres");
                    return;
                }
                    
                // @ts-ignore
                let port_r: number = __PORT__;
    
                sockaddr_p.add(2).writeByteArray([Math.floor(port_r / 256), port_r % 256]);
                sockaddr_p.add(4).writeByteArray([127, 0, 0, 1]);
    
            } else {
                console.log("La connexion à l'adresse: " + addr + "::" + port + " n'est pas autorisée");
            }
            
        },
    
        onLeave: function (retval) {

            if (!hook) {
                console.log("[OnLeave] -> la connexion à l'adresse: " + addr + "::" + port + " ne passe pas les filtres");
                return;
            }
            
            let connect_request = JSON.stringify({host: addr, port: port});
            let buf_send = Memory.allocUtf8String(connect_request);
            socket_send(sockfd.toInt32(), buf_send, connect_request.length, 0);
            let buf_recv = Memory.alloc(512);
            let recv_return = socket_recv(sockfd.toInt32(), buf_recv, 512, 0);
    
            while (recv_return == -1) {
                Thread.sleep(0.001); // Sleep 1ms
                recv_return = socket_recv(sockfd.toInt32(), buf_recv, 512, 0);
            }
    
        }
    
    });

} catch (error) {
    console.log("Injection error: " + error);
}