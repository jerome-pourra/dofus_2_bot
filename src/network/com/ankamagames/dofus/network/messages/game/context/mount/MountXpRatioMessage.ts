import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class MountXpRatioMessage extends NetworkMessage
{

	public static readonly protocolId: number = 9050;

	public ratio: number = 0;

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
        this.deserializeAs_MountXpRatioMessage(input);
    }

    private deserializeAs_MountXpRatioMessage(input: ICustomDataInput)
    {
        this._ratioFunc(input);
    }

    private _ratioFunc(input: ICustomDataInput)
    {
        this.ratio = input.readByte();
        if(this.ratio < 0)
        {
            throw new Error("Forbidden value (" + this.ratio + ") on element of MountXpRatioMessage.ratio.");
        }
    }

}