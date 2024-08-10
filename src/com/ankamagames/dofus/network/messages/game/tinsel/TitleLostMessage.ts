import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class TitleLostMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 4759;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public titleId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return TitleLostMessage.protocolId;
    }

    public isEndpointClient()
    {
        return TitleLostMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return TitleLostMessage.endpointServer;
    }

    public initTitleLostMessage(titleId: number = 0): TitleLostMessage
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
        this.serializeAs_TitleLostMessage(output);
    }

    public serializeAs_TitleLostMessage(output: ICustomDataOutput)
    {
        if(this.titleId < 0)
        {
            throw new Error("Forbidden value (" + this.titleId + ") on element titleId.");
        }
        output.writeVarShort(this.titleId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_TitleLostMessage(input);
    }

    private deserializeAs_TitleLostMessage(input: ICustomDataInput)
    {
        this._titleIdFunc(input);
    }

    private _titleIdFunc(input: ICustomDataInput)
    {
        this.titleId = input.readVarUhShort();
        if(this.titleId < 0)
        {
            throw new Error("Forbidden value (" + this.titleId + ") on element of TitleLostMessage.titleId.");
        }
    }

}