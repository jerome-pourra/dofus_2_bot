import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class LivingObjectMessageRequestMessage extends NetworkMessage
{

	public static readonly protocolId: number = 5726;

	public msgId: number = 0;
	public parameters: Array<string>;
	public livingObject: number = 0;

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
        this.deserializeAs_LivingObjectMessageRequestMessage(input);
    }

    private deserializeAs_LivingObjectMessageRequestMessage(input: ICustomDataInput)
    {
        let _val2: string;
        this._msgIdFunc(input);
        let _parametersLen: number = input.readUnsignedShort();
        for(let _i2: number = 0; _i2 < _parametersLen; _i2++)
        {
            _val2 = String(input.readUTF());
            this.parameters.push(_val2);
        }
        this._livingObjectFunc(input);
    }

    private _msgIdFunc(input: ICustomDataInput)
    {
        this.msgId = input.readVarUhShort();
        if(this.msgId < 0)
        {
            throw new Error("Forbidden value (" + this.msgId + ") on element of LivingObjectMessageRequestMessage.msgId.");
        }
    }

    private _livingObjectFunc(input: ICustomDataInput)
    {
        this.livingObject = input.readVarUhInt();
        if(this.livingObject < 0)
        {
            throw new Error("Forbidden value (" + this.livingObject + ") on element of LivingObjectMessageRequestMessage.livingObject.");
        }
    }

}