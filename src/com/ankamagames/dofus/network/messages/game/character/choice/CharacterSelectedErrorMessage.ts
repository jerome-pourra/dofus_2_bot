import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class CharacterSelectedErrorMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 1596;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return CharacterSelectedErrorMessage.protocolId;
    }

    public initCharacterSelectedErrorMessage(): CharacterSelectedErrorMessage
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
        this.serializeAs_CharacterSelectedErrorMessage(output);
    }

    public serializeAs_CharacterSelectedErrorMessage(output: ICustomDataOutput)
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_CharacterSelectedErrorMessage(input);
    }

    private deserializeAs_CharacterSelectedErrorMessage(input: ICustomDataInput)
    {

    }

}