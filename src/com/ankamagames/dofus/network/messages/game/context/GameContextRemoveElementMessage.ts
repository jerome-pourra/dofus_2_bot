import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class GameContextRemoveElementMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 3496;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public id: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return GameContextRemoveElementMessage.protocolId;
    }

    public isEndpointClient()
    {
        return GameContextRemoveElementMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return GameContextRemoveElementMessage.endpointServer;
    }

    public initGameContextRemoveElementMessage(id: number = 0): GameContextRemoveElementMessage
    {
        this.id = id;
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
        this.serializeAs_GameContextRemoveElementMessage(output);
    }

    public serializeAs_GameContextRemoveElementMessage(output: ICustomDataOutput)
    {
        if(this.id < -9007199254740992 || this.id > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.id + ") on element id.");
        }
        output.writeDouble(this.id);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameContextRemoveElementMessage(input);
    }

    private deserializeAs_GameContextRemoveElementMessage(input: ICustomDataInput)
    {
        this._idFunc(input);
    }

    private _idFunc(input: ICustomDataInput)
    {
        this.id = input.readDouble();
        if(this.id < -9007199254740992 || this.id > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.id + ") on element of GameContextRemoveElementMessage.id.");
        }
    }

}