import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class MountSetXpRatioRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 4347;

	public xpRatio: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return MountSetXpRatioRequestMessage.protocolId;
    }

    public initMountSetXpRatioRequestMessage(xpRatio: number = 0): MountSetXpRatioRequestMessage
    {
        this.xpRatio = xpRatio;
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
        this.serializeAs_MountSetXpRatioRequestMessage(output);
    }

    public serializeAs_MountSetXpRatioRequestMessage(output: ICustomDataOutput)
    {
        if(this.xpRatio < 0)
        {
            throw new Error("Forbidden value (" + this.xpRatio + ") on element xpRatio.");
        }
        output.writeByte(this.xpRatio);
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