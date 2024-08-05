import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class InteractiveUseRequestMessage extends NetworkMessage
{

	public static readonly protocolId: number = 1424;

	public elemId: number = 0;
	public skillInstanceUid: number = 0;

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
        this.deserializeAs_InteractiveUseRequestMessage(input);
    }

    private deserializeAs_InteractiveUseRequestMessage(input: ICustomDataInput)
    {
        this._elemIdFunc(input);
        this._skillInstanceUidFunc(input);
    }

    private _elemIdFunc(input: ICustomDataInput)
    {
        this.elemId = input.readVarUhInt();
        if(this.elemId < 0)
        {
            throw new Error("Forbidden value (" + this.elemId + ") on element of InteractiveUseRequestMessage.elemId.");
        }
    }

    private _skillInstanceUidFunc(input: ICustomDataInput)
    {
        this.skillInstanceUid = input.readVarUhInt();
        if(this.skillInstanceUid < 0)
        {
            throw new Error("Forbidden value (" + this.skillInstanceUid + ") on element of InteractiveUseRequestMessage.skillInstanceUid.");
        }
    }

}