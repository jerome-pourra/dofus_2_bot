import { CustomDataWrapper } from "./../../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../../jerakine/network/INetworkMessage";
import { LockableStateUpdateAbstractMessage } from "./LockableStateUpdateAbstractMessage";

export class LockableStateUpdateStorageMessage extends LockableStateUpdateAbstractMessage
{

	public static readonly protocolId: number = 569;

	public mapId: number = 0;
	public elementId: number = 0;

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
        this.deserializeAs_LockableStateUpdateStorageMessage(input);
    }

    private deserializeAs_LockableStateUpdateStorageMessage(input: ICustomDataInput)
    {
        super.deserialize(input);
        this._mapIdFunc(input);
        this._elementIdFunc(input);
    }

    private _mapIdFunc(input: ICustomDataInput)
    {
        this.mapId = input.readDouble();
        if(this.mapId < 0 || this.mapId > 9007199254740992)
        {
            throw new Error("Forbidden value (" + this.mapId + ") on element of LockableStateUpdateStorageMessage.mapId.");
        }
    }

    private _elementIdFunc(input: ICustomDataInput)
    {
        this.elementId = input.readVarUhInt();
        if(this.elementId < 0)
        {
            throw new Error("Forbidden value (" + this.elementId + ") on element of LockableStateUpdateStorageMessage.elementId.");
        }
    }

}