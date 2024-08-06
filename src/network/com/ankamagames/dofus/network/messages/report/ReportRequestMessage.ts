import { CustomDataWrapper } from "./../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../jerakine/network/NetworkMessage";

export class ReportRequestMessage extends NetworkMessage implements INetworkMessage
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

    public getMessageId()
    {
        return ReportRequestMessage.protocolId;
    }

    public initReportRequestMessage(targetId: number = 0, categories: Array<number> = null, description: string = ""): ReportRequestMessage
    {
        this.targetId = targetId;
        this.categories = categories;
        this.description = description;
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
        this.serializeAs_ReportRequestMessage(output);
    }

    public serializeAs_ReportRequestMessage(output: ICustomDataOutput)
    {
        if(this.targetId < -9007199254740992 || this.targetId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.targetId + ") on element targetId.");
        }
        output.writeDouble(this.targetId);
        output.writeShort(this.categories.length);
        for(var _i2: number = 0; _i2 < this.categories.length; _i2++)
        {
            output.writeByte(this.categories[_i2]);
        }
        output.writeUTF(this.description);
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