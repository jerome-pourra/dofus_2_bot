import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class NicknameChoiceRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 4608;

	public nickname: string = "";

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return NicknameChoiceRequestMessage.protocolId;
    }

    public initNicknameChoiceRequestMessage(nickname: string = ""): NicknameChoiceRequestMessage
    {
        this.nickname = nickname;
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
        this.serializeAs_NicknameChoiceRequestMessage(output);
    }

    public serializeAs_NicknameChoiceRequestMessage(output: ICustomDataOutput)
    {
        output.writeUTF(this.nickname);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_NicknameChoiceRequestMessage(input);
    }

    private deserializeAs_NicknameChoiceRequestMessage(input: ICustomDataInput)
    {
        this._nicknameFunc(input);
    }

    private _nicknameFunc(input: ICustomDataInput)
    {
        this.nickname = input.readUTF();
    }

}