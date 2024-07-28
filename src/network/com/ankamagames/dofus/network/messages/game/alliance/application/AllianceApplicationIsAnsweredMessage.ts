import { AllianceInformation } from "./../../../../types/game/context/roleplay/AllianceInformation";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class AllianceApplicationIsAnsweredMessage extends NetworkMessage
{

	public static readonly protocolId: number = 4844;

	public accepted: boolean = false;
	public allianceInformation: AllianceInformation;

    public constructor()
    {
        super();
        this.allianceInformation = new AllianceInformation();
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
        this.deserializeAs_AllianceApplicationIsAnsweredMessage(input);
    }

    private deserializeAs_AllianceApplicationIsAnsweredMessage(input: ICustomDataInput)
    {
        this._acceptedFunc(input);
        this.allianceInformation = new AllianceInformation();
        this.allianceInformation.deserialize(input);
    }

    private _acceptedFunc(input: ICustomDataInput)
    {
        this.accepted = input.readBoolean();
    }

}