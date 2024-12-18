import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class RecycleResultMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 4137;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public nuggetsForPrism: number = 0;
	public nuggetsForPlayer: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return RecycleResultMessage.protocolId;
    }

    public isEndpointClient()
    {
        return RecycleResultMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return RecycleResultMessage.endpointServer;
    }

    public initRecycleResultMessage(nuggetsForPrism: number = 0, nuggetsForPlayer: number = 0): RecycleResultMessage
    {
        this.nuggetsForPrism = nuggetsForPrism;
        this.nuggetsForPlayer = nuggetsForPlayer;
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
        this.serializeAs_RecycleResultMessage(output);
    }

    public serializeAs_RecycleResultMessage(output: ICustomDataOutput)
    {
        if(this.nuggetsForPrism < 0)
        {
            throw new Error("Forbidden value (" + this.nuggetsForPrism + ") on element nuggetsForPrism.");
        }
        output.writeVarInt(this.nuggetsForPrism);
        if(this.nuggetsForPlayer < 0)
        {
            throw new Error("Forbidden value (" + this.nuggetsForPlayer + ") on element nuggetsForPlayer.");
        }
        output.writeVarInt(this.nuggetsForPlayer);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_RecycleResultMessage(input);
    }

    private deserializeAs_RecycleResultMessage(input: ICustomDataInput)
    {
        this._nuggetsForPrismFunc(input);
        this._nuggetsForPlayerFunc(input);
    }

    private _nuggetsForPrismFunc(input: ICustomDataInput)
    {
        this.nuggetsForPrism = input.readVarUhInt();
        if(this.nuggetsForPrism < 0)
        {
            throw new Error("Forbidden value (" + this.nuggetsForPrism + ") on element of RecycleResultMessage.nuggetsForPrism.");
        }
    }

    private _nuggetsForPlayerFunc(input: ICustomDataInput)
    {
        this.nuggetsForPlayer = input.readVarUhInt();
        if(this.nuggetsForPlayer < 0)
        {
            throw new Error("Forbidden value (" + this.nuggetsForPlayer + ") on element of RecycleResultMessage.nuggetsForPlayer.");
        }
    }

}