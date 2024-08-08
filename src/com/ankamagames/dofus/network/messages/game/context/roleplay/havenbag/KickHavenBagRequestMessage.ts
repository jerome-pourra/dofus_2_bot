import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class KickHavenBagRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 3554;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public guestId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return KickHavenBagRequestMessage.protocolId;
    }

    public isEndpointClient()
    {
        return KickHavenBagRequestMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return KickHavenBagRequestMessage.endpointServer;
    }

    public initKickHavenBagRequestMessage(guestId: number = 0): KickHavenBagRequestMessage
    {
        this.guestId = guestId;
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
        this.serializeAs_KickHavenBagRequestMessage(output);
    }

    public serializeAs_KickHavenBagRequestMessage(output: ICustomDataOutput)
    {
        if(this.guestId < 0 || this.guestId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.guestId + ") on element guestId.");
        }
        output.writeVarLong(this.guestId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_KickHavenBagRequestMessage(input);
    }

    private deserializeAs_KickHavenBagRequestMessage(input: ICustomDataInput)
    {
        this._guestIdFunc(input);
    }

    private _guestIdFunc(input: ICustomDataInput)
    {
        this.guestId = input.readVarUhLong();
        if(this.guestId < 0 || this.guestId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.guestId + ") on element of KickHavenBagRequestMessage.guestId.");
        }
    }

}