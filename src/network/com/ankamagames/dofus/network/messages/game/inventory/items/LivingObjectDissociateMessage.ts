import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class LivingObjectDissociateMessage extends NetworkMessage
{

	public static readonly protocolId: number = 8437;

	public livingUID: number = 0;
	public livingPosition: number = 0;

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
        this.deserializeAs_LivingObjectDissociateMessage(input);
    }

    private deserializeAs_LivingObjectDissociateMessage(input: ICustomDataInput)
    {
        this._livingUIDFunc(input);
        this._livingPositionFunc(input);
    }

    private _livingUIDFunc(input: ICustomDataInput)
    {
        this.livingUID = input.readVarUhInt();
        if(this.livingUID < 0)
        {
            throw new Error("Forbidden value (" + this.livingUID + ") on element of LivingObjectDissociateMessage.livingUID.");
        }
    }

    private _livingPositionFunc(input: ICustomDataInput)
    {
        this.livingPosition = input.readUnsignedByte();
        if(this.livingPosition < 0 || this.livingPosition > 255)
        {
            throw new Error("Forbidden value (" + this.livingPosition + ") on element of LivingObjectDissociateMessage.livingPosition.");
        }
    }

}