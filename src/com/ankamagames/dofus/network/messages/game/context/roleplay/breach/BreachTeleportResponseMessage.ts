import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class BreachTeleportResponseMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 1178;

	public teleported: boolean = false;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return BreachTeleportResponseMessage.protocolId;
    }

    public initBreachTeleportResponseMessage(teleported: boolean = false): BreachTeleportResponseMessage
    {
        this.teleported = teleported;
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
        this.serializeAs_BreachTeleportResponseMessage(output);
    }

    public serializeAs_BreachTeleportResponseMessage(output: ICustomDataOutput)
    {
        output.writeBoolean(this.teleported);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_BreachTeleportResponseMessage(input);
    }

    private deserializeAs_BreachTeleportResponseMessage(input: ICustomDataInput)
    {
        this._teleportedFunc(input);
    }

    private _teleportedFunc(input: ICustomDataInput)
    {
        this.teleported = input.readBoolean();
    }

}