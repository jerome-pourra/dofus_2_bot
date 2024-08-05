import { CustomDataWrapper } from "./../../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../../jerakine/network/NetworkMessage";

export class AllianceApplicationDeletedMessage extends NetworkMessage
{

	public static readonly protocolId: number = 8801;

	public deleted: boolean = false;

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
        this.deserializeAs_AllianceApplicationDeletedMessage(input);
    }

    private deserializeAs_AllianceApplicationDeletedMessage(input: ICustomDataInput)
    {
        this._deletedFunc(input);
    }

    private _deletedFunc(input: ICustomDataInput)
    {
        this.deleted = input.readBoolean();
    }

}