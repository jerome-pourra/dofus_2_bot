import { AlterationInfo } from "./../../../../types/game/character/alteration/AlterationInfo";
import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class AlterationRemovedMessage extends NetworkMessage
{

	public static readonly protocolId: number = 9284;

	public alteration: AlterationInfo;

    public constructor()
    {
        super();
        this.alteration = new AlterationInfo();
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
        this.deserializeAs_AlterationRemovedMessage(input);
    }

    private deserializeAs_AlterationRemovedMessage(input: ICustomDataInput)
    {
        this.alteration = new AlterationInfo();
        this.alteration.deserialize(input);
    }

}