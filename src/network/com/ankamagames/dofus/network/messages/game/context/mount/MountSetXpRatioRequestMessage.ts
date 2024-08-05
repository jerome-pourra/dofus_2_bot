import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class MountSetXpRatioRequestMessage extends NetworkMessage
{

	public static readonly protocolId: number = 4347;

	public xpRatio: number = 0;

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
        this.deserializeAs_MountSetXpRatioRequestMessage(input);
    }

    private deserializeAs_MountSetXpRatioRequestMessage(input: ICustomDataInput)
    {
        this._xpRatioFunc(input);
    }

    private _xpRatioFunc(input: ICustomDataInput)
    {
        this.xpRatio = input.readByte();
        if(this.xpRatio < 0)
        {
            throw new Error("Forbidden value (" + this.xpRatio + ") on element of MountSetXpRatioRequestMessage.xpRatio.");
        }
    }

}