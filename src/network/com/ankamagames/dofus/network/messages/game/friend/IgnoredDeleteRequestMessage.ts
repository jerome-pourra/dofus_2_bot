import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class IgnoredDeleteRequestMessage extends NetworkMessage
{

	public static readonly protocolId: number = 7645;

	public accountId: number = 0;
	public session: boolean = false;

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
        this.deserializeAs_IgnoredDeleteRequestMessage(input);
    }

    private deserializeAs_IgnoredDeleteRequestMessage(input: ICustomDataInput)
    {
        this._accountIdFunc(input);
        this._sessionFunc(input);
    }

    private _accountIdFunc(input: ICustomDataInput)
    {
        this.accountId = input.readInt();
        if(this.accountId < 0)
        {
            throw new Error("Forbidden value (" + this.accountId + ") on element of IgnoredDeleteRequestMessage.accountId.");
        }
    }

    private _sessionFunc(input: ICustomDataInput)
    {
        this.session = input.readBoolean();
    }

}