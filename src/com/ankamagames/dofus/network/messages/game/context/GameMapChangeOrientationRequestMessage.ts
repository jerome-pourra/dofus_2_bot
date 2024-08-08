import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class GameMapChangeOrientationRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 1190;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public direction: number = 1;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return GameMapChangeOrientationRequestMessage.protocolId;
    }

    public isEndpointClient()
    {
        return GameMapChangeOrientationRequestMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return GameMapChangeOrientationRequestMessage.endpointServer;
    }

    public initGameMapChangeOrientationRequestMessage(direction: number = 1): GameMapChangeOrientationRequestMessage
    {
        this.direction = direction;
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
        this.serializeAs_GameMapChangeOrientationRequestMessage(output);
    }

    public serializeAs_GameMapChangeOrientationRequestMessage(output: ICustomDataOutput)
    {
        output.writeByte(this.direction);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameMapChangeOrientationRequestMessage(input);
    }

    private deserializeAs_GameMapChangeOrientationRequestMessage(input: ICustomDataInput)
    {
        this._directionFunc(input);
    }

    private _directionFunc(input: ICustomDataInput)
    {
        this.direction = input.readByte();
        if(this.direction < 0)
        {
            throw new Error("Forbidden value (" + this.direction + ") on element of GameMapChangeOrientationRequestMessage.direction.");
        }
    }

}