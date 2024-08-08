import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { ContactLookRequestMessage } from "./ContactLookRequestMessage";

export class ContactLookRequestByNameMessage extends ContactLookRequestMessage implements INetworkMessage
{

	public static readonly protocolId: number = 2776;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public playerName: string = "";

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ContactLookRequestByNameMessage.protocolId;
    }

    public isEndpointClient()
    {
        return ContactLookRequestByNameMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return ContactLookRequestByNameMessage.endpointServer;
    }

    public initContactLookRequestByNameMessage(requestId: number = 0, contactType: number = 0, playerName: string = ""): ContactLookRequestByNameMessage
    {
        super.initContactLookRequestMessage(requestId,contactType);
        this.playerName = playerName;
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
        this.serializeAs_ContactLookRequestByNameMessage(output);
    }

    public serializeAs_ContactLookRequestByNameMessage(output: ICustomDataOutput)
    {
        super.serializeAs_ContactLookRequestMessage(output);
        output.writeUTF(this.playerName);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ContactLookRequestByNameMessage(input);
    }

    private deserializeAs_ContactLookRequestByNameMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._playerNameFunc(input);
    }

    private _playerNameFunc(input: ICustomDataInput)
    {
        this.playerName = input.readUTF();
    }

}