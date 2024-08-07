import { AnkSocketEndpoint } from "../../../../../../network/AnkSocket";
import { PacketHandler } from "../../../../../../network/packet/PacketHandler";
import { PacketHeaderDecoder } from "../../../../../../network/packet/PacketHeaderDecoder";
import { CustomBuffer } from "../../../../../../network/utils/CustomBuffer";
import { CustomDataWrapper } from "./../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../jerakine/network/NetworkMessage";

import * as fs from 'fs';
import * as zlib from "zlib";

export class NetworkDataContainerMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 7777;

    // public content: Buffer;

    public constructor()
    {
        super();
        console.log("NetworkDataContainerMessage constructor");
        
    }

    public getMessageId()
    {
        return NetworkDataContainerMessage.protocolId;
    }

    public initNetworkDataContainerMessage(content: Buffer = null): NetworkDataContainerMessage
    {
        return this;
    }

    public override pack(output: ICustomDataOutput)
    {
        let data: CustomDataWrapper = new CustomDataWrapper();
        this.serialize(data);
        this.writePacket(output, this.getMessageId(), data);
    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_NetworkDataContainerMessage(output);
    }

    public serializeAs_NetworkDataContainerMessage(output: ICustomDataOutput)
    {
        throw new Error("Not implemented");
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_NetworkDataContainerMessage(input);
    }

    private readVarInt(input: Buffer): number {
        let num = 0;
        let shift = 0;
        let byte = 0;
    
        do {
            byte = input.readUInt8();
            num |= (byte & 0x7F) << shift;
            shift += 7;
        } while (byte & 0x80);
    
        return num;
    }

    private deserializeAs_NetworkDataContainerMessage(input: ICustomDataInput)
    {
        const contentLen: number = input.readVarInt();
        const buffer: Buffer = input.buffer.subarray(input.readOffset, input.readOffset + contentLen);
        const uncompressedBuffer: Buffer = zlib.inflateSync(buffer);
        new PacketHandler().acquisition(uncompressedBuffer, AnkSocketEndpoint.CLIENT, false);
    }

}