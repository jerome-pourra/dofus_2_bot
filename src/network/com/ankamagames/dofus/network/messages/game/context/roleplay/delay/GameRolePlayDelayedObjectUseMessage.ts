import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { GameRolePlayDelayedActionMessage } from "./GameRolePlayDelayedActionMessage";

export class GameRolePlayDelayedObjectUseMessage extends GameRolePlayDelayedActionMessage
{

	public static readonly protocolId: number = 3110;

	public objectGID: number = 0;

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
        this.deserializeAs_GameRolePlayDelayedObjectUseMessage(input);
    }

    private deserializeAs_GameRolePlayDelayedObjectUseMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._objectGIDFunc(input);
    }

    private _objectGIDFunc(input: ICustomDataInput)
    {
        this.objectGID = input.readVarUhInt();
        if(this.objectGID < 0)
        {
            throw new Error("Forbidden value (" + this.objectGID + ") on element of GameRolePlayDelayedObjectUseMessage.objectGID.");
        }
    }

}