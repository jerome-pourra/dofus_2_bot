import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class GameMapMovementMessage extends NetworkMessage
{

	public static readonly protocolId: number = 6493;

	public keyMovements: Array<number>;
	public forcedDirection: number = 0;
	public actorId: number = 0;

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
        this.deserializeAs_GameMapMovementMessage(input);
    }

    private deserializeAs_GameMapMovementMessage(input: ICustomDataInput)
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
        this._forcedDirectionFunc(input);
        this._actorIdFunc(input);
    }

    private _forcedDirectionFunc(input: ICustomDataInput)
    {
        this.forcedDirection = input.readShort();
    }

    private _actorIdFunc(input: ICustomDataInput)
    {
        this.actorId = input.readDouble();
        if(this.actorId < -9007199254740992 || this.actorId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.actorId + ") on element of GameMapMovementMessage.actorId.");
        }
    }

}