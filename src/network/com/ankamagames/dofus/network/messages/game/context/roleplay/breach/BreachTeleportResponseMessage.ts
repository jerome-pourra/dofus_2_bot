import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class BreachTeleportResponseMessage extends NetworkMessage
{

	public static readonly protocolId: number = 1178;

	public teleported: boolean = false;

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