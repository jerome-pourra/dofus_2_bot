import { Mitm } from "./network/Mitm";
import { config } from "./config";
import { FridaHookManager } from "./frida/hook";
import { PakProtocol2 } from './com/ankamagames/jerakine/resources/protocols/impl/PakProtocol2';

let maps = PakProtocol2.getFilesIndex("C:/Users/jerom/AppData/Local/Ankama/Dofus/content/maps/maps0.d2p");
// console.log(maps);

// import * as zlib from 'zlib';
// if (maps.has(mapId)) {
//     let indexesMap = maps.get(mapId);
//     console.log(indexesMap);

    
//     let mapFileStream = indexesMap.stream;
//     let mapRawData = mapFileStream.subarray(indexesMap.o, indexesMap.o + indexesMap.l);
//     let inflateMapRawData = new CustomBuffer(zlib.inflateSync(mapRawData.buffer));
//     // console.log(inflateMapRawData);
    
//     // console.log(mapRawData);
    
//     let map = new Map()
//     map.fromRaw(inflateMapRawData);
//     console.log(map);
    
// }

// process.exit(0);

FridaHookManager.initialize();
new Mitm(config.mitm.host, config.mitm.port);