import { AllianceInformation } from "./../../../types/game/context/roleplay/AllianceInformation";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class AllianceInvitedMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 9032;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public recruterName: string = "";
	public allianceInfo: AllianceInformation;

    public constructor()
    {
        super();
        this.allianceInfo = new AllianceInformation();
    }

    public getMessageId()
    {
        return AllianceInvitedMessage.protocolId;
    }

    public isEndpointClient()
    {
        return AllianceInvitedMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return AllianceInvitedMessage.endpointServer;
    }

    public initAllianceInvitedMessage(recruterName: string = "", allianceInfo: AllianceInformation = null): AllianceInvitedMessage
    {
        this.recruterName = recruterName;
        this.allianceInfo = allianceInfo;
        return this;
    }

    public override pack(output: ICustomDataOutput)
    {
        let data: CustomDataWrapper = new CustomDataWrapper();
        this.serialize(data);
        this.isEndpointClient() ? this.writePacketClient(output, this.getMessageId(), data) : this.writePacketServer(output, this.getMessageId(), data);
    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_AllianceInvitedMessage(output);
    }

    public serializeAs_AllianceInvitedMessage(output: ICustomDataOutput)
    {
        output.writeUTF(this.recruterName);
        this.allianceInfo.serializeAs_AllianceInformation(output);
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