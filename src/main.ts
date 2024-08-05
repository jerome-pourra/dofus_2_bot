import * as zlib from 'zlib';
import { Mitm } from "./network/Mitm";
import { config } from "./config";
import { FridaHookManager } from "./frida/hook";
import { PakProtocol2 } from "./network/com/ankamagames/jerakine/resources/protocols/impl/PakProtocol2";
import { Map } from "./network/com/ankamagames/atouin/data/map/Map";
import { CustomBuffer } from './network/utils/CustomBuffer';

let maps = PakProtocol2.getFilesIndex("C:/Users/jerom/AppData/Local/Ankama/Dofus/content/maps/maps0.d2p");
// console.log(maps);

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