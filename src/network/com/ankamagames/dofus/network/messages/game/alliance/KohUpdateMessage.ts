import { KohAllianceInfo } from "./../../../types/game/alliance/KohAllianceInfo";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class KohUpdateMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 1036;

	public kohAllianceInfo: Array<KohAllianceInfo>;
	public startingAvaTimestamp: number = 0;
	public nextTickTime: number = 0;

    public constructor()
    {
        super();
        this.kohAllianceInfo = Array<KohAllianceInfo>();
    }

    public getMessageId()
    {
        return KohUpdateMessage.protocolId;
    }

    public initKohUpdateMessage(kohAllianceInfo: Array<KohAllianceInfo> = null, startingAvaTimestamp: number = 0, nextTickTime: number = 0): KohUpdateMessage
    {
        this.kohAllianceInfo = kohAllianceInfo;
        this.startingAvaTimestamp = startingAvaTimestamp;
        this.nextTickTime = nextTickTime;
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
        this.serializeAs_KohUpdateMessage(output);
    }

    public serializeAs_KohUpdateMessage(output: ICustomDataOutput)
    {
        output.writeShort(this.kohAllianceInfo.length);
        for(var _i1: number = 0; _i1 < this.kohAllianceInfo.length; _i1++)
        {
            (this.kohAllianceInfo[_i1] as KohAllianceInfo).serializeAs_KohAllianceInfo(output);
        }
        if(this.startingAvaTimestamp < 0)
        {
            throw new Error("Forbidden value (" + this.startingAvaTimestamp + ") on element startingAvaTimestamp.");
        }
        output.writeInt(this.startingAvaTimestamp);
        if(this.nextTickTime < 0 || this.nextTickTime > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.nextTickTime + ") on element nextTickTime.");
        }
        output.writeDouble(this.nextTickTime);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_KohUpdateMessage(input);
    }

    private deserializeAs_KohUpdateMessage(input: ICustomDataInput)
    {
        let _item1: KohAllianceInfo;
        let _kohAllianceInfoLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _kohAllianceInfoLen; _i1++)
        {
            _item1 = new KohAllianceInfo();
            _item1.deserialize(input);
            this.kohAllianceInfo.push(_item1);
        }
        this._startingAvaTimestampFunc(input);
        this._nextTickTimeFunc(input);
    }

    private _startingAvaTimestampFunc(input: ICustomDataInput)
    {
        this.startingAvaTimestamp = input.readInt();
        if(this.startingAvaTimestamp < 0)
        {
            throw new Error("Forbidden value (" + this.startingAvaTimestamp + ") on element of KohUpdateMessage.startingAvaTimestamp.");
        }
    }

    private _nextTickTimeFunc(input: ICustomDataInput)
    {
        this.nextTickTime = input.readDouble();
        if(this.nextTickTime < 0 || this.nextTickTime > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.nextTickTime + ") on element of KohUpdateMessage.nextTickTime.");
        }
    }

}