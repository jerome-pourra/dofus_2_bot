import { PrismGeolocalizedInformation } from "./../../../types/game/prism/PrismGeolocalizedInformation";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class PrismAttackResultMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 8541;

	public prism: PrismGeolocalizedInformation;
	public result: number = 0;

    public constructor()
    {
        super();
        this.prism = new PrismGeolocalizedInformation();
    }

    public getMessageId()
    {
        return PrismAttackResultMessage.protocolId;
    }

    public initPrismAttackResultMessage(prism: PrismGeolocalizedInformation = null, result: number = 0): PrismAttackResultMessage
    {
        this.prism = prism;
        this.result = result;
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
        this.serializeAs_PrismAttackResultMessage(output);
    }

    public serializeAs_PrismAttackResultMessage(output: ICustomDataOutput)
    {
        this.prism.serializeAs_PrismGeolocalizedInformation(output);
        output.writeByte(this.result);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_PrismAttackResultMessage(input);
    }

    private deserializeAs_PrismAttackResultMessage(input: ICustomDataInput)
    {
        this.prism = new PrismGeolocalizedInformation();
        this.prism.deserialize(input);
        this._resultFunc(input);
    }

    private _resultFunc(input: ICustomDataInput)
    {
        this.result = input.readByte();
        if(this.result < 0)
        {
            throw new Error("Forbidden value (" + this.result + ") on element of PrismAttackResultMessage.result.");
        }
    }

}