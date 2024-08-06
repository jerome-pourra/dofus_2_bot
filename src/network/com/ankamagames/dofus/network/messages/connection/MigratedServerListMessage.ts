import { CustomDataWrapper } from "./../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../jerakine/network/NetworkMessage";

export class MigratedServerListMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 2491;

	public migratedServerIds: Array<number>;

    public constructor()
    {
        super();
        this.migratedServerIds = Array<number>();
    }

    public getMessageId()
    {
        return MigratedServerListMessage.protocolId;
    }

    public initMigratedServerListMessage(migratedServerIds: Array<number> = null): MigratedServerListMessage
    {
        this.migratedServerIds = migratedServerIds;
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
        this.serializeAs_MigratedServerListMessage(output);
    }

    public serializeAs_MigratedServerListMessage(output: ICustomDataOutput)
    {
        output.writeShort(this.migratedServerIds.length);
        for(var _i1: number = 0; _i1 < this.migratedServerIds.length; _i1++)
        {
            if(this.migratedServerIds[_i1] < 0)
            {
                throw new Error("Forbidden value (" + this.migratedServerIds[_i1] + ") on element 1 (starting at 1) of migratedServerIds.");
            }
            output.writeVarShort(this.migratedServerIds[_i1]);
        }
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_MigratedServerListMessage(input);
    }

    private deserializeAs_MigratedServerListMessage(input: ICustomDataInput)
    {
        let _val1: number = 0;
        let _migratedServerIdsLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _migratedServerIdsLen; _i1++)
        {
            _val1 = input.readVarUhShort();
            if(_val1 < 0)
            {
                throw new Error("Forbidden value (" + _val1 + ") on elements of migratedServerIds.");
            }
            this.migratedServerIds.push(_val1);
        }
    }

}