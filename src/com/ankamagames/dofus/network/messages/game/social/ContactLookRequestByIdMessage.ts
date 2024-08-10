import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { ContactLookRequestMessage } from "./ContactLookRequestMessage";

export class ContactLookRequestByIdMessage extends ContactLookRequestMessage implements INetworkMessage
{

	public static readonly protocolId: number = 6048;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public playerId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ContactLookRequestByIdMessage.protocolId;
    }

    public isEndpointClient()
    {
        return ContactLookRequestByIdMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return ContactLookRequestByIdMessage.endpointServer;
    }

    public initContactLookRequestByIdMessage(requestId: number = 0, contactType: number = 0, playerId: number = 0): ContactLookRequestByIdMessage
    {
        super.initContactLookRequestMessage(requestId,contactType);
        this.playerId = playerId;
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
        this.serializeAs_ContactLookRequestByIdMessage(output);
    }

    public serializeAs_ContactLookRequestByIdMessage(output: ICustomDataOutput)
    {
        super.serializeAs_ContactLookRequestMessage(output);
        if(this.playerId < 0 || this.playerId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.playerId + ") on element playerId.");
        }
        output.writeVarLong(this.playerId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ContactLookRequestByIdMessage(input);
    }

    private deserializeAs_ContactLookRequestByIdMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._playerIdFunc(input);
    }

    private _playerIdFunc(input: ICustomDataInput)
    {
        this.playerId = input.readVarUhLong();
        if(this.playerId < 0 || this.playerId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.playerId + ") on element of ContactLookRequestByIdMessage.playerId.");
        }
    }

}