import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { GameRolePlayDelayedActionMessage } from "./GameRolePlayDelayedActionMessage";

export class GameRolePlayDelayedObjectUseMessage extends GameRolePlayDelayedActionMessage implements INetworkMessage
{

	public static readonly protocolId: number = 3110;

	public objectGID: number = 0;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return GameRolePlayDelayedObjectUseMessage.protocolId;
    }

    public initGameRolePlayDelayedObjectUseMessage(delayedCharacterId: number = 0, delayTypeId: number = 0, delayEndTime: number = 0, objectGID: number = 0): GameRolePlayDelayedObjectUseMessage
    {
        super.initGameRolePlayDelayedActionMessage(delayedCharacterId,delayTypeId,delayEndTime);
        this.objectGID = objectGID;
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
        this.serializeAs_GameRolePlayDelayedObjectUseMessage(output);
    }

    public serializeAs_GameRolePlayDelayedObjectUseMessage(output: ICustomDataOutput)
    {
        super.serializeAs_GameRolePlayDelayedActionMessage(output);
        if(this.objectGID < 0)
        {
            throw new Error("Forbidden value (" + this.objectGID + ") on element objectGID.");
        }
        output.writeVarInt(this.objectGID);
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