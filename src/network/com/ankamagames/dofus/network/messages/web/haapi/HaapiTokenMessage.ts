import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class HaapiTokenMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 4627;

	public token: string = "";

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return HaapiTokenMessage.protocolId;
    }

    public initHaapiTokenMessage(token: string = ""): HaapiTokenMessage
    {
        this.token = token;
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
        this.serializeAs_HaapiTokenMessage(output);
    }

    public serializeAs_HaapiTokenMessage(output: ICustomDataOutput)
    {
        output.writeUTF(this.token);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_HaapiTokenMessage(input);
    }

    private deserializeAs_HaapiTokenMessage(input: ICustomDataInput)
    {
        this._tokenFunc(input);
    }

    private _tokenFunc(input: ICustomDataInput)
    {
        this.token = input.readUTF();
    }

}