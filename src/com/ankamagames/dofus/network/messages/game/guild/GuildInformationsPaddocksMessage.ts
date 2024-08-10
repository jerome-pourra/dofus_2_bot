import { PaddockContentInformations } from "./../../../types/game/paddock/PaddockContentInformations";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class GuildInformationsPaddocksMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 7168;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public nbPaddockMax: number = 0;
	public paddocksInformations: Array<PaddockContentInformations>;

    public constructor()
    {
        super();
        this.paddocksInformations = Array<PaddockContentInformations>();
    }

    public getMessageId()
    {
        return GuildInformationsPaddocksMessage.protocolId;
    }

    public isEndpointClient()
    {
        return GuildInformationsPaddocksMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return GuildInformationsPaddocksMessage.endpointServer;
    }

    public initGuildInformationsPaddocksMessage(nbPaddockMax: number = 0, paddocksInformations: Array<PaddockContentInformations> = null): GuildInformationsPaddocksMessage
    {
        this.nbPaddockMax = nbPaddockMax;
        this.paddocksInformations = paddocksInformations;
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
        this.serializeAs_GuildInformationsPaddocksMessage(output);
    }

    public serializeAs_GuildInformationsPaddocksMessage(output: ICustomDataOutput)
    {
        if(this.nbPaddockMax < 0)
        {
            throw new Error("Forbidden value (" + this.nbPaddockMax + ") on element nbPaddockMax.");
        }
        output.writeByte(this.nbPaddockMax);
        output.writeShort(this.paddocksInformations.length);
        for(var _i2: number = 0; _i2 < this.paddocksInformations.length; _i2++)
        {
            (this.paddocksInformations[_i2] as PaddockContentInformations).serializeAs_PaddockContentInformations(output);
        }
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GuildInformationsPaddocksMessage(input);
    }

    private deserializeAs_GuildInformationsPaddocksMessage(input: ICustomDataInput)
    {
        let _item2: PaddockContentInformations;
        this._nbPaddockMaxFunc(input);
        let _paddocksInformationsLen: number = input.readUnsignedShort();
        for(let _i2: number = 0; _i2 < _paddocksInformationsLen; _i2++)
        {
            _item2 = new PaddockContentInformations();
            _item2.deserialize(input);
            this.paddocksInformations.push(_item2);
        }
    }

    private _nbPaddockMaxFunc(input: ICustomDataInput)
    {
        this.nbPaddockMax = input.readByte();
        if(this.nbPaddockMax < 0)
        {
            throw new Error("Forbidden value (" + this.nbPaddockMax + ") on element of GuildInformationsPaddocksMessage.nbPaddockMax.");
        }
    }

}