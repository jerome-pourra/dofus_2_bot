import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class BreachEnterMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 9138;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public owner: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return BreachEnterMessage.protocolId;
    }

    public isEndpointClient()
    {
        return BreachEnterMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return BreachEnterMessage.endpointServer;
    }

    public initBreachEnterMessage(owner: number = 0): BreachEnterMessage
    {
        this.owner = owner;
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
        this.serializeAs_BreachEnterMessage(output);
    }

    public serializeAs_BreachEnterMessage(output: ICustomDataOutput)
    {
        if(this.owner < 0 || this.owner > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.owner + ") on element owner.");
        }
        output.writeVarLong(this.owner);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_BreachEnterMessage(input);
    }

    private deserializeAs_BreachEnterMessage(input: ICustomDataInput)
    {
        this._ownerFunc(input);
    }

    private _ownerFunc(input: ICustomDataInput)
    {
        this.owner = input.readVarUhLong();
        if(this.owner < 0 || this.owner > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.owner + ") on element of BreachEnterMessage.owner.");
        }
    }

}