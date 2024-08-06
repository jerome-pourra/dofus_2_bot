import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class GameMapMovementMessage extends NetworkMessage implements INetworkMessage
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

    public getMessageId()
    {
        return GameMapMovementMessage.protocolId;
    }

    public initGameMapMovementMessage(keyMovements: Array<number> = null, forcedDirection: number = 0, actorId: number = 0): GameMapMovementMessage
    {
        this.keyMovements = keyMovements;
        this.forcedDirection = forcedDirection;
        this.actorId = actorId;
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
        this.serializeAs_GameMapMovementMessage(output);
    }

    public serializeAs_GameMapMovementMessage(output: ICustomDataOutput)
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
        output.writeShort(this.forcedDirection);
        if(this.actorId < -9007199254740992 || this.actorId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.actorId + ") on element actorId.");
        }
        output.writeDouble(this.actorId);
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