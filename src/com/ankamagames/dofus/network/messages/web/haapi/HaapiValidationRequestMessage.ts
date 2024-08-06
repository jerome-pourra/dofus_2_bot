import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class HaapiValidationRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 2930;

	public transaction: string = "";

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return HaapiValidationRequestMessage.protocolId;
    }

    public initHaapiValidationRequestMessage(transaction: string = ""): HaapiValidationRequestMessage
    {
        this.transaction = transaction;
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
        this.serializeAs_HaapiValidationRequestMessage(output);
    }

    public serializeAs_HaapiValidationRequestMessage(output: ICustomDataOutput)
    {
        output.writeUTF(this.transaction);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_HaapiValidationRequestMessage(input);
    }

    private deserializeAs_HaapiValidationRequestMessage(input: ICustomDataInput)
    {
        this._transactionFunc(input);
    }

    private _transactionFunc(input: ICustomDataInput)
    {
        this.transaction = input.readUTF();
    }

}