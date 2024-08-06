import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class LockableStateUpdateAbstractMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 107;

	public locked: boolean = false;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return LockableStateUpdateAbstractMessage.protocolId;
    }

    public initLockableStateUpdateAbstractMessage(locked: boolean = false): LockableStateUpdateAbstractMessage
    {
        this.locked = locked;
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
        this.serializeAs_LockableStateUpdateAbstractMessage(output);
    }

    public serializeAs_LockableStateUpdateAbstractMessage(output: ICustomDataOutput)
    {
        output.writeBoolean(this.locked);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_LockableStateUpdateAbstractMessage(input);
    }

    private deserializeAs_LockableStateUpdateAbstractMessage(input: ICustomDataInput)
    {
        this._lockedFunc(input);
    }

    private _lockedFunc(input: ICustomDataInput)
    {
        this.locked = input.readBoolean();
    }

}