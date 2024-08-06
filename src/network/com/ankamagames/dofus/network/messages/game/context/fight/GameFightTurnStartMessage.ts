import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class GameFightTurnStartMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 217;

	public id: number = 0;
	public waitTime: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return GameFightTurnStartMessage.protocolId;
    }

    public initGameFightTurnStartMessage(id: number = 0, waitTime: number = 0): GameFightTurnStartMessage
    {
        this.id = id;
        this.waitTime = waitTime;
        return this;
    }

    public override pack(output: ICustomDataOutput)
    {
        let data: CustomDataWrapper = new CustomDataWrapper();
        this.serialize(data);
        this.writePacket(output, this.getMessageId(), data);
    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_GameFightTurnStartMessage(output);
    }

    public serializeAs_GameFightTurnStartMessage(output: ICustomDataOutput)
    {
        if(this.id < -9007199254740992 || this.id > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.id + ") on element id.");
        }
        output.writeDouble(this.id);
        if(this.waitTime < 0)
        {
            throw new Error("Forbidden value (" + this.waitTime + ") on element waitTime.");
        }
        output.writeVarInt(this.waitTime);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameFightTurnStartMessage(input);
    }

    private deserializeAs_GameFightTurnStartMessage(input: ICustomDataInput)
    {
        this._idFunc(input);
        this._waitTimeFunc(input);
    }

    private _idFunc(input: ICustomDataInput)
    {
        this.id = input.readDouble();
        if(this.id < -9007199254740992 || this.id > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.id + ") on element of GameFightTurnStartMessage.id.");
        }
    }

    private _waitTimeFunc(input: ICustomDataInput)
    {
        this.waitTime = input.readVarUhInt();
        if(this.waitTime < 0)
        {
            throw new Error("Forbidden value (" + this.waitTime + ") on element of GameFightTurnStartMessage.waitTime.");
        }
    }

}