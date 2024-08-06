import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class AllianceRightsUpdateMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 5154;

	public rankId: number = 0;
	public rights: Array<number>;

    public constructor()
    {
        super();
        this.rights = Array<number>();
    }

    public getMessageId()
    {
        return AllianceRightsUpdateMessage.protocolId;
    }

    public initAllianceRightsUpdateMessage(rankId: number = 0, rights: Array<number> = null): AllianceRightsUpdateMessage
    {
        this.rankId = rankId;
        this.rights = rights;
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
        this.serializeAs_AllianceRightsUpdateMessage(output);
    }

    public serializeAs_AllianceRightsUpdateMessage(output: ICustomDataOutput)
    {
        if(this.rankId < 0)
        {
            throw new Error("Forbidden value (" + this.rankId + ") on element rankId.");
        }
        output.writeVarInt(this.rankId);
        output.writeShort(this.rights.length);
        for(var _i2: number = 0; _i2 < this.rights.length; _i2++)
        {
            if(this.rights[_i2] < 0)
            {
                throw new Error("Forbidden value (" + this.rights[_i2] + ") on element 2 (starting at 1) of rights.");
            }
            output.writeVarInt(this.rights[_i2]);
        }
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_AllianceRightsUpdateMessage(input);
    }

    private deserializeAs_AllianceRightsUpdateMessage(input: ICustomDataInput)
    {
        let _val2: number = 0;
        this._rankIdFunc(input);
        let _rightsLen: number = input.readUnsignedShort();
        for(let _i2: number = 0; _i2 < _rightsLen; _i2++)
        {
            _val2 = input.readVarUhInt();
            if(_val2 < 0)
            {
                throw new Error("Forbidden value (" + _val2 + ") on elements of rights.");
            }
            this.rights.push(_val2);
        }
    }

    private _rankIdFunc(input: ICustomDataInput)
    {
        this.rankId = input.readVarUhInt();
        if(this.rankId < 0)
        {
            throw new Error("Forbidden value (" + this.rankId + ") on element of AllianceRightsUpdateMessage.rankId.");
        }
    }

}