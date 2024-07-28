import { MountClientData } from "./../../../../types/game/mount/MountClientData";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class MountDataMessage extends NetworkMessage
{

	public static readonly protocolId: number = 137;

	public mountData: MountClientData;

    public constructor()
    {
        super();
        this.mountData = new MountClientData();
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
        this.deserializeAs_MountDataMessage(input);
    }

    private deserializeAs_MountDataMessage(input: ICustomDataInput)
    {
        this.mountData = new MountClientData();
        this.mountData.deserialize(input);
    }

}