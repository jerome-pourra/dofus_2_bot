import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class LockableChangeCodeMessage extends NetworkMessage
{

	public static readonly protocolId: number = 9751;

	public code: string = "";

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
        this.deserializeAs_LockableChangeCodeMessage(input);
    }

    private deserializeAs_LockableChangeCodeMessage(input: ICustomDataInput)
    {
        this._codeFunc(input);
    }

    private _codeFunc(input: ICustomDataInput)
    {
        this.code = input.readUTF();
    }

}