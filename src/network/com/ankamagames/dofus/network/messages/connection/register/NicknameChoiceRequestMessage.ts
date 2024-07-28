import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class NicknameChoiceRequestMessage extends NetworkMessage
{

	public static readonly protocolId: number = 4608;

	public nickname: string = "";

    public constructor()
    {
        super();
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