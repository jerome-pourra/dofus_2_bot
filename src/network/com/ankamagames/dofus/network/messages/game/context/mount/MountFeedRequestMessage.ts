import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class MountFeedRequestMessage extends NetworkMessage
{

	public static readonly protocolId: number = 3038;

	public mountUid: number = 0;
	public mountLocation: number = 0;
	public mountFoodUid: number = 0;
	public quantity: number = 0;

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
        this.deserializeAs_MountFeedRequestMessage(input);
    }

    private deserializeAs_MountFeedRequestMessage(input: ICustomDataInput)
    {
        this._mountUidFunc(input);
        this._mountLocationFunc(input);
        this._mountFoodUidFunc(input);
        this._quantityFunc(input);
    }

    private _mountUidFunc(input: ICustomDataInput)
    {
        this.mountUid = input.readVarUhInt();
        if(this.mountUid < 0)
        {
            throw new Error("Forbidden value (" + this.mountUid + ") on element of MountFeedRequestMessage.mountUid.");
        }
    }

    private _mountLocationFunc(input: ICustomDataInput)
    {
        this.mountLocation = input.readByte();
    }

    private _mountFoodUidFunc(input: ICustomDataInput)
    {
        this.mountFoodUid = input.readVarUhInt();
        if(this.mountFoodUid < 0)
        {
            throw new Error("Forbidden value (" + this.mountFoodUid + ") on element of MountFeedRequestMessage.mountFoodUid.");
        }
    }

    private _quantityFunc(input: ICustomDataInput)
    {
        this.quantity = input.readVarUhInt();
        if(this.quantity < 0)
        {
            throw new Error("Forbidden value (" + this.quantity + ") on element of MountFeedRequestMessage.quantity.");
        }
    }

}