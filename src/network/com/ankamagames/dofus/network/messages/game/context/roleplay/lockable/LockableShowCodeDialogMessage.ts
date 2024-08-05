import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class LockableShowCodeDialogMessage extends NetworkMessage
{

	public static readonly protocolId: number = 9268;

	public changeOrUse: boolean = false;
	public codeSize: number = 0;

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
        this.deserializeAs_LockableShowCodeDialogMessage(input);
    }

    private deserializeAs_LockableShowCodeDialogMessage(input: ICustomDataInput)
    {
        this._changeOrUseFunc(input);
        this._codeSizeFunc(input);
    }

    private _changeOrUseFunc(input: ICustomDataInput)
    {
        this.changeOrUse = input.readBoolean();
    }

    private _codeSizeFunc(input: ICustomDataInput)
    {
        this.codeSize = input.readByte();
        if(this.codeSize < 0)
        {
            throw new Error("Forbidden value (" + this.codeSize + ") on element of LockableShowCodeDialogMessage.codeSize.");
        }
    }

}