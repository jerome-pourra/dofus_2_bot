import { CustomDataWrapper } from "./../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../jerakine/network/NetworkMessage";

export class PaginationRequestAbstractMessage extends NetworkMessage
{

	public static readonly protocolId: number = 6633;

	public offset: number = 0;
	public count: number = 0;

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
        this.deserializeAs_PaginationRequestAbstractMessage(input);
    }

    private deserializeAs_PaginationRequestAbstractMessage(input: ICustomDataInput)
    {
        this._offsetFunc(input);
        this._countFunc(input);
    }

    private _offsetFunc(input: ICustomDataInput)
    {
        this.offset = input.readDouble();
        if(this.offset < 0 || this.offset > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.offset + ") on element of PaginationRequestAbstractMessage.offset.");
        }
    }

    private _countFunc(input: ICustomDataInput)
    {
        this.count = input.readUnsignedInt();
        if(this.count < 0 || this.count > 4294967295)
        {
            throw new Error("Forbidden value (" + this.count + ") on element of PaginationRequestAbstractMessage.count.");
        }
    }

}