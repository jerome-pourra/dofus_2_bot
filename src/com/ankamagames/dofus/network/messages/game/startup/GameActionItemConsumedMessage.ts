import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";
import { BooleanByteWrapper } from "./../../../../../jerakine/network/utils/BooleanByteWrapper";

export class GameActionItemConsumedMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 5525;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public success: boolean = false;
	public actionId: number = 0;
	public automaticAction: boolean = false;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return GameActionItemConsumedMessage.protocolId;
    }

    public isEndpointClient()
    {
        return GameActionItemConsumedMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return GameActionItemConsumedMessage.endpointServer;
    }

    public initGameActionItemConsumedMessage(success: boolean = false, actionId: number = 0, automaticAction: boolean = false): GameActionItemConsumedMessage
    {
        this.success = success;
        this.actionId = actionId;
        this.automaticAction = automaticAction;
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
        this.serializeAs_GameActionItemConsumedMessage(output);
    }

    public serializeAs_GameActionItemConsumedMessage(output: ICustomDataOutput)
    {
        var _box0: number = 0;
        _box0 = BooleanByteWrapper.setFlag(_box0,0,this.success);
        _box0 = BooleanByteWrapper.setFlag(_box0,1,this.automaticAction);
        output.writeByte(_box0);
        if(this.actionId < 0)
        {
            throw new Error("Forbidden value (" + this.actionId + ") on element actionId.");
        }
        output.writeInt(this.actionId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameActionItemConsumedMessage(input);
    }

    public deserializeByteBoxes(input: ICustomDataInput)
    {
        let _box0: number = input.readByte();
        this.success = BooleanByteWrapper.getFlag(_box0,0);
        this.automaticAction = BooleanByteWrapper.getFlag(_box0,1);
    }

    private deserializeAs_GameActionItemConsumedMessage(input: ICustomDataInput)
    {
        this.deserializeByteBoxes(input);
        this._actionIdFunc(input);
    }

    private _actionIdFunc(input: ICustomDataInput)
    {
        this.actionId = input.readInt();
        if(this.actionId < 0)
        {
            throw new Error("Forbidden value (" + this.actionId + ") on element of GameActionItemConsumedMessage.actionId.");
        }
    }

}