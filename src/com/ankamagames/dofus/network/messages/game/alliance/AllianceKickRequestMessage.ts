import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class AllianceKickRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 4578;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public kickedId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return AllianceKickRequestMessage.protocolId;
    }

    public isEndpointClient()
    {
        return AllianceKickRequestMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return AllianceKickRequestMessage.endpointServer;
    }

    public initAllianceKickRequestMessage(kickedId: number = 0): AllianceKickRequestMessage
    {
        this.kickedId = kickedId;
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
        this.serializeAs_AllianceKickRequestMessage(output);
    }

    public serializeAs_AllianceKickRequestMessage(output: ICustomDataOutput)
    {
        if(this.kickedId < -9007199254740992 || this.kickedId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.kickedId + ") on element kickedId.");
        }
        output.writeVarLong(this.kickedId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_AllianceKickRequestMessage(input);
    }

    private deserializeAs_AllianceKickRequestMessage(input: ICustomDataInput)
    {
        this._kickedIdFunc(input);
    }

    private _kickedIdFunc(input: ICustomDataInput)
    {
        this.kickedId = input.readVarLong();
        if(this.kickedId < -9007199254740992 || this.kickedId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.kickedId + ") on element of AllianceKickRequestMessage.kickedId.");
        }
    }

}