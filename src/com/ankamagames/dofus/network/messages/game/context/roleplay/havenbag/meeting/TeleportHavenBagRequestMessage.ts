import { CustomDataWrapper } from "./../../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../../jerakine/network/NetworkMessage";

export class TeleportHavenBagRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 8587;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public guestId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return TeleportHavenBagRequestMessage.protocolId;
    }

    public isEndpointClient()
    {
        return TeleportHavenBagRequestMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return TeleportHavenBagRequestMessage.endpointServer;
    }

    public initTeleportHavenBagRequestMessage(guestId: number = 0): TeleportHavenBagRequestMessage
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
        this.serializeAs_TeleportHavenBagRequestMessage(output);
    }

    public serializeAs_TeleportHavenBagRequestMessage(output: ICustomDataOutput)
    {
        if(this.guestId < 0 || this.guestId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.guestId + ") on element guestId.");
        }
        output.writeVarLong(this.guestId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_TeleportHavenBagRequestMessage(input);
    }

    private deserializeAs_TeleportHavenBagRequestMessage(input: ICustomDataInput)
    {
        this._guestIdFunc(input);
    }

    private _guestIdFunc(input: ICustomDataInput)
    {
        this.guestId = input.readVarUhLong();
        if(this.guestId < 0 || this.guestId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.guestId + ") on element of TeleportHavenBagRequestMessage.guestId.");
        }
    }

}