import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../../jerakine/network/NetworkMessage";

export class HavenBagFurnituresRequestMessage extends NetworkMessage implements INetworkMessage
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

    public getMessageId()
    {
        return HavenBagFurnituresRequestMessage.protocolId;
    }

    public initHavenBagFurnituresRequestMessage(cellIds: Array<number> = null, funitureIds: Array<number> = null, orientations: Array<number> = null): HavenBagFurnituresRequestMessage
    {
        this.cellIds = cellIds;
        this.funitureIds = funitureIds;
        this.orientations = orientations;
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
        this.serializeAs_HavenBagFurnituresRequestMessage(output);
    }

    public serializeAs_HavenBagFurnituresRequestMessage(output: ICustomDataOutput)
    {
        output.writeShort(this.cellIds.length);
        for(var _i1: number = 0; _i1 < this.cellIds.length; _i1++)
        {
            if(this.cellIds[_i1] < 0)
            {
                throw new Error("Forbidden value (" + this.cellIds[_i1] + ") on element 1 (starting at 1) of cellIds.");
            }
            output.writeVarShort(this.cellIds[_i1]);
        }
        output.writeShort(this.funitureIds.length);
        for(var _i2: number = 0; _i2 < this.funitureIds.length; _i2++)
        {
            output.writeInt(this.funitureIds[_i2]);
        }
        output.writeShort(this.orientations.length);
        for(var _i3: number = 0; _i3 < this.orientations.length; _i3++)
        {
            if(this.orientations[_i3] < 0)
            {
                throw new Error("Forbidden value (" + this.orientations[_i3] + ") on element 3 (starting at 1) of orientations.");
            }
            output.writeByte(this.orientations[_i3]);
        }
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