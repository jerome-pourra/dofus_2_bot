import { CustomDataWrapper } from "./../../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../../jerakine/network/NetworkMessage";

export class GameRolePlayArenaUnregisterMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 326;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return GameRolePlayArenaUnregisterMessage.protocolId;
    }

    public initGameRolePlayArenaUnregisterMessage(): GameRolePlayArenaUnregisterMessage
    {
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
        this.serializeAs_GameRolePlayArenaUnregisterMessage(output);
    }

    public serializeAs_GameRolePlayArenaUnregisterMessage(output: ICustomDataOutput)
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameRolePlayArenaUnregisterMessage(input);
    }

    private deserializeAs_GameRolePlayArenaUnregisterMessage(input: ICustomDataInput)
    {

    }

}