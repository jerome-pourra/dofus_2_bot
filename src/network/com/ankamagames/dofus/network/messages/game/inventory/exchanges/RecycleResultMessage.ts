import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class RecycleResultMessage extends NetworkMessage
{

	public static readonly protocolId: number = 4137;

	public nuggetsForPrism: number = 0;
	public nuggetsForPlayer: number = 0;

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
        this.deserializeAs_RecycleResultMessage(input);
    }

    private deserializeAs_RecycleResultMessage(input: ICustomDataInput)
    {
        this._nuggetsForPrismFunc(input);
        this._nuggetsForPlayerFunc(input);
    }

    private _nuggetsForPrismFunc(input: ICustomDataInput)
    {
        this.nuggetsForPrism = input.readVarUhInt();
        if(this.nuggetsForPrism < 0)
        {
            throw new Error("Forbidden value (" + this.nuggetsForPrism + ") on element of RecycleResultMessage.nuggetsForPrism.");
        }
    }

    private _nuggetsForPlayerFunc(input: ICustomDataInput)
    {
        this.nuggetsForPlayer = input.readVarUhInt();
        if(this.nuggetsForPlayer < 0)
        {
            throw new Error("Forbidden value (" + this.nuggetsForPlayer + ") on element of RecycleResultMessage.nuggetsForPlayer.");
        }
    }

}