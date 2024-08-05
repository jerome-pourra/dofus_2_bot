import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class GameFightJoinRequestMessage extends NetworkMessage
{

	public static readonly protocolId: number = 4010;

	public fighterId: number = 0;
	public fightId: number = 0;

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
        this.deserializeAs_GameFightJoinRequestMessage(input);
    }

    private deserializeAs_GameFightJoinRequestMessage(input: ICustomDataInput)
    {
        this._fighterIdFunc(input);
        this._fightIdFunc(input);
    }

    private _fighterIdFunc(input: ICustomDataInput)
    {
        this.fighterId = input.readDouble();
        if(this.fighterId < -9007199254740992 || this.fighterId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.fighterId + ") on element of GameFightJoinRequestMessage.fighterId.");
        }
    }

    private _fightIdFunc(input: ICustomDataInput)
    {
        this.fightId = input.readVarUhShort();
        if(this.fightId < 0)
        {
            throw new Error("Forbidden value (" + this.fightId + ") on element of GameFightJoinRequestMessage.fightId.");
        }
    }

}