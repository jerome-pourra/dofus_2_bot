import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class DiceRollRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 8901;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public dice: number = 0;
	public faces: number = 0;
	public channel: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return DiceRollRequestMessage.protocolId;
    }

    public isEndpointClient()
    {
        return DiceRollRequestMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return DiceRollRequestMessage.endpointServer;
    }

    public initDiceRollRequestMessage(dice: number = 0, faces: number = 0, channel: number = 0): DiceRollRequestMessage
    {
        this.dice = dice;
        this.faces = faces;
        this.channel = channel;
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
        this.serializeAs_DiceRollRequestMessage(output);
    }

    public serializeAs_DiceRollRequestMessage(output: ICustomDataOutput)
    {
        if(this.dice < 0)
        {
            throw new Error("Forbidden value (" + this.dice + ") on element dice.");
        }
        output.writeVarInt(this.dice);
        if(this.faces < 0)
        {
            throw new Error("Forbidden value (" + this.faces + ") on element faces.");
        }
        output.writeVarInt(this.faces);
        output.writeByte(this.channel);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_DiceRollRequestMessage(input);
    }

    private deserializeAs_DiceRollRequestMessage(input: ICustomDataInput)
    {
        this._diceFunc(input);
        this._facesFunc(input);
        this._channelFunc(input);
    }

    private _diceFunc(input: ICustomDataInput)
    {
        this.dice = input.readVarUhInt();
        if(this.dice < 0)
        {
            throw new Error("Forbidden value (" + this.dice + ") on element of DiceRollRequestMessage.dice.");
        }
    }

    private _facesFunc(input: ICustomDataInput)
    {
        this.faces = input.readVarUhInt();
        if(this.faces < 0)
        {
            throw new Error("Forbidden value (" + this.faces + ") on element of DiceRollRequestMessage.faces.");
        }
    }

    private _channelFunc(input: ICustomDataInput)
    {
        this.channel = input.readByte();
        if(this.channel < 0)
        {
            throw new Error("Forbidden value (" + this.channel + ") on element of DiceRollRequestMessage.channel.");
        }
    }

}