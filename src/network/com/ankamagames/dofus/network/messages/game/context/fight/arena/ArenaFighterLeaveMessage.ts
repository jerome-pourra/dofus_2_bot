import { CharacterBasicMinimalInformations } from "./../../../../../types/game/character/CharacterBasicMinimalInformations";
import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class ArenaFighterLeaveMessage extends NetworkMessage
{

	public static readonly protocolId: number = 3724;

	public leaver: CharacterBasicMinimalInformations;

    public constructor()
    {
        super();
        this.leaver = new CharacterBasicMinimalInformations();
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
        this.deserializeAs_ArenaFighterLeaveMessage(input);
    }

    private deserializeAs_ArenaFighterLeaveMessage(input: ICustomDataInput)
    {
        this.leaver = new CharacterBasicMinimalInformations();
        this.leaver.deserialize(input);
    }

}