import { AbstractGameActionMessage } from "./../AbstractGameActionMessage";
import { EntityLook } from "./../../../../types/game/look/EntityLook";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";

export class GameActionFightChangeLookMessage extends AbstractGameActionMessage
{

	public static readonly protocolId: number = 1629;

	public targetId: number = 0;
	public entityLook: EntityLook;

    public constructor()
    {
        super();
        this.entityLook = new EntityLook();
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
        this.deserializeAs_GameActionFightChangeLookMessage(input);
    }

    private deserializeAs_GameActionFightChangeLookMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._targetIdFunc(input);
        this.entityLook = new EntityLook();
        this.entityLook.deserialize(input);
    }

    private _targetIdFunc(input: ICustomDataInput)
    {
        this.targetId = input.readDouble();
        if(this.targetId < -9007199254740992 || this.targetId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.targetId + ") on element of GameActionFightChangeLookMessage.targetId.");
        }
    }

}