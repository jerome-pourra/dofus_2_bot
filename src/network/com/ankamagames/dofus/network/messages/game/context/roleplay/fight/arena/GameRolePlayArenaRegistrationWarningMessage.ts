import { CustomDataWrapper } from "./../../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../../jerakine/network/NetworkMessage";

export class GameRolePlayArenaRegistrationWarningMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 8542;

	public battleMode: number = 3;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return GameRolePlayArenaRegistrationWarningMessage.protocolId;
    }

    public initGameRolePlayArenaRegistrationWarningMessage(battleMode: number = 3): GameRolePlayArenaRegistrationWarningMessage
    {
        this.battleMode = battleMode;
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
        this.serializeAs_GameRolePlayArenaRegistrationWarningMessage(output);
    }

    public serializeAs_GameRolePlayArenaRegistrationWarningMessage(output: ICustomDataOutput)
    {
        output.writeInt(this.battleMode);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameRolePlayArenaRegistrationWarningMessage(input);
    }

    private deserializeAs_GameRolePlayArenaRegistrationWarningMessage(input: ICustomDataInput)
    {
        this._battleModeFunc(input);
    }

    private _battleModeFunc(input: ICustomDataInput)
    {
        this.battleMode = input.readInt();
        if(this.battleMode < 0)
        {
            throw new Error("Forbidden value (" + this.battleMode + ") on element of GameRolePlayArenaRegistrationWarningMessage.battleMode.");
        }
    }

}