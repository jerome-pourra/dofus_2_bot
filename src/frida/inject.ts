export let inject = function(rd_host: string, rd_port: number, filter_ports: number[]) {

    try {

        function filter(sa_family: number, addr: string, port: number): boolean {
            return filter_ports.includes(port);
        }

        function ipToBytes(ipString: string): number[] {
            return ipString.split(".").map(segment => parseInt(segment, 10));
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
        let can_hook: boolean = false;

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
                can_hook = filter(sa_family, addr, port);

                if (can_hook) {
                    sockaddr_p.add(2).writeByteArray([Math.floor(rd_port / 256), rd_port % 256]);
                    sockaddr_p.add(4).writeByteArray(ipToBytes(rd_host));
                    console.log("Connect to: " + addr + "::" + port + " is redirected to " + rd_host + "::" + rd_port);
                } else {
                    console.log("Connect to: " + addr + "::" + port + " is not allowed");
                }
                
            },
        
            onLeave: function (retval) {
    
                if (!can_hook) {
                    console.log("Connect to: " + addr + "::" + port + " is not allowed");
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
        console.log("Erreur lors de l'injection de la fonction ", error);
    }

}