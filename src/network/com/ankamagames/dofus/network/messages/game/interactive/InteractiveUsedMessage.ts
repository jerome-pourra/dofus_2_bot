import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class InteractiveUsedMessage extends NetworkMessage
{

	public static readonly protocolId: number = 3900;

	public entityId: number = 0;
	public elemId: number = 0;
	public skillId: number = 0;
	public duration: number = 0;
	public canMove: boolean = false;

    public constructor()
    {
        super();
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
        this.deserializeAs_InteractiveUsedMessage(input);
    }

    private deserializeAs_InteractiveUsedMessage(input: ICustomDataInput)
    {
        this._entityIdFunc(input);
        this._elemIdFunc(input);
        this._skillIdFunc(input);
        this._durationFunc(input);
        this._canMoveFunc(input);
    }

    private _entityIdFunc(input: ICustomDataInput)
    {
        this.entityId = input.readVarUhLong();
        if(this.entityId < 0 || this.entityId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.entityId + ") on element of InteractiveUsedMessage.entityId.");
        }
    }

    private _elemIdFunc(input: ICustomDataInput)
    {
        this.elemId = input.readVarUhInt();
        if(this.elemId < 0)
        {
            throw new Error("Forbidden value (" + this.elemId + ") on element of InteractiveUsedMessage.elemId.");
        }
    }

    private _skillIdFunc(input: ICustomDataInput)
    {
        this.skillId = input.readVarUhShort();
        if(this.skillId < 0)
        {
            throw new Error("Forbidden value (" + this.skillId + ") on element of InteractiveUsedMessage.skillId.");
        }
    }

    private _durationFunc(input: ICustomDataInput)
    {
        this.duration = input.readVarUhShort();
        if(this.duration < 0)
        {
            throw new Error("Forbidden value (" + this.duration + ") on element of InteractiveUsedMessage.duration.");
        }
    }

    private _canMoveFunc(input: ICustomDataInput)
    {
        this.canMove = input.readBoolean();
    }

}