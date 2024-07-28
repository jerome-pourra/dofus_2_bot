import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class GameFightOptionStateUpdateMessage extends NetworkMessage
{

	public static readonly protocolId: number = 3172;

	public fightId: number = 0;
	public teamId: number = 2;
	public option: number = 3;
	public state: boolean = false;

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
        this.deserializeAs_GameFightOptionStateUpdateMessage(input);
    }

    private deserializeAs_GameFightOptionStateUpdateMessage(input: ICustomDataInput)
    {
        this._fightIdFunc(input);
        this._teamIdFunc(input);
        this._optionFunc(input);
        this._stateFunc(input);
    }

    private _fightIdFunc(input: ICustomDataInput)
    {
        this.fightId = input.readVarUhShort();
        if(this.fightId < 0)
        {
            throw new Error("Forbidden value (" + this.fightId + ") on element of GameFightOptionStateUpdateMessage.fightId.");
        }
    }

    private _teamIdFunc(input: ICustomDataInput)
    {
        this.teamId = input.readByte();
        if(this.teamId < 0)
        {
            throw new Error("Forbidden value (" + this.teamId + ") on element of GameFightOptionStateUpdateMessage.teamId.");
        }
    }

    private _optionFunc(input: ICustomDataInput)
    {
        this.option = input.readByte();
        if(this.option < 0)
        {
            throw new Error("Forbidden value (" + this.option + ") on element of GameFightOptionStateUpdateMessage.option.");
        }
    }

    private _stateFunc(input: ICustomDataInput)
    {
        this.state = input.readBoolean();
    }

}