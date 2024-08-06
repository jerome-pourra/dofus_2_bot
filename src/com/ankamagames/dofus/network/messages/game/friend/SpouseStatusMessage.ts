import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class SpouseStatusMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 8361;

	public hasSpouse: boolean = false;

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return SpouseStatusMessage.protocolId;
    }

    public initSpouseStatusMessage(hasSpouse: boolean = false): SpouseStatusMessage
    {
        this.hasSpouse = hasSpouse;
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
        this.serializeAs_SpouseStatusMessage(output);
    }

    public serializeAs_SpouseStatusMessage(output: ICustomDataOutput)
    {
        output.writeBoolean(this.hasSpouse);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_SpouseStatusMessage(input);
    }

    private deserializeAs_SpouseStatusMessage(input: ICustomDataInput)
    {
        this._hasSpouseFunc(input);
    }

    private _hasSpouseFunc(input: ICustomDataInput)
    {
        this.hasSpouse = input.readBoolean();
    }

}