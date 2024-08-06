import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class LockableChangeCodeMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 9751;

	public code: string = "";

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return LockableChangeCodeMessage.protocolId;
    }

    public initLockableChangeCodeMessage(code: string = ""): LockableChangeCodeMessage
    {
        this.code = code;
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
        this.serializeAs_LockableChangeCodeMessage(output);
    }

    public serializeAs_LockableChangeCodeMessage(output: ICustomDataOutput)
    {
        output.writeUTF(this.code);
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