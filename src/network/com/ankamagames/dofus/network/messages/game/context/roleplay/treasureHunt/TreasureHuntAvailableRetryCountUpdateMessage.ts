import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class TreasureHuntAvailableRetryCountUpdateMessage extends NetworkMessage
{

	public static readonly protocolId: number = 1628;

	public questType: number = 0;
	public availableRetryCount: number = 0;

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
        this.deserializeAs_TreasureHuntAvailableRetryCountUpdateMessage(input);
    }

    private deserializeAs_TreasureHuntAvailableRetryCountUpdateMessage(input: ICustomDataInput)
    {
        this._questTypeFunc(input);
        this._availableRetryCountFunc(input);
    }

    private _questTypeFunc(input: ICustomDataInput)
    {
        this.questType = input.readByte();
        if(this.questType < 0)
        {
            throw new Error("Forbidden value (" + this.questType + ") on element of TreasureHuntAvailableRetryCountUpdateMessage.questType.");
        }
    }

    private _availableRetryCountFunc(input: ICustomDataInput)
    {
        this.availableRetryCount = input.readInt();
    }

}