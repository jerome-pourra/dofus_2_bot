import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class ContactLookRequestMessage extends NetworkMessage
{

	public static readonly protocolId: number = 7562;

	public requestId: number = 0;
	public contactType: number = 0;

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
        this.deserializeAs_ContactLookRequestMessage(input);
    }

    private deserializeAs_ContactLookRequestMessage(input: ICustomDataInput)
    {
        this._requestIdFunc(input);
        this._contactTypeFunc(input);
    }

    private _requestIdFunc(input: ICustomDataInput)
    {
        this.requestId = input.readUnsignedByte();
        if(this.requestId < 0 || this.requestId > 255)
        {
            throw new Error("Forbidden value (" + this.requestId + ") on element of ContactLookRequestMessage.requestId.");
        }
    }

    private _contactTypeFunc(input: ICustomDataInput)
    {
        this.contactType = input.readByte();
        if(this.contactType < 0)
        {
            throw new Error("Forbidden value (" + this.contactType + ") on element of ContactLookRequestMessage.contactType.");
        }
    }

}