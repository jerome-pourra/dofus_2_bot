import { CharacterBasicMinimalInformations } from "./../../../../../types/game/character/CharacterBasicMinimalInformations";
import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class ArenaFighterLeaveMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 3724;

	public leaver: CharacterBasicMinimalInformations;

    public constructor()
    {
        super();
        this.leaver = new CharacterBasicMinimalInformations();
    }

    public getMessageId()
    {
        return ArenaFighterLeaveMessage.protocolId;
    }

    public initArenaFighterLeaveMessage(leaver: CharacterBasicMinimalInformations = null): ArenaFighterLeaveMessage
    {
        this.leaver = leaver;
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
        this.serializeAs_ArenaFighterLeaveMessage(output);
    }

    public serializeAs_ArenaFighterLeaveMessage(output: ICustomDataOutput)
    {
        this.leaver.serializeAs_CharacterBasicMinimalInformations(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ArenaFighterLeaveMessage(input);
    }

    private deserializeAs_ArenaFighterLeaveMessage(input: ICustomDataInput)
    {
        this.leaver = new CharacterBasicMinimalInformations();
        this.leaver.deserialize(input);
    }

}