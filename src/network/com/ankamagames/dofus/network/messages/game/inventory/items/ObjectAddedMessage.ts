import { ObjectItem } from "./../../../../types/game/data/items/ObjectItem";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ObjectAddedMessage extends NetworkMessage
{

	public static readonly protocolId: number = 6866;

	public object: ObjectItem;
	public origin: number = 0;

    public constructor()
    {
        super();
        this.object = new ObjectItem();
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
        this.deserializeAs_ObjectAddedMessage(input);
    }

    private deserializeAs_ObjectAddedMessage(input: ICustomDataInput)
    {
        this.object = new ObjectItem();
        this.object.deserialize(input);
        this._originFunc(input);
    }

    private _originFunc(input: ICustomDataInput)
    {
        this.origin = input.readByte();
        if(this.origin < 0)
        {
            throw new Error("Forbidden value (" + this.origin + ") on element of ObjectAddedMessage.origin.");
        }
    }

}