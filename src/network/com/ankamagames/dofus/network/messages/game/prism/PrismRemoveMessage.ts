import { PrismGeolocalizedInformation } from "./../../../types/game/prism/PrismGeolocalizedInformation";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class PrismRemoveMessage extends NetworkMessage
{

	public static readonly protocolId: number = 4672;

	public prism: PrismGeolocalizedInformation;

    public constructor()
    {
        super();
        this.prism = new PrismGeolocalizedInformation();
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
        this.deserializeAs_PrismRemoveMessage(input);
    }

    private deserializeAs_PrismRemoveMessage(input: ICustomDataInput)
    {
        this.prism = new PrismGeolocalizedInformation();
        this.prism.deserialize(input);
    }

}