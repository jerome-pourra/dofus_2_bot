import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class GameContextKickMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 2032;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public targetId: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return GameContextKickMessage.protocolId;
    }

    public isEndpointClient()
    {
        return GameContextKickMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return GameContextKickMessage.endpointServer;
    }

    public initGameContextKickMessage(targetId: number = 0): GameContextKickMessage
    {
        this.targetId = targetId;
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
        this.serializeAs_GameContextKickMessage(output);
    }

    public serializeAs_GameContextKickMessage(output: ICustomDataOutput)
    {
        if(this.targetId < -9007199254740992 || this.targetId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.targetId + ") on element targetId.");
        }
        output.writeDouble(this.targetId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameContextKickMessage(input);
    }

    private deserializeAs_GameContextKickMessage(input: ICustomDataInput)
    {
        this._targetIdFunc(input);
    }

    private _targetIdFunc(input: ICustomDataInput)
    {
        this.targetId = input.readDouble();
        if(this.targetId < -9007199254740992 || this.targetId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.targetId + ") on element of GameContextKickMessage.targetId.");
        }
    }

}