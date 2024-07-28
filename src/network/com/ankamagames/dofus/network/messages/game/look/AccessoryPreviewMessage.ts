import { EntityLook } from "./../../../types/game/look/EntityLook";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class AccessoryPreviewMessage extends NetworkMessage
{

	public static readonly protocolId: number = 1503;

	public look: EntityLook;

    public constructor()
    {
        super();
        this.look = new EntityLook();
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
        this.deserializeAs_AccessoryPreviewMessage(input);
    }

    private deserializeAs_AccessoryPreviewMessage(input: ICustomDataInput)
    {
        this.look = new EntityLook();
        this.look.deserialize(input);
    }

}