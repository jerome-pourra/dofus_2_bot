import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class UpdateGuildRightsMessage extends NetworkMessage
{

	public static readonly protocolId: number = 3888;

	public rankId: number = 0;
	public rights: Array<number>;

    public constructor()
    {
        super();
        this.rights = Array<number>();
    }

    public override pack(output: ICustomDataOutput)
    {

    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_UpdateGuildRightsMessage(input);
    }

    private deserializeAs_UpdateGuildRightsMessage(input: ICustomDataInput)
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
            throw new Error("Forbidden value (" + this.rankId + ") on element of UpdateGuildRightsMessage.rankId.");
        }
    }

}