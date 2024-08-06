import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class GameFightTurnEndMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 7900;

	public id: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return GameFightTurnEndMessage.protocolId;
    }

    public initGameFightTurnEndMessage(id: number = 0): GameFightTurnEndMessage
    {
        this.id = id;
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
        this.serializeAs_GameFightTurnEndMessage(output);
    }

    public serializeAs_GameFightTurnEndMessage(output: ICustomDataOutput)
    {
        if(this.id < -9007199254740992 || this.id > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.id + ") on element id.");
        }
        output.writeDouble(this.id);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameFightTurnEndMessage(input);
    }

    private deserializeAs_GameFightTurnEndMessage(input: ICustomDataInput)
    {
        this._idFunc(input);
    }

    private _idFunc(input: ICustomDataInput)
    {
        this.id = input.readDouble();
        if(this.id < -9007199254740992 || this.id > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.id + ") on element of GameFightTurnEndMessage.id.");
        }
    }

}