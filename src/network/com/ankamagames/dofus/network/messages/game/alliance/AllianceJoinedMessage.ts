import { AllianceInformation } from "./../../../types/game/context/roleplay/AllianceInformation";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class AllianceJoinedMessage extends NetworkMessage
{

	public static readonly protocolId: number = 5220;

	public allianceInfo: AllianceInformation;
	public rankId: number = 0;

    public constructor()
    {
        super();
        this.allianceInfo = new AllianceInformation();
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
        this.deserializeAs_AllianceJoinedMessage(input);
    }

    private deserializeAs_AllianceJoinedMessage(input: ICustomDataInput)
    {
        this.allianceInfo = new AllianceInformation();
        this.allianceInfo.deserialize(input);
        this._rankIdFunc(input);
    }

    private _rankIdFunc(input: ICustomDataInput)
    {
        this.rankId = input.readVarUhInt();
        if(this.rankId < 0)
        {
            throw new Error("Forbidden value (" + this.rankId + ") on element of AllianceJoinedMessage.rankId.");
        }
    }

}