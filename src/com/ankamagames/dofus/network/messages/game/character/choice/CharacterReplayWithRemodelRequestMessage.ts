import { CharacterReplayRequestMessage } from "./../replay/CharacterReplayRequestMessage";
import { RemodelingInformation } from "./../../../../types/game/character/choice/RemodelingInformation";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";

export class CharacterReplayWithRemodelRequestMessage extends CharacterReplayRequestMessage implements INetworkMessage
{

	public static readonly protocolId: number = 338;

	public remodel: RemodelingInformation;

    public constructor()
    {
        super();
        this.remodel = new RemodelingInformation();
    }

    public getMessageId()
    {
        return CharacterReplayWithRemodelRequestMessage.protocolId;
    }

    public initCharacterReplayWithRemodelRequestMessage(characterId: number = 0, remodel: RemodelingInformation = null): CharacterReplayWithRemodelRequestMessage
    {
        super.initCharacterReplayRequestMessage(characterId);
        this.remodel = remodel;
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
        this.serializeAs_CharacterReplayWithRemodelRequestMessage(output);
    }

    public serializeAs_CharacterReplayWithRemodelRequestMessage(output: ICustomDataOutput)
    {
        super.serializeAs_CharacterReplayRequestMessage(output);
        this.remodel.serializeAs_RemodelingInformation(output);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_CharacterReplayWithRemodelRequestMessage(input);
    }

    private deserializeAs_CharacterReplayWithRemodelRequestMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this.remodel = new RemodelingInformation();
        this.remodel.deserialize(input);
    }

}