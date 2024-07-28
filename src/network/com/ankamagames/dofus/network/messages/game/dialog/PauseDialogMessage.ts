import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class PauseDialogMessage extends NetworkMessage
{

	public static readonly protocolId: number = 3238;

	public dialogType: number = 0;

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
        this.deserializeAs_PauseDialogMessage(input);
    }

    private deserializeAs_PauseDialogMessage(input: ICustomDataInput)
    {
        this._dialogTypeFunc(input);
    }

    private _dialogTypeFunc(input: ICustomDataInput)
    {
        this.dialogType = input.readByte();
        if(this.dialogType < 0)
        {
            throw new Error("Forbidden value (" + this.dialogType + ") on element of PauseDialogMessage.dialogType.");
        }
    }

}