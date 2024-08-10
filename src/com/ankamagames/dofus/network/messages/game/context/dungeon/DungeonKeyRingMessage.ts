import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class DungeonKeyRingMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 6819;

	public static readonly endpointClient: boolean = true;
	public static readonly endpointServer: boolean = false;

	public availables: Array<number>;
	public unavailables: Array<number>;

    public constructor()
    {
        super();
        this.availables = Array<number>();
        this.unavailables = Array<number>();
    }

    public getMessageId()
    {
        return DungeonKeyRingMessage.protocolId;
    }

    public isEndpointClient()
    {
        return DungeonKeyRingMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return DungeonKeyRingMessage.endpointServer;
    }

    public initDungeonKeyRingMessage(availables: Array<number> = null, unavailables: Array<number> = null): DungeonKeyRingMessage
    {
        this.availables = availables;
        this.unavailables = unavailables;
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
        this.serializeAs_DungeonKeyRingMessage(output);
    }

    public serializeAs_DungeonKeyRingMessage(output: ICustomDataOutput)
    {
        output.writeShort(this.availables.length);
        for(var _i1: number = 0; _i1 < this.availables.length; _i1++)
        {
            if(this.availables[_i1] < 0)
            {
                throw new Error("Forbidden value (" + this.availables[_i1] + ") on element 1 (starting at 1) of availables.");
            }
            output.writeVarShort(this.availables[_i1]);
        }
        output.writeShort(this.unavailables.length);
        for(var _i2: number = 0; _i2 < this.unavailables.length; _i2++)
        {
            if(this.unavailables[_i2] < 0)
            {
                throw new Error("Forbidden value (" + this.unavailables[_i2] + ") on element 2 (starting at 1) of unavailables.");
            }
            output.writeVarShort(this.unavailables[_i2]);
        }
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_DungeonKeyRingMessage(input);
    }

    private deserializeAs_DungeonKeyRingMessage(input: ICustomDataInput)
    {
        let _val1: number = 0;
        let _val2: number = 0;
        let _availablesLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _availablesLen; _i1++)
        {
            _val1 = input.readVarUhShort();
            if(_val1 < 0)
            {
                throw new Error("Forbidden value (" + _val1 + ") on elements of availables.");
            }
            this.availables.push(_val1);
        }
        let _unavailablesLen: number = input.readUnsignedShort();
        for(let _i2: number = 0; _i2 < _unavailablesLen; _i2++)
        {
            _val2 = input.readVarUhShort();
            if(_val2 < 0)
            {
                throw new Error("Forbidden value (" + _val2 + ") on elements of unavailables.");
            }
            this.unavailables.push(_val2);
        }
    }

}