import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class TitleSelectedMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 1653;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public titleId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return TitleSelectedMessage.protocolId;
    }

    public isEndpointClient()
    {
        return TitleSelectedMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return TitleSelectedMessage.endpointServer;
    }

    public initTitleSelectedMessage(titleId: number = 0): TitleSelectedMessage
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
        this.serializeAs_TitleSelectedMessage(output);
    }

    public serializeAs_TitleSelectedMessage(output: ICustomDataOutput)
    {
        if(this.titleId < 0)
        {
            throw new Error("Forbidden value (" + this.titleId + ") on element titleId.");
        }
        output.writeVarShort(this.titleId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_TitleSelectedMessage(input);
    }

    private deserializeAs_TitleSelectedMessage(input: ICustomDataInput)
    {
        this._titleIdFunc(input);
    }

    private _titleIdFunc(input: ICustomDataInput)
    {
        this.titleId = input.readVarUhShort();
        if(this.titleId < 0)
        {
            throw new Error("Forbidden value (" + this.titleId + ") on element of TitleSelectedMessage.titleId.");
        }
    }

}