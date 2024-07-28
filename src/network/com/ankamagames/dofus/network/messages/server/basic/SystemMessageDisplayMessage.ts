import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class SystemMessageDisplayMessage extends NetworkMessage
{

	public static readonly protocolId: number = 5943;

	public hangUp: boolean = false;
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
        this.deserializeAs_SystemMessageDisplayMessage(input);
    }

    private deserializeAs_SystemMessageDisplayMessage(input: ICustomDataInput)
    {
        let _val3: string;
        this._hangUpFunc(input);
        this._msgIdFunc(input);
        let _parametersLen: number = input.readUnsignedShort();
        for(let _i3: number = 0; _i3 < _parametersLen; _i3++)
        {
            _val3 = String(input.readUTF());
            this.parameters.push(_val3);
        }
    }

    private _hangUpFunc(input: ICustomDataInput)
    {
        this.hangUp = input.readBoolean();
    }

    private _msgIdFunc(input: ICustomDataInput)
    {
        this.msgId = input.readVarUhShort();
        if(this.msgId < 0)
        {
            throw new Error("Forbidden value (" + this.msgId + ") on element of SystemMessageDisplayMessage.msgId.");
        }
    }

}