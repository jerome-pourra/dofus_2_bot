import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class HavenBagFurnituresRequestMessage extends NetworkMessage
{

	public static readonly protocolId: number = 5127;

	public cellIds: Array<number>;
	public funitureIds: Array<number>;
	public orientations: Array<number>;

    public constructor()
    {
        super();
        this.cellIds = Array<number>();
        this.funitureIds = Array<number>();
        this.orientations = Array<number>();
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
        this.deserializeAs_HavenBagFurnituresRequestMessage(input);
    }

    private deserializeAs_HavenBagFurnituresRequestMessage(input: ICustomDataInput)
    {
        let _val1: number = 0;
        let _val2: number = 0;
        let _val3: number = 0;
        let _cellIdsLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _cellIdsLen; _i1++)
        {
            _val1 = input.readVarUhShort();
            if(_val1 < 0)
            {
                throw new Error("Forbidden value (" + _val1 + ") on elements of cellIds.");
            }
            this.cellIds.push(_val1);
        }
        let _funitureIdsLen: number = input.readUnsignedShort();
        for(let _i2: number = 0; _i2 < _funitureIdsLen; _i2++)
        {
            _val2 = input.readInt();
            this.funitureIds.push(_val2);
        }
        let _orientationsLen: number = input.readUnsignedShort();
        for(let _i3: number = 0; _i3 < _orientationsLen; _i3++)
        {
            _val3 = input.readByte();
            if(_val3 < 0)
            {
                throw new Error("Forbidden value (" + _val3 + ") on elements of orientations.");
            }
            this.orientations.push(_val3);
        }
    }

}