import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class TextInformationMessage extends NetworkMessage
{

	public static readonly protocolId: number = 3766;

	public msgType: number = 0;
	public msgId: number = 0;
	public parameters: Array<string>;

    public constructor()
    {
        super();
        this.parameters = Array<string>();
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
        this.deserializeAs_TextInformationMessage(input);
    }

    private deserializeAs_TextInformationMessage(input: ICustomDataInput)
    {
        let _val3: string;
        this._msgTypeFunc(input);
        this._msgIdFunc(input);
        let _parametersLen: number = input.readUnsignedShort();
        for(let _i3: number = 0; _i3 < _parametersLen; _i3++)
        {
            _val3 = String(input.readUTF());
            this.parameters.push(_val3);
        }
    }

    private _msgTypeFunc(input: ICustomDataInput)
    {
        this.msgType = input.readByte();
        if(this.msgType < 0)
        {
            throw new Error("Forbidden value (" + this.msgType + ") on element of TextInformationMessage.msgType.");
        }
    }

    private _msgIdFunc(input: ICustomDataInput)
    {
        this.msgId = input.readVarUhShort();
        if(this.msgId < 0)
        {
            throw new Error("Forbidden value (" + this.msgId + ") on element of TextInformationMessage.msgId.");
        }
    }

}