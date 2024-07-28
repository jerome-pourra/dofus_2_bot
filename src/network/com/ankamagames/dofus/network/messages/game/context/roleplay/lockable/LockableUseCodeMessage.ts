import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class LockableUseCodeMessage extends NetworkMessage
{

	public static readonly protocolId: number = 3147;

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
        this.deserializeAs_LockableUseCodeMessage(input);
    }

    private deserializeAs_LockableUseCodeMessage(input: ICustomDataInput)
    {
        this._codeFunc(input);
    }

    private _codeFunc(input: ICustomDataInput)
    {
        this.code = input.readUTF();
    }

}