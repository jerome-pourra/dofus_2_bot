import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { ClientUIOpenedMessage } from "./ClientUIOpenedMessage";

export class ClientUIOpenedByObjectMessage extends ClientUIOpenedMessage implements INetworkMessage
{

	public static readonly protocolId: number = 2467;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public uid: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ClientUIOpenedByObjectMessage.protocolId;
    }

    public isEndpointClient()
    {
        return ClientUIOpenedByObjectMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return ClientUIOpenedByObjectMessage.endpointServer;
    }

    public initClientUIOpenedByObjectMessage(type: number = 0, uid: number = 0): ClientUIOpenedByObjectMessage
    {
        super.initClientUIOpenedMessage(type);
        this.uid = uid;
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
        this.serializeAs_ClientUIOpenedByObjectMessage(output);
    }

    public serializeAs_ClientUIOpenedByObjectMessage(output: ICustomDataOutput)
    {
        super.serializeAs_ClientUIOpenedMessage(output);
        if(this.uid < 0)
        {
            throw new Error("Forbidden value (" + this.uid + ") on element uid.");
        }
        output.writeVarInt(this.uid);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ClientUIOpenedByObjectMessage(input);
    }

    private deserializeAs_ClientUIOpenedByObjectMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._uidFunc(input);
    }

    private _uidFunc(input: ICustomDataInput)
    {
        this.uid = input.readVarUhInt();
        if(this.uid < 0)
        {
            throw new Error("Forbidden value (" + this.uid + ") on element of ClientUIOpenedByObjectMessage.uid.");
        }
    }

}