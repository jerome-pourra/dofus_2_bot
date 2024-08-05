import { PaddockContentInformations } from "./../../../types/game/paddock/PaddockContentInformations";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class GuildInformationsPaddocksMessage extends NetworkMessage
{

	public static readonly protocolId: number = 7168;

	public nbPaddockMax: number = 0;
	public paddocksInformations: Array<PaddockContentInformations>;

    public constructor()
    {
        super();
        this.paddocksInformations = Array<PaddockContentInformations>();
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