import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class CharacterLoadingCompleteMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 605;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return CharacterLoadingCompleteMessage.protocolId;
    }

    public initCharacterLoadingCompleteMessage(): CharacterLoadingCompleteMessage
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
        this.serializeAs_CharacterLoadingCompleteMessage(output);
    }

    public serializeAs_CharacterLoadingCompleteMessage(output: ICustomDataOutput)
    {

    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_CharacterLoadingCompleteMessage(input);
    }

    private deserializeAs_CharacterLoadingCompleteMessage(input: ICustomDataInput)
    {

    }

}