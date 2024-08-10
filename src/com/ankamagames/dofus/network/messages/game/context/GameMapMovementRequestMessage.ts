import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class GameMapMovementRequestMessage extends NetworkMessage implements INetworkMessage
{

	public static readonly protocolId: number = 4548;

	public static readonly endpointClient: boolean = false;
	public static readonly endpointServer: boolean = true;

	public keyMovements: Array<number>;
	public mapId: number = 0;

    public constructor()
    {
        super();
        this.keyMovements = Array<number>();
    }

    public getMessageId()
    {
        return GameMapMovementRequestMessage.protocolId;
    }

    public isEndpointClient()
    {
        return GameMapMovementRequestMessage.endpointClient;
    }

    public isEndpointServer()
    {
        return GameMapMovementRequestMessage.endpointServer;
    }

    public initGameMapMovementRequestMessage(keyMovements: Array<number> = null, mapId: number = 0): GameMapMovementRequestMessage
    {
        this.keyMovements = keyMovements;
        this.mapId = mapId;
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
        this.serializeAs_GameMapMovementRequestMessage(output);
    }

    public serializeAs_GameMapMovementRequestMessage(output: ICustomDataOutput)
    {
        output.writeShort(this.keyMovements.length);
        for(var _i1: number = 0; _i1 < this.keyMovements.length; _i1++)
        {
            if(this.keyMovements[_i1] < 0)
            {
                throw new Error("Forbidden value (" + this.keyMovements[_i1] + ") on element 1 (starting at 1) of keyMovements.");
            }
            output.writeShort(this.keyMovements[_i1]);
        }
        if(this.mapId < 0 || this.mapId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.mapId + ") on element mapId.");
        }
        output.writeDouble(this.mapId);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_GameMapMovementRequestMessage(input);
    }

    private deserializeAs_GameMapMovementRequestMessage(input: ICustomDataInput)
    {
        let _val1: number = 0;
        let _keyMovementsLen: number = input.readUnsignedShort();
        for(let _i1: number = 0; _i1 < _keyMovementsLen; _i1++)
        {
            _val1 = input.readShort();
            if(_val1 < 0)
            {
                throw new Error("Forbidden value (" + _val1 + ") on elements of keyMovements.");
            }
            this.keyMovements.push(_val1);
        }
        this._mapIdFunc(input);
    }

    private _mapIdFunc(input: ICustomDataInput)
    {
        this.mapId = input.readDouble();
        if(this.mapId < 0 || this.mapId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.mapId + ") on element of GameMapMovementRequestMessage.mapId.");
        }
    }

}