import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class NotificationByServerMessage extends NetworkMessage
{

	public static readonly protocolId: number = 3884;

	public id: number = 0;
	public parameters: Array<string>;
	public forceOpen: boolean = false;

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
        this.deserializeAs_NotificationByServerMessage(input);
    }

    private deserializeAs_NotificationByServerMessage(input: ICustomDataInput)
    {
        let _val2: string;
        this._idFunc(input);
        let _parametersLen: number = input.readUnsignedShort();
        for(let _i2: number = 0; _i2 < _parametersLen; _i2++)
        {
            _val2 = String(input.readUTF());
            this.parameters.push(_val2);
        }
        this._forceOpenFunc(input);
    }

    private _idFunc(input: ICustomDataInput)
    {
        this.id = input.readVarUhShort();
        if(this.id < 0)
        {
            throw new Error("Forbidden value (" + this.id + ") on element of NotificationByServerMessage.id.");
        }
    }

    private _forceOpenFunc(input: ICustomDataInput)
    {
        this.forceOpen = input.readBoolean();
    }

}