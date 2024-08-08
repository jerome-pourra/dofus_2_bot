import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class GuestLimitationMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 7707;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public reason: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return GuestLimitationMessage.protocolId;
    }

    public isEndpointClient()
    {
        return GuestLimitationMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return GuestLimitationMessage.endpointServer;
    }

    public initGuestLimitationMessage(reason: number = 0): GuestLimitationMessage
    {
        this.reason = reason;
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
        this.serializeAs_GuestLimitationMessage(output);
    }

    public serializeAs_GuestLimitationMessage(output: ICustomDataOutput)
    {
        output.writeByte(this.reason);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GuestLimitationMessage(input);
    }

    private deserializeAs_GuestLimitationMessage(input: ICustomDataInput)
    {
        this._reasonFunc(input);
    }

    private _reasonFunc(input: ICustomDataInput)
    {
        this.reason = input.readByte();
        if(this.reason < 0)
        {
            throw new Error("Forbidden value (" + this.reason + ") on element of GuestLimitationMessage.reason.");
        }
    }

}