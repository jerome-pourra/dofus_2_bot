import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class ExchangeMountSterilizeFromPaddockMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 7996;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public name: string = "";
	public worldX: number = 0;
	public worldY: number = 0;
	public sterilizator: string = "";

    public constructor()
    {
        super();
    }

    public getMessageId()
    {
        return ExchangeMountSterilizeFromPaddockMessage.protocolId;
    }

    public isEndpointClient()
    {
        return ExchangeMountSterilizeFromPaddockMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return ExchangeMountSterilizeFromPaddockMessage.endpointServer;
    }

    public initExchangeMountSterilizeFromPaddockMessage(name: string = "", worldX: number = 0, worldY: number = 0, sterilizator: string = ""): ExchangeMountSterilizeFromPaddockMessage
    {
        this.name = name;
        this.worldX = worldX;
        this.worldY = worldY;
        this.sterilizator = sterilizator;
        return this;
    }

    public override pack(output: ICustomDataOutput)
    {
        let data: CustomDataWrapper = new CustomDataWrapper();
        this.serialize(data);
        this.isEndpointClient() ? this.writePacketClient(output, this.getMessageId(), data) : this.writePacketServer(output, this.getMessageId(), data);
    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_ExchangeMountSterilizeFromPaddockMessage(output);
    }

    public serializeAs_ExchangeMountSterilizeFromPaddockMessage(output: ICustomDataOutput)
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
        output.writeUTF(this.sterilizator);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_ExchangeMountSterilizeFromPaddockMessage(input);
    }

    private deserializeAs_ExchangeMountSterilizeFromPaddockMessage(input: ICustomDataInput)
    {
        this._nameFunc(input);
        this._worldXFunc(input);
        this._worldYFunc(input);
        this._sterilizatorFunc(input);
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
            throw new Error("Forbidden value (" + this.worldX + ") on element of ExchangeMountSterilizeFromPaddockMessage.worldX.");
        }
    }

    private _worldYFunc(input: ICustomDataInput)
    {
        this.worldY = input.readShort();
        if(this.worldY < -255 || this.worldY > 255)
        {
            throw new Error("Forbidden value (" + this.worldY + ") on element of ExchangeMountSterilizeFromPaddockMessage.worldY.");
        }
    }

    private _sterilizatorFunc(input: ICustomDataInput)
    {
        this.sterilizator = input.readUTF();
    }

}