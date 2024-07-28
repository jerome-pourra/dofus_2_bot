import { AbstractGameActionMessage } from "./../AbstractGameActionMessage";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";

export class GameActionFightLifePointsLostMessage extends AbstractGameActionMessage
{

	public static readonly protocolId: number = 6444;

	public targetId: number = 0;
	public loss: number = 0;
	public permanentDamages: number = 0;
	public elementId: number = 0;

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
        this.deserializeAs_GameActionFightLifePointsLostMessage(input);
    }

    private deserializeAs_GameActionFightLifePointsLostMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._targetIdFunc(input);
        this._lossFunc(input);
        this._permanentDamagesFunc(input);
        this._elementIdFunc(input);
    }

    private _targetIdFunc(input: ICustomDataInput)
    {
        this.targetId = input.readDouble();
        if(this.targetId < -9007199254740992 || this.targetId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.targetId + ") on element of GameActionFightLifePointsLostMessage.targetId.");
        }
    }

    private _lossFunc(input: ICustomDataInput)
    {
        this.loss = input.readVarUhInt();
        if(this.loss < 0)
        {
            throw new Error("Forbidden value (" + this.loss + ") on element of GameActionFightLifePointsLostMessage.loss.");
        }
    }

    private _permanentDamagesFunc(input: ICustomDataInput)
    {
        this.permanentDamages = input.readVarUhInt();
        if(this.permanentDamages < 0)
        {
            throw new Error("Forbidden value (" + this.permanentDamages + ") on element of GameActionFightLifePointsLostMessage.permanentDamages.");
        }
    }

    private _elementIdFunc(input: ICustomDataInput)
    {
        this.elementId = input.readVarInt();
    }

}