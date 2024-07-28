import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ObjectMovementMessage extends NetworkMessage
{

	public static readonly protocolId: number = 4510;

	public objectUID: number = 0;
	public position: number = 63;

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
        this.deserializeAs_ObjectMovementMessage(input);
    }

    private deserializeAs_ObjectMovementMessage(input: ICustomDataInput)
    {
        this._objectUIDFunc(input);
        this._positionFunc(input);
    }

    private _objectUIDFunc(input: ICustomDataInput)
    {
        this.objectUID = input.readVarUhInt();
        if(this.objectUID < 0)
        {
            throw new Error("Forbidden value (" + this.objectUID + ") on element of ObjectMovementMessage.objectUID.");
        }
    }

    private _positionFunc(input: ICustomDataInput)
    {
        this.position = input.readShort();
        if(this.position < 0)
        {
            throw new Error("Forbidden value (" + this.position + ") on element of ObjectMovementMessage.position.");
        }
    }

}