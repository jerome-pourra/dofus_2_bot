import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class CharacterCreationResultMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 5979;

	public result: number = 1;
	public reason: number = 1;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return CharacterCreationResultMessage.protocolId;
    }

    public initCharacterCreationResultMessage(result: number = 1, reason: number = 1): CharacterCreationResultMessage
    {
        this.result = result;
        this.reason = reason;
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
        this.serializeAs_CharacterCreationResultMessage(output);
    }

    public serializeAs_CharacterCreationResultMessage(output: ICustomDataOutput)
    {
        output.writeByte(this.result);
        output.writeByte(this.reason);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_CharacterCreationResultMessage(input);
    }

    private deserializeAs_CharacterCreationResultMessage(input: ICustomDataInput)
    {
        this._resultFunc(input);
        this._reasonFunc(input);
    }

    private _resultFunc(input: ICustomDataInput)
    {
        this.result = input.readByte();
        if(this.result < 0)
        {
            throw new Error("Forbidden value (" + this.result + ") on element of CharacterCreationResultMessage.result.");
        }
    }

    private _reasonFunc(input: ICustomDataInput)
    {
        this.reason = input.readByte();
        if(this.reason < 0)
        {
            throw new Error("Forbidden value (" + this.reason + ") on element of CharacterCreationResultMessage.reason.");
        }
    }

}