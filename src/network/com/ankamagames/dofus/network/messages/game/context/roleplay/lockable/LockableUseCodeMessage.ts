import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class LockableUseCodeMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 3147;

	public code: string = "";

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return LockableUseCodeMessage.protocolId;
    }

    public initLockableUseCodeMessage(code: string = ""): LockableUseCodeMessage
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
        this.serializeAs_LockableUseCodeMessage(output);
    }

    public serializeAs_LockableUseCodeMessage(output: ICustomDataOutput)
    {
        output.writeUTF(this.code);
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