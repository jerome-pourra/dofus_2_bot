import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class HouseTeleportRequestMessage extends NetworkMessage
{

	public static readonly protocolId: number = 3189;

	public houseId: number = 0;
	public houseInstanceId: number = 0;

    public constructor()
    {
        super();
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
        this.deserializeAs_HouseTeleportRequestMessage(input);
    }

    private deserializeAs_HouseTeleportRequestMessage(input: ICustomDataInput)
    {
        this._houseIdFunc(input);
        this._houseInstanceIdFunc(input);
    }

    private _houseIdFunc(input: ICustomDataInput)
    {
        this.houseId = input.readVarUhInt();
        if(this.houseId < 0)
        {
            throw new Error("Forbidden value (" + this.houseId + ") on element of HouseTeleportRequestMessage.houseId.");
        }
    }

    private _houseInstanceIdFunc(input: ICustomDataInput)
    {
        this.houseInstanceId = input.readInt();
        if(this.houseInstanceId < 0)
        {
            throw new Error("Forbidden value (" + this.houseInstanceId + ") on element of HouseTeleportRequestMessage.houseInstanceId.");
        }
    }

}