import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class GameFightTurnStartMessage extends NetworkMessage
{

	public static readonly protocolId: number = 217;

	public id: number = 0;
	public waitTime: number = 0;

    public constructor()
    {
        super();
    }

    public override pack(output: ICustomDataOutput)
    {

    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
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