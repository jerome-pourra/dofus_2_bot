import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class TitleSelectRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 5375;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public titleId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return TitleSelectRequestMessage.protocolId;
    }

    public isEndpointClient()
    {
        return TitleSelectRequestMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return TitleSelectRequestMessage.endpointServer;
    }

    public initTitleSelectRequestMessage(titleId: number = 0): TitleSelectRequestMessage
    {
        this.titleId = titleId;
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
        this.serializeAs_TitleSelectRequestMessage(output);
    }

    public serializeAs_TitleSelectRequestMessage(output: ICustomDataOutput)
    {
        if(this.titleId < 0)
        {
            throw new Error("Forbidden value (" + this.titleId + ") on element titleId.");
        }
        output.writeVarShort(this.titleId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_TitleSelectRequestMessage(input);
    }

    private deserializeAs_TitleSelectRequestMessage(input: ICustomDataInput)
    {
        this._titleIdFunc(input);
    }

    private _titleIdFunc(input: ICustomDataInput)
    {
        this.titleId = input.readVarUhShort();
        if(this.titleId < 0)
        {
            throw new Error("Forbidden value (" + this.titleId + ") on element of TitleSelectRequestMessage.titleId.");
        }
    }

}