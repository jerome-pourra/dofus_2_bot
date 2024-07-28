import { KohAllianceInfo } from "./../../../types/game/alliance/KohAllianceInfo";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class KohUpdateMessage extends NetworkMessage
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

    public override pack(output: ICustomDataOutput)
    {

    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
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