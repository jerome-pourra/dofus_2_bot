import { AllianceInformation } from "./../../../types/game/context/roleplay/AllianceInformation";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class AllianceInvitedMessage extends NetworkMessage
{

	public static readonly protocolId: number = 9032;

	public recruterName: string = "";
	public allianceInfo: AllianceInformation;

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
        this.deserializeAs_AllianceInvitedMessage(input);
    }

    private deserializeAs_AllianceInvitedMessage(input: ICustomDataInput)
    {
        this._recruterNameFunc(input);
        this.allianceInfo = new AllianceInformation();
        this.allianceInfo.deserialize(input);
    }

    private _recruterNameFunc(input: ICustomDataInput)
    {
        this.recruterName = input.readUTF();
    }

}