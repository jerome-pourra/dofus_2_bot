import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ExchangeMountFreeFromPaddockMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 4615;

	public name: string = "";
	public worldX: number = 0;
	public worldY: number = 0;
	public liberator: string = "";

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ExchangeMountFreeFromPaddockMessage.protocolId;
    }

    public initExchangeMountFreeFromPaddockMessage(name: string = "", worldX: number = 0, worldY: number = 0, liberator: string = ""): ExchangeMountFreeFromPaddockMessage
    {
        this.name = name;
        this.worldX = worldX;
        this.worldY = worldY;
        this.liberator = liberator;
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
        this.serializeAs_ExchangeMountFreeFromPaddockMessage(output);
    }

    public serializeAs_ExchangeMountFreeFromPaddockMessage(output: ICustomDataOutput)
    {
        output.writeUTF(this.name);
        if(this.worldX < -255 || this.worldX > 255)
        {
            throw new Error("Forbidden value (" + this.worldX + ") on element worldX.");
        }
        output.writeShort(this.worldX);
        if(this.worldY < -255 || this.worldY > 255)
        {
            throw new Error("Forbidden value (" + this.worldY + ") on element worldY.");
        }
        output.writeShort(this.worldY);
        output.writeUTF(this.liberator);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ExchangeMountFreeFromPaddockMessage(input);
    }

    private deserializeAs_ExchangeMountFreeFromPaddockMessage(input: ICustomDataInput)
    {
        this._nameFunc(input);
        this._worldXFunc(input);
        this._worldYFunc(input);
        this._liberatorFunc(input);
    }

    private _nameFunc(input: ICustomDataInput)
    {
        this.name = input.readUTF();
    }

    private _worldXFunc(input: ICustomDataInput)
    {
        this.worldX = input.readShort();
        if(this.worldX < -255 || this.worldX > 255)
        {
            throw new Error("Forbidden value (" + this.worldX + ") on element of ExchangeMountFreeFromPaddockMessage.worldX.");
        }
    }

    private _worldYFunc(input: ICustomDataInput)
    {
        this.worldY = input.readShort();
        if(this.worldY < -255 || this.worldY > 255)
        {
            throw new Error("Forbidden value (" + this.worldY + ") on element of ExchangeMountFreeFromPaddockMessage.worldY.");
        }
    }

    private _liberatorFunc(input: ICustomDataInput)
    {
        this.liberator = input.readUTF();
    }

}