import { CustomDataWrapper } from "./../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../jerakine/network/NetworkMessage";

export class ReportRequestMessage extends NetworkMessage
{

	public static readonly protocolId: number = 8254;

	public targetId: number = 0;
	public categories: Array<number>;
	public description: string = "";

    public constructor()
    {
        super();
        this.categories = Array<number>();
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
        this.deserializeAs_ReportRequestMessage(input);
    }

    private deserializeAs_ReportRequestMessage(input: ICustomDataInput)
    {
        let _val2: number = 0;
        this._targetIdFunc(input);
        let _categoriesLen: number = input.readUnsignedShort();
        for(let _i2: number = 0; _i2 < _categoriesLen; _i2++)
        {
            _val2 = input.readByte();
            if(_val2 < 0)
            {
                throw new Error("Forbidden value (" + _val2 + ") on elements of categories.");
            }
            this.categories.push(_val2);
        }
        this._descriptionFunc(input);
    }

    private _targetIdFunc(input: ICustomDataInput)
    {
        this.targetId = input.readDouble();
        if(this.targetId < -9007199254740992 || this.targetId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.targetId + ") on element of ReportRequestMessage.targetId.");
        }
    }

    private _descriptionFunc(input: ICustomDataInput)
    {
        this.description = input.readUTF();
    }

}