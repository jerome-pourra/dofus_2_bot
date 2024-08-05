import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class GameMapMovementRequestMessage extends NetworkMessage
{

	public static readonly protocolId: number = 4548;

	public keyMovements: Array<number>;
	public mapId: number = 0;

    public constructor()
    {
        super();
        this.keyMovements = Array<number>();
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